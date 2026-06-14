```
╭─ 心 ──────────────────────────────────────────────
│  様式   Y O S H I K I
│  a design language · warm monochrome, struck rarely by color
╰╴
```

> *Cracks are not hidden — they are filled with gold.*
>
> Lacquer, bone and gold, struck rarely by two triggers: scarlet and moss.
> The power of a color is in its rarity. Gold gilds; it never fills.

A design language and a toolkit — palettes, text styles, CLI/TUI patterns,
code-comment conventions, ready themes and AI prompts. All modular: take one
element, or take the whole language.

## Tree

```
yoshiki/
│
├─ canon/                  ◆ the definition — edited by hand, the source of truth
│  ├─ palette/             tokens · roles · CONTRAST · css/json   · kogane · washi
│  ├─ lexicon/             glyphs · nameplates · frames · cli · comments
│  └─ prompts/             modular AI prompts — make any model speak yoshiki
│
├─ library/                ◆ the style in use — take & apply (much is generated)
│  ├─ themes/              kitty·foot·alacritty·starship·base24·vscode·neovim·tmux·btop
│  ├─ configs/             whole example configs
│  ├─ snippets/            how to write code in the style, per language
│  ├─ menus/               ready TUI menus, cards, lists
│  ├─ motion/              loading & progress — dot-matrix
│  ├─ text/                nameplates · banners · glyph sets · dividers
│  └─ presets/             named kits (e.g. "terminal kit")
│
├─ tools/build.py          bakes library/themes out of canon/palette
├─ PHILOSOPHY.md           why it looks like this
├─ CONTRAST.md             WCAG proof — every text role, both themes
╰─ CHANGELOG.md            the sealed versions
```

**Two layers.** `canon/` *defines* the language; `library/` is the language
*in use*. Two kinds of color value: raw **tokens** (`ink-0`, `kin-1`) and the
**roles** contract (`text.body`, `action.edge`, `danger.fill`). Consume a role,
never a raw token — a role guarantees contrast and behaviour in both themes.

## The language

| Layer | Content | Share |
|---|---|---|
| **Tone** | lacquer `#0B0A08…` · bone `#EDE3C4…` · gold `#D6AE66` · persimmon warning | ~97% |
| **Triggers** | scarlet `#BB3C33` (the irreversible — one per screen) · moss `#52703F` (life) | ~3% |
| **Service** | dusty blue / wisteria / celadon — terminal & syntax only, never UI | — |

```
gold is gilding, never a slab    line · edge · frame · glyph — never a filled area
rarity = power                   a signal used everywhere is dead
70 / 20 / 7 / 3                  dark · bone · gold · triggers
warm darkness, never grey        information lives in tone, not in blue
soft geometry, quiet glow        weight at the top, air at the bottom
```

## Quick start

```bash
# terminal — copy one file
library/themes/kitty/kogane.conf        # or foot · alacritty · starship · base24

# web — one css file (raw tokens + semantic --r-<role> aliases)
canon/palette/kogane/kogane.css

# make an AI speak yoshiki — paste one module
canon/prompts/identity.md               # or palette · cli · comments · text
```

Source of truth is `palette.yml` per theme; everything else is generated:
`python3 tools/build.py`.

## Roadmap

```
v1.0   ✓  palette · roles · contrast proof
       ✓  two themes — kogane (dark) · washi (light)
       ✓  lexicon — glyphs · nameplates · frames · cli · code
       ✓  library — themes · configs · snippets · menus · motion · text · presets
next   ·  more snippets & languages · expanded presets
```

---

<div align="center"><i>The crack, filled with gold, becomes the most valued part of the bowl.</i></div>
