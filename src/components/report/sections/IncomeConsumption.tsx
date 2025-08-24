// components/report/sections/IncomeConsumption.tsx
import SectionCard from "../primitives/SectionCard";
import InnerCard from "../primitives/InnerCard";
import IncomeLevelBox from "../primitives/IncomeLevelBox"; // Added this line
import AIInterpretationCard from "../primitives/AIInterpretationCard";
import type { FC } from "react";
import { won } from "@/utils/number";
// import DonutChart from "../primitives/DonutChart"; // Removed
import DynamicLabelDonutChart from "../primitives/DynamicLabelDonutChart"; // Added

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const IncomeConsumption: FC<{ report: ReportRaw }> = ({ report }) => {
  const i = report.income_consumption.income;
  const c = report.income_consumption.consumption;

  // 항목 라벨 매핑 (원본 키 → 한글 라벨)
  const labels: [keyof typeof c.expend, string][] = [
    ["food", "식료품"],
    ["clothing_footwear", "의류"],
    ["living_goods", "생활용품"],
    ["medical", "의료"],
    ["transport", "교통"],
    ["education", "교육"],
    ["entertainment", "유흥"],
    ["leisure_culture", "여가·문화"],
    ["other", "기타"],
    ["eating_out", "외식"],
  ];

  const donutData = labels.map(([k, name]) => ({
    label: name,
    value: (c.percent as any)[k] as number,
  }));

  const customColors = [
    `rgba(13, 182, 89, 1.0)`, // 식료품 (100%)
    `rgba(13, 182, 89, 0.9)`, // 의류 (90%)
    `rgba(13, 182, 89, 0.2)`, // 생활용품 (20%)
    `rgba(13, 182, 89, 0.6)`, // 의료 (60%)
    `rgba(13, 182, 89, 0.4)`, // 교통 (40%)
    `rgba(13, 182, 89, 0.7)`, // 교육 (70%)
    `rgba(13, 182, 89, 0.8)`, // 유흥 (80%)
    `rgba(13, 182, 89, 0.1)`, // 여가·문화 (10%)
    `rgba(13, 182, 89, 0.5)`, // 기타 (50%)
    `rgba(13, 182, 89, 0.3)`, // 외식 (30%)
  ];

  return (
    <SectionCard title="주민 소득 수준">
      <div className="space-y-[16px]">
        <InnerCard title="주민 경제력">
          <IncomeLevelBox className="mt-[8px]" incomeData={i}>
            {/* Content for IncomeLevelBox */}
          </IncomeLevelBox>
        </InnerCard>

        <InnerCard
          title="소득 지출분류"
          rightContent={
            <span className="Body_Regular_10" style={{ color: "#B6B6B5" }}>
              서울시 상권 분석 서비스
            </span>
          }
        >
          <DynamicLabelDonutChart // Changed from DonutChart
            data={donutData}
            innerRadius={40}
            outerRadius={100}
            colors={customColors}
            startAngle={90}
            endAngle={-270}
          />

          <AIInterpretationCard className="mt-[10px]">
            <p className="text-xs text-muted-foreground">
              총지출: {won(c.spending_total)} ·{" "}
              {report.income_consumption.income_consumption_description}
            </p>
          </AIInterpretationCard>
        </InnerCard>
      </div>
    </SectionCard>
  );
};

export default IncomeConsumption;
