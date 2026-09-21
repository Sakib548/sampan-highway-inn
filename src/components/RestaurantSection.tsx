"use client";

import Link from "next/link";

interface MetricItem {
  value: string;
  label: string;
}

interface FacilityCard {
  title: string;
  description: string;
}

const hallMetrics: { value: string; label: string; color: string; borderHover: string }[] = [
  { value: "500+", label: "Seats in the central AC hall", color: "text-[#0072bc]", borderHover: "hover:border-[#0072bc]/50" },
  { value: "1,800+", label: "Guest reviews on file", color: "text-[#fab516]", borderHover: "hover:border-[#fab516]/50" },
  { value: "24/7", label: "Generator-backed power", color: "text-[#c8102e]", borderHover: "hover:border-[#c8102e]/50" },
  { value: "Valet", label: "Parking on a paved lot", color: "text-[#0072bc]", borderHover: "hover:border-[#0072bc]/50" },
];

const subFacilities: { title: string; description: string; dotColor: string }[] = [
  {
    title: "Sampan Fast Food",
    description: "Burgers, crispy fried chicken and wraps, ready in about 10 minutes, day or night.",
    dotColor: "bg-[#c8102e]",
  },
  {
    title: "VIP Executive Lounge",
    description: "Leather recliners, complimentary refreshments, and quiet for executives passing through.",
    dotColor: "bg-[#fab516]",
  },
  {
    title: "Sampan Juice Bar",
    description: "Fresh-pressed juices and smoothies, 8:00 AM to midnight.",
    dotColor: "bg-[#0072bc]",
  },
  {
    title: "Achar & Delicacies",
    description: "Homemade mango, olive and garlic pickles in a mustard-oil base, ready to carry home.",
    dotColor: "bg-[#c8102e]",
  },
  {
    title: "Conference Hub",
    description: "HD projection and fibre internet for meetings, debriefs and offsite retreats.",
    dotColor: "bg-[#0072bc]",
  },
  {
    title: "Sampan Mosque",
    description: "A quiet space for prayer, open to every guest and traveller, around the clock.",
    dotColor: "bg-[#fab516]",
  },
];

export default function RestaurantSection() {
  return (
    <section id="restaurant" className="py-20 sm:py-28 bg-white text-stone-900 border-b border-stone-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-950 leading-tight">
              Restaurant & Party Centre
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="editorial-spacing text-sm sm:text-base text-stone-600 font-light">
              A column-free banquet hall built for weddings, receptions, and corporate galas — seated for 500+ guests under one roof, with multi-cuisine buffets running alongside Shahi Kacchi, Polao, and roast, cooked through the day and night.
            </p>
          </div>
        </div>

        {/* 4 Key Stat Metrics with Logo Colors on Light Background */}
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
        <div className="flex flex-wrap items-center gap-4 mb-14">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-[#0072bc] hover:bg-[#008be6] rounded shadow-md shadow-[#0072bc]/20 transition-all duration-200"
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

        {/* 6 Sub-facilities Grid with Brand Color Indicators on Light Background */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6 border-t border-stone-200">
          {subFacilities.map((card) => (
            <div
              key={card.title}
              className="p-6 rounded border border-stone-200 bg-stone-50/70 hover:bg-white hover:border-stone-300 hover:shadow-xs transition-all"
            >
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 rounded-full ${card.dotColor}`} />
                <h3 className="text-sm sm:text-base font-medium text-stone-900">
                  {card.title}
                </h3>
              </div>
              <p className="editorial-spacing text-xs sm:text-[13px] text-stone-600 font-light pl-4">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
