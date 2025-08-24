import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ReportHeader from "@/components/layout/ReportHeader";
import ReportSummary from "@/components/report/sections/ReportSummary";
import SelectionInfo from "@/components/report/sections/SelectionInfo";
import ReportHero from "@/components/report/sections/ReportHero";
import Keywords from "@/components/report/sections/Keywords";
import Population from "@/components/report/sections/Population";
import Price from "@/components/report/sections/Price";
import IncomeConsumption from "@/components/report/sections/IncomeConsumption";
import Strategy from "@/components/report/sections/Strategy";
import { dummyReport } from "@/mock/dummyReport";
import { analysisApi } from "@/utils/api";

export default function ReportView() {
  const { id } = useParams();
  const [report, setReport] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // API에서 분석 결과 가져오기
  useEffect(() => {
    const fetchReport = async () => {
      try {
        setIsLoading(true);
        setError(null);

        if (id && id !== 'default') {
          // 실제 API 호출
          const result = await analysisApi.getAnalysisResult(id);
          setReport(result.data || result);
        } else {
          // Mock 데이터 사용 (개발/테스트용)
          setReport(dummyReport.data);
        }
      } catch (err) {
        console.error('Failed to fetch report:', err);
        setError('리포트를 불러오는데 실패했습니다.');
        // 에러 발생 시 Mock 데이터로 폴백
        setReport(dummyReport.data);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReport();
  }, [id]);

  // 로딩 중일 때
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-grayscale-5">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-green mx-auto mb-4"></div>
          <p className="text-gray-600">리포트를 불러오는 중...</p>
        </div>
      </div>
    );
  }

  // 에러가 있고 Mock 데이터도 없는 경우
  if (error && !report) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-grayscale-5">
        <div className="text-center">
          <p className="text-red-600 mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="px-4 py-2 bg-primary-green text-white rounded-lg"
          >
            다시 시도
          </button>
        </div>
      </div>
    );
  }

  // 리포트 데이터가 없는 경우
  if (!report) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-grayscale-5">
        <div className="text-center">
          <p className="text-gray-600">리포트 데이터를 찾을 수 없습니다.</p>
        </div>
      </div>
    );
  }

  return (
    <div>
      <ReportHeader />
      <main id="report-content" className="report-view flex flex-col pt-[10px] px-6 gap-[30px] bg-grayscale-5 pb-[190px]">
        <ReportHero report={report} />
        <ReportSummary report={report} />
        <SelectionInfo report={report} />
        <Keywords report={report} />
        <Population report={report} />
        <Price report={report} />
        <IncomeConsumption report={report} />
        <Strategy report={report} />
      </main>
    </div>
  );
}
