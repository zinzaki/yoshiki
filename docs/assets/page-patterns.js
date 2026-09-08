/* ════════════════════════════════════════════════════════════════════
   page-patterns.js — the library's text catalogue, browsable
   Reads window.YOSHIKI_PATTERNS, which the build writes from the actual
   .txt files. The page therefore cannot show a pattern the repository
   does not have, and adding a file adds an entry here.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {esc, toast} = window.YS;
  const P = window.YOSHIKI_PATTERNS;
  if (!P) return;
  const $ = id => document.getElementById(id);

  const REPO = 'https://github.com/zinzaki/yoshiki/tree/main/library/';
  let mod = P.modules[0], file = mod.files[0];

  /* the paint footer is guidance about the block, not part of it */
  function split(body){
    const lines = body.split('\n');
    const paint = [];
    while (lines.length && /^#\s*(paint|rule|order|the rule|rules)\b/i.test(lines[lines.length - 1].trim())
           === false && lines[lines.length - 1].trim().startsWith('#')){
      paint.unshift(lines.pop());
    }
    // pull the trailing comment block (the paint/rules note) off the end
    let tail = [];
    while (lines.length && lines[lines.length - 1].trim().startsWith('#')) tail.unshift(lines.pop());
    while (lines.length && !lines[lines.length - 1].trim()) lines.pop();
    return {block: lines.join('\n'), note: tail.concat(paint).join('\n')};
  }

  function drawTabs(){
    $('patModules').innerHTML = P.modules.map(m =>
      `<button aria-selected="${m === mod}" data-mod="${esc(m.key)}">${esc(m.key)}
        <span>${m.files.length}</span></button>`).join('');
  }

  function drawList(){
    $('patList').innerHTML = mod.files.map(f => `
      <button class="pat-row" aria-current="${f === file}" data-file="${esc(f.name)}">
        <b>${esc(f.name)}</b><span>${esc(f.note)}</span>
      </button>`).join('');
  }

  function drawFile(){
    const {block, note} = split(file.body);
    $('patView').innerHTML = `
      <div class="y-code">
        <div class="y-code__bar">
          <span>library/${esc(mod.key)}/${esc(file.name)}.txt</span>
          <a href="${REPO}${esc(mod.key)}/${esc(file.name)}.txt">open on GitHub ↗</a>
        </div>
        <button class="y-btn y-btn--ghost y-btn--sm copy" data-copy-from="patBody"
                data-copy-label="copied · ${esc(file.name)}">copy</button>
        <pre id="patBody">${esc(block)}</pre>
      </div>
      ${note ? `<div class="pat-note">${esc(note.replace(/^#\s?/gm, ''))}</div>` : ''}`;
  }

  function draw(){ drawTabs(); drawList(); drawFile(); }

  $('patModules').addEventListener('click', e => {
    const b = e.target.closest('[data-mod]');
    if (!b) return;
    mod = P.modules.find(m => m.key === b.dataset.mod);
    file = mod.files[0];
    draw();
  });
  $('patList').addEventListener('click', e => {
    const b = e.target.closest('[data-file]');
    if (!b) return;
    file = mod.files.find(f => f.name === b.dataset.file);
    drawList(); drawFile();
  });

  $('patCount').textContent = P.modules.reduce((n, m) => n + m.files.length, 0);
  draw();
})();
