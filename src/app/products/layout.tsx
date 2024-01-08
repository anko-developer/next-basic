import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "멋진 제품 사이트 | 전체 제품 확인",
  description: "멋진 제품을 확인해 보세요.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <nav>
        <Link href="/products/man">남성</Link>
        <Link href="/products/woman">여성</Link>
      </nav>
      <section>{children}</section>
    </>
  );
}
