# Changelog

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
