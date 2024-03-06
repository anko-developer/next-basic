import Image from "next/image";
import { getProduct, getProducts } from "@/api/products";
import { redirect } from "next/navigation";
import GoProductsButton from "@/components/GoProductsButton";

export const revalidate = 5000;

type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params: { slug } }: Props) {
  return {
    title: `제품의 이름: ${slug}`,
  };
}

export default async function ProductPage({ params: { slug } }: Props) {
  const product = await getProduct(slug);

  if (!product) {
    redirect("/products");
  }

  return (
    <div>
      <h1>{product.name} 제품 설명 페이지</h1>
      <Image
        src={`/images/${product.image}`}
        width="400"
        height="400"
        alt={product.name}
      />
      <GoProductsButton />
    </div>
  );
}

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
