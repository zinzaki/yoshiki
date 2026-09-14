# Production pair (Beige glass + Night beige) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace kogane/washi with the voted production pair — Night beige (dark) and Beige glass (light) — as the palettes every generated theme, the web kit, the site and the integrations are built from.

**Architecture:** Keep the proven palette schema (tokens · groups · roles · terminal · base24) and `tools/build.py` pipeline; add the two new palettes, make the build palette-agnostic (no hard-coded `kogane`/`washi`), archive the old pair, regenerate, and fix hand-written references that the existing checks flag. The role renames and the other 10 family palettes are later plans.

**Tech Stack:** Python 3 + PyYAML (`tools/build.py`, `tools/check.py`), stdlib `unittest`, headless Chromium from the Playwright cache for screenshots.

**Spec:** `docs/superpowers/specs/2026-09-14-yoshiki-v2-family-design.md` (sections 3, 6.1–6.2)

## Global Constraints

- Production pair: Night beige = dark, Beige glass = light; the terminal stays a dark island (`#161410`) in both.
- Colour roles: constant accent = gold; rare signal = red `#E3001B`; code syntax = "warm bright, fixed" (coral · gold · olive · amber · dry olive), no blue or pink in syntax.
- Every text role ≥ 4.5:1 and ghost/edges ≥ 3:1 on every surface — enforced by `build.py`, not asserted.
- Generated files are never edited by hand; `python3 tools/build.py --check` and `python3 tools/check.py` must both print clean.
- Brand mark and English copy stay as in v1.2.
- Do not commit or push unless the user says so.

---

### Task 1: check.py scans tracked files only

The private `style/` and `beautiful/` folders are untracked but `check.py` walks the whole disk, producing 1437 false CJK failures.

**Files:**
- Modify: `tools/check.py` (the CJK loop that uses `ROOT.rglob("*")`, and the markdown-link loop)
- Test: `tools/tests/test_check_scope.py`

**Interfaces:**
- Produces: `tracked_files() -> list[pathlib.Path]` in `tools/check.py`

- [ ] **Step 1: Write the failing test**

```python
# tools/tests/test_check_scope.py
import importlib.util, pathlib, subprocess, unittest

ROOT = pathlib.Path(__file__).resolve().parents[2]

def load_check():
    spec = importlib.util.spec_from_file_location("check_mod", ROOT / "tools" / "check.py")
    src = (ROOT / "tools" / "check.py").read_text()
    head = src.split("# ── 1 ·")[0]          # import only the helpers, not the checks
    mod = type(importlib)("check_mod")
    exec(compile(head, "check_head", "exec"), mod.__dict__)
    return mod

class TrackedScope(unittest.TestCase):
    def test_untracked_private_folders_are_not_scanned(self):
        files = {str(p.relative_to(ROOT)) for p in load_check().tracked_files()}
        self.assertTrue(any(f.startswith("canon/") for f in files))
        self.assertFalse(any(f.startswith(("style/", "beautiful/")) for f in files))

if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run it — expect failure**

Run: `python3 -m unittest tools/tests/test_check_scope.py -v`
Expected: FAIL / ERROR — `tracked_files` is not defined.

- [ ] **Step 3: Implement**

In `tools/check.py`, directly after `fails: list[str] = []` add:

```python
import subprocess


def tracked_files() -> list[Path]:
    """Files git knows about (tracked or staged-new) — private untracked folders are not the project."""
    out = subprocess.run(["git", "ls-files", "--cached", "--others", "--exclude-standard"],
                         cwd=ROOT, capture_output=True, text=True, check=True).stdout
    return [ROOT / line for line in out.splitlines() if line and (ROOT / line).is_file()]
