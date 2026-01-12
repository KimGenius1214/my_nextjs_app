# 크로스 플랫폼 개발 가이드

이 프로젝트는 Next.js(웹)와 Expo(모바일)에서 코드를 공유하는 크로스 플랫폼 구조입니다.

## 프로젝트 구조

```
my_nextjs_app/
├── app/                    # Next.js 웹 앱
│   ├── page.tsx           # 랜딩 페이지
│   ├── login/              # 웹 로그인 페이지
│   └── shared-login/       # 공유 로그인 폼 예시
├── mobile/                 # Expo 모바일 앱
│   ├── App.tsx            # 모바일 앱 진입점
│   └── index.js           # Expo 진입점
├── shared/                 # 공유 코드
│   ├── components/        # 공통 컴포넌트
│   ├── hooks/             # 공통 훅
│   ├── lib/               # 공통 유틸리티
│   └── types/             # 공통 타입
└── components/ui/          # 웹 전용 UI 컴포넌트 (shadcn/ui)
```

## 실행 방법

### 웹 개발 서버

```bash
pnpm dev
```

웹 앱이 `http://localhost:3000`에서 실행됩니다.

### 모바일 개발 서버

```bash
pnpm mobile
```

또는 특정 플랫폼:

```bash
pnpm mobile:ios      # iOS 시뮬레이터
pnpm mobile:android  # Android 에뮬레이터
pnpm mobile:web      # 웹 브라우저 (Expo)
```

## 공유 코드 사용

### 컴포넌트

`shared/components/` 폴더의 컴포넌트는 웹과 모바일 모두에서 사용할 수 있습니다.

**예시: LoginForm**

```tsx
// 웹에서
import { LoginForm } from "@/shared/components/LoginForm/LoginForm";

// 모바일에서
import { LoginForm } from "../shared/components/LoginForm/LoginForm";
```

### 훅

`shared/hooks/` 폴더의 훅은 웹과 모바일 모두에서 사용할 수 있습니다.

**예시: useAuth**

```tsx
import { useAuth } from "@/shared/hooks/useAuth";

function MyComponent() {
  const { login, logout, user, isLoading } = useAuth();
  // ...
}
```

### 유틸리티

`shared/lib/` 폴더의 유틸리티 함수는 웹과 모바일 모두에서 사용할 수 있습니다.

**예시:**

```tsx
import { isValidEmail, getPlatform } from "@/shared/lib/utils";

const isValid = isValidEmail("test@example.com");
const platform = getPlatform(); // "web" | "native"
```

## 플랫폼별 분기 처리

### 컴포넌트 내부에서

```tsx
import { getPlatform } from "@/shared/lib/utils";

function MyComponent() {
  const platform = getPlatform();
  
  if (platform === "web") {
    // 웹 전용 코드
    return <WebComponent />;
  }
  
  // 모바일 전용 코드
  return <MobileComponent />;
}
```

### 파일 분리

```
shared/
├── components/
│   └── MyComponent/
│       ├── MyComponent.web.tsx    # 웹 전용
│       ├── MyComponent.native.tsx # 모바일 전용
│       └── index.ts               # 자동 플랫폼 감지
```

## 예시 화면

### 웹

1. 랜딩 페이지: `http://localhost:3000/`
2. 로그인 페이지: `http://localhost:3000/login`
3. 공유 로그인 폼: `http://localhost:3000/shared-login`

### 모바일

1. Expo 앱 실행 후 로그인 화면이 표시됩니다.

## 개발 팁

### 1. 공유 코드 작성 시 주의사항

- React Native와 웹 모두에서 작동하는 API만 사용
- `window`, `document` 같은 웹 전용 API는 피하기
- 플랫폼별 분기가 필요하면 `getPlatform()` 사용

### 2. 스타일링

- 웹: Tailwind CSS 또는 CSS Modules
- 모바일: StyleSheet 또는 styled-components

### 3. 네비게이션

- 웹: Next.js Router (`next/link`, `useRouter`)
- 모바일: Expo Router 또는 React Navigation

## 다음 단계

1. **더 많은 공유 컴포넌트 추가**
   - Card, Alert 등 공통 컴포넌트 확장

2. **상태 관리 통합**
   - Zustand, Jotai 등 크로스 플랫폼 상태 관리 라이브러리

3. **API 클라이언트 공유**
   - `shared/lib/apiClient.ts`에서 웹과 모바일 모두 사용 가능한 API 클라이언트

4. **테스트 설정**
   - 웹과 모바일 모두에서 작동하는 테스트 코드 작성

