"use client";

import { useTranslation } from "react-i18next";
import { useExampleQuery } from "../lib/hooks/useExampleQuery";
// Figma Button 사용
import { Button } from "../components/ui/figma/Button/Button";

export default function Home() {
  const { t, i18n } = useTranslation();
  const { data, isLoading, isError } = useExampleQuery();

  const changeLanguage = (lng: "en" | "ko") => {
    void i18n.changeLanguage(lng);
  };

  const currentLanguage = i18n.language || "ko";

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center gap-8 py-16 px-6 bg-white dark:bg-black">
        <h1 className="text-2xl font-semibold text-black dark:text-zinc-50">
          {t("hello")}
        </h1>

        <div className="flex gap-3">
          <Button
            variant={currentLanguage === "ko" ? "primary" : "outline"}
            size="md"
            onClick={() => changeLanguage("ko")}
          >
            한국어
          </Button>
          <Button
            variant={currentLanguage === "en" ? "primary" : "outline"}
            size="md"
            onClick={() => changeLanguage("en")}
          >
            English
          </Button>
        </div>

        <div className="text-sm text-zinc-700 dark:text-zinc-300">
          {isLoading && <p>{t("loading")}</p>}
          {isError && <p>{t("error")}</p>}
          {data && (
            <p>
              {t("api_response")}: {data.message}
            </p>
          )}
        </div>

        <p
          className="text-xs text-zinc-500"
          dangerouslySetInnerHTML={{ __html: t("env_info") }}
        />
       </main>
     </div>
   );
 }

