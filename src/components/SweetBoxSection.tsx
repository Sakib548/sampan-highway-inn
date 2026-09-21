"use client";

import Image from "next/image";

interface SweetItem {
  title: string;
  description: string;
}

const sweetItems: {
  title: string;
  tag: string;
  description: string;
  image: string;
  accentColor: string;
  hoverClass: string;
}[] = [
    {
      title: "Chhana sweets",
      tag: "Traditional Recipe",
      description: "Made fresh each morning from pure chhana, preserving traditional Bengali texture.",
      image: "/images/nearby/sweet2.JPG",
      accentColor: "bg-[#fab516]",
      hoverClass: "hover:border-[#fab516]/60 hover:shadow-amber-100/50",
    },
    {
      title: "Ghee delicacies",
      tag: "Clarified Ghee",
      description: "Rich, slow cooked treats finished in clarified ghee for deep aroma and taste.",
      image: "/images/nearby/sweet3.jpg",
      accentColor: "bg-[#f59e0b]",
      hoverClass: "hover:border-[#f59e0b]/60 hover:shadow-amber-100/50",
    },
    {
      title: "Gift-box packaging",
      tag: "Travel Ready",
      description: "Boxed securely to travel, so your visit and taste travel home from the highway.",
      image: "/images/nearby/sweet4.jpg",
      accentColor: "bg-[#0072bc]",
      hoverClass: "hover:border-[#0072bc]/60 hover:shadow-blue-100/50",
    },
    {
      title: "Artisanal mishti",
      tag: "Daily Counter",
      description: "Handcrafted assortment of premium confections made fresh round-the-clock.",
      image: "/images/nearby/sweet5.jpg",
      accentColor: "bg-[#c8102e]",
      hoverClass: "hover:border-[#c8102e]/60 hover:shadow-rose-100/50",
    },
  ];

export default function SweetBoxSection() {
  return (
    <section id="sweetbox" className="py-20 sm:py-28 bg-[#fbf8f3] text-stone-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Timing Pill Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-stone-300 bg-white text-[11px] font-mono tracking-tag text-stone-700 mb-8 shadow-2xs">
          <span className="w-2 h-2 rounded-full bg-brand-gold" />
          <span className="font-semibold text-stone-800">24/7</span>
        </div>

        {/* Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-12">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-tight">
              Sampan Sweet Box
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="editorial-spacing text-sm sm:text-base text-stone-700 font-light">
              Traditional Bengali mishti, made daily with pure chhana and ghee, the same sweets that travel home in a gift box long after the visit is over.
            </p>
          </div>
        </div>

        {/* Sweet Shop Photo Banner */}
        <div className="relative w-full h-56 sm:h-72 md:h-80 rounded-2xl overflow-hidden mb-12 border border-stone-200 shadow-sm group">
          <Image
            src="/images/nearby/sweet-shop.jpg"
            alt="Sampan Sweet Box Artisanal Bengali Confectionery"
            fill
            sizes="(max-width: 1280px) 100vw, 1152px"
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-103"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />

          {/* Top-Left Corner: Sweet Box Brand Logo */}
          <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-10 w-14 h-14 sm:w-16 sm:h-16 bg-white/95 rounded-xl p-1.5 shadow-lg backdrop-blur-xs border border-amber-200/60 flex items-center justify-center transition-transform duration-300 hover:scale-105">
            <Image
              src="/logos/sweetbox.png"
              alt="Sampan Sweet Box Logo"
              width={56}
              height={56}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-5 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
            <div>
              <span className="inline-block text-[11px] font-mono tracking-wide text-amber-300 uppercase mb-1">
                Artisanal Confectionery Counter
              </span>
              <h3 className="font-serif text-lg sm:text-xl font-normal text-white">
                Fresh Chhana &amp; Clarified Ghee Mishti
              </h3>
            </div>
            <span className="text-xs font-mono text-stone-300">
              Travel Gift Boxes Ready
            </span>
          </div>
        </div>

        {/* 4 Cards Grid with Photography & Brand Color Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {sweetItems.map((item) => (
            <div
              key={item.title}
              className={`rounded-xl border border-stone-200 bg-white overflow-hidden shadow-xs transition-all duration-300 flex flex-col justify-start group hover:-translate-y-1 ${item.hoverClass}`}
            >
              {/* Card Photo Header */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-stone-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-106"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/45 via-transparent to-transparent" />
                <span className="absolute bottom-2.5 left-3 text-[10px] font-mono tracking-tag uppercase text-white/95 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded">
                  {item.tag}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-5 flex flex-col flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <span className={`w-2 h-2 rounded-full ${item.accentColor}`} />
                  <h3 className="font-serif text-base sm:text-lg font-medium text-stone-900">
                    {item.title}
                  </h3>
                </div>
                <p className="editorial-spacing text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
