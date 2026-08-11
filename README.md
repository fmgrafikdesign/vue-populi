# vue-populi

A civilization viewer for the [Vox Populi](https://civ-5-cbp.fandom.com/wiki/Civilizations) mod for Sid Meier's Civilization V. Data is fetched from [vox-populi-crawler](https://github.com/fmgrafikdesign/vue-populi-backend), which crawls and serves the wiki's civilization table as JSON. Civ portrait icons are self-hosted static assets in this repo (see `public/img/`) and don't depend on the backend being reachable.

## Stack

Vue 3 (Options API) + Pinia + vue-router 4, built with Vite. Linting/formatting via [Biome](https://biomejs.dev). Node 24 (see `.nvmrc`).

## Setup

```
npm install
```

## Scripts

| Command | Does |
|---|---|
| `npm run dev` | Start the Vite dev server with hot reload |
| `npm run build` | Type-check (`vue-tsc`) and build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Check formatting/lint issues with Biome |
| `npm run format` | Auto-fix formatting with Biome |

## Environment variables

The API base URL is configured via `VITE_API_URL`, read at build time (Vite bakes it into the bundle, it isn't read at runtime).

- `.env` — local development default (`http://localhost:4000`)
- `.env.production` — used for `npm run build` (production mode); currently points at the live Railway deployment

To point at a different backend, either edit `.env.production` or set `VITE_API_URL` as a build-time environment variable on whatever platform builds the site (e.g. Netlify's site settings), which takes precedence over the committed file.

## Deployment

The frontend deploys via Netlify on push to `master`. The backend ([vox-populi-crawler](https://github.com/fmgrafikdesign/vue-populi-backend)) deploys via Railway on push to `master`.
