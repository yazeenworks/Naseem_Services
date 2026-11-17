import { siteOrigin } from "../lib/seo";
export const dynamic = "force-static";
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    ...(siteOrigin ? { sitemap: siteOrigin + "/sitemap.xml" } : {}),
  };
}
