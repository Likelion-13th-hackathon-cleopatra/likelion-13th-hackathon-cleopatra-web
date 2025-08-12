import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="mobile-container">
      {/* 헤더 */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <h1 className="text-xl font-bold text-gray-800 text-center">Cleopatra Web</h1>
      </header>

      {/* 메인 컨텐츠 */}
      <main className="p-4 space-y-6">
        {/* 로고 섹션 */}
        <div className="flex justify-center space-x-8">
          <a href="https://vite.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={viteLogo} className="h-16 w-16" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" className="hover:scale-110 transition-transform">
            <img src={reactLogo} className="h-16 w-16 animate-spin" alt="React logo" />
          </a>
        </div>

        {/* 카운터 카드 */}
        <div className="mobile-card">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">카운터</h2>
          <button 
            onClick={() => setCount((count) => count + 1)}
            className="mobile-button bg-blue-500 hover:bg-blue-600 text-white mb-4"
          >
            클릭 수: {count}
          </button>
          <p className="text-sm text-gray-600 text-center">
            <code className="bg-gray-100 px-2 py-1 rounded text-xs">src/App.tsx</code>를 수정하고 저장해보세요
          </p>
        </div>

        {/* 정보 카드 */}
        <div className="mobile-card">
          <h3 className="font-semibold text-gray-800 mb-2">모바일 우선 웹앱</h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            이 웹앱은 모바일 환경을 우선적으로 고려하여 설계되었습니다. 
            데스크탑에서 접속해도 모바일 앱처럼 보이도록 최적화되어 있습니다.
          </p>
        </div>
      </main>

      {/* 푸터 */}
      <footer className="bg-gray-50 border-t border-gray-200 px-4 py-3 mt-auto">
        <p className="text-xs text-gray-500 text-center">
          Vite + React + Tailwind CSS로 제작
        </p>
      </footer>
    </div>
  )
}

export default App
