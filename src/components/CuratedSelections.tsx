import Image from "next/image";

const destinations = [
  {
    id: 1,
    name: "Cinque Terre, Italy",
    image: "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?w=800&h=600&fit=crop",
    description: "Colorful villages perched on rugged cliffs, offering seaside charm and authentic Italian experiences.",
    price: "$2,450 / week",
    size: "large",
  },
  {
    id: 2,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&h=400&fit=crop",
    tag: "MOST POPULAR CHOICE",
    size: "medium",
  },
  {
    id: 3,
    name: "Reykjavik, Iceland",
    image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600&h=400&fit=crop",
    tag: "BUCKET LIST | NATURE",
    size: "small",
  },
];

export default function CuratedSelections() {
  return (
    <section id="curated" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex items-end justify-between mb-12">
          <div>
            <span className="text-xs text-[#3b9eff] uppercase tracking-wider font-medium">
              Editor&apos;s Choice
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium mt-2">
              Curated Selections
            </h2>
          </div>
          <a href="#" className="hidden sm:flex items-center gap-2 text-sm text-[#8b8b99] hover:text-white transition-colors">
            View all destinations
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Large Card - Cinque Terre */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 relative rounded-3xl overflow-hidden destination-card group">
            <div className="aspect-[16/10] lg:aspect-auto lg:h-full">
              <Image
                src={destinations[0].image}
                alt={destinations[0].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl lg:text-3xl text-white font-medium mb-2">
                {destinations[0].name}
              </h3>
              <p className="text-white/70 text-sm lg:text-base max-w-md mb-4">
                {destinations[0].description}
              </p>
              <span className="price-tag">{destinations[0].price}</span>
            </div>
          </div>

          {/* Santorini Card */}
          <div className="relative rounded-3xl overflow-hidden destination-card group">
            <div className="aspect-[4/3]">
              <Image
                src={destinations[1].image}
                alt={destinations[1].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] text-white/60 uppercase tracking-wider">{destinations[1].tag}</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white font-medium">
                {destinations[1].name}
              </h3>
            </div>
          </div>

          {/* Reykjavik Card */}
          <div className="relative rounded-3xl overflow-hidden destination-card group">
            <div className="aspect-[4/3]">
              <Image
                src={destinations[2].image}
                alt={destinations[2].name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
            <div className="absolute top-4 left-4">
              <span className="text-[10px] text-white/60 uppercase tracking-wider">{destinations[2].tag}</span>
            </div>
            <div className="absolute bottom-4 left-4">
              <h3 className="font-[family-name:var(--font-playfair)] text-xl text-white font-medium">
                {destinations[2].name}
              </h3>
            </div>
          </div>
        </div>

        {/* Personalized Concierge Feature */}
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="glass-card rounded-3xl p-8 flex flex-col justify-center">
            <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-3">Personalized Concierge</h3>
            <p className="text-[#8b8b99] leading-relaxed mb-4">
              Our members receive 24/7 dedicated support. From last-minute dinner reservations at Michelin-starred restaurants to private jet charters, we handle the details so you can focus on the journey.
            </p>
            <a href="#" className="text-sm text-[#3b9eff] flex items-center gap-2 hover:gap-3 transition-all">
              Learn about membership
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