```

Then replace `for f in sorted(ROOT.rglob("*")):` in the CJK section with `for f in sorted(tracked_files()):`, and replace `for md in sorted(ROOT.rglob("*.md")):` with `for md in sorted(p for p in tracked_files() if p.suffix == ".md"):`.

- [ ] **Step 4: Run test and the real check**

Run: `python3 -m unittest tools/tests/test_check_scope.py -v && python3 tools/check.py`
Expected: test PASS; `check.py` prints `clean — 5 pages, no stray colour, every link resolves.`

- [ ] **Step 5: Commit (only when the user approves committing)**

```bash
git add tools/check.py tools/tests/test_check_scope.py .gitignore
git commit -m "fix(check): scan tracked files only; ignore private style/ and beautiful/"
```

---

### Task 2: Add the two production palettes

**Files:**
- Create: `canon/palette/night-beige/palette.yml`
- Create: `canon/palette/beige-glass/palette.yml`
- Test: `tools/tests/test_production_palettes.py`

**Interfaces:**
- Produces: palette slugs `night-beige`, `beige-glass`; both standalone (no `inherits`); `brand` block lives in `night-beige`.

Both files use the kogane schema. `groups` = kogane's groups **plus** one group:

```yaml
  - key: syntax
    label: syntax
    note: editor colours — warm bright: coral, gold, olive, amber, dry olive; no blue or pink
    steps:
      - {token: syn-keyword, job: keyword · control flow}
      - {token: syn-function, job: function · the action}
      - {token: syn-string, job: string · content}
      - {token: syn-number, job: number · constant}
      - {token: syn-type, job: type · shape of data}
      - {token: syn-comment, job: comment}
```

`roles` = kogane's roles with these overrides in **both** files:

```yaml
  syntax.keyword:  syn-keyword
  syntax.string:   syn-string
  syntax.number:   syn-number
  syntax.type:     syn-type
  syntax.constant: syn-number
  syntax.comment:  syn-comment
```

and additionally in `beige-glass` only (paper remaps, as washi did):

```yaml
  text.gold:   kin-t
  text.link:   kin-t
  action.text: kin-t
  info.text:   kin-t
  warn.text:   kaki-1
  effect.sheen: shiro
```

`meta` (night-beige): `{name: Night beige, slug: night-beige, role: production dark, version: 2.0.0, language: yoshiki, author: Zinzaki, mode: dark}`; beige-glass identical with `name: Beige glass`, `slug: beige-glass`, `role: production light`, `mode: light`. Copy kogane's `brand:` block into night-beige.

Tokens — **night-beige** (values already contrast-verified with `build.measure`):

```yaml
tokens:
  ink-0: "#161410"   ink-1: "#1D1B16"   ink-2: "#24211C"   ink-3: "#322E27"
  line-0: "#3A362E"  line-1: "#4E493F"
  bone-0: "#EAE6D2"  bone-1: "#D6D2BD"  bone-2: "#BAB5A1"  bone-3: "#9A9584"  bone-4: "#7E7A6E"
  kin-0: "#EDC85C"   kin-1: "#D8AF52"   kin-2: "#B5924A"   kin-3: "#57441F"   kin-w: "#3A3120"
  kaki-1: "#D98A55"
  washi-bg: "#D6D2BD"  washi-ink: "#454138"  washi-line: "#BAB5A1"
  aka-0: "#FF6155"   aka-1: "#E3001B"   aka-2: "#7E1A14"   sabi: "#9B635F"   aka-w: "#3A1412"
  mori-0: "#AFC27A"  mori-1: "#56702A"  mori-2: "#2F3D1B"  mori-w: "#1F2616"
  shiro: "#FFFFFF"
  hotaru-0: "#D4CF96" hotaru-1: "#C2BE84" hotaru-2: "#5F5C3A"
  fuji-0: "#F2B878"  fuji-1: "#EBA15E"  fuji-2: "#6E4A2A"
  seiji-0: "#A6C6AF" seiji-1: "#8FB39A" seiji-2: "#3F5A48"
  shin-2: "#1E2A26"  shin-3: "#141C19"
  syn-keyword: "#EC6B55" syn-function: "#E8BE62" syn-string: "#AFC27A"
  syn-number: "#EBA15E"  syn-type: "#C2BE84"     syn-comment: "#8C7F6C"
