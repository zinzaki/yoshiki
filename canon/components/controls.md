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
danger      danger.fill + no edge             + #FFF3ED         ✗ one per surface
```

`ok` exists but is rarely earned: prefer a primary button whose *label* says the
good thing ("Publish") over a moss-filled button. Reach for `ok.fill` only when
a moment must read as completion itself.

| part | role |
|---|---|
| surface | `bg.raised` (primary) · transparent (ghost, quiet) |
| edge | `action.edge` · `border.strong` · none |
| label | `action.text` · `text.secondary` · `#FFF3ED` on `danger.fill` |
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
