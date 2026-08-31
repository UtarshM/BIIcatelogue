import { BadgePercent, Truck, UserCheck, CheckCircle2, ArrowRight } from "lucide-react";
import { VALUE_PILLARS, COMPANY_DETAILS } from "@/data/brochureData";
import { Button } from "@/components/ui/button";

export function ValuePillars({ onEnquire }: { onEnquire: () => void }) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "BadgePercent":
        return <BadgePercent className="h-8 w-8 text-orange-500" />;
      case "Truck":
        return <Truck className="h-8 w-8 text-blue-600" />;
      case "UserCheck":
        return <UserCheck className="h-8 w-8 text-emerald-600" />;
      default:
        return <CheckCircle2 className="h-8 w-8 text-primary" />;
    }
  };

  return (
    <section id="value-pillars" className="py-16 sm:py-20 bg-white border-y border-slate-200/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3">
            Core Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Click to Source. <span className="text-primary">Build to Scale.</span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            BuilditIndia streamlines your entire materials procurement supply chain with our three fundamental service pillars.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {VALUE_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.title}
              className="relative flex flex-col justify-between rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50/70 to-white p-8 shadow-xs transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-primary/40 group"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-md border border-slate-100 group-hover:scale-110 transition-transform">
                    {getIcon(pillar.icon)}
                  </div>
                  <span className="text-3xl font-black text-slate-200 group-hover:text-primary/20 transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-xl sm:text-2xl font-bold text-slate-900">
                  {pillar.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-primary">
                  {pillar.subtitle}
                </p>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Highlights */}
                <div className="mt-6 pt-6 border-t border-slate-100 flex flex-col gap-2.5">
                  {pillar.highlights.map((highlight) => (
                    <div key={highlight} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4">
                <button
                  type="button"
                  onClick={onEnquire}
                  className="inline-flex items-center text-xs font-bold text-primary group-hover:text-blue-700 transition-colors"
                >
                  Request Quote for Project
                  <ArrowRight className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
