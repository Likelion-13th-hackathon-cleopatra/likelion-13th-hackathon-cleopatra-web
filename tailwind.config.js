/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
      maxWidth: {
        mobile: "430px",
      },
      width: {
        mobile: "430px",
      },
      fontFamily: {
        pretendard: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Segoe UI",
          "Apple SD Gothic Neo",
          "Noto Sans KR",
          "Malgun Gothic",
          "sans-serif",
        ],
      },
      colors: {
        primary: {
          green: "#0DB659", // Primary_Green
          green15: "#0B9B4C", // Primary_Green_15
          green40: "#086D35", // Primary_Green_40
          green60: "#043A1D", // Primary_Green_60
          green80: "#032412", // Primary_Green_80
        },
        sub: {
          yellow: "#FFC251", // Sub_Yellow
          yellow40: "#997431", // Sub_Yellow_40
          yellow60: "#664E20", // Sub_Yellow_60
        },
        grayscale: {
          white: "#FFFFFF", // Grayscale_White
          5: "#F3F3F1", // Grayscale_5
          15: "#CFCFCD", // Grayscale_15
          25: "#B6B6B5", // Grayscale_25
          45: "#868685", // Grayscale_45
          65: "#555554", // Grayscale_65
          85: "#242424", // Grayscale_85
        },
      },
    },
  },
  plugins: [],
};
