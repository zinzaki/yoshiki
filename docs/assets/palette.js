/* ════════════════════════════════════════════════════════════════════
   palette.js — ⌘K command palette + shortcuts overlay (loaded last)
   Jump to any section, run actions, all keyboard-driven. Depends on window.Y.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {toast,openModal}=window.Y;
  const isMac=/mac|iphone|ipad/i.test(navigator.platform||navigator.userAgent);

  /* ── build the overlay ── */
  const box=document.createElement('div');box.id='cmdk';
  box.innerHTML=`<div class="cmdk-back" data-cclose></div>
    <div class="cmdk-box" role="dialog" aria-modal="true" aria-label="command palette">
      <div class="cmdk-in"><span class="p">❯</span><input id="cmdkInput" placeholder="jump to a section, or run a command…" autocomplete="off" spellcheck="false"><span class="esc">esc</span></div>
      <div class="cmdk-list" id="cmdkList"></div>
    </div>`;
  document.body.appendChild(box);
  const input=box.querySelector('#cmdkInput'),list=box.querySelector('#cmdkList');

  /* ── command set: sections (from data-nav) + actions ── */
  const sections=[...document.querySelectorAll('main [data-nav]')].map(s=>({
    grp:'go to', icon:'→', label:s.dataset.nav.replace(/&amp;/g,'&'),
    run:()=>{const t=s.id?document.getElementById(s.id):null;(t||s).scrollIntoView({behavior:'smooth',block:'start'});}
  }));
  const actions=[
    {grp:'theme',icon:'◐',label:'Switch to kogane (dark)',key:'1',run:()=>window.setTheme&&window.setTheme('kogane')},
    {grp:'theme',icon:'◑',label:'Switch to washi (light)',key:'2',run:()=>window.setTheme&&window.setTheme('washi')},
    {grp:'view',icon:'◈',label:'Toggle decorative effects',run:()=>document.getElementById('fxtog')&&document.getElementById('fxtog').click()},
    {grp:'actions',icon:'❯',label:'Copy git clone command',run:()=>{const v='git clone https://github.com/zinzaki/yoshiki';if(navigator.clipboard)navigator.clipboard.writeText(v);toast('copied · git clone');}},
    {grp:'actions',icon:'◆',label:'Open on GitHub',run:()=>window.open('https://github.com/zinzaki/yoshiki','_blank')},
    {grp:'actions',icon:'?',label:'Keyboard shortcuts',run:()=>showHelp()}
  ];
  const ALL=[...sections,...actions];

  /* ── render filtered list ── */
  let items=[],sel=0;
  function render(q){
    q=(q||'').trim().toLowerCase();
    items=q?ALL.filter(c=>(c.label+' '+c.grp).toLowerCase().includes(q)):ALL.slice();
    sel=0;
    if(!items.length){list.innerHTML='<div class="cmdk-empty">no matches — try “palette”, “theme”, “clone”…</div>';return;}
    let html='',lastGrp='';
    items.forEach((c,i)=>{
      if(c.grp!==lastGrp){html+=`<div class="cmdk-grp">${c.grp}</div>`;lastGrp=c.grp;}
      html+=`<div class="cmdk-item${i===0?' sel':''}" data-i="${i}"><span class="ci">${c.icon}</span><span class="cl">${c.label}</span>${c.key?`<span class="ck">${c.key}</span>`:''}</div>`;
    });
    list.innerHTML=html;
  }
  function paintSel(){list.querySelectorAll('.cmdk-item').forEach(el=>{
    const on=+el.dataset.i===sel;el.classList.toggle('sel',on);if(on)el.scrollIntoView({block:'nearest'});});}
  function move(d){if(!items.length)return;sel=(sel+d+items.length)%items.length;paintSel();}
  function exec(){const c=items[sel];if(c){close();c.run();}}

  /* ── open / close ── */
  function open(){box.classList.add('open');input.value='';render('');input.focus();}
  function close(){box.classList.remove('open');}
  function toggle(){box.classList.contains('open')?close():open();}
  window.Y.openPalette=open;

  input.addEventListener('input',()=>render(input.value));
  input.addEventListener('keydown',e=>{
    if(e.key==='ArrowDown'){e.preventDefault();move(1);}
    else if(e.key==='ArrowUp'){e.preventDefault();move(-1);}
    else if(e.key==='Enter'){e.preventDefault();exec();}
    else if(e.key==='Escape'){close();}
  });
  list.addEventListener('click',e=>{const it=e.target.closest('.cmdk-item');if(it){sel=+it.dataset.i;exec();}});
  list.addEventListener('mousemove',e=>{const it=e.target.closest('.cmdk-item');if(it&&+it.dataset.i!==sel){sel=+it.dataset.i;paintSel();}});
  box.addEventListener('click',e=>{if(e.target.closest('[data-cclose]'))close();});

  /* ── global keys ── */
  addEventListener('keydown',e=>{
    const inField=e.target.matches&&e.target.matches('input,textarea,select');
    if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='k'){e.preventDefault();toggle();return;}
    if(inField)return;
    if(e.key==='?'){e.preventDefault();showHelp();}
  });

  /* ── ⌘K trigger button in the bar ── */
  const kbtn=document.getElementById('kbtn');
  if(kbtn){kbtn.querySelector('.mod').textContent=isMac?'⌘':'Ctrl';kbtn.onclick=open;}

  /* ── shortcuts help (reuses the modal) ── */
  function showHelp(){
    const mod=isMac?'⌘':'Ctrl';
    openModal(`<button class="modal-x" data-mclose>✕</button>
      <h3><span class="mi" style="color:var(--kin-1)">◆</span> Keyboard</h3>
      <div class="keys">
        <span class="kc"><span class="kbd">${mod}</span><span class="kbd">K</span></span><span class="kd">command palette — jump &amp; act</span>
        <span class="kc"><span class="kbd">1</span><span class="kbd">2</span></span><span class="kd">switch theme · kogane / washi</span>
        <span class="kc"><span class="kbd">?</span></span><span class="kd">this help</span>
        <span class="kc"><span class="kbd">↑</span><span class="kbd">↓</span><span class="kbd">↵</span></span><span class="kd">navigate &amp; run in the palette</span>
        <span class="kc"><span class="kbd">esc</span></span><span class="kd">close any overlay</span>
      </div>`);
  }
})();
