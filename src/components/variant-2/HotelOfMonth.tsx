import Image from "next/image";
import Link from "next/link";

export default function HotelOfMonth() {
  return (
    <section id="about" className="py-16 lg:py-24 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <Image
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?w=800&h=600&fit=crop"
                alt="Happy travelers at airport"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-8 lg:-right-8 bg-white rounded-2xl p-6 shadow-xl max-w-[200px]">
              <div className="text-3xl font-bold text-[#b58f32] mb-1">500+</div>
              <div className="text-sm text-[#6B7280]">Happy Filipino families served since 2020</div>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <span className="text-xs text-[#b58f32] uppercase tracking-wider font-semibold">
              About Rufin Travel and Tours
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium mt-2 mb-6 text-[#2D2D2D]">
              Creating Meaningful Travel Experiences
            </h2>

            <div className="space-y-4 text-[#6B7280] leading-relaxed">
              <p>
                <strong className="text-[#2D2D2D]">Where Memories Begin.</strong> That&apos;s not just our tagline—it&apos;s our promise to every Filipino family who travels with us.
              </p>
              <p>
                Founded in Makati City, Rufin Travel and Tours was born from a simple belief: that travel should bring families closer together, not stress them apart. We&apos;ve seen too many vacations ruined by booking headaches, language barriers, and poor planning.
              </p>
              <p>
                That&apos;s why we do things differently. From the moment you inquire to the moment you return home with a phone full of photos and a heart full of memories, we&apos;re with you every step of the way.
              </p>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1A5D5D" strokeWidth="1.5"/>
                  <path d="M8 12L11 15L16 9" stroke="#1A5D5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium text-[#2D2D2D]">DOT Accredited</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1A5D5D" strokeWidth="1.5"/>
                  <path d="M8 12L11 15L16 9" stroke="#1A5D5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium text-[#2D2D2D]">Secure Payments</span>
              </div>
              <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1A5D5D" strokeWidth="1.5"/>
                  <path d="M8 12L11 15L16 9" stroke="#1A5D5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="text-sm font-medium text-[#2D2D2D]">Licensed Agency</span>
              </div>
            </div>

            <Link href="#contact" className="btn-secondary inline-flex items-center gap-2 mt-8">
              Get in Touch
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
