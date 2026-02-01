import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "A Weekend in Copenhagen",
    excerpt: "Exploring how the world leader in design and sustainable living is Denmark's capital.",
    image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=600&h=400&fit=crop",
    date: "Jan 15, 2025",
    category: "Culture",
  },
  {
    id: 2,
    title: "The Colors of Marrakech",
    excerpt: "Navigating the vibrant souks and hidden riads of Morocco's most exotic city.",
    image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=600&h=400&fit=crop",
    date: "Jan 10, 2025",
    category: "Culture",
  },
  {
    id: 3,
    title: "Packing for Patagonia",
    essential: "Everything you need for trekking through South America's wilderness.",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&h=400&fit=crop",
    date: "Jan 5, 2025",
    category: "Guide",
  },
];

export default function Journal() {
  return (
    <section id="journal" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs text-[#3b9eff] uppercase tracking-wider font-medium">
            The Journal
          </span>
          <h2 className="font-[family-name:var(--font-playfair)] text-3xl lg:text-4xl font-medium mt-2">
            Stories from the Field
          </h2>
        </div>

        {/* Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group cursor-pointer"
            >
              <div className="relative rounded-2xl overflow-hidden mb-4 aspect-[4/3]">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex items-center gap-3 text-xs text-[#8b8b99] mb-2">
                <span>{article.date}</span>
                <span className="w-1 h-1 rounded-full bg-[#8b8b99]" />
                <span>{article.category}</span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-[#3b9eff] transition-colors">
                {article.title}
              </h3>
              <p className="text-[#8b8b99] text-sm leading-relaxed">
                {article.excerpt || article.essential}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
