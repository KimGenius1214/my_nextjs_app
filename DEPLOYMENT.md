# Storybook GitHub Pages 배포 가이드

## 📋 설정 순서

### 1단계: GitHub 리포지토리 설정

1. **GitHub 리포지토리로 이동**
   - 브라우저에서 GitHub 리포지토리 열기

2. **Settings 메뉴 접근**
   - 리포지토리 상단의 **Settings** 탭 클릭

3. **Pages 설정**
   - 왼쪽 사이드바에서 **Pages** 메뉴 클릭
   - **Source** 섹션에서:
     - **Source**: `GitHub Actions` 선택
     - 저장 버튼 클릭

### 2단계: GitHub Actions Workflow 확인

`.github/workflows/storybook-gh-pages.yml` 파일이 생성되어 있는지 확인합니다.

이 workflow는 다음을 수행합니다:
- ✅ `main` 또는 `master` 브랜치에 push될 때 자동 실행
- ✅ Storybook 빌드 (`pnpm run build-storybook`)
- ✅ GitHub Pages에 자동 배포

### 3단계: 리포지토리 이름 확인

GitHub Pages URL 형식:
```
https://<username>.github.io/<repository-name>/
```

**예시:**
- 리포지토리 이름이 `my_nextjs_app`인 경우
- GitHub 사용자명이 `yourusername`인 경우
- 최종 URL: `https://yourusername.github.io/my_nextjs_app/`

### 4단계: 첫 배포 실행

1. **코드 커밋 및 푸시**
   ```bash
   git add .
   git commit -m "Add Storybook GitHub Pages deployment"
   git push origin main
   ```

2. **GitHub Actions 확인**
   - 리포지토리 → **Actions** 탭 클릭
   - "Deploy Storybook to GitHub Pages" workflow가 실행되는지 확인
   - 완료될 때까지 대기 (약 2-3분)

3. **배포 완료 확인**
   - **Settings** → **Pages**에서 배포 URL 확인
   - 또는 `https://<username>.github.io/<repository-name>/` 접속
   - Storybook이 정상적으로 표시되는지 확인

### 5단계: 수동 배포 (선택사항)

필요시 GitHub Actions에서 수동으로 실행할 수 있습니다:

1. **Actions** 탭 → **Deploy Storybook to GitHub Pages** 선택
2. 오른쪽 상단의 **Run workflow** 버튼 클릭
3. 브랜치 선택 후 **Run workflow** 클릭

## 🔄 워크플로우

```
[개발자]                    [기획자/디자이너]
   │                              │
   ├─ 코드 수정                   │
   │                              │
   ├─ main 브랜치에 push          │
   │                              │
   ├─ GitHub Actions 자동 실행    │
   │   ├─ 의존성 설치              │
   │   ├─ Storybook 빌드           │
   │   └─ GitHub Pages 배포        │
   │                              │
   ├─ Storybook URL 생성 ────────→ URL 클릭해서 확인
   │                              │
   │                              ├─ 컴포넌트 상태 확인
   │                              │
   │                              ├─ 피드백 (Slack/Jira)
   │                              │
   ├─ 수정 후 재배포 ←────────────┤
   │                              │
   └─ PR 머지                     └─ 최종 확인
```

## 🛠️ 트러블슈팅

### 배포가 실패하는 경우

1. **Actions 로그 확인**
   - Actions 탭에서 실패한 workflow 클릭
   - 각 단계를 클릭하여 에러 메시지 확인

2. **일반적인 문제들**

   **문제: `pnpm-lock.yaml` 파일이 없음**
   ```bash
   # 해결: 로컬에서 실행 후 커밋
   pnpm install
   git add pnpm-lock.yaml
   git commit -m "Add pnpm-lock.yaml"
   git push
   ```

   **문제: Node 버전 불일치**
   - `.github/workflows/storybook-gh-pages.yml`의 `node-version` 확인
   - 현재는 `"20"`으로 설정되어 있음

   **문제: 권한 문제**
   - Settings → Actions → General → Workflow permissions
   - "Read and write permissions" 선택

3. **Storybook 빌드 실패**
   ```bash
   # 로컬에서 빌드 테스트
   pnpm run build-storybook
   ```
   - 에러가 있으면 수정 후 다시 push

### URL이 404를 보여주는 경우

1. **배포 완료 대기**
   - GitHub Pages 배포는 보통 1-2분 소요
   - Actions에서 "Deploy to GitHub Pages" 단계가 완료되었는지 확인

2. **base 경로 확인**
   - 서브 경로에 배포하는 경우 (예: `/my_nextjs_app/`)
   - `.storybook/main.ts`에서 base 경로 설정 필요
   - 현재는 루트 배포로 설정되어 있음

3. **캐시 문제**
   - 브라우저 캐시 삭제 (Ctrl+Shift+Delete)
   - 시크릿 모드에서 접속 시도
   - 하드 리프레시 (Ctrl+F5)

## 📝 참고사항

- ✅ 배포는 `main` 또는 `master` 브랜치에 push될 때마다 자동으로 실행됩니다
- ✅ 배포된 Storybook은 정적 파일이므로 서버가 필요 없습니다
- ✅ GitHub Pages는 무료로 제공되며, 퍼블릭 리포지토리에서 무제한 사용 가능합니다
- ✅ 프라이빗 리포지토리도 GitHub Pages 사용 가능 (무료 플랜 포함)

## 🔗 유용한 링크

- [GitHub Pages 공식 문서](https://docs.github.com/en/pages)
- [GitHub Actions 공식 문서](https://docs.github.com/en/actions)
- [Storybook 배포 가이드](https://storybook.js.org/docs/react/sharing/publish-storybook)
