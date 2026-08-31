import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

import { recordLead, resolveBrochureFile } from "./catalogue.server";

const leadSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your full name" })
    .max(100, { message: "Name must be less than 100 characters" })
    .regex(/^[\p{L}\s.'-]+$/u, { message: "Please enter a valid name" }),
  mobile: z
    .string()
    .trim()
    .transform((value) => value.replace(/[\s-]/g, "").replace(/^(\+91|91|0)/, ""))
    .pipe(
      z
        .string()
        .regex(/^[6-9]\d{9}$/, { message: "Enter a valid 10-digit Indian mobile number" }),
    ),
  area: z
    .string()
    .trim()
    .min(2, { message: "Please enter your area or locality" })
    .max(120, { message: "Area must be less than 120 characters" }),
  projectName: z
    .string()
    .trim()
    .min(2, { message: "Please enter your project name" })
    .max(120, { message: "Project name must be less than 120 characters" }),
  projectType: z
    .enum(["Residential", "Commercial", "Hospitality", "Office", "Retail", "Other"])
    .optional(),
  brochureId: z.string().uuid(),
  pageUrl: z.string().max(500).optional(),
  referrer: z.string().max(500).optional(),
  utmSource: z.string().max(120).optional(),
  utmMedium: z.string().max(120).optional(),
  utmCampaign: z.string().max(160).optional(),
  utmContent: z.string().max(160).optional(),
  website: z.string().max(0, { message: "Submission blocked" }).optional(),
});

export const submitCatalogueLead = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => leadSchema.parse(data))
  .handler(async ({ data }) => recordLead(data));

export const getBrochureFile = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) =>
    z.object({ accessToken: z.string().uuid(), brochureId: z.string().uuid() }).parse(data),
  )
  .handler(async ({ data }) => resolveBrochureFile(data.accessToken, data.brochureId));
