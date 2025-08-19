/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        'sm': '375px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
      maxWidth: {
        'mobile': '430px',
        'mobile-lg': '480px',
      },
      width: {
        'mobile': '430px',
        'mobile-lg': '480px',
      },
      container: {
        center: true,
        padding: '1rem',
        screens: {
          sm: '375px',
          md: '430px',
          lg: '480px',
          xl: '480px',
          '2xl': '480px',
        },
      },

      // 👇 여기 추가 (폰트 유틸 생성: font-pretendard)
      fontFamily: {
        pretendard: ["Pretendard", "sans-serif"],
      },

      colors: {
        "Primary_Green": "#0DB659",
        "Sub_Yellow": "#FFC251",
        "Grayscale_White": "#FFF",
      },
      // 그라데이션(오버레이) 목록
      backgroundImage: {
        "Primary_Green_15": "linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), #0DB659",
        "Primary_Green_40": "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), #0DB659",
        "Primary_Green_60": "linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), #0DB659",
        "Primary_Green_80": "linear-gradient(0deg, rgba(0, 0, 0, 0.80) 0%, rgba(0, 0, 0, 0.80) 100%), #0DB659",
        "Sub_Yellow_40": "linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), #FFC251",
        "Sub_Yellow_60": "linear-gradient(0deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.60) 100%), #FFC251",
        "Grayscale_5": "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.00) 100%), #F3F3F1",
        "Grayscale_15": "linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.15) 100%), #F3F3F1",
        "Grayscale_25": "linear-gradient(0deg, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.25) 100%), #F3F3F1",
        "Grayscale_45": "linear-gradient(0deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 100%), #F3F3F1",
        "Grayscale_65": "linear-gradient(0deg, rgba(0, 0, 0, 0.65) 0%, rgba(0, 0, 0, 0.65) 100%), #F3F3F1",
        "Grayscale_85": "linear-gradient(0deg, rgba(0, 0, 0, 0.85) 0%, rgba(0, 0, 0, 0.85) 100%), #F3F3F1",


        // 필요하면 더 추가
      },
    },
  },
  plugins: [],
}