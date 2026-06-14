```
╭─ frames ───
│  box-drawing — two registers, soft and hard
╰╴
```

Two registers, two poles. Soft rounded capsules for calm content;
hard double-line trees for dense data. Mixing registers inside one block
is forbidden — the contrast between blocks is the point.

## Soft register ╭╮ — the noble pole

```
╭──────────────────────────╮
│  title or quiet content  │
╰──────────────────────────╯

╭─ ◆ ─ ~/project ─  main  ~2 +1
╰─ ❯                                   ← the starship canon: open capsule
```

Use for: prompts, greetings, quotes, single cards. Corners are always
rounded `╭ ╮ ╰ ╯`, line is light `─ │`.

## Soft + sharp — hard marks inside a soft form

The signature move: a calm rounded shell carrying precise sharp angles.
Keep two things apart — a **sharp mark is decoration, not a title**. Don't put
a corner-mark and heading text on the same line.

**Paired diagonal marks (balanced).** A sharp inset top-left and a matching one
bottom-right — the soft shell holds, the diagonal gives it tension and balance.

```
╭────────────────────────────╮
│ ┌╴                         │
│     content rides here     │
│                        ╶┘  │
╰────────────────────────────╯
```

**Title + body (weight at the top).** If the first line is a heading, it is
text only — no corner-mark. Weight sits up top, air breathes at the bottom.

```
╭────────────────────────────╮
│  TITLE                     │
│  ───────                   │
│  body sits under the title │
╰────────────────────────────╯
```

Rule: if a decorative line opens the top, balance it with one closing the
bottom — never decorate one edge and leave the other bare.

## The break — an open form that still holds

A form that does not fully close — for lightness and air. **The top stays
sealed (both top corners, including the top-right), and the break opens at
the bottom / lower side.** A roof to hold it, an open floor to breathe.

```
╭────────────────────────────╮
│  open form, it breathes
│
╰───────────────╴
```

Never break the top-right corner — the roof is what keeps a broken form
intentional instead of accidental.

## Hard register ╔╠╚ — the chaos pole

```
⧎ Rating
╔ Victims  | top 3
╠ Income   | top 55
╚ Corp     | top 4

⟥ Characteristics:
╔ Attack:  400 lvl   (+3)
╠ Defense: 175 lvl   (+54)
╠ Effect:  365 lvl   (+36)
╚ Radar:   111 lvl   (+29)
```

Use for: stat trees, dense TUI data, game-like cards. Double line `╔ ╠ ╚`
draws a spine; each row may carry a semantic glyph and a right-aligned
delta in parentheses.

## Section heads

```
[ Settings ]           bracket title — groups, collections
⧉ Metrics              marker title — data blocks
━━━━━━━━━━━━━━━        heavy rule — chapter separator (one per screen)
─────────────          light rule — paragraph separator
```

## Slots and summaries

```
[ ◆ ][ ◆ ][ ◆ ][ ◆ ][ + ]          slot row — items, badges, empty (+)
+ 1.8k  |  - 0.4k  |  ◆ 470  |  new 1   inline summary, pipe separators
```

## Rules

1. Soft for words, hard for numbers.
2. A tree (`╔╠╚`) never exceeds ~7 rows — split or summarize.
3. Deltas right-aligned in parentheses: `(+24)`.
4. Never close the right side of wide frames in chat/terminals —
   line-wrap destroys closed boxes; spines survive.
5. One heavy rule `━━━` per screen, maximum.

---
Ready-made blocks built on these frames live in [`../../library/menus`](../../library/menus).
