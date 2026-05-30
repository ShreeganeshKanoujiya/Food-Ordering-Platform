# Food Ordering Platform

Lightweight React + Vite web app for browsing dishes and placing orders (demo). This README explains how to run the project locally, where key files live, and CSS/Tailwind integration used across the codebase.
**Tech stack**
- React 19, Vite, Tailwind CSS (via `@tailwindcss/vite` plugin)
- Simple CSS Modules for component-scoped styles

**Quick start**
1. Install dependencies:

```bash
npm install
```

2. Start dev server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

4. Preview the production build locally:

```bash
npm run preview
```

Default dev server: http://localhost:5173

If `npm run dev` fails with CSS/build errors, try removing `node_modules` and reinstalling:

```bash
rm -rf node_modules package-lock.json
npm install
```

**Project structure (important files)**

- `index.html` — app entry
- `src/main.jsx` — React bootstrap
- `src/App.jsx` — top-level routes / app layout
- `src/index.css` — global CSS and Tailwind directives (@tailwind base/components/utilities)
- `tailwind.config.cjs` — Tailwind content paths
- `src/assets/*` — images and asset exports
- `src/components/` — UI components
	- `Card.jsx` + `card.module.css` — product cards and page layout
	- `CartSidebar.jsx` + `cartSidebar.css` — cart sidebar and QR payment
	- `Navbar.jsx`, `Footer.jsx` — layout components
- `src/pages/` — page routes: `Webpage.jsx`, `About.jsx`, `Contact.jsx`, `Error.jsx`

**CSS / Tailwind notes**
- Tailwind utilities are enabled through `tailwind.config.cjs` and the plugin in `vite.config.js`.
- Global variables and font import are in `src/index.css`. Component styles use CSS Modules (e.g. `card.module.css`) or plain CSS for small components (e.g. `cartSidebar.css`).
- If you prefer not to use Tailwind, the app still uses component CSS files for layout.

**Running & debugging tips**
- Ensure Node.js is a recent LTS (16+ recommended). Some dev/build issues stem from incompatible Node versions.
- If Tailwind classes don't appear, confirm `tailwind.config.cjs` content paths include `./src/**/*.{js,jsx,ts,tsx}` and that `src/index.css` includes the three `@tailwind` directives.
- When editing CSS modules, restart the dev server only if Vite doesn't pick up the changes.

**Contributing**
- Make UI changes in `src/components/` and page logic in `src/pages/`.
- Keep global design tokens in `src/index.css` (CSS variables) and prefer CSS Modules for component scope.
