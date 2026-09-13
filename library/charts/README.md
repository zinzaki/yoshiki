```
╭─ charts ───
│  data visualization in text — squares & dots, never a slab
╰╴
```

> Numbers made visible without heavy fills or wiry lines. Squares (▰) and
> dot-matrix (braille) carry the value; gold stays the accent, warmth appears
> only at a threshold.

Ten patterns. Pick by the question the reader is actually asking.

### How is it moving?
```
sparkline.txt   a trend in one line — braille, low blocks or dots (never █)
histogram.txt   the shape of a distribution, with the percentiles it owes you
timeline.txt    durations on a shared axis — stages, waterfalls, lanes
```

### How do these compare?
```
bars.txt        a few values — plain, tracked, grouped, diverging, stacked, ranked
table.txt       when a chart would lose the exact number
scatter.txt     two variables, one point each — braille point clouds
```

### How far along is it?
```
gauge.txt       one value against its whole — rows, thresholds, budgets, rings
kpi.txt         the one figure a person came for, with its delta and trend
```

### Where is it concentrated?
```
heatmap.txt     density over two axes — one ramp, five steps, never a hue rotation
```

### The furniture
```
axis.txt        ticks, scales, legends, units, and the empty state
```

## Principles
1. **No slabs, no wires.** Not a run of `█`, not a `[████]` box, not a thin
   `───●` line — squares (`▰▱`) and braille dots read lighter and truer.
2. **Gold is the accent**, the empty track is `ink-3` — quiet.
3. **Shape first, number second**; label left and dim, value right and bone.
4. **Warmth only at a threshold** — persimmon past warn, scarlet past critical.
   A colour spent on a whole series says nothing; spent on the one value that
   crossed a line, it says everything.
5. **Braille = 2×4 density** when you want more resolution than ten squares give.
6. **A chart without a scale is decoration.** A percentage, a pair of end
   labels, or the latest value printed beside it — one of the three, always.
7. **One ramp per grid, and it never changes hue.** A ramp that rotates through
   colours cannot be ordered by eye, which is the only job a ramp has.
8. **An arrow states direction; a mark states judgement.** `▲` is not "good" —
   refunds rising is `▲ ⚠`.
9. **Say when the axis lies.** A y-axis that does not start at zero doubles
   every slope, so it carries a printed note or it starts at zero.
10. **Empty renders.** A chart with no data still draws its frame and says so;
    one that collapses to nothing reads as a bug.
