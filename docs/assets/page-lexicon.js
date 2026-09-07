/* ════════════════════════════════════════════════════════════════════
   page-lexicon.js — the glyph table and the two progress tapes
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {esc, RM} = window.YS;

  /* one glyph, one meaning — grouped the way canon/lexicon/glyphs.md groups them */
  const SETS = [
    ['status', 'where something stands', [
      ['✓','done','ok'], ['✗','failed','bad'], ['●','active','gold'], ['○','idle',''],
      ['◉','selected','gold'], ['◌','pending',''], ['⊘','blocked',''], ['⏻','power',''] ]],
    ['flow', 'how things connect', [
      ['→','leads to','gold'], ['←','comes from',''], ['↦','maps to',''], ['↺','retry',''],
      ['⇄','sync',''], ['↑','in',''], ['↓','out',''], ['❯','prompt','gold'] ]],
    ['rank', 'what matters more', [
      ['◆','important','gold'], ['◇','regular',''], ['◈','special','special'], ['★','top','gold'],
      ['▲','rising','ok'], ['▼','falling','bad'], ['⬡','unit',''], ['·','separator',''] ]],
    ['alert', 'rare, loud on purpose', [
      ['⚠','warning','warn'], ['⛌','hard stop','bad'], ['⟥','field marker',''], ['⧎','section sigil','gold'],
      ['│','divider',''], ['—','range',''], ['»','next',''], ['…','more',''] ]]
  ];
  const TONE = {gold:'var(--r-text-gold)', ok:'var(--r-ok-text)', bad:'var(--r-danger-text)',
                warn:'var(--r-warn-text)', special:'var(--r-special-text)', '':'var(--r-text-secondary)'};

  const host = document.getElementById('glyphs');
  if (host) host.innerHTML = SETS.map(([key, note, items]) => `
    <div style="margin-bottom:var(--y-6)">
      <div class="y-head">${esc(key)} — ${esc(note)}</div>
      <div class="tiles" style="grid-template-columns:repeat(auto-fill,minmax(112px,1fr))">
        ${items.map(([g, meaning, tone]) => `
          <button class="y-card" data-copy="${esc(g)}" style="cursor:pointer;text-align:center;padding:var(--y-4) var(--y-2)">
            <div style="font-family:var(--y-mono);font-size:21px;line-height:1;color:${TONE[tone]}">${esc(g)}</div>
            <div class="y-hint" style="margin-top:9px">${esc(meaning)}</div>
          </button>`).join('')}
      </div>
    </div>`).join('');

  /* progress — sub-symbol fills, never a slab */
  const MATRIX = ['⠀','⠄','⠆','⠇','⠧','⠷','⠿','⣿'];
  const mx = document.getElementById('mx'), tp = document.getElementById('tp');
  function draw(pct){
    const cells = 12;
    if (mx){
      let out = '';
      for (let i = 0; i < cells; i++){
        const level = Math.max(0, Math.min(7, Math.round((pct / 100 * cells - i) * 7)));
        out += MATRIX[pct / 100 * cells > i + 1 ? 7 : level];
      }
      mx.innerHTML = `<span style="color:var(--r-action-edge)">${out}</span>` +
                     `<span style="color:var(--r-text-muted);font-size:12px"> ${Math.round(pct)}%</span>`;
    }
    if (tp){
      const full = Math.round(pct / 10);
      tp.innerHTML = `<span style="color:var(--r-action-edge)">${'▰'.repeat(full)}</span>` +
                     `<span style="color:var(--r-border-strong)">${'▱'.repeat(10 - full)}</span>` +
                     `<span style="color:var(--r-text-muted)"> ${Math.round(pct)}%</span>`;
    }
  }
  if (RM){ draw(60); }
  else { let p = 0; draw(0); setInterval(() => { p = (p + 3) % 103; draw(Math.min(100, p)); }, 130); }
})();
