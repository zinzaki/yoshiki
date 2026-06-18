/* ════════════════════════════════════════════════════════════════════
   components.js — §06 the component kit + a reusable modal
   Builds the gallery into #components, then wires interactivity.
   Everything theme-reactive via CSS vars. Depends on window.Y.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {toast}=window.Y;
  const root=document.getElementById('components');
  if(!root)return;

  /* ── reusable modal (also used elsewhere) ── */
  const mr=document.getElementById('modalRoot');
  let lastFocus=null;
  function openModal(html){
    if(!mr)return;
    lastFocus=document.activeElement;
    mr.innerHTML=`<div class="modal-back" data-mclose></div><div class="modal-card" role="dialog" aria-modal="true">${html}</div>`;
    mr.classList.add('open');mr.setAttribute('aria-hidden','false');
    const f=mr.querySelector('button,a,input');if(f)f.focus();
  }
  function closeModal(){if(!mr)return;mr.classList.remove('open');mr.setAttribute('aria-hidden','true');mr.innerHTML='';if(lastFocus)lastFocus.focus();}
  if(mr){
    mr.addEventListener('click',e=>{if(e.target.closest('[data-mclose]'))closeModal();});
    addEventListener('keydown',e=>{
      if(!mr.classList.contains('open'))return;
      if(e.key==='Escape'){closeModal();return;}
      if(e.key==='Tab'){ // trap focus inside the dialog
        const f=[...mr.querySelectorAll('button,a,input,select,textarea')].filter(x=>!x.disabled);
        if(!f.length)return;
        const first=f[0],last=f[f.length-1];
        if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus();}
        else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus();}
      }
    });
  }
  window.Y.openModal=openModal;window.Y.closeModal=closeModal;

  /* ── table data ── */
  const ROWS=[
    {svc:'gateway', reqs:18420, p99:42, err:0.02, st:['m','healthy']},
    {svc:'auth',    reqs:9310,  p99:88, err:0.11, st:['k','degraded']},
    {svc:'render',  reqs:24190, p99:31, err:0.00, st:['m','healthy']},
    {svc:'billing', reqs:1208,  p99:140,err:1.40, st:['s','failing']},
    {svc:'search',  reqs:7740,  p99:64, err:0.05, st:['m','healthy']}
  ];
  let sortKey='reqs',sortDir=-1;
  function tableHTML(){
    const cols=[['svc','service',0],['reqs','req/min',1],['p99','p99 ms',1],['err','err %',1],['st','status',0]];
    const sorted=[...ROWS].sort((a,b)=>{
      let x=a[sortKey],y=b[sortKey];if(sortKey==='st'){x=a.st[1];y=b.st[1];}
      return (x>y?1:x<y?-1:0)*sortDir;
    });
    const head=cols.map(([k,l,n])=>`<th data-k="${k}" class="${k===sortKey?'sort':''} ${n?'num-c':''}">${l}<span class="ar">${sortDir<0?'▼':'▲'}</span></th>`).join('');
    const body=sorted.map(r=>`<tr>
      <td class="b" style="color:var(--bone-1)">${r.svc}</td>
      <td class="num-c">${r.reqs.toLocaleString('en')}</td>
      <td class="num-c">${r.p99}</td>
      <td class="num-c" style="color:${r.err>=1?'var(--aka-0)':r.err>=0.1?'var(--kaki)':'var(--bone-2)'}">${r.err.toFixed(2)}</td>
      <td><span class="stat ${r.st[0]} ${r.st[1]==='degraded'?'pulse':''}">${r.st[1]}</span></td>
    </tr>`).join('');
    return `<table class="tbl"><thead><tr>${head}</tr></thead><tbody>${body}</tbody></table>`;
  }

  /* ── build the gallery ── */
  root.innerHTML=`
  <div class="cx">
    <div class="cx-h">buttons <span class="ct">action · rarity</span></div>
    <div class="cx-row">
      <button class="btn btn-p">Primary</button>
      <button class="btn btn-g">Ghost</button>
      <button class="btn btn-ok">Confirm</button>
    </div>
    <div class="cx-row">
      <button class="btn btn-x" data-modal>Delete…</button>
      <button class="btn btn-p loading" id="btnLoad"><span class="ld js-braille">⠋</span> Working</button>
      <button class="btn btn-p" disabled>Disabled</button>
    </div>
    <div class="cx-sub">sizes &amp; icon</div>
    <div class="cx-row">
      <button class="btn btn-p btn-sm">Small</button>
      <button class="btn btn-g btn-sm">Small</button>
      <button class="btn-ico" data-copy="◆" title="copy ◆">◆</button>
      <button class="btn-ico" data-copy="❯" title="copy ❯">❯</button>
    </div>
  </div>

  <div class="cx">
    <div class="cx-h">inputs <span class="ct">text · select</span></div>
    <div class="fld"><label>email</label><input class="inp" type="text" placeholder="you@studio.jp" value=""></div>
    <div class="fld err"><label>token</label><input class="inp" type="text" value="invalid-key" ><span class="hint2">✗ key must start with sk_</span></div>
    <div class="fld"><label>theme</label><select class="inp"><option>kogane — lacquer dark</option><option>washi — paper light</option><option>auto — follow system</option></select></div>
    <div class="fld"><label>note</label><textarea class="inp" placeholder="warm never grey…"></textarea></div>
  </div>

  <div class="cx">
    <div class="cx-h">choice <span class="ct">multi · single</span></div>
    <div class="cx-sub">checkbox</div>
    <label class="opt"><input type="checkbox" checked><span class="bx"></span> grain overlay</label>
    <label class="opt" style="margin-top:9px"><input type="checkbox"><span class="bx"></span> reduce motion</label>
    <div class="cx-sub">radio · one of</div>
    <label class="opt"><input type="radio" name="dens" checked><span class="bx rad"></span> comfortable</label>
    <label class="opt" style="margin-top:9px"><input type="radio" name="dens"><span class="bx rad"></span> compact</label>
    <div class="cx-sub">toggle</div>
    <div class="cx-row"><span class="sw2 on" role="switch" aria-checked="true" tabindex="0" data-label="swl" data-on="enabled" data-off="disabled"><i></i></span><span style="font-family:var(--mono);font-size:12px;color:var(--bone-3)" id="swl">enabled</span></div>
  </div>

  <div class="cx">
    <div class="cx-h">range &amp; tabs <span class="ct">value · view</span></div>
    <div class="fld"><label>gold intensity</label>
      <div class="cx-row" style="flex-wrap:nowrap">
        <input class="rng" type="range" min="0" max="100" value="62" id="rng1" style="--p:62%">
        <span class="rngval" id="rngv">62</span>
      </div>
    </div>
    <div class="cx-sub">segmented</div>
    <div class="seg" data-seg id="segDemo">
      <button class="on">palette</button><button>type</button><button>motion</button>
    </div>
    <div style="font-family:var(--mono);font-size:12px;color:var(--bone-3);margin-top:13px" id="segOut">▸ palette</div>
  </div>

  <div class="cx span2">
    <div class="cx-h">badges &amp; status <span class="ct">label · state</span></div>
    <div class="cx-row">
      <span class="bdg solid">v1.0</span><span class="bdg k">canon</span><span class="bdg m">shipped</span><span class="bdg s">breaking</span><span class="bdg">draft</span>
    </div>
    <div class="cx-sub">live status</div>
    <div class="cx-row" style="gap:18px">
      <span class="stat m">healthy</span>
      <span class="stat k pulse">deploying</span>
      <span class="stat s">incident</span>
      <span class="stat d">idle</span>
    </div>
  </div>

  <div class="cx span2">
    <div class="cx-h">alerts <span class="ct">one glyph + one colour</span></div>
    <div class="alert info"><span class="ai">◆</span><span class="at"><b>Heads up</b>Tokens regenerate on every <span style="font-family:var(--mono);color:var(--kin-1)">build</span>. Edit the source, not the output.</span></div>
    <div class="alert ok"><span class="ai">✓</span><span class="at"><b>Deployed</b>kogane &amp; washi pushed to all nine targets.</span></div>
    <div class="alert warn"><span class="ai">⚠</span><span class="at"><b>Contrast</b>This pair sits at AA·lg — fine for large text only.</span></div>
    <div class="alert crit"><span class="ai">✗</span><span class="at"><b>Irreversible</b>Scarlet earns its place — this cannot be undone.</span></div>
  </div>

  <div class="cx wide">
    <div class="cx-h">data table <span class="ct">click a header to sort</span></div>
    <div id="tblHost">${tableHTML()}</div>
  </div>

  <div class="cx">
    <div class="cx-h">disclosure <span class="ct">accordion</span></div>
    <div class="acc" data-acc>
      <div class="acc-i open"><button class="acc-q">What is a role? <span class="chev">›</span></button><div class="acc-a"><div class="inner">A small scale built for one job — background, surface, line, solid, text. You pick by meaning, not by eye.</div></div></div>
      <div class="acc-i"><button class="acc-q">Why so little colour? <span class="chev">›</span></button><div class="acc-a"><div class="inner">Rarity is power. A signal used everywhere stops being a signal.</div></div></div>
      <div class="acc-i"><button class="acc-q">Is it accessible? <span class="chev">›</span></button><div class="acc-a"><div class="inner">Contrast is proven, not guessed — and status always carries a glyph, never colour alone.</div></div></div>
    </div>
  </div>

  <div class="cx">
    <div class="cx-h">overlays <span class="ct">dialog · tooltip</span></div>
    <div class="cx-row"><button class="btn btn-p btn-sm" data-modal>Open dialog</button>
      <span class="tipw"><span class="tg">hover me</span><span class="tt">◆ a tooltip, set in mono</span></span>
    </div>
    <div class="cx-sub">progress</div>
    <div class="prog" id="prog1"><i style="width:0%"></i></div>
    <div class="cx-sub">skeleton — loading</div>
    <div class="skel" style="height:13px;width:80%"></div>
    <div class="skel" style="height:13px;width:55%;margin-top:8px"></div>
  </div>

  <div class="cx span2">
    <div class="cx-h">navigation <span class="ct">breadcrumb · pagination</span></div>
    <div class="crumb"><a href="#s2">canon</a><span class="sp">/</span><a href="#s2">palette</a><span class="sp">/</span><span class="cur">roles</span></div>
    <div class="cx-sub">pagination</div>
    <div class="pag" data-pag>
      <button data-rel="-1" disabled>‹</button>
      <button class="on">1</button><button>2</button><button>3</button><button>…</button><button>9</button>
      <button data-rel="1">›</button>
    </div>
  </div>

  <div class="cx">
    <div class="cx-h">menu <span class="ct">dropdown · popover</span></div>
    <div class="menu-wrap" data-menu>
      <button class="btn btn-g btn-sm" data-menu-t>Actions <span style="font-family:var(--mono);color:var(--kin-2)">▾</span></button>
      <div class="menu">
        <button data-act="open"><span class="mi">↗</span> Open on GitHub</button>
        <button data-act="theme"><span class="mi">◐</span> Toggle theme <span class="mk">1·2</span></button>
        <button data-act="export"><span class="mi">◆</span> Jump to export</button>
        <div class="sepm"></div>
        <button class="danger" data-act="del"><span class="mi">緋</span> Delete theme…</button>
      </div>
    </div>
  </div>

  <div class="cx">
    <div class="cx-h">wizard <span class="ct">stepper</span></div>
    <div class="stepper" id="stepper">
      <div class="stp active"><span class="sc">1</span><span class="sl">palette</span></div><span class="sline"></span>
      <div class="stp"><span class="sc">2</span><span class="sl">type</span></div><span class="sline"></span>
      <div class="stp"><span class="sc">3</span><span class="sl">ship</span></div>
    </div>
    <div class="step-body" id="stepBody">Pick the role scales — lacquer, bone, gold, and the two triggers.</div>
    <div class="cx-row">
      <button class="btn btn-g btn-sm" id="stepBack" disabled>Back</button>
      <button class="btn btn-p btn-sm" id="stepNext">Next</button>
    </div>
  </div>

  <div class="cx">
    <div class="cx-h">rating &amp; people <span class="ct">stars · avatars</span></div>
    <div class="cx-row"><div class="rate" id="rate"></div><span class="ratev" id="ratev">3 / 5</span></div>
    <div class="cx-sub">presence</div>
    <div class="cx-row" style="gap:14px">
      <div class="ava k">様<span class="pres on"></span></div>
      <div class="ava m">Z<span class="pres away"></span></div>
      <div class="ava s">緋<span class="pres off"></span></div>
      <div class="avstack"><div class="ava k">A</div><div class="ava m">B</div><div class="ava s">C</div><div class="ava" style="background:var(--ink-3);color:var(--bone-3)">+4</div></div>
    </div>
  </div>

  <div class="cx span2">
    <div class="cx-h">code &amp; keys <span class="ct">copy · kbd</span></div>
    <div class="codeblk"><button class="ccopy" data-codecopy>copy</button><pre id="codePre"><span class="d">// resolve a role to a token, current theme</span>
<span class="k">fn</span> <span class="b">resolve</span>(role: <span class="k">&amp;str</span>) -&gt; Token {
  palette.<span class="b">get</span>(role).<span class="b">unwrap_or</span>(Token::<span class="g">Bone</span>)
}</pre></div>
    <div class="cx-sub">shortcuts</div>
    <div class="cx-row" style="gap:18px">
      <span style="font-family:var(--mono);font-size:11.5px;color:var(--bone-3)"><span class="kbd">1</span> <span class="kbd">2</span> switch theme</span>
      <span style="font-family:var(--mono);font-size:11.5px;color:var(--bone-3)"><span class="kbd">esc</span> close dialog</span>
    </div>
  </div>

  <div class="cx">
    <div class="cx-h">toasts <span class="ct">fire one · by role</span></div>
    <div class="cx-row">
      <button class="btn btn-g btn-sm" data-toast2="◆ saved to disk|">Info</button>
      <button class="btn btn-g btn-sm" data-toast2="✓ build passed|ok">Success</button>
    </div>
    <div class="cx-row">
      <button class="btn btn-g btn-sm" data-toast2="⚠ low contrast|warn">Warn</button>
      <button class="btn btn-g btn-sm" data-toast2="✗ 緋 deleted|crit">Scarlet</button>
    </div>
  </div>`;

  /* ── wire interactivity ── */
  // delete-confirm + dialog
  root.querySelectorAll('[data-modal]').forEach(b=>b.onclick=()=>openModal(
    `<button class="modal-x" data-mclose>✕</button>
     <h3><span class="mi">緋</span> Delete this theme?</h3>
     <p>Scarlet marks the irreversible. <b style="color:var(--bone-0)">kogane-custom</b> and its nine generated targets will be removed. This cannot be undone.</p>
     <div class="mrow2"><button class="btn btn-g btn-sm" data-mclose>Cancel</button><button class="btn btn-x btn-sm" data-mclose id="mdel">Delete</button></div>`
  ));
  mr&&mr.addEventListener('click',e=>{if(e.target.id==='mdel')toast('彼岸花 · deleted');});

  // range
  const rng=document.getElementById('rng1'),rngv=document.getElementById('rngv');
  if(rng)rng.oninput=()=>{rng.style.setProperty('--p',rng.value+'%');rngv.textContent=rng.value;};

  // segmented
  const seg=document.getElementById('segDemo'),segOut=document.getElementById('segOut');
  if(seg)seg.querySelectorAll('button').forEach(b=>b.onclick=()=>{
    seg.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');segOut.textContent='▸ '+b.textContent;});

  // accordion
  const acc=root.querySelector('[data-acc]');
  if(acc)acc.querySelectorAll('.acc-q').forEach(q=>q.onclick=()=>{
    const item=q.parentElement,a=item.querySelector('.acc-a'),open=item.classList.contains('open');
    if(open){item.classList.remove('open');a.style.maxHeight=null;}
    else{item.classList.add('open');a.style.maxHeight=a.scrollHeight+'px';}
  });
  // open the first one
  const first=acc&&acc.querySelector('.acc-i.open .acc-a');if(first)first.style.maxHeight=first.scrollHeight+'px';

  // sortable table
  const tblHost=document.getElementById('tblHost');
  function bindTable(){tblHost.querySelectorAll('th').forEach(th=>th.onclick=()=>{
    const k=th.dataset.k;if(k===sortKey)sortDir*=-1;else{sortKey=k;sortDir=k==='svc'?1:-1;}
    tblHost.innerHTML=tableHTML();bindTable();});}
  bindTable();

  // pagination — prev / numbers / next all move the active page
  const pag=root.querySelector('[data-pag]');
  if(pag){
    const prev=pag.querySelector('[data-rel="-1"]'),next=pag.querySelector('[data-rel="1"]');
    const nums=[...pag.querySelectorAll('button')].filter(b=>!b.dataset.rel&&b.textContent!=='…');
    let i=0;
    function paint(){
      nums.forEach((b,j)=>b.classList.toggle('on',j===i));
      prev.disabled=i===0;next.disabled=i===nums.length-1;
    }
    nums.forEach((b,j)=>b.onclick=()=>{i=j;paint();});
    prev.onclick=()=>{if(i>0){i--;paint();}};
    next.onclick=()=>{if(i<nums.length-1){i++;paint();}};
    paint();
  }

  // demo progress bar — ease to a value when scrolled in
  const pbObs=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){
    const f=x.target.querySelector('i');if(f)setTimeout(()=>f.style.width='73%',150);pbObs.unobserve(x.target);}}),{threshold:.5});
  const pb=document.getElementById('prog1');if(pb)pbObs.observe(pb);

  // dropdown menu
  const mw=root.querySelector('[data-menu]');
  if(mw){
    const trg=mw.querySelector('[data-menu-t]'),menu=mw.querySelector('.menu');
    const close=()=>menu.classList.remove('open');
    trg.onclick=e=>{e.stopPropagation();menu.classList.toggle('open');};
    menu.querySelectorAll('button').forEach(b=>b.onclick=()=>{
      const a=b.dataset.act;
      if(a==='theme')window.setTheme&&window.setTheme(document.documentElement.dataset.theme==='washi'?'kogane':'washi');
      else if(a==='open')window.open('https://github.com/zinzaki/yoshiki','_blank');
      else if(a==='export')document.getElementById('s3').scrollIntoView({behavior:'smooth'});
      else if(a==='del')openModal(`<button class="modal-x" data-mclose>✕</button><h3><span class="mi">緋</span> Delete this theme?</h3><p>Scarlet marks the irreversible. This cannot be undone.</p><div class="mrow2"><button class="btn btn-g btn-sm" data-mclose>Cancel</button><button class="btn btn-x btn-sm" data-mclose>Delete</button></div>`);
      close();
    });
    document.addEventListener('click',e=>{if(!mw.contains(e.target))close();});
  }

  // stepper
  const STEPS=[
    'Pick the role scales — lacquer, bone, gold, and the two triggers.',
    'Set the type: a warm serif to speak, a mono to count.',
    'Run build — nine targets generated from the one palette.'
  ];
  const stepper=document.getElementById('stepper'),stepBody=document.getElementById('stepBody'),
        stepBack=document.getElementById('stepBack'),stepNext=document.getElementById('stepNext');
  if(stepper){
    const stps=[...stepper.querySelectorAll('.stp')],lines=[...stepper.querySelectorAll('.sline')];let si=0;
    function paintStep(){
      stps.forEach((s,j)=>{s.classList.toggle('active',j===si);s.classList.toggle('done',j<si);});
      lines.forEach((l,j)=>l.classList.toggle('fill',j<si));
      stepBody.textContent=STEPS[si];stepBack.disabled=si===0;
      stepNext.textContent=si===STEPS.length-1?'Done':'Next';
    }
    stepNext.onclick=()=>{if(si<STEPS.length-1){si++;paintStep();}else{toast('✓ shipped · 9 targets','ok');si=0;paintStep();}};
    stepBack.onclick=()=>{if(si>0){si--;paintStep();}};
    paintStep();
  }

  // rating
  const rate=document.getElementById('rate'),ratev=document.getElementById('ratev');
  if(rate){
    let val=3;
    rate.innerHTML=[1,2,3,4,5].map(n=>`<button data-n="${n}" aria-label="${n} stars">★</button>`).join('');
    const stars=[...rate.querySelectorAll('button')];
    const paint=v=>stars.forEach((s,j)=>s.classList.toggle('on',j<v));
    stars.forEach(s=>{
      s.onmouseenter=()=>paint(+s.dataset.n);
      s.onclick=()=>{val=+s.dataset.n;ratev.textContent=val+' / 5';paint(val);};
    });
    rate.onmouseleave=()=>paint(val);
    paint(val);
  }

  // code copy
  const codeCopy=root.querySelector('[data-codecopy]'),codePre=document.getElementById('codePre');
  if(codeCopy)codeCopy.onclick=()=>{if(navigator.clipboard)navigator.clipboard.writeText(codePre.textContent);toast('copied · snippet');};

  // toasts (typed) + fix the never-wired [data-toast] buttons in the playground
  document.addEventListener('click',e=>{
    const t2=e.target.closest('[data-toast2]');
    if(t2){const[m,ty]=t2.dataset.toast2.split('|');toast(m,ty||undefined);return;}
    const t1=e.target.closest('[data-toast]');
    if(t1)toast(t1.dataset.toast);
  });

  // keep the rail/geom fresh after building
  if(window.Y.geom)window.Y.geom();
})();
