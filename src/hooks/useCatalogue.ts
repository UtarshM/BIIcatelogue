import { useQuery } from "@tanstack/react-query";

import { supabase } from "@/integrations/supabase/client";

export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  image_key: string | null;
};

export type Brand = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  logo_text: string | null;
  categoryIds: string[];
};

export type Brochure = {
  id: string;
  slug: string;
  name: string;
  description: string | null;
  brand_id: string;
  category_id: string;
  published_year: string | null;
  cover_key: string | null;
};

export type Hero = {
  headline: string;
  supporting_copy: string;
  eyebrow: string | null;
  cta_label: string | null;
};

async function fetchCatalogue() {
  const [categories, brands, links, brochures, hero] = await Promise.all([
    supabase
      .from("catalogue_categories")
      .select("id, slug, name, description, image_key")
      .order("sort_order"),
    supabase
      .from("catalogue_brands")
      .select("id, slug, name, description, logo_text")
      .order("sort_order"),
    supabase.from("catalogue_brand_categories").select("brand_id, category_id"),
    supabase
      .from("catalogue_brochures")
      .select("id, slug, name, description, brand_id, category_id, published_year, cover_key")
      .order("sort_order"),
    supabase
      .from("catalogue_hero")
      .select("headline, supporting_copy, eyebrow, cta_label")
      .limit(1)
      .maybeSingle(),
  ]);

  const error =
    categories.error || brands.error || links.error || brochures.error || hero.error;
  if (error) throw new Error(error.message);

  const linkMap = new Map<string, string[]>();
  for (const link of links.data ?? []) {
    linkMap.set(link.brand_id, [...(linkMap.get(link.brand_id) ?? []), link.category_id]);
  }

  return {
    categories: (categories.data ?? []) as Category[],
    brands: ((brands.data ?? []) as Omit<Brand, "categoryIds">[]).map((brand) => ({
      ...brand,
      categoryIds: linkMap.get(brand.id) ?? [],
    })) as Brand[],
    brochures: (brochures.data ?? []) as Brochure[],
    hero: (hero.data ?? null) as Hero | null,
  };
}

export function useCatalogue() {
  return useQuery({ queryKey: ["catalogue"], queryFn: fetchCatalogue, staleTime: 5 * 60_000 });
}
