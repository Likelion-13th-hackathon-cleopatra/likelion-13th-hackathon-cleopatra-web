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

  // 1. Sort data by value to determine rank
  const sortedData = [...data].sort((a, b) => b.value - a.value);

  // 2. Create a map from label to its rank-based color
  const colorMap = new Map<string, string>();
  sortedData.forEach((item, index) => {
    const opacity = opacities[index % opacities.length];
    colorMap.set(item.label, `rgba(${primaryGreenRgb}, ${opacity})`);
  });

  // 3. Create the final colors array in the original data order
  const chartColors = data.map((item) => colorMap.get(item.label)!);

  const outerSet = new Set(["10대 이하", "60대 이상"]);

  return (
    <DonutChart
      data={data}
      colors={chartColors}
      innerRadius={40}
      outerRadius={100}
      clockwise
      outerLabelSet={outerSet}
      center={{
        title: (
          <div className="Sub_Bold_10 text-primary-green-80">
            실거주 인구수
          </div>
        ),
        value: (
          <div className="Sub_Bold_10 text-primary-green-80">
            {totalLabel}
          </div>
        ),
      }}
    />
  );
}
