# Timeyin Gordon — Portfolio

Timeyin Gordon's personal portfolio, built with Astro and ready for Vercel.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

The development server runs at `http://localhost:4321`.

## Production build

```bash
npm run build
npm run preview
```

Astro writes the static production site to `dist/`.

## Routes

The portfolio keeps its animated sheet-stack navigation while exposing static,
shareable URLs for every section and piece. Main sections are `/work`,
`/field-notes`, `/craft`, and `/about`; detail routes live beneath their section.
Browser Back and Forward restore the matching sheet state without reloading.

## Field Notes feed

Field Notes is populated from the public Substack RSS feed at
`https://dsfieldnotes.substack.com/feed` during each Astro build. Posts published
from 2025 onward receive their own local `/field-notes/...` routes, while the
original Substack URL remains linked at the end of each article. Imported HTML
is sanitized before it is rendered.

If Substack is temporarily unavailable during a build, the site falls back to
the two locally stored Field Notes so the build can still complete. The
`Refresh Field Notes` GitHub Action can trigger a fresh Vercel build every day.
Create a Vercel Deploy Hook for the production branch, then save its URL as the
GitHub Actions secret `VERCEL_DEPLOY_HOOK_URL`.

## Analytics

The site uses Vercel Web Analytics. The initial page load is tracked by the
Astro integration, and History API transitions emit an additional pageview so
the animated sheet navigation is represented accurately. It also records
content opens, résumé and contact clicks, Substack subscriptions and relevant
outbound project clicks. Custom events require a supporting Vercel plan. Web
Analytics must also be enabled in the Vercel project's **Analytics** tab.

## Deploy to Vercel

Import this repository into Vercel. Vercel detects Astro automatically; the
build command is `npm run build` and the output directory is `dist`.

Alternatively, deploy from this directory with the Vercel CLI:

```bash
npx vercel
```
