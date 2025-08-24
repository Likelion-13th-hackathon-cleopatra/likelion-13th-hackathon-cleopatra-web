// components/report/sections/Price.tsx
import SectionCard from "../primitives/SectionCard";
import ChartFrame from "../primitives/ChartFrame";
import type { FC } from "react";
import { wonInMan } from "@/utils/number";
import InnerCard2 from "../primitives/InnerCard2";
import AIInterpretationCard from "../primitives/AIInterpretationCard";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const humanQuarter = (k: string) => k.replace(/(\d{4})_(\d)_quarter/, "$1 Q$2");

const Price: FC<{ report: ReportRaw }> = ({ report }) => {
  const p = report.price;
  const trend = Object.entries(p.trading_volume).map(([k, v]) => ({
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
          <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[14px]">
              {/* 소형 업장 */}
              <div className="flex-1">
                <div className="flex flex-row justify-between items-center mb-[6px]">
                  <div className="Head_Bold_14 text-primary-green">
                    소형 업장
                  </div>
                  <div className="Body_Regular_10 text-grayscale-25">
                    50평 미만
                  </div>
                </div>
                <div className="Body_Bold_12 mb-[2px]">
                  평균값 <span className="ml-[6px] Sub_Regular_12">{wonInMan(p.small.small_average)}</span>
                </div>
                <div className="Body_Bold_12 mb-[6px]">
                  중위값 <span className="ml-[6px] Sub_Regular_12">{wonInMan(p.small.small_middle)}</span>
                </div>
                <div className="Body_Regular_10 text-grayscale-25">
                  근거 거래 데이터 개수: {p.small.small_count}건
                </div>
              </div>

              {/* 구분선 */}
              <div className="w-[1px] bg-[#CFF0DE]"></div>

              {/* 대형 업장 */}
              <div className="flex-1">
                <div className="flex flex-row justify-between items-center mb-[6px]">
                  <div className="Head_Bold_14 text-primary-green">
                    대형 업장
                  </div>
                  <div className="Body_Regular_10 text-grayscale-25">
                    50평 초과
                  </div>
                </div>
                <div className="Body_Bold_12 mb-[2px]">
                  평균값 <span className="ml-[6px] Sub_Regular_12">{wonInMan(p.big.big_average)}</span>
                </div>
                <div className="Body_Bold_12 mb-[6px]">
                  중위값 <span className="ml-[6px] Sub_Regular_12">{wonInMan(p.big.big_middle)}</span>
                </div>
                <div className="Body_Regular_10 text-grayscale-25">
                  근거 거래 데이터 개수: {p.big.big_count}건
                </div>
              </div>
            </div>
            <AIInterpretationCard className="mt-[10px]">
              <div className="Body_Regular_12 text-grayscale-65">
                {p.description_price.value_average}
              </div>
            </AIInterpretationCard>
          </div>
        </InnerCard2>
        <InnerCard2 title="단위 면적당 평균 실거래가" subtitle="면적 대비 표준화">
        <div className="flex flex-col gap-[10px]">
            <div className="flex gap-[14px]">
              {/* 창업 지역 평균 */}
              <div className="flex-1">
                <div className="flex flex-row justify-between items-center mb-[6px]">
                  <div className="Head_Bold_14 text-primary-green">
                    창업 지역 평균
                  </div>
                </div>
                <div className="Body_Bold_12 mb-[2px]">
                  평균값 <span className="ml-[6px] Sub_Regular_12">{wonInMan(p.price_per_meter)}</span>
                </div>
                <div className="Body_Bold_12 mb-[6px]">
                  중위값 <span className="ml-[6px] Sub_Regular_12">{wonInMan(p.price_per_pyeong)}</span>
                </div>
                <div className="Body_Regular_10 text-grayscale-25">
                  근거 거래 데이터 개수: {p.small.small_count}건
                </div>
              </div>

              {/* 구분선 */}
              <div className="w-[1px] bg-[#CFF0DE]"></div>

              {/* 서울 평균 */}
              <div className="flex-1">
                <div className="flex flex-row justify-between items-center mb-[6px]">
                  <div className="Head_Bold_14 text-primary-green">
                    서울 평균
                  </div>
                </div>
                <div className="Body_Bold_12 mb-[2px]">
                  평균값 <span className="ml-[6px] Sub_Regular_12">5,500만 원</span>
                </div>
                <div className="Body_Bold_12 mb-[6px]">
                  중위값 <span className="ml-[6px] Sub_Regular_12">5,200만 원</span>
                </div>
                <div className="Body_Regular_10 text-grayscale-25">
                  근거 거래 데이터 개수: 1,200건
                </div>
              </div>
            </div>
            <AIInterpretationCard className="mt-[10px]">
              <div className="Body_Regular_12 text-grayscale-65">
                {p.description_price.value_pyeong}
              </div>
            </AIInterpretationCard>
          </div>
        </InnerCard2>
        <InnerCard2 title="거래량 추이" subtitle="월별 / 분기별 거래 건수">
          <div className="flex flex-col gap-[10px]">
          </div>
        </InnerCard2>
      </div>
    </SectionCard>
  );
};

export default Price;
