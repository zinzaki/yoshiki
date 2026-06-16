# Accessibility — yoshiki

Two guarantees, both already built into the language. This file makes them explicit
and names the one place that needs extra care.

## 1. Contrast — proven ([`CONTRAST.md`](CONTRAST.md))
Every text role meets WCAG AA on the surface it actually sits on, in both themes,
regenerated on every build: body ≥ 7:1, secondary ≥ 4.5:1, decorative edges ≥ 3:1.

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
