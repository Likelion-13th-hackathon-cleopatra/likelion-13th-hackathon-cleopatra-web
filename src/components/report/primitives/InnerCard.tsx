import { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
  hasBorder?: boolean;
  hasBackground?: boolean;
};

export default function InnerCard({
  title,
  children,
  className = "",
  hasBorder = true,
  hasBackground = true,
}: Props) {
  const baseClasses = "rounded-[10px] p-[14px] space-y-[10px]";
  const borderClasses = hasBorder ? "border border-[#CFF0DE]" : "";
  const backgroundClass = hasBackground ? "bg-white" : "";

  return (
    <div
      className={`${baseClasses} ${backgroundClass} ${borderClasses} ${className}`.trim()}
    >
      <h4 className="Head_Bold_14 text-grayscale-65">{title}</h4>
      <div>{children}</div>
    </div>
  );
}
