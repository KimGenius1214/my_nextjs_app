 "use client";

 import i18next, { InitOptions } from "i18next";
 import { initReactI18next } from "react-i18next";
 import LanguageDetector from "i18next-browser-languagedetector";
 import HttpBackend from "i18next-http-backend";

 const resources = {
   en: {
     translation: {
       hello: "Hello React Query + i18next!",
       change_language: "Change language",
     },
   },
   ko: {
     translation: {
       hello: "React Query + i18next 예제입니다!",
       change_language: "언어 변경",
     },
   },
 };

 const options: InitOptions = {
   fallbackLng: "ko",
   supportedLngs: ["en", "ko"],
   debug: process.env.NODE_ENV === "development",
   interpolation: {
     escapeValue: false,
   },
   resources,
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


