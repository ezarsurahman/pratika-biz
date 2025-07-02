import { items } from "@/data/items";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/modules/products/detailed_page/client";

interface ProductDetailProps {
  params: { id: string};
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const { id } =  params;
  const product = items.find((item) => item.id === id);
  
  if (!product) return notFound();

  return <ProductDetailClient product={product} />;
}