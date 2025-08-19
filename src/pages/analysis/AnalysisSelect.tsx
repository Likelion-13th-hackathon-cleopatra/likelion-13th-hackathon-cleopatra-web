import { useState} from "react";
import { useNavigate } from "react-router-dom";
import FilledButton from "../../components/common/FilledButton";
import SelectButton from "../..//components/common/SelectButton";

export default function AnalysisSelect() {
  const navigate = useNavigate();

  return (
    <main className="relative min-h-[100svh] bg-grayscale-white px-[24px] pt-[36px] pb-[200px]">
      {/* 섹션 1: 창업 업종 */}
      <section className="max-w-mobile mx-auto">
        <h2 className="Head_Bold_16 mb-[14px] text-primary-green">
          창업 업종
        </h2>

        <div className="flex flex-row -cols-2 gap-[10px]">
          <SelectButton
            label="창업 업종"
            onClick={() => console.log("업종 선택")}
          />
          <SelectButton
            label="업종 하위 구분"
            onClick={() => console.log("하위 업종 선택")}
          />
        </div>
      </section>

      {/* 섹션 간 간격 */}
      <div className="h-[30px]" />

      {/* 섹션 2: 창업 예정 지역 */}
      <section className="max-w-mobile mx-auto">
        <h2 className="Head_Bold_16 mb-[14px] text-primary-green">
          창업 예정 지역
        </h2>

        <div className="flex flex-row gap-[10px]">
          <SelectButton
            label="시/도"
            onClick={() => console.log("시/도 선택")}
          
          />
          <SelectButton
            label="시/군/구"
            onClick={() => console.log("시/군/구 선택")}
  
          />
          <SelectButton
            label="읍/면/동"
            onClick={() => console.log("읍/면/동 선택")}
          
          />
        </div>
      </section>

      {/* 하단 고정 CTA (BottomNavBar 88px + 24px) */}
      <div className="fixed left-1/2 -translate-x-1/2 w-full max-w-mobile px-[24px] bottom-[112px]">
        <FilledButton text="분석하기" onClick={() => navigate("/analysis/result")} />
      </div>
    </main>
  );
}