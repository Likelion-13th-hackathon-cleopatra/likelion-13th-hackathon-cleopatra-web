// components/report/charts/DonutChart.tsx
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { CSSProperties, ReactNode } from "react";
import { dummyReport } from "@/mock/dummyReport.ts";

export type DonutDatum = { label: string; value: number };

export type DonutChartProps = {
  data: DonutDatum[];
  colors?: string[];
  innerRadius?: number;
  outerRadius?: number;
  clockwise?: boolean;
  outerLabelSet?: Set<string>;
  center?: { title?: ReactNode; value?: ReactNode; style?: CSSProperties };
  rotateDeg?: number;
  height?: number;
  /** 리더 라인 길이/간격 설정 */
  leader?: {
    gap?: number;
    elbow?: number;
    horizLen?: number;
    textPad?: number;
    textOffset?: number;
    /** 바깥 라벨 기준선 모드: 기본 'top' (기존 동작 유지) */
    baseline?: "top" | "radial";
    /** baseline='radial'일 때, 가로로 살짝 더 뻗는 길이(px). 기본 5 */
    tickLen?: number;
  };
};

const DEFAULT_COLORS = [
  "#C8F3D7",
  "#6DDC8E",
  "#22C55E",
  "#37C977",
  "#9AE8BC",
  "#7BDD9F",
];
const RAD = Math.PI / 180;

export default function DonutChart({
  data,
  colors = DEFAULT_COLORS,
  innerRadius = 86,
  outerRadius = 120,
  clockwise = true,
  outerLabelSet,
  center,
  rotateDeg = 0,
  leader,
}: DonutChartProps) {
  const {
    gap = 8,
    elbow = 10,
    horizLen = 56,
    textPad = 7, // ← 7px 여유
    textOffset = 6, // ← 살짝 아래(양수=아래)
  } = leader ?? {};

  const spendingTotal = dummyReport.data.income_consumption.consumption.spending_total;
  const spendingTotalFormatted = spendingTotal.toLocaleString();

  const sortedData = [...data].sort((a, b) => a.value - b.value);
  const lowestLabelsSet = new Set(sortedData.slice(0, 3).map((d) => d.label));

  const baseStart = clockwise ? 90 : 0;
  const baseEnd = clockwise ? -270 : 360;
  const startAngle = baseStart + rotateDeg;
  const endAngle = baseEnd + rotateDeg;

  const renderInnerLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, payload } =
      props;
    if (outerLabelSet?.has(payload.label)) return null;

    const r = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + r * Math.cos(-midAngle * RAD);
    const y = cy + r * Math.sin(-midAngle * RAD);

    const whiteLabels = ["의류", "의료비", "교육"];
    const textColor = whiteLabels.includes(payload.label)
      ? "#FFFFFF"
      : "#086d36";

    return (
      <text
        x={x}
        y={y}
        fill={textColor}
        textAnchor="middle"
        dominantBaseline="central"
      >
        <tspan x={x} dy="-0.6em" className="Body_Regular_10">
          {payload.label}
        </tspan>
        <tspan x={x} dy="1.2em" className="Body_Bold_12">
          {(percent * 100).toFixed(1)}%
        </tspan>
      </text>
    );
  };

  const renderOuterLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, percent, payload } = props;
    if (!outerLabelSet?.has(payload.label)) return null;

    const angle = -midAngle * RAD;

    // 시작점: 도넛 외곽
    const ax = cx + (outerRadius + 0) * Math.cos(angle);
    const ay = cy + (outerRadius + 0) * Math.sin(angle);

    // 짧은 대각선(섹터 바깥 방향으로)
    const ex = cx + (outerRadius + elbow) * Math.cos(angle);
    const ey = cy + (outerRadius + elbow) * Math.sin(angle);

    const isLeft = Math.cos(angle) < 0;

    // === 추가: 라벨 배치 모드 분기 ===
    const baseline = leader?.baseline ?? "top";
    const tickLen  = leader?.tickLen  ?? 5;

    let hx: number, hy: number, textX: number, textY: number, anchor: "start" | "end";

    if (baseline === "radial") {
      // 섹터 바깥쪽으로 짧게 가로로만 '틱'을 한 번 더
      hx = ex + (isLeft ? -tickLen : tickLen);
      hy = ey;

      textX = hx + (isLeft ? -textPad : textPad);
      textY = hy + textOffset;
      anchor = isLeft ? "end" : "start";
    } else {
      // 기존(top) 동작: 위 기준선으로 올려서 가로선 + 텍스트
      const topY = cy - outerRadius - (leader?.gap ?? 8);
      hx = ex + (isLeft ? -(leader?.horizLen ?? 56) : (leader?.horizLen ?? 56));
      hy = topY;

      textX = hx + (isLeft ? -textPad : textPad);
      textY = hy + textOffset;
      anchor = isLeft ? "end" : "start";
    }

    return (
      <g>
        <polyline
          points={`${ax},${ay} ${ex},${ey} ${hx},${hy}`}
          stroke="#086d36"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <text
          x={textX}
          y={textY}
          textAnchor={anchor}
          dominantBaseline="ideographic"
          fill="#086d36"
        >
          <tspan x={textX} dy="-0.6em" className="Body_Regular_10">
            {payload.label}
          </tspan>
          <tspan x={textX} dy="1.2em" className="Body_Bold_12">
            {(percent * 100).toFixed(1)}%
          </tspan>
        </text>
        <circle cx={ax} cy={ay} r={4} fill="#086d36" />
      </g>
    );
  };

  return (
    <div
      style={{
        width: "100%",
        height: 245,
        position: "relative",
        backgroundColor: "white",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pointerEvents: "none",
          flexDirection: "column",
          lineHeight: 1.2,
          textAlign: "center",
        }}
      >
        <div className="Body_Regular_10">지출 총 금액</div>
        <div className="Sub_Bold_10" style={{ color: "#032412" }}>
          {spendingTotalFormatted}원
        </div>
      </div>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            fill="transparent"
            isAnimationActive={false}
            labelLine={false}
            label={renderOuterLabel}
            startAngle={startAngle}
            endAngle={endAngle}
            paddingAngle={0}
          />
          <Pie
            data={data}
            dataKey="value"
            nameKey="label"
            cx="50%"
            cy="50%"
            innerRadius={innerRadius}
            outerRadius={outerRadius}
            startAngle={startAngle}
            endAngle={endAngle}
            paddingAngle={0}
            label={renderInnerLabel}
            labelLine={false}
            isAnimationActive={false}
          >
            {data.map((_, i) => (
              <Cell key={i} fill={colors[i % colors.length]} strokeWidth={0} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}