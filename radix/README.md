# Radix IT Consulting site

Static marketing site for [radix-it-consulting.com](https://radix-it-consulting.com).

## Local preview

```bash
cd radix
python3 -m http.server 4173
```

Open `http://127.0.0.1:4173/`.

## Deploy (Cloudflare Workers Static Assets)

From this directory, with Wrangler logged into the Cloudflare account that owns the zone:

```bash
npx wrangler deploy
```

Then in the Cloudflare dashboard, attach custom domains:

- `radix-it-consulting.com`
- `www.radix-it-consulting.com`

Leave Outlook MX and SPF records untouched. The apex currently has no A/AAAA records.

## Adding a page later

Copy an existing folder (`about/`, `services/`, `contact/`) to a new directory URL, e.g. `insights/index.html`. Reuse `page-hero`, `prose` / `article`, `cta-band`, and the shared header/footer. Add the URL to `sitemap.xml`.
