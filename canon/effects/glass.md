```
╭─ glass ───
│  frosted card & refraction lens
╰╴
```

Warm glass, not Apple glass. Two tiers: a frosted card anyone can use, and a real
refraction lens where the platform allows it.

## frosted-card
`backdrop-filter: blur() saturate()` over a warm, semi-opaque fill. What separates
premium from cheap flat-white is the layering:
- a thin **specular edge** (1px light line, top / left)
- a faint **inner shadow**
- fine **film grain** (see [`grain.md`](grain.md))
- a **warm tint** toward lacquer / gold

```css
background: rgba(24,20,14,.46);
border: 1px solid rgba(216,175,82,.14);
backdrop-filter: blur(8px) saturate(1.4);
/* + ::before specular gradient, + a grain overlay */
```

## refraction-lens
`backdrop-filter` blurs but **cannot bend** the background — real refraction needs SVG.
- `feTurbulence` (`fractalNoise`, low `baseFrequency`) generates a displacement map.
- `feDisplacementMap` offsets each pixel: **R channel → X, G → Y**; `scale` maps
  0–255 to ±scale px. Apply as `backdrop-filter: url(#refract)`.
- This is **Chrome-only** as a backdrop → progressive enhancement: blur everywhere,
  the lens is a bonus behind `@supports (backdrop-filter: url(#x))`.

```html
<filter id="refract">
  <feTurbulence type="fractalNoise" baseFrequency="0.012 0.014" numOctaves="2" seed="7" result="n"/>
  <feGaussianBlur in="n" stdDeviation="1.3" result="nb"/>
  <feDisplacementMap in="SourceGraphic" in2="nb" scale="40" xChannelSelector="R" yChannelSelector="G"/>
</filter>
```

**Restraint (not Apple's excess):** small `scale` (~30–40), low frequency, a warm
tint, a thin edge — a lens hint, not a distortion. Chromatic edge (optional, dosed):
three displacement passes, one per channel, `scale` offset slightly — a faint
prismatic rim, never a rainbow.

## a11y
`prefers-reduced-transparency` → a solid `ink-2` surface, no blur, no displacement.
Always keep text over glass at contrast (scrim or minimum opacity).
