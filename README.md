# 様式 yoshiki

> *Cracks are not hidden — they are filled with gold.*
>
> The personal design language of **Zinzaki**: a warm monochrome of lacquer,
> bone and gold, struck — rarely — by psychological triggers of scarlet and moss.
> The power of a color lies in its rarity.

This is my design card and hub: palettes, text styles, CLI/TUI patterns,
code-comment conventions, and ready-to-use AI prompts — all modular.
Take one element or take the whole language.

## Map

Two layers. **canon/** *defines* the language (edited by hand, the source of
truth). **library/** is the language *in use* — ready-to-take artifacts, much
of it generated from the canon.

```
canon/                  the definition — edit here
  palette/   色   tokens · roles · CONTRAST · css/json   (kogane · washi)
  lexicon/   文   glyphs · nameplates · frames · cli · comments
  prompts/   念   modular AI prompts — make any model speak yoshiki
library/                the style in use — take and apply
  themes/    皿   program themes: kitty · foot · alacritty · starship · base24
  configs/   設   whole example configs
  snippets/  写   how to write code in the style, per language
  menus/     品   ready TUI menus & cards (hard/soft frames)
  text/      銘   nameplates, banners, glyph sets
  presets/   束   named combinations (e.g. "terminal kit")
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
| **Triggers** | scarlet 緋 `#BB3C33` (the irreversible — one bloom per screen) · moss 森 `#52703F` (life) | ~3% |
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

<div align="center">人は心で生きるんだ — <i>people live by the heart</i> · 絆</div>
