import Image from "next/image";

export default function HotelOfMonth() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background Image */}
          <div className="aspect-[16/9] lg:aspect-[21/9]">
            <Image
              src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&h=800&fit=crop"
              alt="The Aman Tokyo"
              fill
              className="object-cover"
            />
          </div>

          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
            <span className="text-xs text-white/60 uppercase tracking-[0.2em] mb-4">
              Hotel of the Month
            </span>
            <h2 className="font-[family-name:var(--font-playfair)] text-4xl lg:text-6xl xl:text-7xl text-white font-medium mb-4">
              The Aman Tokyo
            </h2>
            <p className="text-white/70 max-w-xl mb-8">
              An urban sanctuary blending traditional Japanese aesthetics with modern luxury. Experience tranquility in the heart of Tokyo.
            </p>
            <button className="btn-outline border-white/30 hover:bg-white hover:text-black">
              View Property
            </button>
          </div>

          {/* Bottom gradient bar */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#3b9eff] to-transparent opacity-50" />
        </div>
      </div>
    </section>
  );
}
