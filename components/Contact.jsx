"use client";
import { useState } from "react";
import { ArrowUpRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { useLanguage } from "./Language";
import { getServices, mapUrl, whatsapp, callUrl } from "../lib/content";
import Reveal from "./Reveal";
export default function Contact() {
  const { locale, t } = useLanguage();
  const [service, setService] = useState("");
  const [note, setNote] = useState("");
  const services = getServices(locale);
  function submit(event) {
    event.preventDefault();
    window.location.assign(whatsapp(service || undefined, locale, note));
  }
  return (
    <section
      id="contact"
      className="contact section wrap"
      aria-labelledby="contact-title"
    >
      <Reveal className="contact-copy">
        <p className="eyebrow">{t.contactLabel}</p>
        <h2 id="contact-title">
          {t.contactHeading}
          <em>{t.contactAccent}</em>
        </h2>
        <p className="section-intro">{t.contactIntro}</p>
        <div className="contact-links">
          <a href={whatsapp(undefined, locale)} className="contact-row">
            <MessageCircle size={21} aria-hidden="true" />
            <span>
              <small>{t.whatsapp}</small>
              <strong>
                <bdi dir="ltr">+974 33711172</bdi>
              </strong>
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
          <a href={callUrl} className="contact-row">
            <Phone size={21} aria-hidden="true" />
            <span>
              <small>{t.call}</small>
              <strong>
                <bdi dir="ltr">+974 30164909</bdi>
              </strong>
            </span>
            <ArrowUpRight size={18} aria-hidden="true" />
          </a>
        </div>
        <a
          className="location-link"
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          <MapPin size={21} aria-hidden="true" />
          <span>
            <small>{t.visit}</small>
            <strong>{t.address}</strong>
            <span className="directions">
              {t.maps}
              <ArrowUpRight size={15} aria-hidden="true" />
            </span>
          </span>
        </a>
      </Reveal>
      <Reveal className="enquiry-panel">
        <div className="enquiry-top">
          <span className="enquiry-icon">
            <MessageCircle size={23} strokeWidth={1.5} aria-hidden="true" />
          </span>
          <span className="status-dot" aria-hidden="true" />
        </div>
        <h3>{t.enquiryTitle}</h3>
        <p>{t.enquiryText}</p>
        <form onSubmit={submit}>
          <label htmlFor="service">{t.serviceField}</label>
          <select
            id="service"
            name="service"
            value={service}
            onChange={(event) => setService(event.target.value)}
          >
            <option value="">{t.servicePlaceholder}</option>
            {services.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name}
              </option>
            ))}
          </select>
          <label htmlFor="message">
            {t.noteField}
            <span>{t.optional}</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            maxLength={1000}
            placeholder={t.notePlaceholder}
            value={note}
            onChange={(event) => setNote(event.target.value)}
          />
          <button className="btn primary" type="submit">
            {t.enquirySubmit}
            <ArrowUpRight size={19} aria-hidden="true" />
          </button>
          <p className="form-note">{t.enquiryNote}</p>
        </form>
        <noscript>
          <style>{`.enquiry-panel form { display: none; }`}</style>
          <a className="text-link" href={whatsapp(undefined, locale)}>
            {t.chat}
          </a>
        </noscript>
      </Reveal>
    </section>
  );
}
