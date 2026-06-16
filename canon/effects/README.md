```
╭─ effects ───
│  glass, grain & pointer motion — by place, never Apple-glossy
╰╴
```

> Optional richness, for web surfaces only. The terminal, code and dense data stay
> flat — effects live where a pointer and a GPU do. Tasteful, warm-tinted, restrained:
> a hint of a lens, not a fish-eye; a breath, not a strobe.

| File | Effects |
|---|---|
| [`glass.md`](glass.md) | frosted-card · refraction-lens |
| [`grain.md`](grain.md) | film-grain |
| [`pointer.md`](pointer.md) | tilt-3d · spotlight · dual-cursor |
| [`ambient.md`](ambient.md) | aurora-bg · sheen-sweep |

## The effects law
1. **One effect per surface.** Stacking reads as noise — 間 Ma applies to motion too.
2. **Warm always.** Tint toward lacquer / gold; never a neutral-white or blue glow.
3. **By place.** Cards, heroes, hover states — yes. Terminal, code, dense data, body
   text — no. If a surface is for reading or working, it stays flat.
4. **Fallback is mandatory.** Honor `prefers-reduced-motion` (kill tilt, aurora, sheen,
   the lerp-cursor) and `prefers-reduced-transparency` (a solid surface instead of
   glass). Guarantee text contrast over glass with a scrim or a minimum opacity.
5. **Restraint over spectacle.** Small displacement, low opacity, single passes. The
   effect should be felt before it is noticed.

These are the source-of-truth specs; ready instances live in
[`../../library`](../../library) (the showcase and snippets).
