import { ArrowRight } from "lucide-react";

import { Reveal } from "@/components/catalogue/Reveal";
import { catalogueImage } from "@/lib/catalogue-images";
import { cn } from "@/lib/utils";
import type { Category } from "@/hooks/useCatalogue";

export function CategoryGrid({
  categories,
  selectedId,
  brandCountFor,
  onSelect,
}: {
  categories: Category[];
  selectedId: string | null;
  brandCountFor: (categoryId: string) => number;
  onSelect: (category: Category) => void;
}) {
  return (
    <section id="categories" className="mx-auto max-w-7xl scroll-mt-20 px-4 py-16 sm:px-6 lg:px-8">
      <Reveal>
        <p className="eyebrow text-primary">Step 1</p>
        <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Browse by category</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Pick the product category that matches your project to see the associate brands and
          catalogues available for it.
        </p>
      </Reveal>

      <ul className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((category, index) => {
          const selected = selectedId === category.id;
          return (
            <li key={category.id}>
              <Reveal delay={index * 60}>
                <button
                  type="button"
                  onClick={() => onSelect(category)}
                  aria-pressed={selected}
                  className={cn(
                    "group relative block h-full w-full overflow-hidden rounded-2xl border bg-card text-left shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift",
                    selected ? "border-primary ring-2 ring-primary/30" : "border-border",
                  )}
                >
                  <span className="relative block aspect-[4/3] overflow-hidden">
                    <img
                      src={catalogueImage(category.image_key)}
                      alt={`${category.name} products`}
                      loading="lazy"
                      width={1024}
                      height={768}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="gradient-sheen absolute inset-0" aria-hidden="true" />
                    <span className="absolute bottom-3 left-4 rounded-full bg-background/90 px-3 py-1 text-xs font-semibold text-foreground">
                      {brandCountFor(category.id)} brands
                    </span>
                  </span>
                  <span className="block p-5">
                    <span className="font-display flex items-center justify-between gap-3 text-lg font-bold">
                      {category.name}
                      <ArrowRight
                        className="h-4 w-4 shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                    {category.description ? (
                      <span className="mt-1.5 block text-sm text-muted-foreground">
                        {category.description}
                      </span>
                    ) : null}
                  </span>
                </button>
              </Reveal>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
