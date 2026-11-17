# Al Naseem Business Services — refined bilingual website

A complete Next.js / React website with Tailwind CSS, Lucide icons and Framer Motion. English at `/`, Arabic at `/ar/`, with real server-rendered language and right-to-left direction. Static export; no database, paid form service or email service needed.

## Update your existing GitHub / Vercel website

1. Download and unzip this package. The project files are directly inside the ZIP.
2. Back up your existing project or create a branch in GitHub.
3. Replace the **entire `app/`, `components/`, and `lib/` folders** with these versions. If the old project has `app/page.jsx`, `app/page.js`, `app/layout.jsx` or `app/layout.js` at the root, remove those older files: this package uses separate route groups with their own language layouts.
4. Merge the included `public/` folder into your project. Include **`mark.png`, `brand-sculpture.webp`, and the entire `fonts/` folder**. Remove any unused old `public/doha.webp` or other beach / West Bay photos.
5. Copy `package.json`, `package-lock.json`, `next.config.mjs`, `postcss.config.js`, `tailwind.config.js` and `.gitignore` into the project root. Keep both dependency files together. The root is the folder containing `package.json`, not `app/`.
6. In Vercel → your project → Settings → Environment Variables, set `NEXT_PUBLIC_SITE_URL` to the real production origin, for example your actual custom domain including `https://` and without a trailing slash. Until a domain is connected, use the actual production `.vercel.app` origin. Vercel's `VERCEL_PROJECT_PRODUCTION_URL` is also supported as a fallback. Redeploy after changing it.
7. Commit to the branch linked to Vercel. Use the **Next.js** framework preset, installation command **`npm ci`**, build command **`npm run build`**, and leave the output-directory override off so the framework detects the static export.
8. Check the homepage, `/ar/`, service filters, WhatsApp links, phone number and Maps link on the deployed URL. If an older layout remains, confirm the production deployment uses your newest commit.

Do not upload `node_modules/`, `.next/`, or `out/` to the source repository. Do not upload the ZIP as the only file: upload its extracted contents.

## Local commands

Use a current Node.js 22 or 24 LTS installation. From the folder containing `package.json`:

```bash
npm ci
npm run dev
```

Production build and local static preview:

```bash
npm run build
npm start
```

If Windows says **`'next' is not recognized`**, run `npm ci` in the project folder first. The `next` executable is installed locally by that command; no global installation is needed.

## Included services

1. Qatar company formation
2. Single Window business setup
3. PRO services
4. Saudi multiple-entry visa assistance
5. VFS application assistance
6. Hayya visa assistance
7. Bank account opening assistance
8. WPS / Wage Protection System services
9. Visa and immigration processing
10. Trademark registration
11. Corporate document clearance

All are available in English and Arabic, searchable in server-rendered page content, included in structured business service data, filterable by category, and selectable in the WhatsApp enquiry form. No affiliation with VFS Global or government authorities is claimed. Application outcomes and timelines are not guaranteed.

## Contact details

- WhatsApp: **+974 33711172**
- Calls: **+974 30164909**
- Location: **New Rayyan, Al Shafi Street, Qatar**
- Maps: https://maps.app.goo.gl/xJtHiiJydsC8FYKa8

The enquiry form opens a draft message in WhatsApp; the visitor reviews and sends it. The website does not submit messages automatically, store enquiries or ask for an email address. No placeholder social accounts are shown.

## Editing content

- `lib/content.js`: all 11 bilingual service names, descriptions, categories, contact URLs and WhatsApp message creation.
- `lib/translations.js`: English / Arabic headings, navigation, process, FAQs and contact wording.
- `lib/seo.js`: translated search / sharing metadata and ProfessionalService service catalogue.
- `app/globals.css`: responsive layout, design tokens, animation and RTL styling.
- `components/`: separate navigation, hero, services, process, approach, FAQ, contact and footer components.
- `public/`: self-hosted fonts, the original logo and the generated brand sculpture.

## Qatar search setup

Localized titles / descriptions, canonical URLs, `en-QA` / `ar-QA` hreflang, sitemap, robots directives and ProfessionalService JSON-LD target Qatar and New Rayyan. The Saudi service describes support provided to clients in Qatar; it does not add Saudi Arabia as the company's office or service area.

Canonical URLs, alternate-language URLs, sitemap entries and absolute sharing images require the real site origin at build time. If no origin is configured, those absolute fields are intentionally omitted rather than publishing a made-up domain or localhost. There are no invented reviews, opening hours, coordinates, years in business or success rates.

## Handover

Give the client ownership of their GitHub repository, Vercel project and domain registrar account, along with the source ZIP and this README. Record domain renewal dates, account recovery details and the final production domain in the client's handover notes. Confirm the Arabic wording with the client before final acceptance.

This is a static website with a small operational footprint. It is not a promise of maintenance-free software: ownership of renewals, future technical updates, content changes and account security passes to the client after handover. Agree any future work separately.

Google Business Profile verification and Search Console submission should use client-owned accounts. Search rankings cannot be guaranteed.

## Assets and accessibility

Fonts are self-hosted; their SIL Open Font Licenses are in `public/fonts/`. The hero uses a generated studio sculpture based on the supplied brand mark, not a photograph of the office. There are no beach or West Bay photos.

Keyboard-visible focus, semantic controls, native disclosure panels, a mobile navigation menu with Escape handling, reduced-motion support, local fonts and a compressed WebP hero are included. The language switch remains visible outside the collapsed mobile navigation.
