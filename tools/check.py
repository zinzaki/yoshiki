#!/usr/bin/env python3
"""yoshiki check — the invariants a build cannot see.

`tools/build.py --check` proves the generated files still match canon. This
proves the things around them: that the showcase carries no palette of its own,
that every link in the repository resolves, and that the pages agree on their
own navigation.

    python3 tools/check.py
"""
import re, sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
fails: list[str] = []


def fail(msg):
    fails.append(msg)


# ── 1 · the showcase holds no colour of its own ─────────────────────────
# palette.css and palette.data.js are generated; kit.css is the shipped
# artifact, mirrored. Everything else on the site must reach for a role.
HEX = re.compile(r"#[0-9a-fA-F]{3,8}\b")
HAND_WRITTEN = ["site.css", "site.js"] + [p.name for p in sorted((DOCS / "assets").glob("page-*.js"))]
for name in HAND_WRITTEN:
    f = DOCS / "assets" / name
    for i, line in enumerate(f.read_text().splitlines(), 1):
        if "data:image/svg+xml" in line:      # the grain tile carries no palette
            continue
        for hit in HEX.findall(line):
            fail(f"{f.relative_to(ROOT)}:{i} — hard-coded colour {hit}; consume a --r-* role")

# the shipped effects were once dark-theme-only rgba literals; they are roles now
for fx in sorted((ROOT / "library" / "effects").glob("*.css")):
    for i, line in enumerate(fx.read_text().splitlines(), 1):
        if "data:image/svg+xml" in line:
            continue
        for hit in HEX.findall(line):
            fail(f"{fx.relative_to(ROOT)}:{i} — {hit}; an effect must reach for a role too")

# the kit may name the two colours canon says are not tokens of a theme:
# the terminal island, which never inverts. Nothing else.
kit = (ROOT / "library" / "web" / "yoshiki.css").read_text()
allowed_kit = {"#0B0A08", "#362C1B", "#F7EED2", "#EDE3C4", "#96886B",
               "#776A51", "#D8AF52", "#8FAC6F", "#D6685D", "#6FA08E", "#C67F45"}
for i, line in enumerate(kit.splitlines(), 1):
    for hit in HEX.findall(line):
        if hit not in allowed_kit:
            fail(f"library/web/yoshiki.css:{i} — {hit} is not part of the terminal island; use a role")

# ── 1b · a hex written by hand must still be a colour the palette has ───
# This is the drift that hides: an example config, a prompt module or a README
# quoting a value that canon has since moved. It reads correct and is wrong.
import yaml
live = set()
for slug in ("kogane", "washi"):
    pal = yaml.safe_load((ROOT / "canon" / "palette" / slug / "palette.yml").read_text())
    live |= {v.upper() for v in pal.get("tokens", {}).values()}
    live |= {v.upper() for v in pal.get("base24", {}).values()}
    term = pal.get("terminal", {})
    for key in ("background", "foreground", "cursor", "selection_background"):
        if key in term:
            live.add(term[key].upper())
    live |= {c.upper() for c in term.get("ansi", []) + term.get("brights", [])}
live |= {"#FFFFFF", "#000000"}          # the pure ends, named as themselves

HAND = [ROOT / "library" / "configs", ROOT / "library" / "snippets",
        ROOT / "library" / "github", ROOT / "library" / "presets",
        ROOT / "library" / "image-prompts", ROOT / "canon"]
SKIP_NAMES = {"palette.yml", "CONTRAST.md"}
for base in HAND:
    for f in sorted(base.rglob("*")):
        if not f.is_file() or f.suffix in {".json", ".css"} or f.name in SKIP_NAMES:
            continue
        for i, line in enumerate(f.read_text(errors="ignore").splitlines(), 1):
            for hit in HEX.findall(line):
                if len(hit) == 7 and hit.upper() not in live:
                    fail(f"{f.relative_to(ROOT)}:{i} — {hit} is not a value canon still has "
                         f"(stale copy of a token?)")

# ── 2 · every link in the site resolves ─────────────────────────────────
pages = sorted(DOCS.glob("*.html"))
if not pages:
    fail("docs/ has no pages")
for page in pages:
    html = page.read_text()
    for attr in re.findall(r'(?:href|src)="([^"]+)"', html):
        if attr.startswith(("http", "mailto:", "#", "data:")):
            continue
        target = (page.parent / attr.split("#")[0]).resolve()
        if not target.exists():
            fail(f"docs/{page.name} — dead reference to {attr}")

# ── 3 · the pages agree on their own navigation ─────────────────────────
def nav_of(html):
    block = re.search(r'<nav class="nav".*?</nav>', html, re.S)
    return re.findall(r'href="([^"]+)"', block.group(0)) if block else None

navs = {p.name: nav_of(p.read_text()) for p in pages}
missing = [n for n, v in navs.items() if not v]
for n in missing:
    fail(f"docs/{n} — no site navigation")
distinct = {tuple(v) for v in navs.values() if v}
if len(distinct) > 1:
    fail(f"docs/ — the pages disagree on the navigation: {sorted(distinct)}")
for name, links in navs.items():
    if links and name != "index.html" and name not in links:
        fail(f"docs/{name} — the navigation never links to this page")

# ── 4 · every relative markdown link in the repo resolves ───────────────
MD_LINK = re.compile(r"\[[^\]]*\]\(([^)]+)\)")
FENCE = re.compile(r"```.*?```", re.S)
SPAN = re.compile(r"`[^`\n]*`")


def prose(text: str) -> str:
    """Links inside code samples are examples, not references."""
    return SPAN.sub("", FENCE.sub("", text))


for md in sorted(ROOT.rglob("*.md")):
    if ".git" in md.parts:
        continue
    for target in MD_LINK.findall(prose(md.read_text())):
        target = target.split("#")[0].strip()
        if not target or target.startswith(("http", "mailto:", "#")):
            continue
        if not (md.parent / target).exists():
            fail(f"{md.relative_to(ROOT)} — dead link to {target}")

# ── 5 · llms.txt still points at real files ─────────────────────────────
for target in MD_LINK.findall(prose((ROOT / "llms.txt").read_text())):
    target = target.split("#")[0].strip()
    if not target.startswith("http") and not (ROOT / target).exists():
        fail(f"llms.txt — dead link to {target}")


if fails:
    for f in fails:
        print(f)
    sys.exit(f"\n{len(fails)} problem(s).")
print(f"clean — {len(pages)} pages, no stray colour, every link resolves.")
