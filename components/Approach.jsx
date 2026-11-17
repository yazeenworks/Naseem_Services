"use client";
import { Compass, MessagesSquare, Focus } from "lucide-react";
import { useLanguage } from "./Language";
import Reveal from "./Reveal";
const icons = [Compass, MessagesSquare, Focus];
export default function Approach() {
  const { t } = useLanguage();
  return (
    <section className="approach" aria-labelledby="approach-title">
      <div className="wrap">
        <Reveal className="approach-heading">
          <p className="eyebrow">{t.approachLabel}</p>
          <h2 id="approach-title">{t.approachHeading}</h2>
          <p>{t.approachBody}</p>
        </Reveal>
        <div className="values">
          {t.values.map(([title, text], i) => {
            const Icon = icons[i];
            return (
              <Reveal key={title} className="value" delay={i * 0.05}>
                <Icon size={26} strokeWidth={1.4} aria-hidden="true" />
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
