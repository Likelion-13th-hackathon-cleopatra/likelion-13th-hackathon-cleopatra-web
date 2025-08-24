import type { FC } from "react";
import SectionCard from "../primitives/SectionCard";
import InnerCard from "../primitives/InnerCard";
import AIInterpretationCard from "../primitives/AIInterpretationCard";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const platformTitles: { [key: string]: string } = {
  NAVER_BLOG: "블로그 포털",
  NAVER_REVIEW: "지역 커뮤니티 플랫폼",
  YOUTUBE: "배달 플랫폼",
};

const Keywords: FC<{ report: ReportRaw }> = ({ report }) => {
  const title = `서울시 ${report.district} ${report.sub_neighborhood} 지역 키워드`;

  return (
    <SectionCard
      title={title}
      titleClassName="Head_Bold_14 text-primary-green-40"
      initialIsOpen={true}
    >
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
    </SectionCard>
  );
};

export default Keywords;
