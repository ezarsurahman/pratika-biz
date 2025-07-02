import { items } from "@/data/items";
import { notFound } from "next/navigation";
import ProductDetailClient from "@/modules/products/detailed_page/client";

interface ProductDetailProps {
  params: Promise<{ id: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailProps) {
  const {id}  = await params;
  const product = items.find((item) => item.id === id);
  
  if (!product) return notFound();

  return <ProductDetailClient product={product} />;
}