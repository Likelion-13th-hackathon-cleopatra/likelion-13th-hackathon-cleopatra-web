import type { FC } from "react";

type Props = {
  malePercent: number; // 예: 48.1
  femalePercent: number; // 예: 51.9
  className?: string;
  /** 바의 높이(px). 기본 30 */
  height?: number;
};

/**
 * 디자인: 한 줄의 라운드 그린 바 + 아래 좌/우에 '남성/여성'과 퍼센트
 * 스크린샷과 동일한 단색 pill 형태로 표현합니다.
 */
const GenderRatioBar: FC<Props> = ({
  malePercent,
  femalePercent,
  className = "",
  height = 30, // Changed height to 30
}) => {
  const male = Number(malePercent) || 0;
  const female = Number(femalePercent) || 0;

  // Primary green color from tailwind.config.js
  const primaryGreenHex = "#0DB659";
  const primaryGreenRgb = "13, 182, 89"; // RGB equivalent of #0DB659

  const maleColor =
    male > female ? primaryGreenHex : `rgba(${primaryGreenRgb}, 0.6)`;
  const femaleColor =
    female > male ? primaryGreenHex : `rgba(${primaryGreenRgb}, 0.6)`;

  return (
    <div className={className} aria-label="성별 인구 비율">
      {/* Split pill bar */}
      <div
        className="flex w-full rounded-full overflow-hidden"
        style={{ height }}
      >
        <div
          style={{ width: `${male.toFixed(1)}%`, backgroundColor: maleColor }}
          role="img"
          aria-label={`남성 ${male.toFixed(1)}%`}
        />
        <div
          style={{
            width: `${female.toFixed(1)}%`,
            backgroundColor: femaleColor,
          }}
          role="img"
          aria-label={`여성 ${female.toFixed(1)}%`}
        />
      </div>

      {/* 라벨/수치 */}
      <div className="mt-[6px] flex items-end justify-between text-primary-green-40">
        {" "}
        {/* Changed mt-2 to mt-[6px] */}
        <div className="text-left">
          <div className="Body_Regular_10">남성</div>{" "}
          {/* Changed text-xs to Body_Regular_10 */}
          <div className="Body_Bold_12 leading-none">
            {" "}
            {/* Changed text-base font-extrabold to Body_Bold_12 */}
            {male.toFixed(1)}%
          </div>
        </div>
        <div className="text-right">
          <div className="Body_Regular_10">여성</div>{" "}
          {/* Changed text-xs to Body_Regular_10 */}
          <div className="Body_Bold_12 leading-none">
            {" "}
            {/* Changed text-base font-extrabold to Body_Bold_12 */}
            {female.toFixed(1)}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderRatioBar;
