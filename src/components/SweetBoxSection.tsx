"use client";

interface SweetItem {
  title: string;
  description: string;
}

const sweetItems: { title: string; description: string; accentColor: string; hoverClass: string }[] = [
  {
    title: "Chhana sweets",
    description: "Made fresh each morning from pure chhana, in the traditional way.",
    accentColor: "bg-[#fab516]",
    hoverClass: "hover:border-[#fab516]/60 hover:shadow-amber-100/50",
  },
  {
    title: "Ghee delicacies",
    description: "Rich, slow-cooked treats finished in clarified ghee.",
    accentColor: "bg-[#f59e0b]",
    hoverClass: "hover:border-[#f59e0b]/60 hover:shadow-amber-100/50",
  },
  {
    title: "Gift-box packaging",
    description: "Boxed to travel, so the visit doesn't end at the highway.",
    accentColor: "bg-[#0072bc]",
    hoverClass: "hover:border-[#0072bc]/60 hover:shadow-blue-100/50",
  },
  {
    title: "Achar & pickles",
    description: "Regional pickles and chutneys from the same kitchen.",
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
          <span className="w-2 h-2 rounded-full bg-[#fab516]" />
          <span className="font-semibold text-stone-800">7:00 AM – 11:30 PM</span>
        </div>

        {/* Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-900 leading-tight">
              Sampan Sweet Box
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="editorial-spacing text-sm sm:text-base text-stone-700 font-light">
              Traditional Bengali mishti, made daily with pure chhana and ghee — the same sweets that travel home in a gift box long after the visit is over.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid with Brand Color Accents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {sweetItems.map((item) => (
            <div
              key={item.title}
              className={`p-6 rounded border border-stone-200 bg-white shadow-xs transition-all duration-200 flex flex-col justify-start group ${item.hoverClass}`}
            >
              <div className="flex items-center gap-2 mb-2.5">
                <span className={`w-2 h-2 rounded-full ${item.accentColor}`} />
                <h3 className="font-serif text-base sm:text-lg font-medium text-stone-900">
                  {item.title}
                </h3>
              </div>
              <p className="editorial-spacing text-xs sm:text-[13px] text-stone-600 font-light leading-relaxed pl-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
