type Props = {
  params: {
    slug: string
  }
}

export function generateMetadata({ params } : Props) {
  return {
    title: `제품의 이름: ${params.slug}`
  }
}

export default function page({ params } : Props) {
  return (
    <div>
      { params.slug } 제품 설명 페이지
    </div>
  );
}

export function generateStaticParams() {
  const products = ['pants', 'skirt'];
  return products.map(product => ({
    slug: product
  }));
}