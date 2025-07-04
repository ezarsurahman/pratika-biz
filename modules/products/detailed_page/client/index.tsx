'use client'
import Image from "next/image";
import { useState } from "react";
import { Item } from "@/types/item";

interface ProductDetailClientProps {
  product: Item;
}

export default function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  
  const photos = Array.isArray(product.photo) ? product.photo : [product.photo];
  const totalPhotos = photos.length;
  const currentPhoto = photos[currentPhotoIndex];

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % totalPhotos);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + totalPhotos) % totalPhotos);
  };

  const goToPhoto = (index: number) => {
    setCurrentPhotoIndex(index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="container mx-auto py-8 px-4 flex flex-col md:flex-row gap-8 max-w-6xl">
        
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="bg-white border-2 border-[#B6B6B6] rounded-[20px] p-4 w-full max-w-[420px] flex flex-col items-center relative">
            <Image src={currentPhoto} alt={product.name} width={400} height={400} className="object-contain w-full h-[340px]" />
            
            
            {totalPhotos > 1 && (
              <>
                <button
                  onClick={prevPhoto}
                  className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border border-[#B6B6B6] rounded-full w-8 h-8 flex items-center justify-center text-[#B6B6B6] hover:text-black transition-all"
                >
                  &#8249;
                </button>
                <button
                  onClick={nextPhoto}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white border border-[#B6B6B6] rounded-full w-8 h-8 flex items-center justify-center text-[#B6B6B6] hover:text-black transition-all"
                >
                  &#8250;
                </button>
              </>
            )}
          </div>
      
          
          <div className="flex justify-center gap-2 mt-4">
            {photos.map((_, i) => (
              <button
                key={i}
                onClick={() => goToPhoto(i)}
                className={`w-3 h-3 rounded-full transition-all hover:scale-110 ${
                  i === currentPhotoIndex ? 'bg-[#2A9BDD]' : 'bg-[#B6B6B6]/40 hover:bg-[#B6B6B6]/60'
                }`} 
              />
            ))}
          </div>
        </div>
       
        <div className="flex-1 flex flex-col justify-center gap-4">
          <div className="flex items-center gap-4">
            <h1 className="font-jockey-one text-4xl md:text-5xl text-black">{product.name}</h1>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-[#2A9BDD] text-white font-jetbrains-mono text-xs px-3 py-1 rounded-full">{product.category}</span>
          </div>
          
          <div className="flex gap-2 mt-4">
            <div className="bg-[#EDEDED] px-4 py-2 rounded-t-lg font-jetbrains-mono font-bold text-black">Deskripsi</div>
          </div>
         
          <div className="bg-white border border-[#B6B6B6] rounded-b-lg p-4 font-jetbrains-mono text-black">
            {product.description}
          </div>
          
          <div className="bg-white border border-[#B6B6B6] rounded-lg p-4 font-jetbrains-mono text-black mt-2">
            <div className="grid grid-cols-2 gap-x-4 gap-y-1">
              <span>Size:</span>
              <span>
                {Array.isArray(product.size)
                  ? Array.prototype.join.call(product.size, ' x ') + ' mm'
                  : String(product.size)}
              </span>
              <span>Photos:</span>
              <span>{totalPhotos} image(s)</span>
              <span>Current:</span>
              <span>{currentPhotoIndex + 1} of {totalPhotos}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}