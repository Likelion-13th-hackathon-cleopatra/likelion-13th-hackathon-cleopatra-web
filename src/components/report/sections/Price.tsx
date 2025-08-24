// components/report/sections/Price.tsx
import SectionCard from "../primitives/SectionCard";
import type { FC } from "react";
import { won } from "@/utils/number";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const humanQuarter = (k: string) => k.replace(/(\d{4})_(\d)_quarter/, "$1 Q$2");

const Price: FC<{ report: ReportRaw }> = ({ report }) => {
  const p = report.price;
  const trend = Object.entries(p.trading_volume).map(([k, v]) => ({
    quarter: humanQuarter(k),
    value: v as number,
  }));

  return (
    <SectionCard title="가격 & 거래량">
      <div className="grid gap-1 text-sm">
        <div>
          <b>큰 면적</b> 평균 {won(p.big.big_average)} · 중위{" "}
          {won(p.big.big_middle)} · n={p.big.big_count}
        </div>
        <div>
          <b>작은 면적</b> 평균 {won(p.small.small_average)} · 중위{" "}
          {won(p.small.small_middle)} · n={p.small.small_count}
        </div>
        <div>
          ㎡당 {won(p.price_per_meter)} · 평당 {won(p.price_per_pyeong)}
        </div>
      </div>

      <p className="chart-frame__caption">분기별 거래량 추이</p>
      {/* 차트 도입 전 간단 프리뷰 */}
      <ul className="flex flex-wrap gap-3 text-sm">
        {trend.map((t) => (
          <li key={t.quarter}>
            {t.quarter}: <b>{t.value.toLocaleString()}</b>
          </li>
        ))}
      </ul>

      <div className="text-xs text-muted-foreground space-y-1">
        <p>{p.description_price.value_average}</p>
        <p>{p.description_price.value_pyeong}</p>
        <p>{p.description_price.volume}</p>
      </div>
    </SectionCard>
  );
};

export default Price;
