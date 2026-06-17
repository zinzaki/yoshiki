/* ════════════════════════════════════════════════════════════════════
   showcase.js — the original canon sections
   §02 palette scale · contrast proof · ANSI16 · §03 playground + export
   Depends on window.Y (tokens.js).
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {ratio,grade,curTheme,toast,TOKENS,hexOf,tokMap,cv,onRedraw,lum}=window.Y;

  /* §02 — the systematic scale */
  function renderScale(){
    const el=document.getElementById('scale');if(!el)return;el.innerHTML='';
    TOKENS.roles.forEach(r=>{
      const row=document.createElement('div');row.className='srow';
      let steps='';
      r.steps.forEach(s=>{const hx=hexOf(s);
        steps+=`<button class="step" style="background:${hx}" data-copy="${hx}"><span class="tip"><b>${s.n}</b> ${hx}<em>${s.job}</em></span></button>`;});
      row.innerHTML=`<div class="rl">${r.label}<small>${r.key}</small></div><div class="steps">${steps}</div>`;
      el.appendChild(row);
    });
  }

  /* §02 — contrast proof, recomputed per theme */
  const PROOF=[['bone-1','ink-0','body — bone on lacquer'],['kin-text','ink-0','gold — edge · link'],
    ['bone-0','ink-1','emphasis on surface'],['aka-0','ink-0','scarlet text'],['mori-0','ink-0','moss text']];
  /* 'kin-text' = the gold actually used for text/links: kin-1 (dark theme) / kin-2 (light) */
  function resolveTok(name,m){return name==='kin-text'?(curTheme()==='washi'?m['kin-2']:m['kin-1']):m[name];}
  function renderProof(){
    const el=document.getElementById('proof');if(!el)return;const m=tokMap();el.innerHTML='';
    PROOF.forEach(([fgn,bg,label])=>{const fg=resolveTok(fgn,m),r=ratio(fg,m[bg]),g=grade(r);
      const c=document.createElement('div');c.className='pcard';c.style.background=m[bg];
      c.innerHTML=`<div class="pv" style="color:${fg}">${r.toFixed(1)}:1 <span class="pg" style="color:${fg}">${g}</span></div>`+
        `<div class="pl" style="color:${fg};opacity:.8">${label}</div>`;
      el.appendChild(c);
    });
  }

  /* ANSI — fixed scheme colours (theme-independent) */
  function renderAnsi(){
    const an=document.getElementById('ansi');if(!an||an.childElementCount)return;
    TOKENS.ansi.forEach(([h,l])=>{const a=document.createElement('button');a.className='ac';
      a.style.background=h;a.dataset.copy=h;a.textContent=l;a.style.color=lum(h)<.35?'#F7EED2':'#0B0A08';an.appendChild(a);});
  }

  /* §03 — live playground (token-only mini interface) */
  function renderPlayground(){
    const el=document.getElementById('pgPreview');if(!el)return;
    el.innerHTML=`<div class="pg">
      <div class="pg-head"><span class="dot" style="background:var(--aka-1)"></span><span class="dot" style="background:var(--kin-1)"></span><span class="dot" style="background:var(--mori-1)"></span>&nbsp;&nbsp;~/dev/yoshiki — preview</div>
      <div class="pg-body">
        <div class="term"><span class="k">╭─ ◆ ─</span> yoshiki <span class="k">─  main</span> <span class="g">~2 +1</span> <span class="k">─</span> <span style="color:var(--seiji)">v1.0</span>
<span class="k">╰─ ❯</span> build
<span class="g">✓</span> build      passed       <span class="d">214 files · 0.4s</span>
<span class="k">●</span> deploy     in progress   <span class="k js-braille">⠹</span> <span class="d">12s</span>
<span class="r">✗</span> test       1 failed      <span class="d">exit 1</span></div>
        <div class="uirow">
          <button class="btn btn-p" data-toast="primary — a gilded frame">Primary</button>
          <button class="btn" style="background:var(--aka-1);border:1px solid var(--aka-1);color:#FFF3ED" data-toast="彼岸花 — scarlet may fill">Delete</button>
          <span class="sw2 on" role="switch" aria-checked="true" tabindex="0"><i></i></span>
        </div>
        <div class="uirow"><span class="chip gold">◆ PRIMARY</span><span class="chip moss">● ACTIVE</span><span class="chip scar">✗ CRITICAL</span><span class="chip">v1.0.0</span></div>
        <div class="term" style="margin-top:16px"><span class="d">— chat · structure carries it —</span>
<span class="k">╭─ ◆</span> ORDER #1421
<span class="k">│</span>  status   <span class="b">✓ paid</span>   <span class="d">·</span>   ¥ 4,820
<span class="k">╰─ ❯</span> track</div>
      </div></div>`;
  }

  /* §03 — export, generated from TOKENS in the current theme */
  function allSteps(){const o=[];TOKENS.roles.forEach(r=>r.steps.forEach(s=>o.push([s.n,hexOf(s)])));return o;}
  function toHex(){return allSteps().map(([n,h])=>h+'  '+n).join('\n');}
  function toCSSVars(){return ':root {\n'+allSteps().map(([n,h])=>'  --'+n+': '+h+';').join('\n')+'\n}';}
  function toDTCG(){const o={color:{}};allSteps().forEach(([n,h])=>o.color[n]={"$type":"color","$value":h});return JSON.stringify(o,null,2);}
  function toBase16(){const m=tokMap();const b={base00:m['ink-0'],base01:m['ink-2'],base02:m['line-1'],base03:m['bone-4'],
    base04:m['bone-3'],base05:m['bone-1'],base06:m['bone-0'],base07:cv('kin-w'),base08:m['aka-1'],base09:cv('kaki'),
    base0A:m['kin-0'],base0B:m['mori-1'],base0C:cv('seiji'),base0D:m['kin-1'],base0E:cv('fuji'),base0F:m['aka-2']};
    return 'system: "base16"\nname: "yoshiki '+curTheme()+'"\nauthor: "zinzaki"\n'+Object.entries(b).map(([k,v])=>k+': "'+v.replace('#','')+'"').join('\n');}
  const EXPORTS={hex:toHex,CSS:toCSSVars,DTCG:toDTCG,base16:toBase16};
  let expFmt='CSS';
  function buildExport(){
    const el=document.getElementById('exportPanel');if(!el)return;
    const tabs=Object.keys(EXPORTS).map(k=>`<button data-fmt="${k}" class="${k===expFmt?'on':''}">${k}</button>`).join('');
    el.innerHTML=`<div class="tabs">${tabs}</div><div class="codebox"><button class="copy" data-exportcopy>copy</button><pre id="expPre"></pre></div>`;
    el.querySelector('#expPre').textContent=EXPORTS[expFmt]();
    el.querySelectorAll('.tabs button').forEach(b=>b.onclick=()=>{expFmt=b.dataset.fmt;buildExport();});
    el.querySelector('[data-exportcopy]').onclick=()=>{if(navigator.clipboard)navigator.clipboard.writeText(EXPORTS[expFmt]());toast('copied · '+expFmt+' tokens');};
  }

  function renderAll(){renderScale();renderProof();renderPlayground();buildExport();}
  renderAnsi();
  renderAll();
  onRedraw(renderAll);
})();
