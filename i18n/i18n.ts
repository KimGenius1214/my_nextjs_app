"use client";

import i18next, { InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpBackend from "i18next-http-backend";
import { DEFAULT_LANGUAGE, SUPPORTED_LANGUAGES } from "./config";

const options: InitOptions = {
  fallbackLng: DEFAULT_LANGUAGE,
  supportedLngs: SUPPORTED_LANGUAGES,
  debug: process.env.NODE_ENV === "development",
  interpolation: {
    escapeValue: false,
  },
  backend: {
    loadPath: "/locales/{{lng}}/{{ns}}.json",
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


