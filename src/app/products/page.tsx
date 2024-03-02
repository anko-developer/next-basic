import { getProducts } from '@/api/products';
import Link from 'next/link';

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div>
      <h1>제품 소개 페이지!</h1>
      <ul>
        {products.map(({id, name}) => <li key={id}><Link href={`/products/${id}`}>{name}</Link></li>)}
      </ul>
      
    </div>
  );
}

