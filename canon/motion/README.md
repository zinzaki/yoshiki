```
╭─ motion ───
│  loading & progress — density as meaning, never a slab
╰╴
```

> Loading and progress the dot-matrix way: dots forming and fading, density as
> meaning. Less motion, more sense — never a dizzy whirl, never a heavy block-slab.

```
spinner.txt    braille · arc · circle-pulse — the canonical three (~90ms)
catalog.txt    the wider block-free menu — dots · circles · toggles · arrows
progress.txt   dot-matrix fill · ▰▱ square bar · number-only — determinate
```

## Spinners — indeterminate (one cell, live)
```
braille  ⠋⠙⠹⠸⠼⠴⠦⠧⠇⠏   the default — finest, smooth
arc      ◜◠◝◞◡◟           a calmer ring
pulse    ◌○◎◉●◉◎○         a breathing dot — life, in one cell
```

## Progress — determinate (density = progress)
```
dot-matrix   cells fill L→R; the leading cell ramps its density (the default)
▰▱ bar       minimal squares — filled ▰ gold, track ▱ dim; light, not a slab
number-only  just  72%  — when even a bar is too much
```

## Blacklist — never
```
█ ▇ ▆ ▅ ▄ ▃ ▂ ▁   and   ▓ ▒ ░     heavy filled blocks — a crude slab, not our craft
a thin line with a moving head      fussy, low-quality
faster than ~60ms / slower than ~120ms   a blur, or lag
```

## Principles
1. **Density carries meaning** — a denser cell is "more"; the eye reads the fill
   before the number.
2. **A text spinner is discrete** — drive it at a LIVE tempo (~90ms). Slower reads as
   lag, faster as a blur. Smoothness belongs to progress, not to spinners.
3. **One role-color per run** — `kin-1` for work, `mori-1`/`mori-0` for done,
   `aka-0` only for a failing step.
4. **Resolve, never loop on done** — finish on a held full matrix, then a single
   `✓`. The animation earns its end.

Upstream frame-sets to map onto (not depend on): `sindresorhus/cli-spinners`
(`arc`, `aesthetic`, circle pulses), `charmbracelet/bubbles` (`Meter`, `Points` —
but NOT `Pulse`, which is the heavy-block look we blacklist), `indicatif` (its
`progress_chars` is fully replaceable, so swap blocks for `▰▱`).
