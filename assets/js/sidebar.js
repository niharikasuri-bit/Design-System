/**
 * DIGIT Design System Sidebar
 * Translated from React Sidebar component (exact match):
 * logo · search · Home · Getting Started · Design System (Foundation / Components / Patterns)
 */

window.DIGIT = window.DIGIT || {};

DIGIT.sidebar = (function () {

  // ── Lucide SVG icons (stroke="currentColor", exact paths) ────────────────
  var IC = {
    home:           '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
    layoutTemplate: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect width="18" height="7" x="3" y="3" rx="1"/><rect width="9" height="7" x="3" y="14" rx="1"/><rect width="5" height="7" x="16" y="14" rx="1"/></svg>',
    image:          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>',
    code2:          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
    bookOpen:       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>',
    fileText:       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><line x1="10" y1="9" x2="8" y2="9"/></svg>',
    userPlus:       '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="19" y1="8" x2="19" y2="14"/><line x1="22" y1="11" x2="16" y2="11"/></svg>',
    grid:           '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>',
    box:            '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>',
    layers:         '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    chevronDown:    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="6 9 12 15 18 9"/></svg>',
    chevronUp:      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><polyline points="18 15 12 9 6 15"/></svg>',
    search:         '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>',
  };

  // ── Navigation structure (matches React MENUS + dropdown items) ──────────
  function buildMenus(root) {
    return {
      explore: [
        { label: 'Designer',  path: root + 'docs/getting-started/designer.html',  icon: 'image', section: 'getting-started', page: 'designer'  },
        { label: 'Developer', path: root + 'docs/getting-started/developer.html', icon: 'code2', section: 'getting-started', page: 'developer' },
      ],
      gettingStarted: [
        { label: 'Design Approach',  path: root + 'docs/getting-started/design-approach.html', icon: 'bookOpen', section: 'getting-started', page: 'design-approach'  },
        { label: 'Inclusive Design', path: root + 'docs/getting-started/inclusive-design.html', icon: 'userPlus', section: 'getting-started', page: 'inclusive-design' },
        { label: 'Content Guidelines', path: root + 'docs/getting-started/content-standard.html', icon: 'fileText', section: 'getting-started', page: 'content-standard' },
      ],
      foundation: [
        { label: 'Color Palette', path: root + 'docs/foundation/color.html',      section: 'foundation', page: 'color'      },
        { label: 'Spacing',    path: root + 'docs/foundation/spacing.html',    section: 'foundation', page: 'spacing'    },
        { label: 'Typography', path: root + 'docs/foundation/typography.html', section: 'foundation', page: 'typography' },
        { label: 'Icon',       path: root + 'docs/foundation/icon.html',       section: 'foundation', page: 'icon'       },
        { label: 'Radius',     path: root + 'docs/foundation/radius.html',     section: 'foundation', page: 'radius'     },
      ],
      components: [
        { label: 'Atoms',     path: root + 'docs/components/atoms.html',     section: 'components', page: 'atoms'     },
        { label: 'Molecules', path: root + 'docs/components/molecules.html', section: 'components', page: 'molecules' },
      ],
      patterns: [
        { label: 'Form',    path: root + 'docs/patterns/form.html',    section: 'patterns', page: 'form'    },
        { label: 'Inbox',   path: root + 'docs/patterns/inbox.html',   section: 'patterns', page: 'inbox'   },
        { label: 'Summary', path: root + 'docs/patterns/summary.html', section: 'patterns', page: 'summary' },
      ],
    };
  }

  // ── Search index ────────────────────────────────────────────────────────
  function buildSearchData(root) {
    return [
      // Components
      { title: 'Accordion',                 category: 'Components', path: root + 'docs/components/accordion.html'              },
      { title: 'Alert Card',                category: 'Components', path: root + 'docs/components/alert-card.html'             },
      { title: 'Atoms',                     category: 'Components', path: root + 'docs/components/atoms.html'                  },
      { title: 'Bottom Sheet',              category: 'Components', path: root + 'docs/components/bottom-sheet.html'           },
      { title: 'Breadcrumbs',               category: 'Components', path: root + 'docs/components/breadcrumbs.html'            },
      { title: 'Button',                    category: 'Components', path: root + 'docs/components/button.html'                 },
      { title: 'Callout',                   category: 'Components', path: root + 'docs/components/callout.html'                },
      { title: 'Checkbox',                  category: 'Components', path: root + 'docs/components/checkbox.html'               },
      { title: 'Chips',                     category: 'Components', path: root + 'docs/components/chips.html'                  },
      { title: 'Divider',                   category: 'Components', path: root + 'docs/components/divider.html'                },
      { title: 'Dropdown - Multi Select',   category: 'Components', path: root + 'docs/components/dropdown-multi-select.html'  },
      { title: 'Dropdown - Single Select',  category: 'Components', path: root + 'docs/components/dropdown-single-select.html' },
      { title: 'File Uploader',             category: 'Components', path: root + 'docs/components/file-uploader.html'          },
      { title: 'Filter Card',               category: 'Components', path: root + 'docs/components/filter-card.html'            },
      { title: 'Footer',                    category: 'Components', path: root + 'docs/components/footer.html'                 },
      { title: 'Hamburger',                 category: 'Components', path: root + 'docs/components/hamburger.html'              },
      { title: 'Header',                    category: 'Components', path: root + 'docs/components/header.html'                 },
      { title: 'Input Fields',              category: 'Components', path: root + 'docs/components/input-fields.html'           },
      { title: 'Landing Page Card',         category: 'Components', path: root + 'docs/components/landing-page-card.html'      },
      { title: 'Loader',                    category: 'Components', path: root + 'docs/components/loader.html'                 },
      { title: 'Menu Card',                 category: 'Components', path: root + 'docs/components/menu-card.html'              },
      { title: 'Molecules',                 category: 'Components', path: root + 'docs/components/molecules.html'              },
      { title: 'OTP Input',                 category: 'Components', path: root + 'docs/components/otp-input.html'              },
      { title: 'Panel',                     category: 'Components', path: root + 'docs/components/panel.html'                  },
      { title: 'Panel Card',                category: 'Components', path: root + 'docs/components/panel-card.html'             },
      { title: 'Pop Ups',                   category: 'Components', path: root + 'docs/components/popups.html'                 },
      { title: 'Radio',                     category: 'Components', path: root + 'docs/components/radio.html'                  },
      { title: 'Selection Tags',            category: 'Components', path: root + 'docs/components/selection-tags.html'         },
      { title: 'Side Nav',                  category: 'Components', path: root + 'docs/components/side-nav.html'               },
      { title: 'Side Panel',                category: 'Components', path: root + 'docs/components/side-panel.html'             },
      { title: 'Stepper',                   category: 'Components', path: root + 'docs/components/stepper.html'                },
      { title: 'Switch',                    category: 'Components', path: root + 'docs/components/switch.html'                 },
      { title: 'Tabs',                      category: 'Components', path: root + 'docs/components/tabs.html'                   },
      { title: 'Tags',                      category: 'Components', path: root + 'docs/components/tags.html'                   },
      { title: 'Textblock',                 category: 'Components', path: root + 'docs/components/textblock.html'              },
      { title: 'Timeline',                  category: 'Components', path: root + 'docs/components/timeline.html'               },
      { title: 'Toast',                     category: 'Components', path: root + 'docs/components/toast.html'                  },
      { title: 'Toggles',                   category: 'Components', path: root + 'docs/components/toggles.html'                },
      { title: 'Tooltip',                   category: 'Components', path: root + 'docs/components/tooltip.html'                },
      // Foundation
      { title: 'Color Palette',     category: 'Foundation',      path: root + 'docs/foundation/color.html'       },
      { title: 'Spacing',          category: 'Foundation',      path: root + 'docs/foundation/spacing.html'     },
      { title: 'Typography',       category: 'Foundation',      path: root + 'docs/foundation/typography.html'  },
      { title: 'Icon',             category: 'Foundation',      path: root + 'docs/foundation/icon.html'        },
      { title: 'Radius',           category: 'Foundation',      path: root + 'docs/foundation/radius.html'      },
      // Patterns
      { title: 'Form',             category: 'Patterns',        path: root + 'docs/patterns/form.html'          },
      { title: 'Inbox',            category: 'Patterns',        path: root + 'docs/patterns/inbox.html'         },
      { title: 'Summary',          category: 'Patterns',        path: root + 'docs/patterns/summary.html'       },
      // Explore
      { title: 'Designer',  category: 'Explore', path: root + 'docs/getting-started/designer.html'  },
      { title: 'Developer', category: 'Explore', path: root + 'docs/getting-started/developer.html' },
      // Getting Started
      { title: 'Inclusive Design', category: 'Getting Started', path: root + 'docs/getting-started/inclusive-design.html'  },
      { title: 'Design Approach',  category: 'Getting Started', path: root + 'docs/getting-started/design-approach.html'   },
      { title: 'Content Guidelines', category: 'Getting Started', path: root + 'docs/getting-started/content-standard.html'  },
    ];
  }

  // ── Active state helpers ──────────────────────────────────────────────────
  function isItemActive(item) {
    var p = window.DIGIT_PAGE || {};
    return p.section === item.section && p.page === item.page;
  }
  function isSectionActive(sectionKey) {
    var p = window.DIGIT_PAGE || {};
    return p.section === sectionKey;
  }

  // ── HTML builders (matching React NavLink / SubMenuLink exactly) ─────────
  function navLink(item) {
    var active = isItemActive(item);
    var cls    = active
      ? 'bg-[#EEF1FF] text-[#0E165D] font-medium'
      : 'text-[#4B5563] hover:bg-[#F5F7FB] hover:text-[#111827] font-normal';
    var iconCls = active ? 'text-[#0E165D]' : 'text-[#6B7280]';
    return '<a href="' + item.path + '" class="flex items-center gap-2 px-2.5 py-[7px] rounded-md mb-px transition-colors ' + cls + '">' +
      (item.icon ? '<span class="shrink-0 ' + iconCls + '">' + IC[item.icon] + '</span>' : '') +
      '<span class="flex-1 leading-snug" style="font-size:16px">' + item.label + '</span>' +
    '</a>';
  }

  function dropdownBtn(key, label, iconKey, open) {
    var active = isSectionActive(key);
    var cls    = active
      ? 'bg-[#EEF1FF] text-[#0E165D] font-medium'
      : 'text-[#4B5563] hover:bg-[#F5F7FB] hover:text-[#111827] font-normal';
    var iconCls = active ? 'text-[#0E165D]' : 'text-[#6B7280]';
    return '<button type="button" data-key="' + key + '" class="w-full flex items-center gap-2 px-2.5 py-[7px] rounded-md mb-px transition-colors ' + cls + '">' +
      '<span class="shrink-0 ' + iconCls + '">' + IC[iconKey] + '</span>' +
      '<span class="flex-1 text-left leading-snug" style="font-size:16px">' + label + '</span>' +
      '<span class="shrink-0 chevron text-[#C4CAD4]">' + (open ? IC.chevronUp : IC.chevronDown) + '</span>' +
    '</button>';
  }

  function subMenuLink(item) {
    var active = isItemActive(item);
    var cls = active
      ? 'text-[#0E165D] font-semibold'
      : 'text-[#6B7280] hover:bg-[#F5F7FB] hover:text-[#111827] font-normal';
    return '<a href="' + item.path + '" class="flex items-center px-2.5 py-[6px] rounded-md mb-px transition-colors ' + cls + '">' +
      '<span class="leading-snug" style="font-size:16px">' + item.label + '</span>' +
    '</a>';
  }

  // ── Main render ───────────────────────────────────────────────────────────
  function render(targetEl) {
    if (!targetEl) return;

    var root  = window.DIGIT_ROOT || './';
    var menus = buildMenus(root);
    var p     = window.DIGIT_PAGE || {};

    // Auto-open the active section's dropdown
    var openF = p.section === 'foundation';
    var openC = p.section === 'components';
    var openPat = p.section === 'patterns';

    // Home active = no section set or empty
    var homeActive = !p.section || p.section === '';
    var homeCls    = homeActive ? 'bg-[#EEF1FF] text-[#0E165D] font-semibold' : 'text-[#4B5563] hover:bg-[#F5F7FB] hover:text-[#111827] font-medium';
    var homeIcCls  = homeActive ? 'text-[#0E165D]' : 'text-[#6B7280]';

    var html =
      // ── Logo ──────────────────────────────────────────────────────────────
      '<div class="px-5 py-[14px] flex items-center justify-start border-b border-[#E5E7EB]">' +
        '<a href="' + root + 'index.html">' +
          '<img src="https://app.digitalpublicgoods.net/storage/images/digit.png" class="h-8 object-contain" alt="DIGIT"' +
            ' onerror="this.style.display=\'none\'"/>' +
        '</a>' +
      '</div>' +

      // ── Scrollable body ────────────────────────────────────────────────────
      '<div class="flex-1 overflow-y-auto overflow-x-hidden">' +
        '<div class="px-3 pt-4 pb-6">' +

          // Search ─────────────────────────────────────────────────────────
          '<div class="relative mb-5" id="sb-search-wrap">' +
            '<span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#6B7280] pointer-events-none">' + IC.search + '</span>' +
            '<input id="sb-input" type="search" placeholder="Search" aria-label="Search documentation"' +
              ' class="w-full bg-[#F4F5F7] rounded-lg pl-8 pr-3 py-[7px] text-[#111827] placeholder-[#6B7280] text-[14px] focus:outline-none focus:ring-1 focus:ring-[#0E165D] transition-shadow border border-[#E5E7EB] hover:border-[#D1D5DB]"' +
              ' autocomplete="off" spellcheck="false"/>' +
            '<div id="sb-results" class="hidden absolute top-full left-0 right-0 mt-1.5 bg-white rounded-lg shadow-lg border border-[#E5E7EB] overflow-hidden max-h-[280px] overflow-y-auto z-50"></div>' +
          '</div>' +

          // Home ───────────────────────────────────────────────────────────
          '<a href="' + root + 'index.html" class="flex items-center gap-2.5 px-2.5 py-1.5 rounded-md mb-px transition-colors ' + homeCls + '">' +
            '<span class="shrink-0 ' + homeIcCls + '">' + IC.home + '</span>' +
            '<span class="leading-snug" style="font-size:16px">Home</span>' +
          '</a>' +

          // Explore ─────────────────────────────────────────────────────────
          '<div class="mt-5 mb-1"><p class="font-semibold uppercase px-2.5 leading-none" style="color:#6B7280;font-size:12px;letter-spacing:0.10em">Explore as</p></div>' +
          menus.explore.map(navLink).join('') +

          // Getting Started ─────────────────────────────────────────────────
          '<div class="mt-5 mb-1"><p class="font-semibold uppercase px-2.5 leading-none" style="color:#6B7280;font-size:12px;letter-spacing:0.10em">Get Started</p></div>' +
          menus.gettingStarted.map(navLink).join('') +

          // Design System ───────────────────────────────────────────────────
          '<div class="mt-5 mb-1"><p class="font-semibold uppercase px-2.5 leading-none" style="color:#6B7280;font-size:12px;letter-spacing:0.10em">Design System</p></div>' +

          // Foundation
          '<div class="mb-1">' +
            dropdownBtn('foundation', 'Foundation', 'grid', openF) +
            '<div id="sub-foundation" class="ml-5 pl-2.5 border-l border-[#E5E7EB] flex flex-col mt-0.5' + (openF ? '' : ' hidden') + '">' +
              menus.foundation.map(subMenuLink).join('') +
            '</div>' +
          '</div>' +

          // Components
          '<div class="mb-1">' +
            dropdownBtn('components', 'Components', 'box', openC) +
            '<div id="sub-components" class="ml-5 pl-2.5 border-l border-[#E5E7EB] flex flex-col mt-0.5' + (openC ? '' : ' hidden') + '">' +
              menus.components.map(subMenuLink).join('') +
            '</div>' +
          '</div>' +

          // Patterns
          '<div class="mb-1">' +
            dropdownBtn('patterns', 'Patterns', 'layers', openPat) +
            '<div id="sub-patterns" class="ml-5 pl-2.5 border-l border-[#E5E7EB] flex flex-col mt-0.5' + (openPat ? '' : ' hidden') + '">' +
              menus.patterns.map(subMenuLink).join('') +
            '</div>' +
          '</div>' +

        '</div>' +
      '</div>';

    targetEl.innerHTML = html;

    // Wire dropdown toggles ──────────────────────────────────────────────
    targetEl.querySelectorAll('[data-key]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var key    = btn.getAttribute('data-key');
        var sub    = document.getElementById('sub-' + key);
        var chevron = btn.querySelector('.chevron');
        if (!sub) return;
        var isHidden = sub.classList.contains('hidden');
        sub.classList.toggle('hidden', !isHidden);
        if (chevron) chevron.innerHTML = isHidden ? IC.chevronUp : IC.chevronDown;
      });
    });

    // Wire search ────────────────────────────────────────────────────────
    initSearch(targetEl, buildSearchData(root));
  }

  // ── Search ────────────────────────────────────────────────────────────────
  function initSearch(containerEl, searchData) {
    var wrap  = containerEl.querySelector('#sb-search-wrap');
    var input = containerEl.querySelector('#sb-input');
    var box   = containerEl.querySelector('#sb-results');
    if (!input || !box) return;

    var selectedIdx = -1;
    var flat = [];

    function group(items) {
      var g = {};
      items.forEach(function (item) {
        if (!g[item.category]) g[item.category] = [];
        g[item.category].push(item);
      });
      return g;
    }

    function render(query) {
      if (!query.trim()) { box.classList.add('hidden'); flat = []; return; }

      var filtered = searchData.filter(function (item) {
        return item.title.toLowerCase().includes(query.toLowerCase());
      });

      if (!filtered.length) {
        box.innerHTML = '<div class="p-4 text-center text-[#6B7280] text-sm">No results found</div>';
        box.classList.remove('hidden');
        flat = [];
        return;
      }

      flat = filtered;
      selectedIdx = -1;
      var grouped = group(filtered);
      var html = '';

      Object.keys(grouped).forEach(function (cat) {
        html += '<div class="px-4 py-2 bg-[#F4F5F7] text-[12px] font-bold text-[#6B7280] uppercase tracking-wider">' + cat + '</div>';
        grouped[cat].forEach(function (item) {
          var i = flat.indexOf(item);
          html += '<div data-path="' + item.path + '" data-i="' + i + '" class="sr-row px-4 py-3 cursor-pointer flex items-center justify-between transition-colors hover:bg-[#F5F7FB]">' +
            '<span class="text-[14px] text-[#111827]">' + item.title + '</span>' +
            '<span class="text-[12px] text-[#9CA0B2] bg-[#F4F5F7] px-2 py-0.5 rounded ml-2 shrink-0">' + cat + '</span>' +
          '</div>';
        });
      });

      box.innerHTML = html;
      box.classList.remove('hidden');

      box.querySelectorAll('.sr-row').forEach(function (el) {
        el.addEventListener('click', function () {
          var path = el.getAttribute('data-path');
          if (path) window.location.href = path;
          box.classList.add('hidden');
          input.value = '';
        });
      });
    }

    function highlight(idx) {
      box.querySelectorAll('.sr-row').forEach(function (el) {
        var i = parseInt(el.getAttribute('data-i'));
        var on = i === idx;
        el.classList.toggle('bg-[#EEF1FF]', on);
        el.querySelector('span:first-child').classList.toggle('text-[#0E165D]', on);
        el.querySelector('span:first-child').classList.toggle('font-medium', on);
      });
    }

    input.addEventListener('input',  function () { render(input.value); });
    input.addEventListener('focus',  function () { if (input.value.trim()) render(input.value); });

    input.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowDown') {
        e.preventDefault(); selectedIdx = Math.min(selectedIdx + 1, flat.length - 1); highlight(selectedIdx);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault(); selectedIdx = Math.max(selectedIdx - 1, 0); highlight(selectedIdx);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedIdx >= 0 && flat[selectedIdx] && flat[selectedIdx].path) {
          window.location.href = flat[selectedIdx].path;
        }
      } else if (e.key === 'Escape') {
        box.classList.add('hidden');
      }
    });

    // Close on outside click
    document.addEventListener('click', function (e) {
      if (wrap && !wrap.contains(e.target)) box.classList.add('hidden');
    });
  }

  // ── Mobile nav injection ─────────────────────────────────────────────────
  function injectMobileNav() {
    if (document.getElementById('mob-drawer')) return;

    var MENU_SVG  = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="20" height="20"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>';
    var CLOSE_SVG = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="16" height="16"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>';

    var btn = document.createElement('button');
    btn.id = 'mob-hamburger';
    btn.setAttribute('aria-label', 'Open navigation');
    btn.setAttribute('aria-expanded', 'false');
    btn.setAttribute('aria-controls', 'mob-drawer');
    btn.innerHTML = MENU_SVG;

    var overlay = document.createElement('div');
    overlay.id = 'mob-overlay';
    overlay.setAttribute('aria-hidden', 'true');

    var drawer = document.createElement('nav');
    drawer.id = 'mob-drawer';
    drawer.setAttribute('role', 'dialog');
    drawer.setAttribute('aria-modal', 'true');
    drawer.setAttribute('aria-label', 'Site navigation');

    var closeBtn = document.createElement('button');
    closeBtn.id = 'mob-drawer-close';
    closeBtn.setAttribute('aria-label', 'Close navigation');
    closeBtn.innerHTML = CLOSE_SVG;

    var contentMount = document.createElement('div');
    contentMount.id = 'mob-sidebar-content';
    contentMount.className = 'sidebar-scroll';

    drawer.appendChild(closeBtn);
    drawer.appendChild(contentMount);
    document.body.appendChild(btn);
    document.body.appendChild(overlay);
    document.body.appendChild(drawer);

    render(contentMount);

    function openDrawer() {
      drawer.classList.add('open');
      overlay.classList.add('open');
      document.body.style.overflow = 'hidden';
      btn.setAttribute('aria-expanded', 'true');
      closeBtn.focus();
    }
    function closeDrawer() {
      drawer.classList.remove('open');
      overlay.classList.remove('open');
      document.body.style.overflow = '';
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }

    btn.addEventListener('click', openDrawer);
    closeBtn.addEventListener('click', closeDrawer);
    overlay.addEventListener('click', closeDrawer);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
    });
    contentMount.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && e.target.href) closeDrawer();
    });
  }

  // ── Public init ───────────────────────────────────────────────────────────
  function init() {
    var desktop = document.getElementById('sidebar-content');
    var mobile  = document.getElementById('mobile-sidebar-content');
    if (desktop) render(desktop);
    if (mobile)  render(mobile);
    if (desktop) injectMobileNav();
  }

  return { init: init, render: render };
}());
