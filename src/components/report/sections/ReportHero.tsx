import type { FC } from "react";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const formatDate = (isoString: string) => {
  const date = new Date(isoString);
  const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return new Intl.DateTimeFormat("ko-KR", options).format(date);
};

const ReportHero: FC<{ report: ReportRaw }> = ({ report }) => {
  const formattedDate = formatDate(report.created_at);

  return (
    <section>
      <h2 className="font-bold text-primary-green80 leading-[1.4] tracking-[-0.03em]">
        사장님의 데이터를 기반으로
        <br />
        지역과 상권 분석을 진행했어요.
      </h2>
      <p className="mt-2 Body_Regular_10 text-grayscale-45">
        보고서 생성일시 | {formattedDate}
      </p>
    </section>
  );
};

export default ReportHero;