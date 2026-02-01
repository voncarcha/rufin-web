"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FFFAF5]/90 backdrop-blur-xl border-b border-black/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-15 h-15 rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                src="/logo-1.png"
                alt="Rufin"
                width={60}
                height={60}
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#2D2D2D] leading-tight font-serif">Rufin</span>
              <span className="text-[10px] text-[#6B7280] uppercase tracking-wider">Travel & Tours</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#packages" className="nav-link text-sm font-medium">
              Packages
            </Link>
            <Link href="#why-us" className="nav-link text-sm font-medium">
              Why Choose Us
            </Link>
            <Link href="#about" className="nav-link text-sm font-medium">
              About
            </Link>
            <Link href="#contact" className="nav-link text-sm font-medium">
              Contact
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+639277219365" className="text-sm text-[#6B7280] hover:text-[#b58f32] transition-colors flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              +63 927 721 9365
            </a>
            <Link href="#contact" className="btn-primary text-sm">
              Inquire Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#2D2D2D]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {mobileMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </nav>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-black/5">
            <div className="flex flex-col gap-4">
              <Link href="#packages" className="text-sm text-[#6B7280] hover:text-[#b58f32] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Packages
              </Link>
              <Link href="#why-us" className="text-sm text-[#6B7280] hover:text-[#b58f32] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Why Choose Us
              </Link>
              <Link href="#about" className="text-sm text-[#6B7280] hover:text-[#b58f32] font-medium" onClick={() => setMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="#contact" className="text-sm text-[#6B7280] hover:text-[#b58f32] font-medium" onClick={() => setMobileMenuOpen(false)}>
                Contact
              </Link>
              <div className="pt-4 border-t border-black/5 flex flex-col gap-3">
                <a href="tel:+639277219365" className="text-sm text-[#6B7280] flex items-center gap-2">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  +63 927 721 9365
                </a>
                <Link href="#contact" className="btn-primary text-sm w-full text-center" onClick={() => setMobileMenuOpen(false)}>
                  Inquire Now
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
