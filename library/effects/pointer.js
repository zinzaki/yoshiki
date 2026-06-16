// yoshiki · library/effects · pointer — canon: canon/effects/pointer.md
// tilt-3d + spotlight + dual-cursor (lerp). all guarded by prefers-reduced-motion.
//
// spotlight: pair bindTilt with a surface that reads the props it sets, e.g.
//   .y-spot{ background:radial-gradient(circle at var(--mx,50%) var(--my,50%),
//            rgba(216,175,82,.16), transparent 60%); }

const RM = matchMedia('(prefers-reduced-motion:reduce)').matches;

// add class "y-tilt" to a card; this leans it and feeds --mx/--my for a spotlight.
export function bindTilt(el){
  if (RM) return;
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
    el.style.transform = `perspective(720px) rotateX(${(y-.5)*-9}deg) rotateY(${(x-.5)*9}deg) scale(1.02)`;
    el.style.setProperty('--mx', x*100 + '%');
    el.style.setProperty('--my', y*100 + '%');
  });
  el.addEventListener('mouseleave', () => { el.style.transform = ''; });
}

// a trailing custom cursor eased toward the pointer — the lag is the character.
export function bindCursor(node, k = 0.15){
  if (RM) return;
  let px = innerWidth/2, py = innerHeight/2, tx = px, ty = py;
  addEventListener('pointermove', e => { tx = e.clientX; ty = e.clientY; });
  (function loop(){
    px += (tx-px)*k; py += (ty-py)*k;
    node.style.transform = `translate(${px}px, ${py}px)`;
    requestAnimationFrame(loop);
  })();
}
