<p align="center">
  <img src="docs/banner.webp" alt="yoshiki — a spider lily on black lacquer" width="900">
</p>

<h1 align="center">様式&nbsp; yoshiki</h1>

<p align="center">A design language: warm monochrome, struck rarely by color.</p>

<p align="center">
  <a href="https://zinzaki.github.io/yoshiki/"><b>Live showcase ↗</b></a>
  &nbsp;·&nbsp; <a href="#palette">Palette</a>
  &nbsp;·&nbsp; <a href="#quick-start">Quick start</a>
  &nbsp;·&nbsp; <a href="#whats-inside">What's inside</a>
</p>

<br>

yoshiki is a visual system built around one idea: color is rare, so it means
something. Almost everything sits in a warm lacquer-and-bone monochrome; gold
appears only as a line or an edge; two accents (spider-lily scarlet and moss)
are reserved for events — danger and success.

The repo holds the definition and everything derived from it: a palette with a
semantic roles contract, a component canon and its drop-in stylesheet, terminal
and editor themes, TUI patterns and a text lexicon, W3C design tokens, and
system prompts that teach the style to an AI agent. Two themes share the same
rules: **kogane** (dark) and **washi** (light).

<img src="docs/assets/terminal.svg" alt="a yoshiki terminal — gold prompt frame, moss checks, one scarlet cross" width="760">

Gold gilds the prompt and the frame; success is a quiet moss check; the one
scarlet is spent on the single thing that blocks. Every mark above is the
language, generated from its palette source.

## Palette

<img src="docs/assets/palette.svg" alt="kogane (dark) and washi (light) palette strips" width="920">

| Layer | Colors | Share |
|---|---|---|
| Tone | lacquer `#0B0A08` · bone `#EDE3C4` · gold `#D8AF52` · persimmon `#C67F45` | ~97% |
| Triggers | scarlet `#d8392e` · moss `#52703F` | ~3% |
| Service | dusty-blue · wisteria · celadon — terminal ANSI and syntax only | — |

Three rules: warm, never grey · color is rare · gold is a line, not a fill.

Color values come in two kinds: raw **tokens** (`ink-0`, `kin-1`) and the
**roles** contract (`text.body`, `action.edge`, `danger.fill`). Consume a role,
never a raw token — a role guarantees readable contrast in both themes.

The [contrast proof](canon/palette/CONTRAST.md) measures every role against
**every surface it can sit on**, not just a flattering one, and the build fails
on a single cell below its floor. Measuring only against `bg.surface` is how a
palette hides its failures; it hid five of ours until v1.2.

## Quick start

```bash
# a terminal theme — copy one file
library/themes/kitty/kogane.conf        # or ghostty · foot · alacritty · wezterm · …

# web — two plain CSS files, both themes, no build step
library/web/palette.css                 # tokens + the roles contract
library/web/yoshiki.css                 # the component kit

# make an AI follow the language — point it at the repo (it reads AGENTS.md),
# or paste one prompt:
canon/prompts/identity.md               # + principles.md for the defaults

# regenerate everything from the palette source
python3 tools/build.py
```

## What's inside

```
yoshiki/
│
├─ AGENTS.md               how an agent applies yoshiki (read first)
├─ llms.txt                machine-readable index of every module
│
├─ canon/                  the definition — edited by hand, the source of truth
│  ├─ principles/          the ordered defaults — what wins when nothing is set
│  ├─ palette/             tokens · roles · contrast proof · kogane · washi
│  ├─ components/         the anatomy — controls · forms · surfaces · feedback · data
│  ├─ lexicon/             glyphs · nameplates · frames · CLI/TUI · code comments
│  ├─ motion/              loading & progress — spinners · dot-matrix · ▰▱
│  ├─ effects/             web effects — glass · grain · pointer · ambient
│  ├─ typography/          serif display + mono — Maple · JetBrains · Geist
│  ╰─ prompts/             drop-in AI system prompts
│
├─ library/                the style in use — take & apply
│  ├─ web/                 the drop-in kit — palette.css + yoshiki.css
│  ├─ themes/              kitty · foot · alacritty · ghostty · wezterm · starship · base24 · vscode · neovim · tmux · btop · zellij · fzf
│  ├─ configs/             whole example configs
│  ├─ snippets/            how to write code in the style, per language
│  ├─ menus/               ready TUI menus, cards, lists
│  ├─ charts/              text data-viz — sparkline · bars · gauge
│  ├─ text/                nameplates · banners · glyph sets · dividers
│  ╰─ presets/             named kits
│
├─ tools/build.py          bakes every theme, export and proof out of canon/palette
├─ tools/check.py          the invariants a build cannot see — links, stray colour
├─ PHILOSOPHY.md           why it looks like this
╰─ CHANGELOG.md            the sealed versions
```

`canon/` defines the language; `library/` is the language in use.

## Build

[![build](https://github.com/zinzaki/yoshiki/actions/workflows/build.yml/badge.svg)](https://github.com/zinzaki/yoshiki/actions/workflows/build.yml)

```bash
python3 tools/build.py          # regenerate themes, token exports, contrast proof
python3 tools/build.py --check  # verify committed output matches canon (runs in CI)
python3 tools/check.py          # links resolve, the showcase carries no palette of its own
node tools/audit.mjs            # optional: sweep the rendered pages for real contrast
```

Requires Python 3 and PyYAML. Everything under `library/themes/`, the palette
exports and the showcase's colours are generated — edit
`canon/palette/*/palette.yml` and rebuild. `library/web/yoshiki.css` is the one
hand-written artifact, and the build mirrors it into `docs/` so the showcase
always wears the file it ships.

## License

MIT — see [LICENSE](LICENSE).
