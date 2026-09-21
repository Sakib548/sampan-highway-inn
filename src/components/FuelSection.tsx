"use client";

import Image from "next/image";

interface FuelStation {
  tag: string;
  tagColor: string;
  tagBorder: string;
  dotColor: string;
  hoverBorder: string;
  title: string;
  logo: string;
  image: string;
  description: string;
  features: string[];
}

const fuelStations: FuelStation[] = [
  {
    tag: "70m walk · Open 24/7",
    tagColor: "text-rose-400 bg-[#c8102e]/15",
    tagBorder: "border-[#c8102e]/40",
    dotColor: "bg-[#c8102e]",
    hoverBorder: "hover:border-[#c8102e]/50",
    title: "Sampan Filling Station",
    logo: "/logos/sampanfillingstation.png",
    image: "/images/nearby/filling-station.jpg",
    description:
      "A high-volume refuel stop right on the corridor, with Octane 95, diesel and Mobil lubricants on hand.",
    features: [
      "Octane,Petrol & diesel",
      "Mobil lubricants",
      "Dedicated heavy-vehicle bays",
    ],
  },
  {
    tag: "70m walk · Auto LPG",
    tagColor: "text-[#38bdf8] bg-[#0072bc]/15",
    tagBorder: "border-[#0072bc]/40",
    dotColor: "bg-[#0072bc]",
    hoverBorder: "hover:border-[#0072bc]/50",
    title: "Sampan LPG Filling Station",
    logo: "/logos/lpg.png",
    image: "/images/nearby/lpg.jpeg",
    description:
      "High-pressure auto LPG dispensing and cylinder refilling, for vehicles running on gas.",
    features: [
      "Auto LPG dispensing",
      "Cylinder refilling",
      "Rapid-service bays",
    ],
  },
];

export default function FuelSection() {
  return (
    <section id="fuel" className="py-20 sm:py-28 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-100 leading-tight">
              Fuel & LPG Station
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="editorial-spacing text-sm sm:text-base text-stone-300 font-light">
              Refuel on the way in or the way out, without leaving the highway.
            </p>
          </div>
        </div>

        {/* 2 Fuel Cards with Real Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {fuelStations.map((station) => (
            <div
              key={station.title}
              className={`group rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between overflow-hidden ${station.hoverBorder}`}
            >
              <div>
                {/* Fuel Station Image Container */}
                <div className="relative w-full h-56 sm:h-64 bg-stone-900 overflow-hidden">
                  <Image
                    src={station.image}
                    alt={station.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#090d16] via-transparent to-transparent opacity-80" />

                  {/* Top-Left: Brand Division Logo */}
                  <div className="absolute top-4 left-4 z-10 w-12 h-12 sm:w-14 sm:h-14 bg-white/95 rounded-xl p-1 shadow-lg backdrop-blur-xs border border-white/60 flex items-center justify-center transition-transform duration-300 hover:scale-105">
                    <Image
                      src={station.logo}
                      alt={`${station.title} Logo`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>

                  {/* Top-Right: Operational Tag Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className={`inline-block text-[11px] font-mono tracking-tag uppercase px-2.5 py-1 rounded-full backdrop-blur-md border ${station.tagColor} ${station.tagBorder}`}>
                      {station.tag}
                    </span>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-6 sm:p-8">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-stone-100 mb-3 group-hover:text-white transition-colors">
                    {station.title}
                  </h3>
                  <p className="editorial-spacing text-xs sm:text-sm text-stone-400 font-light mb-8">
                    {station.description}
                  </p>

                  {/* Features list with brand dot */}
                  <div className="divide-y divide-white/10 border-t border-b border-white/10">
                    {station.features.map((feature) => (
                      <div
                        key={feature}
                        className="py-3 text-xs sm:text-sm text-stone-300 font-light tracking-wide flex items-center gap-2.5"
                      >
                        <span className={`w-1.5 h-1.5 rounded-full ${station.dotColor}`} />
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
