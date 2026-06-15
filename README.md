<p align="center">
  <img src="docs/banner.png" alt="yoshiki" width="900">
</p>

<h1 align="center">yoshiki · 様式</h1>

<p align="center">
  An elegant design language — warm monochrome, with color used rarely, as a signal.
</p>

<p align="center">
  <a href="https://zinzaki.github.io/yoshiki/"><b>Live demo</b></a> ·
  <a href="#palette">Palette</a> ·
  <a href="#contents">Contents</a> ·
  <a href="#quick-start">Quick start</a>
</p>

---

## What it is

A complete, modular toolkit: a color palette, text and UI patterns, ready terminal
and editor themes, and drop-in AI prompts. Take one file or the whole system.
Everything is generated from a single source, in two themes — **kogane** (dark) and
**washi** (light).

Three rules hold the language together:

- **Warm, never grey** — every neutral keeps a warm undertone: lacquer-dark or bone-cream.
- **Color is rare** — scarlet and moss appear only as signals, at most one accent per screen.
- **Gold is a line, not a fill** — gold lives in edges, frames and glyphs, never as a filled block.

## Palette

| Layer | Colors | Share |
|---|---|---|
| **Tone** | lacquer `#0B0A08` · bone `#EDE3C4` · gold `#D6AE66` · persimmon `#C67F45` | ~97% |
| **Triggers** | spider-lily scarlet `#d8392e` · moss `#52703F` | ~3% |
| **Service** | dusty-blue · wisteria · celadon — terminals & syntax only | — |

Tokens, semantic roles and WCAG-checked contrast: [`canon/palette`](canon/palette).

## Contents

```
canon/      the definition — edited by hand
  palette/    tokens · roles · contrast proof · kogane · washi
  lexicon/    glyphs · nameplates · frames · CLI/TUI · code comments
  prompts/    drop-in AI system prompts
library/    ready to use — mostly generated
  themes/     kitty · foot · alacritty · starship · base24 · vscode · neovim · tmux · btop
  configs/ · snippets/ · menus/ · charts/ · motion/ · text/ · presets/
tools/build.py   generates every theme from canon/palette
```

## Quick start

```bash
# a terminal theme — copy one file
library/themes/kitty/kogane.conf        # or foot · alacritty · starship · base24

# web — CSS variables (raw tokens + semantic roles)
canon/palette/kogane/kogane.css

# make an AI follow the language — paste one prompt
canon/prompts/identity.md

# regenerate every theme from the palette
python3 tools/build.py
```

## License

MIT — see [LICENSE](LICENSE).
