/* ════════════════════════════════════════════════════════════════════
   page-palette.js — tokens, the roles contract, the proof, exports
   Every value comes from window.YOSHIKI (generated from canon/palette).
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {Y, onTheme, ratio, grade, lum, esc, toast} = window.YS;
  if (!Y.themes) return;
  const $ = id => document.getElementById(id);

  const ROLE_SECTIONS = [
    ['bg.', 'surfaces', 'the depth ladder — a step, never a shadow'],
    ['border.', 'gilding', 'the edge is the affordance; a hairline only divides'],
    ['text.', 'text', 'every one measured against every surface'],
    ['action.', 'action', 'a gold frame with gold text — gold never fills'],
    ['ok.', 'success', 'life; may fill, but a ✓ usually says it better'],
    ['warn.', 'warning', 'the lamp, not the alarm'],
    ['danger.', 'danger', 'the bloom — the one fill the language allows'],
    ['info.', 'info', 'information lives in tone; there is no blue in the UI'],
    ['special.', 'special', 'wisteria — rare, for the machine-made'],
    ['focus.', 'focus', 'the one state you may not skip'],
    ['selection.', 'selection', ''],
    ['syntax.', 'syntax', 'editors and terminals only']
  ];

  /* ── tokens, by group ── */
  function drawGroups(slug){
    const tok = Y.themes[slug].tokens;
    const el = $('tokenTheme');
    if (el) el.textContent = Y.themes[slug].meta.slug + ' ' + Y.themes[slug].meta.kanji;
    $('groups').innerHTML = Y.groups.map(g => {
      const steps = g.steps.filter(s => tok[s.token]);
      if (!steps.length) return '';
      return `
      <div style="padding:var(--y-5) 0;border-top:1px solid var(--r-border-hairline)">
        <div class="cols" style="gap:var(--y-5)">
          <div class="c4">
            <div style="font-family:var(--y-serif);font-size:19px;color:var(--r-text-heading)">${esc(g.label)}</div>
            <div style="font-size:12.5px;color:var(--r-text-muted);line-height:1.7;margin-top:6px;max-width:34ch">${esc(g.note)}</div>
          </div>
          <div class="c8">
            <div class="tiles" style="grid-template-columns:repeat(auto-fill,minmax(150px,1fr))">
              ${steps.map(s => `
                <button class="swatch" data-copy="${esc(tok[s.token])}">
                  <span class="swatch__chip" style="background:${esc(tok[s.token])}"></span>
                  <span class="swatch__n">${esc(s.token)}</span>
                  <span class="swatch__v">${esc(tok[s.token])}</span>
                  <span class="swatch__job">${esc(s.job)}</span>
                </button>`).join('')}
            </div>
          </div>
        </div>
      </div>`;
    }).join('');
  }

  /* ── the roles contract ── */
  function drawRoles(slug){
    const th = Y.themes[slug], other = Y.themes[Y.order.find(s => s !== slug)];
    const names = Object.keys(th.roles);
    $('roles').innerHTML = ROLE_SECTIONS.map(([prefix, label, note]) => {
      const rows = names.filter(n => n.startsWith(prefix));
      if (!rows.length) return '';
      return `
      <div style="margin-bottom:var(--y-8)">
        <div class="y-head">${esc(label)}${note ? ' — ' + esc(note) : ''}</div>
        <div class="y-scroll-x"><table class="spec">
          <thead><tr><th></th><th>role</th><th>token</th><th>value</th><th>remapped on paper</th></tr></thead>
          <tbody>${rows.map(n => {
            const val = th.roles[n], tokName = th.roleTokens[n];
            const remap = th.roleTokens[n] !== other.roleTokens[n];
            return `<tr>
              <td style="width:40px"><span style="display:block;width:26px;height:26px;border-radius:7px;
                    background:${esc(val)};border:1px solid var(--r-border-hairline)"></span></td>
              <td><button class="y-btn y-btn--quiet y-btn--sm" style="padding:0;min-height:0"
                  data-copy="var(--r-${esc(n.replace(/\./g,'-'))})"
                  data-copy-label="copied · CSS variable"><code>${esc(n)}</code></button></td>
              <td style="font-family:var(--y-mono);font-size:12px">${esc(tokName)}</td>
              <td style="font-family:var(--y-mono);font-size:12px">${esc(val)}</td>
              <td style="font-size:12px">${remap ? '<span style="color:var(--r-text-gold)">◆ yes — ' + esc(other.roleTokens[n]) + '</span>' : '<span style="color:var(--r-text-muted)">—</span>'}</td>
            </tr>`;
          }).join('')}</tbody>
        </table></div>
      </div>`;
    }).join('');
  }

  /* ── the generated proof ── */
  function cellHTML(c){
    return c.pass
      ? `<span class="cell-pass">${c.ratio}</span>`
      : `<span class="cell-fail">${c.ratio} ✗</span>`;
  }
  function drawMatrix(slug){
    const p = Y.themes[slug].proof, surf = Object.keys(p.surfaces);
    const head = surf.map(s => `<th class="y-num">${esc(s.split('.')[1])}</th>`).join('');
    const block = (title, rows) => `
      <div class="y-head" style="margin-top:var(--y-6)">${esc(title)}</div>
      <div class="y-scroll-x"><table class="spec">
        <thead><tr><th>role</th>${head}<th class="y-num">floor</th></tr></thead>
        <tbody>${rows.map(r => `<tr>
          <td><code>${esc(r.role)}</code></td>
          ${surf.map(s => `<td class="y-num">${cellHTML(r.cells[s])}</td>`).join('')}
          <td class="y-num" style="color:var(--r-text-muted)">${r.floor}</td>
        </tr>`).join('')}</tbody></table></div>`;

    const flat = (title, rows) => `
      <div class="y-head" style="margin-top:var(--y-6)">${esc(title)}</div>
      <div class="y-scroll-x"><table class="spec">
        <thead><tr><th>role</th><th>on</th><th class="y-num">ratio</th><th class="y-num">floor</th></tr></thead>
        <tbody>${rows.map(r => `<tr>
          <td><code>${esc(r.role)}</code></td>
          <td style="font-family:var(--y-mono);font-size:12px">${esc(r.on)}</td>
          <td class="y-num">${cellHTML(r)}</td>
          <td class="y-num" style="color:var(--r-text-muted)">${r.floor}</td>
        </tr>`).join('')}</tbody></table></div>`;

    const bad = [].concat(p.matrix, p.edges).some(r => surf.some(s => !r.cells[s].pass))
             || [].concat(p.syntax, p.wash, p.ansi).some(r => !r.pass);
    $('matrix').innerHTML =
      `<div class="y-alert ${bad ? 'y-alert--danger' : 'y-alert--ok'}">
         <span class="y-alert__mark" aria-hidden="true">${bad ? '✗' : '✓'}</span>
         <div><div class="y-alert__title">${bad ? 'Failures present' : 'Every role passes on every surface'}</div>
         <div class="y-alert__body">${esc(Y.themes[slug].meta.name)} ${esc(Y.themes[slug].meta.kanji)} ·
         regenerated and enforced by <code>tools/build.py</code> on every build.</div></div>
       </div>`
      + block('text — floor 4.5:1, ghost 3:1', p.matrix)
      + block('gilding — an edge, floor 3:1', p.edges)
      + flat('syntax on the editor page · washes · terminal ANSI',
             [].concat(p.syntax, p.wash, p.ansi));
  }

  /* ── the live checker ── */
  function fillSelects(slug){
    const th = Y.themes[slug];
    const solid = Object.keys(th.roles).filter(n => /^#/.test(th.roles[n]));
    const fg = $('fgSel'), bg = $('bgSel');
    const keepFg = fg.value, keepBg = bg.value;
    const opts = list => list.map(n => `<option value="${esc(n)}">${esc(n)}</option>`).join('');
    fg.innerHTML = opts(solid.filter(n => !n.startsWith('bg.')));
    bg.innerHTML = opts(solid.filter(n => n.startsWith('bg.') || n.endsWith('.wash') || n.endsWith('.fill')));
    fg.value = keepFg && solid.includes(keepFg) ? keepFg : 'text.body';
    bg.value = keepBg && solid.includes(keepBg) ? keepBg : 'bg.app';
    check();
  }
  function check(){
    const th = Y.themes[document.documentElement.dataset.theme];
    const fg = th.roles[$('fgSel').value], bg = th.roles[$('bgSel').value];
    if (!fg || !bg) return;
    const r = ratio(fg, bg), g = grade(r), ok = r >= 4.5;
    $('checker').innerHTML = `
      <div style="background:${esc(bg)};border:1px solid var(--r-border-hairline);
                  border-radius:var(--y-r-control);padding:var(--y-4);text-align:center">
        <div style="color:${esc(fg)};font-family:var(--y-mono);font-size:24px">${r.toFixed(2)}:1</div>
        <div style="color:${esc(fg)};font-family:var(--y-mono);font-size:11px;letter-spacing:2px;
                    text-transform:uppercase;opacity:.85;margin-top:4px">
          ${ok ? '✓' : r >= 3 ? '⚠' : '✗'} ${esc(g)}</div>
      </div>`;
  }
  ['fgSel','bgSel'].forEach(id => $(id).addEventListener('change', check));

  /* ── exports ── */
  function tokenPairs(slug){ return Object.entries(Y.themes[slug].tokens); }
  const EXPORTS = {
    'CSS': slug => ':root {\n' + tokenPairs(slug).map(([n,v]) => `  --${n}: ${v};`).join('\n') +
      '\n  /* roles — prefer these */\n' +
      Object.entries(Y.themes[slug].roles).map(([n,v]) => `  --r-${n.replace(/\./g,'-')}: ${v};`).join('\n') + '\n}',
    'DTCG': slug => JSON.stringify({
        $description: `yoshiki ${slug} — W3C design tokens`,
        color: tokenPairs(slug).reduce((o,[n,v]) => (o[n] = {$value:v, $type:'color'}, o), {}),
        role: Object.entries(Y.themes[slug].roles).reduce((o,[n,v]) => (o[n.replace(/\./g,'-')] = {$value:v, $type:'color'}, o), {})
      }, null, 2),
    'JSON': slug => JSON.stringify({tokens: Y.themes[slug].tokens, roles: Y.themes[slug].roles}, null, 2),
    'base24': slug => 'system: "base24"\nname: "yoshiki ' + slug + '"\nauthor: "Zinzaki"\nvariant: "' +
      Y.themes[slug].meta.mode + '"\npalette:\n' +
      Object.entries(Y.themes[slug].base24).sort().map(([k,v]) => `  ${k}: "${v.replace('#','')}"`).join('\n'),
    'SCSS': slug => tokenPairs(slug).map(([n,v]) => `$y-${n}: ${v};`).join('\n'),
    'hex': slug => tokenPairs(slug).map(([n,v]) => `${v}  ${n}`).join('\n')
  };
  let fmt = 'CSS';
  function drawExport(slug){
    $('expTabs').innerHTML = Object.keys(EXPORTS).map(k =>
      `<button role="tab" aria-selected="${k === fmt}" data-fmt="${k}">${k}</button>`).join('');
    $('expPre').textContent = EXPORTS[fmt](slug);
  }
  $('expTabs').addEventListener('click', e => {
    const b = e.target.closest('[data-fmt]');
    if (!b) return;
    fmt = b.dataset.fmt;
    drawExport(document.documentElement.dataset.theme);
  });

  onTheme(slug => { drawGroups(slug); drawRoles(slug); drawMatrix(slug); fillSelects(slug); drawExport(slug); });
})();
