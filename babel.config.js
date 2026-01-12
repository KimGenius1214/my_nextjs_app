module.exports = function (api) {
  api.cache(true);
  
  // Next.js 환경에서는 기본 설정 사용
  if (process.env.NEXT_RUNTIME) {
    return {
      presets: ["next/babel"],
    };
  }
  
  // Expo 환경에서는 expo preset 사용
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "react" }],
    ],
    plugins: [
      // 필요시 추가 플러그인
    ],
  };
};

