```
╭─ forms ───
│  the field — label, control, the one line that explains
╰╴
```

## Field anatomy

```
label              text.secondary · 12px · above the control, left aligned
control            the input itself
hint / error       11.5px · text.muted, or danger.text with a ✗ glyph
```

One line of help per field, under the control, and only when it earns its place.
Never both a hint and an error at once — the error replaces the hint. A required
field is marked on the label with a `·` in `action.text`, never with a scarlet
asterisk: required is not an error.

## Input · textarea · select

| part | role |
|---|---|
| surface | `bg.surface` (on `bg.app`) · `bg.raised` (inside a card) |
| edge | `border.strong` 1px |
| text | `text.body` |
| placeholder | `text.ghost` — a hint of shape, never instructions |
| hover | edge → `border.gold` |
| focus | edge → `action.edge` **and** `focus.ring` |
| error | edge → `danger.fill`, message in `danger.text` with `✗` |
| disabled | surface → `bg.app`, text → `text.ghost`, edge → `border.hairline` |

Height 40px, radius 12px, padding `0 14px`. A textarea keeps the same padding
and a 96px minimum height; it resizes vertically only. A select carries a `▾`
in `text.muted` at the right inset — the same glyph everywhere, never a chevron
image.

Numbers, tokens, paths and anything the user will compare vertically are set in
mono. Prose fields are set in the body face.

## Checkbox · radio

16×16, edge `border.strong`. Checked takes `action.edge` and draws the mark in
`action.text`: a `✓` for the checkbox, a filled 6px dot for the radio. The
checkbox has a 4px radius, the radio is a circle — the *shape* says single or
multiple before the colour does. An indeterminate checkbox draws a `–`, not a
filled square.

The label is the target: clicking the words toggles the control, and the whole
row shows the focus ring.

## Switch — a setting that applies itself

A 44×24 pill. Off: `bg.hover` track, `border.strong` edge, `text.muted` knob.
On: `action.tint` track, `action.edge` edge, `action.text` knob. The knob slides
180ms; nothing else moves.

Use a switch only when the change takes effect immediately. If it needs a Save,
it is a checkbox. A switch has no text of its own, so it needs a name given to
it — a `<label>` it sits inside, or an `aria-label`. An unnamed switch is a
control a screen reader can operate but not describe.

## Range

A 2px `border.strong` track; the travelled part takes `action.edge`. The handle
is a 14px circle in `action.text` with a 2px `bg.surface` ring so it reads on
any surface. The current value sits to the right in mono `text.secondary` — a
slider without a number is a guess.

## Settings row — a decision and the control that changes it

A settings list is not a form: nothing is submitted, and each control applies
itself the moment it moves. So it is laid out against the form rule above —
label **beside** the control, not above it — because here the label is a
statement of what is true, and the control on the right is its current answer.

The label takes `text.body`; an explanatory line under it takes `text.muted` and
stays one sentence. A hairline separates one decision from the next; never a box
per row, which turns a quiet list into a stack of cards. The last row drops its
rule — a border with nothing after it is a line to nowhere. Under about 480px
the control drops beneath its label rather than squeezing it.

Only controls that apply themselves belong here: a switch, a range, a segmented
control, a select. A text input in a settings row is a form in disguise and
needs a Save.

## Form layout

One column. Labels above controls, never beside them — a left-aligned label
column reads as a table and breaks on narrow screens. 20px between fields, 32px
between groups, a hairline and 32px before the actions. Actions bottom-right,
primary last.

## Validation

Validate on blur, never on every keystroke — a field that turns scarlet while
you are still typing is scolding, not helping. Re-validate on input only after
the field has already errored, so a fix clears immediately. One summary of what
blocks submission may sit above the actions; it links to the first bad field.
