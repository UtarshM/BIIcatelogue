import { useState, useMemo, useEffect } from "react";
import {
  Search,
  ChevronLeft,
  ArrowRight,
  Layers,
  FileDown,
  MessageSquareQuote,
  MessageSquare,
  Sparkles,
  Boxes,
  Factory,
  ShieldAlert,
  Droplets,
  Pipette,
  Bath,
  Grid as GridIcon,
  ChefHat,
  ThermometerSnowflake,
  HeartPulse,
  Paintbrush,
  SquareDot,
  Filter as FilterIcon,
  BookOpen,
  PhoneCall,
  CheckCircle2,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { CATEGORIES, BRANDS, COMPANY_DETAILS, type Brand, type Category } from "@/data/brochureData";
import { BrandDetailModal } from "./BrandDetailModal";

export function HeroSection({
  searchQuery,
  onSearchChange,
  onEnquire,
  onViewBrochure,
}: {
  searchQuery: string;
  onSearchChange: (q: string) => void;
  onEnquire: (categoryId?: string, brandId?: string) => void;
  onViewBrochure: () => void;
}) {
  // Screen state: null = 1st Page (Only Categories), string = Category ID (Related Brands View)
  const [activeCategoryId, setActiveCategoryId] = useState<string | null>(null);
  const [activeBrandModal, setActiveBrandModal] = useState<Brand | null>(null);
  const [brandSearchQuery, setBrandSearchQuery] = useState("");

  const directWhatsappUrl = `https://wa.me/${COMPANY_DETAILS.relationshipManager.whatsappNumber}?text=${encodeURIComponent(
    "Hello BuilditIndia Team, I would like to inquire about building materials and wholesale pricing."
  )}`;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeCategoryId]);

  // Filtered categories for 1st page (Purely category attributes, zero brand names on 1st page)
  const filteredCategories = useMemo(() => {
    if (!searchQuery.trim()) return CATEGORIES;
    const q = searchQuery.toLowerCase();
    return CATEGORIES.filter((cat) => {
      return (
        cat.name.toLowerCase().includes(q) ||
        cat.tagline.toLowerCase().includes(q) ||
        cat.description.toLowerCase().includes(q)
      );
    });
  }, [searchQuery]);

  // Selected Category Object
  const selectedCategoryObj = useMemo(() => {
    if (!activeCategoryId) return null;
    return CATEGORIES.find((c) => c.id === activeCategoryId) || null;
  }, [activeCategoryId]);

  // Related Brands for the clicked category
  const relatedBrands = useMemo(() => {
    if (!activeCategoryId) return [];
    return BRANDS.filter((brand) => {
      const inCategory = brand.categoryId === activeCategoryId;
      if (!brandSearchQuery.trim()) return inCategory;
      const q = brandSearchQuery.toLowerCase();
      return (
        inCategory &&
        (brand.name.toLowerCase().includes(q) ||
          (brand.tagline && brand.tagline.toLowerCase().includes(q)) ||
          brand.description.toLowerCase().includes(q) ||
          (brand.specifications && brand.specifications.some((s) => s.toLowerCase().includes(q))))
      );
    });
  }, [activeCategoryId, brandSearchQuery]);

  const getCategoryIcon = (id: string, className = "h-5 w-5") => {
    switch (id) {
      case "tmt-bars":
        return <ShieldAlert className={className} />;
      case "aac-blocks":
        return <Boxes className={className} />;
      case "cement":
        return <Factory className={className} />;
      case "aac-wall-panel":
        return <Layers className={className} />;
      case "adhesive-waterproofing":
        return <Droplets className={className} />;
      case "plumbing":
        return <Pipette className={className} />;
      case "bath-fittings":
        return <Bath className={className} />;
      case "tiles":
        return <GridIcon className={className} />;
      case "flush-tank":
        return <Sparkles className={className} />;
      case "kitchen-sink":
        return <ChefHat className={className} />;
      case "radiant-cooling":
        return <ThermometerSnowflake className={className} />;
      case "wellness-products":
        return <HeartPulse className={className} />;
      case "paints":
        return <Paintbrush className={className} />;
      case "wall-putti":
        return <SquareDot className={className} />;
      case "drainage-solution":
        return <FilterIcon className={className} />;
      default:
        return <Layers className={className} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-primary/20 selection:text-primary">
      {/* 1. APP TOP NAVIGATION (Responsive: Mobile Bar + Desktop Header) */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-15 sm:h-18 flex items-center justify-between gap-3">
          {/* Logo & Back button when inside category */}
          <div className="flex items-center gap-2 sm:gap-3">
            {activeCategoryId ? (
              <button
                type="button"
                onClick={() => {
                  setActiveCategoryId(null);
                  setBrandSearchQuery("");
                }}
                className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-primary/10 hover:bg-primary/20 text-primary font-bold text-xs sm:text-sm transition-all active:scale-95 cursor-pointer shrink-0"
                title="Back to All Categories"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="font-extrabold">Back</span>
              </button>
            ) : null}

            <img
              src="/builditindia-logo.png"
              alt="BuilditIndia - Everything Construction. One Platform."
              className="h-8 sm:h-10 w-auto object-contain"
            />
            <div className="border-l border-slate-200 pl-2 sm:pl-2.5">
              <div className="text-xs sm:text-sm font-extrabold text-slate-900 leading-tight">
                Material Hub
              </div>
              <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider hidden sm:block">
                Digital Brand Catalogue
              </div>
            </div>
          </div>

          {/* Desktop Badge Indicator */}
          <div className="hidden lg:flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-200/80 text-primary text-xs font-bold">
              <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
              15 Product Categories • 50 Associate Brands
            </span>
          </div>

          {/* Action CTAs: Desktop / Tablet */}
          <div className="hidden sm:flex items-center gap-2.5">
            <Button
              variant="outline"
              size="sm"
              onClick={onViewBrochure}
              className="h-9.5 px-3.5 text-xs font-bold border-slate-300 text-slate-700 hover:bg-slate-100 hover:text-primary rounded-xl gap-2 cursor-pointer shadow-2xs"
            >
              <BookOpen className="h-4 w-4 text-primary" />
              <span>Official Brochure PDF</span>
            </Button>

            <Button
              size="sm"
              onClick={() => onEnquire(activeCategoryId || undefined)}
              className="h-9.5 px-4 text-xs font-bold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-xs gap-2 cursor-pointer"
            >
              <MessageSquareQuote className="h-4 w-4 text-orange-300" />
              <span>Get Wholesale Quote</span>
            </Button>

            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-9.5 px-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center gap-1.5 transition shadow-xs cursor-pointer"
              title="WhatsApp Relationship Manager"
            >
              <MessageSquare className="h-4 w-4" />
              <span>WhatsApp RM</span>
            </a>
          </div>

          {/* Action CTAs: Mobile compact bar */}
          <div className="flex sm:hidden items-center gap-1.5">
            <a
              href={`tel:${COMPANY_DETAILS.relationshipManager.phone}`}
              className="h-8.5 w-8.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition cursor-pointer"
              title="Call Helpline"
            >
              <PhoneCall className="h-3.5 w-3.5" />
            </a>
            <a
              href={directWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="h-8.5 px-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-bold flex items-center gap-1 shadow-2xs transition cursor-pointer"
              title="WhatsApp RM"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </header>

      {/* 2. MAIN CONTENT AREA (Responsive Container: Mobile friendly + Full Desktop width) */}
      <main className="flex-1 mx-auto w-full max-w-7xl px-3 sm:px-6 lg:px-8 py-4 sm:py-6 pb-24 sm:pb-12">
        {/* ========================================================================= */}
        {/* SCREEN 1: 1ST PAGE - ONLY CATEGORIES IN CARD MODE (NO BRANDS SHOWN)       */}
        {/* ========================================================================= */}
        {!activeCategoryId && (
          <div className="animate-in fade-in duration-200">
            {/* Architectural Hero Banner */}
            <div className="relative isolate overflow-hidden bg-gradient-to-b from-[#050e38] via-[#09185a] to-[#0e2178] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xl border border-blue-900/50 mb-6">
              {/* Background Architectural Grid Pattern */}
              <div
                className="absolute inset-0 -z-10 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px), radial-gradient(#ffffff 1px, #050e38 1px)`,
                  backgroundSize: "32px 32px",
                  backgroundPosition: "0 0, 16px 16px",
                }}
              />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/20 px-3 py-1 text-xs font-semibold text-blue-200 backdrop-blur-md mb-3">
                    <span className="w-2 h-2 rounded-full bg-orange-400 animate-ping" />
                    <span>15 Material Categories • 50 Associate Brands</span>
                  </div>

                  <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                    Building Material Categories
                  </h1>
                  <p className="mt-2 text-xs sm:text-base text-blue-100/90 font-medium leading-relaxed max-w-xl">
                    Select any category card to view its associate brands, specifications, and wholesale direct factory procurement.
                  </p>

                  {/* Live Category Search Input */}
                  <div className="mt-4 sm:mt-6 relative max-w-xl">
                    <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 sm:h-5 sm:w-5 text-slate-400 pointer-events-none" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => onSearchChange(e.target.value)}
                      placeholder="Search 15 categories (e.g. TMT, Cement, Plumbing, Bath...)"
                      className="w-full h-11 sm:h-12 rounded-2xl bg-white text-slate-900 placeholder:text-slate-400 text-xs sm:text-sm pl-10 sm:pl-11 pr-9 font-medium focus:outline-none focus:ring-3 focus:ring-orange-400/40 shadow-xl"
                    />
                    {searchQuery && (
                      <button
                        type="button"
                        onClick={() => onSearchChange("")}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
                      >
                        ✕
                      </button>
                    )}
                  </div>
                </div>

                {/* Desktop Highlights Pill Box */}
                <div className="hidden lg:flex flex-col gap-2.5 bg-white/10 backdrop-blur-md border border-white/15 rounded-2xl p-4.5 text-xs text-blue-100 max-w-xs shrink-0 shadow-lg">
                  <div className="flex items-center gap-2 font-bold text-white">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Direct Factory Procurements</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-white">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>BIS & ISO Certified Brands</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-white">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Dedicated Relationship Manager</span>
                  </div>
                  <div className="flex items-center gap-2 font-bold text-white">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                    <span>Pan-India Project Logistics</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Category Cards Section Header */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div>
                <h2 className="text-base sm:text-xl font-extrabold text-slate-900 tracking-tight">
                  All Product Categories ({filteredCategories.length})
                </h2>
                <p className="text-xs text-slate-500 font-medium">
                  Tap any category card to view related brands & technical specifications
                </p>
              </div>

              {searchQuery && (
                <button
                  type="button"
                  onClick={() => onSearchChange("")}
                  className="text-xs font-bold text-primary hover:underline cursor-pointer"
                >
                  Clear Search
                </button>
              )}
            </div>

            {/* 15 CATEGORIES IN CARD MODE (Mobile: 2 cols, Tablet: 3 cols, Desktop: 4/5 cols) */}
            {filteredCategories.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-dashed border-slate-300 my-6 max-w-md mx-auto">
                <Search className="h-10 w-10 text-slate-300 mx-auto mb-3" />
                <h3 className="text-base font-bold text-slate-800">No category found</h3>
                <p className="text-xs text-slate-500 mt-1">
                  No material category matches "{searchQuery}". Try another keyword.
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => onSearchChange("")}
                  className="mt-4 text-xs font-bold cursor-pointer"
                >
                  Reset Search Filter
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4.5">
                {filteredCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => {
                      setActiveCategoryId(cat.id);
                      setBrandSearchQuery("");
                    }}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-primary/50 hover:-translate-y-1 transition-all duration-200 text-left flex flex-col justify-between active:scale-97 cursor-pointer group relative overflow-hidden min-h-[145px] sm:min-h-[175px]"
                  >
                    <div>
                      {/* Card Icon */}
                      <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-xl sm:rounded-2xl bg-blue-50 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors shadow-2xs mb-3">
                        {getCategoryIcon(cat.id, "h-5 w-5 sm:h-6 sm:w-6")}
                      </div>

                      {/* Category Title */}
                      <h3 className="font-extrabold text-sm sm:text-base text-slate-900 group-hover:text-primary transition-colors leading-snug">
                        {cat.name}
                      </h3>

                      {/* Subtitle / Material Description */}
                      <p className="text-[11px] sm:text-xs text-slate-500 line-clamp-2 mt-1 sm:mt-1.5 font-medium leading-relaxed">
                        {cat.tagline}
                      </p>
                    </div>

                    {/* Card Footer Action */}
                    <div className="mt-3.5 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-primary">
                      <span>View Brands</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* ========================================================================= */}
        {/* SCREEN 2: AFTER CLICKING CARD - SHOW BRANDS OF RELATED CATEGORY           */}
        {/* ========================================================================= */}
        {activeCategoryId && selectedCategoryObj && (
          <div className="animate-in fade-in-50 duration-200">
            {/* Top Navigation Strip */}
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-200">
              <button
                type="button"
                onClick={() => {
                  setActiveCategoryId(null);
                  setBrandSearchQuery("");
                }}
                className="inline-flex items-center gap-1 text-xs sm:text-sm font-extrabold text-primary hover:text-primary/80 transition-colors py-1 cursor-pointer"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Back to All Categories</span>
              </button>

              <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary">
                {selectedCategoryObj.brandCount} Associate {selectedCategoryObj.brandCount === 1 ? "Brand" : "Brands"}
              </span>
            </div>

            {/* Category Overview Card */}
            <div className="bg-gradient-to-r from-blue-900 via-[#071342] to-[#0c1d68] text-white rounded-2xl sm:rounded-3xl p-5 sm:p-7 shadow-lg mb-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 sm:h-14 sm:w-14 rounded-2xl bg-white/15 text-white flex items-center justify-center shrink-0 shadow-inner">
                    {getCategoryIcon(selectedCategoryObj.id, "h-6 w-6 sm:h-7 sm:w-7")}
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-3xl font-extrabold text-white leading-tight">
                      {selectedCategoryObj.name}
                    </h2>
                    <p className="text-xs sm:text-sm text-blue-200 font-medium mt-0.5">
                      {selectedCategoryObj.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-blue-100/80 mt-1.5 leading-relaxed max-w-3xl">
                      {selectedCategoryObj.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 self-start sm:self-center">
                  <Button
                    size="sm"
                    onClick={() => onEnquire(selectedCategoryObj.id)}
                    className="h-10 px-4 text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-xl shadow-md cursor-pointer"
                  >
                    Enquire for {selectedCategoryObj.name}
                  </Button>
                </div>
              </div>

              {/* Filter Search within this category */}
              <div className="mt-5 pt-4 border-t border-white/10 relative max-w-md">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  value={brandSearchQuery}
                  onChange={(e) => setBrandSearchQuery(e.target.value)}
                  placeholder={`Search brands in ${selectedCategoryObj.name}...`}
                  className="w-full h-10 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-xs pl-9 pr-8 font-medium focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-md"
                />
                {brandSearchQuery && (
                  <button
                    type="button"
                    onClick={() => setBrandSearchQuery("")}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Related Brands Section Header */}
            <div className="flex items-center justify-between mb-4 px-1">
              <div className="text-xs sm:text-sm font-extrabold text-slate-700 uppercase tracking-wide">
                Associate Brands for {selectedCategoryObj.name} ({relatedBrands.length})
              </div>

              <button
                type="button"
                onClick={() => setActiveCategoryId(null)}
                className="text-xs font-bold text-primary hover:underline cursor-pointer"
              >
                Change Category
              </button>
            </div>

            {/* Related Brands Grid (Mobile: 1 col, Tablet: 2 cols, Desktop: 3/4 cols) */}
            {relatedBrands.length === 0 ? (
              <div className="bg-white rounded-3xl p-10 text-center border border-dashed border-slate-300 my-6 max-w-md mx-auto">
                <Search className="h-10 w-10 text-slate-300 mx-auto mb-2" />
                <div className="text-sm font-bold text-slate-700">No brand matched</div>
                <p className="text-xs text-slate-500 mt-1">
                  No associate brand found matching "{brandSearchQuery}".
                </p>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setBrandSearchQuery("")}
                  className="mt-3 text-xs font-bold cursor-pointer"
                >
                  Reset Search
                </Button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
                {relatedBrands.map((brand) => (
                  <div
                    key={brand.id}
                    className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-xs hover:shadow-xl hover:border-primary/40 hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      {/* Top Badges */}
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[10px] sm:text-[11px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-md">
                          {brand.categoryName}
                        </span>
                        <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200/50">
                          Verified Associate
                        </span>
                      </div>

                      {/* Logo Container */}
                      <div
                        onClick={() => setActiveBrandModal(brand)}
                        className="h-20 sm:h-24 w-full bg-slate-50/80 rounded-xl p-2.5 flex items-center justify-center border border-slate-100 cursor-pointer overflow-hidden group hover:bg-white transition-colors"
                        title={`Click to view ${brand.name} specifications & catalogue`}
                      >
                        <img
                          src={brand.logo}
                          alt={`${brand.name} logo`}
                          className="max-h-full max-w-full object-contain transition-transform duration-200 group-hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      {/* Brand Title & Tagline */}
                      <div className="mt-3 cursor-pointer" onClick={() => setActiveBrandModal(brand)}>
                        <h4 className="font-extrabold text-base sm:text-lg text-slate-900 hover:text-primary transition-colors truncate">
                          {brand.name}
                        </h4>
                        {brand.tagline && (
                          <p className="text-xs text-slate-500 font-medium truncate mt-0.5">
                            {brand.tagline}
                          </p>
                        )}
                        <p className="text-xs text-slate-600 line-clamp-2 mt-1.5 leading-relaxed">
                          {brand.description}
                        </p>
                      </div>

                      {/* Key Specs Pills */}
                      {brand.specifications && brand.specifications.length > 0 && (
                        <div className="mt-3 flex flex-wrap gap-1">
                          {brand.specifications.slice(0, 2).map((spec) => (
                            <span
                              key={spec}
                              className="text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded"
                            >
                              {spec}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Card Action Buttons */}
                    <div className="mt-4 pt-3 border-t border-slate-100 flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => setActiveBrandModal(brand)}
                        className="flex-1 h-9 text-xs font-bold border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary rounded-xl cursor-pointer"
                      >
                        Specs & PDF
                      </Button>

                      <Button
                        size="sm"
                        onClick={() => onEnquire(brand.categoryId, brand.id)}
                        className="flex-1 h-9 text-xs font-bold bg-primary hover:bg-primary/90 text-white rounded-xl shadow-xs cursor-pointer"
                      >
                        Enquire Quote
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Back to All Categories Button at Bottom */}
            <div className="mt-8 text-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setActiveCategoryId(null)}
                className="font-bold text-xs sm:text-sm text-primary border-primary/30 hover:bg-primary/5 rounded-xl cursor-pointer gap-2"
              >
                <ChevronLeft className="h-4 w-4" />
                <span>Back to All 15 Categories</span>
              </Button>
            </div>
          </div>
        )}
      </main>

      {/* 3. MOBILE FLOATING QUICK ACTION BAR (Mobile view only: sm:hidden) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 flex items-center gap-2 shadow-2xl z-30">
        {activeCategoryId && (
          <button
            type="button"
            onClick={() => {
              setActiveCategoryId(null);
              setBrandSearchQuery("");
            }}
            className="flex items-center justify-center gap-1 h-11 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs border border-slate-300 transition-all active:scale-95 cursor-pointer shrink-0"
            title="Back to All Categories"
          >
            <ChevronLeft className="h-4 w-4" />
            <span>Back</span>
          </button>
        )}

        <a
          href={directWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-xs transition-all active:scale-95 cursor-pointer"
        >
          <MessageSquare className="h-4 w-4" />
          WhatsApp RM
        </a>

        <button
          type="button"
          onClick={() => onEnquire(activeCategoryId || undefined)}
          className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-xs shadow-xs transition-all active:scale-95 cursor-pointer"
        >
          <MessageSquareQuote className="h-4 w-4" />
          Get Quote
        </button>

        <button
          type="button"
          onClick={onViewBrochure}
          className="flex items-center justify-center h-11 w-11 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-all active:scale-95 cursor-pointer shrink-0"
          title="Download Brochure PDF"
        >
          <BookOpen className="h-4 w-4 text-primary" />
        </button>
      </div>

      {/* Brand Detail Modal */}
      <BrandDetailModal
        brand={activeBrandModal}
        isOpen={Boolean(activeBrandModal)}
        onClose={() => setActiveBrandModal(null)}
        onEnquire={(catId, bId) => onEnquire(catId, bId)}
        onViewBrochure={onViewBrochure}
      />
    </div>
  );
}
