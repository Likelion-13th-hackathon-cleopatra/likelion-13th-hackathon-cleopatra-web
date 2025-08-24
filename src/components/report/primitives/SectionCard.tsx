// components/report/primitives/SectionCard.tsx
import { useState } from "react";
import type { ReactNode } from "react";
import ArrowDownIcon from "@/assets/icons/my/arrow_down.svg?react";

type Props = {
  title: string;
  titleClassName?: string;
  subtitle?: string;
  right?: ReactNode;
  children: ReactNode;
  initialIsOpen?: boolean;
};

export default function SectionCard({
  title,
  titleClassName,
  subtitle,
  right,
  children,
  initialIsOpen = true,
}: Props) {
  const [isOpen, setIsOpen] = useState(initialIsOpen);

  return (
    <section className="section-card shadow-sm bg-white">
      <header
        className="section-card__header flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div>
          <h3 className={`section-card__title ${titleClassName || ""}`.trim()}>
            {title}
          </h3>
          {subtitle && <p className="section-card__subtitle">{subtitle}</p>}
        </div>
        <div className="flex items-center">
          {right && <div className="section-card__right mr-2">{right}</div>}
          <button aria-label={isOpen ? "접기" : "펼치기"} className="p-2">
            <ArrowDownIcon
              width="14"
              height="8.25"
              className={`transition-transform duration-300 ${
                isOpen ? "" : "-rotate-180"
              }`}
            />
          </button>
        </div>
      </header>
      {isOpen && <div className="section-card__body">{children}</div>}
    </section>
  );
}
