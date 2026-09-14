# Roles — the contract every palette fills

A role is a job a colour does. Objects and patterns consume roles, never raw values, so any palette
of the family can dress any interface. Every palette must resolve every role below, and the build
proves the contrast of each one on every surface it can sit on (`canon/palettes/CONTRAST.md`).

v2 names are the contract. During the transition the build derives them from the v1 names
(`ROLE_ALIASES` in `tools/build.py`); both names resolve to the same value, and the v1 names are
removed in the next major version.

## Surfaces and lines

| role | job |
|---|---|
| `bg.app` | the ground of the whole window or page |
| `bg.surface` | a panel resting on the ground |
| `bg.raised` | a panel above a panel: popover, card on a panel |
| `bg.hover` | the pointer or keyboard is on it |
| `border.hairline` | quiet separation |
| `border.strong` | a boundary that must be seen |

## Text

| role | v1 name | job |
|---|---|---|
| `text.heading` | — | titles |
| `text.primary` | `text.body` | running text and labels |
| `text.secondary` | — | supporting text |
| `text.muted` | — | meta, hints |
| `text.ghost` | — | placeholders, disabled (3:1) |

## Title bar — NieR menu grammar

| role | derived from | job |
|---|---|---|
| `bar.fill` | `text.body` | the solid section bar |
| `bar.text` | `bg.app` | the label on the bar |

## Constant accent — structure, always present

| role | v1 name | job |
|---|---|---|
| `accent.edge` | `action.edge` | the frame of the selected row, the primary control's edge, the mark |
| `accent.text` | `text.gold` | accent used as text (≥ 4.5:1) |
| `accent.hover` | `action.hover.edge` | the edge under the pointer |
| `accent.tint` | `action.tint` | a faint wash inside an accented control |
| `focus.ring` | — | keyboard focus |
| `selection.bg` | — | selected text |

## Rare signal — something is wrong or irreversible

At most one signal element per view.

| role | v1 name | job |
|---|---|---|
| `signal.fill` | `danger.fill` | destroy button, blocking badge |
| `signal.text` | `danger.text` | error text |
| `signal.on-fill` | `danger.on-fill` | label standing on the fill |
| `signal.wash` | `danger.wash` | field behind an error message |
| `glow` | `danger.fill` | colour of the ambient glow behind glass (graphic zone) |

## Status

`ok.text`, `ok.fill`, `ok.on-fill`, `ok.wash`, `warn.text`, `info.text`, `special.text` — events
other than the signal. Every status also carries a glyph or icon.

## Code

`syntax.keyword`, `syntax.function`, `syntax.string`, `syntax.number`, `syntax.type`,
`syntax.constant`, `syntax.comment` — measured on `bg.app`. Terminal colours (`term.*`, the ANSI-16 set)
live in each palette's `terminal` block and are measured on the terminal background.

## Effects

`effect.glass`, `effect.sheen` — inputs to materials; they move to `canon/materials/` manifests.
