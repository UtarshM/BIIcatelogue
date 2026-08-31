import { Reveal } from "@/components/catalogue/Reveal";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { Brand, Category } from "@/hooks/useCatalogue";

export function BrandGrid({
  category,
  brands,
  selectedBrandId,
  brochureCountFor,
  onSelect,
  onEnquire,
}: {
  category: Category;
  brands: Brand[];
  selectedBrandId: string | null;
  brochureCountFor: (brandId: string) => number;
  onSelect: (brand: Brand) => void;
  onEnquire: () => void;
}) {
  return (
    <section id="brands" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
        <Reveal>
          <p className="eyebrow text-primary">Step 2</p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Associate brands in {category.name}
          </h2>
          <p className="mt-3 max-w-2xl text-muted-foreground">
            Select a brand to see the catalogues and brochures available for your project.
          </p>
        </Reveal>

        {brands.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-border bg-card p-8 text-center">
            <p className="text-muted-foreground">
              No brands are currently available in this category.
            </p>
            <Button variant="hero" className="mt-4" onClick={onEnquire}>
              Get Expert Help
            </Button>
          </div>
        ) : (
          <ul className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {brands.map((brand, index) => {
              const selected = selectedBrandId === brand.id;
              const count = brochureCountFor(brand.id);
              return (
                <li key={brand.id}>
                  <Reveal delay={index * 50}>
                    <button
                      type="button"
                      onClick={() => onSelect(brand)}
                      aria-pressed={selected}
                      className={cn(
                        "group flex h-full w-full flex-col justify-between gap-4 rounded-xl border bg-card p-5 text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
                        selected ? "border-primary ring-2 ring-primary/30" : "border-border",
                      )}
                    >
                      <span className="flex h-14 items-center">
                        <span className="font-display text-xl leading-tight font-extrabold tracking-tight text-foreground transition-colors group-hover:text-primary">
                          {brand.logo_text ?? brand.name}
                        </span>
                      </span>
                      <span className="block">
                        {brand.description ? (
                          <span className="line-clamp-2 block text-xs text-muted-foreground">
                            {brand.description}
                          </span>
                        ) : null}
                        <span className="mt-3 inline-flex rounded-full bg-accent px-2.5 py-1 text-[11px] font-semibold text-accent-foreground">
                          {count} {count === 1 ? "catalogue" : "catalogues"}
                        </span>
                      </span>
                    </button>
                  </Reveal>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </section>
  );
}
