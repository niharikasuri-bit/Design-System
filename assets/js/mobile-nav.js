/**
 * DIGIT Design System Mobile Navigation Drawer
 * Manages a slide-in sidebar drawer for small screens.
 * Handles focus trap, backdrop click, and Escape key.
 */

window.DIGIT = window.DIGIT || {};

DIGIT.mobileNav = (function () {
  let drawer, overlay, openBtn, closeBtn;
  let isOpen = false;

  function open() {
    if (!drawer) return;
    isOpen = true;
    drawer.classList.remove('-translate-x-full');
    overlay.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
    if (closeBtn) closeBtn.focus();
  }

  function close() {
    if (!drawer) return;
    isOpen = false;
    drawer.classList.add('-translate-x-full');
    overlay.classList.add('hidden');
    document.body.style.overflow = '';
    if (openBtn) openBtn.focus();
  }

  function toggle() {
    isOpen ? close() : open();
  }

  function trapFocus(e) {
    if (!isOpen || !drawer) return;
    const focusable = drawer.querySelectorAll(
      'a[href], button:not([disabled]), input, textarea, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last  = focusable[focusable.length - 1];

    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    if (e.key === 'Escape') {
      close();
    }
  }

  function init() {
    drawer  = document.getElementById('mobile-drawer');
    overlay = document.getElementById('mobile-overlay');
    openBtn = document.getElementById('mobile-menu-btn');
    closeBtn = document.getElementById('mobile-drawer-close');

    if (!drawer || !overlay) return;

    if (openBtn)  openBtn.addEventListener('click', open);
    if (closeBtn) closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', close);
    document.addEventListener('keydown', trapFocus);

    // Close drawer on navigation (when a link inside is clicked)
    drawer.addEventListener('click', function (e) {
      if (e.target.tagName === 'A' && e.target.href) {
        close();
      }
    });
  }

  return { init: init, open: open, close: close, toggle: toggle };
}());
