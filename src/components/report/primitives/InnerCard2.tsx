import { type ReactNode } from "react";

type Props = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
};

export default function InnerCard2({ title, subtitle, children, className = "" }: Props) {
  return (
    <div
      className={`rounded-[10px] border border-[#CFF0DE] p-[14px] space-y-[10px] ${className}`}
    >
      <div className="flex items-center justify-between">
        <h4 className="Head_Bold_14 text-grayscale-65">{title}</h4>
        {subtitle && (
          <span className="Body_Regular_10 text-grayscale-25">{subtitle}</span>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
}
