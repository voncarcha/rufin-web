import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="stagger-children">
            <span className="label-tag inline-block mb-6">
              New Season: Kyoto & Patagonia
            </span>

            <h1 className="font-[family-name:var(--font-playfair)] text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] mb-6">
              Curating the{" "}
              <span className="block">Uncharted.</span>
            </h1>

            <p className="text-[#8b8b99] text-lg lg:text-xl leading-relaxed max-w-lg mb-8">
              Experience the world&apos;s most breathtaking destinations with itineraries crafted for the modern explorer. Luxury, adventure, and comfort in one seamless booking.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="btn-primary flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="2"/>
                  <path d="M21 21L16.65 16.65" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Explore Destinations
              </button>
              <button className="btn-outline flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>
                </svg>
                Watch The Film
              </button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4">
              <div className="avatar-stack">
                <Image
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                  alt="User"
                  width={32}
                  height={32}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#fbbf24" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#8b8b99]">4.9/5 from 2000+ Travelers</span>
              </div>
            </div>
          </div>

          {/* Right - Bento Image Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/* Large Image - Top Left */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] destination-card">
              <Image
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&h=750&fit=crop"
                alt="Japanese Temple"
                fill
                className="object-cover"
              />
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 lg:gap-6">
              {/* Top Right Card - Featured */}
              <div className="relative rounded-2xl overflow-hidden aspect-square glass-card p-4 destination-card">
                <div className="absolute inset-0">
                  <Image
                    src="https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400&h=400&fit=crop"
                    alt="Kyoto Japan"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="relative h-full flex flex-col justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="white" strokeWidth="2"/>
                        <circle cx="12" cy="7" r="4" stroke="white" strokeWidth="2"/>
                      </svg>
                    </div>
                    <span className="text-xs text-white/70">TOP CURATOR</span>
                  </div>
                  <div>
                    <p className="text-white font-medium">Kyoto, Japan</p>
                    <p className="text-white/60 text-sm">7 nights</p>
                    <p className="text-white font-semibold mt-2">$3,450.00</p>
                  </div>
                </div>
              </div>

              {/* Bottom Right Card */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] destination-card group">
                <Image
                  src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&h=300&fit=crop"
                  alt="Swiss Alps"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-white/60 uppercase tracking-wider">Adventure</span>
                  <p className="text-white font-medium">Swiss Alps</p>
                </div>
                <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-white/30 transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
