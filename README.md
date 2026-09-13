# Revlo

Product launch landing page for Revlo — turns customer purchases into automatic WhatsApp requests for Google reviews.

Built with **React + TypeScript + Vite**.

## Structure

```
index.html              — Vite entry (fonts, meta tags, favicon, #root mount point)
src/
  main.tsx              — React root
  App.tsx               — page composition
  components/
    ProgressBar.tsx      — scroll-position progress bar
    Nav.tsx               — fixed minimal nav
    Hero.tsx              — hero copy + CTAs, owns the "Watch Demo" pulse interaction
    HeroVisual.tsx        — the animated payment → WhatsApp → Google review stage
    ParticleField.tsx     — canvas ambient particle background for the hero
    TransformSection.tsx  — problem → solution diagram, crossfades on scroll
    HowItWorks.tsx         — the three numbered steps
    Philosophy.tsx         — manifesto section
    FinalCTA.tsx            — closing cinematic CTA
    Footer.tsx
    Reveal.tsx              — generic scroll-reveal wrapper (IntersectionObserver)
  hooks/
    useReveal.ts          — powers Reveal
    useScrollProgress.ts  — powers ProgressBar
  utils/
    scrollTo.ts           — smooth-scroll helper, respects prefers-reduced-motion
  styles/
    global.css            — design tokens, layout, and all animation keyframes
```

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build    # type-checks with tsc, then builds to dist/
npm run preview  # serve the production build locally
```

## Deploy to Vercel

### Option A — Import from GitHub (recommended)

1. Push this repo to GitHub (already done if the assistant set it up for you).
2. Go to [vercel.com/new](https://vercel.com/new) and sign in.
3. Import this repository.
4. Vercel auto-detects **Vite** — build command `npm run build`, output directory `dist`. No changes needed.
5. Click **Deploy**. Every future push to `master`/`main` auto-deploys.

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
5. Wait for DNS to propagate — Vercel auto-issues an SSL certificate once it verifies.
