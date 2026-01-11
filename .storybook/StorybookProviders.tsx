import { ReactNode, useState } from "react";
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { I18nextProvider } from "react-i18next";
import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

type StorybookProvidersProps = {
  children: ReactNode;
};

// Storybook 전용 i18n 초기화 (HttpBackend 제외)
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

// Storybook 전용 i18n 인스턴스 초기화
if (!i18next.isInitialized) {
  i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .init({
      fallbackLng: "ko",
      supportedLngs: ["ko", "en"],
      debug: false,
      interpolation: {
        escapeValue: false,
      },
      resources: defaultResources,
    })
    .catch((error) => {
      console.error("i18next init error", error);
    });
}

export function StorybookProviders({ children }: StorybookProvidersProps) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            retry: 1,
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  const [i18n] = useState(() => i18next);

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </I18nextProvider>
  );
}

