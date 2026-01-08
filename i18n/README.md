# i18n 사용 가이드

이 프로젝트는 서버 컴포넌트와 클라이언트 컴포넌트 모두에서 다국어를 지원합니다.

## 폴더 구조

```
i18n/
  ├── config.ts      # 공통 설정 (지원 언어, 기본 언어)
  ├── types.ts       # 타입 정의 (번역 키, 언어 타입)
  ├── server.ts      # 서버 컴포넌트용 번역 함수
  └── i18n.ts        # 클라이언트 컴포넌트용 i18next 설정

public/
  └── locales/
      ├── ko/
      │   └── translation.json
      └── en/
          └── translation.json
```

## 클라이언트 컴포넌트에서 사용

클라이언트 컴포넌트에서는 `react-i18next`의 `useTranslation` 훅을 사용합니다.

```tsx
"use client";

import { useTranslation } from "react-i18next";

export function ClientComponent() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <h1>{t("hello")}</h1>
      <button onClick={() => i18n.changeLanguage("ko")}>
        한국어
      </button>
      <button onClick={() => i18n.changeLanguage("en")}>
        English
      </button>
    </div>
  );
}
```

## 서버 컴포넌트에서 사용

서버 컴포넌트에서는 `getServerTranslations` 함수를 사용합니다.

### 기본 사용법

```tsx
import { getServerTranslations } from "@/i18n/server";

export async function ServerComponent() {
  const t = await getServerTranslations("ko");
  
  return <h1>{t("hello")}</h1>;
}
```

### 헤더에서 언어 자동 감지

```tsx
import { headers } from "next/headers";
import { 
  getServerTranslations, 
  detectLanguageFromHeaders 
} from "@/i18n/server";

export async function ServerComponent() {
  const headersList = await headers();
  const lng = detectLanguageFromHeaders(headersList);
  const t = await getServerTranslations(lng);
  
  return <h1>{t("hello")}</h1>;
}
```

### 쿠키에서 언어 감지

```tsx
import { cookies } from "next/headers";
import { 
  getServerTranslations, 
  detectLanguageFromCookies 
} from "@/i18n/server";

export async function ServerComponent() {
  const cookieStore = await cookies();
  const lng = detectLanguageFromCookies(cookieStore);
  const t = await getServerTranslations(lng);
  
  return <h1>{t("hello")}</h1>;
}
```

## 새로운 번역 키 추가하기

1. **번역 파일에 키 추가**

`public/locales/ko/translation.json`:
```json
{
  "hello": "안녕하세요",
  "new_key": "새로운 번역"
}
```

`public/locales/en/translation.json`:
```json
{
  "hello": "Hello",
  "new_key": "New translation"
}
```

2. **타입 정의에 키 추가**

`i18n/types.ts`:
```typescript
export type TranslationKey = 
  | "hello"
  | "new_key";  // 새 키 추가
```

이렇게 하면 TypeScript가 번역 키를 자동완성하고 타입 체크를 해줍니다.

## 언어 추가하기

1. **설정 파일 업데이트**

`i18n/config.ts`:
```typescript
export const SUPPORTED_LANGUAGES: SupportedLanguage[] = ["ko", "en", "ja"];
```

2. **타입 정의 업데이트**

`i18n/types.ts`:
```typescript
export type SupportedLanguage = "ko" | "en" | "ja";
```

3. **번역 파일 추가**

`public/locales/ja/translation.json` 파일을 생성하고 번역을 추가합니다.

