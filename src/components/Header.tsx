"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#07080c]/80 backdrop-blur-xl border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 2L2 7L12 12L22 7L12 2Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 17L12 22L22 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12L12 17L22 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <span className="text-lg font-semibold text-white">Voyage.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="#destinations" className="nav-link text-sm">
              Destinations
            </Link>
            <Link href="#curated" className="nav-link text-sm">
              Curated Trips
            </Link>
            <Link href="#journal" className="nav-link text-sm">
              Journal
            </Link>
            <Link href="#membership" className="nav-link text-sm">
              Membership
            </Link>
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm text-[#8b8b99] hover:text-white transition-colors">
              Log in
            </Link>
            <button className="btn-primary text-sm">
              Start Planning
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
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
          <div className="md:hidden py-4 border-t border-white/5">
            <div className="flex flex-col gap-4">
              <Link href="#destinations" className="text-sm text-[#8b8b99] hover:text-white">
                Destinations
              </Link>
              <Link href="#curated" className="text-sm text-[#8b8b99] hover:text-white">
                Curated Trips
              </Link>
              <Link href="#journal" className="text-sm text-[#8b8b99] hover:text-white">
                Journal
              </Link>
              <Link href="#membership" className="text-sm text-[#8b8b99] hover:text-white">
                Membership
              </Link>
              <div className="pt-4 border-t border-white/5 flex flex-col gap-3">
                <Link href="/login" className="text-sm text-[#8b8b99]">
                  Log in
                </Link>
                <button className="btn-primary text-sm w-full">
                  Start Planning
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
