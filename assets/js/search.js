/**
 * DIGIT Design System Search
 * Fuzzy search overlay with keyboard shortcut support.
 * Opens with Cmd/Ctrl+K or clicking any [data-search-open] button.
 * Closes with Escape or clicking backdrop.
 */

window.DIGIT = window.DIGIT || {};

DIGIT.search = (function () {
  let overlay, input, resultsList, noResults;
  let currentIndex = -1;

  // ─── Render ──────────────────────────────────────────────────────────────────

  function injectOverlay() {
    const el = document.createElement('div');
    el.id = 'search-overlay';
    el.setAttribute('role', 'dialog');
    el.setAttribute('aria-modal', 'true');
    el.setAttribute('aria-label', 'Search documentation');
    el.className = 'fixed inset-0 z-[200] flex items-start justify-center pt-[10vh] px-4 hidden';
    el.innerHTML = `
      <!-- Backdrop -->
      <div id="search-backdrop" class="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <!-- Search panel -->
      <div class="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">

        <!-- Input row -->
        <div class="flex items-center gap-3 px-4 py-3.5 border-b border-gray-100">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor"
            class="w-5 h-5 shrink-0 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0016.803 15.803z" />
          </svg>
          <input
            id="search-input"
            type="text"
            placeholder="Search components, foundations, patterns…"
            autocomplete="off"
            spellcheck="false"
            class="flex-1 bg-transparent text-gray-900 placeholder-gray-400 text-sm outline-none" />
          <kbd class="hidden sm:flex items-center text-[11px] font-mono text-gray-400 bg-gray-100 border border-gray-200 rounded px-1.5 py-0.5">
            Esc
          </kbd>
        </div>

        <!-- Results -->
        <div id="search-results-list" class="max-h-[60vh] overflow-y-auto py-2" role="listbox"></div>

        <!-- No results -->
        <div id="search-no-results" class="hidden px-4 py-10 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-8 h-8 mx-auto mb-3 text-gray-300">
            <path stroke-linecap="round" stroke-linejoin="round" d="M15.182 16.318A4.486 4.486 0 0012.016 15a4.486 4.486 0 00-3.198 1.318M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
          </svg>
          <p class="text-sm text-gray-500">No results found</p>
        </div>

        <!-- Footer hint -->
        <div class="flex items-center gap-4 px-4 py-2.5 border-t border-gray-100 text-[11px] text-gray-400">
          <span class="flex items-center gap-1">
            <kbd class="font-mono bg-gray-100 border border-gray-200 rounded px-1">↑↓</kbd> Navigate
          </span>
          <span class="flex items-center gap-1">
            <kbd class="font-mono bg-gray-100 border border-gray-200 rounded px-1">↵</kbd> Open
          </span>
          <span class="flex items-center gap-1">
            <kbd class="font-mono bg-gray-100 border border-gray-200 rounded px-1">Esc</kbd> Close
          </span>
        </div>
      </div>`;

    document.body.appendChild(el);
    overlay     = el;
    input       = el.querySelector('#search-input');
    resultsList = el.querySelector('#search-results-list');
    noResults   = el.querySelector('#search-no-results');

    el.querySelector('#search-backdrop').addEventListener('click', close);
    input.addEventListener('input', onInput);
    input.addEventListener('keydown', onKeydown);
  }

  // ─── Open / close ─────────────────────────────────────────────────────────

  function open() {
    if (!overlay) injectOverlay();
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    input.value = '';
    renderResults('');
    setTimeout(function () { input.focus(); }, 50);
  }

  function close() {
    if (!overlay) return;
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    currentIndex = -1;
  }

  // ─── Search logic ─────────────────────────────────────────────────────────

  function score(query, item) {
    const q   = query.toLowerCase();
    const t   = item.title.toLowerCase();
    const s   = item.section.toLowerCase();
    if (t.startsWith(q))           return 3;
    if (t.includes(q))             return 2;
    if (s.includes(q))             return 1;
    return 0;
  }

  function renderResults(query) {
    currentIndex = -1;
    resultsList.innerHTML = '';

    const items = query
      ? DIGIT.searchIndex
          .map(function (item) { return { item: item, score: score(query, item) }; })
          .filter(function (r) { return r.score > 0; })
          .sort(function (a, b) { return b.score - a.score; })
          .map(function (r) { return r.item; })
      : DIGIT.searchIndex;

    const show = items.slice(0, 12);

    if (show.length === 0) {
      noResults.classList.remove('hidden');
      return;
    }
    noResults.classList.add('hidden');

    // Group by section
    const grouped = {};
    show.forEach(function (item) {
      if (!grouped[item.section]) grouped[item.section] = [];
      grouped[item.section].push(item);
    });

    Object.entries(grouped).forEach(function ([sectionLabel, sectionItems]) {
      const groupEl = document.createElement('div');
      groupEl.className = 'mb-1';
      groupEl.innerHTML = `<div class="px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-gray-400">${sectionLabel}</div>`;

      sectionItems.forEach(function (item) {
        const a = document.createElement('a');
        a.href      = DIGIT.getHref(item.path);
        a.className = 'flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 cursor-pointer transition-colors result-item';
        a.setAttribute('role', 'option');
        const hl = query ? highlightMatch(item.title, query) : item.title;
        a.innerHTML = `
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 shrink-0 text-gray-400">
            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
          </svg>
          <span>${hl}</span>
          ${item.badge ? `<span class="ml-auto text-[10px] font-semibold px-1.5 py-0.5 rounded-full bg-[#EEF1FF] text-[#0E165D]">${item.badge}</span>` : ''}`;
        a.addEventListener('click', close);
        groupEl.appendChild(a);
      });

      resultsList.appendChild(groupEl);
    });
  }

  function highlightMatch(text, query) {
    const idx = text.toLowerCase().indexOf(query.toLowerCase());
    if (idx === -1) return text;
    return text.slice(0, idx)
      + `<mark class="bg-[#FFFBEB] text-[#B45309] rounded px-0.5">${text.slice(idx, idx + query.length)}</mark>`
      + text.slice(idx + query.length);
  }

  // ─── Keyboard navigation ──────────────────────────────────────────────────

  function onInput() {
    renderResults(input.value.trim());
  }

  function onKeydown(e) {
    const items = resultsList.querySelectorAll('.result-item');
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      currentIndex = Math.min(currentIndex + 1, items.length - 1);
      highlightItem(items, currentIndex);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      currentIndex = Math.max(currentIndex - 1, 0);
      highlightItem(items, currentIndex);
    } else if (e.key === 'Enter' && currentIndex >= 0) {
      e.preventDefault();
      items[currentIndex].click();
    } else if (e.key === 'Escape') {
      close();
    }
  }

  function highlightItem(items, index) {
    items.forEach(function (el, i) {
      el.classList.toggle('bg-gray-50',           i === index);
      el.classList.toggle('',  i === index);
    });
    if (items[index]) items[index].scrollIntoView({ block: 'nearest' });
  }

  // ─── Init ─────────────────────────────────────────────────────────────────

  function init() {
    // Cmd/Ctrl + K shortcut
    document.addEventListener('keydown', function (e) {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        open();
      }
    });

    // Wire up all open triggers
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-search-open]')) {
        open();
      }
    });
  }

  return { init: init, open: open, close: close };
}());
