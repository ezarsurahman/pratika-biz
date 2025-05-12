"use client"

import { useState } from "react"
import Image from "next/image"
import { 
  Dialog, 
  DialogContent, 
  DialogTrigger, 
  DialogTitle,
  DialogOverlay 
} from "@/components/ui/dialog"

// List of certificates from the attachment
const certificates = [
  { id: 1, name: "Aspindo Certificate", image: "/certificate/aspindo.jpg" },
  { id: 2, name: "Dinas Perindustrian Certificate", image: "/certificate/dinas-perindustrian-perdagangan1 (1).jpg" },
  { id: 3, name: "Mitsubishi Motors Certificate 1", image: "/certificate/mitsubisi-motors (2).jpg" },
  { id: 4, name: "Mitsubishi Motors Certificate 2", image: "/certificate/mitsubisi-motors.jpg" },
  { id: 5, name: "Panasonic Certificate 1", image: "/certificate/panasonic (1).jpg" },
  { id: 6, name: "Panasonic Certificate 2", image: "/certificate/panasonic (2).jpg" },
  { id: 7, name: "Panasonic Certificate 3", image: "/certificate/panasonic (3).jpg" },
  { id: 8, name: "Panasonic Certificate 4", image: "/certificate/panasonic (4).jpg" },
  { id: 9, name: "Panasonic Certificate 5", image: "/certificate/panasonic (5).jpg" },
  { id: 10, name: "Panasonic Certificate", image: "/certificate/panasonic.jpg" },
  { id: 11, name: "Visi Global Certificate", image: "/certificate/visi-global-indonesia.jpg" },
  { id: 12, name: "Yayasan Certificate", image: "/certificate/yayasan.jpg" },
]

interface CertificateCardProps {
  certificate: {
    id: number
    name: string
    image: string
  }
}

const CertificateCard = ({ certificate }: CertificateCardProps) => {
  const [isLoading, setIsLoading] = useState(true)

  return (
      <Dialog>
        <DialogTrigger asChild>
          <div className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow">
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={certificate.image}
                alt={certificate.name}
                className="object-cover"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority={certificate.id <= 4}
              />
            </div>
            <div className="p-3">
              <h3 className="text-sm font-jetbrains-mono font-medium truncate">{certificate.name}</h3>
            </div>
          </div>
        </DialogTrigger>
      <DialogContent className="max-w-4xl w-[90vw] mx-auto left-1/2 -translate-x-1/2">
        {/* Add DialogTitle for accessibility */}
        <DialogTitle className="sr-only">{certificate.name}</DialogTitle>
        
            <div className="relative w-full aspect-[4/3]">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                </div>
              )}
              <Image
                src={certificate.image}
                alt={certificate.name}
                className={`object-contain ${isLoading ? 'opacity-0' : 'opacity-100'}`}
                fill
                onLoadingComplete={() => setIsLoading(false)}
              />
            </div>
        <h2 className="text-xl font-semibold mt-2 text-center">{certificate.name}</h2>
        </DialogContent>
      </Dialog>
  )
}

export const CertificateModule = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-jockey-one text-center mt-10 mb-8">Our Certificates</h1>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {certificates.map((certificate) => (
          <CertificateCard key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </div>
  )
}
