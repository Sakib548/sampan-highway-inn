"use client";

import Link from "next/link";

interface Accommodation {
  tag: string;
  title: string;
  description: string;
  features: string[];
}

const accommodations: (Accommodation & { tagColor: string; tagBorder: string; dotColor: string; hoverBorder: string; btnClass: string })[] = [
  {
    tag: "On-site · Open 24/7",
    tagColor: "text-[#38bdf8] bg-[#0072bc]/15",
    tagBorder: "border-[#0072bc]/40",
    dotColor: "bg-[#0072bc]",
    hoverBorder: "hover:border-[#0072bc]/50",
    btnClass: "hover:bg-[#0072bc] hover:border-[#0072bc] hover:text-white",
    title: "Highway Inn VVIP Suites",
    description:
      "Acoustically treated rooms that shut out the highway rumble, built for a proper night's rest before you're back on the road.",
    features: [
      "King orthopaedic bedding",
      "Private en-suite rain shower",
      "Smart IPTV & climate control",
      "High-speed fibre Wi-Fi",
      "In-room gourmet service",
    ],
  },
  {
    tag: "35-second walk · Next door",
    tagColor: "text-[#fab516] bg-[#fab516]/15",
    tagBorder: "border-[#fab516]/40",
    dotColor: "bg-[#fab516]",
    hoverBorder: "hover:border-[#fab516]/50",
    btnClass: "hover:bg-[#fab516] hover:border-[#fab516] hover:text-stone-950",
    title: "Sampan White House — Motel & Suites",
    description:
      "A softer highway pause: deluxe motel rooms, a meeting lounge, and veranda dining for guests who want a quieter address on the same plot.",
    features: [
      "Deluxe motel rooms",
      "Meeting & lounge space",
      "Veranda dining",
      "Steps from the party centre",
    ],
  },
];

export default function StaySection() {
  return (
    <section id="stay" className="py-20 sm:py-28 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-100 leading-tight">
              Where to rest before the road again
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="editorial-spacing text-sm sm:text-base text-stone-300 font-light">
              Two ways to stay the night, thirty-five seconds apart — pick the highway suite or the quieter motel next door.
            </p>
          </div>
        </div>

        {/* Two Large Accommodation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {accommodations.map((item) => (
            <div
              key={item.title}
              className={`p-6 sm:p-8 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all flex flex-col justify-between ${item.hoverBorder}`}
            >
              <div>
                <span className={`inline-block text-[11px] font-mono tracking-tag uppercase px-2.5 py-1 rounded border mb-4 ${item.tagColor} ${item.tagBorder}`}>
                  {item.tag}
                </span>
                <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-100 mb-3">
                  {item.title}
                </h3>
                <p className="editorial-spacing text-xs sm:text-sm text-stone-400 font-light mb-8">
                  {item.description}
                </p>

                {/* Features divider list */}
                <div className="divide-y divide-white/10 border-t border-b border-white/10 mb-8">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="py-3 text-xs sm:text-sm text-stone-300 font-light tracking-wide flex items-center gap-2.5"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor}`} />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <Link
                  href="#contact"
                  className={`inline-flex items-center justify-center w-full py-2.5 text-xs font-semibold tracking-wide text-stone-200 bg-white/5 border border-white/15 rounded transition-all duration-200 ${item.btnClass}`}
                >
                  Book this accommodation
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
