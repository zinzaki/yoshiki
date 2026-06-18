/* ════════════════════════════════════════════════════════════════════
   tokens.js — single source of truth + shared helpers
   Palette data (kogane / washi), contrast math, toast, theme-redraw hub.
   Loaded first. Everything else builds on window.Y.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const RM = matchMedia('(prefers-reduced-motion:reduce)').matches;

  /* ── contrast math (WCAG relative luminance) ── */
  function lum(h){
    const n=parseInt(h.slice(1),16),r=(n>>16)/255,g=((n>>8)&255)/255,b=(n&255)/255,
      f=v=>v<=.03928?v/12.92:Math.pow((v+.055)/1.055,2.4);
    return .2126*f(r)+.7152*f(g)+.0722*f(b);
  }
  function ratio(a,b){const L1=lum(a),L2=lum(b);return (Math.max(L1,L2)+.05)/(Math.min(L1,L2)+.05);}
  function grade(r){return r>=7?'AAA':r>=4.5?'AA':r>=3?'AA·lg':'—';}

  /* ── theme ── */
  function curTheme(){return document.documentElement.dataset.theme;}

  /* ── toast ── */
  let tt;
  function toast(m,type){
    const t=document.getElementById('toast');if(!t)return;
    t.textContent=m;
    t.classList.remove('t-ok','t-warn','t-crit');
    if(type)t.classList.add('t-'+type);
    t.classList.add('show');clearTimeout(tt);
    tt=setTimeout(()=>t.classList.remove('show'),1900);
  }

  /* ── palette — single source of truth (kogane / washi) ── */
  const TOKENS={
    roles:[
      {key:'ink',label:'lacquer',steps:[
        {n:'ink-0',job:'app background',k:'#0B0A08',w:'#E2D6B4'},
        {n:'ink-1',job:'raised surface',k:'#12100C',w:'#EBE1C3'},
        {n:'ink-2',job:'panel',k:'#1B1813',w:'#F3EBD5'},
        {n:'ink-3',job:'inset',k:'#262119',w:'#D7C9A3'},
        {n:'line-0',job:'hairline',k:'#362C1B',w:'#C7B68C'},
        {n:'line-1',job:'border',k:'#4C3D24',w:'#AE9C72'}]},
      {key:'bone',label:'bone',steps:[
        {n:'bone-4',job:'faint',k:'#6B5F49',w:'#8E7C5A'},
        {n:'bone-3',job:'muted · meta',k:'#94866A',w:'#6E5E42'},
        {n:'bone-2',job:'secondary',k:'#C9BC96',w:'#4A3D2A'},
        {n:'bone-1',job:'body text',k:'#EDE3C4',w:'#2B2117'},
        {n:'bone-0',job:'emphasis',k:'#F7EED2',w:'#1F1810'}]},
      {key:'kin',label:'gold',steps:[
        {n:'kin-3',job:'deep',k:'#57441F',w:'#C9AE74'},
        {n:'kin-2',job:'dim edge',k:'#8F713C',w:'#7A5F2E'},
        {n:'kin-1',job:'edge · link · solid',k:'#D8AF52',w:'#9C7A40'},
        {n:'kin-0',job:'highlight',k:'#EDC85C',w:'#B8923F'}]},
      {key:'aka',label:'scarlet',steps:[
        {n:'aka-2',job:'deep',k:'#7E302E',w:'#8E2A22'},
        {n:'aka-1',job:'trigger · may fill',k:'#d8392e',w:'#C0392C'},
        {n:'aka-0',job:'soft',k:'#D4665C',w:'#A8352B'}]},
      {key:'mori',label:'moss',steps:[
        {n:'mori-1',job:'ok · may fill',k:'#52703F',w:'#3C5A2C'},
        {n:'mori-0',job:'soft',k:'#8FAC6F',w:'#4A6B38'}]}
    ],
    ansi:[['#1B1813','0'],['#C54D49','1'],['#8FAC6F','2'],['#D6AE66','3'],['#7C88B8','4'],['#9C7FB0','5'],['#6FA08E','6'],['#EDE3C4','7'],
          ['#6B5F49','8'],['#DC7265','9'],['#A8C48A','A'],['#EAC578','B'],['#98A4D4','C'],['#B89BCC','D'],['#8CBCA9','E'],['#F7EED2','F']]
  };
  function hexOf(step){return curTheme()==='washi'?step.w:step.k;}
  function tokMap(){const m={};TOKENS.roles.forEach(r=>r.steps.forEach(s=>m[s.n]=hexOf(s)));return m;}
  /* read a live CSS variable in the current theme */
  function cv(n){return getComputedStyle(document.documentElement).getPropertyValue('--'+n).trim();}

  /* ── theme-redraw hub: modules register a fn to re-run on theme change ── */
  const redraws=[];
  function onRedraw(fn){redraws.push(fn);}
  function fireRedraw(){redraws.forEach(fn=>{try{fn();}catch(e){console.error('redraw',e);}});}

  /* expose */
  window.Y={RM,lum,ratio,grade,curTheme,toast,TOKENS,hexOf,tokMap,cv,onRedraw,fireRedraw};
})();
