// 공통 로그인 폼 컴포넌트 (웹과 모바일에서 공유)

import React, { useState } from "react";
import { View, StyleSheet, Text, Alert as RNAlert } from "react-native";
import { Platform } from "react-native";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useAuth } from "../../hooks/useAuth";
import { isValidEmail } from "../../lib/utils";
import { getPlatform } from "../../lib/utils";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const { login, isLoading } = useAuth();
  const platform = getPlatform();

  const handleSubmit = async () => {
    setError(null);

    // 유효성 검사
    if (!email || !password) {
      setError("이메일과 비밀번호를 모두 입력해주세요.");
      return;
    }

    if (!isValidEmail(email)) {
      setError("올바른 이메일 형식이 아닙니다.");
      return;
    }

    const result = await login({ email, password });

    if (!result.success) {
      setError(result.error || "로그인에 실패했습니다.");
      
      // React Native에서는 Alert 사용
      if (platform === "native") {
        RNAlert.alert("로그인 실패", result.error || "로그인에 실패했습니다.");
      }
    } else {
      // 로그인 성공
      if (platform === "native") {
        RNAlert.alert("성공", "로그인되었습니다!");
      }
    }
  };

  // 웹에서는 Alert 컴포넌트 사용
  if (platform === "web") {
    const WebAlert = require("@/components/ui/shadcn/Feedback/Alert").Alert;
    const WebAlertTitle = require("@/components/ui/shadcn/Feedback/Alert").AlertTitle;
    const WebAlertDescription = require("@/components/ui/shadcn/Feedback/Alert").AlertDescription;
    const { AlertCircle } = require("lucide-react");

    return (
      <View style={styles.container}>
        <Text style={styles.title}>로그인</Text>
        
        {error && (
          <WebAlert variant="destructive" style={styles.errorAlert}>
            <AlertCircle className="h-4 w-4" />
            <WebAlertTitle>오류</WebAlertTitle>
            <WebAlertDescription>{error}</WebAlertDescription>
          </WebAlert>
        )}

        <View style={styles.form}>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>이메일</Text>
            <Input
              value={email}
              onChangeText={setEmail}
              placeholder="name@example.com"
              keyboardType="email-address"
              disabled={isLoading}
            />
          </View>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>비밀번호</Text>
            <Input
              value={password}
              onChangeText={setPassword}
              placeholder="비밀번호를 입력하세요"
              secureTextEntry
              disabled={isLoading}
            />
          </View>

          <Button
            onPress={handleSubmit}
            disabled={isLoading}
            isLoading={isLoading}
            style={styles.button}
          >
            로그인
          </Button>
        </View>
      </View>
    );
  }

  // React Native 버전
  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그인</Text>
      
      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      )}

      <View style={styles.form}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>이메일</Text>
          <Input
            value={email}
            onChangeText={setEmail}
            placeholder="name@example.com"
            keyboardType="email-address"
            disabled={isLoading}
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>비밀번호</Text>
          <Input
            value={password}
            onChangeText={setPassword}
            placeholder="비밀번호를 입력하세요"
            secureTextEntry
            disabled={isLoading}
          />
        </View>

        <Button
          onPress={handleSubmit}
          disabled={isLoading}
          isLoading={isLoading}
          style={styles.button}
        >
          로그인
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 32,
    textAlign: "center",
  },
  form: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  inputGroup: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
    color: "#000",
  },
  button: {
    marginTop: 8,
    width: "100%",
  },
  errorContainer: {
    backgroundColor: "#FEE2E2",
    borderColor: "#EF4444",
    borderWidth: 1,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  errorText: {
    color: "#DC2626",
    fontSize: 14,
  },
  errorAlert: {
    marginBottom: 16,
  },
});

