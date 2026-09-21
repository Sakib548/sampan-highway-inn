"use client";

import Link from "next/link";

interface DistanceItem {
  distance: string;
  name: string;
  time: string;
}

const corridorDistances: DistanceItem[] = [
  { distance: "103 km", name: "Dhaka Zero Point", time: "1h 15m away" },
  { distance: "72 km", name: "Padma Bridge Toll Plaza", time: "50m away" },
  { distance: "30 km", name: "Bhanga Junction", time: "25m away" },
  { distance: "41 km", name: "South Highway Junction", time: "35m away" },
  { distance: "98 km", name: "Khulna City", time: "1h 15m away" },
  { distance: "125 km", name: "Barishal City", time: "1h 35m away" },
];

export default function HeroSection() {
  return (
    <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24 border-b border-white/10 overflow-hidden">
      {/* Brand Tri-Color Ambient Lighting (Blue, Gold, Red from brand logo) */}
      <div className="absolute top-1/4 -left-32 -z-10 w-[450px] h-[450px] bg-[#0072bc]/16 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -z-10 w-[400px] h-[400px] bg-[#fab516]/12 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 -z-10 w-[380px] h-[380px] bg-[#c8102e]/12 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top highway badge with logo tri-color dots */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/5 backdrop-blur-xs text-[11px] font-mono tracking-tag text-stone-200 mb-8">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#0072bc]" />
            <span className="w-2 h-2 rounded-full bg-[#fab516]" />
            <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
          </div>
          <span>KM 103 · DHAKA-KHULNA HIGHWAY</span>
        </div>

        {/* Large Editorial Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-stone-100 max-w-4xl leading-[1.12] mb-8">
          Your perfect stopover on the road home.
        </h1>

        {/* Stopover narrative paragraph with clean word & letter spacing */}
        <p className="editorial-spacing text-base sm:text-lg text-stone-300 max-w-2xl font-light mb-10">
          One turn off the highway brings you to a full stop: a grand dining hall, a banquet-ready party centre, a sweet shop, a super shop, fuel, LPG, and a bed for the night — all on one plot at KM 103.
        </p>

        {/* CTA Buttons in signature brand blue and gold */}
        <div className="flex flex-wrap items-center gap-4 mb-20 sm:mb-28">
          <Link
            href="#restaurant"
            className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#0072bc] hover:bg-[#008be6] rounded shadow-lg shadow-[#0072bc]/25 border border-[#38bdf8]/30 transition-all duration-200"
          >
            Reserve a table
          </Link>
          <Link
            href="#restaurant"
            className="inline-flex items-center justify-center px-6 py-3 text-xs sm:text-sm font-medium tracking-wide text-stone-200 hover:text-[#fab516] bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#fab516]/50 rounded transition-all duration-200"
          >
            Book the party hall
          </Link>
        </div>

        {/* Corridor Distances Grid (6 metrics with brand accents) */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4 pt-10 border-t border-white/10">
          {corridorDistances.map((item, idx) => {
            // cycle through brand accent colors
            const accentBorder =
              idx % 3 === 0
                ? "hover:border-[#0072bc]/50"
                : idx % 3 === 1
                ? "hover:border-[#fab516]/50"
                : "hover:border-[#c8102e]/50";
            return (
              <div
                key={item.name}
                className={`p-4 sm:p-5 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-all duration-200 flex flex-col justify-between group ${accentBorder}`}
              >
                <div>
                  <span className="font-mono text-xl sm:text-2xl font-semibold tracking-tight text-[#fab516] group-hover:text-white transition-colors block mb-1">
                    {item.distance}
                  </span>
                  <span className="text-xs sm:text-[13px] text-stone-200 block font-normal tracking-wide leading-snug">
                    {item.name}
                  </span>
                </div>
                <span className="text-[11px] text-stone-400 font-mono tracking-wider mt-3 block">
                  {item.time}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
