# 🚀 Deployment Guide — GitHub Pages

Your portfolio deploys to: **https://MuhammadMagdyy.github.io/Portfolio/**

---

## Step 1 — Install & test locally

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # builds to /dist — check for errors first
npm run preview      # preview the production build
```

---

## Step 2 — Create GitHub repo

1. Go to https://github.com/new
2. Name it exactly: **Portfolio** (capital P — matches `vite.config.js` base path)
3. Set to **Public**
4. Don't add README, .gitignore, or license (we have them)

---

## Step 3 — Push your code

```bash
git init
git add .
git commit -m "feat: initial portfolio"
git remote add origin https://github.com/MuhammadMagdyy/Portfolio.git
git branch -M main
git push -u origin main
```

---

## Step 4A — Manual deploy (one command)

```bash
npm run deploy
# Builds → pushes /dist to the gh-pages branch automatically
```

---

## Step 4B — Auto CI/CD (recommended)

The file `.github/workflows/deploy.yml` is already included.
Every `git push origin main` now auto-builds and deploys in ~60 seconds.

Enable it:
1. GitHub repo → **Settings** → **Pages**
2. Source: **Deploy from a branch**
3. Branch: **gh-pages** / **(root)**
4. Click **Save**

---

## Step 5 — Enable GitHub Pages

```
GitHub repo → Settings → Pages
  Source     : Deploy from a branch
  Branch     : gh-pages
  Folder     : / (root)
  → Save
```

Wait ~60 seconds. Visit: **https://MuhammadMagdyy.github.io/Portfolio/**

---

## Updating the site

```bash
# Edit your files, then:
git add .
git commit -m "update: ..."
git push origin main
# CI/CD auto-deploys in ~60s
```

---

## Optional: Custom domain

1. Buy a domain (e.g. `muhammadmagdy.dev`)
2. GitHub → Settings → Pages → Custom domain → enter domain
3. Add DNS records at your registrar:
   ```
   Type   Name   Value
   CNAME  www    MuhammadMagdyy.github.io
   A      @      185.199.108.153
   A      @      185.199.109.153
   A      @      185.199.110.153
   A      @      185.199.111.153
   ```
4. In `vite.config.js` change `base: '/Portfolio/'` to `base: '/'`
5. In `.github/workflows/deploy.yml` set `cname: muhammadmagdy.dev`
6. Push and wait ~24h for DNS propagation

---

## Troubleshooting

| Issue | Fix |
|---|---|
| Blank page | Check `base: '/Portfolio/'` in vite.config.js |
| CSS missing | Ensure PostCSS + Tailwind in devDependencies |
| Build fails | Run `npm run build` locally first to see errors |
| 404 on direct URL | GitHub Pages SPA issue — Vite handles it with correct base |
| Fonts not loading | Check Google Fonts URL in index.html |
