# Storybook Docs 확인 가이드

## Storybook 실행하기

```bash
pnpm run storybook
```

브라우저에서 `http://localhost:6006`으로 접속합니다.

## Docs 확인 방법

### 1. 컴포넌트 Docs 페이지

1. **왼쪽 사이드바**에서 컴포넌트 선택 (예: `Figma/Button`)
2. 상단 탭에서 **"Docs"** 탭 클릭
3. 자동 생성된 문서 확인:
   - 컴포넌트 설명
   - Props 테이블 (타입, 기본값, 설명)
   - 모든 스토리 예제
   - 코드 예제

### 2. 개별 스토리 Docs

각 스토리(예: `Primary`, `Secondary`)에도 개별 Docs 페이지가 있습니다:
- 스토리 선택 → 상단 "Docs" 탭 클릭

### 3. Docs 페이지 직접 접근

URL 구조:
- 컴포넌트 Docs: `http://localhost:6006/?path=/docs/figma-button--docs`
- 개별 스토리 Docs: `http://localhost:6006/?path=/docs/figma-button--primary`

## Autodocs 설정 확인

현재 설정:
- `.storybook/main.ts`: `autodocs: "tag"` ✅
- `Button.stories.tsx`: `tags: ["autodocs"]` ✅

이 설정으로 `tags: ["autodocs"]`가 있는 모든 스토리 파일에 대해 자동으로 Docs 페이지가 생성됩니다.

## Docs 내용

자동 생성되는 내용:
- ✅ 컴포넌트 설명 (JSDoc 주석)
- ✅ Props 테이블 (TypeScript 타입에서 자동 추출)
- ✅ Controls 설명 (argTypes에서)
- ✅ 모든 스토리 예제
- ✅ 소스 코드

## Docs 커스터마이징

더 자세한 문서를 추가하려면:

```tsx
const meta: Meta<typeof Button> = {
  title: "Figma/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "상세한 컴포넌트 설명을 여기에 작성합니다.",
      },
      // MDX 문서 추가 가능
      // page: () => <CustomDocsPage />,
    },
  },
  tags: ["autodocs"],
};
```


