/* ════════════════════════════════════════════════════════════════════
   core.js — page behaviour
   theme · copy · reveal · seam/bead/parallax · spinners · gold motes · cursor
   Depends on window.Y (tokens.js).
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {RM,toast,fireRedraw}=window.Y;
  const fxOff=()=>document.documentElement.classList.contains('fx-off');

  /* ── copy handler (any [data-copy]) ── */
  document.addEventListener('click',e=>{
    const c=e.target.closest('[data-copy]');if(!c)return;
    const v=c.dataset.copy;if(navigator.clipboard)navigator.clipboard.writeText(v);
    toast('copied · '+(v.length>34?v.slice(0,34)+'…':v));
  });

  /* ── theme ── */
  const dots=document.querySelectorAll('.tdot');
  function theme(t){
    document.documentElement.dataset.theme=t;
    dots.forEach(d=>d.classList.toggle('on',d.dataset.t===t));
    fireRedraw();
  }
  window.setTheme=theme;
  dots.forEach(d=>d.onclick=()=>theme(d.dataset.t));
  addEventListener('keydown',e=>{
    if(e.target.matches&&e.target.matches('input,textarea'))return;
    if(e.key==='1')theme('kogane');if(e.key==='2')theme('washi');
  });

  /* ── reveal + section nodes ── */
  const rev=new IntersectionObserver(es=>es.forEach(x=>{
    if(x.isIntersecting){
      const el=x.target,p=el.parentElement,
        sibs=[...p.children].filter(c=>c.classList.contains('r')),i=sibs.indexOf(el);
      if(!RM)el.style.transitionDelay=(Math.max(0,i)%6*60)+'ms';
      el.classList.add('in');rev.unobserve(el);
    }
  }),{rootMargin:'0px 0px -10% 0px'});
  function observeReveals(root){(root||document).querySelectorAll('.r:not(.in)').forEach(el=>rev.observe(el));}
  window.Y.observeReveals=observeReveals;
  observeReveals();

  const nob=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting)x.target.classList.add('lit');}),{rootMargin:'-45% 0px -45% 0px'});
  document.querySelectorAll('.node').forEach(n=>nob.observe(n));

  /* ── seam + bead + hero parallax ── */
  const bar=document.getElementById('bar'),prog=document.getElementById('prog'),
        spine=document.getElementById('spine'),bead=document.getElementById('bead'),hero=document.querySelector('.hero');
  let A=0,B=0;
  function geom(){
    const first=document.querySelector('main .S:first-of-type'),secs=document.querySelectorAll('main .S'),last=secs[secs.length-1];
    if(!first||!last)return;
    A=first.offsetTop+30;B=last.offsetTop+90;
    spine.style.top=A+'px';spine.style.height=(B-A)+'px';
  }
  window.Y.geom=geom;
  function onScroll(){
    const h=document.documentElement,max=h.scrollHeight-h.clientHeight,p=max>0?h.scrollTop/max:0;
    prog.style.width=(p*100)+'%';bar.classList.toggle('stuck',h.scrollTop>40);
    const y=h.scrollTop+h.clientHeight*0.5,t=Math.max(A,Math.min(B,y));
    bead.style.top=t+'px';
    bead.style.opacity=(h.scrollTop>h.clientHeight*0.6&&t<B-20)?'1':'0';
    if(!RM&&hero){const s=h.scrollTop;if(s<innerHeight*1.15){hero.style.transform='translateY('+(s*.28)+'px)';hero.style.opacity=Math.max(0,1-s/(innerHeight*.82));}}
    if(window.Y.onScrollExtra)window.Y.onScrollExtra(p);
  }
  window.Y.onScroll=onScroll;
  addEventListener('resize',()=>{geom();onScroll();});
  addEventListener('load',()=>{geom();onScroll();});
  geom();onScroll();
  addEventListener('scroll',onScroll,{passive:true});

  /* ── spinners + progress tapes (class-based, work in any section) ── */
  if(!RM){
    const br=['⠋','⠙','⠹','⠸','⠼','⠴','⠦','⠧','⠇','⠏'],arc=['◜','◠','◝','◞','◡','◟'];let i=0;
    setInterval(()=>{i++;
      document.querySelectorAll('.js-braille').forEach(e=>e.textContent=br[i%br.length]);
      document.querySelectorAll('.js-arc').forEach(e=>e.textContent=arc[i%arc.length]);
    },90);
    let p=0;
    setInterval(()=>{p=(p+1)%30;const md=['⠀','⠄','⠆','⠇','⠧','⠷','⠿','⣿'];
      document.querySelectorAll('.js-matrix').forEach(b1=>{let m='<span class="f">';
        for(let k=0;k<11;k++){const lv=Math.max(0,Math.min(7,Math.round((p/29*11-k)*7)));m+=md[k<p/29*11?7:lv];}
        b1.innerHTML=m+'</span> <span style="color:var(--bone-3)">'+Math.round(p/29*100)+'%</span>';});
      document.querySelectorAll('.js-tape').forEach(b2=>{const full=Math.round(p/29*10);
        b2.innerHTML='<span class="f">'+'▰'.repeat(full)+'</span><span class="e">'+'▱'.repeat(10-full)+'</span> <span style="color:var(--bone-3)">'+Math.round(p/29*100)+'%</span>';});
    },120);
  }

  /* ── gold motes — warm embers drift up the lacquer (replaces the constellation) ── */
  if(!RM){
    const cv=document.getElementById('sky');
    if(cv){
      const x=cv.getContext('2d');let pts=[],W,H;
      const COL=[ '216,175,82', '216,175,82', '216,175,82', '237,200,92', '111,154,142', '216,57,46' ];
      function init(){
        W=cv.width=innerWidth;H=cv.height=innerHeight;pts=[];
        const n=Math.min(34,Math.floor(W/46));
        for(let i=0;i<n;i++)pts.push({
          x:Math.random()*W,y:Math.random()*H,
          vx:(Math.random()-.5)*.12,vy:-(Math.random()*.18+.05),
          r:Math.random()*1.5+.4,c:COL[Math.floor(Math.random()*COL.length)],ph:Math.random()*6.3,
          tw:Math.random()*.02+.006
        });
      }
      function draw(){
        if(fxOff()){x.clearRect(0,0,W,H);requestAnimationFrame(draw);return;}
        x.clearRect(0,0,W,H);
        for(const p of pts){
          p.x+=p.vx;p.y+=p.vy;p.ph+=p.tw;
          if(p.y<-6){p.y=H+6;p.x=Math.random()*W;}
          if(p.x<0)p.x=W;if(p.x>W)p.x=0;
          const a=(.18+.22*Math.sin(p.ph)).toFixed(2);
          x.beginPath();x.arc(p.x,p.y,p.r,0,6.28);
          x.fillStyle=`rgba(${p.c},${a})`;
          x.shadowBlur=p.r*3;x.shadowColor=`rgba(${p.c},.5)`;
          x.fill();
        }
        x.shadowBlur=0;
        requestAnimationFrame(draw);
      }
      init();draw();addEventListener('resize',init);
    }
  }

  /* ── cursor — gilded bead trails the pointer; speaks the role language ── */
  if(matchMedia('(hover:hover) and (pointer:fine)').matches && !RM){
    const ring=document.getElementById('cur'),dot=document.getElementById('cdot'),root=document.documentElement;
    const HOVER='a,button,label,.step,.ac,.gl,.tdot,.copybox,.ecard,.sw2,input,[data-copy]';
    const MAGSEL='button,a,.tdot,.gl,.ac,.copybox,.ecard,.sw2';
    const TN=4,trail=[];
    for(let i=0;i<TN;i++){const t=document.createElement('div');t.className='ctrail';const sz=4.2-i*0.7;
      t.style.width=t.style.height=sz+'px';t.style.margin=(-sz/2)+'px 0 0 '+(-sz/2)+'px';t.style.setProperty('--bo',(0.34*(1-i/TN)).toFixed(2));
      document.body.appendChild(t);trail.push({el:t,x:innerWidth/2,y:innerHeight/2});}
    let mx=innerWidth/2,my=innerHeight/2,rx=mx,ry=my,seen=false,mag=null;
    root.classList.add('cur');
    addEventListener('mousemove',e=>{mx=e.clientX;my=e.clientY;dot.style.transform=`translate(${mx}px,${my}px)`;if(!seen){seen=true;rx=mx;ry=my;}root.classList.remove('cur-out');},{passive:true});
    (function loop(){let tx=mx,ty=my;
      if(mag){const r=mag.getBoundingClientRect();const pull=Math.min(.55,40/Math.max(r.width,r.height)+.18);tx=mx+(r.left+r.width/2-mx)*pull;ty=my+(r.top+r.height/2-my)*pull;}
      rx+=(tx-rx)*.2;ry+=(ty-ry)*.2;ring.style.transform=`translate(${rx}px,${ry}px)`;
      let px=mx,py=my;for(const b of trail){b.x+=(px-b.x)*.34;b.y+=(py-b.y)*.34;b.el.style.transform=`translate(${b.x}px,${b.y}px)`;px=b.x;py=b.y;}
      requestAnimationFrame(loop);})();
    addEventListener('mouseover',e=>{const t=e.target.closest(HOVER);root.classList.toggle('cur-hover',!!t);mag=t?t.closest(MAGSEL):null;
      let c='var(--kin-1)';
      if(t){if(t.dataset.copy==='#d8392e'||(t.closest('.chip')&&t.closest('.chip').classList.contains('scar')))c='var(--aka-1)';
        else if((t.closest('.chip')&&t.closest('.chip').classList.contains('moss'))||t.dataset.copy==='#52703F'||t.dataset.copy==='#8FAC6F')c='var(--mori-1)';}
      root.style.setProperty('--cur',c);},{passive:true});
    addEventListener('mousedown',()=>root.classList.add('cur-down'));
    addEventListener('mouseup',()=>root.classList.remove('cur-down'));
    document.addEventListener('mouseleave',()=>root.classList.add('cur-out'));
    document.addEventListener('mouseenter',()=>root.classList.remove('cur-out'));
  }
})();
