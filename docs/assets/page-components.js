/* ════════════════════════════════════════════════════════════════════
   page-components.js — the kit, demonstrated
   Each entry holds ONE markup string. It is inserted into the page and
   printed underneath, so the demo and the snippet cannot disagree.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {esc, reveal} = window.YS;

  const SECTIONS = [
  { key:'controls', title:'Controls', canon:'controls.md',
    note:'A button is a surface with an edge, not a coloured block. The hierarchy is carried by the edge and the text — never by a bigger fill.',
    demos:[
    ['the ladder', 'One primary per view. Scarlet is the only fill, and only for the irreversible.',
`<div class="y-actions">
  <button class="y-btn y-btn--primary">Publish</button>
  <button class="y-btn y-btn--ghost">Save draft</button>
  <button class="y-btn y-btn--quiet">Cancel</button>
  <button class="y-btn y-btn--danger">Delete</button>
</div>`],
    ['states', 'Loading holds its width — the label is replaced, not resized.',
`<div class="y-actions">
  <button class="y-btn y-btn--primary" data-loading="⠹"><span class="y-btn__label">Working</span></button>
  <button class="y-btn y-btn--primary" disabled>Disabled</button>
  <button class="y-btn y-btn--ghost y-btn--sm">Small</button>
  <button class="y-btn y-btn--primary y-btn--icon" aria-label="run">❯</button>
</div>`],
    ['segmented', 'One of a few. The tint is the boundary — there are no inner rules.',
`<div class="y-seg">
  <button aria-selected="true">palette</button>
  <button aria-selected="false">type</button>
  <button aria-selected="false">motion</button>
</div>`]]},

  { key:'forms', title:'Forms', canon:'forms.md',
    note:'Label above the control, one hint line, and the error replaces the hint. Validate on blur — a field that turns scarlet while you are still typing is scolding, not helping.',
    demos:[
    ['field · hint · error', 'Required is marked with a gold ·, never a scarlet asterisk: required is not an error.',
`<div class="y-field">
  <label for="d-mail">email <span class="y-req">·</span></label>
  <input class="y-input" id="d-mail" type="email" placeholder="you@studio.jp">
  <span class="y-hint">we only use it for the receipt</span>
</div>
<div class="y-field y-field--error">
  <label for="d-key">api key</label>
  <input class="y-input y-input--mono" id="d-key" value="invalid-key">
  <span class="y-hint y-hint--error">✗ a key must start with sk_</span>
</div>
<div class="y-field">
  <label for="d-theme">theme</label>
  <span class="y-select"><select class="y-input" id="d-theme">
    <option>kogane — lacquer dark</option>
    <option>washi — paper light</option>
  </select></span>
</div>`],
    ['choice', 'The shape says single or multiple before the colour does: a checkbox is square, a radio is round.',
`<label class="y-opt"><input type="checkbox" checked><span class="y-box"></span> grain overlay</label>
<label class="y-opt"><input type="checkbox"><span class="y-box"></span> reduce motion</label>
<label class="y-opt"><input type="radio" name="d-dens" checked><span class="y-box y-box--radio"></span> comfortable</label>
<label class="y-opt"><input type="radio" name="d-dens"><span class="y-box y-box--radio"></span> compact</label>`],
    ['switch · range', 'A switch only when the change applies itself. A slider without a number is a guess.',
`<div class="y-actions">
  <button class="y-switch" role="switch" aria-checked="true" aria-label="grain overlay"></button>
  <span class="y-hint">applies immediately</span>
</div>
<div class="y-range" style="margin-top:16px">
  <input type="range" min="0" max="100" value="62" aria-label="gold intensity" data-y-format="%v&#37;">
  <output>62%</output>
</div>`]]},

  { key:'surfaces', title:'Surfaces', canon:'surfaces.md',
    note:'Depth is a step in the ladder, never a shadow. Two steps is usually the whole depth of an interface; three means the layout is nesting when it should be dividing.',
    demos:[
    ['card · panel', 'Weight rides the top: title, then content — the bottom is left open.',
`<div class="y-card">
  <div class="y-head">deployment</div>
  <p style="color:var(--r-text-body)">Kyoto · edge · 14 regions</p>
  <p class="y-hint" style="margin-top:6px">last shipped 4 minutes ago</p>
</div>
<a class="y-card y-card--link" href="#kit" style="margin-top:12px">
  <div class="y-head">an interactive card</div>
  <p style="color:var(--r-text-body)">Takes a gold edge under the hand →</p>
</a>`],
    ['dividers', 'A plain rule, or one broken by a single mark. One or the other on a page, never both.',
`<hr class="y-rule">
<div class="y-rule--mark">◆</div>`],
    ['dialog', 'The one thing that floats, so the one thing that casts. Scarlet sits on the confirm button only — the title stays bone.',
`<div style="position:relative;height:210px;border-radius:var(--y-r-card);overflow:hidden;
            border:1px solid var(--r-border-hairline)">
  <div class="y-scrim" style="position:absolute"></div>
  <div class="y-dialog" style="position:absolute;width:92%">
    <h3>Delete the workshop key?</h3>
    <p>The key stops working immediately and cannot be recovered. Anything signed with it stays valid.</p>
    <div class="y-actions">
      <button class="y-btn y-btn--ghost y-btn--sm">Keep it</button>
      <button class="y-btn y-btn--danger y-btn--sm">Delete key</button>
    </div>
  </div>
</div>`]]},

  { key:'feedback', title:'Feedback', canon:'feedback.md',
    note:'Every element here carries a glyph — colour is the second cue, never the first. That matters more than usual: the two triggers are exactly the red–green pair that the commonest colour-blindness collapses into one.',
    demos:[
    ['alerts', 'Only danger may take a wash behind it, and only one alert per surface may be scarlet.',
`<div class="y-alert">
  <span class="y-alert__mark" aria-hidden="true">◆</span>
  <div><div class="y-alert__title">Region added</div>
  <div class="y-alert__body">Osaka is serving traffic. It may take a minute to appear in metrics.</div></div>
</div>
<div class="y-alert y-alert--warn" style="margin-top:10px">
  <span class="y-alert__mark" aria-hidden="true">⚠</span>
  <div><div class="y-alert__title">Certificate expires in 6 days</div>
  <div class="y-alert__body">Renewal is automatic, but the DNS record must stay in place.</div></div>
</div>
<div class="y-alert y-alert--danger" style="margin-top:10px">
  <span class="y-alert__mark" aria-hidden="true">✗</span>
  <div><div class="y-alert__title">Migration blocked</div>
  <div class="y-alert__body">Two columns would lose data. Re-run with --confirm to proceed.</div></div>
</div>`],
    ['badges · status', 'A bare coloured dot is forbidden — it carries meaning by colour alone.',
`<div class="y-actions">
  <span class="y-badge y-badge--gold">◆ primary</span>
  <span class="y-badge y-badge--ok">✓ passing</span>
  <span class="y-badge y-badge--warn">⚠ degraded</span>
  <span class="y-badge y-badge--danger">✗ failing</span>
  <span class="y-badge y-badge--count">18</span>
</div>
<div class="y-actions" style="margin-top:14px">
  <span class="y-status y-status--ok"><span class="y-status__mark">✓</span> healthy</span>
  <span class="y-status y-status--live"><span class="y-status__mark">●</span> live</span>
  <span class="y-status"><span class="y-status__mark">○</span> idle</span>
  <span class="y-status"><span class="y-status__mark">⊘</span> blocked</span>
</div>`],
    ['progress · empty · skeleton', 'A spinner with no label is a shrug; a shimmer is decoration pretending to be progress.',
`<div class="y-progress">
  <div class="y-progress__track"><div class="y-progress__fill" style="width:64%"></div></div>
  <span class="y-progress__val">64%</span>
</div>
<div class="y-actions" style="margin-top:16px">
  <span class="y-status"><span class="y-status__mark" data-spin="braille">⠹</span> uploading 12 of 40</span>
</div>
<div style="display:flex;gap:8px;margin-top:18px">
  <div class="y-skeleton" style="height:12px;width:40%"></div>
  <div class="y-skeleton" style="height:12px;width:22%"></div>
</div>
<div class="y-empty">
  <div class="y-empty__mark">◌</div>
  <p>nothing deployed yet</p>
  <button class="y-btn y-btn--ghost y-btn--sm">Deploy the first build</button>
</div>`]]},

  { key:'data', title:'Data', canon:'data.md',
    note:'Numbers right and mono, text left, glyphs centred. No vertical rules and no zebra stripes — a hairline per row already divides, and stripes fight the tone budget.',
    demos:[
    ['table', 'One cell earns a colour, because one value crossed its threshold. Everything else stays in tone.',
`<div class="y-scroll-x"><table class="y-table">
  <thead><tr>
    <th>service</th><th class="y-num">req/min</th><th class="y-num">p99</th>
    <th class="y-num" aria-sort="descending">err %</th><th>status</th>
  </tr></thead>
  <tbody>
    <tr><td>gateway</td><td class="y-num">18,420</td><td class="y-num">42</td>
        <td class="y-num">0.02</td><td><span class="y-status y-status--ok"><span class="y-status__mark">✓</span> healthy</span></td></tr>
    <tr><td>auth</td><td class="y-num">9,310</td><td class="y-num">88</td>
        <td class="y-num" style="color:var(--r-warn-text)">0.11</td><td><span class="y-status y-status--warn"><span class="y-status__mark">⚠</span> degraded</span></td></tr>
    <tr aria-selected="true"><td>billing</td><td class="y-num">1,208</td><td class="y-num">140</td>
        <td class="y-num" style="color:var(--r-danger-text)">1.40</td><td><span class="y-status y-status--bad"><span class="y-status__mark">✗</span> failing</span></td></tr>
  </tbody>
</table></div>`],
    ['stat tiles', 'The delta reads by direction, not by sign — a falling error rate is good.',
`<div style="display:grid;gap:12px;grid-template-columns:repeat(auto-fit,minmax(150px,1fr))">
  <div class="y-stat"><div class="y-stat__label">req / min</div>
    <div class="y-stat__value">18,420</div>
    <div class="y-stat__delta y-stat__delta--good">▲ 4.2%</div></div>
  <div class="y-stat"><div class="y-stat__label">error rate</div>
    <div class="y-stat__value">0.04%</div>
    <div class="y-stat__delta y-stat__delta--good">▼ 0.6pp</div></div>
  <div class="y-stat"><div class="y-stat__label">p99</div>
    <div class="y-stat__value">42 ms</div>
    <div class="y-stat__delta y-stat__delta--bad">▲ 11 ms</div></div>
</div>`],
    ['key–value · pagination', 'The receipt pattern: keys left in mono, values forming a column.',
`<dl class="y-kv">
  <dt>⟥ item</dt><dd>Hand-bound notebook</dd>
  <dt>⟥ status</dt><dd>✓ paid</dd>
  <dt>⟥ total</dt><dd>¥ 4,820</dd>
</dl>
<div class="y-pager" style="margin-top:20px">
  <button aria-label="previous">‹</button>
  <button aria-current="page">1</button><button>2</button><button>3</button>
  <button aria-label="next">›</button>
  <span class="y-pager__range">21–40 of 318</span>
</div>`]]},

  { key:'chrome', title:'Chrome', canon:'controls.md',
    note:'The small furniture a real interface is mostly made of. None of it is decorative: a keycap is an object so it gets an object\u2019s edge, a tooltip is a label the pointer earns and never a place to hide content, and tabs are an underline rather than a filled slab.',
    demos:[
    ['keys · tags · tooltip', 'A tag is a badge you can take off; the remove control turns scarlet only under the hand.',
`<div class="y-actions">
  <kbd class="y-kbd">\u2318</kbd><kbd class="y-kbd">K</kbd>
  <span class="y-hint">open the palette</span>
</div>
<div class="y-actions" style="margin-top:16px">
  <span class="y-tag">kogane <button aria-label="remove kogane">\u2717</button></span>
  <span class="y-tag">washi <button aria-label="remove washi">\u2717</button></span>
  <button class="y-btn y-btn--ghost y-btn--sm y-tip" data-tip="a label the pointer earns">Hover me</button>
</div>`],
    ['breadcrumb · tabs', 'The current page takes the gold; the trail behind it stays secondary.',
`<nav class="y-crumb" aria-label="Breadcrumb"><ol>
  <li><a href="#chrome">canon</a></li>
  <li><a href="#chrome">palette</a></li>
  <li><a href="#chrome" aria-current="page">kogane</a></li>
</ol></nav>
<div class="y-tabs" style="margin-top:18px">
  <button aria-selected="true">Palette</button>
  <button aria-selected="false">Type</button>
  <button aria-selected="false">Motion</button>
</div>`],
    ['disclosure · avatar', 'A fold hides detail without hiding that there is detail.',
`<details class="y-fold" open>
  <summary>Why roles and not tokens?</summary>
  <div>A token is a value and promises nothing. A role is a promise: the right
  value in either theme, at a contrast measured against every surface.</div>
</details>
<details class="y-fold">
  <summary>What does the build actually generate?</summary>
  <div>Thirteen program themes, the token exports, this page\u2019s colours, the
  banner, the mark and the contrast proof.</div>
</details>
<div class="y-actions" style="margin-top:18px">
  <span class="y-avatar">ZK</span>
  <span class="y-avatar y-avatar--gold">\u25c6</span>
  <span class="y-hint">initials, or one mark</span>
</div>`]]},

  { key:'sequence', title:'Sequence and notice', canon:'feedback.md',
    note:'Work that takes time, and the things an interface says while it does. A meter shows a value against a scale; progress shows a task in flight; a stage list shows both and is almost always the better answer.',
    demos:[
    ['meters', 'The threshold is a mark, never a filled band \u2014 a band would colour values that are still fine.',
`<div class="y-meter">
  <span class="y-meter__label">cpu</span><span class="y-meter__value">42%</span>
  <div class="y-meter__track"><div class="y-meter__fill" style="width:42%"></div>
    <span class="y-meter__mark" style="left:80%"></span></div>
</div>
<div class="y-meter y-meter--warn" style="margin-top:14px">
  <span class="y-meter__label">disk</span><span class="y-meter__value">84%</span>
  <div class="y-meter__track"><div class="y-meter__fill" style="width:84%"></div>
    <span class="y-meter__mark" style="left:80%"></span></div>
</div>`],
    ['steps · timeline', 'The same sequence twice: inline when only the position matters, vertical when each step has something to say.',
`<div class="y-steps">
  <span class="y-steps__step" data-state="done">\u2713 source</span>
  <span class="y-steps__rail"></span>
  <span class="y-steps__step" data-state="now">\u25cf proof</span>
  <span class="y-steps__rail"></span>
  <span class="y-steps__step">\u25cb export</span>
</div>
<ul class="y-timeline" style="margin-top:22px">
  <li data-state="done"><div class="y-timeline__title">Palette resolved</div>
    <div class="y-timeline__meta">42 tokens \u00b7 0.4s</div></li>
  <li data-state="now"><div class="y-timeline__title">Contrast proof</div>
    <div class="y-timeline__meta">184 checks <span data-spin="braille">\u2839</span></div></li>
  <li><div class="y-timeline__title">Bake thirteen themes</div>
    <div class="y-timeline__meta">queued</div></li>
</ul>`],
    ['banner · split · code', 'A banner runs the width of what it concerns; an alert sits inside it.',
`<div class="y-banner">
  <span class="y-banner__mark">\u25c6</span>
  <div>A new release is available.</div>
  <button class="y-btn y-btn--quiet y-btn--sm">Read the notes</button>
</div>
<div class="y-banner y-banner--warn" style="margin-top:10px">
  <span class="y-banner__mark">\u26a0</span>
  <div>The washi gold moved in v1.2 \u2014 regenerate any vendored theme.</div>
</div>
<div class="y-actions" style="margin-top:18px">
  <span class="y-split">
    <button class="y-btn y-btn--primary y-btn--sm">Deploy</button>
    <button class="y-btn y-btn--primary y-btn--sm" aria-label="more">\u25be</button>
  </span>
</div>
<div class="y-code" style="margin-top:18px">
  <div class="y-code__bar"><span>palette.css</span><span>generated</span></div>
  <pre>:root { --r-text-body: var(--bone-1); }</pre>
</div>`]]}

  ];

  document.getElementById('kit').innerHTML = SECTIONS.map((s, i) => `
    <section class="sec ${i % 2 ? 'sec--plate' : ''}" id="${s.key}">
      <div class="shell">
        <div class="cols">
          <div class="c7 rv">
            <div class="idx"><b>${String(i + 1).padStart(2,'0')}</b> ${esc(s.title.toLowerCase())}</div>
            <h2>${esc(s.title)}</h2>
            <p class="lede">${s.note}</p>
            <p class="y-hint" style="margin-top:14px">canon/components/${esc(s.canon)}</p>
          </div>
        </div>
        ${s.demos.map((d, j) => {
          const id = `${s.key}-${j}`;
          return `
          <div class="cols rv" style="margin-top:34px;align-items:stretch">
            <div class="c6">
              <div class="y-head">${esc(d[0])}</div>
              <div class="plate" style="background:var(--r-bg-app)">${d[2]}</div>
              <p class="y-hint" style="margin-top:12px;line-height:1.7">${esc(d[1])}</p>
            </div>
            <div class="c6">
              <div class="y-head">the markup that produced it</div>
              <div class="code" style="height:calc(100% - 34px)">
                <button class="y-btn y-btn--ghost y-btn--sm copy" data-copy-from="${id}" data-copy-label="copied · markup">copy</button>
                <pre id="${id}">${esc(d[2])}</pre>
              </div>
            </div>
          </div>`;
        }).join('')}
      </div>
    </section>`).join('');

  reveal();

  /* density switch — proves the claim that only padding moves */
  const seg = document.getElementById('density');
  if (seg) seg.addEventListener('click', e => {
    const b = e.target.closest('button');
    if (b) document.documentElement.dataset.density = b.dataset.density;
  });
})();
