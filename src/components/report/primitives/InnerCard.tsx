import { type ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function InnerCard({ title, children, className = "" }: Props) {
  return (
    <div
      className={`rounded-[10px] border border-[#CFF0DE] p-[14px] space-y-[10px] ${className}`}
    >
      <h4 className="Head_Bold_14 text-grayscale-65">{title}</h4>
      <div>{children}</div>
    </div>
  );
}
