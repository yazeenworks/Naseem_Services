import Site from "../../../components/Site";
import { LanguageProvider } from "../../../components/Language";
import { translations } from "../../../lib/translations";
export default function Page() {
  return (
    <LanguageProvider locale="ar">
      <a className="skip" href="#main">
        {translations.ar.skip}
      </a>
      <Site />
    </LanguageProvider>
  );
}
