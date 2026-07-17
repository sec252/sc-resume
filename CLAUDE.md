# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

Personal resume/portfolio site for Samuel Chance (sam.nullexport.com), built with Astro as a static site and deployed to GitHub Pages.

## Commands

Requires Node 22 (see `.nvmrc`).

```sh
npm install
npm run dev       # local dev server at localhost:4321
npm run build     # static build into dist/
npm run preview   # serve the built build locally
npm run format    # prettier --write . (includes prettier-plugin-astro)
```

There is no test suite and no lint script configured — `format` (Prettier) is the only code-quality command available.

## Architecture

- **Astro, static output only.** No server-side rendering, no API routes, no client-side framework (React/Vue/etc.). Client JS is limited to two inline `<script>` blocks: the nav toggle (`src/components/Nav.astro`) and the hero typing effect (`src/components/Hero.astro`).
- **Content lives entirely in `src/data/*.ts`**, separate from markup. Pages/components import typed data objects/arrays from these files rather than hardcoding copy:
  - `site.ts` — name, titles, intro/about text, links, email, resume path
  - `experience.ts` — job history (About page)
  - `skills.ts` — skill groups (About page)
  - `projects.ts` — project list; when empty, `ProjectsGrid.astro` renders a "coming soon" state instead
  - `certifications.ts`, `references.ts` — certifications list and recommendation carousel content
  - When asked to update site copy, edit the relevant file in `src/data/`, not the `.astro` components.
- **Routing is file-based** under `src/pages/`: `index.astro`, `about.astro`, `projects.astro`, `contact.astro`. Every page wraps content in `src/layouts/BaseLayout.astro`, which owns the `<head>` (title/description/OG tags/canonical URL from `astro.config.mjs`'s `site`), the `Nav`, and the `Footer`.
- **Styling**: plain scoped CSS per-component (Astro `<style>` blocks) plus `src/styles/global.css` for global custom properties (dark theme, green accent). Change the accent color via `--accent` in `global.css`, not per-component.
- **`astro.config.mjs`**: `site` is set to the custom domain and `base` must never be set — the site is served from domain root via `public/CNAME`, which Astro copies into the build output verbatim.
- **Resume PDF**: served from `public/files/`; path is referenced from `src/data/site.ts` (`site.resume.path`). Keep filename in sync if replacing the file, or update the path in `site.ts`.

## Deployment

`.github/workflows/deploy.yml` builds and deploys on every push to `main` via `withastro/action` → GitHub Pages (`actions/deploy-pages`). Pull requests trigger the build job only (no deploy). The repo's GitHub Pages source must be set to "GitHub Actions" in repo settings for this to work.
