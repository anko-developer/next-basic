import { getProduct, getProducts } from "@/service/products";
import { notFound } from "next/navigation";
import Image from "next/image";

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export const revalidate = 3000;

type Props = {
  params: {
    slug: string;
  };
};

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    notFound();
  }

  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  return (
    <>
      <div>{product.name} 제품 설명</div>
      <Image
        src={`/images/${product.image}`}
        alt={product.name}
        width={300}
        height={300}
      />
    </>
  );
}

// 다이나믹 라우트 페이지에서 특정한 경로에 한에서는 미리 페이지를 만들어두고 싶다면 그 경로를 알려주면 된다
export async function generateStaticParams() {
  // 모든 제품의 페이지들을 미리 만들어 둘 수 있게 해줄거임 (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
