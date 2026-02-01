const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M2 12H22" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M12 2C14.5 4.5 16 8 16 12C16 16 14.5 19.5 12 22C9.5 19.5 8 16 8 12C8 8 9.5 4.5 12 2Z" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: "Global Access",
    description: "Exclusive entry to over 5,000 private properties and experiences worldwide, vetted personally by our team.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
    title: "Secure Booking",
    description: "State-of-the-art encryption and payment security. Your data and travel details are protected at all times.",
    color: "from-green-500/20 to-emerald-500/20",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Tailored Experiences",
    description: "Every trip is a masterpiece. Whether you prefer cultural tours or adventure sports, we build the trip around you.",
    color: "from-rose-500/20 to-pink-500/20",
  },
];

export default function VoyageStandard() {
  return (
    <section id="membership" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium mb-4">
            The Voyage Standard
          </h2>
          <p className="text-[#8b8b99]">
            Redefining luxury travel through technology and human connection.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card glass-card rounded-3xl p-8 text-center hover:border-white/20 transition-all duration-300"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-6 feature-icon`}>
                <span className="text-white">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
              <p className="text-[#8b8b99] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
