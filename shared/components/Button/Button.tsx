// 공통 Button 컴포넌트 (웹과 모바일에서 공유)

import React from "react";
import { Platform, StyleSheet, TouchableOpacity, Text, ViewStyle, TextStyle } from "react-native";
import { getPlatform } from "../../lib/utils";

export type ButtonVariant = "primary" | "secondary" | "outline";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onPress?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  style?: ViewStyle;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  onPress,
  disabled = false,
  isLoading = false,
  style,
}: ButtonProps) {
  const platform = getPlatform();

  if (platform === "web") {
    // 웹에서는 기존 shadcn Button 사용
    // 동적 import로 처리하여 모바일에서 에러 방지
    try {
      const WebButton = require("@/components/ui/shadcn/Actions/Button").Button;
    return (
      <WebButton
        variant={variant === "primary" ? "default" : variant === "secondary" ? "secondary" : "outline"}
        size={size === "sm" ? "sm" : size === "lg" ? "lg" : "default"}
        onClick={onPress}
        disabled={disabled || isLoading}
        className={style as any}
      >
        {isLoading ? "로딩 중..." : children}
      </WebButton>
    );
    } catch (e) {
      // 웹 환경이 아닐 때 fallback
      console.warn("Web Button not available, using native");
    }
  }

  // React Native 버전
  const buttonStyle = [
    styles.button,
    styles[variant],
    styles[`size_${size}`],
    (disabled || isLoading) && styles.disabled,
    style,
  ];

  const textStyle = [
    styles.text,
    styles[`text_${variant}`],
    styles[`textSize_${size}`],
  ];

  return (
    <TouchableOpacity
      style={buttonStyle}
      onPress={onPress}
      disabled={disabled || isLoading}
      activeOpacity={0.7}
    >
      <Text style={textStyle}>
        {isLoading ? "로딩 중..." : children}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  primary: {
    backgroundColor: "#007AFF",
  },
  secondary: {
    backgroundColor: "#E5E5EA",
  },
  outline: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "#007AFF",
  },
  size_sm: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    minHeight: 32,
  },
  size_md: {
    paddingHorizontal: 16,
    paddingVertical: 10,
    minHeight: 40,
  },
  size_lg: {
    paddingHorizontal: 24,
    paddingVertical: 14,
    minHeight: 48,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    fontWeight: "600",
  },
  text_primary: {
    color: "#FFFFFF",
  },
  text_secondary: {
    color: "#000000",
  },
  text_outline: {
    color: "#007AFF",
  },
  textSize_sm: {
    fontSize: 14,
  },
  textSize_md: {
    fontSize: 16,
  },
  textSize_lg: {
    fontSize: 18,
  },
});

