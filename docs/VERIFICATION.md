# Verification — 17 November 2026

- `npm run build`: passed, using Next.js 15.5.29 and React 19.3.1 from the supplied lockfile.
- Static English `/` and Arabic `/ar/` pages generated successfully.
- Desktop browser review: English and Arabic hero, services, process and contact layout.
- Responsive iframe checks: 320px, 390px, 768px and 1024px frames, plus the desktop viewport. No horizontal document overflow. Frames include desktop scrollbars; these checks are not a substitute for testing physical iOS/Android devices.
- Arabic switch verified by clicking from desktop and mobile; document changes to `lang=ar` and `dir=rtl`.
- Mobile menu opens, closes with Escape and keeps the language switch outside the collapsed navigation.
- Service categories verified: 5 business, 4 visa/travel and 2 banking/payroll entries. English and Arabic filters work.
- Service disclosure and service-specific WhatsApp link checked.
- Interactive process disclosure checked.
- Contact selector and optional note input checked. No message was sent to the business.
- All 22 language-specific service links validated against the WhatsApp number and message encoding, including special characters.
- Both static pages checked for exactly one H1, unique element IDs, valid in-page anchors, existing image assets, the two correct numbers and no email contact links.
- Structured service catalogue contains all 11 services; service area remains Qatar. Canonical / hreflang metadata checked with a temporary example origin in an isolated module test. That origin is not stored in source or shipped as production configuration.
- Main text contrast: 13.79:1; secondary text: 5.16:1; primary CTA: 9.48:1; muted dark-section text: 7.52:1.
- Reduced-motion rules and Framer Motion's reduced-motion hook are implemented. Operating-system reduced-motion emulation was not part of browser testing.
- Hero asset: 1000 × 1000 WebP, approximately 63 KB. Fonts are local with included licenses.

Not performed: deployment to the existing GitHub/Vercel account, real message delivery, native-device testing, Search Console indexing or external visa/bank application submission. The supplied Maps URL is preserved exactly; no coordinates or opening hours were inferred.
