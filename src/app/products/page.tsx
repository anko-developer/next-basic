import { getProducts } from "../../service/products";
import Link from "next/link";
import Image from "next/image";
import MeowArticle from "@/components/MeowArticle";
import dogImage from "../../../public/images/dog.jpg";

// export const revalidate = 3000;

export default async function ProductsPage() {
  // 서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  const products = await getProducts();

  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <Image src={dogImage} alt="dog" priority />
      <nav>
        {products &&
          products.map(({ id, name }, index) => (
            <Link key={index} href={`products/${id}`}>
              {name}
            </Link>
          ))}
      </nav>
      <MeowArticle />
    </div>
  );
}
