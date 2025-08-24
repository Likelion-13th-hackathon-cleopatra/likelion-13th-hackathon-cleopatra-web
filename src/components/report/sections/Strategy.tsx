// components/report/sections/Strategy.tsx
import SectionCard from "../primitives/SectionCard";
import type { FC } from "react";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

function Block({ head, body }: { head: string; body: string[] }) {
  return (
    <div className="space-y-1">
      <div
        className="font-semibold"
        dangerouslySetInnerHTML={{ __html: head }}
      />
      <ul className="list-disc pl-5 text-sm">
        {body.map((b, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: b }} />
        ))}
      </ul>
    </div>
  );
}

const Strategy: FC<{ report: ReportRaw }> = ({ report }) => {
  const s = report.description_strategy;

  return (
    <SectionCard title="운영 전략 제안" subtitle="리뷰·KPI·개선 포인트">
      <div className="space-y-4">
        <Block head={s.review.head} body={s.review.body} />
        <Block head={s.kpi.head} body={s.kpi.body} />
        <Block head={s.improvements.head} body={s.improvements.body} />
      </div>
    </SectionCard>
  );
};

export default Strategy;
