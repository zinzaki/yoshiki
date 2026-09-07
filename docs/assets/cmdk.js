/* ════════════════════════════════════════════════════════════════════
   cmdk.js — the command palette
   A reference is a tool, and a tool answers the keyboard. Cmd/Ctrl-K
   searches every token, role, component, theme and page; Enter copies the
   value or goes to the page. Built from the generated palette data, so it
   knows exactly as much as the build does.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {Y, esc, copy, theme, $, $$} = window.YS;
  const root = document.documentElement;

  const PAGES = [
    ['The language', 'index.html'], ['Palette', 'palette.html'],
    ['Components', 'components.html'], ['Lexicon', 'lexicon.html'],
    ['Themes', 'themes.html']
  ];
  const COMPONENTS = [
    'y-btn', 'y-btn--primary', 'y-btn--danger', 'y-seg', 'y-field', 'y-input',
    'y-opt', 'y-switch', 'y-range', 'y-panel', 'y-card', 'y-dialog', 'y-pop',
    'y-alert', 'y-toast', 'y-badge', 'y-status', 'y-progress', 'y-empty',
    'y-skeleton', 'y-table', 'y-kv', 'y-stat', 'y-pager', 'y-term'
  ];
  const THEMES = ['kitty','foot','alacritty','ghostty','wezterm','vscode','neovim',
                  'starship','tmux','zellij','btop','fzf','base24'];

  function index(){
    const th = Y.themes ? Y.themes[root.dataset.theme] : null;
    const out = [];
    PAGES.forEach(([label, href]) => out.push({kind:'page', name:label, go:href}));
    out.push({kind:'action', name:'Switch to kogane (dark)', act:() => theme('kogane')});
    out.push({kind:'action', name:'Switch to washi (light)', act:() => theme('washi')});
    if (th){
      Object.entries(th.roles).forEach(([n, v]) =>
        out.push({kind:'role', name:n, value:v, copy:'var(--r-' + n.replace(/\./g,'-') + ')',
                  hint:'CSS variable'}));
      Object.entries(th.tokens).forEach(([n, v]) =>
        out.push({kind:'token', name:n, value:v, copy:v}));
    }
    COMPONENTS.forEach(c => out.push({kind:'class', name:'.' + c, copy:c, go:'components.html'}));
    THEMES.forEach(t => out.push({kind:'theme', name:t, go:'themes.html'}));
    return out;
  }

  let items = [], shown = [], sel = 0, box, input, list;

  function build(){
    const el = document.createElement('div');
    el.id = 'cmd';
    el.innerHTML =
      '<div class="cmd-scrim" data-close></div>' +
      '<div class="cmd-box" role="dialog" aria-modal="true" aria-label="Search">' +
        '<input type="text" placeholder="Search tokens, roles, components, themes…" ' +
               'aria-label="Search" autocomplete="off" spellcheck="false">' +
        '<div class="cmd-list" role="listbox"></div>' +
        '<div class="cmd-foot"><span>↑↓ move</span><span>↵ copy or open</span>' +
        '<span>esc close</span></div>' +
      '</div>';
    document.body.appendChild(el);
    box = el; input = $('input', el); list = $('.cmd-list', el);
    input.addEventListener('input', () => { sel = 0; render(); });
    el.addEventListener('click', e => {
      if (e.target.closest('[data-close]')) return close();
      const row = e.target.closest('.cmd-row');
      if (row) run(shown[+row.dataset.i]);
    });
  }

  function score(item, q){
    const n = item.name.toLowerCase();
    if (!q) return item.kind === 'page' ? 3 : 1;
    const i = n.indexOf(q);
    if (i === 0) return 100 - n.length;
    if (i > 0) return 60 - n.length;
    if ((item.value || '').toLowerCase().includes(q)) return 40;
    return -1;
  }

  function render(){
    const q = input.value.trim().toLowerCase();
    shown = items.map(it => [score(it, q), it]).filter(p => p[0] >= 0)
                 .sort((a,b) => b[0] - a[0]).slice(0, 40).map(p => p[1]);
    if (!shown.length){
      list.innerHTML = '<div class="cmd-empty">Nothing matches that.</div>';
      return;
    }
    list.innerHTML = shown.map((it, i) => {
      const sw = it.value && /^#/.test(it.value)
        ? `<span class="sw" style="background:${esc(it.value)}"></span>`
        : `<span class="sw" style="border-style:dashed"></span>`;
      return `<button class="cmd-row" role="option" data-i="${i}" aria-selected="${i === sel}">
        ${sw}<span class="nm">${esc(it.name)}</span>
        <span class="kind">${esc(it.hint || it.kind)}</span></button>`;
    }).join('');
    const cur = $('[aria-selected="true"]', list);
    if (cur) cur.scrollIntoView({block:'nearest'});
  }

  function run(item){
    if (!item) return;
    if (item.act){ item.act(); return close(); }
    if (item.copy){ copy(item.copy, 'copied · ' + item.name); return close(); }
    if (item.go){ close(); location.href = item.go; }
  }

  function open(){
    if (!box) build();
    items = index();
    input.value = ''; sel = 0;
    box.setAttribute('data-open','');
    render();
    input.focus();
  }
  function close(){ if (box) box.removeAttribute('data-open'); }

  addEventListener('keydown', e => {
    const open_ = box && box.hasAttribute('data-open');
    if ((e.key === 'k' || e.key === 'K') && (e.metaKey || e.ctrlKey)){
      e.preventDefault(); return open_ ? close() : open();
    }
    if (e.key === '/' && !open_ && !e.target.closest('input,textarea,select')){
      e.preventDefault(); return open();
    }
    if (!open_) return;
    if (e.key === 'Escape'){ e.preventDefault(); return close(); }
    if (e.key === 'ArrowDown'){ e.preventDefault(); sel = Math.min(shown.length - 1, sel + 1); return render(); }
    if (e.key === 'ArrowUp'){ e.preventDefault(); sel = Math.max(0, sel - 1); return render(); }
    if (e.key === 'Enter'){ e.preventDefault(); return run(shown[sel]); }
  });
  $$('[data-cmdk]').forEach(b => b.addEventListener('click', open));
})();
