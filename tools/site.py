"""Build the yoshiki site: the showcase, the palette room and the component gallery.

Everything on the site is generated from the repository itself — palettes from
`canon/palettes`, components from `library/previews`, counts from the catalogue — so the
pages can never drift from what the library actually holds.

    python3 tools/site.py            # write docs/index.html, docs/palettes.html, docs/gallery.html
    python3 tools/site.py --check    # verify the committed pages match (CI)
"""
import importlib.util
import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
DOCS = ROOT / "docs"
PREVIEWS = ROOT / "library" / "previews"
CATALOGUE = ROOT / "workshop" / "refs" / "extract" / "catalogue.json"
CHECK = "--check" in sys.argv
drift: list[str] = []

spec = importlib.util.spec_from_file_location("build", ROOT / "tools" / "build.py")
assert spec and spec.loader
B = importlib.util.module_from_spec(spec)
spec.loader.exec_module(B)


# ── data ────────────────────────────────────────────────────────────────
def palettes() -> list[dict]:
    out, res = [], {}
    for slug in B.ORDER:
        raw = B.load(slug)
        res[slug] = pal = B.resolve(raw, res.get(raw.get("inherits", "")))
        hexv = lambda role: B.role_value(pal["roles"][role], pal["tokens"])[1]
        m, t = pal["meta"], pal["terminal"]
        out.append({
            "slug": slug, "name": m["name"], "code": m.get("code", ""), "family": m.get("family", m["name"]),
            "variant": m.get("variant", m["mode"]), "mode": m["mode"], "temp": m.get("temperature", ""),
            "mat": m.get("material", ""), "accent": m.get("accent", ""),
            "bg": hexv("bg.app"), "panel": hexv("bg.surface"), "raised": hexv("bg.raised"), "hover": hexv("bg.hover"),
            "line": hexv("border.hairline"), "strong": hexv("border.strong"), "ink": hexv("text.primary"),
            "head": hexv("text.heading"), "mu": hexv("text.muted"), "ghost": hexv("text.ghost"),
            "acc": hexv("accent.edge"), "accT": hexv("accent.text"), "sig": hexv("signal.fill"), "sigT": hexv("signal.text"),
            "ok": hexv("ok.text"), "warn": hexv("warn.text"),
            "kw": pal["tokens"]["syn-keyword"], "fn": pal["tokens"]["syn-function"], "str": pal["tokens"]["syn-string"],
            "num": pal["tokens"]["syn-number"], "com": pal["tokens"]["syn-comment"],
            "term": {"bg": t["background"], "fg": t["foreground"], "cur": t["cursor"], "ansi": t["ansi"], "br": t["brights"]},
        })
    return out


def components() -> list[dict]:
    meta = {}
    if CATALOGUE.exists():
        for i, it in enumerate(json.loads(CATALOGUE.read_text())["items"]):
            slug = re.sub(r"[^a-z0-9]+", "-", (it.get("name") or "").lower()).strip("-")[:40]
            meta[f"{it.get('ref','ref').replace('yk:ref/', 'r')}-{slug}-{i}"] = it
    out = []
    for f in sorted(PREVIEWS.rglob("*.html")):
        it = meta.get(f.stem, {})
        out.append({"id": f.stem, "name": it.get("name", f.stem.replace("w2-", "").replace("-", " ")),
                    "kind": it.get("kind", "object"), "register": it.get("register", f.parent.name),
                    "ref": it.get("ref", ""), "html": f.read_text().strip()})
    return out


def stats(comps, pals) -> dict:
    cat = json.loads(CATALOGUE.read_text()) if CATALOGUE.exists() else {"summary": {}}
    s = cat.get("summary", {})
    return {"palettes": len(pals), "components": len(comps), "catalogued": s.get("components", 0),
            "references": s.get("references", 0), "registers": len(s.get("registers", {})) or len({c["register"] for c in comps}),
            "kinds": s.get("kinds", {}), "matrix": s.get("registers", {})}


