```
╭─ motion ───
│  loading & progress — dot-matrix
╰╴
```

> Loading and progress the dot-matrix way: dots forming and fading, density
> as meaning. Less motion, more sense — never a dizzy whirl.

```
spinner.txt    braille dots, one cell, live ~90ms — the chosen spinner
progress.txt   cells fill left→right, density = progress — the chosen bar
```

## Principles
1. **Density carries meaning** — a denser cell is "more"; the eye reads the
   fill before the number.
2. **A text spinner is discrete** — it lives at ~90ms (live). Slower reads as
   lag, faster as a blur. Smoothness belongs to progress, not to spinners.
3. **One role-color per run** — `kin-1` for work, `mori-1`/`mori-0` for done,
   `aka-0` only for a failing step.
4. **Resolve, never loop on done** — finish on a held full matrix, then a
   single `✓`. The animation earns its end.
