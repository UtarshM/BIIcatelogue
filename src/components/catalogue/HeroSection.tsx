import { ArrowDown, FileDown, Search, ShieldCheck, PhoneCall, Sparkles, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_DETAILS } from "@/data/brochureData";

export function HeroSection({
  searchQuery,
  onSearchChange,
  onEnquire,
  onViewBrochure,
}: {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onEnquire: () => void;
  onViewBrochure: () => void;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#050e38] via-[#09185a] to-[#0e2178] text-white py-14 sm:py-20 lg:py-24">
      {/* Background Architectural Grid Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-15"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #050e38 1px)`,
          backgroundSize: "36px 36px",
          backgroundPosition: "0 0, 18px 18px",
        }}
      />

      {/* Blue & Orange Floating Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[650px] h-[350px] bg-blue-500/25 blur-[120px] rounded-full pointer-events-none -z-10 animate-pulse-glow" />
      <div className="absolute bottom-0 right-4 sm:right-16 w-[250px] sm:w-[450px] h-[250px] bg-orange-500/15 blur-[100px] rounded-full pointer-events-none -z-10 animate-pulse-glow" style={{ animationDelay: '2s' }} />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Eyebrow Badge with subtle pulse */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/15 px-3.5 py-1.5 text-xs sm:text-sm font-semibold text-blue-200 backdrop-blur-md mb-6 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-orange-400 animate-ping" />
            <span>Digital Brand Hub & Material Catalogue</span>
          </div>

          {/* Main Headline from Brochure Page 1 */}
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] text-white">
            Click. Source. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-300 to-orange-400">Build.</span>
          </h1>

          {/* Subtitle from Brochure Page 1 */}
          <p className="mt-4 sm:mt-5 text-base sm:text-xl lg:text-2xl font-medium text-blue-100/90 max-w-3xl leading-relaxed">
            {COMPANY_DETAILS.subTagline}
          </p>

          <p className="mt-2 text-xs sm:text-sm md:text-base text-blue-200/70 max-w-2xl px-2">
            Explore 15 essential construction categories and 48 premier associate brand partners — all sourced directly for your projects at competitive rates.
          </p>

          {/* Live Quick Search Input */}
          <div className="mt-6 sm:mt-8 w-full max-w-2xl px-1">
            <div className="relative flex items-center group">
              <Search className="absolute left-4 h-5 w-5 text-slate-400 pointer-events-none group-focus-within:text-orange-400 transition-colors" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Search any brand or category (e.g. JSW, UltraTech, Astral, Jaquar...)"
                className="h-12 sm:h-14 w-full rounded-2xl border border-white/20 bg-white/95 px-11 sm:px-12 text-xs sm:text-base text-slate-900 placeholder:text-slate-500 shadow-2xl focus:border-orange-400 focus:bg-white focus:outline-none focus:ring-4 focus:ring-orange-400/20 transition-all font-medium"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  className="absolute right-3.5 rounded-full bg-slate-200 px-2.5 py-1 text-xs text-slate-700 hover:bg-slate-300 font-bold transition"
                >
                  Clear
                </button>
              )}
            </div>
            {searchQuery && (
              <p className="mt-2 text-left text-xs text-blue-200/90 pl-2">
                Filtering catalogue by: <span className="font-bold text-white bg-blue-500/20 px-2 py-0.5 rounded-md">"{searchQuery}"</span>
              </p>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Button
              size="lg"
              onClick={onEnquire}
              className="w-full sm:w-auto h-12 sm:h-13 px-6 sm:px-8 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold rounded-xl shadow-lg shadow-orange-500/25 transition-all hover:scale-103 active:scale-95 text-sm sm:text-base"
            >
              Get Best Project Quote
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={onViewBrochure}
              className="w-full sm:w-auto h-12 sm:h-13 px-6 sm:px-8 border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold rounded-xl backdrop-blur-md transition-all hover:scale-103 active:scale-95 gap-2 text-sm sm:text-base"
            >
              <FileDown className="h-5 w-5 text-sky-300" />
              Download Official Brochure PDF
            </Button>

            <a
              href="#categories"
              className="w-full sm:w-auto inline-flex h-12 sm:h-13 items-center justify-center px-5 rounded-xl border border-white/15 bg-blue-900/40 hover:bg-blue-900/60 text-blue-100 text-sm font-semibold transition"
            >
              Explore 15 Categories
              <ArrowDown className="ml-1.5 h-4 w-4 text-blue-300 animate-bounce" />
            </a>
          </div>

          {/* Statistics Bar */}
          <div className="mt-10 sm:mt-14 w-full grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 border-t border-white/15 pt-6 sm:pt-8 text-center">
            <div className="p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/5 transition-transform hover:scale-105">
              <div className="text-2xl sm:text-4xl font-extrabold text-white">15</div>
              <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs font-semibold text-blue-200/80 uppercase tracking-wider">
                Product Categories
              </div>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/5 transition-transform hover:scale-105">
              <div className="text-2xl sm:text-4xl font-extrabold text-orange-400">48+</div>
              <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs font-semibold text-blue-200/80 uppercase tracking-wider">
                Associate Brands
              </div>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/5 transition-transform hover:scale-105">
              <div className="text-2xl sm:text-4xl font-extrabold text-sky-300">100%</div>
              <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs font-semibold text-blue-200/80 uppercase tracking-wider">
                Direct Procurement
              </div>
            </div>

            <div className="p-2 sm:p-3 rounded-xl bg-white/5 backdrop-blur-xs border border-white/5 transition-transform hover:scale-105">
              <div className="text-2xl sm:text-4xl font-extrabold text-emerald-400">1-on-1</div>
              <div className="mt-0.5 sm:mt-1 text-[11px] sm:text-xs font-semibold text-blue-200/80 uppercase tracking-wider">
                Dedicated RM Support
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
