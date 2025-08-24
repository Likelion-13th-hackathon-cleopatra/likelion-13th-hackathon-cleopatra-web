import { useNavigate } from "react-router-dom";
import FilledButton from "../../components/analysisSelect/FilledButton";

export default function Analysis() {
    const navigate = useNavigate();

    return (
        <main className="relative min-h-[100svh] bg-grayscale-5">
            <div className="">
                <div className="absolute w-full top-[57vh] left-1/2 -translate-x-1/2">
                    <p className="text-center text-primary-green-80 text-[18px] leading-[27px] tracking-[-0.03em]">
                        사장님의 성공적인 시작을 돕기 위해<br/>상권에 딱 맞는 리포트를 준비해드릴게요.
                    </p>
                </div>
            </div>
            <div className="fixed left-1/2 -translate-x-1/2 w-full max-w-mobile px-[24px] bottom-[112px]">
                <FilledButton text="지역 상권 분석하기" onClick={() => navigate("/analysis/select")}/>
            </div>
        </main>
    );
}
