import Link from "next/link";

const products = ["shirt", "pants", "shoes", "acc"];

export default function ProductsPage() {
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <nav>
        {products &&
          products.map((product, index) => (
            <Link key={index} href={`products/${product}`}>
              {product}
            </Link>
          ))}
      </nav>
    </div>
  );
}
