// components/report/primitives/ChartFrame.tsx
import { type ReactNode } from "react";

export default function ChartFrame({
  children,
  caption,
}: {
  children: ReactNode;
  caption?: string;
}) {
  return (
    <div className="chart-frame">
      <div className="chart-frame__canvas">{children}</div>
      {caption && <p className="chart-frame__caption">{caption}</p>}
    </div>
  );
}
