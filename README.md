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

```
palettes/      two themes, one language · tokens + every export format
  kogane/      ★ dark 黄金 — warm lacquer; gold gilds the edges
  washi/         light 和紙 — paper and ink; the terminal stays a dark island
text/          glyphs with meaning · nameplates · box-drawing frames
cli/           CLI/TUI canon: prompt, menus, lists, status lines
code/          code-comment style: see, don't read
prompts/       modular AI prompts — make any model follow this style
preview/       live pages: theme viewer + token catalog (open index.html)
tools/         build.py — bakes css/json/base24/kitty/foot/alacritty/starship
PHILOSOPHY.md  why it looks like this
```

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
palettes/kogane/terminal/kitty-kogane.conf      # or foot / alacritty / starship

# web — one css file:
palettes/kogane/kogane.css                      # :root { --ink-0: … }

# anything base16/base24-aware:
palettes/kogane/base24-kogane.yaml

# make an AI write in this style — paste one module:
prompts/identity.md                             # or palette / cli / comments / text
```

Every palette is **v1.0**. Source of truth is `palette.yml` per theme;
all other formats are generated: `python3 tools/build.py`.

---

<div align="center">人は心で生きるんだ — <i>people live by the heart</i> · 絆</div>
