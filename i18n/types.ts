// 번역 키 타입 정의
export type TranslationKey = 
  | "hello"
  | "change_language"
  | "loading"
  | "error"
  | "api_response"
  | "env_info";

export type SupportedLanguage = "ko" | "en";

export type TranslationResources = {
  [key in TranslationKey]: string;
};