```

(Written one token per line in the real file; the grid above is only for reading.) `hotaru/fuji/seiji` keep their names because the program emitters read them directly; their values now carry the warm syntax hues.

Tokens — **beige-glass**:

```yaml
tokens:
  ink-0: "#D6D2BD"   ink-1: "#DCD8C0"   ink-2: "#E4E0CB"   ink-3: "#C9C4AE"
  line-0: "#BAB5A1"  line-1: "#9C9684"
  bone-0: "#2E2B24"  bone-1: "#454138"  bone-2: "#524D44"  bone-3: "#534E43"  bone-4: "#706A59"
  kin-0: "#7A5E24"   kin-1: "#785C1E"   kin-t: "#533E13"   kin-2: "#654D16"   kin-3: "#C9AE74"   kin-w: "#E2D3A6"
  kaki-1: "#794116"
  washi-bg: "#161410"  washi-ink: "#D6D2BD"  washi-line: "#322E27"
  aka-0: "#A00019"   aka-1: "#E3001B"   aka-2: "#7E1A14"   sabi: "#8E4F4B"   aka-w: "#EBCFC6"
  mori-0: "#3E541B"  mori-1: "#56702A"  mori-2: "#2F3D1B"  mori-w: "#D9DDBE"
  shiro: "#FFFFFF"
  hotaru-0: "#6E6B30" hotaru-1: "#5C5920" hotaru-2: "#C9C58F"
  fuji-0: "#A85A1F"  fuji-1: "#793F11"  fuji-2: "#E3C2A0"
  seiji-0: "#4F7A62" seiji-1: "#3F6B55" seiji-2: "#BFD1C4"
  shin-2: "#1E2A26"  shin-3: "#141C19"
  syn-keyword: "#A2301E" syn-function: "#6E4F0C" syn-string: "#46601F"
  syn-number: "#804312"  syn-type: "#5C5920"     syn-comment: "#78725F"
```

⚠ Decision to confirm with the user during Task 4 screenshots: to hold 3:1 on the darkest paper surface (hover `#C9C4AE`) the gold edge `kin-1` sank from the voted `#A8852F` to `#785C1E`.

`terminal` — identical in both files (dark island):

```yaml
terminal:
  background: "#161410"
  foreground: "#D6D2BD"
  cursor: "#D8AF52"
  selection_background: "#3A3120"
  ansi:    ["#24211C","#FF5A4D","#AFC27A","#E8BE62","#8FA8C8","#C99AAE","#8FB39A","#D6D2BD"]
  brights: ["#8A8577","#FF7A6E","#C4D28F","#F2CF7A","#A9BDD6","#D9B0C2","#A6C6AF","#EAE6D2"]
```

`base24` (night-beige): `base00 #161410, base01 #1D1B16, base02 #322E27, base03 #7E7A6E, base04 #9A9584, base05 #D6D2BD, base06 #EAE6D2, base07 #F4F1E4, base08 #FF6155, base09 #EBA15E, base0A #D8AF52, base0B #AFC27A, base0C #8FB39A, base0D #E8BE62, base0E #EC6B55, base0F #9B635F, base10 #100E0B, base11 #0B0A08, base12 #FF7A6E, base13 #F2CF7A, base14 #C4D28F, base15 #A6C6AF, base16 #A9BDD6, base17 #D9B0C2`.
`base24` (beige-glass): `base00 #D6D2BD, base01 #DCD8C0, base02 #C9C4AE, base03 #706A59, base04 #534E43, base05 #454138, base06 #2E2B24, base07 #1C1A15, base08 #A00019, base09 #804312, base0A #785C1E, base0B #46601F, base0C #3F6B55, base0D #6E4F0C, base0E #A2301E, base0F #8E4F4B, base10 #DCD8C0, base11 #E4E0CB, base12 #FF7A6E, base13 #F2CF7A, base14 #C4D28F, base15 #A6C6AF, base16 #A9BDD6, base17 #D9B0C2`.

- [ ] **Step 1: Write the failing test**

