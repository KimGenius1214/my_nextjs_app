// 공통 인증 훅 (웹과 모바일에서 공유)

import { useState, useCallback } from "react";
import type { LoginCredentials, User } from "../types";

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = useCallback(async (credentials: LoginCredentials) => {
    setIsLoading(true);
    setError(null);

    try {
      // 실제 API 호출로 대체
      // const response = await apiClient.post("/auth/login", credentials);
      
      // 시뮬레이션
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: "1",
        email: credentials.email,
        name: "사용자",
      };
      
      setUser(mockUser);
      return { success: true, user: mockUser };
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "로그인에 실패했습니다.";
      setError(errorMessage);
      return { success: false, error: errorMessage };
    } finally {
      setIsLoading(false);
    }
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setError(null);
  }, []);

  return {
    user,
    isLoading,
    error,
    login,
    logout,
    isAuthenticated: !!user,
  };
}

