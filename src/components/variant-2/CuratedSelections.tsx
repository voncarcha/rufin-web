import Image from "next/image";
import Link from "next/link";

const packages = [
  {
    id: 1,
    name: "Seoul + Jeju Island Adventure",
    duration: "7D6N",
    image: "https://images.unsplash.com/photo-1517154421773-0529f29ea451?w=800&h=600&fit=crop",
    description: "Experience the best of Korea! Explore vibrant Seoul, visit ancient palaces, then escape to the stunning Jeju Island for beaches and nature.",
    price: "₱65,000",
    priceNote: "per person",
    inclusions: ["Roundtrip Airfare", "Hotel Accommodations", "Daily Breakfast", "Airport Transfers", "City Tours"],
    limitedSlots: true,
    size: "large",
  },
  {
    id: 2,
    name: "Jeju Island Getaway",
    duration: "5D4N",
    image: "https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=600&h=400&fit=crop",
    description: "Discover volcanic landscapes, beautiful beaches, and unique culture.",
    price: "₱45,000",
    priceNote: "per person",
    inclusions: ["Roundtrip Airfare", "4-Star Hotel", "Breakfast", "Tours"],
    limitedSlots: true,
    tag: "MOST POPULAR",
    size: "medium",
  },
  {
    id: 3,
    name: "Seoul City Explorer",
    duration: "4D3N",
    image: "https://images.unsplash.com/photo-1538485399081-7191377e8241?w=600&h=400&fit=crop",
    description: "Perfect for K-culture fans! K-drama spots, shopping, and street food.",
    price: "₱38,000",
    priceNote: "per person",
    inclusions: ["Roundtrip Airfare", "3-Star Hotel", "Breakfast", "City Tour"],
    limitedSlots: false,
    tag: "BUDGET FRIENDLY",
    size: "small",
  },
];

export default function CuratedSelections() {
  return (
    <section id="packages" className="py-16 lg:py-24 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs text-[#b58f32] uppercase tracking-wider font-semibold">
              Travel Packages
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium mt-2 text-[#2D2D2D]">
              Featured Destinations
            </h2>
            <p className="text-[#6B7280] mt-2 max-w-md">
              Handpicked Korea packages perfect for families, friends, and couples. All-inclusive stress-free travel.
            </p>
          </div>
          <Link href="#contact" className="btn-outline self-start sm:self-auto flex items-center gap-2">
            Request Custom Package
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Card - Seoul + Jeju */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 package-card group">
            <div 
              className="relative aspect-[16/10] lg:aspect-auto h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${packages[0].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              {packages[0].limitedSlots && (
                <div className="absolute top-4 left-4">
                  <span className="limited-badge">Limited Slots</span>
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[#b58f32] text-sm font-semibold">{packages[0].duration}</span>
                  <span className="text-white/50">|</span>
                  <span className="text-white/70 text-sm">All-Inclusive</span>
                </div>
                <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-white font-medium mb-2">
                  {packages[0].name}
                </h3>
                <p className="text-white/70 text-sm lg:text-base max-w-md mb-4">
                  {packages[0].description}
                </p>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-2xl lg:text-3xl font-bold text-white">{packages[0].price}</span>
                    <span className="text-white/60 text-sm ml-2">{packages[0].priceNote}</span>
                  </div>
                  <Link href="#contact" className="btn-primary">
                    Book Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Jeju Card */}
          <div className="package-card group">
            <div 
              className="relative aspect-[4/3] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${packages[1].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              {packages[1].limitedSlots && (
                <div className="absolute top-3 left-3">
                  <span className="limited-badge text-[10px]">Limited Slots</span>
                </div>
              )}
              {packages[1].tag && (
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] text-white bg-[#5D4E37] px-2 py-1 rounded-full uppercase tracking-wider">{packages[1].tag}</span>
                </div>
              )}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#b58f32] text-xs font-semibold">{packages[1].duration}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white font-medium">
                  {packages[1].name}
                </h3>
                <p className="text-white font-bold mt-1">{packages[1].price} <span className="text-white/60 font-normal text-sm">{packages[1].priceNote}</span></p>
              </div>
            </div>
          </div>

          {/* Seoul Card */}
          <div className="package-card group">
            <div 
              className="relative aspect-[4/3] bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url(${packages[2].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/20" />
              {packages[2].tag && (
                <div className="absolute top-3 right-3">
                  <span className="text-[10px] text-white bg-[#5D4E37] px-2 py-1 rounded-full uppercase tracking-wider">{packages[2].tag}</span>
                </div>
              )}
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[#b58f32] text-xs font-semibold">{packages[2].duration}</span>
                <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white font-medium">
                  {packages[2].name}
                </h3>
                <p className="text-white font-bold mt-1">{packages[2].price} <span className="text-white/60 font-normal text-sm">{packages[2].priceNote}</span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Package Inclusions Note */}
        <div className="mt-8 glass-card rounded-2xl p-6 lg:p-8">
          <div className="flex flex-col lg:flex-row lg:items-center gap-6">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-[#2D2D2D] mb-2">What&apos;s Included in Every Package</h3>
              <p className="text-[#6B7280] text-sm">
                All our packages come with roundtrip airfare, hotel accommodations, daily breakfast, airport transfers, and guided tours. We handle everything so you can focus on making memories!
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {["Airfare", "Hotels", "Breakfast", "Transfers", "Tours"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-[#5D4E37] bg-[#5D4E37]/10 px-3 py-1.5 rounded-full">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
