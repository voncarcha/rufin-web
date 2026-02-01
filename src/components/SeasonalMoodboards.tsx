"use client";

import Image from "next/image";
import { useRef } from "react";

const moodboards = [
  {
    id: 1,
    name: "Namib Desert",
    location: "Namibia",
    image: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?w=600&h=800&fit=crop",
  },
  {
    id: 2,
    name: "Maldives",
    location: "Indian Ocean",
    image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=600&h=800&fit=crop",
  },
  {
    id: 3,
    name: "Ha Long Bay",
    location: "Vietnam",
    image: "https://images.unsplash.com/photo-1528127269322-539801943592?w=600&h=800&fit=crop",
  },
  {
    id: 4,
    name: "Marrakech",
    location: "Morocco",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&h=800&fit=crop",
  },
];

export default function SeasonalMoodboards() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium">
            Seasonal Moodboards
          </h2>
          <div className="flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Horizontal Scroll */}
        <div
          ref={scrollRef}
          className="scroll-container flex gap-6 pb-4"
        >
          {moodboards.map((item) => (
            <div
              key={item.id}
              className="scroll-item flex-shrink-0 w-[280px] lg:w-[320px] relative rounded-3xl overflow-hidden destination-card group cursor-pointer"
            >
              <div className="aspect-[3/4]">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-xs text-white/60 uppercase tracking-wider">
                  {item.location}
                </span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white font-medium">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
