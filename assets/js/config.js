/**
 * DIGIT Design System Site Configuration
 * Sets up window.DIGIT namespace and navigation data.
 * Each page declares window.DIGIT_ROOT before loading this file.
 */

window.DIGIT = window.DIGIT || {};

DIGIT.root = window.DIGIT_ROOT || './';
DIGIT.page = window.DIGIT_PAGE || {};

// ─── Navigation structure ─────────────────────────────────────────────────────

DIGIT.nav = [
  {
    id: 'getting-started',
    label: 'Getting Started',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 shrink-0">
      <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
    </svg>`,
    items: [
      { id: 'designer',         label: 'Designer',         path: 'docs/getting-started/designer.html' },
      { id: 'developer',        label: 'Developer',         path: 'docs/getting-started/developer.html' },
      { id: 'design-approach',  label: 'Design Approach',   path: 'docs/getting-started/design-approach.html' },
      { id: 'content-standard', label: 'Content Standard',  path: 'docs/getting-started/content-standard.html' },
      { id: 'inclusive-design', label: 'Inclusive Design',  path: 'docs/getting-started/inclusive-design.html' },
    ],
  },
  {
    id: 'foundation',
    label: 'Foundation',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 shrink-0">
      <path stroke-linecap="round" stroke-linejoin="round" d="M4.098 19.902a3.75 3.75 0 005.304 0l6.401-6.402M6.75 21A3.75 3.75 0 013 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 003.75-3.75V8.197M6.75 17.25h.008v.008H6.75v-.008z" />
    </svg>`,
    items: [
      { id: 'color',      label: 'Color',      path: 'docs/foundation/color.html' },
      { id: 'spacing',    label: 'Spacing',    path: 'docs/foundation/spacing.html' },
      { id: 'typography', label: 'Typography', path: 'docs/foundation/typography.html' },
      { id: 'icon',       label: 'Icon',       path: 'docs/foundation/icon.html' },
      { id: 'radius',     label: 'Radius',     path: 'docs/foundation/radius.html' },
    ],
  },
  {
    id: 'components',
    label: 'Components',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 shrink-0">
      <path stroke-linecap="round" stroke-linejoin="round" d="M14.25 6.087c0-.355.186-.676.401-.959.221-.29.349-.634.349-1.003 0-1.036-1.007-1.875-2.25-1.875s-2.25.84-2.25 1.875c0 .369.128.713.349 1.003.215.283.401.604.401.959v0a.64.64 0 01-.657.643 48.39 48.39 0 01-4.163-.3c.186 1.613.293 3.25.315 4.907a.656.656 0 01-.658.663v0c-.355 0-.676-.186-.959-.401a1.647 1.647 0 00-1.003-.349c-1.036 0-1.875 1.007-1.875 2.25s.84 2.25 1.875 2.25c.369 0 .713-.128 1.003-.349.283-.215.604-.401.959-.401v0c.31 0 .555.26.532.57a48.039 48.039 0 01-.642 5.056c1.518.19 3.058.309 4.616.354a.64.64 0 00.657-.643v0c0-.355-.186-.676-.401-.959a1.647 1.647 0 01-.349-1.003c0-1.035 1.008-1.875 2.25-1.875 1.243 0 2.25.84 2.25 1.875 0 .369-.128.713-.349 1.003-.215.283-.4.604-.4.959v0c0 .333.277.599.61.58a48.1 48.1 0 005.427-.63 48.05 48.05 0 00.582-4.717.532.532 0 00-.533-.57v0c-.355 0-.676.186-.959.401-.29.221-.634.349-1.003.349-1.035 0-1.875-1.007-1.875-2.25s.84-2.25 1.875-2.25c.37 0 .713.128 1.003.349.283.215.604.401.96.401v0a.656.656 0 00.658-.663 48.422 48.422 0 00-.37-5.36c-1.886.342-3.81.574-5.766.689a.578.578 0 01-.61-.58v0z" />
    </svg>`,
    items: [
      { id: 'atoms',     label: 'Atoms',     path: 'docs/components/atoms.html',     badge: '20+' },
      { id: 'molecules', label: 'Molecules',  path: 'docs/components/molecules.html', badge: '17+' },
    ],
  },
  {
    id: 'patterns',
    label: 'Patterns',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 shrink-0">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" />
    </svg>`,
    items: [
      { id: 'form',    label: 'Form',    path: 'docs/patterns/form.html' },
      { id: 'inbox',   label: 'Inbox',   path: 'docs/patterns/inbox.html' },
      { id: 'summary', label: 'Summary', path: 'docs/patterns/summary.html' },
    ],
  },
];

// ─── Search index (populated incrementally as pages are authored) ─────────────

DIGIT.searchIndex = DIGIT.nav.flatMap(section =>
  section.items.map(item => ({
    section: section.label,
    sectionId: section.id,
    title: item.label,
    id: item.id,
    path: item.path,
    badge: item.badge || null,
  }))
);

// ─── Utility helpers ──────────────────────────────────────────────────────────

DIGIT.getHref = function (rootRelativePath) {
  return DIGIT.root + rootRelativePath;
};

DIGIT.getActivePage = function () {
  return DIGIT.page || {};
};
