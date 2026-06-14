```
╭─ space ───
│  rhythm, margin and tracking — Ma in practice
╰╴
```

Space is a material, not a gap (間 Ma). These are the measured ways the
language uses emptiness — the part most styles forget to specify.

## Margin (余白) — never to the edge

Content never touches the frame. Leave a consistent inset; the breathing room
is composition, not waste.

```
╭────────────────────────────╮      bad — text on the wall
│text crammed to the border  │
╰────────────────────────────╯

╭────────────────────────────╮      good — one space of air each side
│  text with room to breathe │
╰────────────────────────────╯
```

## Rhythm — one unit, repeated

Pick one spacing unit and reuse it everywhere: between rows, between blocks,
around marks. Repetition builds a model the eye trusts; irregular gaps read as
noise. In a terminal the unit is one blank line; in prose, one rule.

```
section
  ─ one blank line ─
  row
  row
  ─ one blank line ─
section
```

## Tracking — air inside the word

Wide letter-spacing turns a word into a mark and reads as premium; tight text
reads as crowded and cheap.

```
NAME              label — normal tracking
N A M E           nameplate — 1 space (an emblem)
N  A  M  E        banner — 2 spaces (ceremonial)
```

Rule of thumb: body text normal, a heading may open up slightly, a nameplate
or banner is spaced. Never space body text — only marks.

## Weight at the top, air at the bottom

A block carries its weight high — title and content ride the upper edge; the
lower space is left open. A roof to hold, a floor to breathe (see `frames.md`).

## The density budget

```
70  tone — dark, the stage and the air
20  bone — text, the voice
 7  gold — seams, edges, marks
 3  triggers — scarlet / moss, by meaning only
```

If a screen feels busy, the fix is almost never a new element — it is more
emptiness around the ones already there.
