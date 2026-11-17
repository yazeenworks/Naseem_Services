"use client";
import {
  ArrowUpRight,
  ArrowDown,
  MapPin,
  MessageCircle,
  Asterisk,
} from "lucide-react";
import { useLanguage } from "./Language";
import { services, whatsapp, mapUrl } from "../lib/content";
import Reveal from "./Reveal";
export default function Hero() {
  const { locale, t } = useLanguage();
  return (
    <>
      <section className="hero wrap" id="home" aria-labelledby="hero-title">
        <Reveal className="hero-copy">
          <p className="eyebrow">
            <span className="status-dot" />
            {t.badge}
          </p>
          <h1 id="hero-title">
            {t.headline}
            <em>{t.headlineAccent}</em>
          </h1>
          <p className="hero-intro">{t.intro}</p>
          <div className="hero-actions">
            <a className="btn primary" href={whatsapp(undefined, locale)}>
              {t.chat}
              <ArrowUpRight size={19} aria-hidden="true" />
            </a>
            <a className="text-link" href="#services">
              {t.explore}
              <ArrowDown size={17} aria-hidden="true" />
            </a>
          </div>
          <div className="hero-note">
            <span className="note-icon">
              <MessageCircle size={17} aria-hidden="true" />
            </span>
            <span>{t.heroNote}</span>
          </div>
        </Reveal>
        <Reveal className="hero-visual" delay={0.08}>
          <div className="hero-art">
            <img
              src="/brand-sculpture.webp"
              alt=""
              width="1000"
              height="1000"
              fetchPriority="high"
            />
          </div>
          <a
            className="location-tag"
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MapPin size={14} aria-hidden="true" />
            {t.heroLocation}
            <ArrowUpRight size={14} aria-hidden="true" />
          </a>
          <div className="visual-caption">
            <Asterisk
              className="caption-symbol"
              size={37}
              strokeWidth={1.2}
              aria-hidden="true"
            />
            <div>
              <strong>{t.heroCaption}</strong>
              <span>{t.heroSubcaption}</span>
            </div>
            <span className="visual-index" aria-hidden="true">
              N° 01
            </span>
          </div>
        </Reveal>
      </section>
      <div className="facts wrap">
        <div className="fact">
          <strong>
            {String(services.length).padStart(2, "0")}
            <span>↗</span>
          </strong>
          <span>{t.proofOne}</span>
        </div>
        <div className="fact">
          <strong>01</strong>
          <span>{t.proofTwo}</span>
        </div>
        <div className="fact">
          <strong className="fact-word">{t.proofThreeValue}</strong>
          <span>{t.proofThree}</span>
        </div>
        <div className="fact">
          <strong className="fact-word">
            {t.proofFourValue}
            <MapPin size={20} aria-hidden="true" />
          </strong>
          <span>{t.proofFour}</span>
        </div>
      </div>
    </>
  );
}
