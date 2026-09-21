"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative pt-16 pb-12 bg-[#060910] text-stone-300 border-t border-white/10">
      {/* Brand Tri-color subtle top bar */}
      <div className="absolute top-0 left-0 right-0 h-[2px] brand-tricolor-gradient" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-14 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#0072bc]" />
              <span className="w-2 h-2 rounded-full bg-[#fab516]" />
              <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
              <h3 className="font-serif text-lg text-stone-100 pl-1">
                Sampan Highway Inn
              </h3>
            </div>
            <p className="text-xs text-[#fab516] font-mono mb-3">
              KM 103, Dhaka-Khulna Highway.
            </p>
            <p className="editorial-spacing text-xs text-stone-400 font-light max-w-sm">
              Restaurant, party centre, sweets, retail, fuel and rest — one stop, part of Sampan Group.
            </p>
          </div>

          {/* On this page */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono tracking-tag text-stone-400 uppercase mb-4">
              On this page
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="#restaurant" className="text-stone-300 hover:text-white transition-colors">
                  Restaurant & Party
                </Link>
              </li>
              <li>
                <Link href="#stay" className="text-stone-300 hover:text-white transition-colors">
                  Stay
                </Link>
              </li>
              <li>
                <Link href="#sweetbox" className="text-stone-300 hover:text-white transition-colors">
                  Sweet Box
                </Link>
              </li>
              <li>
                <Link href="#retail" className="text-stone-300 hover:text-white transition-colors">
                  Retail
                </Link>
              </li>
              <li>
                <Link href="#fuel" className="text-stone-300 hover:text-white transition-colors">
                  Fuel & LPG
                </Link>
              </li>
              <li>
                <Link href="#gallery" className="text-stone-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="#location" className="text-stone-300 hover:text-white transition-colors">
                  Location
                </Link>
              </li>
            </ul>
          </div>

          {/* Sister properties */}
          <div className="lg:col-span-3">
            <h4 className="text-[11px] font-mono tracking-tag text-stone-400 uppercase mb-4">
              Sister properties
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <span className="text-stone-300">Express Highway Inn</span>
              </li>
              <li>
                <span className="text-stone-300">Sampan White House</span>
              </li>
              <li>
                <span className="text-stone-300">Sampan Agro & Golf Resort</span>
              </li>
              <li>
                <span className="text-stone-300">Sampan Group</span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h4 className="text-[11px] font-mono tracking-tag text-stone-400 uppercase mb-4">
              Contact
            </h4>
            <ul className="space-y-2 text-xs font-mono">
              <li>
                <a href="tel:+8801929918408" className="text-[#e59a24] hover:text-[#f5aa35] transition-colors">
                  +880 1929-918408
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/8801929918408"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href="https://facebook.com/sampanhighwayinn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-stone-300 hover:text-white transition-colors"
                >
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-stone-500">
          <div>© 2026 Sampan Highway Inn, part of Sampan Group</div>
          <div>
            <Link href="#privacy" className="hover:text-stone-400 transition-colors">
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