# ── shell ───────────────────────────────────────────────────────────────
CSS = """
:root{
  --ui:'Geist',system-ui,-apple-system,sans-serif; --mono:'Geist Mono',ui-monospace,monospace;
  --disp:'Noto Serif Display',Georgia,serif;
  --bg:#161410; --panel:#1D1B16; --raised:#24211C; --hover:#322E27; --line:#3A362E; --strong:#4E493F;
  --ink:#D6D2BD; --head:#EAE6D2; --mu:#9A9584; --ghost:#7E7A6E;
  --acc:#D8AF52; --accT:#D8AF52; --sig:#E3001B; --sigT:#FF6155; --ok:#AFC27A; --warn:#D98A55;
  --r-sm:6px; --r-md:10px; --r-lg:16px;
  --ease:cubic-bezier(.16,1,.3,1);
  color-scheme:dark;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{margin:0;background:var(--bg);color:var(--ink);font:16px/1.6 var(--ui);-webkit-font-smoothing:antialiased;
  transition:background .8s var(--ease),color .8s var(--ease);overflow-x:hidden}
@media (prefers-reduced-motion:reduce){html{scroll-behavior:auto}*{animation:none!important;transition:none!important}}
a{color:inherit}
button,select,input{font:inherit;color:inherit}
:focus-visible{outline:2px solid var(--acc);outline-offset:3px}
.gut{padding-inline:clamp(16px,4vw,72px)}
.in{max-width:1440px;margin:0 auto}
.grain{position:relative;isolation:isolate}
.grain::after{content:"";position:absolute;inset:0;z-index:2;pointer-events:none;opacity:.12;mix-blend-mode:overlay;
  background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='180' height='180'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 .5 0 0 0 0 .5 0 0 0 0 .5 0 0 0 1 0'/></filter><rect width='180' height='180' filter='url(%23n)'/></svg>")}

/* nav */
.nav{position:sticky;top:0;z-index:50;background:color-mix(in srgb,var(--bg) 82%,transparent);
  backdrop-filter:blur(16px) saturate(1.2);-webkit-backdrop-filter:blur(16px) saturate(1.2);border-bottom:1px solid var(--line)}
.nav .in{display:flex;align-items:center;gap:10px 26px;padding-block:12px;flex-wrap:wrap}
.mark{display:flex;align-items:center;gap:10px;font-weight:600;color:var(--head);text-decoration:none;letter-spacing:-.01em}
.mark i{width:22px;height:22px;border-radius:6px;background:var(--panel);box-shadow:inset 0 0 0 1px var(--line);position:relative}
.mark i::after{content:"";position:absolute;inset:6px;background:var(--acc)}
.nav a.lnk{color:var(--mu);text-decoration:none;font-size:14.5px;transition:color .2s}
.nav a.lnk:hover,.nav a.lnk[aria-current="page"]{color:var(--head)}
.nav .sp{flex:1}
.pals{display:flex;gap:4px;flex-wrap:wrap}
/* narrow screens: the bar keeps one line, the palette dots scroll instead of stacking */
@media (max-width:760px){
  .nav .in{flex-wrap:nowrap;gap:0 14px;padding-block:9px}
  .nav a.lnk{font-size:13.5px}
  .pals{flex-wrap:nowrap;overflow-x:auto;scrollbar-width:none;padding:3px 0;margin-left:auto;max-width:42vw}
  .pals::-webkit-scrollbar{display:none}
  .pals button{flex:0 0 auto;width:18px;height:18px}
  .ghbtn{padding:6px 11px;font-size:12px}
}
/* the phone keeps the links and the switcher; GitHub is in the footer anyway */
@media (max-width:520px){ .nav .in{gap:0 11px} .nav a.lnk{font-size:12.5px} .pals{max-width:30vw} .ghbtn{display:none} }
.pals button{width:20px;height:20px;border-radius:50%;border:0;cursor:pointer;position:relative;
  box-shadow:inset 0 0 0 1px rgba(255,255,255,.18);transition:transform .2s var(--ease)}
.pals button:hover{transform:translateY(-2px)}
.pals button[aria-pressed="true"]::after{content:"";position:absolute;inset:-4px;border-radius:50%;box-shadow:0 0 0 1px var(--acc)}
.ghbtn{border:1px solid var(--line);border-radius:999px;padding:7px 14px;font:500 13px var(--ui);color:var(--head);text-decoration:none}
.ghbtn:hover{border-color:var(--acc);color:var(--accT)}

/* type */
h1,h2,h3{margin:0;color:var(--head);letter-spacing:-.025em;font-family:var(--disp);font-weight:600}
h1{font-size:clamp(46px,7.4vw,124px);line-height:.92}
h2{font-size:clamp(32px,4.2vw,64px);line-height:1}
h3{font-size:22px;line-height:1.2;font-family:var(--ui);font-weight:600;letter-spacing:-.01em}
.kicker{font:500 11.5px var(--mono);letter-spacing:.28em;text-transform:uppercase;color:var(--mu);display:flex;align-items:center;gap:10px}
.kicker::before{content:"";width:8px;height:8px;background:var(--acc)}
.lede{color:var(--mu);font-size:clamp(16px,1.3vw,19px);max-width:62ch}
.lede b{color:var(--ink);font-weight:500}
section{padding-block:clamp(56px,7vw,110px);border-top:1px solid var(--line)}
section:first-of-type{border-top:0}
.head{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.1fr);gap:18px 56px;align-items:end;margin-bottom:38px}
@media (max-width:900px){.head{grid-template-columns:1fr}}

/* footer */
footer{border-top:1px solid var(--line);padding-block:44px 70px;color:var(--mu);font-size:14px}
footer .cols{display:flex;flex-wrap:wrap;gap:30px 64px;justify-content:space-between}
footer a{text-decoration:none;color:var(--mu)}
footer a:hover{color:var(--head)}
footer .mono{font:500 11px var(--mono);letter-spacing:.1em;color:var(--ghost)}
"""

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>'
         '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700'
         '&family=Geist+Mono:wght@400;500;600&family=Noto+Serif+Display:ital,wght@0,400;0,600;1,400&display=swap">')

