# Accessibility — yoshiki

Two guarantees, both already built into the language. This file makes them explicit
and names the one place that needs extra care.

## 1. Contrast — proven on every surface ([`CONTRAST.md`](CONTRAST.md))
Every text role meets WCAG AA against **every** surface it can sit on — `bg.app`,
`bg.surface`, `bg.raised` and `bg.hover` — in both themes, regenerated and enforced
on every build. A role that passed only on its favourite background would be
flattered, not proven; on paper `bg.hover` is the darkest ground of all, so that
column is the real test.

| what | floor |
|---|---|
| text roles (body, gold, link, ok, warn, danger, special…) | 4.5:1 |
| `text.ghost` — disabled / placeholder | 3:1 |
| gilding — `border.gold`, `action.edge`, `action.hover.edge` | 3:1 (WCAG 1.4.11) |
| syntax roles, on the editor page | 4.5:1 (comment 3:1) |
| terminal ANSI foregrounds, on the terminal ground | 4.5:1 |

Hairlines (`border.hairline`, `border.strong`) are dividers, not affordances, and
carry no floor — the thing a control is recognised by is its **gold edge**, which
does.

## 2. Colour is never the only signal (WCAG 1.4.1)
This matters MORE here than usual, because the two triggers are a **red–green pair**:
**scarlet** (danger / error) and **moss** (success) are exactly the colours that
deuteranopia and protanopia — the most common colour-blindness — collapse into one.

So the language's existing habit is, for accessibility, **mandatory, not stylistic**:

> Every status carries a **glyph**. Colour is the second cue, never the first.

- ✓ done (moss) · ✗ failed (scarlet) · ⚠ warning (persimmon) · ● active · ◌ pending —
  a red–green user reads the SHAPE (✓ vs ✗); the colour only confirms it.
- diffs use a `+` / `-` marker, not just a green / red fill.
- never ship a bare coloured dot or swatch as the sole meaning (a red dot, no glyph).

The rest of the palette is CVD-safe by construction: the **gold → bone → lacquer**
hierarchy is a warmth / luminance ladder, not a hue distinction, so it survives every
CVD type. (Scarlet is also lighter than moss — a luminance gap that helps — but never
lean on it alone.)

## How to check
Run a screen through a colour-blindness simulator (deuteranopia + protanopia). If any
state is ambiguous once colour is removed, it is missing its glyph — **add the glyph,
don't retune the hue.**

## Motion & transparency
Effects honour `prefers-reduced-motion` and `prefers-reduced-transparency` (see
[`../effects`](../effects)). Focus is always visible (see
[`../lexicon/states.md`](../lexicon/states.md)). These are invariants, not options.
