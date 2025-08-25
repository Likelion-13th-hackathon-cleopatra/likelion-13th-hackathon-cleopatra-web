import { type ReactNode } from "react";
import SummaryIcon from "../../../assets/icons/report/summary-icon.svg?react";
import Icon1 from "../../../assets/icons/report/1_icon.svg?react";
import Icon2 from "../../../assets/icons/report/2_icon.svg?react";
import Icon3 from "../../../assets/icons/report/3_icon.svg?react";

type DescriptionSummary = {
  total_description: string;
  line_1: string;
  line_2: string;
  line_3: string;
};

type Props = {
  description: DescriptionSummary;
  className?: string;
};

// ** 안의 텍스트를 파싱하는 함수
const parseTextWithBold = (text: string | null | undefined): ReactNode => {
  // text가 null, undefined, 또는 빈 문자열인 경우 기본 텍스트 반환
  if (!text || typeof text !== 'string') {
    return (
      <span className="Body_Regular_12" style={{ color: '#555554' }}>
        데이터를 불러오는 중입니다...
      </span>
    );
  }
  
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  
  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      // ** 안의 텍스트는 FFC251 색상과 Body_Bold_12
      const boldText = part.slice(2, -2);
      return (
        <span key={index} className="Body_Bold_12" style={{ color: '#CC9B41' }}>
          {boldText}
        </span>
      );
    } else {
      // 일반 텍스트는 F3F3F1 색상과 Body_Regular_12
      return (
        <span key={index} className="Body_Regular_12" style={{ color: '#555554' }}>
          {part}
        </span>
      );
    }
  });
};

export default function AISummaryCard({ description, className = "" }: Props) {
  // description이 없거나 필수 필드가 없는 경우 기본 메시지 표시
  if (!description || !description.total_description) {
    return (
      <div
        className={`rounded-[15px] border border-[#FFC251] bg-[#FFF] px-[16px] py-[18px] ${className}`}
      >
        <div className="flex items-center gap-1.5 mb-[12px]">
          <SummaryIcon /> 
          <span className="Head_Bold_14 text-sub-yellow40">보고서 전체 AI 핵심 요약</span>
        </div>
        <div className="rounded-[15px] border border-[#FFEBC7] bg-[#FFF9EE] p-[14px]">
          <span className="Body_Regular_12" style={{ color: '#555554' }}>
            AI 요약 데이터를 불러오는 중입니다...
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`rounded-[15px] border border-[#FFC251] bg-[#FFF] px-[16px] py-[18px] ${className}`}
    >
      <div className="flex items-center gap-1.5 mb-[12px]"> {/* Header part */}
        <SummaryIcon /> 
        <span className="Head_Bold_14 text-sub-yellow40">보고서 전체 AI 핵심 요약</span>
      </div>
      <div className="rounded-[15px] border border-[#FFEBC7] bg-[#FFF9EE] p-[14px] space-y-[6px]"> {/* Body part */}
        {/* Total Description */}
        <div>
          {parseTextWithBold(description.total_description)}
        </div>
        
        {/* Line 1 with 1_icon */}
        <div className="flex items-start gap-[4px]">
          <Icon1 className="flex-shrink-0 mt-[3.5px]" />
          <div>
            {parseTextWithBold(description.line_1)}
          </div>
        </div>
        
        {/* Line 2 with 2_icon */}
        <div className="flex items-start gap-[4px]">
          <Icon2 className="flex-shrink-0 mt-[3.5px]" />
          <div>
            {parseTextWithBold(description.line_2)}
          </div>
        </div>
        
        {/* Line 3 with 3_icon */}
        <div className="flex items-start gap-[4px]">
          <Icon3 className="flex-shrink-0 mt-[3.5px] " />
          <div>
            {parseTextWithBold(description.line_3)}
          </div>
        </div>
      </div>
    </div>
  );
}
