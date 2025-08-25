import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    react(), 
    svgr({
      svgrOptions: {
        icon: true,
      },
    })
  ],
  resolve: {
    alias: {
      "@": "./src",
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
    assetsInlineLimit: 0, // SVG 파일을 인라인하지 않음
  },
  optimizeDeps: {
    include: ['**/*.svg?react'], // SVG React 컴포넌트를 의존성에 포함
  },
  publicDir: 'public', // public 폴더 설정
});
