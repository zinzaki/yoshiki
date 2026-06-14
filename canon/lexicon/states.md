```
╭─ states ───
│  how an element shifts under interaction
╰╴
```

An element keeps its identity across states; only a *role* shifts. Never
invent a new hue for a state — brighten, dim, or swap the role it already uses.

| State | Shows as |
|---|---|
| default | tone surface; a gold edge if it is actionable |
| hover | edge brightens to `kin-0`, a faint gold tint behind |
| focus | a gold ring (`kin-1` ~14%) — **always visible** (keyboard a11y) |
| active / pressed | edge deepens to `kin-2`, tint deepens |
| selected | gold text + `action.tint` background — chosen of many |
| disabled | `bone-4` text, no edge — present but quiet, never gone |
| loading | a dot-matrix spinner replaces the label (see `../../library/motion`) |
| error | scarlet edge (`aka-1`), text `aka-0` — one per surface |
| empty | one quiet glyph + `bone-3` line — "nothing here yet", no alarm |

## Rules

1. **Focus is never invisible.** Keyboard users must see where they are —
   the one state you may not skip.
2. **A state shifts a role**, it does not add a new color. Brighter, dimmer,
   or a swap — the element stays itself.
3. **One transition reads as calm**; several firing at once read as noise.
4. **Disabled is dimmed, not removed** — the layout must not jump when an
   element turns off.
5. **Error spends the scarlet trigger** — one errored element per surface,
   never a field of red.
