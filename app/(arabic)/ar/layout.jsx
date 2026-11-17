import "../../globals.css";
import { metadataFor, businessSchema } from "../../../lib/seo";
export const metadata = metadataFor("ar");
export default function Layout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema("ar")).replace(
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