NAV_LINKS = [("index.html", "Overview"), ("palettes.html", "Palettes"), ("gallery.html", "Components")]


def shell(title: str, page: str, body: str, extra_css: str = "", script: str = "", pals=None,
          base: str = "", initial: str = "") -> str:
    """`base` prefixes every in-site path (a page one directory down passes "../");
    `initial` is the palette the page opens in, whatever the visitor last chose."""
    links = "".join(f'<a class="lnk" href="{base}{h}"{" aria-current=\"page\"" if h == page else ""}>{t}</a>' for h, t in NAV_LINKS)
    dots = "".join(f'<button type="button" data-p="{p["slug"]}" title="{p["name"]} · {p["code"]}" aria-pressed="false" '
                   f'style="background:linear-gradient(135deg,{p["bg"]} 48%,{p["acc"]} 48%)"></button>' for p in (pals or []))
    return f"""<!doctype html>
<html lang="en" data-palette="night-beige">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>{title}</title>
<meta name="description" content="yoshiki — a design foundation: sixteen palettes, materials, objects and patterns, each rebuilt and provable.">
<link rel="icon" href="{base}assets/favicon.svg">
{FONTS}
<style>{CSS}{extra_css}</style>
</head>
<body>
<nav class="nav"><div class="in gut">
  <a class="mark" href="{base}index.html"><i></i>yoshiki</a>
  {links}
  <span class="sp"></span>
  <div class="pals" id="pals" aria-label="Palette">{dots}</div>
  <a class="ghbtn" href="https://github.com/zinzaki/yoshiki">GitHub</a>
</div></nav>
{body}
<footer class="gut"><div class="in cols">
  <div><div class="mono">YOSHIKI · A DESIGN FOUNDATION</div><p style="margin:10px 0 0;max-width:42ch">Palettes, materials, objects and patterns — generated from one source and proven on every build.</p></div>
  <div><div class="mono">REPOSITORY</div><p style="margin:10px 0 0"><a href="https://github.com/zinzaki/yoshiki">zinzaki/yoshiki</a><br><a href="https://github.com/zinzaki/yoshiki-themes">zinzaki/yoshiki-themes</a><br><a href="https://github.com/zinzaki/yoshiki/blob/main/AGENTS.md">AGENTS.md</a></p></div>
  <div><div class="mono">BUILD</div><p style="margin:10px 0 0">MIT · every page generated by <span style="font-family:var(--mono)">tools/site.py</span></p></div>
</div></footer>
<script>
(function(){{
  var PALS={json.dumps(pals or [], ensure_ascii=False)};
  var KEYS=['bg','panel','raised','hover','line','strong','ink','head','mu','ghost','acc','accT','sig','sigT','ok','warn','kw','fn','str','num','com'];
  function apply(p){{ var r=document.documentElement;
    KEYS.forEach(function(k){{ r.style.setProperty('--'+k,p[k]); }});
    r.style.setProperty('--term-bg',p.term.bg); r.style.setProperty('--term-fg',p.term.fg); r.style.setProperty('--term-cur',p.term.cur);
    r.dataset.palette=p.slug; r.style.setProperty('color-scheme',p.mode);
    document.querySelectorAll('#pals button').forEach(function(b){{ b.setAttribute('aria-pressed',String(b.dataset.p===p.slug)); }});
    document.querySelectorAll('[data-pal-name]').forEach(function(e){{ e.textContent=p.name; }});
    document.querySelectorAll('[data-pal-code]').forEach(function(e){{ e.textContent=p.code; }});
    document.querySelectorAll('[data-pal-meta]').forEach(function(e){{ e.textContent=p.temp+' · '+p.mat+' · '+p.accent; }});
    window.__pal=p; window.dispatchEvent(new CustomEvent('palette',{{detail:p}}));
    try{{ localStorage.setItem('yoshiki-palette',p.slug); }}catch(e){{}}
  }}
  window.__pals=PALS; window.__applyPalette=apply;
  document.getElementById('pals').addEventListener('click',function(e){{ var b=e.target.closest('button'); if(b) apply(PALS.filter(function(p){{return p.slug===b.dataset.p;}})[0]); }});
  var INIT={json.dumps(initial)};
  var saved=null; try{{ saved=localStorage.getItem('yoshiki-palette'); }}catch(e){{}}
  apply(PALS.filter(function(p){{ return p.slug===(INIT||saved); }})[0] || PALS[0]);
}})();
</script>
{script}
</body>
</html>
"""


def w(path: Path, text: str):
    rel = path.relative_to(ROOT)
    if CHECK:
        if not path.exists() or path.read_text() != text:
            drift.append(str(rel))
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text)
    print(f"  {rel}")
