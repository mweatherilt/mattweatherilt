# mattweatherilt.com

One-page personal site for Cloudflare Pages.

Webby (Grok Bot) publishes Exclusive and Digest markdown under `content/` and updates the homepage hero, signal, listings, sitemap, and RSS. Members-only Exclusives stay off public routes.

## Deploy

1. Push this folder to a GitHub repo, or upload the files in the Cloudflare dashboard.
2. In Cloudflare: Workers & Pages → Create → Pages → Connect repo (or Direct Upload).
3. Build command: leave empty. Output directory: `/` (this folder is already the site).
4. Add custom domain `mattweatherilt.com` and `www.mattweatherilt.com`.
5. In the domain registrar, point nameservers to Cloudflare — or add:
   - CNAME `www` → `mattweatherilt.pages.dev`
   - CNAME `@` flattened to the Pages target Cloudflare shows you

## Before you go live

- Replace `mailto:hello@mattweatherilt.com` if that inbox does not exist.
- Confirm `https://fidarel.com` is the public URL you want.
- Add a 1200×630 `og.png` for X link previews (referenced in `index.html`).
