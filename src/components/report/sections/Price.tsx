// components/report/sections/Price.tsx
import SectionCard from "../primitives/SectionCard";
import type { FC } from "react";

import InnerCard2 from "../primitives/InnerCard2";
import AIInterpretationCard from "../primitives/AIInterpretationCard";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const humanQuarter = (k: string) => k.replace(/(\d{4})_(\d)_quarter/, "$1 Q$2");

const Price: FC<{ report: ReportRaw }> = ({ report }) => {
  // price 데이터가 없거나 필요한 필드가 없는 경우 기본 UI 표시
  if (!report.price || !report.price.small || !report.price.big || !report.price.trading_volume) {
    return (
      <SectionCard
        title={"동네시세"}
        titleClassName="Head_Bold_14 text-primary-green-40"
        initialIsOpen={true}
      >
        <div className="flex flex-col gap-[16px]">
          <InnerCard2 title="부동산 평균 거래값" subtitle="거래 건별 단가 산출 후 집계">
            <div className="text-center py-8">
              <p className="text-gray-500">가격 데이터를 불러오는 중입니다...</p>
            </div>
          </InnerCard2>
        </div>
      </SectionCard>
    );
  }

  const p = report.price;
  const trend = Object.entries(p.trading_volume || {}).map(([k, v]) => ({
    quarter: humanQuarter(k),
    value: v as number,
  }));

  return (
    <SectionCard
      title={"동네시세"}
      titleClassName="Head_Bold_14 text-primary-green-40"
      initialIsOpen={true}
    >
      <div className="flex flex-col gap-[16px]">
        <InnerCard2 title="부동산 평균 거래값" subtitle="거래 건별 단가 산출 후 집계">
          <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[6px]">
              {/* 소형 업장 */}
              <div className="flex-1 p-[8px]">
                <div className="flex flex-row justify-between items-center mb-[6px]">
                  <div className="Head_Bold_14 text-primary-green">
                    소형 업장
                  </div>
                  <div className="Body_Regular_10 text-grayscale-25">
                    50평 미만
                  </div>
                </div>
                <div className="Body_Bold_12 mb-[2px]">
                  평균값 <span className="ml-[6px] Sub_Regular_12">{(p.small.small_average || 0).toLocaleString("ko-KR")}만원</span>
                </div>
                <div className="Body_Bold_12 mb-[6px]">
                  중위값 <span className="ml-[6px] Sub_Regular_12">{(p.small.small_middle || 0).toLocaleString("ko-KR")}만원</span>
                </div>
                <div className="Body_Regular_10 text-grayscale-25">
                  근거 거래 데이터 개수: {p.small.small_count}건
                </div>
              </div>

              {/* 구분선 */}
              <div className="w-[1px] bg-[#CFF0DE] my-[8px]"></div>

              {/* 대형 업장 */}
              <div className="flex-1 p-[8px]">
                <div className="flex flex-row justify-between items-center mb-[6px]">
                  <div className="Head_Bold_14 text-primary-green">
                    대형 업장
                  </div>
                  <div className="Body_Regular_10 text-grayscale-25">
                    50평 초과
                  </div>
                </div>
                <div className="Body_Bold_12 mb-[2px]">
                  평균값 <span className="ml-[6px] Sub_Regular_12">{(p.big.big_average || 0).toLocaleString("ko-KR")}만원</span>
                </div>
                <div className="Body_Bold_12 mb-[6px]">
                  중위값 <span className="ml-[6px] Sub_Regular_12">{(p.big.big_middle || 0).toLocaleString("ko-KR")}만원</span>
                </div>
                <div className="Body_Regular_10 text-grayscale-25">
                  근거 거래 데이터 개수: {p.big.big_count}건
                </div>
              </div>
            </div>
            <AIInterpretationCard className="mt-[2px]">
              <div className="Body_Regular_12 text-grayscale-65">
                {p.description_price?.value_average || '부동산 평균 거래값 분석 데이터를 불러오는 중입니다...'}
              </div>
            </AIInterpretationCard>
          </div>
        </InnerCard2>
        <InnerCard2 title="단위 면적당 평균 실거래가" subtitle="면적 대비 표준화">
        <div className="flex flex-col gap-[8px]">
            <div className="flex gap-[6px]">
              {/* 창업 지역 평균 */}
              <div className="flex-1 p-[8px]">
                <div className="flex flex-row justify-between items-center mb-[6px]">
                  <div className="Head_Bold_14 text-primary-green">
                    창업 지역 평균
                  </div>
                </div>
                <div className="Body_Bold_12 mb-[2px]">
                  ㎡당 <span className="ml-[6px] Sub_Regular_12">{(p.price_per_meter || 0).toLocaleString("ko-KR")}만원</span>
                </div>
                <div className="Body_Bold_12 mb-[6px]">
                  평당 <span className="ml-[6px] Sub_Regular_12">{(p.price_per_pyeong || 0).toLocaleString("ko-KR")}만원</span>
                </div>
              </div>

              {/* 구분선 */}
              <div className="w-[1px] bg-[#CFF0DE] my-[8px]"></div>

              {/* 서울 평균 */}
              <div className="flex-1 p-[8px]">
                <div className="flex flex-row justify-between items-center mb-[6px]">
                  <div className="Head_Bold_14 text-primary-green">
                    서울 평균
                  </div>
                </div>
                <div className="Body_Bold_12 mb-[2px]">
                  ㎡당 <span className="ml-[6px] Sub_Regular_12">1,212만 원</span>
                </div>
                <div className="Body_Bold_12 mb-[6px]">
                  평당 <span className="ml-[6px] Sub_Regular_12">4,000만 원</span>
                </div>
              </div>
            </div>
            <AIInterpretationCard className="mt-[2px]">
              <div className="Body_Regular_12 text-grayscale-65">
                {p.description_price?.value_pyeong || '단위 면적당 평균 실거래가 분석 데이터를 불러오는 중입니다...'}
              </div>
            </AIInterpretationCard>
          </div>
        </InnerCard2>
        <InnerCard2 title="거래량 추이" subtitle="월별 / 분기별 거래 건수">
          <div className="flex flex-col gap-[10px] px-[10px]">
            {/* 거래량 그래프 */}
            <div className="relative h-[110px] w-full">
              {/* 배경 격자선 */}
              <div className="absolute inset-0 flex flex-col justify-between">
                {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
                  <div key={i} className="border-t border-dashed border-[#F3F3F1]"/>
                ))}
              </div>
              
              {/* 그래프 영역 */}
              <div className="absolute left-[20px] right-[0px] top-0 bottom-0">
                {/* 데이터 포인트와 선 */}
                <svg className="w-full h-full" viewBox="0 0 220 110" preserveAspectRatio="none">
                  {trend.length > 1 && trend.map((item, index) => {
                    if (index === 0) return null;
                    
                    const prevItem = trend[index - 1];
                    const maxValue = Math.max(...trend.map(t => t.value));
                    const minValue = Math.min(...trend.map(t => t.value));
                    const range = maxValue - minValue || 1;
                    
                    // X 좌표: 균등하게 분배 (220은 viewBox 너비, 20은 여백)
                    const x1 = (index - 1) * 55 + 20;
                    const x2 = index * 55 + 20;
                    
                    // Y 좌표: 데이터 값에 따라 계산 (110은 viewBox 높이, 20은 여백)
                    const y1 = 110 - 20 - ((prevItem.value - minValue) / range) * 70;
                    const y2 = 110 - 20 - ((item.value - minValue) / range) * 70;
                    
                    return (
                      <line 
                        key={`line-${index}`}
                        x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="#0DB659" strokeWidth="4" fill="none"
                      />
                    );
                  })}
                  
                  {/* 데이터 포인트 */}
                  {trend.map((item, index) => {
                    const maxValue = Math.max(...trend.map(t => t.value));
                    const minValue = Math.min(...trend.map(t => t.value));
                    const range = maxValue - minValue || 1;
                    
                    const x = index * 55 + 20;
                    const y = 110 - 20 - ((item.value - minValue) / range) * 70;
                    
                    return (
                      <circle 
                        key={`point-${index}`}
                        cx={x} cy={y} r="5.8" fill="#0DB659" 
                      />
                    );
                  })}
                </svg>
                
                {/* X축 라벨 */}
                <div className="absolute inset-0">
                  {trend.map((item, index) => {
                    const maxValue = Math.max(...trend.map(t => t.value));
                    const minValue = Math.min(...trend.map(t => t.value));
                    const range = maxValue - minValue || 1;
                    const y = 110 - 20 - ((item.value - minValue) / range) * 70;
                    
                    return (
                      <div key={`label-${index}`}>
                       <span 
                         className="text-center absolute transform -translate-x-1/2 Body_Regular_10 text-[#086D35] z-0"
                         style={{ 
                           left: `${((index * 55 + 20) / 220) * 100}%`,
                           top: `${(y + 10) * 0.91}%`,
                           position: 'absolute',
                           ...(index === 3 && { left: '85%' }) // 2025 2분기 위치 조정
                         }}
                       >
                         {item.quarter === "2024 Q3" ? "2024 Q3" : 
                          item.quarter === "2024 Q4" ? "2024 Q4" : 
                          item.quarter === "2025 Q1" ? "2025 Q1" : 
                          item.quarter === "2025 Q2" ? "2025 Q2" : item.quarter}
                       </span>
                       <span 
                         className="text-center absolute transform -translate-x-1/2 Sub_Bold_10 text-[#086D35] z-0"
                         style={{ 
                           left: `${((index * 55 + 20) / 220) * 100}%`,
                           top: `${(y + 25) * 0.91}%`,
                           position: 'absolute',
                           ...(index === 3 && { left: '85%' }) // 2025 2분기 위치 조정
                         }}
                       >
                         {item.value.toLocaleString()}건
                       </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          <AIInterpretationCard className="mt-[25.9px]">
              <div className="Body_Regular_12 text-grayscale-65">
                {p.description_price?.volume || '거래량 추이 분석 데이터를 불러오는 중입니다...'}
              </div>
          </AIInterpretationCard>
        </InnerCard2>
      </div>
    </SectionCard>
  );
};

export default Price;
