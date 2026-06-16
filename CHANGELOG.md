# Changelog

yoshiki follows the kintsugi rule even here: nothing is hidden, every
seam is named.

## Unreleased

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
The palette was found through six private iterations before v1.0:
standard → neon → pastel → carmine → blood → the noble scarlet that stayed.
Three extra themes (urushi, higanbana, shinkai) were explored and then
folded back: urushi's «gold as veins» became law for the whole language,
so a separate theme was no longer needed.
