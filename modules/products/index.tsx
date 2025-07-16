'use client'

import AnimationOnScroll from "@/components/AnimationOnScroll"
import Image from "next/image"
import { ItemContainer } from "./components/ItemContainer";
import { items } from "@/data/items";
import { useState, useMemo } from "react";

const CATEGORIES = [
  "All",
  "Piping and Tubing", 
  "Metal Stamping",
  "Metal Machining",
  "Assembly",
];

export const ProductModule = () => {
  const [category, setCategory] = useState(CATEGORIES[0]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const PER_PAGE = 12;

  const filtered = useMemo(() => {
    return items.filter(
      (item) =>
        (category === "All" || item.category === category) &&
        item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [category, search]);

  const total = filtered.length;
  const totalPages = Math.ceil(total / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className=""> 
      <AnimationOnScroll classNameInView="opacity-100 transition-opacity duration-500" classNameNotInView="opacity-0">
        {/* Hero Section - Responsive */}
        <div className="min-h-[60vh] md:min-h-screen md:h-screen relative overflow-hidden rounded-b-4xl" id="hero">
          <Image 
            src={"/blur-product.png"}
            alt='blur image'
            className='z-10 absolute inset-0 w-full h-full object-cover rounded-b-4xl'
            width={1920}
            height={1080}
            priority
          />
          
          <div className="absolute inset-0 z-20 bg-gradient-to-br from-[#2A9BDD]/90 via-[#2A9BDD]/60 to-transparent rounded-b-4xl" />

          <div className="absolute top-0 left-0 z-30 flex flex-col items-start justify-center md:justify-start h-full w-full p-4 md:p-16">
            <div className="mt-4 md:mt-20">
              <span className="font-jockey-one text-white text-2xl sm:text-4xl md:text-6xl drop-shadow-lg">
                Explore Our
              </span>
              <br />
              <span className="font-jockey-one text-[#FFD600] text-3xl sm:text-6xl md:text-8xl drop-shadow-lg">
                Products
              </span>
            </div>
            <span className="mt-3 md:mt-4 inline-block bg-[#FFD600] text-[#222] font-jetbrains-mono text-sm sm:text-base md:text-2xl px-3 md:px-4 py-2 rounded-xl shadow font-semibold">
              Innovative Solutions for Every Industry
            </span>
          </div>
        </div>

        {/* Products Section - Responsive */}
        <div className="container mx-auto py-6 md:py-8 px-4 min-h-screen">
          
          {/* Category Tabs - Responsive */}
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`font-jetbrains-mono px-3 md:px-4 py-2 rounded-full shadow text-sm md:text-lg transition-all whitespace-nowrap ${
                  cat === category ? "bg-[#2A9BDD] text-white" : "bg-white text-[#2A9BDD]"
                }`}
                onClick={() => { setCategory(cat); setPage(1); }}
              >
                {cat}
              </button>
            ))}
          </div>
          
          {/* Search Bar - Responsive */}
          <div className="flex justify-center mb-4">
            <div className="relative w-full max-w-md">
              <input
                type="text"
                placeholder="Search products here"
                className="w-full border border-gray-300 rounded-full py-2 px-4 pl-10 font-jetbrains-mono text-sm md:text-lg focus:outline-none focus:ring-2 focus:ring-[#2A9BDD]/50"
                value={search}
                onChange={e => { setSearch(e.target.value); setPage(1); }}
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </div>
          </div>
         
          {/* Results Counter - Responsive */}
          <div className="text-center text-xs md:text-sm font-jetbrains-mono mb-4 text-gray-600">
            Showing {total === 0 ? 0 : (page - 1) * PER_PAGE + 1}-{Math.min(page * PER_PAGE, total)} of {total} products
          </div>

          {/* Products Grid - Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6 mb-8">
            {paged.length === 0 ? (
              <div className="col-span-full text-center text-gray-400 font-jetbrains-mono py-8">
                No products found.
              </div>
            ) : (
              paged.map((item) => (
                <ItemContainer key={item.id} id={item.id} src={item.photo} text={item.name} />
              ))
            )}
          </div>
          
          {/* Pagination - Responsive */}
          {totalPages > 1 && (
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {/* Previous Button */}
              {page > 1 && (
                <button
                  className="w-8 h-8 md:w-10 md:h-10 rounded bg-white border border-gray-300 font-jetbrains-mono text-sm md:text-lg shadow hover:bg-gray-100 flex items-center justify-center"
                  onClick={() => setPage(page - 1)}
                >
                  &#8249;
                </button>
              )}

              {/* Page Numbers - Show limited on mobile */}
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(p => {
                  // On mobile, show current page ± 1, on desktop show all
                  if (typeof window !== 'undefined' && window.innerWidth < 768) {
                    return Math.abs(p - page) <= 1;
                  }
                  return true;
                })
                .map((p) => (
                  <button
                    key={p}
                    className={`w-8 h-8 md:w-10 md:h-10 rounded border font-jetbrains-mono text-sm md:text-lg shadow transition-all ${
                      p === page 
                        ? "bg-[#FFD600] border-[#FFD600] text-black font-bold" 
                        : "bg-white border-gray-300 hover:bg-gray-100"
                    }`}
                    onClick={() => setPage(p)}
                  >
                    {p}
                  </button>
                ))}

              {/* Next Button */}
              {page < totalPages && (
                <button
                  className="w-8 h-8 md:w-10 md:h-10 rounded bg-white border border-gray-300 font-jetbrains-mono text-sm md:text-lg shadow hover:bg-gray-100 flex items-center justify-center"
                  onClick={() => setPage(page + 1)}
                >
                  &#8250;
                </button>
              )}
            </div>
          )}
        </div>
      </AnimationOnScroll>
    </div>
  )
}