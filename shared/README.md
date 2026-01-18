# Shared 코드

웹(Next.js)과 모바일(Expo/React Native)에서 공유하는 코드입니다.

## 폴더 구조

```
shared/
├── components/      # 공통 컴포넌트
│   ├── Button/
│   ├── Input/
│   └── LoginForm/
├── hooks/           # 공통 훅
│   └── useAuth.ts
├── lib/             # 공통 유틸리티
│   └── utils.ts
├── types/           # 공통 타입
│   └── index.ts
└── utils/           # 기타 유틸리티
```

## 사용 방법

### 웹에서 사용

```tsx
import { LoginForm } from "@/shared/components/LoginForm/LoginForm";

export default function Page() {
  return <LoginForm />;
}
```

### 모바일에서 사용

```tsx
import { LoginForm } from "../shared/components/LoginForm/LoginForm";

export default function App() {
  return <LoginForm />;
}
```

## 컴포넌트

### Button
- 웹: shadcn/ui Button 사용
- 모바일: React Native TouchableOpacity 사용
- 동일한 API로 사용 가능

### Input
- 웹: shadcn/ui Input 사용
- 모바일: React Native TextInput 사용
- 동일한 API로 사용 가능

### LoginForm
- 완전한 로그인 폼 컴포넌트
- 웹과 모바일에서 동일하게 작동
- 내부적으로 플랫폼 감지하여 적절한 컴포넌트 사용

## 훅

### useAuth
- 인증 상태 관리
- login, logout 함수 제공
- 웹과 모바일에서 동일하게 작동

## 유틸리티

### getPlatform()
- 현재 플랫폼 감지 ("web" | "native")
- 플랫폼별 분기 처리에 사용

### isValidEmail()
- 이메일 유효성 검사

### isValidPassword()
- 비밀번호 유효성 검사



