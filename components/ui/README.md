# UI 컴포넌트 라이브러리

Figma에서 디자인된 컴포넌트들을 관리하는 폴더입니다.

## 구조

```
components/ui/
  ComponentName/
    ComponentName.tsx      # 컴포넌트 구현
    ComponentName.stories.tsx  # Storybook 스토리
    index.ts               # Export
```

## 새 컴포넌트 추가하기

### 1. Figma에서 컴포넌트 가져오기

1. Figma에서 컴포넌트 선택
2. "Figma to Code" 플러그인 실행
3. React 코드 생성 및 복사

### 2. 컴포넌트 파일 생성

```bash
mkdir -p components/ui/YourComponent
```

### 3. 컴포넌트 구현

```tsx
// components/ui/YourComponent/YourComponent.tsx
"use client";

import { forwardRef } from "react";

export interface YourComponentProps {
  // props 정의
}

export const YourComponent = forwardRef<HTMLDivElement, YourComponentProps>(
  ({ ...props }, ref) => {
    return <div ref={ref} {...props}>...</div>;
  }
);

YourComponent.displayName = "YourComponent";
```

### 4. Storybook 스토리 작성

```tsx
// components/ui/YourComponent/YourComponent.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import { YourComponent } from "./YourComponent";

const meta: Meta<typeof YourComponent> = {
  title: "Figma/YourComponent",
  component: YourComponent,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const Default: Story = {
  args: {
    // 기본 props
  },
};
```

### 5. Export 파일 생성

```tsx
// components/ui/YourComponent/index.ts
export { YourComponent } from "./YourComponent";
export type { YourComponentProps } from "./YourComponent";
```

## 디자인 토큰 사용

Figma Tokens에서 내보낸 디자인 토큰을 사용하세요:

```tsx
import tokens from '../../../tokens/figma-tokens.json';

const primaryColor = tokens.colors.primary[600];
const spacing = tokens.spacing.md;
```

## 다국어 지원

컴포넌트에서 다국어를 사용하려면:

```tsx
"use client";
import { useTranslation } from "react-i18next";

export const YourComponent = () => {
  const { t } = useTranslation();
  return <button>{t("button_label")}</button>;
};
```

## 테스트

Storybook에서 컴포넌트를 테스트하고, 다양한 상태와 변형을 확인하세요.

