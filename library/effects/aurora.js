// yoshiki · library/effects · aurora-bg — canon: canon/effects/ambient.md
// a light warm particle field on lacquer. palette dots only; frozen under reduced-motion.
// usage: aurora(document.querySelector('canvas#sky'))

export function aurora(canvas){
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) return;
  const x = canvas.getContext('2d');
  const COL = ['216,175,82', '216,57,46', '111,154,142'];   // gold · scarlet · celadon
  let pts = [], W, H;

  function init(){
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
    pts = [];
    const n = Math.min(46, Math.floor(W/24));
    for (let i=0;i<n;i++) pts.push({
      x: Math.random()*W, y: Math.random()*H,
      vx: (Math.random()-.5)*.22, vy: (Math.random()-.5)*.22,
      r: Math.random()*1.5+.3, c: COL[Math.floor(Math.random()*3)], ph: Math.random()*6.3,
    });
  }
  function draw(){
    x.clearRect(0,0,W,H);
    for (const p of pts){
      p.x += p.vx; p.y += p.vy; p.ph += .01;
      if (p.x<0) p.x=W; if (p.x>W) p.x=0; if (p.y<0) p.y=H; if (p.y>H) p.y=0;
      x.beginPath(); x.arc(p.x,p.y,p.r,0,6.28);
      x.fillStyle = `rgba(${p.c},${(.28+.28*Math.sin(p.ph)).toFixed(2)})`; x.fill();
    }
    for (let i=0;i<pts.length;i++) for (let j=i+1;j<pts.length;j++){
      const dx=pts[i].x-pts[j].x, dy=pts[i].y-pts[j].y, d=Math.hypot(dx,dy);
      if (d<118){
        x.beginPath(); x.moveTo(pts[i].x,pts[i].y); x.lineTo(pts[j].x,pts[j].y);
        x.strokeStyle = `rgba(216,175,82,${(.045*(1-d/118)).toFixed(3)})`; x.lineWidth=.5; x.stroke();
      }
    }
    requestAnimationFrame(draw);
  }
  init(); draw(); addEventListener('resize', init);
}
