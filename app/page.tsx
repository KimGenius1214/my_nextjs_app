"use client";

import Link from "next/link";
import { Button } from "@/components/ui/shadcn/Actions/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/shadcn/Layout/Card";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 flex items-center justify-between">
        <div className="text-2xl font-bold">MyApp</div>
        <div className="flex gap-4">
          <Link href="/login">
            <Button variant="ghost">로그인</Button>
          </Link>
          <Link href="/login">
            <Button>시작하기</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          환영합니다
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          최신 기술로 만든 현대적인 웹 애플리케이션입니다.
          <br />
          React Query, i18next, Storybook을 활용한 강력한 개발 환경을 경험해보세요.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/login">
            <Button size="lg">지금 시작하기</Button>
          </Link>
          <Button size="lg" variant="outline">
            더 알아보기
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle>React Query</CardTitle>
              <CardDescription>
                강력한 데이터 페칭과 상태 관리
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                서버 상태를 효율적으로 관리하고 캐싱, 동기화, 백그라운드 업데이트를 자동으로 처리합니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>다국어 지원</CardTitle>
              <CardDescription>
                i18next를 활용한 국제화
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                한국어와 영어를 지원하며, 클라이언트와 서버 컴포넌트 모두에서 번역을 사용할 수 있습니다.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Storybook</CardTitle>
              <CardDescription>
                컴포넌트 개발 및 문서화
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                모든 UI 컴포넌트를 Storybook에서 확인하고 테스트할 수 있습니다. GitHub Pages에 자동 배포됩니다.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">지금 시작하세요</CardTitle>
            <CardDescription className="text-base">
              무료로 시작하고 모든 기능을 체험해보세요
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/login">
              <Button size="lg" className="w-full md:w-auto">
                무료로 시작하기
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 border-t">
        <div className="text-center text-sm text-muted-foreground">
          <p>© 2024 MyApp. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
