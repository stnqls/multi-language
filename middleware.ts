import { locales } from "@/app/constants/locales";
import { NextRequest, NextResponse } from "next/server";

// 위와 유사하게 또는 라이브러리를 사용하여 선호하는 로케일을 가져옵니다.
function getLocale(request: NextRequest) {
  console.log(request.headers.get("accept-language"));
}

export function middleware(request: NextRequest) {
  // 경로명에 지원되는 로케일이 있는지 확인합니다.
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameHasLocale) return;

  // 로케일이 없으면 리디렉션합니다.
  const locale = getLocale(request);
  request.nextUrl.pathname = `/${locale}${pathname}`;
  // 예: 들어오는 요청이 /products인 경우
  // 새 URL은 이제 /en-US/products입니다.
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: [
    // 모든 내부 경로 (_next)를 건너뜁니다.
    "/((?!_next).*)",
    // 선택 사항: 루트 (/) URL에서만 실행
    // '/'
  ],
};
