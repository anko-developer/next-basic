import { notFound } from "next/navigation";

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

type Props = {
  params: {
    slug: string;
  };
};

export default function PantsPage({ params }: Props) {
  if (params.slug === "nothing") {
    notFound();
  }
  return <div>{params.slug} 제품 설명</div>;
}

// Memo
// 프리 렌더링
// 미리 HTML을 만들어 놓음, SEO 최적화!

// 다이나믹 라우트 페이지에서 특정한 경로에 한에서는 미리 페이지를 만들어두고 싶다면 그 경로를 알려주면 된다
export function generateStaticParams() {
  const products = ["pants", "skirt"];
  return products.map((product) => ({
    slug: product,
  }));
}