```python
# tools/tests/test_production_palettes.py
import importlib.util, pathlib, unittest, yaml

ROOT = pathlib.Path(__file__).resolve().parents[2]
spec = importlib.util.spec_from_file_location("build", ROOT / "tools" / "build.py")
B = importlib.util.module_from_spec(spec); spec.loader.exec_module(B)

class ProductionPalettes(unittest.TestCase):
    def load(self, slug):
        return B.resolve(yaml.safe_load((ROOT / "canon/palette" / slug / "palette.yml").read_text()), None)

    def test_both_pass_every_contrast_floor(self):
        for slug in ("night-beige", "beige-glass"):
            with self.subTest(slug=slug):
                self.assertEqual(B.failures(B.measure(self.load(slug))), [])

    def test_group_map_covers_tokens(self):
        pals = {s: self.load(s) for s in ("night-beige", "beige-glass")}
        self.assertEqual(B.check_groups(pals), [])

    def test_roles_of_the_language(self):
        dark, light = self.load("night-beige"), self.load("beige-glass")
        self.assertEqual(dark["tokens"]["aka-1"], "#E3001B")
        self.assertEqual(dark["tokens"]["kin-1"], "#D8AF52")
        self.assertEqual(light["terminal"]["background"], "#161410")
        self.assertEqual(dark["roles"]["syntax.type"], "syn-type")

if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run — expect failure**

Run: `python3 -m unittest tools/tests/test_production_palettes.py -v`
Expected: ERROR — `canon/palette/night-beige/palette.yml` not found.

- [ ] **Step 3: Create the two palette files** exactly as specified above (tokens one per line).

- [ ] **Step 4: Run — expect pass**

Run: `python3 -m unittest tools/tests/test_production_palettes.py -v`
Expected: 3 tests OK.

- [ ] **Step 5: Commit (when approved)**

```bash
git add canon/palette/night-beige canon/palette/beige-glass tools/tests/test_production_palettes.py
git commit -m "feat(palette): Night beige and Beige glass — the production pair"
```

---

### Task 3: Make the build palette-agnostic and switch to the pair

**Files:**
- Modify: `tools/build.py` (lines 23, 663–664, 685–686, 806, 868–894, 943–944, 958–960, 1076, 1223–1224, 1236, and the `PROMPT_START` comment at 605)
- Modify: `tools/check.py:59` and `tools/check.py:95`
- Modify: `docs/assets/site.js:32`
- Move: `canon/palette/kogane/` → `canon/palette/archive/kogane/`, `canon/palette/washi/` → `canon/palette/archive/washi/`
- Delete: every `library/themes/*/kogane*` and `library/themes/*/washi*` generated file
- Test: `tools/tests/test_build_order.py`

**Interfaces:**
- Consumes: slugs from Task 2.
- Produces: `ORDER = ["night-beige", "beige-glass"]`; `DARK = ORDER[0]`, `LIGHT = ORDER[1]`; JS/TS export names `nightBeige`, `beigeGlass`; site theme names `night-beige` / `beige-glass`.

- [ ] **Step 1: Write the failing test**

```python
# tools/tests/test_build_order.py
import pathlib, re, unittest

ROOT = pathlib.Path(__file__).resolve().parents[2]
SRC = (ROOT / "tools" / "build.py").read_text()

class BuildOrder(unittest.TestCase):
    def test_order_is_the_production_pair(self):
        self.assertIn('ORDER = ["night-beige", "beige-glass"]', SRC)

    def test_no_hardcoded_old_palette_names_in_code(self):
        code = "\n".join(l for l in SRC.splitlines() if not l.strip().startswith("#"))
        self.assertIsNone(re.search(r'["\'](kogane|washi)["\']', code))

    def test_site_follows_new_theme_names(self):
        js = (ROOT / "docs/assets/site.js").read_text()
        self.assertIn("'beige-glass'", js); self.assertIn("'night-beige'", js)

if __name__ == "__main__":
    unittest.main()
```

- [ ] **Step 2: Run — expect failure**

Run: `python3 -m unittest tools/tests/test_build_order.py -v`
Expected: FAIL on all three.

- [ ] **Step 3: Implement**

`tools/build.py`:

```python
ORDER = ["night-beige", "beige-glass"]
DARK, LIGHT = ORDER
```

Replace every `resolved["kogane"]` with `resolved[DARK]` (lines 663, 664, 685, 686, 958–960, 1223, 1224, 1236). Change `PROMPT_START` to `"# ── tokens, generated from canon/palette/night-beige/palette.yml ──"`. In the SVG label (line 1076) use `f'aria-label="yoshiki palette — {resolved[DARK]["meta"]["name"]} and {resolved[LIGHT]["meta"]["name"]}"'`.

In `emit_integrations` replace the fixed export lines (878–879, 893–894) with generated ones:

```python
def js_name(slug):
    head, *rest = slug.split("-")
    return head + "".join(p.title() for p in rest)

