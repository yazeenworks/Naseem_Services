"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Globe2, Menu, X } from "lucide-react";
import { useLanguage } from "./Language";
import { whatsapp } from "../lib/content";
import Brand from "./Brand";
export default function Header() {
  const { locale, t } = useLanguage();
  const [open, setOpen] = useState(false);
  const toggle = useRef(null);
  useEffect(() => {
    function onEscape(event) {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    }
    if (open) document.addEventListener("keydown", onEscape);
    return () => document.removeEventListener("keydown", onEscape);
  }, [open]);
  return (
    <header className="site-header">
      <div className="wrap nav">
        <Brand />
        <nav
          id="navigation"
          aria-label={t.footerNav}
          className={open ? "opened" : ""}
          onClick={() => setOpen(false)}
        >
          <a href="#services">{t.services}</a>
          <a href="#process">{t.process}</a>
          <a href="#contact">{t.contact}</a>
        </nav>
        <div className="nav-actions">
          <a
            className="language-switch"
            href={locale === "ar" ? "/" : "/ar/"}
            hrefLang={locale === "ar" ? "en" : "ar"}
            lang={locale === "ar" ? "en" : "ar"}
          >
            <Globe2 size={16} aria-hidden="true" /> {t.switch}
          </a>
          <a className="btn primary nav-cta" href={whatsapp(undefined, locale)}>
            {t.shortChat}
            <ArrowUpRight size={17} aria-hidden="true" />
          </a>
          <button
            ref={toggle}
            className="menu"
            aria-expanded={open}
            aria-controls="navigation"
            aria-label={open ? t.closeMenu : t.menu}
            onClick={() => setOpen(!open)}
          >
            {open ? (
              <X size={22} aria-hidden="true" />
            ) : (
              <Menu size={22} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
}
