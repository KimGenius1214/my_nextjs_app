/**
 * Figma 연동 설정
 * 
 * Figma에서 디자인 토큰을 가져와서 Storybook과 연동하는 방법:
 * 
 * 1. Figma Tokens 플러그인 사용:
 *    - Figma에서 "Figma Tokens" 플러그인 설치
 *    - 디자인 토큰을 JSON으로 내보내기
 *    - tokens/figma-tokens.json 파일에 저장
 * 
 * 2. Figma API 사용:
 *    - Figma API 토큰 발급
 *    - 디자인 파일에서 컴포넌트 정보 가져오기
 *    - 자동으로 컴포넌트 코드 생성
 * 
 * 3. Figma to Code 플러그인:
 *    - Figma에서 "Figma to Code" 플러그인 사용
 *    - React 컴포넌트로 내보내기
 *    - components/ui/ 폴더에 저장
 */

export const figmaConfig = {
  // Figma 파일 URL (예시)
  fileUrl: process.env.NEXT_PUBLIC_FIGMA_FILE_URL || "",
  
  // Figma API 토큰 (환경 변수로 관리)
  apiToken: process.env.FIGMA_API_TOKEN || "",
  
  // 디자인 토큰 파일 경로
  tokensPath: "./tokens/figma-tokens.json",
  
  // 컴포넌트 저장 경로
  componentsPath: "./components/ui",
};


