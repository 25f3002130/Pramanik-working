# Pramanik

Pramanik is a privacy-first content authenticity demo for Round 1, with a Cloudflare-hosted website and a thin Worker proxy for API key protection.

## Run locally

```bash
corepack pnpm install
corepack pnpm dev
```

Open `http://localhost:3000`.

## Cloudflare setup

### 1. Host the website on Cloudflare Pages

Use the Cloudflare Pages Next.js integration for this repo.

1. Push the project to GitHub.
2. In Cloudflare, go to **Workers & Pages** and create a **Pages** project.
3. Connect the GitHub repo.
4. Select the **Next.js** preset if Cloudflare offers it.
5. Use `corepack pnpm build` as the build command if prompted.
6. Add any environment variables in the Pages dashboard before deploying.

### 2. Add the API proxy as a Cloudflare Worker

Use one Worker only for API key protection.

1. Install the CLI:

```bash
corepack pnpm add -D wrangler
```

2. Log in:

```bash
npx wrangler login
```

3. Create a Worker project for the proxy.
4. Store secrets with Wrangler or the Cloudflare dashboard.
5. Keep the Worker stateless and avoid storing or logging request content.
6. Route frontend calls to `/api/*` through the Worker.

### 3. Environment variables to add

Add these in Cloudflare when you are ready to wire the detectors:

- `GOOGLE_VISION_API_KEY`
- `HIVE_MODERATION_API_KEY`
- `WRITER_API_KEY`
- `GPTZERO_API_KEY`
- `SIGHTENGINE_API_USER`
- `SIGHTENGINE_API_SECRET`

### 4. Verify the deployment

1. Open the Cloudflare Pages preview URL.
2. Check image, text, and video inputs.
3. Confirm the Worker responds to `/api/*` without storing content.
4. Connect a custom domain only after the preview works.

## Recommended deployment split

- Cloudflare Pages for the website
- Cloudflare Workers for the proxy

This keeps the demo free, fast, and aligned with the privacy-first pitch.