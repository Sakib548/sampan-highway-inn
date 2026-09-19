"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about" },
  { label: "Amenities", href: "#amenities" },
  { label: "Location", href: "#location" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100"
          : "bg-gradient-to-b from-black/60 via-black/20 to-transparent py-4 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Side: Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-transform hover:opacity-95"
            aria-label="Sampan Highway Inn Home"
          >
            <div className={`transition-all duration-300 p-1.5 rounded-xl ${!isScrolled ? "bg-white/10 backdrop-blur-xs border border-white/15" : ""}`}>
              <Image
                src="/logos/sampanhighwayinn.png"
                alt="Sampan Highway Inn Logo"
                width={820}
                height={561}
                priority
                className="h-10 sm:h-12 w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02]"
              />
            </div>
          </Link>

          {/* Right Side: Desktop Navigation Links & CTA */}
          <div className="hidden md:flex items-center gap-2 lg:gap-3">
            <nav className="flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`px-3.5 py-2 text-sm font-medium rounded-full transition-all duration-200 ${
                    isScrolled
                      ? "text-slate-700 hover:text-[#0072bc] hover:bg-slate-100"
                      : "text-white/90 hover:text-white hover:bg-white/15 backdrop-blur-xs"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA Button */}
            <div className={`pl-3 border-l ${isScrolled ? "border-slate-200" : "border-white/25"}`}>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#0072bc] hover:bg-[#005f9e] active:scale-98 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
              >
                Book Now
              </Link>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-xl transition-colors focus:outline-none focus:ring-2 focus:ring-[#0072bc] ${
                isScrolled
                  ? "text-slate-800 hover:bg-slate-100"
                  : "text-white hover:bg-white/20 backdrop-blur-xs"
              }`}
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                // Close (X) Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger Menu Icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:text-[#0072bc] hover:bg-slate-100 transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100">
            <Link
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center px-4 py-2.5 text-base font-semibold text-white bg-[#0072bc] hover:bg-[#005f9e] rounded-xl shadow-md transition-colors"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
