import Image from "next/image";

const testimonials = [
  {
    id: 1,
    name: "Maria Santos",
    location: "Quezon City",
    trip: "Seoul + Jeju Family Trip",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
    rating: 5,
    quote: "Rufin Travel made our first Korea trip so easy! They handled everything from visa assistance to hotel bookings. Our kids loved Lotte World and we didn't have to worry about a single thing!",
  },
  {
    id: 2,
    name: "The Reyes Family",
    location: "Makati City",
    trip: "Jeju Island Getaway",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?w=100&h=100&fit=crop",
    rating: 5,
    quote: "Best barkada trip ever! We were a group of 12 and Rufin coordinated everything perfectly. The cherry blossom timing was spot on. Already planning our next trip with them!",
  },
  {
    id: 3,
    name: "Carlo & Jenny",
    location: "Cebu City",
    trip: "Seoul Honeymoon",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    quote: "We chose Rufin for our honeymoon and they didn't disappoint. They arranged a special dinner for us and the hotel had flower petals! Very thoughtful team.",
  },
];

export default function Journal() {
  return (
    <section className="py-16 lg:py-24 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs text-[#b58f32] uppercase tracking-wider font-semibold">
            Happy Travelers
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium mt-2 text-[#2D2D2D]">
            What Our Clients Say
          </h2>
          <p className="text-[#6B7280] mt-3 max-w-lg mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what Filipino families are saying about their experience with Rufin Travel and Tours.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card"
            >
              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#b58f32" xmlns="http://www.w3.org/2000/svg">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-[#2D2D2D] leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-[#2D2D2D]">{testimonial.name}</p>
                  <p className="text-sm text-[#6B7280]">{testimonial.trip}</p>
                  <p className="text-xs text-[#b58f32]">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Proof Bar */}
        <div className="mt-12 bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                {testimonials.map((t, i) => (
                  <div key={i} className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-white">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full bg-[#b58f32] border-2 border-white flex items-center justify-center text-white text-xs font-semibold">
                  +497
                </div>
              </div>
              <div>
                <p className="font-semibold text-[#2D2D2D]">Join 500+ happy Filipino families</p>
                <p className="text-sm text-[#6B7280]">who&apos;ve traveled with Rufin</p>
              </div>
            </div>

            <div className="flex items-center gap-6 text-center">
              <div>
                <p className="text-2xl font-bold text-[#b58f32]">4.9</p>
                <p className="text-xs text-[#6B7280]">Average Rating</p>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <p className="text-2xl font-bold text-[#5D4E37]">100%</p>
                <p className="text-xs text-[#6B7280]">Would Recommend</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
