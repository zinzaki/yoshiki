```
╭─ data ───
│  tables, lists and numbers — where the language earns its keep
╰╴
```

Data is where restraint pays: a dense screen with no colour to spend is exactly
the case the language was built for. Structure carries it — alignment, rhythm,
one mark per row at most.

## Table

```
header      mono · 11px · text.muted · spaced · a hairline underneath
row         44px comfortable / 32px compact · hairline between
hover       bg.hover across the full row
selected    action.tint surface + a ◆ in the first cell
```

- **Numbers right, text left, glyphs centred.** Numbers are mono and
  tabular-figured so the columns line up; a right-aligned mono column is the
  whole reason a table is readable.
- **No vertical rules.** The gap is the divider. Zebra striping is banned — a
  hairline per row already does it, and stripes fight the tone budget.
- The first column is the identity, in `text.body`; everything else is
  `text.secondary`. A cell earns `warn.text` or `danger.text` only when its
  own value crossed a threshold — one such cell per row, at most.
- A sortable header shows `▲` / `▼` in `action.text` on the active column only,
  and the header itself is a button with a real focus ring.
- Sticky headers keep their hairline. A horizontally scrolling table pins the
  first column and says so with a hairline, not a shadow.

```
service      req/min   p99    err %   status
─────────────────────────────────────────────
gateway       18,420    42     0.02   ✓ healthy
auth           9,310    88     0.11   ⚠ degraded
billing        1,208   140     1.40   ✗ failing
```

## List row

A table with one column and more air: 56px tall, a title in `text.body`, a
second line in `text.muted`, and the meta right-aligned in mono. One trailing
mark — a `→`, a status glyph, or a count. Not two.

## Key–value

The pattern for a receipt, a detail panel, a chat card: keys in `text.muted`
left, values in `text.body` right, a leader of space between. Keys keep a fixed
width so the values form a column.

```
⟥ item      Hand-bound notebook
⟥ status    ✓ paid
⟥ total     ¥ 4,820
```

## Tree

Indent by two spaces per level; draw the spine with `│ ├ └` in
`border.hairline`. The node glyph says the kind (`⬡` unit, `◆` important, `·`
leaf) and the count rides at the right in `text.muted`. Collapse state is a
`▸` / `▾` in `text.muted`, never a rotating triangle image.

## Stat tile

One number, one label, one delta. The number is the largest thing in the tile
and it is mono; the label is 11px mono `text.muted` above it; the delta sits
below with `▲` / `▼` and takes `ok.text` or `danger.text` **by direction, not by
sign** — a falling error rate is good.

```
╭──────────────╮
│  REQ / MIN   │
│  18,420      │
│  ▲ 4.2%      │
╰──────────────╯
```

Never a sparkline behind the number as a background wash. If the shape of the
series matters, give it its own row underneath, drawn in braille
([`../motion`](../motion) · [`../../library/charts`](../../library/charts)).

## Charts

One role colour per series, and the first series is `action.edge` — gold is the
subject, everything else is tone. A second series takes `text.secondary`, a
third `special.text`. Beyond three series a chart needs small multiples, not
more hues. Thresholds are `warn.text` and `danger.text`, drawn as a 1px dashed
rule, never as a filled band.

Axes and gridlines are `border.hairline` and may be omitted entirely — a
baseline and two labels usually say more than a grid.

## Meter

A meter shows a value against a scale; a progress bar shows a task in flight.
They look alike and answer different questions, and using one for the other is
the commonest mistake in this whole file. A meter carries its number, and its
threshold is drawn as a **1px mark**, never as a filled band — a band colours
every value on the wrong side of it, including the ones that are still fine.

## Steps and timeline

The same sequence, twice. `.y-steps` is inline, for when only the position
matters; the timeline is vertical, for when each step has something to say.
Both take the state marks from [`feedback.md`](feedback.md) and nothing else in
that position. The number of steps is stated up front and never changes: a
sequence that grows a fourth step at step three has lied twice.

## Pagination

`‹ 1 2 3 ›` in mono; the current page takes `action.text` and `action.tint`, the
rest `text.secondary`. Prefer a range label — `21–40 of 318` in `text.muted` —
over a long numbered strip. An infinite list still says how many are loaded.

## Density and truncation

Truncate with `…` at the end of the line, never in the middle, and keep the full
value available on hover and to a screen reader. A number is never truncated: if
it does not fit, the column is wrong.
