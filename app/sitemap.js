import { siteOrigin, languagePaths } from "../lib/seo";
export const dynamic = "force-static";
export default function sitemap() {
  if (!siteOrigin) return [];
  const languages = {
    "en-QA": siteOrigin + "/",
    "ar-QA": siteOrigin + "/ar/",
    "x-default": siteOrigin + "/",
  };
  return Object.values(languagePaths).map((path) => ({
    url: siteOrigin + path,
    alternates: { languages },
  }));
}
