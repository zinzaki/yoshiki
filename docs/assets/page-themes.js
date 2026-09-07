/* ════════════════════════════════════════════════════════════════════
   page-themes.js — the thirteen generated targets, previewed
   Every colour drawn here is read from the same data the theme files are
   baked from, so a preview cannot flatter a file it disagrees with.
   ════════════════════════════════════════════════════════════════════ */
(function(){
  'use strict';
  const {Y, onTheme, esc, lum} = window.YS;
  if (!Y.themes) return;
  const $ = id => document.getElementById(id);
  const REPO = 'https://github.com/zinzaki/yoshiki/tree/main/library/themes/';

  const TARGETS = {
    kitty:     ['terminal', 'kogane.conf · washi.conf', 'include the file from kitty.conf', 'include ./kogane.conf'],
    foot:      ['terminal', 'kogane.ini · washi.ini', 'include it from foot.ini', 'include=~/.config/foot/kogane.ini'],
    alacritty: ['terminal', 'kogane.toml · washi.toml', 'import it in alacritty.toml', 'import = ["~/.config/alacritty/kogane.toml"]'],
    ghostty:   ['terminal', 'kogane · washi', 'drop into ~/.config/ghostty/themes/', 'theme = kogane'],
    wezterm:   ['terminal', 'kogane.toml · washi.toml', 'drop into ~/.config/wezterm/colors/', "config.color_scheme = 'yoshiki kogane'"],
    vscode:    ['editor', 'kogane.json · washi.json', 'workbench + token colours, a whole theme', '"workbench.colorTheme": "yoshiki kogane"'],
    neovim:    ['editor', 'kogane.lua · washi.lua', 'copy to colors/ in your runtimepath', ':colorscheme yoshiki-kogane'],
    starship:  ['prompt', 'kogane.toml · washi.toml', 'a palette block for starship.toml', 'palette = "yoshiki-kogane"'],
    tmux:      ['multiplexer', 'kogane.tmux · washi.tmux', 'source it from tmux.conf', 'source-file ~/.config/tmux/kogane.tmux'],
    zellij:    ['multiplexer', 'kogane.kdl · washi.kdl', 'themes dir, spec 0.41+', 'theme "yoshiki-kogane"'],
    btop:      ['monitor', 'kogane.theme · washi.theme', 'drop into ~/.config/btop/themes/', 'color_theme = "kogane"'],
    fzf:       ['picker', 'kogane.sh · washi.sh', 'source it, or lift the --color list', 'source ~/.config/fzf/kogane.sh'],
    base24:    ['scheme', 'kogane.yaml · washi.yaml', 'for the base16 / base24 ecosystems', 'tinty apply yoshiki-kogane']
  };

  function card(name){
    const [kind, files, note, cmd] = TARGETS[name];
    return `
      <div class="y-card">
        <div style="display:flex;align-items:baseline;gap:10px">
          <a href="${REPO}${name}" style="font-family:var(--y-mono);font-size:14px;color:var(--r-text-heading)">${esc(name)}</a>
          <span class="y-badge" style="margin-left:auto">${esc(kind)}</span>
        </div>
        <div class="y-hint" style="margin-top:8px">${esc(files)}</div>
        <div class="y-hint" style="margin-top:4px;color:var(--r-text-secondary)">${esc(note)}</div>
        <button class="y-btn y-btn--ghost y-btn--sm" data-copy="${esc(cmd)}" data-copy-label="copied · ${esc(name)} line"
                style="margin-top:12px;width:100%;justify-content:space-between;font-family:var(--y-mono);font-size:11.5px">
          <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${esc(cmd)}</span><span aria-hidden="true">⧉</span>
        </button>
      </div>`;
  }
  const grid = names => `<div class="tiles" style="grid-template-columns:repeat(auto-fill,minmax(240px,1fr))">${names.map(card).join('')}</div>`;

  /* ── the terminal: one session, drawn in the theme's own ANSI ── */
  function drawTerminal(slug){
    /* the terminal is a dark island in BOTH themes, so its chrome takes the
       dark theme's tokens whatever the page is wearing — reading them from the
       current theme is how a light-theme preview ends up with ink on ink */
    const t = Y.themes[Y.order[0]], term = Y.themes[slug].terminal, a = term.ansi, br = term.brights;
    const S = (c, s) => `<span style="color:${c}">${s}</span>`;
    const line = [
      S(br[3], '╭─ ◆ ─') + ' ' + S(term.foreground, 'deploy') + ' ' + S(br[3], '─  main') + ' ' +
        S(a[2], '✓ clean') + ' ' + S(br[3], '─') + ' ' + S(a[6], 'v1.2'),
      S(br[3], '╰─ ❯ ') + S(term.foreground, 'cargo test --release'),
      '',
      S(a[2], '   Compiling') + ' ' + S(br[7], 'yoshiki v1.2.0'),
      S(a[2], '✓ ') + S(term.foreground, 'palette') + '    ' + S(a[3], '42 tokens') + ' ' + S(t.tokens['bone-3'], '· 35 roles'),
      S(a[2], '✓ ') + S(term.foreground, 'contrast') + '   ' + S(t.tokens['bone-3'], '181 checks, every floor met'),
      S(br[3], '● ') + S(term.foreground, 'themes') + '     ' + S(t.tokens['bone-3'], 'baking 13 targets ') + S(br[3], '⠹'),
      S(a[1], '✗ ') + S(term.foreground, 'publish') + '    ' + S(t.tokens['bone-3'], 'blocked · needs --confirm'),
      '',
      S(a[4], 'note') + S(t.tokens['bone-3'], ': blue, wisteria and celadon live only here')
    ].join('\n');
    $('termDemo').innerHTML =
      `<div style="background:${term.background};border:1px solid ${t.tokens['line-0']};
            border-radius:var(--y-r-card);overflow:hidden">
         <div style="display:flex;align-items:center;gap:7px;padding:11px 15px;
              border-bottom:1px solid ${t.tokens['line-0']}">
           ${[t.tokens['aka-1'], t.tokens['kin-1'], t.tokens['mori-1']].map(c =>
             `<span style="width:9px;height:9px;border-radius:50%;background:${c};display:block"></span>`).join('')}
           <span style="font-family:var(--y-mono);font-size:11px;color:${t.tokens['bone-3']};margin-left:8px">
             zinzaki@yoshiki — ${esc(slug)}</span>
         </div>
         <pre style="margin:0;padding:18px;font-family:var(--y-mono);font-size:12.5px;line-height:1.95;
              white-space:pre-wrap;color:${term.foreground}">${line}</pre>
       </div>`;

    const ansiName = ['black','red','green','yellow','blue','magenta','cyan','white'];
    $('ansiGrid').innerHTML =
      `<div style="display:grid;grid-template-columns:repeat(8,minmax(0,1fr));gap:5px">` +
      a.concat(br).map((c, i) => `
        <button class="swatch" data-copy="${c}" title="${i < 8 ? 'ansi' : 'bright'} ${esc(ansiName[i % 8])}">
          <span class="swatch__chip" style="background:${c};height:30px;border-radius:7px"></span>
          <span class="swatch__v" style="margin-top:5px;text-align:center">${i.toString(16).toUpperCase()}</span>
        </button>`).join('') +
      `</div>`;

    $('termMeta').innerHTML = `<dl class="y-kv">
        <dt>background</dt><dd>${esc(term.background)}</dd>
        <dt>foreground</dt><dd>${esc(term.foreground)}</dd>
        <dt>cursor</dt><dd>${esc(term.cursor)}</dd>
        <dt>selection</dt><dd>${esc(term.selection_background)}</dd>
      </dl>
      <p class="y-hint" style="margin-top:12px;line-height:1.7">Identical in both themes —
      the island does not invert.</p>`;
  }

  /* ── the editor: syntax roles on the theme's own page ── */
  function drawEditor(slug){
    const t = Y.themes[slug], r = t.roles, tok = t.tokens;
    const S = (c, s) => `<span style="color:${c}">${s}</span>`;
    const code = [
      `<span data-floor="3" style="color:${r['syntax.comment']}">// a role resolves to a token — the theme decides which</span>`,
      S(r['syntax.keyword'], 'pub fn ') + S(r['text.heading'], 'resolve') +
        S(tok['bone-3'], '(') + S(tok['bone-2'], 'role') + S(tok['bone-3'], ': ') +
        S(r['syntax.type'], '&str') + S(tok['bone-3'], ') -> ') + S(r['syntax.type'], 'Token') + S(tok['bone-3'], ' {'),
      '    ' + S(r['syntax.keyword'], 'let ') + S(tok['bone-1'], 'floor') + S(tok['bone-3'], ' = ') +
        S(r['syntax.number'], '4.5') + S(tok['bone-3'], ';'),
      '    ' + S(r['syntax.keyword'], 'match ') + S(tok['bone-1'], 'role') + S(tok['bone-3'], ' {'),
      '        ' + S(r['syntax.string'], '"text.body"') + S(tok['bone-3'], ' => ') +
        S(r['syntax.constant'], 'Token') + S(tok['bone-3'], '::') + S(tok['bone-1'], 'Bone') + S(tok['bone-3'], '(1),'),
      '        ' + S(r['syntax.string'], '"action.edge"') + S(tok['bone-3'], ' => ') +
        S(r['syntax.constant'], 'Token') + S(tok['bone-3'], '::') + S(tok['bone-1'], 'Kin') + S(tok['bone-3'], '(1),'),
      '        ' + S(tok['bone-3'], '_ => ') + S(r['syntax.constant'], 'Token') + S(tok['bone-3'], '::') +
        S(tok['bone-1'], 'Bone') + S(tok['bone-3'], '(1),'),
      '    ' + S(tok['bone-3'], '}'),
      S(tok['bone-3'], '}')
    ].join('\n');
    $('editorDemo').innerHTML =
      `<div style="background:${r['bg.app']};border:1px solid ${r['border.hairline']};
            border-radius:var(--y-r-card);overflow:hidden">
         <div style="display:flex;gap:2px;padding:8px 8px 0;background:${r['bg.surface']}">
           <span style="font-family:var(--y-mono);font-size:11px;padding:7px 12px;border-radius:8px 8px 0 0;
                 background:${r['bg.app']};color:${r['text.heading']};border-top:2px solid ${r['border.gold']}">palette.rs</span>
           <span style="font-family:var(--y-mono);font-size:11px;padding:7px 12px;color:${r['text.muted']}">build.py</span>
         </div>
         <pre style="margin:0;padding:18px;font-family:var(--y-mono);font-size:12.5px;line-height:1.9;
              white-space:pre-wrap">${code}</pre>
         <div style="display:flex;align-items:center;gap:14px;padding:8px 14px;
              background:${r['bg.surface']};border-top:1px solid ${r['border.hairline']};
              font-family:var(--y-mono);font-size:11px;color:${r['text.muted']}">
           <span style="color:${r['text.gold']}">NORMAL</span><span>main ~2</span>
           <span style="margin-left:auto;color:${r['warn.text']}">⚠ 1</span>
           <span style="color:${r['ok.text']}">✓ 0</span><span>utf-8 · 42:8</span>
         </div>
       </div>`;
  }

  /* ── the strips: prompt, panes, picker, gauges, scheme ── */
  function drawRest(slug){
    const t = Y.themes[slug], r = t.roles, term = t.terminal;
    const tok = Y.themes[Y.order[0]].tokens;   // the island, again
    const S = (c, s) => `<span style="color:${c}">${s}</span>`;
    /* a gauge bar is a graphic: canon gives it the 3:1 non-text floor.
       A hairline rule carries no floor at all — it divides, it does not
       identify a control. Both say which they are, where they are used. */
    const G = (c, s) => `<span data-floor="3" style="color:${c}">${s}</span>`;
    const HAIR = (c, s) => `<span data-floor="1" style="color:${c}">${s}</span>`;
    const island = body => `<pre style="margin:0;padding:14px 16px;background:${term.background};
        border:1px solid ${tok['line-0']};border-radius:var(--y-r-control);
        font-family:var(--y-mono);font-size:12px;line-height:1.85;white-space:pre-wrap;overflow-x:auto">${body}</pre>`;

    const strips = {
      starship: island(
        S(tok['kin-1'], '╭─ ◆ ─ ') + S(tok['bone-0'], '~/dev/yoshiki') + S(tok['kin-1'], ' ─  ') +
        S(tok['bone-2'], 'main') + ' ' + S(tok['mori-0'], '~2 +1') + S(tok['kin-1'], ' ─ ') +
        S(tok['seiji-1'], 'py 3.12') + S(tok['kin-1'], ' ─ ') + S(tok['kaki-1'], '2.4s') + '\n' +
        S(tok['kin-1'], '╰─ ❯ ')),
      tmux: island(
        S(tok['kin-1'], ' ◆ yoshiki ') + S(tok['bone-0'], ' 1:build* ') + S(tok['bone-3'], ' 2:test  3:docs ') +
        S(tok['bone-3'], '                    ') + S(tok['kin-2'], ' 14:02 ')),
      zellij: island(
        S(tok['bone-0'], ' NORMAL ') + S(tok['kin-0'], '│ Tab #1 ') + S(tok['bone-3'], '│ Tab #2 ') +
        S(tok['bone-3'], '                 ') + S(tok['mori-0'], '✓ 0') + S(tok['bone-3'], ' · ') +
        S(tok['kaki-1'], '⚠ 1') + '\n' +
        S(tok['bone-3'], ' &lt;g&gt; go to · &lt;n&gt; new pane · &lt;q&gt; quit')),
      fzf: island(
        S(tok['kin-1'], '❯ ') + S(tok['bone-1'], 'pal') + '\n' +
        S(tok['bone-3'], '  3/41 ') + HAIR(tok['line-1'], '───────────────────') + '\n' +
        S(tok['kin-0'], '▌ ') + S(tok['bone-0'], 'canon/') + S(tok['kin-1'], 'pal') + S(tok['bone-0'], 'ette/kogane') + '\n' +
        S(tok['bone-3'], '  ') + S(tok['bone-2'], 'canon/') + S(tok['kin-1'], 'pal') + S(tok['bone-2'], 'ette/washi') + '\n' +
        S(tok['bone-3'], '  ') + S(tok['bone-2'], 'library/web/') + S(tok['kin-1'], 'pal') + S(tok['bone-2'], 'ette.css')),
      btop: island(
        S(tok['bone-3'], 'cpu  ') + G(tok['mori-1'], '▁▂▃') + G(tok['kin-2'], '▄▅▆') + G(tok['kin-0'], '▇█') + S(tok['bone-2'], '  42%') + '\n' +
        S(tok['bone-3'], 'mem  ') + G(tok['seiji-1'], '▁▂▃▄') + G(tok['hotaru-1'], '▅▆') + G(tok['fuji-1'], '▇') + S(tok['bone-2'], '   61%') + '\n' +
        S(tok['bone-3'], 'temp ') + G(tok['mori-1'], '▁▂▃▄') + G(tok['kaki-1'], '▅▆') + G(tok['aka-1'], '▇█') + S(tok['bone-2'], '  71°'))
    };

    const b24 = `<div style="display:grid;grid-template-columns:repeat(12,1fr);gap:4px">` +
      Object.entries(t.base24).sort().map(([k, v]) =>
        `<button data-copy="${v}" title="${k}" style="height:26px;border-radius:6px;border:1px solid ${r['border.hairline']};
           background:${v};cursor:pointer"></button>`).join('') + `</div>`;

    $('rest').innerHTML = ['starship','tmux','zellij','fzf','btop'].map(name => `
      <div class="cols" style="margin-bottom:var(--y-6);align-items:start">
        <div class="c7">${strips[name]}</div>
        <div class="c5">${card(name)}</div>
      </div>`).join('') + `
      <div class="cols" style="align-items:start">
        <div class="c7">${b24}<p class="y-hint" style="margin-top:10px">the 24 slots, in ${esc(slug)}</p></div>
        <div class="c5">${card('base24')}</div>
      </div>`;
  }

  onTheme(slug => {
    drawTerminal(slug);
    drawEditor(slug);
    drawRest(slug);
    $('terminals').innerHTML = grid(['kitty','foot','alacritty','ghostty','wezterm']);
    $('editors').innerHTML = grid(['vscode','neovim']);
  });
})();
