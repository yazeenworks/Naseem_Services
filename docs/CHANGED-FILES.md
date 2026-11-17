# Files for this update

For an existing project, replace `app/`, `components/`, `lib/` completely and merge `public/`. Include the configuration and dependency files from this package. Follow README.md for root route conflicts in older versions.

New components:
- `components/Approach.jsx`
- `components/FAQ.jsx`
- `components/Reveal.jsx`

Updated components:
- `components/Header.jsx`
- `components/Brand.jsx`
- `components/Hero.jsx`
- `components/Services.jsx`
- `components/Process.jsx`
- `components/Contact.jsx`
- `components/Footer.jsx`
- `components/Site.jsx`

Content and styles:
- `lib/content.js`: 11 services in English / Arabic and WhatsApp message builder.
- `lib/translations.js`: complete bilingual interface, process and FAQs.
- `lib/seo.js`: Qatar metadata and expanded structured service catalogue.
- `app/globals.css`: complete new responsive design.
- `app/fonts.css`: self-hosted font declarations.
- Both language `page.jsx` files: skip-link target.

Required assets:
- `public/brand-sculpture.webp`
- `public/mark.png`
- `public/fonts/` including font licenses.

The source ZIP does not change a live GitHub or Vercel project automatically. It must be committed to the repository linked to Vercel.
