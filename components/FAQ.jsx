"use client";
import { Plus } from "lucide-react";
import { useLanguage } from "./Language";
import Reveal from "./Reveal";
export default function FAQ() {
  const { t } = useLanguage();
  return (
    <section className="faq-section">
      <div className="wrap faq section">
        <Reveal>
          <p className="eyebrow">{t.faqLabel}</p>
          <h2>
            {t.faqHeading}
            <em>{t.faqAccent}</em>
          </h2>
        </Reveal>
        <div className="faq-list">
          {t.faqs.map(([question, answer]) => (
            <details key={question}>
              <summary>
                {question}
                <Plus size={19} aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
