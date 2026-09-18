import { useState, useMemo } from "react";
import {
  Search,
  Filter,
  FileDown,
  MessageSquareQuote,
  Layers,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
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
} from "lucide-react";
import { CATEGORIES, BRANDS, type Brand, type Category } from "@/data/brochureData";
import { Button } from "@/components/ui/button";
import { BrandDetailModal } from "./BrandDetailModal";

export function CatalogueExplorer({
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
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [activeBrandModal, setActiveBrandModal] = useState<Brand | null>(null);

  // Filtered brands based on category and search query
  const filteredBrands = useMemo(() => {
    return BRANDS.filter((brand) => {
      const matchesCategory =
        selectedCategory === "all" || brand.categoryId === selectedCategory;

      if (!searchQuery.trim()) return matchesCategory;

      const q = searchQuery.toLowerCase();
      const matchesSearch =
        brand.name.toLowerCase().includes(q) ||
        brand.categoryName.toLowerCase().includes(q) ||
        (brand.tagline && brand.tagline.toLowerCase().includes(q)) ||
        brand.description.toLowerCase().includes(q) ||
        (brand.specifications && brand.specifications.some((s) => s.toLowerCase().includes(q))) ||
        (brand.popularProducts && brand.popularProducts.some((p) => p.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const activeCategoryObj = useMemo(() => {
    return CATEGORIES.find((c) => c.id === selectedCategory) || null;
  }, [selectedCategory]);

  const getCategoryIcon = (id: string) => {
    switch (id) {
      case "tmt-bars":
        return <ShieldAlert className="h-4 w-4" />;
      case "aac-blocks":
        return <Boxes className="h-4 w-4" />;
      case "cement":
        return <Factory className="h-4 w-4" />;
      case "aac-wall-panel":
        return <Layers className="h-4 w-4" />;
      case "adhesive-waterproofing":
        return <Droplets className="h-4 w-4" />;
      case "plumbing":
        return <Pipette className="h-4 w-4" />;
      case "bath-fittings":
        return <Bath className="h-4 w-4" />;
      case "tiles":
        return <GridIcon className="h-4 w-4" />;
      case "flush-tank":
        return <Sparkles className="h-4 w-4" />;
      case "kitchen-sink":
        return <ChefHat className="h-4 w-4" />;
      case "radiant-cooling":
        return <ThermometerSnowflake className="h-4 w-4" />;
      case "wellness-products":
        return <HeartPulse className="h-4 w-4" />;
      case "paints":
        return <Paintbrush className="h-4 w-4" />;
      case "wall-putti":
        return <SquareDot className="h-4 w-4" />;
      case "drainage-solution":
        return <FilterIcon className="h-4 w-4" />;
      default:
        return <Layers className="h-4 w-4" />;
    }
  };

  return (
    <section id="categories" className="py-14 sm:py-20 bg-slate-50/70 scroll-mt-18">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3">
              Official Material Catalogue
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Explore 15 Categories & <span className="text-primary">{BRANDS.length} Associate Brands</span>
            </h2>
            <p className="mt-2 text-xs sm:text-base text-slate-600 max-w-2xl">
              Filter by product vertical, discover technical specifications, and download catalogues or request wholesale quotations.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={onViewBrochure}
              className="font-bold gap-2 text-slate-700 bg-white border-slate-300 shadow-2xs hover:bg-slate-50 transition-all hover:scale-102 active:scale-95 text-xs sm:text-sm"
            >
              <BookOpen className="h-4 w-4 text-primary" />
              View Merged Brochure PDF
            </Button>
            <Button
              onClick={() => onEnquire(selectedCategory !== "all" ? selectedCategory : undefined)}
              className="bg-primary text-white font-bold gap-2 shadow-md shadow-primary/20 hover:bg-primary/90 transition-all hover:scale-102 active:scale-95 text-xs sm:text-sm"
            >
              <MessageSquareQuote className="h-4 w-4" />
              Bulk Enquiry
            </Button>
          </div>
        </div>

        {/* Category Horizontal Scroll Pills with Smooth Scroll & Styling */}
        <div className="mt-8 relative">
          <div className="-mx-4 px-4 sm:mx-0 sm:px-0 overflow-x-auto pb-4 scrollbar-none touch-pan-x flex items-center gap-2.5 min-w-max">
            {/* All Category Pill */}
            <button
              type="button"
              onClick={() => setSelectedCategory("all")}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                selectedCategory === "all"
                  ? "bg-primary text-white shadow-lg shadow-primary/25 scale-102"
                  : "bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300"
              }`}
            >
              <Layers className="h-4 w-4" />
              <span>All Categories</span>
              <span
                className={`ml-1 px-1.5 py-0.2 rounded-full text-[11px] font-bold ${
                  selectedCategory === "all" ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                }`}
              >
                {BRANDS.length}
              </span>
            </button>

            {/* 15 Individual Category Pills */}
            {CATEGORIES.map((cat) => {
              const isSelected = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "bg-primary text-white shadow-lg shadow-primary/25 scale-102"
                      : "bg-white text-slate-700 border border-slate-200/90 hover:bg-slate-100 hover:text-slate-900 hover:border-slate-300"
                  }`}
                >
                  <span className={isSelected ? "text-white" : "text-primary"}>
                    {getCategoryIcon(cat.id)}
                  </span>
                  <span>{cat.name}</span>
                  <span
                    className={`ml-1 px-1.5 py-0.2 rounded-full text-[11px] font-bold ${
                      isSelected ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {cat.brandCount}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Category Banner Details (when a specific category is selected) */}
        {activeCategoryObj && (
          <div className="mt-4 rounded-2xl border border-blue-200 bg-gradient-to-r from-blue-50 via-white to-blue-50/40 p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-2xs animate-in fade-in-50 duration-200">
            <div className="flex items-start gap-3.5">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-sm shrink-0 mt-0.5 animate-pulse-glow">
                {getCategoryIcon(activeCategoryObj.id)}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-xl font-bold text-slate-900">
                    {activeCategoryObj.name}
                  </h3>
                  <span className="rounded-full bg-primary/10 text-primary px-2.5 py-0.5 text-xs font-bold">
                    {activeCategoryObj.brandCount} {activeCategoryObj.brandCount === 1 ? "Brand" : "Associate Brands"}
                  </span>
                </div>
                <p className="mt-1 text-xs sm:text-sm text-slate-600 font-normal max-w-3xl">
                  {activeCategoryObj.description}
                </p>
              </div>
            </div>

            <Button
              size="sm"
              onClick={() => onEnquire(activeCategoryObj.id)}
              className="bg-primary text-white font-bold text-xs shrink-0 self-start sm:self-center h-9"
            >
              Enquire for {activeCategoryObj.name}
            </Button>
          </div>
        )}

        {/* Brand Grid Container */}
        <div id="brands" className="mt-8 scroll-mt-24">
          {/* Results Summary Counter */}
          <div className="flex items-center justify-between mb-6">
            <div className="text-xs sm:text-sm font-bold text-slate-500 uppercase tracking-wider">
              Showing <span className="text-slate-900 font-extrabold">{filteredBrands.length}</span> {filteredBrands.length === 1 ? "Brand" : "Brands"}
              {selectedCategory !== "all" && (
                <span> in <span className="text-primary font-extrabold">{activeCategoryObj?.name}</span></span>
              )}
            </div>

            {searchQuery && (
              <button
                type="button"
                onClick={() => onSearchChange("")}
                className="text-xs font-bold text-primary hover:underline cursor-pointer"
              >
                Clear Search Filter
              </button>
            )}
          </div>

          {/* Empty Search State */}
          {filteredBrands.length === 0 ? (
            <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-10 sm:p-12 text-center max-w-lg mx-auto my-12 animate-in fade-in-50 duration-200">
              <Search className="h-12 w-12 text-slate-300 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-slate-800">No brands found</h3>
              <p className="mt-1 text-sm text-slate-500">
                No associate brands matched your filter "{searchQuery}". Try selecting another category or resetting the search.
              </p>
              <div className="mt-6 flex justify-center gap-3">
                <Button
                  variant="outline"
                  onClick={() => {
                    onSearchChange("");
                    setSelectedCategory("all");
                  }}
                  className="font-bold text-xs"
                >
                  Reset All Filters
                </Button>
                <Button
                  onClick={() => onEnquire()}
                  className="bg-primary text-white font-bold text-xs"
                >
                  Contact Desk Directly
                </Button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {filteredBrands.map((brand, idx) => (
                <div
                  key={brand.id}
                  className="group relative flex flex-col justify-between rounded-2xl border border-slate-200/90 bg-white p-5 shadow-xs transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-primary/50"
                  style={{ animationDelay: `${(idx % 12) * 50}ms` }}
                >
                  <div>
                    {/* Top Category Badge */}
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 rounded-md bg-slate-100 px-2 py-0.5 text-[11px] font-bold text-slate-700 group-hover:bg-blue-50 group-hover:text-primary transition-colors">
                        {brand.categoryName}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200/60">
                        Verified Associate
                      </span>
                    </div>

                    {/* Logo Box - Exactly Cropped from Brochure */}
                    <div
                      onClick={() => setActiveBrandModal(brand)}
                      className="relative h-24 sm:h-28 w-full rounded-xl bg-slate-50/80 p-2.5 flex items-center justify-center border border-slate-100 cursor-pointer overflow-hidden transition-all duration-300 group-hover:bg-white group-hover:shadow-inner"
                      title={`Click to view ${brand.name} specifications & catalogue`}
                    >
                      <img
                        src={brand.logo}
                        alt={`${brand.name} logo`}
                        className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-108"
                        loading="lazy"
                      />
                    </div>

                    {/* Brand Title & Tagline */}
                    <div className="mt-4 cursor-pointer" onClick={() => setActiveBrandModal(brand)}>
                      <h4 className="font-display text-lg font-bold text-slate-900 group-hover:text-primary transition-colors flex items-center justify-between">
                        <span>{brand.name}</span>
                        <ArrowRight className="h-4 w-4 text-slate-300 opacity-0 group-hover:opacity-100 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                      </h4>
                      {brand.tagline && (
                        <p className="text-[11px] font-medium text-slate-500 line-clamp-1 mt-0.5">
                          {brand.tagline}
                        </p>
                      )}
                    </div>

                    {/* Short Description */}
                    <p
                      className="mt-2.5 text-xs text-slate-600 line-clamp-2 leading-relaxed cursor-pointer"
                      onClick={() => setActiveBrandModal(brand)}
                    >
                      {brand.description}
                    </p>

                    {/* Key Specs Pills */}
                    {brand.specifications && brand.specifications.length > 0 && (
                      <div className="mt-3.5 flex flex-wrap gap-1">
                        {brand.specifications.slice(0, 2).map((spec) => (
                          <span
                            key={spec}
                            className="inline-flex items-center text-[10px] font-semibold text-slate-600 bg-slate-100 rounded px-1.5 py-0.5"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Action Footer */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 flex items-center gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => setActiveBrandModal(brand)}
                      className="flex-1 h-9 text-xs font-bold border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-primary hover:border-primary/40 transition-colors"
                    >
                      Specs & PDF
                    </Button>

                    <Button
                      size="sm"
                      onClick={() => onEnquire(brand.categoryId, brand.id)}
                      className="flex-1 h-9 text-xs font-bold bg-primary hover:bg-primary/90 text-white shadow-xs transition-all active:scale-95"
                    >
                      Enquire Quote
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Brand Detail Modal */}
      <BrandDetailModal
        brand={activeBrandModal}
        isOpen={Boolean(activeBrandModal)}
        onClose={() => setActiveBrandModal(null)}
        onEnquire={(catId, bId) => onEnquire(catId, bId)}
        onViewBrochure={onViewBrochure}
      />
    </section>
  );
}
