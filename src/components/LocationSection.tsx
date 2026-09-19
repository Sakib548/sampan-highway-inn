"use client";

import { useState, useEffect, useRef } from "react";

type MapZoomLevel = "closeup" | "corridor";

export default function LocationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [copied, setCopied] = useState(false);
  const [zoomLevel, setZoomLevel] = useState<MapZoomLevel>("closeup");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.08,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const copyCoordinates = () => {
    navigator.clipboard.writeText("23.2604651, 89.7659791");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Verified Distance Matrix From Major Regional Gateways (Official Sampan Highway Inn Data)
  const distanceMatrix = [
    {
      gateway: "Dhaka Zero Point / Jatrabari",
      distance: "103 km",
      time: "(1h 15m)",
    },
    {
      gateway: "Padma Bridge Toll Plaza (Mawa)",
      distance: "72 km",
      time: "(50m)",
    },
    {
      gateway: "Bhanga Junction Expressway Interchange",
      distance: "30 km",
      time: "(25m)",
    },
    {
      gateway: "South Highway Junction",
      distance: "41 km",
      time: "(35m)",
    },
    {
      gateway: "Khulna Divisional City Hub",
      distance: "98 km",
      time: "(1h 15m)",
    },
    {
      gateway: "Barishal Divisional City Hub",
      distance: "125 km",
      time: "(1h 35m)",
    },
  ];

  const highwayPerks = [
    {
      icon: (
        <svg className="w-4 h-4 text-[#0072bc]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Wide Deceleration Slipway",
      desc: "Dedicated service approach lane directly from the highway with zero turning delay.",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "100+ Vehicle Secured Parking",
      desc: "Expansive illuminated parking with dedicated sections for luxury buses, family cars, and SUVs.",
    },
    {
      icon: (
        <svg className="w-4 h-4 text-[#c8102e]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: "24/7 Guarded CCTV Security",
      desc: "Round-the-clock trained guards, perimeter surveillance, and roadside standby support.",
    },
  ];

  // Exact close-up map PB string (1d1463m scale) focuses right on the building premises and official place pin
  const closeupMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1463.0!2d89.7659791!3d23.2604651!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc915b3e67a43%3A0xc9ccd3be4ea97668!2z4Ka44Ka-4Kau4KeN4Kaq4Ka-4KaoIOCmueCmvuCmh-Cmk-Cmr-CmvOCnhyDgpofgpqgg4Kaw4KeH4Ka44KeN4Kaf4KeB4Kaw4KeH4Kao4KeN4KafIOCmkyDgpqrgpr7gprDgp43gpp_gpr8g4Ka44KeH4Kao4KeN4Kaf4Ka-4Kaw!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd";

  const corridorMapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d36580.0!2d89.7400!3d23.2604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ffc915b3e67a43%3A0xc9ccd3be4ea97668!2z4Ka44Ka-4Kau4KeN4Kaq4Ka-4KaoIOCmueCmvuCmh-Cmk-Cmr-CmvOCnhyDgpofgpqgg4Kaw4KeH4Ka44KeN4Kaf4KeB4Kaw4KeH4Kao4KeN4KafIOCmkyDgpqrgpr7gprDgp43gpp_gpr8g4Ka44KeH4Kao4KeN4Kaf4Ka-4Kaw!5e0!3m2!1sen!2sbd!4v1710000000000!5m2!1sen!2sbd";

  return (
    <section
      id="location"
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-[#050811] text-white overflow-hidden border-t border-slate-800/80"
    >
      {/* Background Decorative Mesh & Radiant Orbs */}
      <div className="absolute top-1/4 -left-64 -z-10 w-[550px] h-[550px] bg-[#0072bc]/15 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 -z-10 w-[500px] h-[500px] bg-[#f59e0b]/12 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute top-2/3 left-1/3 -z-10 w-[450px] h-[450px] bg-[#c8102e]/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Subtle Grid Texture */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.45) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Container with generous left & right margins */}
      <div className="max-w-6xl mx-auto px-8 sm:px-14 md:px-18 lg:px-20 xl:px-24">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          {/* Badge with 3 Brand Color Dots */}
          <div
            className={`inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-slate-900/90 border border-slate-800 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-5 shadow-md backdrop-blur-md transform transition-all duration-1000 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#0072bc] shadow-xs shadow-[#0072bc]" title="Highway Blue" />
              <span className="w-2 h-2 rounded-full bg-[#f59e0b] shadow-xs shadow-[#f59e0b]" title="Sampan Gold" />
              <span className="w-2 h-2 rounded-full bg-[#c8102e] shadow-xs shadow-[#c8102e]" title="Inn Crimson Red" />
            </span>
            <span className="text-slate-200">Expressway Route & Access</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-5 font-[family-name:var(--font-outfit)] leading-[1.15] transform transition-all duration-1000 delay-100 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Strategic Stop on the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0072bc] via-[#f59e0b] to-[#c8102e]">
              Dhaka–Khulna
            </span>{" "}
            Highway
          </h2>

          <p
            className={`text-base sm:text-lg text-slate-400 font-[family-name:var(--font-plus-jakarta-sans)] leading-relaxed transform transition-all duration-1000 delay-200 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Located at Hironkhandi, Kashiani along Bangladesh&apos;s south-western expressway corridor—featuring effortless deceleration, secured parking, and 24/7 roadside hospitality.
          </p>
        </div>

        {/* 2-Column Balanced Grid: Left (Info & Distances) / Right (Interactive Map Half of Screen) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Half: Destination Identity, Distances & Actions */}
          <div
            className={`lg:col-span-6 flex flex-col justify-between space-y-6 transform transition-all duration-1000 delay-300 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Primary Address & GPS Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-950 border border-slate-800 shadow-xl backdrop-blur-md relative group hover:border-slate-700 transition-all duration-300">
              <div className="flex items-start gap-3.5">
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#0072bc]/25 to-[#c8102e]/20 border border-[#0072bc]/35 flex items-center justify-center text-[#0072bc] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-bold uppercase tracking-widest text-[#f59e0b]">Official Destination</span>
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 text-[10px] font-semibold">
                      Open 24/7
                    </span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mt-1 font-[family-name:var(--font-outfit)] leading-tight">
                    Sampan Highway Inn Restaurant & Party Center
                  </h3>
                  <p className="text-sm text-slate-300 font-medium mt-1 font-bangla">
                    সাম্পান হাইওয়ে ইন রেস্টুরেন্ট ও পার্টি সেন্টার
                  </p>
                  <p className="text-xs text-slate-400 mt-1.5 leading-relaxed">
                    Hironkhandi, Kashiani (Dhaka - Khulna National Highway), Bangladesh.
                  </p>
                </div>
              </div>

              {/* Coordinates Bar */}
              <div className="mt-5 pt-4 border-t border-slate-800/90 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-slate-300 text-[11px] sm:text-xs">
                    23.2604651° N, 89.7659791° E
                  </span>
                </div>
                <button
                  type="button"
                  onClick={copyCoordinates}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-700 transition-all font-medium text-xs cursor-pointer"
                >
                  {copied ? (
                    <>
                      <svg className="w-3.5 h-3.5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                      </svg>
                      <span>Copy GPS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Distance Matrix From Major Regional Gateways */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-slate-900/95 via-slate-900/80 to-slate-950 border border-slate-800/90 shadow-xl backdrop-blur-md">
              <div className="flex items-center justify-between mb-3 pb-3 border-b border-slate-800/80">
                <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-300 font-[family-name:var(--font-outfit)] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  Distance Matrix From Major Regional Gateways
                </h4>
              </div>

              <div className="divide-y divide-slate-800/70">
                {distanceMatrix.map((item, idx) => (
                  <div
                    key={idx}
                    className="py-2.5 sm:py-3 flex items-center justify-between gap-3 group hover:bg-slate-800/30 px-1 sm:px-2 rounded-lg transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white transition-colors">
                      {item.gateway}
                    </span>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="font-bold text-emerald-400 text-xs sm:text-sm font-mono">
                        {item.distance}
                      </span>
                      <span className="text-slate-400 text-xs">
                        {item.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Highway Perks List */}
            <div className="space-y-2.5">
              {highwayPerks.map((perk, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 p-3 rounded-xl bg-slate-900/40 border border-slate-800/70 hover:bg-slate-900/70 transition-all"
                >
                  <div className="p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 shrink-0 mt-0.5">
                    {perk.icon}
                  </div>
                  <div>
                    <h5 className="text-xs font-bold text-slate-200 font-[family-name:var(--font-outfit)]">
                      {perk.title}
                    </h5>
                    <p className="text-[11px] text-slate-400 mt-0.5 leading-relaxed">{perk.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-1">
              <a
                href="https://maps.app.goo.gl/NhsorgHzdek2ieqVA"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-[#0072bc] hover:bg-[#005a96] text-white font-semibold text-xs shadow-lg shadow-[#0072bc]/25 hover:shadow-xl hover:shadow-[#0072bc]/35 transition-all transform hover:-translate-y-0.5 text-center group"
              >
                <span>Open in Google Maps</span>
                <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-slate-800/90 hover:bg-slate-800 text-slate-200 hover:text-white border border-slate-700 font-semibold text-xs transition-all text-center"
              >
                <span>Highway Help Desk</span>
                <svg className="w-3.5 h-3.5 text-[#f59e0b]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Half: Interactive Map Taking Exactly Half of the Screen */}
          <div
            className={`lg:col-span-6 flex flex-col transform transition-all duration-1000 delay-450 ease-out ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Glowing Tri-Color Border Frame around Map */}
            <div className="relative p-[1px] rounded-3xl bg-gradient-to-r from-[#0072bc]/50 via-[#f59e0b]/40 to-[#c8102e]/50 shadow-2xl shadow-black/80 h-full flex flex-col">
              <div className="relative rounded-3xl overflow-hidden bg-slate-950/95 backdrop-blur-xl flex flex-col h-full">
                {/* Map Header HUD */}
                <div className="p-3.5 sm:p-4 border-b border-slate-800/90 bg-slate-900/90 backdrop-blur-md flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                    </span>
                    <div>
                      <p className="text-xs font-bold text-white font-[family-name:var(--font-outfit)] leading-none">
                        Live Property Pinpoint
                      </p>
                      <p className="text-[10px] text-slate-400 mt-0.5">Direct Kashiani Entry</p>
                    </div>
                  </div>

                  {/* Zoom Presets Toggle */}
                  <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800 text-xs">
                    <button
                      type="button"
                      onClick={() => setZoomLevel("closeup")}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all duration-200 cursor-pointer ${
                        zoomLevel === "closeup"
                          ? "bg-[#0072bc] text-white shadow-xs font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Close-Up
                    </button>
                    <button
                      type="button"
                      onClick={() => setZoomLevel("corridor")}
                      className={`px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all duration-200 cursor-pointer ${
                        zoomLevel === "corridor"
                          ? "bg-[#0072bc] text-white shadow-xs font-semibold"
                          : "text-slate-400 hover:text-white"
                      }`}
                    >
                      Expressway
                    </button>
                  </div>
                </div>

                {/* Embedded Map Frame (Fill height so it balances the left column) */}
                <div className="relative w-full flex-1 min-h-[440px] sm:min-h-[500px] lg:min-h-[560px] bg-slate-950">
                  <iframe
                    title="Sampan Highway Inn Exact Property Location Map"
                    key={zoomLevel}
                    src={zoomLevel === "closeup" ? closeupMapUrl : corridorMapUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="eager"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full absolute inset-0"
                  />
                </div>

                {/* Map Bottom Info Bar */}
                <div className="p-3 sm:p-3.5 border-t border-slate-800/90 bg-slate-900/90 backdrop-blur-md flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#0072bc]" />
                      <span className="text-slate-300 text-[11px]">Deceleration Ramp</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#f59e0b]" />
                      <span className="text-slate-300 text-[11px]">Coach & Car Plaza</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
                      <span className="text-slate-300 text-[11px]">24/7 Rest Stop</span>
                    </div>
                  </div>

                  <a
                    href="https://maps.app.goo.gl/NhsorgHzdek2ieqVA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-[#0072bc] hover:text-sky-300 transition-colors"
                  >
                    <span>Google Maps Directions</span>
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
