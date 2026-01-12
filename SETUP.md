# 크로스 플랫폼 설정 가이드

## 1. 패키지 설치

먼저 필요한 Expo 및 React Native 패키지를 설치하세요:

```bash
pnpm install
```

설치되는 주요 패키지:
- `expo`: Expo SDK
- `expo-router`: 파일 기반 라우팅 (선택사항)
- `react-native`: React Native 코어
- `react-native-web`: 웹에서 React Native 컴포넌트 사용
- `react-native-safe-area-context`: Safe Area 처리
- `react-native-screens`: 네이티브 스크린 관리

## 2. Expo CLI 설치 (전역)

```bash
npm install -g expo-cli
```

또는 npx 사용:
```bash
npx expo start
```

## 3. 모바일 앱 실행

### iOS (Mac만 가능)

```bash
pnpm mobile:ios
```

또는:
```bash
npx expo start --ios
```

### Android

```bash
pnpm mobile:android
```

또는:
```bash
npx expo start --android
```

### 웹 (Expo)

```bash
pnpm mobile:web
```

또는:
```bash
npx expo start --web
```

## 4. 개발 환경 설정

### iOS 개발

1. Xcode 설치 (Mac App Store)
2. iOS 시뮬레이터 실행
3. `pnpm mobile:ios` 실행

### Android 개발

1. Android Studio 설치
2. Android SDK 설정
3. Android 에뮬레이터 생성 및 실행
4. `pnpm mobile:android` 실행

### 물리 기기에서 테스트

1. Expo Go 앱 설치 (iOS/Android)
2. `pnpm mobile` 실행
3. QR 코드 스캔

## 5. 예시 화면 확인

### 웹

1. 웹 개발 서버 실행:
   ```bash
   pnpm dev
   ```

2. 브라우저에서 확인:
   - 랜딩 페이지: `http://localhost:3000/`
   - 로그인 페이지: `http://localhost:3000/login`
   - 공유 로그인 폼: `http://localhost:3000/shared-login`

### 모바일

1. 모바일 개발 서버 실행:
   ```bash
   pnpm mobile
   ```

2. Expo Go 앱에서 QR 코드 스캔 또는 시뮬레이터에서 확인

## 6. 프로젝트 구조 이해

```
my_nextjs_app/
├── app/                    # Next.js 웹 앱 (웹 전용)
├── mobile/                 # Expo 모바일 앱 (모바일 전용)
├── shared/                 # 공유 코드 (웹 + 모바일)
│   ├── components/        # 공통 컴포넌트
│   ├── hooks/             # 공통 훅
│   ├── lib/               # 공통 유틸리티
│   └── types/             # 공통 타입
└── components/ui/          # 웹 전용 UI (shadcn/ui)
```

## 7. 트러블슈팅

### Metro 번들러 오류

```bash
# 캐시 클리어
npx expo start --clear
```

### 패키지 버전 충돌

```bash
# node_modules 삭제 후 재설치
rm -rf node_modules
pnpm install
```

### TypeScript 오류

```bash
# 타입 체크
pnpm tsc --noEmit
```

## 8. 다음 단계

1. **더 많은 공유 컴포넌트 추가**
2. **API 통합**
3. **상태 관리 라이브러리 추가** (Zustand, Jotai 등)
4. **테스트 설정**

자세한 내용은 `CROSS_PLATFORM.md`를 참고하세요.

