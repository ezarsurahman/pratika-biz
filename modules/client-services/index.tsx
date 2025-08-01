"use client"

import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'  
import Image from 'next/image'
import { useCallback } from 'react'
import { useState, useEffect } from 'react'

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

  const serviceDetails = [
    {
      title: "Tubing",
      image: "/clients/PTPRAKTIKANUGRAHA(8).jpg",
      summary: "Produksi tabung presisi dengan berbagai metode forming dan bending.",
      details: [
        "Pemotongan otomatis & manual",
        "Pembengkokan pipa (manual, otomatis, CNC)",
        "Forming ujung untuk koneksi yang rapat dan presisi",
        "Cocok untuk aplikasi HVAC, otomotif, dan elektronik"
      ],
      footer: "14+ mesin forming dan bending • Workshop 1.500 m²"
    },
    {
      title: "Machining",
      image: "/clients/PTPRAKTIKANUGRAHA(3).jpg",
      summary: "Proses pemesinan presisi tinggi untuk menciptakan komponen logam.",
      details: [
        "Lathe (manual, otomatis, CNC)",
        "Milling dan drilling berbagai ukuran",
        "Tapping, turret, grinding",
        "Cocok untuk produksi massal dan kustom"
      ],
      footer: "Didukung oleh 10+ mesin machining dan operator berpengalaman"
    },
    {
      title: "Assembly",
      image: "/clients/PTPRAKTIKANUGRAHA(20).jpg",
      summary: "Lini perakitan khusus untuk produk-produk bernilai tambah.",
      details: [
        "Perakitan motor plate",
        "Pemasangan holder coupling",
        "Proses wiring kapasitor",
        "Sesuai standar pelanggan (contoh: Panasonic)"
      ],
      footer: "3 lini assembly aktif • Quality check internal"
    },
    {
      title: "Metal Stamping",  
      image: "/clients/PTPRAKTIKANUGRAHA(15).jpg",
      summary: "Proses stamping logam untuk klip, bracket, dan komponen datar lainnya.",
      details: [
        "Menggunakan mesin 10–35 ton",
        "Produksi flat spring, klip, dan retaining ring",
        "Cocok untuk volume besar",
        "Tersedia pengecekan dimensi & kekuatan"
      ],
      footer: "5 mesin press aktif • Material SS400, STKM, brass"
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % serviceDetails.length);
  };
  
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + serviceDetails.length) % serviceDetails.length);
  };

  // Create a carousel for each row
  const [emblaRef1] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
  const [emblaRef2] = useEmblaCarousel({ loop: true, startIndex: 1 }, [Autoplay({ ...autoplayOptions, delay: 2000 })])
  const [emblaRef3] = useEmblaCarousel({ loop: true, startIndex: 2 }, [Autoplay({ ...autoplayOptions, delay: 2100 })])
  const [emblaRef4] = useEmblaCarousel({ loop: true, startIndex: 3 }, [Autoplay({ ...autoplayOptions, delay: 2200 })])
  
  const emblaRefs = [emblaRef1, emblaRef2, emblaRef3, emblaRef4];

  return (
    <div className="flex flex-col justify-center items-center relative overflow-hidden mt-4 md:mt-8"> 
      {/* Services Section - Responsive */}
      <div className="w-full min-h-[60vh] md:h-screen bg-[#ffffff] flex justify-center items-center relative overflow-hidden">
        <div className="w-full bg-[#174E7C] relative overflow-hidden flex flex-col justify-center items-center mt-8 md:mt-16">
          {/* Background circle - Hidden on mobile for cleaner look */}
          <div className="hidden md:block absolute w-[80%] h-[80%] rounded-full border-4 border-[#1a5e96] opacity-20 top-[40%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="container mx-auto px-4 md:px-8 py-8 md:py-16 relative z-10 text-white">
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-8 font-jockey-one text-center md:text-left">Layanan Kami</h1>
            <p className="text-sm sm:text-base md:text-xl max-w-3xl mb-6 md:mb-12 font-jetbrains-mono leading-relaxed">
              Pratika menyediakan komponen tubing dan logam dengan presisi tinggi, 
              didukung oleh kemampuan produksi yang lengkap seperti pemotongan otomatis dan manual, pembentukan, 
              pembengkokan, machining, dan perakitan khusus. Komponen kami banyak digunakan di industri HVAC, otomotif, dan elektronik.
            </p>

            {/* Konten layanan - Responsive Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 font-jockey-one">Produksi Tubing</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 font-jetbrains-mono text-sm md:text-xl">
                  <li>Pemotongan pipa (otomatis & manual)</li>
                  <li>Pembengkokan pipa (manual, otomatis, CNC)</li>
                  <li>Forming ujung pipa (otomatis & semi-otomatis)</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 font-jockey-one">Machining</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 font-jetbrains-mono text-sm md:text-xl">
                  <li>Drilling, milling, dan bubut</li>
                  <li>Grinding, tapping, dan turret</li>
                  <li>Lathe CNC & lathe otomatis</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 font-jockey-one">Assembly</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 font-jetbrains-mono text-sm md:text-xl">
                  <li>Lini perakitan khusus</li>
                  <li>Spin motor plate, holder coupling</li>
                  <li>Wiring kapasitor</li>
                </ul>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-lg">
                <h3 className="text-lg md:text-2xl font-semibold mb-2 md:mb-4 font-jockey-one">Metal Stamping</h3>
                <ul className="list-disc pl-4 md:pl-5 space-y-1 md:space-y-2 font-jetbrains-mono text-sm md:text-xl">
                  <li>Press logam (10–35 ton)</li>
                  <li>Pembuatan bracket & sheet metal</li>
                  <li>Flat spring, klip, dan retaining ring</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Service Details Section - Responsive */}
      <div className="w-full min-h-screen bg-[#f8f9fa] py-8 md:py-16">
        <div className="container mx-auto px-4">
          {/* Top Text - Responsive */}
          <div className="text-center mb-8 md:mb-12">
            <span className="inline-block px-3 md:px-4 py-1 bg-orange-100 text-orange-500 rounded-full text-xs md:text-sm font-medium mb-3 md:mb-4">#Cara Kami Bekerja</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 font-jockey-one px-4">Presisi dalam Tubing, Machining, Assembly, dan Stamping</h2>
            <p className="text-base md:text-xl text-gray-600 mt-2 md:mt-3 font-jetbrains-mono px-4">Meningkatkan efisiensi produksi melalui layanan terintegrasi.</p>
            <p className="text-sm md:text-lg text-gray-500 mt-1 md:mt-2 font-jetbrains-mono px-4">Semua proses penting dalam satu tempat.</p>
          </div>

          {/* Service Categories with Hoverable Image - Responsive */}
          <div className="flex flex-col lg:flex-row gap-6 md:gap-8">
            {/* Left side - Service categories */}
            <div className="lg:w-1/2">
              <div className="space-y-4 md:space-y-6">

                {/* Service Cards - Responsive */}
                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 font-jockey-one">Tubing</h3>
                  <p className="mt-2 text-gray-600 font-jetbrains-mono text-sm md:text-base">
                    Produksi dan pembentukan pipa presisi tinggi untuk berbagai aplikasi industri.
                  </p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 font-jockey-one">Machining</h3>
                  <p className="mt-2 text-gray-600 font-jetbrains-mono text-sm md:text-base">
                    Proses pemesinan dengan lathe, milling, drilling, dan CNC untuk menciptakan komponen berkualitas tinggi.
                  </p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 font-jockey-one">Assembly</h3>
                  <p className="mt-2 text-gray-600 font-jetbrains-mono text-sm md:text-base">
                    Lini perakitan khusus untuk produk seperti motor plate, holder coupling, dan wiring kapasitor.
                  </p>
                </div>

                <div className="bg-white p-4 md:p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-800 font-jockey-one">Metal Stamping</h3>
                  <p className="mt-2 text-gray-600 font-jetbrains-mono text-sm md:text-base">
                    Stamping logam dengan presisi menggunakan mesin 10–35 ton untuk klip, bracket, dan komponen datar lainnya.
                  </p>
                </div>

              </div>
            </div>

            {/* Right side - Hoverable Detail - Responsive */}
            <div className="lg:w-1/2 relative">
              <div className="relative h-64 md:h-full rounded-xl overflow-hidden group">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500"
                  style={{ backgroundImage: `url('${serviceDetails[currentIndex].image}')` }}
                ></div>
                <div className="absolute inset-0 bg-black/60"></div>

                {/* Content - Responsive */}
                <div className="relative h-full flex flex-col justify-end p-4 md:p-8 text-white">
                  <h3 className="text-2xl md:text-3xl font-bold mb-2 font-jockey-one">{serviceDetails[currentIndex].title}</h3>
                  <div className="mb-3 md:mb-4 font-jetbrains-mono">
                    <p className="text-sm md:text-base">{serviceDetails[currentIndex].summary}</p>
                  </div>
                  <div className="max-h-32 md:max-h-64 overflow-y-auto font-jetbrains-mono space-y-2">
                    <ul className="list-disc pl-4 md:pl-5 space-y-1">
                      {serviceDetails[currentIndex].details.map((point, idx) => (
                        <li key={idx} className="text-xs md:text-sm">{point}</li>
                      ))}
                    </ul>
                    <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-white/20">
                      <p className="font-medium text-xs md:text-sm">{serviceDetails[currentIndex].footer}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrows - Responsive */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white px-2 md:px-3 py-1 md:py-2 rounded-full text-lg md:text-xl"
              >
                ‹
              </button>
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white px-2 md:px-3 py-1 md:py-2 rounded-full text-lg md:text-xl"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Clients Section - Responsive */}
      <div className="w-full bg-[#ffffff] rounded-xl py-4 md:py-6 px-3 mt-3">
        <p className="font-jockey-one text-2xl md:text-3xl text-center text-shadow-lg mb-4">Our Client</p>
        
        {/* Clients Section with multiple rows - Responsive */}
        <div className="w-full py-2 md:py-4 space-y-2 md:space-y-4">
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
                    className="embla__slide flex-[0_0_33.33%] sm:flex-[0_0_25%] md:flex-[0_0_20%] min-w-0 px-1"
                  >
                    <div className="bg-white rounded-lg p-2 flex flex-col items-center h-full">
                      <div className="relative w-full h-20 md:h-32 mb-2 bg-white">
                        <Image
                          src={client.image}
                          alt={client.name}
                          fill
                          style={{ objectFit: "contain" }}
                          className="rounded-lg"
                        />
                      </div>
                      <h3 className="text-xs md:text-sm font-medium text-center truncate w-full font-jetbrains-mono">{client.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}