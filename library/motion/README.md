# Motion

> Loading and progress, the dot-matrix way: dots forming and fading, density
> as meaning. Less motion, more sense — a bright cell that breathes or rides,
> never a dizzy whirl. Lively-medium tempo by default.

```
spinner-matrix.txt   a bright cell riding a row of braille dots (ping-pong)
progress-matrix.txt  cells filling left→right; density = progress
pulse.txt            a single breathing dot — the calm fallback
```

## Principles
1. **Density carries meaning** — a cell brighter/denser is "more". The eye
   reads the wave before the number.
2. **No dizziness** — motion travels or breathes; it never spins fast enough
   to distract. Lively but composed (~90ms; pulse ~140ms).
3. **One role-color** — all dots in a run share one color: `kin-1` for work,
   `mori-1`/`mori-0` for success, `aka-0` only for a failing step.
4. **Resolve, don't loop forever on done** — finish on a held full matrix,
   then collapse to a single `✓` mark. The animation earns its end.

## Use
Frames are plain braille rows — lift them into any language: print a frame,
`\r`, sleep the tempo, advance. Braille is 1 cell wide everywhere, so rows
stay aligned in any monospace terminal.
