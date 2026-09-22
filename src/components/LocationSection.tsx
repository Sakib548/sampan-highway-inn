"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

export default function LocationSection() {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"map" | "corridor">("map");
  const coords = "23.260465, 89.765979";

  const handleCopyCoords = () => {
    navigator.clipboard.writeText(coords);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "23.260465,89.765979 (Sampan Highway Inn)"
  )}`;

  return (
    <section id="location" className="py-20 sm:py-28 border-b border-white/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 w-96 h-96 bg-[#0072bc]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 -z-10 w-96 h-96 bg-[#fab516]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Details & Information */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Location Kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 bg-white/5 text-[11px] font-mono tracking-tag text-stone-300 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0072bc] animate-pulse" />
                <span>DIRECT ACCESS · N8 CORRIDOR</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-100 leading-tight mb-4">
                Find us at  Kashiani
              </h2>

              {/* Coordinates Badge with brand color & copy button */}
              <div className="flex items-center gap-3 mb-6">
                {/* <span className="font-mono text-sm sm:text-base font-semibold text-[#fab516] tracking-wide">
                  23.260465° N, 89.765979° E
                </span> */}
                <button
                  type="button"
                  onClick={handleCopyCoords}
                  className="text-[11px] font-mono text-stone-300 hover:text-white border border-white/20 hover:border-[#0072bc] bg-white/5 px-2.5 py-0.5 rounded transition-colors cursor-pointer"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>

              <p className="editorial-spacing text-sm sm:text-base text-stone-300 font-light mb-8">
                Direct highway access on the main Dhaka-Khulna corridor with no link roads and no detours. Turn in, and you&apos;re back on the highway again within seconds.
              </p>

              {/* Highway Corridor Transit Milestones */}
              <div className="p-4 rounded-xl border border-white/10 bg-white/[0.02] mb-8 space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between text-stone-300">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                    <span>Padma Bridge Toll Plaza</span>
                  </span>
                  <span className="text-brand-gold">72 km · 50m</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                    <span>Bhanga Interchange</span>
                  </span>
                  <span className="text-brand-gold">30 km · 25m</span>
                </div>
                <div className="flex items-center justify-between text-stone-300">
                  <span className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#c8102e]" />
                    <span>Dhaka Zero Point</span>
                  </span>
                  <span className="text-stone-400">103 km · 1h 15m</span>
                </div>
              </div>
            </div>

            {/* Action Buttons in Logo Blue and Gold */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-brand-blue hover:bg-[#008be6] rounded shadow-md shadow-brand-blue/25 border border-[#38bdf8]/30 transition-all duration-200"              >
                <span>Open Google Navigation</span>
                <ArrowUpRight className="w-4 h-4 text-brand-gold shrink-0" />
                {/* <span className="text-brand-gold">↗</span> */}
              </a>
              {/* <a
                href="tel:+8801929918408"
                className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-stone-200 hover:text-[#fab516] bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#fab516]/50 rounded transition-colors"
              >
                Call the route concierge
              </a> */}
            </div>
          </div>

          {/* Right Column: Google Map with Luxury Frame & Tab Switcher */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/15 bg-[#0e1320] overflow-hidden shadow-2xl flex flex-col">
              {/* Map Header with View Switcher */}
              <div className="p-3 sm:p-4 bg-[#0a0d16] border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-2 text-xs font-mono text-stone-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-semibold text-white">Interactive Map:</span>
                  <span className="text-stone-400 truncate"> Dhaka-Khulna Highway,Kashiani</span>
                </div>

                {/* View Switcher Tabs */}
                <div className="inline-flex items-center p-1 rounded-lg bg-white/5 border border-white/10 shrink-0">
                  <button
                    type="button"
                    onClick={() => setActiveTab("map")}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${activeTab === "map"
                      ? "bg-brand-blue text-white shadow-xs"
                      : "text-stone-400 hover:text-white"
                      }`}
                  >
                    Google Map
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("corridor")}
                    className={`px-3 py-1 rounded text-xs font-medium transition-colors cursor-pointer ${activeTab === "corridor"
                      ? "bg-brand-blue text-white shadow-xs"
                      : "text-stone-400 hover:text-white"
                      }`}
                  >
                    Route Schematic
                  </button>
                </div>
              </div>

              {/* View 1: Interactive Google Map Embed */}
              {activeTab === "map" && (
                <div className="relative w-full h-100 sm:h-120 bg-stone-900">
                  <iframe
                    src="https://maps.google.com/maps?q=23.260465,89.765979&hl=en&z=14&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sampan Highway Inn Google Map"
                    className="w-full h-full"
                  />

                  {/* Glassmorphism Destination Card Overlay */}
                  <div className="absolute bottom-4 left-4 right-4 sm:right-auto sm:max-w-xs p-3.5 sm:p-4 rounded-xl bg-[#090d16]/90 backdrop-blur-md border border-white/20 shadow-2xl pointer-events-auto">
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="w-2 h-2 rounded-full bg-brand-blue" />
                      <span className="w-2 h-2 rounded-full bg-brand-gold" />
                      <span className="w-2 h-2 rounded-full bg-brand-red" />
                      <span className="text-[10px] font-mono tracking-wider text-stone-300 uppercase font-semibold pl-1">
                        KM 103 Complex
                      </span>
                    </div>
                    <h4 className="text-sm font-semibold text-white mb-1">
                      Sampan Highway Inn
                    </h4>
                    <p className="text-[11px] text-stone-300 font-mono mb-3 leading-tight">
                      Dhaka-Khulna Corridor, Kashiani
                    </p>
                    <a
                      href={googleMapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 w-full py-1.5 px-3 rounded bg-brand-blue hover:bg-[#008be6] text-white text-xs font-medium transition-colors shadow-xs"                    >
                      <span>Get Turn-by-Turn Directions</span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-brand-gold shrink-0" />
                      {/* <span className="text-brand-gold">↗</span> */}
                    </a>
                  </div>
                </div>
              )}

              {/* View 2: Route Schematic Graphic */}
              {activeTab === "corridor" && (
                <div className="relative w-full h-[400px] sm:h-[480px] bg-white/[0.02] p-8 sm:p-12 flex flex-col justify-between">
                  <div className="text-[11px] font-mono tracking-tag text-stone-300 uppercase flex items-center justify-between">
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
                        stroke="rgba(0, 114, 188, 0.5)"
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                      />
                      {/* Dhaka Point */}
                      <circle cx="40" cy="130" r="4.5" fill="#94a3b8" />
                      {/* Khulna Point */}
                      <circle cx="360" cy="30" r="4.5" fill="#94a3b8" />
                      {/* KM 103 Sampan Point */}
                      <circle cx="215" cy="65" r="8" fill="#fab516" />
                      <circle
                        cx="215"
                        cy="65"
                        r="15"
                        stroke="#0072bc"
                        strokeWidth="2"
                        opacity="0.7"
                        className="animate-pulse"
                      />
                      <circle
                        cx="215"
                        cy="65"
                        r="22"
                        stroke="#c8102e"
                        strokeWidth="1"
                        opacity="0.4"
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

                  <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs text-stone-300 font-mono">
                    <span>Corridor: Dhaka-Khulna Expressway</span>
                    <span className="text-[#38bdf8]">24/7 Gate Access</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
