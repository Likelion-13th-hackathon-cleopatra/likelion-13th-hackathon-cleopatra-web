import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import DownloadIcon from "@/assets/icons/report/download.svg?react";

export default function ReportHeader() {
  const nav = useNavigate();

  const handleBack = () => {
    nav(-1); // Go back to the previous page
  };

  const handleDownload = async () => {
    const reportContent = document.getElementById("report-content");
    if (!reportContent) {
      console.error("PDF로 저장할 콘텐츠를 찾을 수 없습니다.");
      return;
    }

    try {
      const canvas = await html2canvas(reportContent, { scale: 2 });
      const imageData = canvas.toDataURL("image/png");

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width, canvas.height],
      });

      pdf.addImage(imageData, "PNG", 0, 0, canvas.width, canvas.height);
      pdf.save("report.pdf");
    } catch (error) {
      console.error("PDF 생성 중 오류가 발생했습니다.", error);
    }
  };

  return (
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
  );
}
