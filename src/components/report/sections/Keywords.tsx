import { useState } from "react";
import type { FC } from "react";
import ArrowDownIcon from "@/assets/icons/my/arrow_down.svg?react";
import InnerCard from "../primitives/InnerCard";
import AIInterpretationCard from "../primitives/AIInterpretationCard";

const platformTitles: { [key: string]: string } = {
  NAVER_BLOG: "블로그 포털",
  NAVER_REVIEW: "지역 커뮤니티 플랫폼",
  YOUTUBE: "배달 플랫폼",
};

const Keywords: FC<{ report: ReportRaw }> = ({ report }) => {
  const [isOpen, setIsOpen] = useState(true);

  const title = `서울시 ${report.district} ${report.sub_neighborhood} 지역 키워드`;

  return (
    <section className="bg-white rounded-[15px] px-4 py-[18px] shadow-sm">
      <header
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="Head_Bold_14 text-primary-green40">{title}</h3>
        <button aria-label={isOpen ? "접기" : "펼치기"} className="pr-[6px]">
          <ArrowDownIcon
            width="14"
            height="8.25"
            className={`transition-transform duration-300 ${isOpen ? "" : "-rotate-180"}`}
          />
        </button>
      </header>

      {isOpen && (
        <div className="mt-4 space-y-4">
          {report.keywords.map((k) => (
            <InnerCard key={k.platform} title={platformTitles[k.platform]}>
              <div className="space-y-[10px]">
                <div className="flex flex-wrap gap-1.5">
                  {k.keywords.map((w) => (
                    <span key={w} className="chip">
                      #{w}
                    </span>
                  ))}
                </div>
                <AIInterpretationCard>{k.descript}</AIInterpretationCard>
              </div>
            </InnerCard>
          ))}
        </div>
      )}
    </section>
  );
};

export default Keywords;
