import Image from "next/image";
import { getProducts } from "@/api/products";
import Link from "next/link";
import MeowArticle from "@/components/MeowArticle";
import { error } from "console";
import clothesImage from "../../../public/images/clothes.jpg";

// export const revalidate = 5000;

export default async function ProductsPage() {
  // throw new Error();
  const products = await getProducts();

  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <Image src={clothesImage} alt="clothes" />
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </div>
  );
}
