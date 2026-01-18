# Storybook 설정 가이드

## 시작하기

### Storybook 실행
```bash
pnpm run storybook
```

브라우저에서 `http://localhost:6006`으로 접속하면 Storybook을 확인할 수 있습니다.

## Figma 연동 방법

### 1. Figma 디자인을 컴포넌트로 가져오기

#### 방법 A: Figma to Code 플러그인 사용 (권장)

1. **Figma에서 플러그인 설치**
   - Figma → Plugins → Browse plugins
   - "Figma to Code" 또는 "Anima" 검색 및 설치

2. **컴포넌트 내보내기**
   - Figma에서 컴포넌트 선택
   - 플러그인 실행 → React 코드 생성
   - 생성된 코드를 `components/ui/` 폴더에 저장

3. **Storybook 스토리 작성**
   ```tsx
   // components/ui/YourComponent/YourComponent.stories.tsx
   import type { Meta, StoryObj } from "@storybook/react";
   import { YourComponent } from "./YourComponent";
   
   const meta: Meta<typeof YourComponent> = {
     title: "Figma/YourComponent",
     component: YourComponent,
   };
   
   export default meta;
   type Story = StoryObj<typeof YourComponent>;
   
   export const Default: Story = {
     args: {
       // props
     },
   };
   ```

#### 방법 B: Figma Tokens 사용 (디자인 토큰)

1. **Figma Tokens 플러그인 설치**
   - Figma → Plugins → Browse plugins
   - "Figma Tokens" 검색 및 설치

2. **토큰 내보내기**
   - 플러그인 실행 → Export → JSON
   - `tokens/figma-tokens.json`에 저장

3. **토큰 사용**
   ```typescript
   import tokens from '../tokens/figma-tokens.json';
   
   // 컴포넌트에서 사용
   const primaryColor = tokens.colors.primary[600];
   ```

#### 방법 C: Figma API 자동화 (고급)

1. **환경 변수 설정**
   ```bash
   # .env.local
   FIGMA_API_TOKEN=your_token_here
   NEXT_PUBLIC_FIGMA_FILE_URL=https://www.figma.com/file/...
   ```

2. **스크립트 작성** (예시)
   ```typescript
   // scripts/sync-figma.ts
   // Figma API를 사용하여 컴포넌트 정보 가져오기
   // 자동으로 React 컴포넌트 생성
   ```

### 2. Storybook에서 Figma 디자인 링크 추가

스토리에 Figma 디자인 링크를 추가하면 디자이너와 개발자가 쉽게 대조할 수 있습니다:

```tsx
export const Default: Story = {
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/...',
    },
  },
};
```

## 컴포넌트 구조

```
components/
  ui/
    Button/
      Button.tsx          # 컴포넌트 구현
      Button.stories.tsx  # Storybook 스토리
      index.ts           # Export
```

## 디자인 시스템 통합

Storybook은 다음을 자동으로 포함합니다:
- ✅ React Query Provider
- ✅ i18next 다국어 지원
- ✅ Tailwind CSS 스타일
- ✅ 다크 모드 지원

## 추가 리소스

- [Storybook 공식 문서](https://storybook.js.org/)
- [Figma to Code 가이드](./scripts/figma-sync.md)
- [컴포넌트 작성 가이드](../components/ui/README.md)



