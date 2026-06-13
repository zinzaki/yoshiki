# Menus 品

> ⟦ 様式 ⟧ — ready TUI menus, cards and lists. Lift a block, paint it with the
> roles named beneath it. Two registers, never mixed in one block: soft rounded
> capsules (╭╮) for calm content, hard double spines (╔╠╚) for dense data.
> Built on `../../canon/lexicon/frames.md` and `glyphs.md`.

## Patterns

| File | Register | For |
|---|---|---|
| [`soft-card.txt`](soft-card.txt)   | soft ╭╮ | a calm card: profile, quote, summary |
| [`select-menu.txt`](select-menu.txt) | soft    | a choice list: active vs idle, counters |
| [`stat-tree.txt`](stat-tree.txt)   | hard ╔╠╚ | dense stats with right-aligned deltas |
| [`inventory.txt`](inventory.txt)   | hard    | sectioned slots — `『』` headers, `〘〙` cells |
| [`status-line.txt`](status-line.txt) | inline | a one-line summary / status bar |

## How to paint a block (role map)

Plain text carries the shape; color carries the meaning. Apply:

```
frame / spine ╔╠╚ ╭╮ ─ │   → border.hairline   (dim, gold-tinted)
section sigil ⧎ · brackets 『』 → text.gold
field marker ⟥ · keys      → text.muted
values / body              → text.body
positive delta (+n) ▲      → ok.text
negative delta (-n) ▼      → danger.text   (rare — only real loss)
prompt / action ❯          → action.text   (gold edge)
selected row               → text.gold + action.tint background
counters, meta             → text.ghost
```

## Rules
1. One register per block. Soft for words, hard for numbers.
2. A hard spine ≤ ~7 rows — split or summarize beyond that.
3. Deltas right-aligned in `( )`. One heavy rule `━━━` per screen, max.
4. Never close the right edge of a wide box — line-wrap survives a spine,
   not a closed rectangle.
5. Gold is gilding: frames are thin gold-tinted lines, never filled bars.
