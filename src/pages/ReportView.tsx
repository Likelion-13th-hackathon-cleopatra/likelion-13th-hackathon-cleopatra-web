import { useParams, useLocation } from "react-router-dom";
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

import { analysisApi } from "@/utils/api";
import { getAnonymousId } from "@/utils/anonymousId";

export default function ReportView() {
  const { id } = useParams();
  const location = useLocation();
  const [report, setReport] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // API에서 분석 결과 가져오기
  useEffect(() => {
    const fetchReport = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // location.state에서 전달된 데이터가 있으면 우선 사용
        if (location.state?.reportData) {
          console.log('location.state에서 데이터 사용:', location.state.reportData);
          setReport(location.state.reportData);
          setIsLoading(false);
          return;
        }

        if (id && id !== 'default') {
          // 실제 API 호출 - 리포트 상세 조회 API 사용
          const anonymousId = getAnonymousId();
          const result = await analysisApi.getReportDetail(anonymousId, id);
          console.log('리포트 상세 API 응답 전체:', result);
          console.log('리포트 상세 API 응답 data:', result.data);
          
          // API 응답 구조에 따라 데이터 설정
          if (result.data) {
            setReport(result.data);
          } else if (result.status === 'success') {
            // data가 없지만 성공 상태인 경우
            setReport(result);
          } else {
            // 데이터가 없는 경우
            throw new Error('API 응답에 데이터가 없습니다.');
          }
        } else {
          // default ID인 경우 에러 처리
          throw new Error('유효하지 않은 리포트 ID입니다.');
        }
      } catch (err) {
        console.error('Failed to fetch report:', err);
        setError('리포트를 불러오는데 실패했습니다.');
        // 에러 발생 시 report는 null로 유지
      } finally {
        setIsLoading(false);
      }
    };

    fetchReport();
  }, [id, location.state]);

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
    <div className="bg-grayscale-5">
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
