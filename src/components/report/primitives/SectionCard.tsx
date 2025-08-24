// components/report/primitives/SectionCard.tsx
import { ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  right?: ReactNode;
  children: ReactNode;
};

export default function SectionCard({
  title,
  subtitle,
  right,
  children,
}: Props) {
  return (
    <section className="section-card">
      <header className="section-card__header">
        <div>
          <h3 className="section-card__title">{title}</h3>
          {subtitle && <p className="section-card__subtitle">{subtitle}</p>}
        </div>
        {right && <div className="section-card__right">{right}</div>}
      </header>
      <div className="section-card__body">{children}</div>
    </section>
  );
}
