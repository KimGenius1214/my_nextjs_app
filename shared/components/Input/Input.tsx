// 공통 Input 컴포넌트 (웹과 모바일에서 공유)

import React from "react";
import { Platform, TextInput, StyleSheet, ViewStyle, TextStyle } from "react-native";
import { getPlatform } from "../../lib/utils";

export interface InputProps {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  autoCapitalize?: "none" | "sentences" | "words" | "characters";
  disabled?: boolean;
  style?: ViewStyle;
}

export function Input({
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  keyboardType = "default",
  autoCapitalize = "none",
  disabled = false,
  style,
}: InputProps) {
  const platform = getPlatform();

  if (platform === "web") {
    // 웹에서는 기존 shadcn Input 사용
    try {
      const WebInput = require("@/components/ui/shadcn/Forms/Input").Input;
    return (
      <WebInput
        value={value}
        onChange={(e: any) => onChangeText(e.target.value)}
        placeholder={placeholder}
        type={secureTextEntry ? "password" : keyboardType === "email-address" ? "email" : "text"}
        disabled={disabled}
        className={style as any}
      />
    );
    } catch (e) {
      // 웹 환경이 아닐 때 fallback
      console.warn("Web Input not available, using native");
    }
  }

  // React Native 버전
  return (
    <TextInput
      style={[styles.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      autoCapitalize={autoCapitalize}
      editable={!disabled}
      placeholderTextColor="#999"
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: "#E5E5EA",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    backgroundColor: "#FFFFFF",
  },
});

