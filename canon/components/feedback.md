```
╭─ feedback ───
│  what the interface says back
╰╴
```

Every element here carries a **glyph**. Colour is the second cue, never the
first ([`../palette/ACCESSIBILITY.md`](../palette/ACCESSIBILITY.md)) — and in a
language this quiet, the glyph is usually enough on its own.

## Alert · callout

A left rule 2px in the role colour, `bg.surface`, radius 12px, 16px padding. The
glyph leads the first line; the title is bone, the body is secondary.

```
kind      glyph   rule            text
note      ◆       border.gold     text.body
success   ✓       ok.fill         ok.text
warning   ⚠       warn.text       text.body
danger    ✗       danger.fill     danger.text
```

Only `danger` may take a wash behind it (`danger.wash`), and only one alert on a
surface may be scarlet. An alert that cannot be dismissed says why.

## Toast

Bottom centre, `bg.raised`, hairline, radius 12px, one soft shadow. One line,
one glyph, no title. It lives 2–4 seconds and never carries the only copy of
information the user needs. Toasts stack downward, three at most; the oldest
leaves first. A toast never reports an error the user must act on — that is an
alert, in place.

## Badge · chip · tag

A pill, 22px tall, 11px mono, padding `0 10px`.

```
badge     border of the role, text of the role, transparent surface
count     bg.hover surface, text.secondary — a number, not a status
chip      removable: label + a ✗ in text.muted at the right inset
```

A badge is never a filled slab of gold. A dot-only badge is forbidden: a bare
coloured dot with no glyph or label carries meaning by colour alone.

## Status

```
● active      action.text or ok.text
○ idle        text.muted
◌ pending     text.muted, the dot breathing at ~2s
✓ healthy     ok.text
⚠ degraded    warn.text
✗ failing     danger.text
⊘ blocked     text.muted
```

The word travels with the mark wherever there is room for it. In a dense table
the glyph may stand alone — it is a shape, so it survives.

## Progress

Determinate: a 4px track in `border.hairline`, the filled part `action.edge`,
with the percentage in mono to the right. In text and terminals, the dot-matrix
or `▰▱` tape from [`../motion`](../motion) instead — never a solid slab bar.

Indeterminate: the braille spinner at ~90ms with a label saying what is
happening. A spinner with no label is a shrug. Beyond ~10 seconds, replace it
with progress or a written stage.

## Empty state

One glyph in `text.muted`, one line in `text.secondary` saying what would be
here, and — only if there is a real next step — one ghost button. No
illustration, no apology, no exclamation mark.

```
        ◌

  nothing deployed yet

  [ Deploy the first build ]
```

## Skeleton

A `bg.hover` block at the shape and size of the thing that is coming, pulsing
between 60% and 100% opacity over 1.6s. Never a shimmer sweeping across —
that is decoration pretending to be progress. Under
`prefers-reduced-motion` it holds still at 80%.
