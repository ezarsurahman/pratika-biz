import { items } from "@/data/items";
import { notFound } from "next/navigation";
import Image from "next/image";

interface ProductDetailProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const product = items.find((item) => item.id === params.id);
  if (!product) return notFound();

  return (
    <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row gap-8 min-h-screen mt-24" >
      {/* Left: Image */}
      <div className="flex-1 flex flex-col items-center justify-start">
        <div className="bg-white border-2 border-[#B6B6B6] rounded-[20px] p-4 w-full max-w-[420px] flex flex-col items-center">
          <Image src={product.photo} alt={product.name} width={400} height={400} className="object-contain w-full h-[340px]" />
        </div>
        {/* Carousel dots dummy */}
        <div className="flex justify-center gap-2 mt-2">
          <span className="w-3 h-3 rounded-full bg-[#B6B6B6] inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#B6B6B6]/40 inline-block" />
          <span className="w-3 h-3 rounded-full bg-[#B6B6B6]/40 inline-block" />
        </div>
      </div>
      {/* Right: Info */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="flex items-center gap-3">
          <h1 className="font-jockey-one text-4xl md:text-5xl text-black">{product.name}</h1>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#2A9BDD] text-white font-jetbrains-mono text-xs px-3 py-1 rounded-full">{product.category}</span>
        </div>
        {/* Tabs */}
        <div className="flex gap-2 mt-4">
          <button className="bg-[#EDEDED] px-4 py-2 rounded-t-lg font-jetbrains-mono font-bold text-black">Deskripsi</button>
          <button className="bg-[#F6F6F6] px-4 py-2 rounded-t-lg font-jetbrains-mono text-gray-400">Spesifikasi</button>
        </div>
        {/* Deskripsi */}
        <div className="bg-white border border-[#B6B6B6] rounded-b-lg p-4 font-jetbrains-mono text-black">
          {product.description}
        </div>
        {/* Spesifikasi dummy */}
        <div className="bg-white border border-[#B6B6B6] rounded-lg p-4 font-jetbrains-mono text-black mt-2">
          <div className="grid grid-cols-2 gap-x-4 gap-y-1">
            <span>Kunci</span><span className="font-bold">8</span>
            <span>Warna</span><span className="font-bold">Putih</span>
            <span>Material</span><span className="font-bold">Galvanis</span>
            <span>Diameter Drat/Ulir</span><span className="font-bold">6 mm</span>
            <span>Panjang di Bawah Kepala</span><span className="font-bold">15 mm</span>
            <span>Kuantitas</span><span className="font-bold">100 pieces</span>
          </div>
        </div>
      </div>
    </div>
  );
}
