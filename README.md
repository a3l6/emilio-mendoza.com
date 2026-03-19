# Emilio Mendoza — Portfolio Site

Nokia 3310–inspired retro pixel art portfolio built with **SvelteKit 2 + Svelte 5**.

## Project Structure

```
src/
├── app.css                        # Global CSS vars, keyframes, shared utilities
├── app.html                       # HTML shell
├── routes/
│   ├── +layout.svelte             # Root layout (imports app.css, pixel cursor trail)
│   └── +page.svelte               # Home page — assembles all sections
└── lib/
    └── components/
        ├── Nav.svelte             # Fixed nav with live clock, signal bars, battery
        ├── Marquee.svelte         # Auto-scrolling ticker strip
        ├── Hero.svelte            # Full-height hero with pixel phone, terrain SVGs, snake
        ├── About.svelte           # Bio, pixel avatar, stat boxes
        ├── Work.svelte            # Project cards grid
        ├── Skills.svelte          # Intersection-observer animated skill bars
        ├── Contact.svelte         # Contact links + CTA
        └── Footer.svelte          # Nokia pixel wordmark + footer copy
```

## Getting Started

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build
npm run preview    # preview production build
```

## Customisation

- **Content** — edit data arrays at the top of each component (`Work.svelte`, `Skills.svelte`, `Contact.svelte`, `About.svelte`)
- **Colours** — all Nokia green tokens live in `src/app.css` `:root` block
- **Font** — `Press Start 2P` loaded from Google Fonts in `app.css`
- **Deployment** — install an adapter (Vercel, Netlify, Node…) via `@sveltejs/adapter-*` and update `svelte.config.js`

## Deployment (example: Vercel)

```bash
npm i -D @sveltejs/adapter-vercel
# update svelte.config.js: import adapter from '@sveltejs/adapter-vercel'
vercel deploy
```
