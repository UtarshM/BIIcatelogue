import { PhoneCall, MessageSquare, FileDown, QrCode, Building2, User, ShieldCheck, Mail, Globe, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { COMPANY_DETAILS } from "@/data/brochureData";

export function ContactManagerSection({
  onEnquire,
  onViewBrochure,
}: {
  onEnquire: () => void;
  onViewBrochure: () => void;
}) {
  const rm = COMPANY_DETAILS.relationshipManager;

  const defaultWhatsappUrl = `https://wa.me/${rm.whatsappNumber}?text=${encodeURIComponent(
    "Hello Ajjay ji, I am contacting you via BuilditIndia Digital Brand Hub. I would like to discuss material procurement for my construction project."
  )}`;

  return (
    <section id="contact" className="py-16 sm:py-24 bg-gradient-to-b from-slate-900 via-[#07134b] to-[#040b2e] text-white relative overflow-hidden">
      {/* Decorative Grid Pattern */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#ffffff 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      {/* Subtle Glows */}
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-blue-600/20 blur-[100px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[350px] h-[350px] bg-orange-500/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Relationship Manager Card & Company Profile */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-400/30 bg-orange-500/10 px-3.5 py-1 text-xs font-bold text-orange-300 uppercase tracking-widest">
              Dedicated Support Desk
            </div>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              Direct Sourcing Desk & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Relationship Management</span>
            </h2>

            <p className="text-sm sm:text-base lg:text-lg text-blue-100/80 leading-relaxed font-normal">
              Skip traditional middlemen markups. Connect directly with our institutional Relationship Manager for instant manufacturer quotations, scheduled deliveries, and technical specifications.
            </p>

            {/* Manager Box */}
            <div className="rounded-2xl border border-white/15 bg-white/10 p-5 sm:p-7 backdrop-blur-md shadow-2xl space-y-5 transition-all duration-300 hover:border-white/25">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-5">
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-tr from-primary to-blue-500 text-white font-extrabold text-xl shadow-lg border border-white/20 shrink-0">
                    AD
                  </div>
                  <div>
                    <div className="text-xs font-bold text-orange-400 uppercase tracking-wider">
                      {rm.designation}
                    </div>
                    <div className="text-xl sm:text-2xl font-extrabold text-white">
                      {rm.name}
                    </div>
                    <div className="text-xs text-blue-200/80 mt-0.5 flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5" />
                      <span>{COMPANY_DETAILS.parentCompany}</span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-row sm:flex-col gap-2 w-full sm:w-auto">
                  <a
                    href={`tel:${rm.phone}`}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-orange-500 hover:bg-orange-600 px-4 py-2.5 text-xs font-bold text-white transition shadow-md shadow-orange-500/20 active:scale-95"
                  >
                    <PhoneCall className="h-4 w-4" />
                    Call: {rm.phone}
                  </a>

                  <a
                    href={defaultWhatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 px-4 py-2.5 text-xs font-bold text-white transition shadow-md shadow-emerald-600/20 active:scale-95"
                  >
                    <MessageSquare className="h-4 w-4" />
                    WhatsApp Desk
                  </a>
                </div>
              </div>

              {/* Service Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <div className="font-bold text-white">Competitive Pricing</div>
                  <div className="text-blue-200/70 text-[11px] mt-0.5">Wholesale tier rates</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <div className="font-bold text-white">Fastest Delivery</div>
                  <div className="text-blue-200/70 text-[11px] mt-0.5">On-site scheduled dispatch</div>
                </div>
                <div className="rounded-xl bg-white/5 p-3 border border-white/10">
                  <div className="font-bold text-white">Superior Service</div>
                  <div className="text-blue-200/70 text-[11px] mt-0.5">End-to-end assistance</div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 pt-2">
              <Button
                onClick={onEnquire}
                size="lg"
                className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-white font-bold h-12 px-6 rounded-xl shadow-lg shadow-primary/30 active:scale-95 transition-all"
              >
                Submit Project Material RFQ
              </Button>

              <Button
                variant="outline"
                onClick={onViewBrochure}
                size="lg"
                className="w-full sm:w-auto border-white/30 bg-white/10 hover:bg-white/20 text-white font-bold h-12 px-6 rounded-xl backdrop-blur-xs gap-2 active:scale-95 transition-all"
              >
                <FileDown className="h-4 w-4 text-sky-300" />
                View Official Brochure PDF
              </Button>
            </div>
          </div>

          {/* Right Column: QR Code & Pure White Brand Logo on dark card */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full max-w-sm rounded-3xl border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-6 sm:p-8 text-center backdrop-blur-xl shadow-2xl space-y-5 animate-float-slow">
              {/* Pure White Brand Logo */}
              <div className="mx-auto flex h-12 w-auto items-center justify-center">
                <img
                  src="/builditindia-logo-white.png"
                  alt="BuilditIndia"
                  className="h-10 w-auto object-contain"
                />
              </div>

              {/* Scannable QR Code */}
              <div className="mx-auto w-44 h-44 sm:w-48 sm:h-48 bg-white p-3 rounded-2xl shadow-xl flex items-center justify-center border-2 border-orange-400/40">
                <img
                  src="/logos/brochure-qr.png"
                  alt="Scan QR for BuilditIndia Digital Hub"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <div className="text-xs font-bold text-orange-400 uppercase tracking-widest">
                  Scan to Connect & Download
                </div>
                <p className="text-xs text-blue-200/80 mt-1">
                  Point your camera to instantly access digital brochures and connect with our Relationship Manager.
                </p>
              </div>

              <div className="pt-3 border-t border-white/15 text-xs text-slate-300 space-y-1">
                <div className="font-extrabold text-white">
                  {COMPANY_DETAILS.parentCompany}
                </div>
                <div className="text-blue-200/70">
                  {COMPANY_DETAILS.website}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
