import Link from 'next/link';

const products = ['shirt', 'pants']

export default function ProductsPage() {
  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(product => <li key={product}><Link href={`/products/${product}`}>{product}</Link></li>)}
      </ul>
      
    </div>
  );
}

