// components/report/sections/Population.tsx
import SectionCard from "../primitives/SectionCard";
import ChartFrame from "../primitives/ChartFrame";
import type { FC } from "react";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const Population: FC<{ report: ReportRaw }> = ({ report }) => {
  const a = report.population.ages;
  const g = report.population.gender;
  const ages = [
    {
      label: "10대",
      count: a.resident.age_10_resident,
      percent: a.percent.age_10_percent,
    },
    {
      label: "20대",
      count: a.resident.age_20_resident,
      percent: a.percent.age_20_percent,
    },
    {
      label: "30대",
      count: a.resident.age_30_resident,
      percent: a.percent.age_30_percent,
    },
    {
      label: "40대",
      count: a.resident.age_40_resident,
      percent: a.percent.age_40_percent,
    },
    {
      label: "50대",
      count: a.resident.age_50_resident,
      percent: a.percent.age_50_percent,
    },
    {
      label: "60대+",
      count: a.resident.age_60_plus_resident,
      percent: a.percent.age_60_plus_percent,
    },
  ];

  const gender = [
    {
      label: "남",
      count: g.resident.male_resident,
      percent: g.percent.male_percent,
    },
    {
      label: "여",
      count: g.resident.female_resident,
      percent: g.percent.female_percent,
    },
  ];

  return (
    <SectionCard
      title="실거주 인구 통계"
      titleClassName="Head_Bold_14 text-primary-green-40"
      subtitle={`총 거주자 ${report.population.total_resident.toLocaleString()}명`}
    >
      <ChartFrame caption="연령대 비중(%)">
        <ul className="grid grid-cols-3 gap-2 text-sm">
          {ages.map((x) => (
            <li key={x.label}>
              {x.label}: <b>{x.percent}%</b>{" "}
              <span className="text-muted-foreground">
                ({x.count.toLocaleString()}명)
              </span>
            </li>
          ))}
        </ul>
      </ChartFrame>

      <ChartFrame caption="성별 분포(%)">
        <ul className="flex gap-4 text-sm">
          {gender.map((x) => (
            <li key={x.label}>
              {x.label}: <b>{x.percent}%</b>{" "}
              <span className="text-muted-foreground">
                ({x.count.toLocaleString()}명)
              </span>
            </li>
          ))}
        </ul>
      </ChartFrame>

      <div className="mt-2 text-xs text-muted-foreground space-y-1">
        <p>{report.population.description_population.age}</p>
        <p>{report.population.description_population.gender}</p>
      </div>
    </SectionCard>
  );
};

export default Population;
