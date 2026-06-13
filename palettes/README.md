# Palettes

One language — KINTSUGI — two scenes: a dark theme and its light twin.
The trigger tokens (scarlet, moss) and every rule are identical between them;
only the **stage** (surfaces and which family carries text) changes.

| Theme | Mode | One line |
|---|---|---|
| **kogane 黄金** | dark | warm lacquer darkness; gold gilds the edges, never fills |
| **washi 和紙** | light | paper and sumi ink; the terminal stays a dark island |

## The gold law (both themes)

Gold is gilding, not a slab — line, edge, frame, glyph, thin stroke only.
A primary button is a **gold-framed dark/paper surface with gold text**,
never a gold rectangle. Scarlet, the trigger, *may* fill — a fill is itself
the rare event.

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

washi declares `inherits: kogane` and overrides only its deltas — regenerate
all exports with `python3 ../tools/build.py`.

## Invariants

- triggers: scarlet `#BB3C33` (irreversible, one per screen) · moss `#52703F` (life)
- warning: persimmon · info: tone, never blue
- ANSI-16 accents shared; only backgrounds/cursor differ
- contrast floors verified (WCAG): body ≥ 7:1, secondary ≥ 4.5:1
