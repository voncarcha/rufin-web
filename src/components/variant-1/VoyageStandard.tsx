const features = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M8 12L11 15L16 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Stress-Free Planning",
    description: "Leave the hassle to us! From flights to hotels to tours, we handle every detail so you can simply show up and enjoy your vacation.",
    color: "from-[#E07B54]/20 to-[#C96A45]/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M23 21V19C22.9986 17.1771 21.765 15.5857 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 3.13C17.7699 3.58317 19.0078 5.17799 19.0078 7.005C19.0078 8.83201 17.7699 10.4268 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: "Family & Group Experts",
    description: "We specialize in family vacations and barkada trips. Whether it's 4 or 40 travelers, we'll create the perfect itinerary for your group.",
    color: "from-[#1A5D5D]/20 to-[#14504F]/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Trusted & Licensed",
    description: "We're a DOT-accredited travel agency based in Makati City. Your payments and bookings are secure with us.",
    color: "from-[#E07B54]/20 to-[#1A5D5D]/20",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M14 2V8H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 18V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M9 15L12 12L15 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Personalized Itineraries",
    description: "Every trip is customized to your preferences. Want more shopping time? Kid-friendly activities? Just tell us and we'll make it happen!",
    color: "from-[#1A5D5D]/20 to-[#E07B54]/20",
  },
];

export default function VoyageStandard() {
  return (
    <section id="why-us" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs text-[#E07B54] uppercase tracking-wider font-semibold">
            Why Choose Us
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium mt-2 mb-4 text-[#2D2D2D]">
            Travel Made Simple
          </h2>
          <p className="text-[#6B7280]">
            At Rufin Travel and Tours, we believe travel should be exciting, not stressful. Here&apos;s why Filipino families trust us with their dream vacations.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glass-card rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-5 feature-icon`}>
                <span className="text-[#2D2D2D]">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3 text-[#2D2D2D]">{feature.title}</h3>
              <p className="text-[#6B7280] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
