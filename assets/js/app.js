/**
 * DIGIT Design System App Entry Point
 * Orchestrates module initialization on DOMContentLoaded.
 */

document.addEventListener('DOMContentLoaded', function () {
  // Theme must initialise first (prevents FOUC)
  if (window.DIGIT && DIGIT.theme) {
    DIGIT.theme.init();
  }

  // Sidebar (only rendered on doc pages that have the mount point)
  if (window.DIGIT && DIGIT.sidebar) {
    DIGIT.sidebar.init();
  }

  // Mobile navigation drawer
  if (window.DIGIT && DIGIT.mobileNav) {
    DIGIT.mobileNav.init();
  }

  // Search overlay
  if (window.DIGIT && DIGIT.search) {
    DIGIT.search.init();
  }

  // Smooth anchor scroll always prevent default for hash links so bare href="#"
  // never triggers the browser's native scroll-to-top behaviour.
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();                          // prevent scroll-to-top in ALL cases
      var href = this.getAttribute('href');
      if (!href || href === '#') return;           // bare # → block and stop
      var target;
      try { target = document.querySelector(href); } catch (err) { return; }
      if (!target) return;
      var offset = 0;                              // no sticky header scroll flush
      window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: 'smooth' });
    });
  });

  // Breadcrumb — renders into #breadcrumb-mount if present
  (function () {
    var mount = document.getElementById('breadcrumb-mount');
    var p = window.DIGIT_PAGE;
    if (!mount || !p || !p.breadcrumb || !p.breadcrumb.length) return;
    var root = window.DIGIT_ROOT || '../../';
    var sectionLinks = {
      'Getting Started': root + 'docs/getting-started/designer.html',
      'Foundation':      root + 'docs/foundation/color.html',
      'Components':      root + 'docs/components/atoms.html',
      'Atoms':           root + 'docs/components/atoms.html',
      'Molecules':       root + 'docs/components/molecules.html',
      'Patterns':        root + 'docs/patterns/form.html',
    };
    var sep = '<svg style="flex-shrink:0;margin:0 6px;color:#D1D5DB" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="m9 18 6-6-6-6"/></svg>';
    var crumbs = p.breadcrumb;
    var html = crumbs.map(function (label, i) {
      var isLast = i === crumbs.length - 1;
      if (isLast) {
        return '<span style="color:#111827;font-weight:500">' + label + '</span>';
      }
      var href = sectionLinks[label] || '#';
      return '<a href="' + href + '" style="color:#6B7280;text-decoration:none;transition:color .12s" onmouseover="this.style.color=\'#0E165D\'" onmouseout="this.style.color=\'#6B7280\'">' + label + '</a>' + sep;
    }).join('');
    mount.innerHTML = '<nav aria-label="Breadcrumb" style="display:flex;align-items:center;font-size:13px;margin-bottom:20px">' + html + '</nav>';
  }());

  // Mark page as hydrated (enables CSS transitions)
  document.documentElement.classList.add('hydrated');
});
