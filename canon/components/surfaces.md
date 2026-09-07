```
╭─ surfaces ───
│  card, panel, dialog — the planes content sits on
╰╴
```

## The step ladder

```
bg.app        the page — the lacquer or the paper
bg.surface    a panel resting on it
bg.raised     a card resting on the panel
bg.hover      the same card, under the hand
```

Each step is separated by `border.hairline`, not by a shadow. Two steps is
usually the whole depth of an interface; three means the layout is nesting when
it should be dividing. Nothing casts a shadow except what floats above a scrim.

## Card

Radius 16px, `border.hairline`, padding 20–24px. Weight rides the top: title,
then content; the bottom is left open ([`../lexicon/space.md`](../lexicon/space.md)).

```
╭──────────────────────────────╮
│  TITLE            meta ·  ◆  │   ← heading + one mark, top
│  body                        │
│                              │   ← the floor breathes
╰──────────────────────────────╯
```

An interactive card takes `action.edge` on hover and moves 2px up — one
transition, no scale. A card is not a button: if the whole card is clickable,
it still carries a real link inside it for the keyboard.

## Panel · section

A panel is a card without the raise: `bg.surface`, hairline, 24–32px padding. A
panel header is a mono label in `text.muted`, spaced, over a hairline. Panels
divide a page; cards carry the things.

## Dialog

The one element that floats. Scrim: `bg.app` at 72%, no blur below
`prefers-reduced-transparency`. Card: `bg.raised`, radius 20px, one soft shadow,
max-width 480px for a decision and 720px for a form.

```
title       text.heading, serif
body        text.body — say what happens, in one or two lines
actions     bottom-right: quiet alternative, then primary
```

A destructive dialog names the thing it destroys and puts the scarlet on the
confirm button only — the title stays bone. Focus moves to the dialog on open
and returns to the opener on close; `Esc` always closes; focus never escapes the
card while it is open.

## Popover · menu

`bg.surface`, hairline, radius 12px, 8px padding, one soft shadow. Items are
36px rows taking `bg.hover` under the hand and `action.text` when selected. A
separator is a hairline with 6px above and below. No icons unless every item has
one. A menu never scrolls past ten items — beyond that, it is a picker with a
filter.

## Sheet

A panel that enters from an edge on small screens: full width, radius 20px on
the entering side only, a 32×3px `border.strong` grab handle centred at the top.
It obeys the same scrim and focus rules as a dialog.

## Divider

`border.hairline`, 1px, full bleed inside its container. A titled divider is a
hairline broken by a mono label in `text.muted`; a ceremonial one is broken by a
single `◆` in `text.gold`. Use one or the other on a page, never both.

```
────────────────────────────────
──────────── ◆ ─────────────────
──── SECTION ───────────────────
```

## Scroll

Thin scrollbars, `border.strong` thumb on a transparent track. A scrollable
region inside a card fades nothing and hides nothing — if content is cut, the
container is too small, and a gradient mask is a lie about where it ends.
