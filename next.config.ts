import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Expo와의 충돌 방지를 위해 Babel 설정 명시
  webpack: (config, { isServer }) => {
    // React Native Web 지원
    if (!isServer) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "react-native$": "react-native-web",
      };
    }
    return config;
  },
};

export default nextConfig;
