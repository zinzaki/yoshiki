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
1. **One effect per surface.** Stacking reads as noise; the air rule applies to motion too.
2. **Warm always.** Tint toward lacquer / gold; never a neutral-white or blue glow.
3. **By place.** Cards, heroes, hover states — yes. Terminal, code, dense data, body
   text — no. If a surface is for reading or working, it stays flat.
4. **Fallback is mandatory.** Honor `prefers-reduced-motion` (kill tilt, aurora, sheen,
   the lerp-cursor) and `prefers-reduced-transparency` (a solid surface instead of
   glass). Guarantee text contrast over glass with a scrim or a minimum opacity.
5. **Restraint over spectacle.** Small displacement, low opacity, single passes. The
   effect should be felt before it is noticed.

## Effects consume roles too

An effect that hard-codes a warm rgba is a dark-theme effect wearing a costume:
on paper it becomes a dark card on a light page, or a shadow pretending to be a
highlight. So the palette carries two roles for exactly this:

| role | is |
|---|---|
| `effect.glass` | the surface a frosted ground is made of |
| `effect.sheen` | the specular — *the light itself*, which flips with the stage |

On lacquer the light is warm bone; on paper it is lighter than the page. Reach
for the role and an effect survives the theme switch.

These are the source-of-truth specs; ready instances live in
[`../../library/effects`](../../library/effects) — plain CSS on those roles,
with the mandatory fallbacks already written.
