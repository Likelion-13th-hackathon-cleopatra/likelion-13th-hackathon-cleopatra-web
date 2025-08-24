import SectionCard from "../primitives/SectionCard";
import InnerCard from "../primitives/InnerCard";
import AgeDonutChart from "../primitives/AgeDonutChart";
import AIInterpretationCard from "../primitives/AIInterpretationCard";
import GenderRatioBar from "../primitives/GenderRatioBar"; // ⬅️ 추가
import type { FC } from "react";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const formatNumber = (n: number) => n.toLocaleString("ko-KR");

const Population: FC<{ report: ReportRaw }> = ({ report }) => {
  // population 데이터가 없거나 필요한 필드가 없는 경우 기본값 사용
  if (!report.population || !report.population.ages || !report.population.gender) {
    return (
      <SectionCard
        title="실거주 인구 통계"
        titleClassName="Head_Bold_14 text-primary-green-40"
      >
        <div className="space-y-4 pt-4">
          <InnerCard
            title="연령대별 인구 비율"
            hasBorder={true}
            hasBackground={false}
          >
            <div className="mt-[8px] text-center py-8">
              <p className="text-gray-500">인구 데이터를 불러오는 중입니다...</p>
            </div>
          </InnerCard>
        </div>
      </SectionCard>
    );
  }

  const a = report.population.ages;
  const ages = [
    { label: "10대 이하", value: a.percent?.age_10_percent || 0 },
    { label: "20대", value: a.percent?.age_20_percent || 0 },
    { label: "30대", value: a.percent?.age_30_percent || 0 },
    { label: "40대", value: a.percent?.age_40_percent || 0 },
    { label: "50대", value: a.percent?.age_50_percent || 0 },
    { label: "60대 이상", value: a.percent?.age_60_plus_percent || 0 },
  ];
  const totalLabel = `${formatNumber(report.population.total_resident || 0)}명`;

  const g = report.population.gender;

  return (
    <SectionCard
      title="실거주 인구 통계"
      titleClassName="Head_Bold_14 text-primary-green-40"
    >
      <div className="space-y-4 pt-4">
        <InnerCard
          title="연령대별 인구 비율"
          hasBorder={true}
          hasBackground={false}
        >
          <div className="mt-[8px]">
            <AgeDonutChart data={ages} totalLabel={totalLabel} />
            <AIInterpretationCard className="mt-2">
              <p>{report.population.description_population?.age || '연령대별 인구 분석 데이터를 불러오는 중입니다...'}</p>
            </AIInterpretationCard>
          </div>
        </InnerCard>

        <InnerCard title="성별 인구 비율">
          {/* ⬇️ 여기에 '그림처럼' pill 바 컴포넌트 추가 */}
          <GenderRatioBar
            className="mt-2"
            malePercent={g.percent?.male_percent || 0}
            femalePercent={g.percent?.female_percent || 0}
          />

          <AIInterpretationCard className="mt-2">
            <p>
              {report.population.description_population?.gender || '성별 인구 분석 데이터를 불러오는 중입니다...'}
            </p>
          </AIInterpretationCard>
        </InnerCard>
      </div>
    </SectionCard>
  );
};

export default Population;
