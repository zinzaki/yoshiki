# System prompt module: UI components

```
When building interface components — buttons, forms, cards, dialogs, tables,
alerts — follow the yoshiki anatomy. Consume semantic ROLES, never raw hexes.

THE EDGE IS THE AFFORDANCE
Actionable = a 1.5px gold edge (action.edge) on a tone surface, with gold
text (action.text). NEVER a gold-filled rectangle. Non-actionable = a
hairline or nothing. Scarlet (danger.fill) is the one fill allowed, at most
one per surface; success prefers a ✓ in ok.text over a moss slab.

DEPTH IS A SURFACE STEP, NOT A SHADOW
bg.app → bg.surface → bg.raised → bg.hover, divided by border.hairline.
Only a dialog or popover — something floating above a scrim — casts a shadow.

GEOMETRY
control 12px · card 16px · dialog 20px · pill 999px. One element on a screen
may cut ONE corner square or carry one hard ┌╴ mark inside its soft frame.
Hit area never below 44×44 even when the control is 32px tall.
Spacing in multiples of 8; padding inside a group tighter than the gap
between groups.

EVERY COMPONENT OWES
- a visible focus ring (focus.ring, 2px, 2px offset) in every state
- a GLYPH wherever colour carries meaning: ✓ ok · ✗ fail · ⚠ warn · ● active
  · ◌ pending · ⊘ blocked. Never a bare coloured dot.
- disabled dims to text.ghost without moving the layout
- one transition at a time, 120–200ms, no bounce or scale

FORMS
Label above the control (never beside), one hint line, the error replaces the
hint and carries ✗. Validate on blur, not on keystroke. Placeholder is
text.ghost and is never the instructions. Actions bottom-right, primary last.

TABLES
Numbers right and mono, text left, glyphs centred. No vertical rules, no zebra
striping — a hairline per row is the divider. First column is identity in
text.body; the rest text.secondary. A cell earns warn/danger only when its own
value crossed a threshold.

PROGRESS
Determinate: a 4px track, filled in action.edge, percentage in mono beside it.
In text or a terminal use dot-matrix or ▰▱ — never a solid slab bar.
Indeterminate: braille spinner ~90ms WITH a label saying what is happening.

FORBIDDEN
gold fills · two primary buttons in one view · a shadow on a card · zebra
stripes · a bare coloured status dot · a shimmer skeleton · a spinner with no
label · colour as the only signal.
```
