"use client";

import Image from "next/image";
import Link from "next/link";

interface MetricItem {
  value: string;
  label: string;
  color: string;
  borderHover: string;
}

interface FacilityCard {
  title: string;
  description: string;
  image: string;
  tag: string;
  dotColor: string;
}

const hallMetrics: MetricItem[] = [
  { value: "500+", label: "Seats in the central AC hall", color: "text-[#0072bc]", borderHover: "hover:border-[#0072bc]/50" },
  { value: "1,800+", label: "Guest reviews on file", color: "text-[#fab516]", borderHover: "hover:border-[#fab516]/50" },
  { value: "24/7", label: "Generator-backed power", color: "text-[#c8102e]", borderHover: "hover:border-[#c8102e]/50" },
  { value: "Valet", label: "Parking on a paved lot", color: "text-[#0072bc]", borderHover: "hover:border-[#0072bc]/50" },
];

const subFacilities: FacilityCard[] = [
  {
    title: "Sampan Fast Food",
    description: "Burgers, crispy fried chicken and wraps, ready in about 10 minutes, day or night.",
    image: "/images/facilities/fast-food.jpeg",
    tag: "Quick Bites · 24/7",
    dotColor: "bg-[#c8102e]",
  },
  {
    title: "VIP Executive Lounge",
    description: "Leather recliners, complimentary refreshments, and quiet for executives passing through.",
    image: "/images/facilities/lounge.jpg",
    tag: "Exclusive Lounge",
    dotColor: "bg-[#fab516]",
  },
  {
    title: "Sampan Juice Bar",
    description: "Fresh-pressed juices and smoothies, 8:00 AM to midnight.",
    image: "/images/facilities/sampan-juicebar.jpg",
    tag: "Fresh Juices · Daily",
    dotColor: "bg-[#0072bc]",
  },
  {
    title: "Achar & Delicacies",
    description: "Homemade mango, olive and garlic pickles in a mustard-oil base, ready to carry home.",
    image: "/images/facilities/sampan-achar.jpg",
    tag: "Artisanal Pickles",
    dotColor: "bg-[#c8102e]",
  },
  {
    title: "Conference Hub",
    description: "HD projection and fibre internet for meetings, debriefs and offsite retreats.",
    image: "/images/gallery/IMG_20250916_070313.jpg",
    tag: "Meetings & Debriefs",
    dotColor: "bg-[#0072bc]",
  },
  {
    title: "Sampan Mosque",
    description: "A quiet space for prayer, open to every guest and traveller, around the clock.",
    image: "/images/facilities/sampan-mosque.jpeg",
    tag: "24/7 Prayer Hall",
    dotColor: "bg-[#fab516]",
  },
];

export default function RestaurantSection() {
  return (
    <section id="restaurant" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-950 leading-tight">
              Restaurant & Party Centre
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="editorial-spacing text-sm sm:text-base text-stone-600 font-light">
              A column-free banquet hall built for weddings, receptions, and corporate galas, seating 500+ guests under one roof with multi-cuisine buffets running alongside Shahi Kacchi, Polao, and roast, cooked through the day and night.
            </p>
          </div>
        </div>

        {/* Featured Banquet Hall Photo Banner */}
        <div className="relative w-full h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden mb-12 border border-stone-200 shadow-sm group">
          <Image
            src="/images/gallery/IMG_20250916_070236.jpg"
            alt="Sampan Highway Inn Royal Dining Lounge and Banquet Hall"
            fill
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          {/* Top-Left: Flagship Brand Logo */}
          {/* <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 w-28 sm:w-36 h-12 sm:h-14 bg-white/95 rounded-xl p-1.5 shadow-lg backdrop-blur-xs border border-white/60 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image
              src="/logos/sampanhighwayinn.png"
              alt="Sampan Highway Inn Flagship Logo"
              width={120}
              height={44}
              className="object-contain"
            />
          </div> */}

          {/* Banner Tag & Caption */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-3 text-white">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono tracking-wide text-white mb-2 border border-white/20">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue" />
                <span>Main Banquet Pavilion</span>
              </div>
              <h3 className="font-serif text-xl sm:text-2xl md:text-3xl font-normal text-white">
                Grand Dining Hall & Celebration Venue
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-300">
              Capacity: 500+ Seated Guests
            </span>
          </div>
        </div>

        {/* 4 Key Stat Metrics with Logo Colors */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          {hallMetrics.map((item) => (
            <div
              key={item.label}
              className="p-5 sm:p-6 rounded border border-stone-200 bg-stone-50/70 hover:bg-stone-50 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <span className={`font-mono text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${item.color}`}>
                {item.value}
              </span>
              <span className="text-xs sm:text-[13px] text-stone-700 font-normal leading-relaxed">
                {item.label}
              </span>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap items-center gap-4 mb-16">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-brand-blue hover:bg-[#008be6] rounded shadow-md shadow-[#0072bc]/20 transition-all duration-200"
          >
            Enquire about a booking
          </Link>
          <a
            href="https://facebook.com/sampanhighwayinn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-stone-700 hover:text-stone-950 bg-white hover:bg-stone-100 border border-stone-300 rounded transition-colors"
          >
            See the hall on Facebook
          </a>
        </div>

        {/* 6 Sub-facilities Grid with Real Photos & Clean Spacing */}
        <div className="pt-8 border-t border-stone-200">
          <div className="flex items-center justify-between mb-8">
            <div>
              <span className="text-[11px] font-mono tracking-tag text-stone-500 uppercase block mb-1">
                On-Site Facilities
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-stone-900">
                Culinary, Refreshment & Care Amenities
              </h3>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subFacilities.map((card) => (
              <div
                key={card.title}
                className="group rounded-xl border border-stone-200 bg-stone-50/50 hover:bg-white hover:border-stone-300 hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col"
              >
                {/* Facility Image Container */}
                <div className="relative w-full h-48 sm:h-52 bg-stone-200 overflow-hidden">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Tag Badge */}
                  <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-xs px-2.5 py-1 rounded text-[11px] font-mono text-white flex items-center gap-1.5 border border-white/15">
                    <span className={`w-1.5 h-1.5 rounded-full ${card.dotColor}`} />
                    <span>{card.tag}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="font-serif text-base sm:text-lg font-medium text-stone-900 mb-2 group-hover:text-brand-blue transition-colors">
                      {card.title}
                    </h4>
                    <p className="editorial-spacing text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
