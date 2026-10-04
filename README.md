# Nireka — Premium School Website Template

A frontend-only school website template built with React, TypeScript, Vite, Tailwind CSS, Framer Motion and Lucide icons.

**Nireka International School is fictional.** Every name, person, figure, event and story in this
template is invented for demonstration purposes. The site footer says so on every page.

## Getting started

```bash
npm install
npm run dev      # local development
npm run build    # type-check + production build to dist/
npm run preview  # serve the production build
```

## Re-branding for a client

- **Content:** all copy, figures, people, dates and contact details live in [`src/data/school.ts`](src/data/school.ts).
- **Imagery:** self-hosted WebP files in [`public/images/`](public/images/), referenced by slug.
  Replace them with the client's photography at 640, 1280 and 1920px widths (`<slug>-<width>.webp`).
- **Licences:** [`IMAGE_LICENSES.md`](IMAGE_LICENSES.md) records the source and licence of every third-party asset.
  Update it whenever imagery changes.
- **Brand:** colours and type scale are in [`tailwind.config.js`](tailwind.config.js); the logo is in
  [`src/components/Logo.tsx`](src/components/Logo.tsx); fonts load in [`index.html`](index.html).

## Structure

```
src/
  components/      Section components (Hero, Academics, Campus, …) and ui/ primitives
  pages/           One file per route; lazily loaded except Home
  data/school.ts   All content
  lib/             Image helpers, motion presets, hooks
public/images/     Rights-cleared photography (see IMAGE_LICENSES.md)
```

## Notes

- Forms (contact, newsletter) are UI demonstrations only — connect them to a form provider.
- Contact details use reserved fictional values (`555-01xx` numbers, `.example` email domains).
- The contact map is a stylised placeholder; replace it with an embedded map.
- Routing uses the History API. On static hosting, add a fallback to `index.html`
  (e.g. Netlify `_redirects`: `/* /index.html 200`).
- Motion respects `prefers-reduced-motion`.
