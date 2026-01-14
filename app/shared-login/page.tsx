// 웹에서 공유 로그인 폼 사용 예시

"use client";

import { LoginForm } from "@/shared/components/LoginForm/LoginForm";

export default function SharedLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-muted p-4">
      <div className="w-full max-w-md">
        <LoginForm />
      </div>
    </div>
  );
}


