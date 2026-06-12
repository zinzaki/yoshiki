# Frames — box-drawing structures

Two registers, two poles. Soft rounded capsules for calm content;
hard double-line trees for dense data. Mixing registers inside one block
is forbidden — the contrast between blocks is the point.

## Soft register ╭╮ — the noble pole

```
╭──────────────────────────╮
│  title or quiet content  │
╰──────────────────────────╯

╭─ 心 ─ ~/Dev/style ─  main  ~2 +1
╰─ ❯                                   ← the starship canon: open capsule
```

Use for: prompts, greetings, quotes, single cards. Corners are always
rounded `╭ ╮ ╰ ╯`, line is light `─ │`.

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
『 Artifacts 』        bracket title — inventory, collections
⧎ Rating               sigil title — data blocks
━━━━━━━━━━━━━━━        heavy rule — chapter separator (one per screen)
─────────────          light rule — paragraph separator
```

## Slots and summaries

```
〘⩔〙〘⟁〙〘֍〙〘⛨〙〘⧖〙              slot row — equipment, badges
➕ 1.8M | ➖ 1.5M | ⬡ 470 | 🆕 1     inline summary with pipe separators
```

## Rules

1. Soft for words, hard for numbers.
2. A tree (`╔╠╚`) never exceeds ~7 rows — split or summarize.
3. Deltas right-aligned in parentheses: `(+24)`.
4. Never close the right side of wide frames in chat/terminals —
   line-wrap destroys closed boxes; spines survive.
5. One heavy rule `━━━` per screen, maximum.
