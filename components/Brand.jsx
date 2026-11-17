"use client";
import { useLanguage } from "./Language";
export default function Brand() {
  const { t } = useLanguage();
  return (
    <a className="brand" href="#home" aria-label={t.brandFull}>
      <span className="brand-mark">
        <img src="/mark.png" alt="" width="42" height="42" />
      </span>
      <span className="brand-wordmark">
        {t.brand}
        <small>{t.brandSub}</small>
      </span>
    </a>
  );
}
