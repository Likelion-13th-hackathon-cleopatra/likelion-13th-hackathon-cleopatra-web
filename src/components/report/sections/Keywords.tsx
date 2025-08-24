// components/report/sections/Keywords.tsx
import SectionCard from "../primitives/SectionCard";
import type { FC } from "react";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const Keywords: FC<{ report: ReportRaw }> = ({ report }) => {
  return (
    <SectionCard title="핵심 키워드" subtitle="플랫폼별 톤 & 연관 키워드">
      <div className="space-y-4">
        {report.keywords.map((k) => (
          <div key={k.platform} className="space-y-1">
            <div className="font-semibold">{k.platform}</div>
            <div className="flex flex-wrap gap-2">
              {k.keywords.map((w) => (
                <span key={w} className="chip">
                  {w}
                </span>
              ))}
            </div>
            <p className="text-xs text-muted-foreground">{k.descript}</p>
          </div>
        ))}
      </div>
    </SectionCard>
  );
};

export default Keywords;
