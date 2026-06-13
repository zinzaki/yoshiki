# yoshiki

> *Cracks are not hidden — they are filled with gold.*
>
> A warm monochrome design language — lacquer, bone and gold, struck rarely by
> two triggers: scarlet and moss. The power of a color is in its rarity.

A design language and toolkit: palettes, text styles, CLI/TUI patterns,
code-comment conventions, and ready-to-use AI prompts — all modular.
Take one element or take the whole language.

## Map

Two layers. **canon/** *defines* the language (edited by hand, the source of
truth). **library/** is the language *in use* — ready-to-take artifacts, much
of it generated from the canon.

```
canon/                  the definition — edit here
  palette/        tokens · roles · CONTRAST · css/json   (kogane · washi)
  lexicon/        glyphs · nameplates · frames · cli · comments
  prompts/        modular AI prompts — make any model speak yoshiki
library/                the style in use — take and apply
  themes/         program themes: kitty · foot · alacritty · starship · base24
  configs/        whole example configs
  snippets/       how to write code in the style, per language
  menus/          ready TUI menus & cards (hard/soft frames)
  text/           nameplates, banners, glyph sets
  presets/        named combinations (e.g. "terminal kit")
tools/         build.py — bakes library/themes/* out of canon/palette
PHILOSOPHY.md  why it looks like this
CHANGELOG.md   the sealed versions
```

Two layers: raw **tokens** (`ink-0`, `kin-1`) and the **roles** contract
(`text.body`, `action.edge`, `danger.fill`). Consume roles, never raw tokens —
a role guarantees contrast and behaviour in both themes. `<slug>.css` ships
both; proof in `CONTRAST.md`.

## The language in one table

| Layer | Content | Share |
|---|---|---|
| **Tone** | lacquer `#0B0A08…` · bone `#EDE3C4…` · gold `#D6AE66` · persimmon warning | ~97% |
| **Triggers** | scarlet `#BB3C33` (the irreversible — one bloom per screen) · moss `#52703F` (life) | ~3% |
| **Service** | dusty blue / wisteria / celadon — terminal & syntax only, never UI | — |

Rules: **gold is gilding, never a slab** (line, edge, frame, glyph — never a
filled area) · **rarity = power** · 70/20/7/3 · warm darkness, never grey ·
information lives in tone, not in blue · soft geometry, quiet glow ·
HUD annotations as a silent tech layer.

## Quick start

```bash
# terminal — copy one file:
library/themes/kitty/kogane.conf               # or foot / alacritty / starship / base24

# web — one css file:
canon/palette/kogane/kogane.css                # :root { --ink-0: … , --r-text-body: … }

# anything base16/base24-aware:
library/themes/base24/kogane.yaml

# make an AI write in this style — paste one module:
prompts/identity.md                             # or palette / cli / comments / text
```

Every palette is **v1.0**. Source of truth is `palette.yml` per theme;
all other formats are generated: `python3 tools/build.py`.

---

<div align="center"><i>The crack, filled with gold, becomes the most valued part of the bowl.</i></div>
