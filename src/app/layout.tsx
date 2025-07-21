import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "다국어 테스트",
  description: "다국어 테스트",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
