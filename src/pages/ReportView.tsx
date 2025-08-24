import { useParams } from "react-router-dom";
import ReportHeader from "@/components/layout/ReportHeader";
import ReportHero from "@/components/report/sections/ReportHero";
import Keywords from "@/components/report/sections/Keywords";
import Population from "@/components/report/sections/Population";
import Price from "@/components/report/sections/Price";
import IncomeConsumption from "@/components/report/sections/IncomeConsumption";
import Strategy from "@/components/report/sections/Strategy";
import { dummyReport } from "@/mock/dummyReport";

export default function ReportView() {
  const { id } = useParams(); // 추후 API 연동 시 사용
  const raw = dummyReport.data; // 원본 스키마 그대로 사용

  // 로딩/에러 처리 훗날 추가 가능
  return (
    <div className="bg-grayscale-5">
      <ReportHeader />
      <main id="report-content" className="report-view stack mt-[10px] px-6 gap-[30px]">
        <ReportHero report={raw} />
        <Keywords report={raw} />
        <Population report={raw} />
        <Price report={raw} />
        <IncomeConsumption report={raw} />
        <Strategy report={raw} />
      </main>
    </div>
  );
}
