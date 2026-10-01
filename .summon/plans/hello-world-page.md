---
status: implemented
title: Hello World Home Page
---

Project state: the repository currently contains only `README.md` and `env.example` — no `src/`, no config, no routes. The app scaffold must be created before the page exists.

1. Create the Vite + React + TypeScript project configuration at the repo root: `package.json` (ESM, npm, scripts for dev/build/preview), `tsconfig.json` + `tsconfig.node.json` with a `@/*` → `src/*` path alias, and `index.html` with a single root div and a module script pointing at `src/main.tsx`. Expected outcome: `npm install && npm run dev` is able to boot once remaining files exist.
2. Create `vite.config.ts` registering the Tailwind CSS v4 Vite plugin (`@tailwindcss/vite`), the TanStack Router plugin (`@tanstack/router-plugin/vite`) configured for file-based routes in `src/routes`, the React plugin, and the `@/` alias matching tsconfig. Expected outcome: routes are auto-discovered and `src/routeTree.gen.ts` is generated on dev/build.
3. Create `src/styles/global.css` whose first line is exactly `@import "tailwindcss";`. Expected outcome: Tailwind utilities available app-wide.
4. Create `src/main.tsx` that imports `src/styles/global.css` once, builds the router from the generated route tree, and renders the router provider into the root element with React StrictMode. Expected outcome: app mounts without console errors.
5. Create the app shell route `src/routes/__root.tsx` rendering a full-height layout wrapper plus the router outlet. Keep it bare — no nav bar, no header, since the user asked for nothing beyond the page. Expected outcome: child routes render inside a full-viewport-height container.
6. Create the home route `src/routes/index.tsx` at path `/`. It renders a single centered section: a full-height flex container centered on both axes with responsive horizontal padding, containing an `h1` reading "Hello World" with clean Tailwind typography (large responsive text size such as a smaller size on mobile scaling up on larger breakpoints, bold/semibold weight, tight tracking, balanced text color against the page background). No other content. Expected outcome: visiting `/` shows "Hello World" perfectly centered on both mobile and desktop widths.
7. Add `.gitignore` entries for `node_modules`, `dist`, and local env files; confirm `src/routeTree.gen.ts` is generated and never hand-edited. Expected outcome: clean repo with only source files tracked.
8. Verify: run the dev server, load `/`, check centering at a narrow (~375px) and wide (~1440px) viewport, and confirm the type scale reads cleanly at both. Expected outcome: single, minimal Hello World page with no extra features.
