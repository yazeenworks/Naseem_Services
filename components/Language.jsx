"use client";
import { createContext, useContext } from "react";
import { translations } from "../lib/translations";
const LanguageContext = createContext("en");
export function LanguageProvider({ locale, children }) {
  return (
    <LanguageContext.Provider value={locale}>
      {children}
    </LanguageContext.Provider>
  );
}
export function useLanguage() {
  const locale = useContext(LanguageContext);
  return { locale, t: translations[locale] };
}
