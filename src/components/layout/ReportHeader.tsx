import { useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import RejectDownloadModal from "../analysisSelect/RejectDownloadModal";
import DownloadIcon from "../../assets/icons/report/download.svg?react";

export default function ReportHeader() {
  const nav = useNavigate();
  const location = useLocation();
  const [isRejectModalOpen, setIsRejectModalOpen] = useState(false);

  const handleBack = () => {
    // from 정보에 따라 올바른 페이지로 이동
    if (location.state?.from === 'analysis') {
      nav('/analysis'); // 지역 분석으로 이동
    } else if (location.state?.from === 'my-storage') {
      nav('/my-storage'); // 내 보관함으로 이동
    } else {
      nav(-1); // 기본적으로 이전 페이지로 이동
    }
  };

  const handleDownload = () => {
    // 다운로드 거부 모달 열기
    setIsRejectModalOpen(true);
  };

  const closeRejectModal = () => {
    setIsRejectModalOpen(false);
  };

  return (
    <>
      <header className="sticky top-0 z-10 flex h-[60px] items-center justify-between bg-grayscale-5 px-6">
        <button onClick={handleBack} aria-label="뒤로 가기">
          <svg
            width="10.74"
            height="18.77"
            viewBox="0 0 12 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.5382 1.34619L1.53821 10.3462L10.5382 19.3462"
              stroke="#086D35"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <h1 className="text-sm font-bold text-primary-green">리포트 조회</h1>
        <button onClick={handleDownload} aria-label="다운로드">
          <DownloadIcon width="24" height="24" />
        </button>
      </header>

      {/* 다운로드 거부 모달 */}
      <RejectDownloadModal 
        isOpen={isRejectModalOpen}
        onClose={closeRejectModal}
      />
    </>
  );
}
