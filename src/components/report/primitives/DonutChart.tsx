import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { CSSProperties, ReactNode } from "react";

export type DonutDatum = { label: string; value: number };

export type DonutChartProps = {
  data: DonutDatum[];
  colors?: string[];
  innerRadius?: number;
  outerRadius?: number;
  clockwise?: boolean;
  /** 바깥(리더 라인)으로 뺄 라벨들 */
  outerLabelSet?: Set<string>;
  /** 중앙 컨텐츠(선택) */
  center?: { title?: ReactNode; value?: ReactNode; style?: CSSProperties };
  rotateDeg?: number;
  height?: number;
  /** 리더(바깥 라벨) 파라미터 — radial 전용 */
  leader?: {
    elbow?: number; // 섹터 밖 짧은 대각선 길이
    tickLen?: number; // 가로로 아주 짧게
    textPad?: number; // 텍스트 좌우 여백
    textOffset?: number; // 텍스트 세로 보정
    // baseline?: "radial" | "top"  // (호환 위해 남겨도 되지만, 구현은 radial만)
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
  height = 245,
  leader,
}: DonutChartProps) {
  // 기본값 (?., ?? 없이 안전)
  const elbow = leader && leader.elbow !== undefined ? leader.elbow : 6;
  const tickLen = leader && leader.tickLen !== undefined ? leader.tickLen : 4;
  const textPad = leader && leader.textPad !== undefined ? leader.textPad : 6;
  const textOffset =
    leader && leader.textOffset !== undefined ? leader.textOffset : 3;

  const baseStart = clockwise ? 90 : 0;
  const baseEnd = clockwise ? -270 : 360;
  const startAngle = baseStart + rotateDeg;
  const endAngle = baseEnd + rotateDeg;

  // 내부 라벨(섹터 중앙)
  const renderInnerLabel = (props: any) => {
    const { cx, cy, midAngle, innerRadius, outerRadius, percent, payload } =
      props;
    if (outerLabelSet && outerLabelSet.has(String(payload.label).trim()))
      return null;

    const r = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + r * Math.cos(-midAngle * RAD);
    const y = cy + r * Math.sin(-midAngle * RAD);

    return (
      <text
        x={x}
        y={y}
        fill="#032412"
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

  // 바깥 라벨: 항상 짧은 radial (틱 + 텍스트), 화면 가장자리 클램프
  const renderOuterLabel = (props: any) => {
    const { cx, cy, midAngle, outerRadius, percent, payload, viewBox } = props;
    const label = String(payload.label).trim();
    if (!(outerLabelSet && outerLabelSet.has(label))) return null;

    const angle = -midAngle * RAD;
    const isLeft = Math.cos(angle) < 0;

    // 도넛 외곽 → 짧은 대각선 끝
    const ax = cx + (outerRadius + 0) * Math.cos(angle);
    const ay = cy + (outerRadius + 0) * Math.sin(angle);
    const ex = cx + (outerRadius + elbow) * Math.cos(angle);
    const ey = cy + (outerRadius + elbow) * Math.sin(angle);

    // 대각선 끝에서 아주 짧게 가로 '틱'
    const hx = ex + (isLeft ? -tickLen : tickLen);
    const hy = ey;

    // 텍스트 좌표 + 좌/우 경계 클램프
    const rawTextX = hx + (isLeft ? -textPad : textPad);
    const rawTextY = hy + textOffset;
    const viewW =
      viewBox && typeof viewBox.width === "number" ? viewBox.width : cx * 2;
    const leftEdge = 8,
      rightEdge = viewW - 8;
    const textX =
      rawTextX < leftEdge + 2
        ? leftEdge + 2
        : rawTextX > rightEdge - 2
        ? rightEdge - 2
        : rawTextX;
    const textY = rawTextY;
    const anchor: "start" | "end" = isLeft ? "end" : "start";

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
            {label}
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
        height,
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
          {center.title}
          {center.value}
        </div>
      )}

      <ResponsiveContainer>
        <PieChart>
          {/* 바깥 라벨 전용 (섹터 색은 투명) */}
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
          {/* 내부 색상 + 내부 라벨 */}
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
