```
╭─ pointer ───
│  tilt · spotlight · dual-cursor — driven by the pointer
╰╴
```

Pointer effects decorate; they never gate function.

## tilt-3d
`perspective()` + `rotateX/rotateY` from the pointer's position inside the element;
reset on `mouseleave`. Keep the angle small — a lean, not a flip.
```js
const x=(e.clientX-r.left)/r.width, y=(e.clientY-r.top)/r.height;
el.style.transform=`perspective(720px) rotateX(${(y-.5)*-9}deg) rotateY(${(x-.5)*9}deg) scale(1.02)`;
```

## spotlight
A soft gold light following the pointer across a surface — `--mx/--my` custom
properties feed a `radial-gradient` at those coordinates, low alpha (~.16). One
surface at a time.
```css
background: radial-gradient(circle at var(--mx,50%) var(--my,50%), rgba(216,175,82,.16), transparent 60%);
```

## dual-cursor
A custom cursor element eased toward the real pointer each frame with **lerp**
(linear interpolation) — the lag *is* the character: calm, trailing.
```js
pos.x += (target.x - pos.x) * 0.15;   // k ~ .15, inside requestAnimationFrame
```
Hide the native cursor only where the custom one adds meaning; never break usability.

## a11y
`prefers-reduced-motion` → no tilt, no lerp-cursor; a static spotlight, or none.
