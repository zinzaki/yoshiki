```
╭─ controls ───
│  buttons, links and the things that do
╰╴
```

A button is a **surface with an edge**, not a coloured block. The hierarchy
between buttons is carried by the edge and the text, never by a bigger fill.

## The ladder — four ranks, one screen

```
primary     bg.raised   + action.edge 1.5px   + action.text     ◆ one per view
ghost       transparent + border.strong 1px   + text.secondary
quiet       transparent + no edge             + text.secondary    (a link, really)
danger      danger.fill + no edge             + danger.on-fill  ✗ one per surface
```

`ok` exists but is rarely earned: prefer a primary button whose *label* says the
good thing ("Publish") over a moss-filled button. Reach for `ok.fill` only when
a moment must read as completion itself.

| part | role |
|---|---|
| surface | `bg.raised` (primary) · transparent (ghost, quiet) |
| edge | `action.edge` · `border.strong` · none |
| label | `action.text` · `text.secondary` · `danger.on-fill` on `danger.fill` |
| hover | edge → `action.hover.edge`, surface → `action.tint` |
| pressed | edge deepens, the whole control drops 1px — no scale bounce |
| focus | `focus.ring`, 2px, offset 2px — over the edge, never instead of it |
| disabled | edge → `border.hairline`, label → `text.ghost`, no hover |
| loading | the label is replaced by a spinner **and stays the same width** |

Never: a gold-filled rectangle, two primaries on one view, a danger button next
to a danger link, or a button that changes size when it becomes busy.

## Sizes

```
sm    h 32   pad 0 14   text 13
md    h 40   pad 0 20   text 14      the default
lg    h 48   pad 0 28   text 15
icon  40×40  a single glyph, centred, no label
```

Radius 12px at every size. An icon button is square with a 12px radius, not a
circle — circles are for status dots and avatars.

## Label

Sentence case, a verb, no ellipsis unless a dialog follows ("Delete…"). No
ALL-CAPS on a button; spaced capitals are a nameplate, not an action
([`../lexicon/space.md`](../lexicon/space.md)). A glyph may lead the label when
it carries meaning — `❯ Run`, `✓ Confirm` — never as decoration.

## Groups

Buttons in a row sit 12px apart with the primary **last** (rightmost), so the
eye lands on it after reading the alternatives. A destructive action never sits
adjacent to the primary; put the quiet alternative between them, or move the
destructive out of the row entirely.

## Segmented control — one of a few

A single `bg.surface` track with a hairline edge; the chosen segment takes
`action.tint` and `action.text`, the rest `text.secondary`. No inner borders
between segments — the tint is the boundary. Three to five segments; beyond
that it is a select.

The shape is one thing; the role it plays is two. Say which:

- **A toggle group** — a filter, a unit, a sort order. The buttons carry
  `aria-pressed`, and the group carries `role="group"` with a name.
- **A tablist** — the segments swap panels below them. The buttons carry
  `role="tab"`, `aria-selected` and `aria-controls`; the group carries
  `role="tablist"`. A tablist is **one** tab stop: the selected tab is
  `tabindex="0"`, the rest `-1`, and the arrow keys move between them. Paying
  one Tab per segment before reaching the panel is the exact cost the pattern
  exists to remove.

`aria-selected` is only meaningful on a tab or an option. Putting it on a plain
button says nothing to a screen reader, so a toggle group that borrows it is
silently unlabelled.

## Keys, tags and the split button

A **keycap** is an object, so it gets an object's edge: the same hairline as
everything else, with the bottom border one step stronger. That asymmetry is the
entire illusion, and a shadow would be both heavier and less convincing.

A **tag** is a badge you can take off. The remove control is a `✗` in
`text.muted` that turns `danger.text` only under the hand — a row of scarlet
crosses would spend the trigger on housekeeping.

A **split button** is one action and its variants: the primary on the left, a
`▾` on the right, sharing an edge with no seam between them. Use it only when
the left half is genuinely the common case; when it is not, it is a menu.

A **tooltip** names a control the pointer has reached. It is a label, never a
place to put content — anything a reader must read cannot live somewhere it can
only be found by hovering, and never on a touch screen at all.

## Links

`text.link`, no underline at rest, underline on hover — the colour already
carries it and the rest of the page is quiet enough. In running prose the
underline may be permanent; in dense UI it is not. An external link takes a
trailing `↗`, never an icon font.

```
in prose      a gold word, underlined
in UI         a gold word, underline on hover
external      a gold word ↗
disabled      text.ghost, no hover, still focusable if it explains itself
```
