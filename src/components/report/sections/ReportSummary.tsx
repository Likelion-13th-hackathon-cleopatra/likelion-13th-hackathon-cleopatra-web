import type { FC } from "react";
import AISummaryCard from "../primitives/AISummaryCard";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const ReportSummary: FC<{ report: ReportRaw }> = ({ report }) => {
  return (
    <AISummaryCard description={report.description_summary} />
  );
};

export default ReportSummary;