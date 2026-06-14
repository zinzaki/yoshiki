```
╭─ charts ───
│  data visualization in text — trends, bars, gauges
╰╴
```

> Numbers made visible without leaving the terminal. Block and braille glyphs
> carry the shape; color stays in role — gold/bone normal, warm only at a
> threshold worth noticing.

```
sparkline.txt   a trend in one line (▁▂▃▄▅▆▇█), inline, no axes
bars.txt        compare a few values, horizontal, partial-block ends
gauge.txt       one value vs its whole — block or braille, threshold colors
```

## Principles
1. **Shape first, number second** — the eye reads the bar before the digits.
2. **Color stays in role.** A chart is gold/bone by default; it turns
   persimmon/scarlet only when a threshold is crossed (rarity = power).
3. **Braille = 2×4 resolution** — eight sub-cell steps where a block gives one.
   Use it when density matters, blocks when clarity does.
4. **One metric per line.** Label left and dim, value right and bone.
