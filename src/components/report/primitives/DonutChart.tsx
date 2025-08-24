// components/report/charts/DonutChart.tsx
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { CSSProperties, ReactNode } from "react";

export type DonutDatum = { label: string; value: number };

type DonutChartProps = {
  data: DonutDatum[];
  colors?: string[];
  innerRadius?: number;
  outerRadius?: number;
  clockwise?: boolean;
  outerLabelSet?: Set<string>;
  center?: { title?: ReactNode; value?: ReactNode; style?: CSSProperties };
  rotateDeg?: number;
  /** 리더 라인 길이/간격 설정 */
  leader?: {
    /** 도넛 위쪽 기준선까지의 간격(px). 기본 8 */
    gap?: number;
    /** 점에서 바깥쪽으로 나가는 짧은 대각선 길이(px). 기본 10 */
    elbow?: number;
    /** 위쪽 가로선 길이(px). 기본 56 */
    horizLen?: number;
    /** 가로선 끝과 텍스트 사이 여백(px). 기본 7 */
    textPad?: number;
    /** 텍스트를 아래로 내리는 오프셋(px). 기본 6 */
    textOffset?: number;
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

    const textColor = lowestLabelsSet.has(payload.label)
      ? "#086d36"
      : "#FFFFFF";

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

    // 1) 점(시작점): 도넛 외곽선에 딱 닿도록
    const ax = cx + (outerRadius + 0) * Math.cos(angle);
    const ay = cy + (outerRadius + 0) * Math.sin(angle);

    // 2) 짧은 대각선(엘보)
    const ex = cx + (outerRadius + elbow) * Math.cos(angle);
    const ey = cy + (outerRadius + elbow) * Math.sin(angle);

    // 3) 위쪽 기준선 Y (도넛 위 + gap)
    const topY = cy - outerRadius - gap;

    // 4) 가로선 끝점
    const isLeft = Math.cos(angle) < 0;
    const hx = ex + (isLeft ? -horizLen : horizLen);
    const hy = topY;

    // 5) 텍스트 위치: 가로선 끝에서 좌우로 7px 띄우고, 아래로 약간 내림
    const textX = hx + (isLeft ? -textPad : textPad);
    const textY = hy + textOffset;
    const anchor = isLeft ? "end" : "start";

    return (
      <g>
        {/* 리더 라인: 점 → 대각선 → 가로선 */}
        <polyline
          points={`${ax},${ay} ${ex},${ey} ${hx},${hy}`}
          stroke="#086d36"
          strokeWidth={2}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* 점 */}
        <circle cx={ax} cy={ay} r={4} fill="#086d36" />

        {/* 라벨 텍스트 */}
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
      {center && (
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
            ...(center.style || {}),
          }}
        >
          {center.title ?? null}
          {center.value ?? null}
        </div>
      )}

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
