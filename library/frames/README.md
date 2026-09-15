```
╭─ frames ───
│  every way this language draws an edge
╰╴
```

> A frame is the cheapest structure there is: it costs one line and it tells the
> eye where a thing begins. This is the catalogue — twelve registers, each with
> the case it is for and the case it is wrong for. Lift a block and paint it with
> the roles named beneath it.

## The registers

| File | Register | Use it for |
|---|---|---|
| [`soft.txt`](soft.txt) | rounded `╭╮╰╯` | calm content, words, cards, anything read slowly |
| [`hard.txt`](hard.txt) | double spine `╔╠╚` | dense data, numbers, machine output |
| [`minimal.txt`](minimal.txt) | rules and marks only | long documents, logs, anything that scrolls |
| [`brackets.txt`](brackets.txt) | corner marks `┌ ┐ └ ┘` | a target, a crop, something being measured |
| [`titled.txt`](titled.txt) | a name set into the edge | a panel that needs to say what it is |
| [`callout.txt`](callout.txt) | one left rule | a note inside running text |
| [`nested.txt`](nested.txt) | frame inside frame | a reply, a quote, a sub-result |
| [`dividers.txt`](dividers.txt) | horizontal rules | between sections, never around them |
| [`prompt.txt`](prompt.txt) | the two-line capsule | a shell prompt, the language's signature |
| [`tabs.txt`](tabs.txt) | an edge with a notch | one of several views |
| [`ascii.txt`](ascii.txt) | `+---+` | when box-drawing will not survive |
| [`sharp.txt`](sharp.txt) | one hard mark in a soft frame | the single sharp detail a screen is allowed |

## The two laws of frames

**One register per block.** Soft for words, hard for numbers. A rounded capsule
containing a table of figures reads as indecision, and so does a double spine
around a paragraph. Pick by what is inside, not by what looks nice.

**Never close the right edge of a wide box.** A line-wrapping terminal survives a
spine and destroys a rectangle. Anything wider than about fifty columns opens on
the right:

```
╭─ this survives a narrow window ────
│  the right edge is simply absent
╰╴

╭─ this does not ───────────────────────────────────────────╮
│  a wrap turns the closing column into confetti            │
╰───────────────────────────────────────────────────────────╯
```

## How to paint any of them

```
frame · spine · rule      -> border.hairline    (dim, gold-tinted)
a frame around an action  -> action.edge        (gold, 1.5px)
title set into the edge   -> text.gold
body                      -> text.body
meta, counters            -> text.muted
the one sharp mark        -> text.gold
an errored frame          -> danger.fill on the edge only, never a wash
```

Gold is gilding: a frame is a thin gold-tinted line, never a filled bar. An
edge is the one place gold is allowed to be the loudest thing.
