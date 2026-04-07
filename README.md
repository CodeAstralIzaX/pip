# Premier Insurance Partners — Deployment Guide

Website: https://premierinsurance-partners.in

This repository contains a Vite + React frontend and a small Express server (`server.js`) that handles contact form email sending. This README explains how to build and deploy the app on Hostinger (Node hosting) and other common options.

## Quick local commands

- Install dependencies:

```bash
npm install
```

- Build the frontend (produces `dist/`):

```bash
npm run build
```

- Run the server (development):

```bash
node server.js
```

Open `http://localhost:5173` (Vite) or the Hostinger-provided URL after deployment.

## Environment variables

Set the following environment variables in your Hostinger Dashboard (or other host) — do NOT commit secrets to Git.

- `EMAIL_USER` — SMTP user (e.g. Gmail address)
- `EMAIL_PASSWORD` — SMTP password or app-password (Gmail requires an app password)
- `EMAIL_SERVICE` — optional, defaults to `gmail`
- `ADMIN_EMAIL` — optional, where contact form submissions are sent (defaults to `info@premierinsurance-partners.in`)
- `PORT` — optional, the host will usually set this automatically

## Hostinger deployment (recommended)

1. In Hostinger, create a new Node.js app.
2. Set Node.js version to `22.x` (matches this project's tested Node version).
3. Repository/root directory: point to the `pip` folder (repo root).
4. Build configuration:
   - Install command: `npm install`
   - Build command: `npm run build` (optional if you commit `dist/`)
   - Entry file / start command: `server.js` (Hostinger runs `node server.js`)
5. Add the required environment variables (see section above) in the Hostinger UI.
6. Save and redeploy. Check runtime logs to confirm `Email server running on http://localhost:<PORT>`.

Notes:
- You can either let Hostinger run the build step on deploy or build locally and commit `dist/` to the repo. If you commit `dist/`, Hostinger will serve the static files from `server.js` directly.
- The server serves static files from `dist/` and provides the `/api/send-email` endpoint. The SPA fallback returns `dist/index.html` for non-API routes.

## Netlify (static-only) alternative

If you prefer using Netlify for static hosting (frontend) and a separate Node host for the backend:

1. Configure Netlify build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
2. Deploy the Express server to a separate Node host (Hostinger, Render, Railway, or Heroku) and set your contact form `fetch` URL (in `Contact.tsx`) to the deployed server's URL.

## Health check

The server exposes a health endpoint at `/api/health` for quick monitoring.

## Troubleshooting

- If builds fail on the host but succeed locally, check for case-sensitive filename imports (macOS is case-insensitive but Linux hosts are case-sensitive).
- Ensure environment variables are set in the host UI (especially `EMAIL_PASSWORD`).

If you want, I can also add a simple systemd example or a Dockerfile for containerized deployment.

  # Insurance Partners Website Design

  This is a code bundle for Insurance Partners Website Design. The original project is available at https://www.figma.com/design/gTIAE20GDY0qEfmGUeCM3Z/Insurance-Partners-Website-Design.

  ## Running the code

  Run `npm i` to install the dependencies.

  Run `npm run dev` to start the development server.
  