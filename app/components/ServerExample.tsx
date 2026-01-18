import { headers } from "next/headers";
import { getServerTranslations, detectLanguageFromHeaders } from "../../i18n/server";

/**
 * 서버 컴포넌트에서 번역 사용 예제
 */
export async function ServerExample() {
  // 헤더에서 언어 감지
  const headersList = await headers();
  const lng = detectLanguageFromHeaders(headersList);
  
  // 번역 함수 가져오기
  const t = await getServerTranslations(lng);

  return (
    <div className="rounded-lg border p-4 bg-zinc-50 dark:bg-zinc-900">
      <h2 className="text-lg font-semibold mb-2">서버 컴포넌트 예제</h2>
      <p className="text-sm text-zinc-600 dark:text-zinc-400">
        현재 언어: {lng}
      </p>
      <p className="mt-2">{t("hello")}</p>
    </div>
  );
}



