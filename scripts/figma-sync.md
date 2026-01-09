# Figma 연동 가이드

## 방법 1: Figma Tokens 플러그인 사용

### 1. Figma에서 플러그인 설치
1. Figma 열기
2. Plugins → Browse plugins
3. "Figma Tokens" 검색 및 설치

### 2. 디자인 토큰 내보내기
1. Figma Tokens 플러그인 실행
2. Export → JSON 형식으로 내보내기
3. `tokens/figma-tokens.json` 파일에 저장

### 3. Storybook에서 사용
```typescript
import tokens from '../tokens/figma-tokens.json';

// 컴포넌트에서 토큰 사용
const primaryColor = tokens.colors.primary[600];
```

## 방법 2: Figma API 사용 (자동화)

### 1. Figma API 토큰 발급
1. Figma → Settings → Personal Access Tokens
2. 새 토큰 생성
3. `.env.local`에 저장:
```
FIGMA_API_TOKEN=your_token_here
NEXT_PUBLIC_FIGMA_FILE_URL=https://www.figma.com/file/...
```

### 2. 스크립트 실행
```bash
pnpm run figma:sync
```

## 방법 3: Figma to Code 플러그인

### 1. 플러그인 설치
1. Figma → Plugins → Browse plugins
2. "Figma to Code" 검색 및 설치

### 2. 컴포넌트 내보내기
1. Figma에서 컴포넌트 선택
2. Figma to Code 플러그인 실행
3. React 코드로 내보내기
4. `components/ui/` 폴더에 저장

## 권장 워크플로우

1. **디자인 단계**: Figma에서 컴포넌트 디자인
2. **토큰 추출**: Figma Tokens로 디자인 토큰 내보내기
3. **컴포넌트 생성**: Figma to Code로 React 컴포넌트 생성
4. **Storybook 작성**: 생성된 컴포넌트에 Storybook 스토리 추가
5. **통합**: 앱에서 컴포넌트 사용

