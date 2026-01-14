const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";

export async function apiGet<T>(path: string): Promise<T> {
  const url = `${API_BASE_URL}${path}`;

  const res = await fetch(url, {
    headers: {
      "Content-Type": "application/json",
    },
    // Next.js에서 캐시 전략을 React Query에 맡기고 싶다면 no-store로 둡니다.
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error(`API GET ${url} failed with ${res.status}`);
  }

  return (await res.json()) as T;
}



