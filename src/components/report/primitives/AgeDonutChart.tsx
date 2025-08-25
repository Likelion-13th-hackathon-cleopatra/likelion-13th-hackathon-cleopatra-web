import DonutChart, { type DonutDatum } from "./DonutChart";

export default function AgeDonutChart({
  data,
  totalLabel,
}: {
  data: DonutDatum[];
  totalLabel: string; // 예: "509,823,012명"
}) {
  const opacities = [1, 0.85, 0.6, 0.45, 0.3, 0.1];
  const primaryGreenRgb = "13, 182, 89";

  // 값 큰 순으로 진한색
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  const colorMap = new Map<string, string>();
  sortedData.forEach((item, index) => {
    const opacity = opacities[index % opacities.length];
    colorMap.set(item.label, `rgba(${primaryGreenRgb}, ${opacity})`);
  });

  const chartColors = data.map((item) => colorMap.get(item.label)!);

  // AgeDonutChart는 "모두 내부 라벨" → outerLabelSet 전달 안 함
  return (
    <DonutChart
      data={data}
      colors={chartColors}
      innerRadius={40}
      outerRadius={100}
      clockwise
      center={{
        title: (
          <div className="Sub_Bold_10 text-primary-green-80">실거주 인구수</div>
        ),
        value: (
          <div className="Sub_Bold_10 text-primary-green-80">{totalLabel}</div>
        ),
      }}
      // 필요하면 미세 조정
      // leader={{ elbow: 5, tickLen: 3, textPad: 6, textOffset: 3 }}
    />
  );
}
