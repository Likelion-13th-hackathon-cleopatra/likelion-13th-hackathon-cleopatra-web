import type { FC, ReactNode } from "react";
import { won } from "../../../utils/number"; // Import won utility

type Props = {
  children?: ReactNode; // Make children optional
  incomeData: any; // Add incomeData prop
};

const IncomeLevelBox: FC<Props> = ({ children, incomeData }) => {
  return (
    <div className="bg-white p-[8px] rounded-[5px]">
      <h4 className="Head_Bold_14 text-primary-green">주민소득 수준</h4>
      <div className="mt-[6px]">
        <div className="flex items-center">
          <span className="Body_Bold_12 text-primary-green-80">소득구간</span>
          <span className="Sub_Regular_12 text-primary-green-80 ml-[6px]">{Number(incomeData.income_class_code)}구간</span>
        </div>
        <div className="flex items-center mt-[6px]"> {/* Added mt-[6px] for line break spacing */}
          <span className="Body_Bold_12 text-primary-green-80">월평균 소득 금액</span>
          <span className="Sub_Regular_12 text-primary-green-80 ml-[6px]">{won(incomeData.monthly_income_average).substring(1)}원</span>
        </div>
      </div>
      {children}
    </div>
  );
};

export default IncomeLevelBox;