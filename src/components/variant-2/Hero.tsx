import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="stagger-children">
            <span className="label-tag inline-block mb-6">
              Family & Group Travel Specialists
            </span>

            <h1 className="font-[family-name:var(--font-playfair)] text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-medium leading-[1.1] mb-6 text-[#2D2D2D]">
              Where Memories{" "}
              <span className="leading-tight block gradient-text">Begin.</span>
            </h1>

            <p className="text-[#6B7280] text-lg lg:text-xl leading-relaxed max-w-lg mb-8">
              Your trusted Philippine-based travel agency. We specialize in stress-free planning for family vacations, group trips, and unforgettable adventures to Korea, Jeju Island, and beyond.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link href="#contact" className="btn-primary flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Inquire Now
              </Link>
              <Link href="#packages" className="btn-outline flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" stroke="currentColor" strokeWidth="2"/>
                  <line x1="16" y1="2" x2="16" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="8" y1="2" x2="8" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <line x1="3" y1="10" x2="21" y2="10" stroke="currentColor" strokeWidth="2"/>
                </svg>
                View Packages
              </Link>
            </div>

            {/* Social Proof */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="avatar-stack">
                <Image
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop"
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
                <Image
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
                  alt=""
                  width={36}
                  height={36}
                  className="rounded-full object-cover"
                />
              </div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#b58f32" xmlns="http://www.w3.org/2000/svg">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-[#6B7280]">Trusted by 500+ Filipino families</span>
              </div>
            </div>
          </div>

          {/* Right - Bento Image Grid */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6">
            {/* Large Image - Top Left - Korea */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] destination-card shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1538485399081-7191377e8241?w=600&h=750&fit=crop"
                alt="Gyeongbokgung Palace, Seoul Korea"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="text-xs text-white/80 uppercase tracking-wider">Most Popular</span>
                <p className="text-white font-semibold">Seoul, Korea</p>
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4 lg:gap-6">
              {/* Top Right Card - Jeju Featured */}
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-lg destination-card">
                <Image
                  src="https://images.unsplash.com/photo-1596402184320-417e7178b2cd?w=400&h=400&fit=crop"
                  alt="Jeju Island"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="limited-badge">Limited Slots</span>
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-semibold">Jeju Island</p>
                  <p className="text-white/70 text-sm">5D4N Package</p>
                  <p className="text-[#b58f32] font-bold mt-1">From ₱45,000</p>
                </div>
              </div>

              {/* Bottom Right Card - Family */}
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] destination-card group shadow-lg">
                <Image
                  src="https://images.unsplash.com/photo-1511895426328-dc8714191300?w=400&h=300&fit=crop"
                  alt="Happy family traveling"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs text-white/70 uppercase tracking-wider">Family Travel</span>
                  <p className="text-white font-medium">Create Memories Together</p>
                </div>
                <Link href="#packages" className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center hover:bg-[#b58f32] transition-colors">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
