```
╭─ components ───
│  the anatomy — what a control is made of, and which role each part takes
╰╴
```

The lexicon says what marks mean; [`../lexicon/states.md`](../lexicon/states.md)
says how they shift under the hand. This module says what a control **is**: its
parts, its geometry, and the role each part consumes. Nothing here introduces a
colour — every value is a role from [`../palette`](../palette).

| file | covers |
|---|---|
| [`controls.md`](controls.md) | buttons, links, icon buttons, segmented control |
| [`forms.md`](forms.md) | field anatomy, input, select, checkbox, radio, switch, range |
| [`surfaces.md`](surfaces.md) | card, panel, dialog, popover, sheet, divider |
| [`feedback.md`](feedback.md) | alert, toast, badge, status, progress, empty, skeleton |
| [`data.md`](data.md) | table, list, key–value, tree, stat tile, pagination |

## The five shared laws

**1 · Depth is a surface step, not a shadow.**
`bg.app` → `bg.surface` → `bg.raised` → `bg.hover`, each separated by
`border.hairline`. A drop shadow is reserved for the one thing that truly
floats above a scrim — a dialog, a popover. Nothing else casts.

**2 · The edge is the affordance.**
A thing you can act on wears `action.edge` (1.5px). A thing you cannot wears
`border.hairline` or nothing. That edge — never a fill — is how the eye finds
the action, so it holds ≥3:1 on every surface.

**3 · Gold frames, scarlet fills.**
The primary control is a tone surface + gold edge + gold text. `danger.fill` is
the one fill the language allows, because a fill *is* the rare event; at most
one per surface. `ok.fill` may fill too, but prefer `ok.text` with a ✓ — success
rarely needs the volume.

**4 · Geometry: soft, with one sharp mark permitted.**
```
control (button, input, chip)   12px
card · panel                    16px
dialog · sheet                  20px
pill (badge, switch, tag)       999px
```
A single element on a screen may cut one corner square, or carry one hard
`┌╴` mark inside its soft frame. One — see **duality** in
[`../principles/priority.md`](../principles/priority.md).

**5 · The target is bigger than the mark.**
Visual height may be 28px; the hit area is never below 44×44. Pad the target,
don't grow the ornament.

## What every component owes

- a visible focus ring — `focus.ring`, 2px, 2px offset, in every state
- a glyph wherever colour carries meaning ([`../palette/ACCESSIBILITY.md`](../palette/ACCESSIBILITY.md))
- a disabled state that dims (`text.ghost`) without moving the layout
- spacing in multiples of 8 ([`../lexicon/space.md`](../lexicon/space.md)), padding
  inside a group tighter than the gap between groups
- one transition at a time, 120–200ms; nothing bounces

## Density

`comfortable` is the default — the air is the point. `compact` exists for dense
data (tables, log rows, pickers) and only shrinks the *padding*: type size, edge
weight and radius never change with density.

```
              comfortable   compact
control h     40px          32px
row h         44px          32px
gutter        16px          8px
```

The implementation of every rule here ships as
[`../../library/web`](../../library/web) — a drop-in stylesheet built on the
role variables, nothing else.