# ESM
lines += [f"export const {js_name(s)} = themes[{json.dumps(s)}];" for s in ORDER]
# .d.ts
dts += [f"export declare const {js_name(s)}: Theme;" for s in ORDER]
# package.json exports
exports.update({f"./tokens/{s}": f"./canon/palette/{s}/{s}.tokens.json" for s in ORDER})
```

(Use the variable names the function already uses for the ESM line list, the d.ts list and the exports dict; remove the two hard-coded `kogane`/`washi` entries.)

`tools/check.py`: line 59 `for slug in ("night-beige", "beige-glass"):` → read `ORDER` from build: `import importlib.util` then load `tools/build.py` as in the tests and iterate `B.ORDER`; line 95 path → `ROOT / "canon" / "palette" / B.ORDER[0] / "palette.yml"`.

`docs/assets/site.js:32`: `root.dataset.theme = e.matches ? 'beige-glass' : 'night-beige';` and replace any other `'kogane'`/`'washi'` literals in `docs/assets/*.js` and `docs/*.html` (`grep -rn "kogane\|washi" docs --include='*.js' --include='*.html'`) with the new slugs.

Move the old palettes and delete their generated outputs:

```bash
mkdir -p canon/palette/archive
git mv canon/palette/kogane canon/palette/archive/kogane
git mv canon/palette/washi canon/palette/archive/washi
git rm -q library/themes/*/kogane* library/themes/*/washi*
```

- [ ] **Step 4: Regenerate and run everything**

Run:
```bash
python3 tools/build.py
python3 -m unittest discover -s tools/tests -v
python3 tools/build.py --check
python3 tools/check.py
```
Expected: build prints `done.`; all unit tests OK; `--check` prints `clean — …`; `check.py` either clean or lists hand-written files still quoting kogane/washi values (next step).

- [ ] **Step 5: Fix hand-written references flagged by check.py**

For each file `check.py` reports (expected: `README.md`, `AGENTS.md`, `llms.txt`, `canon/prompts/README.md`, `canon/palette/README.md`, `library/web/README.md`, `library/integrations/README.md`, `canon/components/*.md`), replace kogane/washi names with Night beige / Beige glass and stale hex values with the Task 2 values. Re-run until:

Run: `python3 tools/check.py`
Expected: `clean — 5 pages, no stray colour, every link resolves.`

- [ ] **Step 6: Commit (when approved)**

```bash
git add -A tools canon docs library README.md AGENTS.md llms.txt package.json
git commit -m "feat: build from the production pair; archive kogane and washi"
```

---

### Task 4: Visual verification of the site and kit

**Files:**
- No source changes unless a defect is found.

- [ ] **Step 1: Screenshot every page in both widths**

```bash
B=~/.cache/ms-playwright/chromium_headless_shell-1234/chrome-headless-shell-linux64/chrome-headless-shell
OUT=/tmp/claude-1000/-home-zinzaki-Dev-yoshiki/34d9d2df-7f13-4a8d-9e5d-fa4846583194/scratchpad/verify
mkdir -p "$OUT"
for page in index palette components lexicon themes; do
  for sz in 1440,2600 390,2600; do
    "$B" --no-sandbox --hide-scrollbars --user-data-dir="$OUT/p-$page-${sz%%,*}" --window-size=$sz \
      --virtual-time-budget=6000 --screenshot="$OUT/$page-${sz%%,*}.png" "file://$PWD/docs/$page.html"
  done
done
```

- [ ] **Step 2: Review** each PNG: both themes render Beige glass / Night beige colours, no unreadable text, no horizontal overflow at 390, gold edge `#785C1E` on paper acceptable. Fix defects in the source that owns them (palette → re-run build; kit CSS → `library/web/yoshiki.css`).

- [ ] **Step 3: Report to the user** with the screenshots and the one colour decision (paper gold edge) before any commit.

---

## Later plans (not in scope here)

1. Remaining 10 family palettes (Porcelain, Concrete, Blush, YoRHa, Blush night, Café, Ember, Moss, Signal, Walnut) — same schema, same tests, `ORDER` becomes the family list with `production: [night-beige, beige-glass]`.
2. Canon split into zones (`canon/text`, `canon/graphic`, `roles.md`, `zones.md`), AGENTS.md routing, prompts per palette.
3. Web kit theme variants: clean (default) and ornate (crosses, brackets, control hints); softer radii option.
4. Restore `library/frames`, `library/loaders`, expanded `charts`/`text` from branch `recover/pr3` under the text-zone rules.
5. Telegram image-card generator in palette colours.
6. README and site — separate spec.
