/**
 * DIGIT Design System Theme Manager
 * Handles dark/light mode with localStorage persistence and system preference.
 */

window.DIGIT = window.DIGIT || {};

DIGIT.theme = (function () {
  const KEY = 'digit-theme';
  const root = document.documentElement;

  function getSystemPref() {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  function getCurrent() {
    return localStorage.getItem(KEY) || getSystemPref();
  }

  function apply(theme) {
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem(KEY, theme);
    updateToggleIcons(theme);
  }

  function toggle() {
    const current = getCurrent();
    apply(current === 'dark' ? 'light' : 'dark');
  }

  function updateToggleIcons(theme) {
    document.querySelectorAll('[data-theme-toggle]').forEach(function (btn) {
      const sunIcon  = btn.querySelector('[data-icon="sun"]');
      const moonIcon = btn.querySelector('[data-icon="moon"]');
      if (sunIcon)  sunIcon.classList.toggle('hidden',  theme === 'light');
      if (moonIcon) moonIcon.classList.toggle('hidden', theme === 'dark');
    });
  }

  function init() {
    apply(getCurrent());

    // Listen for OS-level preference changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (!localStorage.getItem(KEY)) {
        apply(e.matches ? 'dark' : 'light');
      }
    });

    // Wire up all toggle buttons
    document.addEventListener('click', function (e) {
      if (e.target.closest('[data-theme-toggle]')) {
        toggle();
      }
    });
  }

  return { init: init, toggle: toggle, getCurrent: getCurrent };
}());
