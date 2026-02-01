import Link from "next/link";
import Image from "next/image";

const footerLinks = {
  quickLinks: [
    { name: "Travel Packages", href: "#packages" },
    { name: "Why Choose Us", href: "#why-us" },
    { name: "About Us", href: "#about" },
    { name: "Contact", href: "#contact" },
  ],
  destinations: [
    { name: "Seoul, Korea", href: "#packages" },
    { name: "Jeju Island", href: "#packages" },
    { name: "Busan, Korea", href: "#packages" },
    { name: "Custom Packages", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Booking Policy", href: "/booking-policy" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 16.84 5.44 20.87 10 21.8V15H8V12H10V9.5C10 7.57 11.57 6 13.5 6H16V9H14C13.45 9 13 9.45 13 10V12H16V15H13V21.95C18.05 21.45 22 17.19 22 12Z"/>
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: "TikTok",
    href: "#",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-16 lg:py-20 bg-[#FFFAF5]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-2">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <div className="w-15 h-15 rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/logo-2.png"
                alt="Rufin"
                width={60}
                height={60}
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#2D2D2D] leading-tight font-serif">Rufin</span>
              <span className="text-[10px] text-[#6B7280] uppercase tracking-wider">Travel & Tours</span>
            </div>
          </Link>
            <p className="text-sm text-[#6B7280] max-w-xs mb-4">
              Where Memories Begin. Your trusted Philippine-based travel agency for family and group travel to Korea and beyond.
            </p>
            {/* Contact Info */}
            <div className="space-y-2 mb-6 text-sm text-[#6B7280]">
              <p className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                0927 721 9365
              </p>
              <p className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M22 6L12 13L2 6" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                rufintravelandtours@gmail.com
              </p>
              <p className="flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 5.02944 7.02944 1 12 1C16.9706 1 21 5.02944 21 10Z" stroke="currentColor" strokeWidth="1.5"/>
                  <circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
                Makati City, Philippines
              </p>
            </div>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[#1A5D5D]/10 flex items-center justify-center text-[#1A5D5D] hover:bg-[#1A5D5D] hover:text-white transition-all"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#2D2D2D]">Quick Links</h4>
            <ul className="space-y-3">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B7280] hover:text-[#E07B54] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#2D2D2D]">Destinations</h4>
            <ul className="space-y-3">
              {footerLinks.destinations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B7280] hover:text-[#E07B54] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-sm mb-4 text-[#2D2D2D]">Legal</h4>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#6B7280] hover:text-[#E07B54] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-black/5">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#1A5D5D" strokeWidth="1.5"/>
                <path d="M8 12L11 15L16 9" stroke="#1A5D5D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              DOT Accredited
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="11" width="18" height="11" rx="2" stroke="#1A5D5D" strokeWidth="1.5"/>
                <path d="M7 11V7C7 4.23858 9.23858 2 12 2C14.7614 2 17 4.23858 17 7V11" stroke="#1A5D5D" strokeWidth="1.5"/>
                <circle cx="12" cy="16" r="1" fill="#1A5D5D"/>
              </svg>
              Secure Payments
            </div>
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="#1A5D5D" strokeWidth="1.5"/>
              </svg>
              500+ Happy Families
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs text-[#6B7280]">
            &copy; {new Date().getFullYear()} Rufin Travel and Tours. All rights reserved.
          </p>
          <p className="text-xs text-[#6B7280]">
            Made with care in the Philippines
          </p>
        </div>
      </div>
    </footer>
  );
}
