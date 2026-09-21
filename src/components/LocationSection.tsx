"use client";

import { useState } from "react";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const coords = "23.260465, 89.765979";

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(coords);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Sampan Highway Inn, KM 103, Dhaka-Khulna Highway"
  )}`;

  return (
    <section id="location" className="py-20 sm:py-28 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Details & Actions */}
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-100 leading-tight mb-4">
              Find us at KM 103
            </h2>

            {/* Coordinates Badge with brand color */}
            <div className="flex items-center gap-3 mb-6">
              <span className="font-mono text-sm sm:text-base font-semibold text-[#fab516] tracking-wide">
                23.260465° N, 89.765979° E
              </span>
              <button
                type="button"
                onClick={handleCopyCoords}
                className="text-[11px] font-mono text-stone-300 hover:text-white border border-white/20 hover:border-[#0072bc] bg-white/5 px-2.5 py-0.5 rounded transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>

            <p className="editorial-spacing text-sm sm:text-base text-stone-300 font-light mb-10 max-w-lg">
              Direct highway access on the main Dhaka–Khulna corridor — no link roads, no detours. Turn in, and you&apos;re back on the highway again within seconds.
            </p>

            {/* Action Buttons in Logo Blue and Gold */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#0072bc] hover:bg-[#008be6] rounded shadow-md shadow-[#0072bc]/25 border border-[#38bdf8]/30 transition-all duration-200"
              >
                Open Google Navigation
              </a>
              <a
                href="tel:+8801929918408"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-stone-200 hover:text-[#fab516] bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#fab516]/50 rounded transition-colors"
              >
                Call the route concierge
              </a>
            </div>
          </div>

          {/* Right Column: Route Schematic Graphic with Logo Colors */}
          <div className="lg:col-span-6">
            <div className="p-8 sm:p-10 rounded border border-white/10 bg-white/[0.02] relative overflow-hidden">
              <div className="text-[11px] font-mono tracking-tag text-stone-300 uppercase mb-8 flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc]" />
                  <span>Corridor Trajectory</span>
                </span>
                <span className="text-[#fab516]">N8 National Highway</span>
              </div>

              {/* Graphic Route Line */}
              <div className="relative py-12 px-4">
                <svg
                  className="w-full h-44 overflow-visible"
                  viewBox="0 0 400 160"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M 40 130 C 140 110, 200 70, 360 30"
                    stroke="rgba(0, 114, 188, 0.4)"
                    strokeWidth="2.5"
                    strokeDasharray="4 4"
                  />
                  {/* Dhaka Point */}
                  <circle cx="40" cy="130" r="4.5" fill="#94a3b8" />
                  {/* Khulna Point */}
                  <circle cx="360" cy="30" r="4.5" fill="#94a3b8" />
                  {/* KM 103 Sampan Point with brand colors */}
                  <circle cx="215" cy="65" r="8" fill="#fab516" />
                  <circle
                    cx="215"
                    cy="65"
                    r="15"
                    stroke="#0072bc"
                    strokeWidth="2"
                    opacity="0.6"
                    className="animate-pulse"
                  />
                  <circle
                    cx="215"
                    cy="65"
                    r="22"
                    stroke="#c8102e"
                    strokeWidth="1"
                    opacity="0.35"
                  />
                </svg>

                {/* Node Annotations */}
                <div className="absolute left-4 bottom-6">
                  <div className="text-xs font-mono text-stone-200 font-medium">Dhaka</div>
                  <div className="text-[10px] text-stone-400">Zero Point · 103 km</div>
                </div>

                <div className="absolute right-4 top-4 text-right">
                  <div className="text-xs font-mono text-stone-200 font-medium">Khulna</div>
                  <div className="text-[10px] text-stone-400">City Hub · 98 km</div>
                </div>

                <div className="absolute left-1/2 top-3 -translate-x-1/4">
                  <div className="px-3 py-1.5 rounded bg-[#090d16] border border-[#fab516]/50 shadow-xl flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
                    <div>
                      <span className="text-xs font-mono font-bold text-[#fab516] block leading-tight">
                        KM 103
                      </span>
                      <span className="text-[11px] text-stone-100 block whitespace-nowrap">
                        Sampan Highway Inn
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Highway summary footnote */}
              <div className="pt-6 border-t border-white/10 flex items-center justify-between text-xs text-stone-300">
                <span>Corridor: Dhaka–Khulna Expressway</span>
                <span className="font-mono text-[#38bdf8]">24/7 Gate Access</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
