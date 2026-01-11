# UI 컴포넌트 라이브러리

shadcn/ui와 Figma 디자인 컴포넌트를 관리하는 폴더입니다.

## 폴더 구조

```
components/ui/
├── shadcn/                    # shadcn/ui 컴포넌트들 (카테고리별)
│   ├── Actions/
│   │   └── Button/
│   │       ├── Button.tsx
│   │       ├── Button.stories.tsx
│   │       └── index.ts
│   ├── Forms/
│   │   ├── Input/
│   │   │   ├── Input.tsx
│   │   │   ├── Input.stories.tsx
│   │   │   └── index.ts
│   │   └── Textarea/
│   │       ├── Textarea.tsx
│   │       ├── Textarea.stories.tsx
│   │       └── index.ts
│   ├── Layout/
│   │   ├── Card/
│   │   │   ├── Card.tsx
│   │   │   ├── Card.stories.tsx
│   │   │   └── index.ts
│   │   └── Separator/
│   │       ├── Separator.tsx
│   │       ├── Separator.stories.tsx
│   │       └── index.ts
│   └── Feedback/
│       ├── Alert/
│       ├── Badge/
│       └── Skeleton/
└── figma/                      # Figma 디자인 컴포넌트들
    └── Button/
        ├── Button.tsx
        ├── Button.stories.tsx
        └── index.ts
```

## 사용 방법

### shadcn/ui 컴포넌트

```tsx
// Actions
import { Button } from "@/components/ui/shadcn/Actions/Button";

// Forms
import { Input } from "@/components/ui/shadcn/Forms/Input";
import { Textarea } from "@/components/ui/shadcn/Forms/Textarea";

// Layout
import { Card } from "@/components/ui/shadcn/Layout/Card";
import { Separator } from "@/components/ui/shadcn/Layout/Separator";

// Feedback
import { Alert } from "@/components/ui/shadcn/Feedback/Alert";
import { Badge } from "@/components/ui/shadcn/Feedback/Badge";
import { Skeleton } from "@/components/ui/shadcn/Feedback/Skeleton";
```

### Figma 컴포넌트

```tsx
import { Button } from "@/components/ui/figma/Button/Button";
```

## 컴포넌트 목록

### shadcn/ui 컴포넌트 (`components/ui/shadcn/`)

**Actions** (`shadcn/Actions/`)
- **Button** - shadcn/ui 스타일 버튼
  - Variants: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`
  - Sizes: `default`, `sm`, `lg`, `icon`

**Forms** (`shadcn/Forms/`)
- **Input** - 텍스트 입력 필드
- **Textarea** - 다중 라인 텍스트 입력

**Layout** (`shadcn/Layout/`)
- **Card** - 카드 컨테이너 (CardHeader, CardTitle, CardDescription, CardContent, CardFooter 포함)
- **Separator** - 구분선 (수평/수직)

**Feedback** (`shadcn/Feedback/`)
- **Alert** - 알림 메시지 (AlertTitle, AlertDescription 포함)
- **Badge** - 뱃지/태그
- **Skeleton** - 로딩 스켈레톤

### Figma 컴포넌트 (`components/ui/figma/`)

- **Button** - Figma 디자인 버튼
  - Variants: `primary`, `secondary`, `outline`, `ghost`
  - Sizes: `sm`, `md`, `lg`
  - Loading state 지원

## Storybook

모든 컴포넌트는 Storybook에서 카테고리별로 확인할 수 있습니다:

```bash
pnpm run storybook
```

### shadcn/ui 컴포넌트 (카테고리별)

**Actions**
- `shadcn/Actions/Button` - 버튼 컴포넌트

**Forms**
- `shadcn/Forms/Input` - 텍스트 입력 필드
- `shadcn/Forms/Textarea` - 다중 라인 텍스트 입력

**Layout**
- `shadcn/Layout/Card` - 카드 컨테이너
- `shadcn/Layout/Separator` - 구분선

**Feedback**
- `shadcn/Feedback/Alert` - 알림 메시지
- `shadcn/Feedback/Badge` - 뱃지/태그
- `shadcn/Feedback/Skeleton` - 로딩 스켈레톤

### Figma 컴포넌트

- `Figma/Button` - Figma 디자인 버튼

## 새 컴포넌트 추가하기

### shadcn/ui 컴포넌트 추가

카테고리에 맞는 폴더에 컴포넌트를 추가하세요:

```bash
# 예: Actions 카테고리에 새 컴포넌트 추가
mkdir -p components/ui/shadcn/Actions/YourComponent
touch components/ui/shadcn/Actions/YourComponent/YourComponent.tsx
touch components/ui/shadcn/Actions/YourComponent/YourComponent.stories.tsx
touch components/ui/shadcn/Actions/YourComponent/index.ts
```

**카테고리 가이드:**
- **Actions**: 사용자 액션 컴포넌트 (Button, Link 등)
- **Forms**: 폼 입력 컴포넌트 (Input, Textarea, Select 등)
- **Layout**: 레이아웃 컴포넌트 (Card, Separator, Container 등)
- **Feedback**: 피드백/상태 표시 (Alert, Badge, Skeleton, Toast 등)

### Figma 컴포넌트 추가

```bash
# components/ui/figma/YourComponent/
#   ├── YourComponent.tsx
#   ├── YourComponent.stories.tsx
#   └── index.ts
```
