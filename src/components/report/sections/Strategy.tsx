// components/report/sections/Strategy.tsx
import InnerCard from "../primitives/InnerCard";
import SectionCard from "../primitives/SectionCard";
import type { FC } from "react";
import StrategyCard from "../primitives/StrategyCard";

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

  // description_strategy 데이터가 없거나 필요한 필드가 없는 경우 기본 UI 표시
  if (!s || !s.review || !s.kpi || !s.improvements) {
    return (
      <SectionCard title="AI 종합 분석" titleClassName="Head_Bold_14 text-primary-green-40" initialIsOpen={true}>
        <div className="space-y-4">
          <InnerCard title="AI 종합 분석">
            <div className="text-center py-8">
              <p className="text-gray-500">AI 종합 분석 데이터를 불러오는 중입니다...</p>
            </div>
          </InnerCard>
        </div>
      </SectionCard>
    );
  }

  return (
    <SectionCard title="AI 종합 분석" titleClassName="Head_Bold_14 text-primary-green-40" initialIsOpen={true}>
      <div className="space-y-4">
        <InnerCard title="리뷰 기반 서비스 조언">
          <StrategyCard
            title={s.review?.head || '리뷰 기반 서비스 조언'}
            items={s.review?.body || ['데이터를 불러오는 중입니다...']}
          />
        </InnerCard>
        <InnerCard title="핵심 성과 지표">
          <StrategyCard
            title={s.kpi?.head || '핵심 성과 지표'}
            items={s.kpi?.body || ['데이터를 불러오는 중입니다...']}
          />
        </InnerCard>
        <InnerCard title="보완지점">
          <StrategyCard
            title={s.improvements?.head || '보완지점'}
            items={s.improvements?.body || ['데이터를 불러오는 중입니다...']}
          />
        </InnerCard>
      </div>
    </SectionCard>
  );
};

export default Strategy;
