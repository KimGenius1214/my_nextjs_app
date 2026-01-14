import { readFile } from "fs/promises";
import { join } from "path";
import type { TranslationKey, SupportedLanguage, TranslationResources } from "./types";
import { DEFAULT_LANGUAGE, isValidLanguage } from "./config";

// 번역 파일 캐시
const translationCache = new Map<SupportedLanguage, TranslationResources>();

/**
 * 서버 컴포넌트에서 사용할 번역 함수
 * @param lng 언어 코드 (ko, en)
 * @returns 번역 함수
 */
export async function getServerTranslations(
  lng: SupportedLanguage = DEFAULT_LANGUAGE,
) {
  // 캐시에서 먼저 확인
  if (translationCache.has(lng)) {
    const translations = translationCache.get(lng)!;
    return (key: TranslationKey): string => translations[key] ?? key;
  }

  // 번역 파일 읽기
  try {
    const filePath = join(
      process.cwd(),
      "public",
      "locales",
      lng,
      "translation.json",
    );
    const fileContents = await readFile(filePath, "utf-8");
    const translations = JSON.parse(fileContents) as TranslationResources;

    // 캐시에 저장
    translationCache.set(lng, translations);

    return (key: TranslationKey): string => translations[key] ?? key;
  } catch (error) {
    console.error(`Failed to load translations for ${lng}:`, error);
    // 에러 발생 시 키를 그대로 반환
    return (key: TranslationKey): string => key;
  }
}

/**
 * 요청 헤더에서 언어 감지
 * @param headers Next.js headers 객체
 * @returns 감지된 언어
 */
export function detectLanguageFromHeaders(
  headers: Headers | Record<string, string | string[] | undefined>,
): SupportedLanguage {
  const acceptLanguage =
    headers instanceof Headers
      ? headers.get("accept-language")
      : headers["accept-language"];

  if (typeof acceptLanguage === "string") {
    // Accept-Language 헤더 파싱 (예: "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7")
    const languages = acceptLanguage
      .split(",")
      .map((lang) => lang.split(";")[0].trim().toLowerCase().split("-")[0]);

    for (const lang of languages) {
      if (isValidLanguage(lang)) {
        return lang;
      }
    }
  }

  return DEFAULT_LANGUAGE;
}

/**
 * 쿠키에서 언어 감지
 * @param cookies Next.js cookies 객체 또는 쿠키 문자열
 * @returns 감지된 언어
 */
export function detectLanguageFromCookies(
  cookies:
    | { get: (name: string) => { value: string } | undefined }
    | string
    | undefined,
): SupportedLanguage {
  let cookieValue: string | undefined;

  if (typeof cookies === "string") {
    // 쿠키 문자열 파싱
    const match = cookies.match(/i18next=([^;]+)/);
    cookieValue = match ? match[1] : undefined;
  } else if (cookies && typeof cookies.get === "function") {
    // Next.js cookies 객체
    cookieValue = cookies.get("i18next")?.value;
  }

  if (cookieValue && isValidLanguage(cookieValue)) {
    return cookieValue;
  }

  return DEFAULT_LANGUAGE;
}


