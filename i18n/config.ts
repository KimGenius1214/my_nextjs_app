import type { SupportedLanguage } from "./types";

export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ["ko", "en"];
export const DEFAULT_LANGUAGE: SupportedLanguage = "ko";

export function isValidLanguage(lng: string): lng is SupportedLanguage {
  return SUPPORTED_LANGUAGES.includes(lng as SupportedLanguage);
}



