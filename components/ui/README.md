# UI 컴포넌트 라이브러리

shadcn/ui와 Figma 디자인 컴포넌트를 관리하는 폴더입니다.

## 폴더 구조

```
components/ui/
├── shadcn/          # shadcn/ui 컴포넌트들
│   ├── button.tsx
│   ├── button.stories.tsx
│   ├── card.tsx
│   ├── card.stories.tsx
│   ├── input.tsx
│   ├── input.stories.tsx
│   └── ...
└── figma/           # Figma 디자인 컴포넌트들
    └── Button/
        ├── Button.tsx
        ├── Button.stories.tsx
        └── index.ts
```

## 사용 방법

### shadcn/ui 컴포넌트

```tsx
import { Button } from "@/components/ui/shadcn/button";
import { Card } from "@/components/ui/shadcn/card";
import { Input } from "@/components/ui/shadcn/input";
```

### Figma 컴포넌트

```tsx
import { Button } from "@/components/ui/figma/Button/Button";
```

## 컴포넌트 목록

### shadcn/ui 컴포넌트 (`components/ui/shadcn/`)

- **Button** - shadcn/ui 스타일 버튼
  - Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
  - Sizes: `default`, `sm`, `lg`, `icon`
- **Card** - 카드 컨테이너
- **Input** - 텍스트 입력 필드
- **Textarea** - 다중 라인 텍스트 입력
- **Badge** - 뱃지/태그
- **Alert** - 알림 메시지
- **Separator** - 구분선
- **Skeleton** - 로딩 스켈레톤

### Figma 컴포넌트 (`components/ui/figma/`)

- **Button** - Figma 디자인 버튼
  - Variants: `primary`, `secondary`, `outline`, `ghost`
  - Sizes: `sm`, `md`, `lg`
  - Loading state 지원

## Storybook

모든 컴포넌트는 Storybook에서 확인할 수 있습니다:

```bash
pnpm run storybook
```

- `shadcn/Button` - shadcn/ui Button
- `shadcn/Card` - shadcn/ui Card
- `shadcn/Input` - shadcn/ui Input
- `Figma/Button` - Figma Button
- 기타 컴포넌트들

## 새 컴포넌트 추가하기

### shadcn/ui 컴포넌트 추가

```bash
# components/ui/shadcn/your-component.tsx
# components/ui/shadcn/your-component.stories.tsx
```

### Figma 컴포넌트 추가

```bash
# components/ui/figma/YourComponent/
#   ├── YourComponent.tsx
#   ├── YourComponent.stories.tsx
#   └── index.ts
```
