import "../globals.css";
import { metadataFor, businessSchema } from "../../lib/seo";
export const metadata = metadataFor("en");
export default function Layout({ children }) {
  return (
    <html lang="en" dir="ltr">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema("en")).replace(
              /</g,
              "\\u003c",
            ),
          }}
        />
        {children}
      </body>
    </html>
  );
}
