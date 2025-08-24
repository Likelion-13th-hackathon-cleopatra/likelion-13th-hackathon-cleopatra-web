// components/report/sections/ReportHero.tsx
import SectionCard from "../primitives/SectionCard";
import type { FC } from "react";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const ReportHero: FC<{ report: ReportRaw }> = ({ report }) => {
  const title = `${report.district} ${report.sub_neighborhood} · ${report.primary}(${report.secondary})`;
  const regionPath = `${report.district} · ${report.neighborhood} · ${report.sub_neighborhood}`;

  return (
    <SectionCard title={title} subtitle={regionPath}>
      <div className="space-y-2 text-sm leading-6">
        <p
          dangerouslySetInnerHTML={{
            __html: report.description_summary.total_description,
          }}
        />
        <ul className="list-disc pl-5">
          <li
            dangerouslySetInnerHTML={{
              __html: report.description_summary.line_1,
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: report.description_summary.line_2,
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: report.description_summary.line_3,
            }}
          />
        </ul>
        <div className="text-xs text-muted-foreground">
          생성일: {report.created_at.slice(0, 10)} · 보고서ID:{" "}
          {report.report_id}
        </div>
      </div>
    </SectionCard>
  );
};

export default ReportHero;
