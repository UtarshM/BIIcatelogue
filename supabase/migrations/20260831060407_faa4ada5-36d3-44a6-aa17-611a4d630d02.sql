
CREATE TABLE public.catalogue_categories (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  description text,
  image_key text,
  sort_order int NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.catalogue_categories TO anon, authenticated;
GRANT ALL ON public.catalogue_categories TO service_role;
ALTER TABLE public.catalogue_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Categories are public" ON public.catalogue_categories FOR SELECT TO anon, authenticated USING (is_active);

CREATE TABLE public.catalogue_brands (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  description text,
  logo_text text,
  sort_order int NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.catalogue_brands TO anon, authenticated;
GRANT ALL ON public.catalogue_brands TO service_role;
ALTER TABLE public.catalogue_brands ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Brands are public" ON public.catalogue_brands FOR SELECT TO anon, authenticated USING (is_active);

CREATE TABLE public.catalogue_brand_categories (
  brand_id uuid NOT NULL REFERENCES public.catalogue_brands(id) ON DELETE CASCADE,
  category_id uuid NOT NULL REFERENCES public.catalogue_categories(id) ON DELETE CASCADE,
  PRIMARY KEY (brand_id, category_id)
);
GRANT SELECT ON public.catalogue_brand_categories TO anon, authenticated;
GRANT ALL ON public.catalogue_brand_categories TO service_role;
ALTER TABLE public.catalogue_brand_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Brand categories are public" ON public.catalogue_brand_categories FOR SELECT TO anon, authenticated USING (true);

CREATE TABLE public.catalogue_brochures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  slug text NOT NULL UNIQUE,
  name text NOT NULL,
  description text,
  brand_id uuid NOT NULL REFERENCES public.catalogue_brands(id) ON DELETE CASCADE,
  category_id uuid NOT NULL REFERENCES public.catalogue_categories(id) ON DELETE CASCADE,
  published_year text,
  cover_key text,
  sort_order int NOT NULL DEFAULT 0,
  is_active boolean NOT NULL DEFAULT true,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.catalogue_brochures TO anon, authenticated;
GRANT ALL ON public.catalogue_brochures TO service_role;
ALTER TABLE public.catalogue_brochures ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Brochures are public" ON public.catalogue_brochures FOR SELECT TO anon, authenticated USING (is_active);

CREATE TABLE public.catalogue_brochure_files (
  brochure_id uuid PRIMARY KEY REFERENCES public.catalogue_brochures(id) ON DELETE CASCADE,
  file_url text NOT NULL,
  file_size_label text
);
GRANT ALL ON public.catalogue_brochure_files TO service_role;
ALTER TABLE public.catalogue_brochure_files ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.catalogue_hero (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  headline text NOT NULL,
  supporting_copy text NOT NULL,
  eyebrow text,
  cta_label text,
  is_active boolean NOT NULL DEFAULT true,
  starts_at timestamptz,
  ends_at timestamptz,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT SELECT ON public.catalogue_hero TO anon, authenticated;
GRANT ALL ON public.catalogue_hero TO service_role;
ALTER TABLE public.catalogue_hero ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Hero content is public" ON public.catalogue_hero FOR SELECT TO anon, authenticated USING (is_active);

CREATE TABLE public.catalogue_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  name text NOT NULL,
  mobile text NOT NULL,
  area text NOT NULL,
  project_name text NOT NULL,
  project_type text,
  category_id uuid REFERENCES public.catalogue_categories(id) ON DELETE SET NULL,
  brand_id uuid REFERENCES public.catalogue_brands(id) ON DELETE SET NULL,
  brochure_id uuid REFERENCES public.catalogue_brochures(id) ON DELETE SET NULL,
  category_name text,
  brand_name text,
  brochure_name text,
  page_url text,
  referrer text,
  lead_source text,
  utm_source text,
  utm_medium text,
  utm_campaign text,
  utm_content text,
  status text NOT NULL DEFAULT 'New',
  remarks text,
  follow_up_date date
);
GRANT ALL ON public.catalogue_leads TO service_role;
ALTER TABLE public.catalogue_leads ENABLE ROW LEVEL SECURITY;
CREATE INDEX catalogue_leads_mobile_idx ON public.catalogue_leads (mobile);

INSERT INTO public.catalogue_hero (headline, supporting_copy, eyebrow, cta_label)
VALUES ('Explore Brands. Discover Solutions. Build Better.',
        'Explore BuilditIndia''s trusted associate brands, product categories and brochures — all in one place.',
        'Brand Catalogue', 'Get Expert Help');

INSERT INTO public.catalogue_categories (slug, name, description, image_key, sort_order) VALUES
  ('bathroom-sanitary','Bathroom & Sanitary','Sanitaryware, faucets, showers and complete bath solutions.','bathroom',1),
  ('tiles','Tiles','Wall, floor and designer tiles for every space.','tiles',2),
  ('flooring','Flooring','Wooden, laminate, vinyl and engineered flooring.','flooring',3),
  ('kitchen','Kitchen','Modular kitchen systems, sinks, hardware and fittings.','kitchen',4),
  ('lighting','Lighting','Architectural, decorative and functional lighting.','lighting',5),
  ('paints-finishes','Paints & Finishes','Interior and exterior paints, textures and wall finishes.','paints',6);

INSERT INTO public.catalogue_brands (slug, name, description, logo_text, sort_order) VALUES
  ('hindware','Hindware','Trusted Indian sanitaryware and bath solutions.','Hindware',1),
  ('hindware-italian','Hindware Italian Collection','Premium Italian-inspired bathroom design.','Hindware Italian',2),
  ('queo','QUEO','Contemporary luxury bathroom products.','QUEO',3),
  ('kajaria','Kajaria','India''s leading tile manufacturer.','Kajaria',4),
  ('somany','Somany','Tiles, sanitaryware and bath fittings.','Somany',5),
  ('pergo','Pergo','World-class laminate and vinyl flooring.','Pergo',6),
  ('greenply','Greenply','Plywood, panels and flooring solutions.','Greenply',7),
  ('hafele','Häfele','Kitchen hardware, fittings and appliances.','Häfele',8),
  ('sleek','Sleek','Modular kitchens and accessories.','Sleek',9),
  ('wipro-lighting','Wipro Lighting','Architectural and commercial lighting.','Wipro Lighting',10),
  ('philips','Philips','Smart and energy-efficient lighting.','Philips',11),
  ('asian-paints','Asian Paints','Paints, textures and wall finishes.','Asian Paints',12),
  ('berger','Berger','Decorative and protective coatings.','Berger',13);

INSERT INTO public.catalogue_brand_categories (brand_id, category_id)
SELECT b.id, c.id FROM (VALUES
  ('hindware','bathroom-sanitary'),('hindware-italian','bathroom-sanitary'),('queo','bathroom-sanitary'),
  ('somany','bathroom-sanitary'),
  ('kajaria','tiles'),('somany','tiles'),('hindware','tiles'),
  ('pergo','flooring'),('greenply','flooring'),('kajaria','flooring'),
  ('hafele','kitchen'),('sleek','kitchen'),
  ('wipro-lighting','lighting'),('philips','lighting'),
  ('asian-paints','paints-finishes'),('berger','paints-finishes')
) AS m(brand_slug, cat_slug)
JOIN public.catalogue_brands b ON b.slug = m.brand_slug
JOIN public.catalogue_categories c ON c.slug = m.cat_slug;

INSERT INTO public.catalogue_brochures (slug, name, description, brand_id, category_id, published_year, cover_key, sort_order)
SELECT m.slug, m.name, m.descr, b.id, c.id, m.yr, m.cover, m.ord FROM (VALUES
  ('hindware-bath-2026','Complete Bath Collection','Sanitaryware, faucets and shower systems across every price point.','hindware','bathroom-sanitary','2026','bathroom',1),
  ('hindware-faucets-2026','Faucets & Showers','Full faucet, shower and bath accessory range.','hindware','bathroom-sanitary','2026','bathroom',2),
  ('hindware-italian-bath-2026','Bathroom Collection Catalogue','Italian-inspired premium bathroom concepts and finishes.','hindware-italian','bathroom-sanitary','2026','bathroom',1),
  ('queo-luxury-2026','QUEO Luxury Bath Catalogue','Contemporary luxury bath products and designer collections.','queo','bathroom-sanitary','2026','bathroom',1),
  ('somany-sanitary-2026','Sanitaryware & Bath Fittings','Complete bath solutions from Somany.','somany','bathroom-sanitary','2025','bathroom',1),
  ('kajaria-tiles-2026','Tile Master Catalogue','Wall, floor, designer and large-format tiles.','kajaria','tiles','2026','tiles',1),
  ('kajaria-gvt-2026','Glazed Vitrified Tiles','Premium GVT range with technical specifications.','kajaria','tiles','2026','tiles',2),
  ('somany-tiles-2026','Somany Tile Collection','Ceramic and vitrified tile range.','somany','tiles','2026','tiles',1),
  ('hindware-tiles-2025','Hindware Tiles','Tile collections for residential and commercial projects.','hindware','tiles','2025','tiles',1),
  ('pergo-flooring-2026','Laminate & Vinyl Flooring','Complete flooring range with installation guidance.','pergo','flooring','2026','flooring',1),
  ('greenply-flooring-2026','Wooden Flooring Guide','Engineered and laminate wooden flooring options.','greenply','flooring','2026','flooring',1),
  ('kajaria-floor-2026','Floor Tiles Catalogue','Anti-skid, wood-finish and outdoor floor tiles.','kajaria','flooring','2026','flooring',1),
  ('hafele-kitchen-2026','Kitchen Hardware Catalogue','Hinges, drawer systems, organisers and appliances.','hafele','kitchen','2026','kitchen',1),
  ('sleek-kitchen-2026','Modular Kitchen Catalogue','Modular kitchen layouts, finishes and accessories.','sleek','kitchen','2026','kitchen',1),
  ('wipro-lighting-2026','Architectural Lighting Guide','Commercial and architectural luminaires.','wipro-lighting','lighting','2026','lighting',1),
  ('philips-lighting-2026','Smart & Decorative Lighting','Smart lighting, downlights and decorative fixtures.','philips','lighting','2026','lighting',1),
  ('asian-paints-2026','Colour & Finishes Catalogue','Interior, exterior, texture and wood finish range.','asian-paints','paints-finishes','2026','paints',1),
  ('berger-paints-2026','Berger Product Catalogue','Decorative and protective coating solutions.','berger','paints-finishes','2026','paints',1)
) AS m(slug, name, descr, brand_slug, cat_slug, yr, cover, ord)
JOIN public.catalogue_brands b ON b.slug = m.brand_slug
JOIN public.catalogue_categories c ON c.slug = m.cat_slug;

INSERT INTO public.catalogue_brochure_files (brochure_id, file_url, file_size_label)
SELECT id, 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf', 'PDF' FROM public.catalogue_brochures;
