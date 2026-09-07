# Changelog

## v1.2 — 2026-09

- **Contrast, re-proven** — the proof measured every text role against
  `bg.surface` alone, which flattered the palette instead of testing it.
  It is now a full role x surface matrix, `bg.hover` included — on paper the
  darkest ground of all — and the build fails on a single cell below its floor.
  It found five real failures in washi (links and gold text at 4.14:1, muted
  4.34, moss 4.20, wisteria 4.19) and a gilded edge at 2.75:1 against the 3:1
  non-text floor; washi's hover gold also sat *lighter* than its resting gold,
  so the seam faded exactly when the hand arrived. ANSI red was 4.27:1 on the
  terminal ground, and washi's `syntax.keyword` pointed at the decorative gold
  rather than the text gold — a keyword is a word. Both palettes are retuned by
  a few RGB points each: the language looks the same and is now true.
- **`danger.on-fill` · `ok.on-fill`** — the contract never said what colour a
  label takes when it stands *on* a trigger, so the kit had been guessing. It
  was 4.25:1 on the scarlet. The new `shiro` token is the one pure white in the
  language, and it exists for exactly that surface — nothing warmer clears AA
  against the spider-lily scarlet, and the scarlet is not negotiable.
- **`canon/components`** — the missing contract. The showcase documented
  buttons, forms, dialogs and tables that canon never specified. Six files now
  say what a control is made of, which role each part takes, and the five laws
  underneath — plus `canon/prompts/components.md` for an agent.
- **`library/web`** — the kit those rules describe: two plain CSS files, no
  build step, built only on `--r-*` roles. There is no gold-filled button in
  it, nothing casts a shadow but a dialog, and every status class expects a
  glyph.
- **Showcase, rebuilt** — one page became five: the language, the palette
  (every token, the roles contract, the live matrix, six export formats), the
  components (each demo printed beside the exact markup that produced it), the
  lexicon and the thirteen themes, each previewed in its own generated values.
  The site had been carrying a third hand-written copy of the palette; it now
  wears `library/web` unchanged and reads its colours from canon.
- **`groups`** — tokens carry a group map, so what a step is *for* travels with
  its value instead of living in a comment the build discards. A token in no
  group fails the build.
- **`tools/check.py`** — the invariants a build cannot see: no hard-coded
  colour in the showcase, every link in the repository resolving, and the pages
  agreeing on their own navigation. Runs in CI beside `build.py --check`.

## v1.1 — 2026-07

- **Themes** — four new generated targets: ghostty, wezterm (TOML scheme),
  zellij (new theme spec, 0.41+) and fzf (`--color` list). Terminal-drawn
  targets carry the same dark-island values in both theme files by design.
- **Showcase** — the site palette now matches canon exactly (washi fill-triggers
  had drifted); scarlet-as-text uses `danger.text`, never the fill token.
- **Build** — `--check` mode verifies committed output against canon (runs in
  CI); contrast failures now fail the build; the README palette preview
  (`docs/assets/palette.svg`) is generated alongside the themes.
- **Fix** — washi selection no longer inherits kogane's dark gold wash:
  neovim `Visual`, tmux copy-mode and btop selection use washi's own
  `kin-w` on paper.

- **Motion** — `canon/motion` expanded: arc and circle-pulse spinners, a minimal
  `▰▱` square bar and number-only progress; a blacklist of heavy filled blocks.
- **Effects** — new `canon/effects`: glass (frosted + refraction lens), film grain,
  pointer (tilt · spotlight · dual-cursor) and ambient (aurora · sheen). The
  showcase's effects now have a canonical home.
- **Typography** — new `canon/typography`: a warm serif display + mono stack
  (Maple · JetBrains · Geist, all OFL), with the Claude serif recipe noted.
- **AI-navigation** — `AGENTS.md` (the map an agent reads first) and `llms.txt` (a
  machine-readable index), so an agent given only the repo can self-navigate.
- **Philosophy** — the spider lily reframed as a deliberate stroke of colour, not a
  claim of memory.

## v1.0 — 2026-06

The first sealed version of the language.

- **Palette** — KINTSUGI «tone & triggers»: a warm lacquer monochrome
  (lacquer · bone · gold) struck rarely by scarlet and moss.
  Gold is gilding, never a slab. Two themes: kogane (dark) and
  washi (light).
- **Roles** — a semantic contract over the raw tokens (`text.*`, `action.*`,
  `ok/warn/danger.*`, `border.gold` vs `text.gold`, `syntax.*`). Consume a
  role and you cannot pick a wrong-contrast value.
- **Proof** — `CONTRAST.md`, regenerated on every build; all text roles in
  both themes meet WCAG.
- **Exports** — css (tokens + `--r-<role>`), json, base16/base24, terminal
  configs (kitty / foot / alacritty / starship) and editor/monitor themes
  (vscode / neovim / tmux / btop) — all from one source.
- **Lexicon** — glyphs, nameplates, frames, the CLI/TUI canon and the
  code-comment style.
- **Prompts** — modular system-prompt blocks so any model speaks yoshiki.

### Earlier internal drafts (not released)
The palette went through six private iterations before v1.0: standard →
neon → pastel → carmine → blood → the scarlet that stayed. Three extra
themes (urushi, higanbana, shinkai) were explored and folded back:
urushi's "gold as veins" became a law for the whole language, so a
separate theme was no longer needed.
