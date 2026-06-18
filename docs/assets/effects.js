/* ════════════════════════════════════════════════════════════════════
   effects.js — navigation & quiet decoration (loaded last)
   section rail (scroll-spy) · self-drawing kintsugi seams between sections
   Depends on window.Y. Honours prefers-reduced-motion.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {RM}=window.Y;

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

  /* refresh seam geometry after layout settles */
  if(window.Y.geom)window.Y.geom();
  addEventListener('load',()=>{if(window.Y.geom){window.Y.geom();if(window.Y.onScroll)window.Y.onScroll();}});
})();
