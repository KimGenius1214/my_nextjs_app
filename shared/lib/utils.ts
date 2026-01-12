// 공통 유틸리티 함수

/**
 * 플랫폼 감지 (웹/모바일)
 */
export function getPlatform(): "web" | "native" {
  if (typeof window !== "undefined") {
    // 웹 환경
    return "web";
  }
  // React Native 환경
  return "native";
}

/**
 * 이메일 유효성 검사
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * 비밀번호 유효성 검사 (최소 8자)
 */
export function isValidPassword(password: string): boolean {
  return password.length >= 8;
}

/**
 * 클래스명 병합 (웹용)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(" ");
}

