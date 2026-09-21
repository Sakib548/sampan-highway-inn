"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Restaurant & Party", href: "#restaurant" },
  { label: "Stay", href: "#stay" },
  { label: "Sweet Box", href: "#sweetbox" },
  { label: "Retail", href: "#retail" },
  { label: "Fuel & LPG", href: "#fuel" },
  { label: "Gallery", href: "#gallery" },
  { label: "Location", href: "#location" },
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
          ? "bg-[#090d16]/95 backdrop-blur-md border-b border-white/10 shadow-lg py-3"
          : "bg-gradient-to-b from-black/85 via-black/45 to-transparent py-5 border-b border-transparent"
      }`}
    >
      {/* Brand Tri-Color hairline strip across top */}
      <div className="absolute top-0 left-0 right-0 h-[2px] brand-tricolor-gradient" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo & KM 103 tag with logo colors */}
          <Link
            href="/"
            className="flex items-center gap-3 group transition-opacity hover:opacity-90"
            aria-label="Sampan Highway Inn Home"
          >
            <div className="relative flex items-center">
              <Image
                src="/logos/sampanhighwayinn.png"
                alt="Sampan Highway Inn Logo"
                width={820}
                height={561}
                priority
                className="h-9 sm:h-10 w-auto object-contain drop-shadow-sm"
              />
            </div>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l border-white/15 text-xs text-stone-300 font-mono tracking-wider">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc]" title="Sampan Blue" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#fab516]" title="Sampan Gold" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" title="Sampan Red" />
              </div>
              <span className="text-stone-300 font-medium">KM 103</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-6">
            <nav className="flex items-center gap-1 xl:gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="px-3 py-1.5 text-xs tracking-wide font-normal text-stone-300 hover:text-white hover:bg-white/5 rounded transition-all"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            {/* Reserve Button - Signature Brand Blue with Gold arrow */}
            <Link
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold tracking-wide text-white bg-[#0072bc] hover:bg-[#008be6] active:scale-98 rounded shadow-md shadow-[#0072bc]/25 border border-[#38bdf8]/30 transition-all duration-200"
            >
              <span>Reserve</span>
              <span className="text-[#fab516] text-sm">→</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-3">
            <Link
              href="#contact"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-[#0072bc] rounded shadow-xs"
            >
              Reserve <span className="text-[#fab516]">→</span>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 text-stone-300 hover:text-white transition-colors focus:outline-none"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#0c0f17]/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-2 shadow-2xl">
          <nav className="flex flex-col space-y-1">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm text-stone-300 hover:text-white hover:bg-white/5 rounded transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
