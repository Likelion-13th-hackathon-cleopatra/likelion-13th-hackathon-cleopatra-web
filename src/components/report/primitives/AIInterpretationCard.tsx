import { type ReactNode } from "react";
import Logo from "@/components/icons/Logo"; // Import Logo component

type Props = {
  children: ReactNode;
  className?: string;
};

export default function AIInterpretationCard({ children, className = "" }: Props) {
  return (
    <div
      className={`rounded-[5px] bg-[#FFF9EE] p-[10px] space-y-[6px] ${className}`}
    >
      <div className="flex items-center gap-1.5"> {/* Header part */}
        <Logo width="13.3" height="14" color="#FFC251" /> {/* sub_yellow */}
        <span className="Body_Bold_12 text-sub-yellow40">AI 해설</span>
      </div>
      <div className="Body_Regular_12 text-grayscale-65"> {/* Body part */}
        {children}
      </div>
    </div>
  );
}
