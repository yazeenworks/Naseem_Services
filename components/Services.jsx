"use client";
import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import {
  Building2,
  PanelsTopLeft,
  BriefcaseBusiness,
  Plane,
  ScanLine,
  TicketsPlane,
  Landmark,
  WalletCards,
  Globe2,
  Fingerprint,
  Files,
  Plus,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { useLanguage } from "./Language";
import { getServices, whatsapp } from "../lib/content";
import Reveal from "./Reveal";
const icons = {
  Building2,
  PanelsTopLeft,
  BriefcaseBusiness,
  Plane,
  ScanLine,
  TicketsPlane,
  Landmark,
  WalletCards,
  Globe2,
  Fingerprint,
  Files,
};
export default function Services() {
  const { locale, t } = useLanguage();
  const [category, setCategory] = useState("all");
  const reduced = useReducedMotion();
  const services = getServices(locale);
  const visible = services.filter(
    (service) => category === "all" || service.category === category,
  );
  return (
    <section
      id="services"
      className="services section wrap"
      aria-labelledby="services-title"
    >
      <Reveal className="section-heading">
        <div>
          <p className="eyebrow">{t.serviceLabel}</p>
          <h2 id="services-title">
            {t.serviceHeading}
            <em>{t.serviceAccent}</em>
          </h2>
        </div>
        <p className="section-intro">{t.serviceIntro}</p>
      </Reveal>
      <div className="service-toolbar">
        <div className="filters" role="group" aria-label={t.services}>
          {Object.entries(t.categories).map(([key, label]) => (
            <button
              key={key}
              aria-pressed={category === key}
              aria-controls="service-grid"
              onClick={() => setCategory(key)}
            >
              {label}
              <span>
                {String(
                  key === "all"
                    ? services.length
                    : services.filter((s) => s.category === key).length,
                ).padStart(2, "0")}
              </span>
            </button>
          ))}
        </div>
        <span className="service-count" aria-live="polite">
          {visible.length} {t.serviceCount}
        </span>
      </div>
      <div id="service-grid" className="service-grid">
        {visible.map((service) => {
          const Icon = icons[service.icon];
          return (
            <motion.article
              key={service.id}
              layout={!reduced ? "position" : false}
              initial={false}
              transition={{ duration: 0.3 }}
              className="service-card"
            >
              <details>
                <summary>
                  <span className="service-top">
                    <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                    <span className="service-category">
                      {t.categories[service.category]}
                    </span>
                  </span>
                  <h3>{service.name}</h3>
                  <span className="service-description">{service.text}</span>
                  <span className="service-bottom">
                    <span className="details-label details-closed">
                      {t.details}
                    </span>
                    <span className="details-label details-open">
                      {t.lessDetails}
                    </span>
                    <span className="service-plus">
                      <Plus size={18} aria-hidden="true" />
                    </span>
                  </span>
                </summary>
                <div className="service-detail">
                  <p>{service.detail}</p>
                  <a
                    className="text-link"
                    href={whatsapp(service.name, locale)}
                  >
                    {t.ask}
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </a>
                </div>
              </details>
            </motion.article>
          );
        })}
        <article className="service-help">
          <MessageCircle size={28} strokeWidth={1.4} aria-hidden="true" />
          <h3>{t.helpTitle}</h3>
          <p>{t.helpText}</p>
          <a href={whatsapp(undefined, locale)} className="text-link">
            {t.shortChat}
            <ArrowUpRight size={20} aria-hidden="true" />
          </a>
        </article>
      </div>
      <p className="service-disclaimer">{t.serviceNote}</p>
    </section>
  );
}
