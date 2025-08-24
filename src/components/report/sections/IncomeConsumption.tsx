// components/report/sections/IncomeConsumption.tsx
import SectionCard from "../primitives/SectionCard";
import InnerCard from "../primitives/InnerCard";
import IncomeLevelBox from "../primitives/IncomeLevelBox"; // Added this line
import type { FC } from "react";
import { won } from "@/utils/number";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const IncomeConsumption: FC<{ report: ReportRaw }> = ({ report }) => {
  const i = report.income_consumption.income;
  const c = report.income_consumption.consumption;

  // 항목 라벨 매핑 (원본 키 → 한글 라벨)
  const labels: [keyof typeof c.expend, string][] = [
    ["food", "식료품"],
    ["clothing_footwear", "의류·신발"],
    ["living_goods", "생활용품"],
    ["medical", "의료"],
    ["transport", "교통"],
    ["education", "교육"],
    ["leisure_culture", "여가·문화"],
    ["other", "기타"],
    ["eating_out", "외식"],
  ];

  const rows = labels.map(([k, name]) => ({
    label: name,
    percent: (c.percent as any)[k] as number,
  }));

  return (
    <SectionCard
      title="주민 소득 수준"
    >
      <div className="space-y-[16px]">
        <InnerCard title="주민경제력">
          <IncomeLevelBox className="mt-[8px]" incomeData={i}>
            {/* Content for IncomeLevelBox */}
          </IncomeLevelBox>
        </InnerCard>

        <InnerCard title="소득 지출분류">
          <p className="chart-frame__caption">소비 항목 비중(%)</p>
          <ul className="grid grid-cols-2 gap-2 text-sm">
            {rows.map((r) => (
              <li key={r.label}>
                {r.label}: <b>{r.percent}%</b>
              </li>
            ))}
          </ul>

          <p className="text-xs text-muted-foreground">
            총지출: {won(c.spending_total)} ·{" "}
            {report.income_consumption.income_consumption_description}
          </p>
        </InnerCard>
      </div>
    </SectionCard>
  );
};

export default IncomeConsumption;