# 컴포넌트 사용 가이드

## shadcn/ui 컴포넌트

### Button

```tsx
import { Button } from "@/components/ui/button";

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
} from "@/components/ui/card";

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
import { Input } from "@/components/ui/input";

<Input type="email" placeholder="email@example.com" />
<Input type="password" placeholder="Password" />
```

### Textarea

```tsx
import { Textarea } from "@/components/ui/textarea";

<Textarea placeholder="Type your message..." rows={5} />
```

### Badge

```tsx
import { Badge } from "@/components/ui/badge";

<Badge>Default</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="destructive">Destructive</Badge>
<Badge variant="outline">Outline</Badge>
```

### Alert

```tsx
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
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
import { Separator } from "@/components/ui/separator";

<Separator />
<Separator orientation="vertical" />
```

### Skeleton

```tsx
import { Skeleton } from "@/components/ui/skeleton";

<Skeleton className="h-4 w-[250px]" />
<Skeleton className="h-12 w-12 rounded-full" />
```

## Storybook에서 확인하기

모든 컴포넌트는 Storybook에서 확인할 수 있습니다:

```bash
pnpm run storybook
```

브라우저에서 `http://localhost:6006`으로 접속하면:
- `shadcn/Button` - Button 컴포넌트 스토리
- `shadcn/Card` - Card 컴포넌트 스토리
- `shadcn/Input` - Input 컴포넌트 스토리
- `shadcn/Textarea` - Textarea 컴포넌트 스토리
- `shadcn/Badge` - Badge 컴포넌트 스토리
- `shadcn/Alert` - Alert 컴포넌트 스토리
- `shadcn/Separator` - Separator 컴포넌트 스토리
- `shadcn/Skeleton` - Skeleton 컴포넌트 스토리

각 컴포넌트의 Docs 탭에서 props와 사용 예제를 확인할 수 있습니다.

