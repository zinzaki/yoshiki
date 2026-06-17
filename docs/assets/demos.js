/* ════════════════════════════════════════════════════════════════════
   demos.js — §07 three small apps wearing the language
   terminal (type into it) · chat (it answers) · dashboard (it breathes)
   Depends on window.Y.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {RM,cv}=window.Y;
  const root=document.getElementById('demos');
  if(!root)return;
  const esc=s=>s.replace(/[&<>]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;'}[c]));

  root.innerHTML=`
    <div class="demo-bar">
      <div class="seg" id="demoSeg"><button class="on">terminal</button><button>chat</button><button>dashboard</button></div>
      <span style="font-family:var(--mono);font-size:10.5px;letter-spacing:1px;color:var(--bone-4)" id="demoHint">type a command — try <span style="color:var(--kin-1)">help</span></span>
    </div>
    <div class="demo-stage">
      <!-- terminal -->
      <div class="demo on" id="dTerm">
        <div class="tl-head"><span class="dot" style="background:var(--aka-1)"></span><span class="dot" style="background:var(--kin-1)"></span><span class="dot" style="background:var(--mori-1)"></span>&nbsp;&nbsp;zinzaki@yoshiki — zsh</div>
        <div class="tl-body" id="tlBody">
          <div class="tl-line"><span class="k">様式</span> yoshiki <span class="d">— an interactive shell. Type</span> <span class="k">help</span><span class="d">.</span></div>
          <div class="tl-in"><span class="p">❯</span><input id="tlInput" autocomplete="off" spellcheck="false" aria-label="terminal input"></div>
        </div>
      </div>
      <!-- chat -->
      <div class="demo" id="dChat">
        <div class="ch-body" id="chBody">
          <div class="msg them">様式 here. Ask me about the palette, the laws, or the kit. <div class="meta2">bot · <span class="ok">✓ online</span></div></div>
        </div>
        <div class="ch-foot"><input id="chInput" placeholder="message…" aria-label="chat input"><button id="chSend" aria-label="send">❯</button></div>
      </div>
      <!-- dashboard -->
      <div class="demo" id="dDash">
        <div class="dash" id="dashGrid"></div>
      </div>
    </div>`;

  /* ── segmented switch ── */
  const seg=document.getElementById('demoSeg'),demos=['dTerm','dChat','dDash'],hint=document.getElementById('demoHint');
  const HINTS=['type a command — try <span style="color:var(--kin-1)">help</span>','say hello — it answers','live · updates every beat'];
  seg.querySelectorAll('button').forEach((b,i)=>b.onclick=()=>{
    seg.querySelectorAll('button').forEach(x=>x.classList.remove('on'));b.classList.add('on');
    demos.forEach((id,j)=>document.getElementById(id).classList.toggle('on',i===j));
    hint.innerHTML=HINTS[i];
    if(i===2)dash.start();else dash.stop();
    if(i===0)setTimeout(()=>tlInput.focus(),30);
  });

  /* ════ terminal ════ */
  const tlBody=document.getElementById('tlBody'),tlInput=document.getElementById('tlInput');
  const inputLine=tlInput.closest('.tl-in');
  function out(html){const d=document.createElement('div');d.className='tl-line';d.innerHTML=html;tlBody.insertBefore(d,inputLine);tlBody.scrollTop=tlBody.scrollHeight;}
  const CMDS={
    help(){out(`<span class="d">commands:</span>
<span class="k">help</span>      this list
<span class="k">palette</span>   the role scales
<span class="k">theme</span>     <span class="d">kogane | washi — switch the site</span>
<span class="k">build</span>     <span class="d">regenerate all targets</span>
<span class="k">whoami</span>    about yoshiki
<span class="k">clear</span>     wipe the screen`);},
    palette(){out(`<span class="d">roles · gold strikes rarely</span>
<span style="color:var(--bone-2)">lacquer</span>  ░░░░░  background → inset
<span style="color:var(--bone-1)">bone</span>     ▒▒▒▒▒  text &amp; surfaces
<span class="k">gold</span>     ▓▓▓▓   edges · links · solids
<span class="r">scarlet</span>  ▓▓     the irreversible
<span class="g">moss</span>     ▓▓     life &amp; success`);},
    theme(arg){
      const t=(arg||'').trim();
      if(t==='kogane'||t==='washi'){if(window.setTheme)window.setTheme(t);out(`<span class="g">✓</span> theme → <span class="k">${t}</span>`);}
      else out(`<span class="r">✗</span> usage: <span class="k">theme</span> <span class="d">kogane | washi</span>`);
    },
    build(){
      out(`<span class="k">❯</span> building from canon/palette …`);
      const steps=[['tokens','12 roles · 2 themes'],['kitty · foot · alacritty','terminals'],['neovim · vscode','editors'],['starship · tmux · btop','shell'],['base24 · DTCG','schemes']];
      let i=0;(function next(){
        if(i>=steps.length){out(`<span class="g">✓</span> built <span class="b">9 targets</span> <span class="d">· kogane &amp; washi · 0.4s</span>`);return;}
        const[s,d]=steps[i++];out(`<span class="g">✓</span> ${s.padEnd(26,' ').replace(/ /g,'&nbsp;')}<span class="d">${d}</span>`);
        setTimeout(next,RM?0:240);
      })();
    },
    whoami(){out(`<span class="k">様式 yoshiki</span> <span class="d">— a warm, contrast-proven design language.</span>
lacquer · bone · gold, struck rarely by scarlet.
<span class="d">MIT · github.com/zinzaki/yoshiki</span>`);},
    clear(){tlBody.querySelectorAll('.tl-line').forEach(l=>l.remove());},
    ls(){out(`<span class="k">canon/</span>  <span class="k">library/</span>  <span class="k">docs/</span>  AGENTS.md  llms.txt  README.md`);}
  };
  function run(raw){
    const line=raw.trim();
    out(`<span class="k">❯</span> ${esc(line)}`);
    if(!line)return;
    const[cmd,...rest]=line.split(/\s+/);
    const fn=CMDS[cmd.toLowerCase()];
    if(fn)fn(rest.join(' '));
    else out(`<span class="r">✗</span> <span class="d">command not found:</span> ${esc(cmd)} <span class="d">— try</span> <span class="k">help</span>`);
  }
  tlInput.addEventListener('keydown',e=>{if(e.key==='Enter'){const v=tlInput.value;tlInput.value='';run(v);}});
  tlBody.addEventListener('click',e=>{if(!e.target.closest('input'))tlInput.focus();});

  /* ════ chat ════ */
  const chBody=document.getElementById('chBody'),chInput=document.getElementById('chInput'),chSend=document.getElementById('chSend');
  function bubble(text,who){const d=document.createElement('div');d.className='msg '+who;
    d.innerHTML=esc(text)+(who==='me'?'<div class="meta2">you · ✓ sent</div>':'<div class="meta2">bot</div>');
    chBody.appendChild(d);chBody.scrollTop=chBody.scrollHeight;return d;}
  function reply(q){
    const s=q.toLowerCase();let a;
    if(/hi|hello|hey|привет|yo/.test(s))a='Hey. Ask me about the palette, the one law, or the component kit.';
    else if(/colou?r|palette|gold|scarlet/.test(s))a='Five roles: lacquer, bone, gold, scarlet, moss. Gold gilds the edges; scarlet is spent only on the irreversible.';
    else if(/law|rule|rare|rarity/.test(s))a='The one law: colour earns its power by being rare. Almost all tone, one strike of meaning.';
    else if(/theme|kogane|washi|dark|light/.test(s))a='Two themes from one source — kogane (lacquer dark) and washi (paper light). Press 1 or 2 anywhere on the page.';
    else if(/component|button|form|kit/.test(s))a='The kit above is built only from tokens — buttons, forms, tables, dialogs. Flip the theme and it all follows.';
    else if(/contrast|access|a11y|blind/.test(s))a='Contrast is proven, not guessed. And status always carries a glyph — colour is never the only signal.';
    else if(/who|what|yoshiki|样|様/.test(s))a='様式 yoshiki — a warm, contrast-proven design language. MIT, and steerable by an AI agent from the repo alone.';
    else a='Good question. The short version: warm never grey, gold gilds, and rarity is power. Try the terminal demo for more.';
    return a;
  }
  function send(){
    const v=chInput.value.trim();if(!v)return;chInput.value='';bubble(v,'me');
    const typing=document.createElement('div');typing.className='typing';typing.innerHTML='<i></i><i></i><i></i>';
    chBody.appendChild(typing);chBody.scrollTop=chBody.scrollHeight;
    setTimeout(()=>{typing.remove();bubble(reply(v),'them');},RM?0:760);
  }
  chSend.onclick=send;chInput.addEventListener('keydown',e=>{if(e.key==='Enter')send();});

  /* ════ dashboard ════ */
  const dash=(function(){
    const grid=document.getElementById('dashGrid');
    const BR=['⠀','⠄','⠆','⠇','⠧','⠷','⠿','⣿'];
    const sl=v=>BR[Math.max(0,Math.min(7,Math.round(v*7)))];
    let req=18420,p99=42,err=0.02,cpu=Array.from({length:40},()=>Math.random()*.4+.3),thr=Array.from({length:48},()=>Math.random()*.5+.25);
    let timer=null,canvas,ctx;
    grid.innerHTML=`
      <div class="dcard"><div class="dl">req / min</div><div class="dv" id="dReq">18,420</div><div class="dd up" id="dReqD">▲ 4.2%</div></div>
      <div class="dcard"><div class="dl">p99 latency</div><div class="dv" id="dP99">42<small> ms</small></div><div class="spark" id="dP99s"></div></div>
      <div class="dcard"><div class="dl">error rate</div><div class="dv" id="dErr" style="color:var(--mori-0)">0.02<small> %</small></div><div class="dd up">▲ nominal</div></div>
      <div class="dcard"><div class="dl">cpu</div><div class="dv" id="dCpu">36<small> %</small></div><div class="spark" id="dCpus"></div></div>
      <div class="dcard w2"><div class="dl">throughput · last 48 beats</div><canvas id="dThr" height="84"></canvas></div>
      <div class="dcard w2"><div class="dl">services</div>
        <div style="margin-top:10px;display:flex;flex-direction:column;gap:9px;font-family:var(--mono);font-size:12px">
          <div style="display:flex;justify-content:space-between"><span class="stat m">gateway</span><span style="color:var(--bone-3)" id="svc0">healthy</span></div>
          <div style="display:flex;justify-content:space-between"><span class="stat k pulse">render</span><span style="color:var(--bone-3)" id="svc1">deploying</span></div>
          <div style="display:flex;justify-content:space-between"><span class="stat s">billing</span><span style="color:var(--aka-0)" id="svc2">1 incident</span></div>
        </div></div>`;
    canvas=document.getElementById('dThr');ctx=canvas.getContext('2d');
    function sizeCanvas(){canvas.width=canvas.offsetWidth*devicePixelRatio;canvas.height=84*devicePixelRatio;ctx.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);}
    function drawThr(){
      const W=canvas.offsetWidth,H=84;ctx.clearRect(0,0,W,H);
      const gold=cv('kin-1')||'#D8AF52',line=cv('line-1')||'#4C3D24';
      ctx.strokeStyle=line;ctx.lineWidth=1;ctx.globalAlpha=.5;
      for(let g=1;g<3;g++){const y=H*g/3;ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(W,y);ctx.stroke();}
      ctx.globalAlpha=1;
      ctx.beginPath();const step=W/(thr.length-1);
      thr.forEach((v,i)=>{const x=i*step,y=H-6-v*(H-14);i?ctx.lineTo(x,y):ctx.moveTo(x,y);});
      ctx.strokeStyle=gold;ctx.lineWidth=1.6;ctx.shadowBlur=8;ctx.shadowColor=gold;ctx.stroke();ctx.shadowBlur=0;
      const grad=ctx.createLinearGradient(0,0,0,H);grad.addColorStop(0,gold+'44');grad.addColorStop(1,gold+'00');
      ctx.lineTo(W,H);ctx.lineTo(0,H);ctx.closePath();ctx.fillStyle=grad;ctx.fill();
    }
    function tick(){
      req+=Math.round((Math.random()-.45)*220);p99=Math.max(22,Math.min(160,p99+(Math.random()-.5)*14));err=Math.max(0,Math.min(2.4,err+(Math.random()-.52)*.06));
      cpu.push(Math.random()*.5+.25);cpu.shift();thr.push(Math.random()*.6+.2);thr.shift();
      const cpuNow=Math.round(cpu[cpu.length-1]*100);
      document.getElementById('dReq').textContent=req.toLocaleString('en');
      document.getElementById('dP99').innerHTML=Math.round(p99)+'<small> ms</small>';
      document.getElementById('dP99s').textContent=cpu.slice(-22).map(v=>sl(Math.min(1,p99/120*v*1.4))).join('');
      const ev=document.getElementById('dErr');ev.innerHTML=err.toFixed(2)+'<small> %</small>';ev.style.color=err>=1?'var(--aka-0)':err>=.3?'var(--kaki)':'var(--mori-0)';
      document.getElementById('dCpu').innerHTML=cpuNow+'<small> %</small>';
      document.getElementById('dCpus').textContent=cpu.slice(-22).map(sl).join('');
      drawThr();
    }
    function render(){sizeCanvas();tick();}
    function start(){if(RM){render();return;}if(timer)return;sizeCanvas();drawThr();timer=setInterval(tick,820);}
    function stop(){if(timer){clearInterval(timer);timer=null;}}
    addEventListener('resize',()=>{if(document.getElementById('dDash').classList.contains('on')){sizeCanvas();drawThr();}});
    render();
    return {start,stop};
  })();

  // pause the dashboard when the section scrolls out of view
  const sec=document.getElementById('s7');
  if(sec){new IntersectionObserver(es=>es.forEach(x=>{
    const onTab=document.getElementById('dDash').classList.contains('on');
    if(x.isIntersecting&&onTab)dash.start();else dash.stop();
  }),{threshold:.05}).observe(sec);}
})();
