// src/components/report/primitives/DynamicLabelDonutChart.tsx
import DonutChart from "./DonutChart";
import type { DonutChartProps } from "./DonutChart";

type DynamicLabelDonutChartProps = Omit<DonutChartProps, "outerLabelSet">;

export default function DynamicLabelDonutChart(
  props: DynamicLabelDonutChartProps
) {
  const { data, leader: leaderFromProps, ...rest } = props;

  // 총합 (0 나눗셈 방지)
  const total =
    data.reduce(
      (s, d) =>
        s + (typeof d.value === "number" ? d.value : Number(d.value) || 0),
      0
    ) || 1;

  // 규칙: 10% "미만"은 바깥, 그 외는 내부
  const outer = new Set<string>();
  for (const d of data) {
    const value = typeof d.value === "number" ? d.value : Number(d.value) || 0;
    const pct = (value / total) * 100;
    if (pct < 10) outer.add(String(d.label).trim()); // 문자열로 통일 (공백 방지)
  }

  // 바깥 라벨은 섹터 바깥으로 짧은 '틱' + 바로 옆 텍스트 (radial 모드)
  const leader = leaderFromProps ?? {
    baseline: "radial" as const,
    elbow: 5,
    tickLen: 5,
    textPad: 6,
    textOffset: 6,
  };

  // 디버그(개발 모드에서만): 실제로 어떤 라벨이 바깥으로 가는지 확인
  if (import.meta.env?.DEV) {
    // eslint-disable-next-line no-console
    console.debug(
      "[DynamicLabelDonutChart] total=",
      total,
      "outerSet=",
      Array.from(outer),
      "dataLabels=",
      data.map((d) => String(d.label).trim())
    );
  }

  return (
    <DonutChart {...rest} data={data} leader={leader} outerLabelSet={outer} />
  );
}
