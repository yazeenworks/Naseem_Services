"use client";
import { ArrowUp, ArrowUpRight, MessageCircle } from "lucide-react";
import { useLanguage } from "./Language";
import { whatsapp, mapUrl } from "../lib/content";
import Brand from "./Brand";
export default function Footer() {
  const { locale, t } = useLanguage();
  return (
    <>
      <footer>
        <div className="wrap">
          <div className="footer-top">
            <div className="footer-brand">
              <Brand />
              <p>{t.footerLine}</p>
            </div>
            <div className="footer-links">
              <small>{t.footerNav}</small>
              <a href="#services">{t.services}</a>
              <a href="#process">{t.process}</a>
              <a href="#contact">{t.contact}</a>
            </div>
            <div className="footer-address">
              <small>{t.footerContact}</small>
              <p>{t.address}</p>
              <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                {t.maps}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
            <a className="back-top" href="#home" aria-label={t.backTop}>
              <ArrowUp size={22} aria-hidden="true" />
            </a>
          </div>
          <div className="footer-bottom">
            <small>
              © {new Date().getFullYear()} {t.brandFull}. {t.rights}
            </small>
            <small>{t.independent}</small>
          </div>
        </div>
      </footer>
      <a
        className="floating-chat"
        href={whatsapp(undefined, locale)}
        aria-label={t.chat}
      >
        <MessageCircle size={22} aria-hidden="true" />
        <span>{t.mobileChat}</span>
      </a>
    </>
  );
}
