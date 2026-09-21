"use client";

export default function PlanStopSection() {
  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-14">
          <div className="lg:col-span-6">
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-stone-100 leading-tight">
              Plan your stop
            </h2>
          </div>
          <div className="lg:col-span-6">
            <p className="editorial-spacing text-sm sm:text-base text-stone-300 font-light">
              Call ahead for the hall, phone our 24/7 route concierge, or find the day&apos;s spread on Facebook.
            </p>
          </div>
        </div>

        {/* 2 Contact Cards with Brand Colors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Route Concierge */}
          <a
            href="tel:+8801929918408"
            className="p-6 sm:p-8 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#0072bc]/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#0072bc]" />
                <span className="text-[11px] font-mono tracking-tag text-stone-300 uppercase block">
                  Route concierge
                </span>
              </div>
              <span className="font-mono text-base sm:text-lg font-semibold text-[#38bdf8] group-hover:text-white transition-colors block">
                +880 1929-918408
              </span>
            </div>
            <span className="text-xs text-stone-400 group-hover:text-stone-300 mt-6 block">
              Direct desk &amp; hall inquiries →
            </span>
          </a>

          {/* Card 2: Facebook */}
          <a
            href="https://facebook.com/sampanhighwayinn"
            target="_blank"
            rel="noopener noreferrer"
            className="p-6 sm:p-8 rounded border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] hover:border-[#c8102e]/50 transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full bg-[#c8102e]" />
                <span className="text-[11px] font-mono tracking-tag text-stone-300 uppercase block">
                  Facebook
                </span>
              </div>
              <span className="font-mono text-base sm:text-lg font-semibold text-stone-100 group-hover:text-white transition-colors block">
                @sampanhighwayinn
              </span>
            </div>
            <span className="text-xs text-stone-400 group-hover:text-stone-300 mt-6 block">
              Daily updates, photos &amp; events →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
