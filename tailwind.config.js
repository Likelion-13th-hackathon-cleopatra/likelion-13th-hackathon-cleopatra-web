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
    },
  },
  plugins: [],
}