import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../components/icons/Logo";
import LogoText from "../components/icons/LogoText";
import { userApi } from "../utils/api";
import { getAnonymousId } from "../utils/anonymousId";

export default function Splash() {
  const nav = useNavigate();
  // 1. show를 false로 시작해서 0.5초 뒤 true로 바꿔 빈 화면을 구현
  const [show, setShow] = useState(false);
  const reduce = useReducedMotion();

  const t1 = useRef<number | null>(null);
  const t2 = useRef<number | null>(null);
  const t3 = useRef<number | null>(null);

  // --- 애니메이션 타임라인 ---
  // 1. 0.5초 빈 화면으로 시작 (setShow(true) 딜레이)
  // 2. 컴포넌트 마운트 후, 메인 애니메이션 시작 (총 1.6초 소요)
  // 3. 모든 애니메이션 완료 후 1.5초 대기
  // 4. 총 3.1초 후, 화면이 사라지는 exit 애니메이션(0.28초) 시작
  // 5. exit 애니메이션 종료 후 /home으로 이동
  useEffect(() => {
    const handleNavigation = async () => {
      const anonymousId = getAnonymousId();
      await userApi.registerUser(anonymousId);

      t3.current = window.setTimeout(() => {
        nav("/analysis", { replace: true });
      }, 280);
    };

    t1.current = window.setTimeout(() => setShow(true), 500);

    t2.current = window.setTimeout(() => {
      setShow(false);
      handleNavigation();
      t3.current = window.setTimeout(() => {
        nav("/analysis", { replace: true });
      }, 280);
    }, 3100);

    return () => {
      if (t1.current) clearTimeout(t1.current);
      if (t2.current) clearTimeout(t2.current);
      if (t3.current) clearTimeout(t3.current);
    };
  }, [nav]);

  const exitTransition = { duration: 0.28, ease: "easeInOut" as const };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.main
          key="splash"
          className="fixed inset-0 z-[9999] flex items-center justify-center"
          style={{
            paddingTop: "env(safe-area-inset-top)",
            paddingBottom: "env(safe-area-inset-bottom)",
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { duration: 0.2, ease: "easeOut" as const },
          }}
          exit={{ opacity: 0, transition: exitTransition }}
        >
          {/* --- 배경 애니메이션 --- */}
          {/* 흰색 배경 → 그라데이션 배경으로 1.3초 뒤에 교차 */}
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-white"
            initial={{ opacity: 1 }}
            animate={
              reduce
                ? { opacity: 0 }
                : {
                    opacity: 0,
                    transition: {
                      delay: 1.3,
                      duration: 0.3,
                      ease: "easeOut" as const,
                    },
                  }
            }
          />
          <motion.div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(335.38% 113.36% at 50% 113.36%, rgba(255, 255, 255, 0.8) 0%, rgba(255, 194, 81, 0.8) 36.08%, rgba(13, 182, 89, 0.8) 100%), #FFFFFF",
            }}
            initial={{ opacity: 0 }}
            animate={
              reduce
                ? { opacity: 1 }
                : {
                    opacity: 1,
                    transition: {
                      delay: 1.3,
                      duration: 0.3,
                      ease: "easeOut" as const,
                    },
                  }
            }
          />

          {/* --- 콘텐츠 애니메이션 --- */}
          {/* 로고, 텍스트 그룹 전체를 1.3초 뒤에 위로 40px 이동 */}
          <motion.div
            className="relative z-10 flex flex-col items-center"
            initial={{ y: 0 }}
            animate={{
              y: -40,
              transition: {
                delay: 1.3,
                duration: 0.3,
                ease: "easeInOut",
              },
            }}
          >
            {/* --- 아이콘 로고 애니메이션 --- */}
            {/* 1. 크기/투명도: 30배율 → 1배율 줌아웃(0.5초) 후 0.8초 대기 */}
            <motion.div
              className="mb-[20px]"
              style={{ transformOrigin: "50% 50%" }}
              initial={reduce ? { opacity: 0 } : { scale: 30.0, opacity: 0.95 }}
              animate={
                reduce
                  ? { opacity: 1, transition: { duration: 0.2 } }
                  : {
                      scale: [30.0, 1.0, 1.0],
                      opacity: [0.95, 1, 1],
                      transition: {
                        duration: 1.3,
                        times: [0, 0.385, 1],
                        ease: [0.05, 0.7, 0.1, 1],
                      },
                    }
              }
            >
              {/* 2. 색상: 1.3초 뒤에 #51BC71 → #FFFFFF으로 순간 변경 */}
              <motion.div
                initial={{ color: "#51BC71" }}
                animate={{ color: "#FFFFFF" }}
                transition={
                  reduce ? { duration: 0.2 } : { delay: 1.3, duration: 0.01 }
                }
              >
                <Logo
                  className="h-[75px] w-[71.28px]"
                  style={{ color: "currentColor" }}
                  aria-label="구석구석 아이콘 로고"
                />
              </motion.div>
            </motion.div>

            {/* --- 텍스트 로고 + 문구 애니메이션 --- */}
            {/* 아이콘 로고, 배경 전환과 같은 시점(1.3초 뒤)에 나타남 */}
            <motion.div
              className="mb-[15px]"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: reduce
                  ? { duration: 0.18 }
                  : {
                      delay: 1.3,
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                      mass: 1,
                    },
              }}
            >
              <LogoText
                className="h-[42px] w-[170px] text-white"
                aria-label="구석구석 텍스트 로고"
              />
            </motion.div>

            <motion.p
              className="text-center Body_Bold_12 text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: reduce
                  ? { duration: 0.18 }
                  : {
                      delay: 1.4, // Slightly increased delay
                      type: "spring",
                      stiffness: 120,
                      damping: 15,
                      mass: 1,
                    },
              }}
            >
              정성 정량 데이터를 한눈에!
              <br />
              예비 창업자를 위한 똑똑한 지역 상권 서비스
            </motion.p>
          </motion.div>
        </motion.main>
      )}
    </AnimatePresence>
  );
}
