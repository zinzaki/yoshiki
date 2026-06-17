/* ════════════════════════════════════════════════════════════════════
   effects.js — decoration & navigation (loaded last)
   fx toggle · section rail (scroll-spy) · lacquer ripple ·
   self-drawing kintsugi seams · card tilt
   Depends on window.Y. Everything honours prefers-reduced-motion & fx-off.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {RM,toast,cv}=window.Y;
  const rootEl=document.documentElement;
  const fxOff=()=>rootEl.classList.contains('fx-off');

  /* ════ effects toggle ════ */
  const tog=document.getElementById('fxtog');
  if(tog){
    tog.onclick=()=>{
      const off=rootEl.classList.toggle('fx-off');
      tog.textContent=off?'◇':'◈';tog.title='effects — '+(off?'off':'on');
      toast(off?'effects · off':'effects · on');
    };
  }

  /* ════ section rail — scroll-spy ════ */
  const rail=document.getElementById('rail');
  const secs=[...document.querySelectorAll('main [data-nav]')];
  if(rail&&secs.length){
    rail.innerHTML=secs.map(s=>{
      const id=s.id||'top',label=s.dataset.nav;
      return `<button class="railx" data-go="${id}"><span class="rl2">${label}</span><span class="rd"></span></button>`;
    }).join('');
    const dots=[...rail.querySelectorAll('.railx')];
    dots.forEach(d=>d.onclick=()=>{
      const t=document.getElementById(d.dataset.go);
      if(t)t.scrollIntoView({behavior:RM?'auto':'smooth',block:'start'});
      else scrollTo({top:0,behavior:RM?'auto':'smooth'});
    });
    const spy=new IntersectionObserver(es=>{
      es.forEach(x=>{if(x.isIntersecting){
        const id=x.target.id||'top';
        dots.forEach(d=>d.classList.toggle('on',d.dataset.go===id));
      }});
    },{rootMargin:'-45% 0px -50% 0px'});
    secs.forEach(s=>spy.observe(s));
  }

  /* ════ lacquer ripple — gold rings spread from each click ════ */
  if(!RM){
    const cvn=document.getElementById('ripple');
    if(cvn){
      const x=cvn.getContext('2d');let W,H,rings=[],raf=null;
      function size(){W=cvn.width=innerWidth;H=cvn.height=innerHeight;}
      size();addEventListener('resize',size);
      function spawn(px,py){
        if(fxOff())return;
        const gold=cv('kin-1')||'#D8AF52';
        rings.push({x:px,y:py,r:6,a:.5,c:gold},{x:px,y:py,r:1,a:.35,c:gold,d:18});
        if(!raf)raf=requestAnimationFrame(draw);
      }
      function draw(){
        x.clearRect(0,0,W,H);
        rings=rings.filter(rg=>rg.a>0.01);
        for(const rg of rings){
          rg.r+=(rg.d||14)*0.06+rg.r*0.045;rg.a*=0.95;
          x.beginPath();x.arc(rg.x,rg.y,rg.r,0,6.28);
          const col=rg.c.replace('#','');
          const n=parseInt(col,16);
          x.strokeStyle=`rgba(${n>>16},${(n>>8)&255},${n&255},${rg.a.toFixed(3)})`;
          x.lineWidth=1.2;x.stroke();
        }
        if(rings.length)raf=requestAnimationFrame(draw);else raf=null;
      }
      addEventListener('pointerdown',e=>{if(e.pointerType!=='touch'||true)spawn(e.clientX,e.clientY);},{passive:true});
    }
  }

  /* ════ self-drawing kintsugi seams between sections ════ */
  const CRACK='M0 60 L120 56 L150 70 L240 50 L300 64 L360 40 L430 62 L470 48 L560 66 L640 44 L720 60 L820 54'
            +' M360 40 L380 18 M430 62 L452 84 M240 50 L226 28';
  function placeSeam(afterId){
    const after=document.getElementById(afterId);if(!after)return;
    const div=document.createElement('div');div.className='kseam';div.setAttribute('aria-hidden','true');
    div.innerHTML=`<svg viewBox="0 0 820 120" preserveAspectRatio="none"><path d="${CRACK}"/></svg>`;
    after.after(div);
    const path=div.querySelector('path'),len=path.getTotalLength();
    path.style.setProperty('--len',len);
    new IntersectionObserver((es,ob)=>es.forEach(v=>{if(v.isIntersecting){div.classList.add('lit');ob.disconnect();}}),
      {rootMargin:'0px 0px -20% 0px'}).observe(div);
  }
  ['s1','s4','s7'].forEach(placeSeam);
  if(window.Y.geom)window.Y.geom();

  /* ════ card tilt — subtle pointer parallax ════ */
  if(matchMedia('(hover:hover) and (pointer:fine)').matches && !RM){
    const MAX=6;
    document.querySelectorAll('.tilt').forEach(card=>{
      card.addEventListener('pointermove',e=>{
        if(fxOff())return;
        const r=card.getBoundingClientRect();
        const dx=(e.clientX-r.left)/r.width-0.5,dy=(e.clientY-r.top)/r.height-0.5;
        card.style.transform=`perspective(900px) rotateX(${(-dy*MAX).toFixed(2)}deg) rotateY(${(dx*MAX).toFixed(2)}deg) translateZ(0)`;
      });
      card.addEventListener('pointerleave',()=>{card.style.transform='';});
    });
  }

  /* refresh seam geometry after layout settles */
  addEventListener('load',()=>{if(window.Y.geom){window.Y.geom();if(window.Y.onScroll)window.Y.onScroll();}});
})();
