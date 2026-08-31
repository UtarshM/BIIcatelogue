import { supabaseAdmin } from "@/integrations/supabase/client.server";

export type LeadInput = {
  name: string;
  mobile: string;
  area: string;
  projectName: string;
  projectType?: string;
  brochureId: string;
  pageUrl?: string;
  referrer?: string;
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
  utmContent?: string;
};

const RATE_LIMIT_WINDOW_MINUTES = 5;
const RATE_LIMIT_MAX = 8;

export async function recordLead(input: LeadInput) {
  const { data: brochure, error: brochureError } = await supabaseAdmin
    .from("catalogue_brochures")
    .select("id, name, brand_id, category_id, catalogue_brands(name), catalogue_categories(name)")
    .eq("id", input.brochureId)
    .eq("is_active", true)
    .maybeSingle();

  if (brochureError) throw new Error("Could not verify the selected catalogue.");
  if (!brochure) throw new Error("This catalogue is no longer available.");

  // Lightweight rate limiting per mobile number.
  const since = new Date(Date.now() - RATE_LIMIT_WINDOW_MINUTES * 60_000).toISOString();
  const { count } = await supabaseAdmin
    .from("catalogue_leads")
    .select("id", { count: "exact", head: true })
    .eq("mobile", input.mobile)
    .gte("created_at", since);

  if ((count ?? 0) >= RATE_LIMIT_MAX) {
    throw new Error("Too many submissions from this number. Please try again in a few minutes.");
  }

  const { data: lead, error } = await supabaseAdmin
    .from("catalogue_leads")
    .insert({
      name: input.name,
      mobile: input.mobile,
      area: input.area,
      project_name: input.projectName,
      project_type: input.projectType ?? null,
      brochure_id: brochure.id,
      brand_id: brochure.brand_id,
      category_id: brochure.category_id,
      brochure_name: brochure.name,
      brand_name: (brochure.catalogue_brands as { name: string } | null)?.name ?? null,
      category_name: (brochure.catalogue_categories as { name: string } | null)?.name ?? null,
      page_url: input.pageUrl ?? null,
      referrer: input.referrer ?? null,
      lead_source: input.utmSource ? "Campaign" : "Website",
      utm_source: input.utmSource ?? null,
      utm_medium: input.utmMedium ?? null,
      utm_campaign: input.utmCampaign ?? null,
      utm_content: input.utmContent ?? null,
    })
    .select("id")
    .single();

  if (error || !lead) throw new Error("We couldn't submit your details right now. Please try again.");

  return { accessToken: lead.id as string };
}

export async function resolveBrochureFile(accessToken: string, brochureId: string) {
  const { data: lead } = await supabaseAdmin
    .from("catalogue_leads")
    .select("id")
    .eq("id", accessToken)
    .maybeSingle();

  if (!lead) throw new Error("Please share your project details to access this catalogue.");

  const { data: file } = await supabaseAdmin
    .from("catalogue_brochure_files")
    .select("file_url, file_size_label")
    .eq("brochure_id", brochureId)
    .maybeSingle();

  if (!file) throw new Error("We couldn't load this catalogue. Please try again or contact our team.");

  return { fileUrl: file.file_url, sizeLabel: file.file_size_label ?? null };
}
