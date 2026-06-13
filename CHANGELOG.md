# Changelog

様式 yoshiki follows the kintsugi rule even here: nothing is hidden, every
seam is named.

## v1.0 — 2026-06

The first sealed version of the language.

- **Palette** — KINTSUGI «tone & triggers»: a warm lacquer monochrome
  (lacquer · bone · gold) struck rarely by scarlet 緋 and moss 森.
  Gold is gilding, never a slab. Two themes: kogane 黄金 (dark) and
  washi 和紙 (light).
- **Roles** — a semantic contract over the raw tokens (`text.*`, `action.*`,
  `ok/warn/danger.*`, `border.gold` vs `text.gold`, `syntax.*`). Consume a
  role and you cannot pick a wrong-contrast value.
- **Proof** — `CONTRAST.md`, regenerated on every build; all text roles in
  both themes meet WCAG.
- **Exports** — css (tokens + `--r-<role>`), json, base16/base24, and
  terminal configs for kitty / foot / alacritty / starship.
- **Lexicon** — glyphs, nameplates, frames, the CLI/TUI canon and the
  code-comment style.
- **Prompts** — modular system-prompt blocks so any model speaks yoshiki.

### Earlier internal drafts (not released)
The palette was found through six private iterations before v1.0:
standard → neon → pastel → carmine → blood → the noble scarlet that stayed.
Three extra themes (urushi, higanbana, shinkai) were explored and then
folded back: urushi's «gold as veins» became law for the whole language,
so a separate theme was no longer needed.
