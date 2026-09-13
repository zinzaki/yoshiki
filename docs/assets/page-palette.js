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

  /* ── tokens, as ramps ──────────────────────────────────────────────
     A colour family is a scale, so it is drawn as one continuous ramp
     rather than a row of separate tiles: the steps belong to each other,
     and forty-two detached rectangles read as scattered rather than as a
     system. The families that are NOT part of the surface palette are
     pulled out below, because showing them at equal weight is what makes
     a warm monochrome look like a rainbow. */
  const UI_GROUPS = ['surface', 'line', 'bone', 'kin', 'kaki', 'aka', 'mori'];

  function ramp(g, tok){
    const steps = g.steps.filter(s => tok[s.token]);
    if (!steps.length) return '';
    return `
      <div class="fam">
        <div class="fam__head">
          <div class="fam__name">${esc(g.label)}</div>
          <div class="fam__note">${esc(g.note)}</div>
        </div>
        <div class="fam__body">
          <div class="ramp">
            ${steps.map(s => `
              <button class="ramp__step" style="background:${esc(tok[s.token])}"
                      data-copy="${esc(tok[s.token])}" title="${esc(s.token)} — ${esc(s.job)}">
                <span class="ramp__hex">${esc(tok[s.token])}</span>
              </button>`).join('')}
          </div>
          <div class="ramp__legend">
            ${steps.map(s => `
              <div class="ramp__label">
                <b>${esc(s.token)}</b><span>${esc(s.job)}</span>
              </div>`).join('')}
          </div>
        </div>
      </div>`;
  }

  function drawGroups(slug){
    const tok = Y.themes[slug].tokens;
    const el = $('tokenTheme');
    if (el) el.textContent = Y.themes[slug].meta.slug;
    const by = k => Y.groups.find(g => g.key === k);

    $('groups').innerHTML = UI_GROUPS.map(k => ramp(by(k), tok)).filter(Boolean).join('');

    /* ── the rest: real colours, deliberately not part of the surface ── */
    const onfill = by('onfill'), paper = by('paper'), service = by('service');
    $('aside').innerHTML = `
      <div class="cols" style="gap:var(--gutter)">
        <div class="c4">
          <div class="y-head">on a fill</div>
          <div class="aside-demo">
            <span class="chip-fill" style="background:${esc(tok['aka-1'])};color:${esc(tok['shiro'])}">✗ Delete</span>
            <span class="chip-fill" style="background:${esc(tok['mori-1'])};color:${esc(tok['shiro'])}">✓ Done</span>
          </div>
          <p class="cap">${esc(onfill.note)}. It never appears as a surface — only as
          the label standing on one of the two fills.</p>
        </div>
        <div class="c4">
          <div class="y-head">the paper artifact</div>
          <div class="aside-demo">
            <div class="paper-card" style="background:${esc(tok['washi-bg'])};color:${esc(tok['washi-ink'])};
                 border-color:${esc(tok['washi-line'])}">
              <b>Receipt</b><span>a light card pinned inside the dark</span>
            </div>
          </div>
          <p class="cap">${esc(paper.note)}</p>
        </div>
        <div class="c4">
          <div class="y-head">terminal and syntax only</div>
          <div class="y-island island">
            ${service.steps.filter(s => tok[s.token]).map(s => `
              <button class="island__chip" data-copy="${esc(tok[s.token])}" title="${esc(s.token)} — ${esc(s.job)}">
                <span style="background:${esc(tok[s.token])}"></span>${esc(s.token)}
              </button>`).join('')}
          </div>
          <p class="cap">${esc(service.note)}. They are shown small and apart on purpose:
          at equal weight they turn a warm monochrome into a rainbow, which is exactly
          the mistake the language exists to avoid.</p>
        </div>
      </div>`;
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
         <div class="y-alert__body">${esc(Y.themes[slug].meta.name)} ·
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
