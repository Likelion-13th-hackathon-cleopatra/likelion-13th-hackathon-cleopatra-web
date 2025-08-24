// src/components/report/primitives/DynamicLabelDonutChart.tsx
import DonutChart from "./DonutChart";
import type { DonutChartProps } from "./DonutChart";

type DynamicLabelDonutChartProps = Omit<DonutChartProps, "outerLabelSet">;

export default function DynamicLabelDonutChart(props: DynamicLabelDonutChartProps) {
  const {
    data,
    leader: leaderFromProps,
    rotateDeg = 0,
    clockwise = true,
    ...rest
  } = props;

  // 바깥 라벨로 뺄 항목(작은 비율)
  const total = data.reduce((s, d) => s + d.value, 0);
  const THRESHOLD = 10;
  const outer = new Set<string>();
  data.forEach((d) => {
    if ((d.value / total) * 100 < THRESHOLD) outer.add(d.label);
  });

  // 리더라인: 짧은 '틱'만 (radial), 길이 5px
  const leader =
    leaderFromProps ?? {
      baseline: "radial",
      tickLen: 5,
      elbow: 6,      // 외곽으로 살짝만
      textPad: 6,    // 텍스트 여백
      textOffset: 6, // 살짝 아래
      // gap/horizLen은 radial 모드에서는 사용 안 함
    };

  return (
    <DonutChart
      {...rest}
      data={data}
      clockwise={clockwise}
      rotateDeg={rotateDeg}
      leader={leader}
      outerLabelSet={outer}
    />
  );
}