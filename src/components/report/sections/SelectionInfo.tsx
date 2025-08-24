import type { FC } from "react";

type ReportRaw = typeof import("@/mock/dummyReport").dummyReport.data;

const SelectionInfo: FC<{ report: ReportRaw }> = ({ report }) => {
  return (
    <section className="bg-white rounded-[15px] px-[16px] py-[18px] shadow-sm">
      <h2 className="Head_Bold_14 text-primary-green40 mb-[12px]">
        선택한 업종과 지역
      </h2>
          <div className="flex flex-col gap-[10px]">
          {/* 업종 정보 태그 */}
          <div className="inline-flex items-center bg-[#CFF0DE] rounded-[100px] px-[12px] py-[4px] w-fit">
            <span className="Sub_Bold_12 text-[#086D35] space-x-[6px]">
              <span>{report.primary || "음식점업"}</span>
              <span>•</span>
              <span>{report.secondary || "한식"}</span>
            </span>
          </div>
          {/* 지역 정보 태그 */}
          <div className="inline-flex items-center bg-[#CFF0DE] rounded-[100px] px-[12px] py-[4px] w-fit">
            <span className="Sub_Bold_12 text-[#086D35]">
              {`서울시 ${report.district || "노원구"} ${report.sub_neighborhood || "공릉1동"}`.split(' ').map((part, index, array) => (
                <span key={index}>
                  <span>{part}</span>
                  {index < array.length - 1 && (
                    <>
                      <span className="inline-block w-[6px]"></span>
                      <span>•</span>
                      <span className="inline-block w-[6px]"></span>
                    </>
                  )}
                </span>
              ))}
            </span>
                      </div>
        </div>
    </section>
  );
};

export default SelectionInfo;