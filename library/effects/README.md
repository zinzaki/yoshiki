```
╭─ effects ───
│  ready web effects — lift one, keep one per surface
╰╴
```

> Copy-paste instances of [`../../canon/effects`](../../canon/effects). Each names its
> canon source. Warm-tinted, palette-colored, and every one ships a `prefers-reduced-*`
> fallback. One effect per surface; never on terminal, code or dense data.

```
frosted-card.css   frosted glass + specular edge        ← canon/effects/glass.md
refraction.html    real SVG lens + blur fallback         ← canon/effects/glass.md
grain.css          film-grain overlay                    ← canon/effects/grain.md
pointer.js         tilt-3d · spotlight · dual-cursor      ← canon/effects/pointer.md
aurora.js          warm particle background               ← canon/effects/ambient.md
sheen.css          single specular sweep on hover         ← canon/effects/ambient.md
```

Colors reference palette variables (`--kin-1`, `--ink-2`, …) — load a theme CSS
(`canon/palette/<theme>/<theme>.css`) first.
