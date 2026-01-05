# My Next.js App

Next.js 14를 사용한 TypeScript, Tailwind CSS, React Query 프로젝트입니다.

## 기술 스택

- **Next.js 14.2.5** - 최신 보안 패치가 적용된 버전
- **TypeScript** - 타입 안정성
- **Tailwind CSS** - 유틸리티 기반 CSS 프레임워크
- **React Query (TanStack Query)** - 서버 상태 관리

## 시작하기

### 의존성 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 빌드

```bash
npm run build
```

### 프로덕션 실행

```bash
npm start
```

## 프로젝트 구조

```
my-nextjs-app/
├── app/
│   ├── layout.tsx      # 루트 레이아웃
│   ├── page.tsx        # 홈 페이지
│   ├── providers.tsx   # React Query Provider
│   └── globals.css     # 전역 스타일
├── components/         # 컴포넌트 (생성 필요시)
├── public/            # 정적 파일
├── next.config.js     # Next.js 설정
├── tailwind.config.ts # Tailwind CSS 설정
└── tsconfig.json      # TypeScript 설정
```

## 주요 기능

- ✅ Next.js App Router
- ✅ TypeScript 완전 지원
- ✅ Tailwind CSS 설정 완료
- ✅ React Query Provider 설정 완료
- ✅ 반응형 디자인
- ✅ 다크 모드 지원 (시스템 설정 기반)

