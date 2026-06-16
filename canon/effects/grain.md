```
╭─ grain ───
│  film grain — warmth, not noise
╰╴
```

**What it is.** A fine, near-static noise texture laid *over* the interface at low
opacity — like the grain of film or a photocopy. It breaks flat-color banding and
adds a warm, analog, tactile feel: the opposite of sterile flat plastic. You feel it
before you see it.

**Technique.** An SVG `feTurbulence` overlay, blended low.
```html
<filter id="grain"><feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="4"/></filter>
```
```css
#grain{
  position: fixed; inset: 0; pointer-events: none;
  opacity: .035;               /* .03–.05 — above ~.08 it reads as dirt */
  mix-blend-mode: overlay;
  background-size: 190px;      /* tile the noise */
}
```

**Restraint.** One grain layer for the whole page, fixed, `pointer-events: none`.
Opacity `.03–.05`. It is the warmth under everything, never a visible texture.

**a11y.** Static and harmless to motion or contrast — leave it on. Optionally drop it
under `prefers-reduced-transparency` for users who want flatness.
