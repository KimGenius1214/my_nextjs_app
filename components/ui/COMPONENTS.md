# 컴포넌트 사용 가이드

## shadcn/ui 컴포넌트

### Button

```tsx
import { Button } from "@/components/ui/shadcn/Actions/Button";

<Button variant="default">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="destructive">Delete</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
```

### Card

```tsx
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/shadcn/Layout/Card";

<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Input

```tsx
import { Input } from "@/components/ui/shadcn/Forms/Input";

<Input type="email" placeholder="email@example.com" />
<Input type="password" placeholder="Password" />
```

### Textarea

```tsx
import { Textarea } from "@/components/ui/shadcn/Forms/Textarea";

<Textarea placeholder="Type your message..." rows={5} />
```

### Badge

```tsx
import { Badge } from "@/components/ui/shadcn/Feedback/Badge";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/shadcn/Feedback/Alert";
import { AlertCircle } from "lucide-react";

<Alert>
  <AlertCircle className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>
```

### Separator

```tsx
import { Separator } from "@/components/ui/shadcn/Layout/Separator";

<Separator />
<Separator orientation="vertical" />
```

### Skeleton

```tsx
import { Skeleton } from "@/components/ui/shadcn/Feedback/Skeleton";

<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-12 w-12 rounded-full" />
```

## Figma 컴포넌트

### Button

```tsx
import { Button } from "@/components/ui/figma/Button/Button";

<Button variant="primary">Click me</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>
<Button isLoading>Loading...</Button>
```

## Storybook에서 확인하기

모든 컴포넌트는 Storybook에서 확인할 수 있습니다:

```bash
pnpm run storybook
```

브라우저에서 `http://localhost:6006`으로 접속하면:

**shadcn/ui 컴포넌트 (카테고리별):**

**Actions**
- `shadcn/Actions/Button` - Button 컴포넌트 스토리

**Forms**
- `shadcn/Forms/Input` - Input 컴포넌트 스토리
- `shadcn/Forms/Textarea` - Textarea 컴포넌트 스토리

**Layout**
- `shadcn/Layout/Card` - Card 컴포넌트 스토리
- `shadcn/Layout/Separator` - Separator 컴포넌트 스토리

**Feedback**
- `shadcn/Feedback/Alert` - Alert 컴포넌트 스토리
- `shadcn/Feedback/Badge` - Badge 컴포넌트 스토리
- `shadcn/Feedback/Skeleton` - Skeleton 컴포넌트 스토리

**Figma 컴포넌트:**
- `Figma/Button` - Figma Button 컴포넌트 스토리

각 컴포넌트의 Docs 탭에서 props와 사용 예제를 확인할 수 있습니다.

