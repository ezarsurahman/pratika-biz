"use client"

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'  
import Image from 'next/image'
import { useCallback } from 'react'

// Updated client dictionary with 23 clients
const clients = [
  { name: "Ace Hardware", image: "/clients/PRATIKA-Ace-Hardware.jpg" },
  { name: "AKM", image: "/clients/PRATIKA-AKM.jpg" },
  { name: "BJI", image: "/clients/PRATIKA-BJI.jpg" },
  { name: "Braceboom", image: "/clients/PRATIKA-Braceboon.jpg" },
  { name: "Circlecom", image: "/clients/PRATIKA-Circlecom.jpg" },
  { name: "CV Gunung Sari", image: "/clients/PRATIKA-CV.Gunung-Sari.jpg" },
  { name: "DCA", image: "/clients/PRATIKA-DCA.jpg" },
  { name: "Ericsson", image: "/clients/PRATIKA-Ericsson.jpg" },
  { name: "Gratika", image: "/clients/PRATIKA-Gratika.jpg" },
  { name: "Haussend", image: "/clients/PRATIKA-Haussend.jpg" },
  { name: "Huawei", image: "/clients/PRATIKA-Huawei.jpg" },
  { name: "IMP", image: "/clients/PRATIKA-IMP.jpg" },
  { name: "Indosat", image: "/clients/PRATIKA-Indosat.jpg" },
  { name: "KHT", image: "/clients/PRATIKA-KHT.jpg" },
  { name: "Panasonic", image: "/clients/PRATIKA-Panasonic.jpg" },
  { name: "Persada", image: "/clients/PRATIKA-Persada.jpg" },
  { name: "Prima", image: "/clients/PRATIKA-Prima.jpg" },
  { name: "Sapta", image: "/clients/PRATIKA-Sapta.jpg" },
  { name: "SDK", image: "/clients/PRATIKA-SDK.jpg" },
  { name: "Takagi", image: "/clients/PRATIKA-Takagi.jpg" },
  { name: "TL", image: "/clients/PRATIKA-TL.jpg" },
  { name: "Vega Mandiri", image: "/clients/PRATIKA-Vega-Mandiri.jpg" },
  { name: "WEN", image: "/clients/PRATIKA-WEN.jpg" },
]

// Create rows of clients (4 rows with approximately 6 clients per row)
const clientRows = Array.from({ length: 4 }, (_, rowIndex) => {
  const startIndex = rowIndex * 6;
  // Get 6 clients for each row, except the last row might have fewer
  return clients.slice(startIndex, Math.min(startIndex + 6, clients.length));
});

export const ClientServicesModule = () => {
  const autoplayOptions = {
    delay: 4000,
    rootNode: (emblaRoot: { parentElement: any }) => emblaRoot.parentElement,
  }

  // Create a carousel for each row
  const [emblaRef1] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
  const [emblaRef2] = useEmblaCarousel({ loop: true, startIndex: 1 }, [Autoplay({ ...autoplayOptions, delay: 3000 })])
  const [emblaRef3] = useEmblaCarousel({ loop: true, startIndex: 2 }, [Autoplay({ ...autoplayOptions, delay: 3100 })])
  const [emblaRef4] = useEmblaCarousel({ loop: true, startIndex: 3 }, [Autoplay({ ...autoplayOptions, delay: 3200 })])
  
  const emblaRefs = [emblaRef1, emblaRef2, emblaRef3, emblaRef4];

  return (
    <div className="bg-[#044B7F] rounded-2xl flex flex-col justify-center items-center relative overflow-hidden mt-12 py-4 px-3">
      <p className="font-jockey-one text-3xl text-center text-shadow-lg mb-4">Our Client</p>
      
      {/* Clients Section with multiple rows */}
      <div className="w-full py-4 space-y-4">
        {clientRows.map((rowClients, rowIndex) => (
          <div 
            key={rowIndex} 
            className="embla overflow-hidden" 
            ref={emblaRefs[rowIndex]}
          >
            <div className="embla__container flex">
              {rowClients.map((client, clientIndex) => (
                <div 
                  key={clientIndex} 
                  className="embla__slide flex-[0_0_20%] min-w-0 px-1"
                >
                  <div className="bg-white rounded-lg p-2 flex flex-col items-center h-full">
                    <div className="relative w-full h-32 mb-2 bg-white">
                      <Image
                        src={client.image}
                        alt={client.name}
                        fill
                        style={{ objectFit: "contain" }}
                        className="rounded-lg"
                      />
                    </div>
                    <h3 className="text-sm font-medium text-center truncate w-full font-jetbrains-mono">{client.name}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

