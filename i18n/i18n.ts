"use client";

import i18next, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./config";

// 기본 번역 리소스 (SSR 호환을 위해)
const defaultResources = {
  ko: {
    translation: {
      hello: "React Query + i18next 예제입니다!",
      change_language: "언어 변경",
      loading: "로딩 중...",
      error: "데이터를 불러오는 데 실패했습니다.",
      api_response: "API 응답",
      env_info: "env: <code>NEXT_PUBLIC_API_BASE_URL</code> 값으로 API Base URL을 설정합니다.",
    },
  },
  en: {
    translation: {
      hello: "Hello React Query + i18next!",
      change_language: "Change language",
      loading: "Loading...",
      error: "Failed to load data.",
      api_response: "API Response",
      env_info: "Set API Base URL with <code>NEXT_PUBLIC_API_BASE_URL</code> env variable.",
    },
  },
};

const options: InitOptions = {
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
  // SSR 호환을 위해 기본 리소스 제공
  resources: defaultResources,
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
    // 백엔드에서 로드 실패 시 기본 리소스 사용
    allowMultiLoading: false,
  },
};

if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(HttpBackend)
    .init(options)
    .catch((error) => {
      console.error("i18next init error", error);
    });
}

export const i18n = i18next;


