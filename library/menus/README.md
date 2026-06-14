```
╭─ menus ───
│  ready TUI menus, cards, lists
╰╴
```

> Ready TUI menus, cards and lists. Lift a block, paint it with the roles
> named beneath it. Two registers, never mixed in one block: soft rounded
> capsules (╭╮) for calm content, hard double spines (╔╠╚) for dense data.

## Patterns

| File | Register | For |
|---|---|---|
| `soft-card.txt`   | soft ╭╮ | a calm card: profile, quote, summary |
| `select-menu.txt` | soft    | a choice list: active vs idle, counters |
| `stat-tree.txt`   | hard ╔╠╚ | dense stats with right-aligned deltas |
| `panel.txt`       | hard    | a settings panel with sectioned rows |
| `status-line.txt` | inline  | a one-line summary / status bar |
| `table.txt`       | table   | dense rows, aligned columns, one selected (k9s) |
| `miller.txt`      | columns | parent · current · preview (yazi file nav) |
| `multipanel.txt`  | panels  | list + detail, fixed positions (lazygit) |
| `keyhints.txt`    | inline  | bottom bar — what is pressable right now |

Three layout families, from researched TUIs: **multi-panel** (fixed panes,
lazygit/btop), **miller columns** (parent/current/preview, yazi/ranger),
**drill-down** (list → table → detail, k9s). Spatial consistency is the rule —
never move a panel without the user asking.

## How to paint a block

Plain text carries the shape; color carries the meaning. Apply:

```
frame / spine ╔╠╚ ╭╮ ─ │      -> border.hairline   (dim, gold-tinted)
section marker ⧉ · [ Header ] -> text.gold
field marker · keys           -> text.muted
values / body                 -> text.body
positive delta (+n)           -> ok.text
negative delta (-n)           -> danger.text   (rare — only real loss)
prompt / action >             -> action.text
selected row                  -> text.gold + action.tint background
counters, meta                -> text.ghost
```

## Rules
1. One register per block. Soft for words, hard for numbers.
2. A hard spine ≤ ~7 rows — split or summarize beyond that.
3. Deltas right-aligned in `( )`. One heavy rule per screen, max.
4. Never close the right edge of a wide box — line-wrap survives a spine,
   not a closed rectangle.
5. Gold is gilding: frames are thin gold-tinted lines, never filled bars.
