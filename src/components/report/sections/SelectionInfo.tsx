import type { FC } from "react";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const SelectionInfo: FC<{ report: ReportRaw }> = ({ report }) => {
  return (
    <section className="bg-white rounded-[15px] px-4 py-[18px] shadow-sm">
      <h2 className="Head_Bold_16 text-primary-green40 mb-4">
        📍 분석 대상 정보
      </h2>
      
      <div className="grid grid-cols-1 gap-4">
        {/* 선택한 업종 정보 */}
        <div className="bg-gradient-to-r from-primary-green/10 to-primary-green/5 rounded-[12px] px-4 py-[16px] border-l-4 border-primary-green">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] bg-primary-green/20 rounded-[10px] flex items-center justify-center">
              <span className="text-lg">🍽️</span>
            </div>
            <div className="flex-1">
              <h3 className="Sub_Bold_14 text-primary-green40 mb-1">
                창업 업종
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="inline-block bg-primary-green/20 text-primary-green40 px-3 py-1 rounded-[20px] Sub_Bold_12">
                  {report.business_type || "음식점업"}
                </span>
                <span className="inline-block bg-primary-green/10 text-primary-green40 px-3 py-1 rounded-[20px] Body_Regular_12">
                  {report.sub_category || "한식"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 선택한 지역 정보 */}
        <div className="bg-gradient-to-r from-blue-50 to-blue-25 rounded-[12px] px-4 py-[16px] border-l-4 border-blue-400">
          <div className="flex items-center gap-3">
            <div className="w-[40px] h-[40px] bg-blue-100 rounded-[10px] flex items-center justify-center">
              <span className="text-lg">📍</span>
            </div>
            <div className="flex-1">
              <h3 className="Sub_Bold_14 text-blue-600 mb-1">
                창업 예정 지역
              </h3>
              <div className="flex flex-wrap gap-2 items-center">
                <span className="inline-block bg-blue-100 text-blue-600 px-3 py-1 rounded-[20px] Sub_Bold_12">
                  서울시
                </span>
                <span className="text-gray-400">•</span>
                <span className="inline-block bg-blue-50 text-blue-600 px-3 py-1 rounded-[20px] Sub_Bold_12">
                  {report.district || "노원구"}
                </span>
                <span className="text-gray-400">•</span>
                <span className="inline-block bg-blue-25 text-blue-600 px-3 py-1 rounded-[20px] Body_Regular_12">
                  {report.sub_neighborhood || "공릉1동"}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 분석 범위 정보 */}
        <div className="bg-gray-50 rounded-[12px] px-4 py-[14px]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-primary-green rounded-full"></span>
              <span className="Body_Regular_12 text-grayscale-70">분석 반경</span>
            </div>
            <span className="Sub_Bold_12 text-primary-green40">500m</span>
          </div>
          
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
              <span className="Body_Regular_12 text-grayscale-70">분석 기간</span>
            </div>
            <span className="Sub_Bold_12 text-blue-600">최근 1년</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectionInfo;