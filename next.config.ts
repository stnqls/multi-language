import { locales } from "@/app/constants/locales";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    // 지원하려는 모든 로케일
    locales,
    // 로케일 접두사가 없는 경로를 방문할 때 사용할 기본 로케일
    defaultLocale: "en",
  },
};

export default nextConfig;
