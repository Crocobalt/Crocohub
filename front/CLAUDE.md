# CLAUDE.md — front/

Angular front-end of CrocHub. Fill this file progressively as the app grows.

## Stack

- Angular 22, standalone components, zoneless, signals.
- Tailwind CSS v4 (via PostCSS, `@import 'tailwindcss'` in `src/styles.css`).
- Vitest for unit tests. No SSR.
- Node 26 LTS (see root `.nvmrc`, run `nvm use` at the repo root).

## Commands (from `front/`)

- `npm start`: dev server on http://localhost:4200
- `npm test`: unit tests (Vitest)
- `npm run build`: production build in `dist/`

## Structure (`src/app/`)

- `core/`: app-wide singletons (services, layout, guards).
- `shared/`: reusable UI components, pipes, utils.
- `features/<name>/`: one folder per page, lazy-loaded from `app.routes.ts`.
  - `home/` (`/`), `cv/` (`/cv`), `lab/` (`/lab`).
- Pages are generated with `ng g c features/<name> --type=page`.
