# Revlo

Product launch landing page for Revlo — turns customer purchases into automatic WhatsApp requests for Google reviews.

Plain static site: `index.html`, `styles.css`, `script.js`. No build step, no dependencies.

## Run locally

Just open `index.html` in a browser, or serve it:

```bash
npx serve .
```

## Deploy to Vercel

### Option A — Import from GitHub (recommended)

1. Push this repo to GitHub (already done if you used the assistant to create it).
2. Go to [vercel.com/new](https://vercel.com/new) and sign in.
3. Click **Import** next to this repository.
4. Framework preset: **Other** (static site — no build command, no output directory needed).
5. Click **Deploy**. Every future push to `main` auto-deploys.

### Option B — Deploy straight from your machine

```bash
npm i -g vercel
vercel login
vercel        # deploys a preview
vercel --prod # promotes to production
```

## Add a custom domain

1. In the Vercel dashboard, open your project → **Settings → Domains**.
2. Enter your domain (e.g. `revlo.com` or `www.revlo.com`) and click **Add**.
3. Vercel shows the DNS record(s) to create:
   - Apex domain (`revlo.com`): add an **A** record pointing to `76.76.21.21`.
   - Subdomain (`www.revlo.com`): add a **CNAME** record pointing to `cname.vercel-dns.com`.
4. Add those records at your domain registrar (GoDaddy, Namecheap, Google Domains, etc.).
5. Wait for DNS to propagate (usually minutes, sometimes up to a few hours) — Vercel auto-issues an SSL certificate once it verifies.

## Structure

```
index.html    — page markup
styles.css    — all styling, animation keyframes, responsive rules
script.js     — scroll reveal, hero particle field, smooth-scroll CTAs
```
