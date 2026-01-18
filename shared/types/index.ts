// 공통 타입 정의

export type Platform = "web" | "ios" | "android";

export interface User {
  id: string;
  email: string;
  name: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface ApiResponse<T> {
  data: T;
  message?: string;
  error?: string;
}



