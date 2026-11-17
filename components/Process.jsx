"use client";
import { useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { useLanguage } from "./Language";
import { whatsapp } from "../lib/content";
import Reveal from "./Reveal";
export default function Process() {
  const { locale, t } = useLanguage();
  const [current, setCurrent] = useState(0);
  return (
    <section
      id="process"
      className="section wrap process"
      aria-labelledby="process-title"
    >
      <Reveal className="process-heading">
        <p className="eyebrow">{t.processLabel}</p>
        <h2 id="process-title">
          {t.processHeading}
          <em>{t.processAccent}</em>
        </h2>
        <p className="section-intro">{t.processIntro}</p>
        <a className="text-link" href={whatsapp(undefined, locale)}>
          {t.shortChat}
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>
      </Reveal>
      <Reveal className="process-steps">
        {t.steps.map(([title, text], i) => (
          <div
            key={title}
            className={"process-step " + (current === i ? "is-active" : "")}
          >
            <h3>
              <button
                aria-expanded={current === i}
                aria-controls={"step-panel-" + i}
                onClick={() => setCurrent(current === i ? -1 : i)}
              >
                <span className="step-number">0{i + 1}</span>
                <span>{title}</span>
                <Plus className="step-plus" size={19} aria-hidden="true" />
              </button>
            </h3>
            <div
              id={"step-panel-" + i}
              hidden={current !== i}
              className="step-panel"
            >
              <p>{text}</p>
              <span className="step-line" aria-hidden="true" />
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}
