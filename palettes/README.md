# Palettes

One language — KINTSUGI — five scenes. The trigger tokens (scarlet, moss) and
the rules never change between themes; what changes is either the **stage**
(surfaces) or the **role casting** (which family leads the elements).

| Theme | Mode | What changes | One line |
|---|---|---|---|
| **kogane 黄金** ★ | dark | — (reference) | gold acts: buttons, links, focus |
| **urushi 漆** ★ | dark | role casting | gold is veins only; bone leads everything clickable |
| **higanbana 彼岸花** | dark | role casting | spider-lily scarlet leads; gold stays veins |
| **shinkai 深海** | dark | stage | same roles on deep teal water |
| **washi 和紙** | light | stage | paper & sumi ink; the terminal remains a dark island |

## Files per theme

```
palette.yml            source of truth (tokens · semantic · terminal · base24)
<slug>.css             :root variables
<slug>.json            resolved bundle for machines
base24-<slug>.yaml     base16/base24-compatible scheme
terminal/
  kitty-<slug>.conf    foot-<slug>.ini    alacritty-<slug>.toml
  starship-<slug>.toml palette block
```

Variants declare `inherits: kogane` and override only their deltas —
regenerate all exports with `python3 ../tools/build.py`.

## Invariants across all five

- triggers: scarlet `#BB3C33` (irreversible, one per screen) · moss `#52703F` (life)
- warning: persimmon family · info: tone, never blue
- ANSI-16 accents shared; only backgrounds/cursor differ per scene
- contrast floors verified (WCAG): body ≥ 7:1, secondary ≥ 4.5:1
