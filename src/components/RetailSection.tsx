"use client";

import Image from "next/image";

interface RetailStop {
  tag: string;
  tagColor: string;
  tagBorder: string;
  dotColor: string;
  hoverBorder: string;
  title: string;
  image: string;
  description: string;
  features: string[];
}

const retailStops: RetailStop[] = [
  {
    tag: "In the complex · 24/7",
    tagColor: "text-[#38bdf8] bg-[#0072bc]/15",
    tagBorder: "border-[#0072bc]/40",
    dotColor: "bg-[#0072bc]",
    hoverBorder: "hover:border-[#0072bc]/50",
    title: "Sampan Mart",
    image: "/images/nearby/sampan-Mart.jpg",
    description:
      "The flagship super shop for the highway with groceries, travel essentials and fresh snacks, stocked around the clock.",
    features: ["Groceries & daily essentials", "Travel essentials", "Fresh snacks"],
  },
  {
    tag: "In the complex · Express",
    tagColor: "text-[#fab516] bg-[#fab516]/15",
    tagBorder: "border-[#fab516]/40",
    dotColor: "bg-[#fab516]",
    hoverBorder: "hover:border-[#fab516]/50",
    title: "Mini Sampan Super Shop",
    image: "/images/nearby/mini-sampan.jpg",
    description:
      "A neighbourhood style kiosk built for the quick stop: in and out with what you need before you're back on the highway.",
    features: ["Instant refreshments", "Travel accessories", "Express checkout"],
  },
];

export default function RetailSection() {
  return (
    <section id="retail" className="py-20 sm:py-28 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-100 leading-tight">
              Sampan Mart & Mini Sampan
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="editorial-spacing text-sm sm:text-base text-stone-300 font-light">
              Two stops for the road ahead: one for a proper shop, one for a quick grab.
            </p>
          </div>
        </div>

        {/* 2 Side-by-Side Retail Cards with Real Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {retailStops.map((stop) => (
            <div
              key={stop.title}
              className={`group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between overflow-hidden ${stop.hoverBorder}`}
            >
              <div>
                {/* Retail Image Container */}
                <div className="relative w-full h-56 sm:h-64 bg-stone-900 overflow-hidden">
                  <Image
                    src={stop.image}
                    alt={stop.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#090d16] via-transparent to-transparent opacity-80" />

                  {/* Top-Left: Brand Division Logo */}
                  <div className="absolute top-4 left-4 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white/95 rounded-xl p-1 shadow-lg backdrop-blur-xs border border-white/60 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    <Image
                      src="/logos/sampanmart.png"
                      alt="Mini Sampan / Happy Shopping Logo"
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>

                  {/* Top-Right: Operational Tag Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`inline-block text-[11px] font-mono tracking-tag uppercase px-2.5 py-1 rounded-full backdrop-blur-md border ${stop.tagColor} ${stop.tagBorder}`}>
                      {stop.tag}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-100 mb-3 group-hover:text-white transition-colors">
                    {stop.title}
                  </h3>
                  <p className="editorial-spacing text-xs sm:text-sm text-stone-400 font-light mb-8">
                    {stop.description}
                  </p>

                  {/* Features list with brand dot */}
                  <div className="divide-y divide-white/10 border-t border-b border-white/10">
                    {stop.features.map((feature) => (
                      <div
                        key={feature}
                        className="py-3 text-xs sm:text-sm text-stone-300 font-light tracking-wide flex items-center gap-2.5"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${stop.dotColor}`} />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
