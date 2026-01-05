'use client'

import { useQuery } from '@tanstack/react-query'

// 예제 API 호출 함수
async function fetchExampleData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  if (!response.ok) {
    throw new Error('Network response was not ok')
  }
  return response.json()
}

export default function Home() {
  const { data, isLoading, error } = useQuery({
    queryKey: ['example'],
    queryFn: fetchExampleData,
  })

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Next.js + TypeScript + Tailwind CSS + React Query
        </h1>
        
        <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          {isLoading && (
            <p className="text-gray-600 dark:text-gray-400">로딩 중...</p>
          )}
          
          {error && (
            <p className="text-red-600 dark:text-red-400">
              에러 발생: {error instanceof Error ? error.message : '알 수 없는 에러'}
            </p>
          )}
          
          {data && (
            <div>
              <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
                {data.title}
              </h2>
              <p className="text-gray-600 dark:text-gray-400">{data.body}</p>
            </div>
          )}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            프로젝트가 성공적으로 설정되었습니다! 🎉
          </p>
        </div>
      </div>
    </main>
  )
}

