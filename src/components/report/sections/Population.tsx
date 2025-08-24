import SectionCard from "../primitives/SectionCard";
import InnerCard from "../primitives/InnerCard";
import AgeDonutChart from "../primitives/AgeDonutChart";
import AIInterpretationCard from "../primitives/AIInterpretationCard";
import GenderRatioBar from "../primitives/GenderRatioBar"; // ⬅️ 추가
import type { FC } from "react";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const formatNumber = (n: number) => n.toLocaleString("ko-KR");

const Population: FC<{ report: ReportRaw }> = ({ report }) => {
  const a = report.population.ages;
  const ages = [
    { label: "10대 이하", value: a.percent.age_10_percent },
    { label: "20대", value: a.percent.age_20_percent },
    { label: "30대", value: a.percent.age_30_percent },
    { label: "40대", value: a.percent.age_40_percent },
    { label: "50대", value: a.percent.age_50_percent },
    { label: "60대 이상", value: a.percent.age_60_plus_percent },
  ];
  const totalLabel = `${formatNumber(report.population.total_resident)}명`;

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
              <p>{report.population.description_population.age}</p>
            </AIInterpretationCard>
          </div>
        </InnerCard>

        <InnerCard title="성별 인구 비율">
          {/* ⬇️ 여기에 '그림처럼' pill 바 컴포넌트 추가 */}
          <GenderRatioBar
            className="mt-2"
            malePercent={g.percent.male_percent}
            femalePercent={g.percent.female_percent}
          />

          <AIInterpretationCard className="mt-2">
            <p>
              {report.population.description_population.gender}
            </p>
          </AIInterpretationCard>
        </InnerCard>
      </div>
    </SectionCard>
  );
};

export default Population;
