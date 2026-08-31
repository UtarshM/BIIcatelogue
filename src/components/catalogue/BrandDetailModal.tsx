import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { MessageSquareQuote, PhoneCall, FileDown, CheckCircle2, Package, Tag, ArrowRight, ExternalLink } from "lucide-react";
import type { Brand } from "@/data/brochureData";
import { COMPANY_DETAILS } from "@/data/brochureData";

export function BrandDetailModal({
  brand,
  isOpen,
  onClose,
  onEnquire,
  onViewBrochure,
}: {
  brand: Brand | null;
  isOpen: boolean;
  onClose: () => void;
  onEnquire: (categoryId: string, brandId: string) => void;
  onViewBrochure: () => void;
}) {
  if (!brand) return null;

  const whatsappMessage = encodeURIComponent(
    `Hello BuilditIndia Team, I am interested in sourcing ${brand.name} (${brand.categoryName}) for my project. Please share the best wholesale price quotation and product catalogue.`
  );

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-2xl w-[95vw] sm:w-full p-0 overflow-hidden bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl animate-in zoom-in-95 duration-200">
        {/* Top Header Strip with Brand Logo */}
        <div className="bg-gradient-to-r from-slate-900 via-[#0a1854] to-primary p-5 sm:p-6 text-white flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4 w-full sm:w-auto">
            <div className="h-16 w-28 sm:h-20 sm:w-36 bg-white rounded-xl p-2.5 flex items-center justify-center shadow-lg shrink-0 border border-slate-100">
              <img
                src={brand.logo}
                alt={`${brand.name} logo`}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-blue-100 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider mb-1 backdrop-blur-xs">
                {brand.categoryName}
              </div>
              <DialogTitle className="text-xl sm:text-3xl font-extrabold text-white">
                {brand.name}
              </DialogTitle>
              {brand.tagline && (
                <p className="text-xs sm:text-sm text-blue-200/90 font-medium line-clamp-1">
                  {brand.tagline}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 max-h-[68vh] overflow-y-auto">
          {/* Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1.5">
              Brand Overview
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {brand.description}
            </p>
          </div>

          {/* Specifications */}
          {brand.specifications && brand.specifications.length > 0 && (
            <div className="rounded-xl bg-slate-50 border border-slate-200/80 p-4 sm:p-5">
              <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                Key Technical Specifications & Features
              </h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {brand.specifications.map((spec) => (
                  <li key={spec} className="flex items-start gap-2 text-xs font-semibold text-slate-700">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                    <span>{spec}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Popular Products */}
          {brand.popularProducts && brand.popularProducts.length > 0 && (
            <div>
              <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-1.5">
                <Package className="h-3.5 w-3.5 text-slate-500" />
                Featured Product Lines
              </h4>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {brand.popularProducts.map((prod) => (
                  <span
                    key={prod}
                    className="inline-flex items-center px-2.5 py-1 rounded-lg bg-blue-50 text-primary border border-blue-200/70 text-xs font-semibold"
                  >
                    {prod}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Dedicated Catalogue Slot (No RM Phone Number) */}
          <div className="rounded-xl border border-dashed border-blue-300 bg-blue-50/50 p-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="text-center sm:text-left">
              <h5 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5 justify-center sm:justify-start">
                <FileDown className="h-4 w-4 text-primary" />
                {brand.name} Digital Catalogue
              </h5>
              <p className="text-xs text-slate-600 mt-0.5">
                {brand.cataloguePdfUrl
                  ? "Download the dedicated specification booklet for this brand."
                  : "Individual brand specification sheet is available. You can also view the Master Brochure."}
              </p>
            </div>

            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                if (brand.cataloguePdfUrl) {
                  window.open(brand.cataloguePdfUrl, "_blank");
                } else {
                  onViewBrochure();
                }
              }}
              className="shrink-0 font-bold border-primary text-primary hover:bg-primary/10 text-xs h-9"
            >
              <FileDown className="h-4 w-4 mr-1.5" />
              {brand.cataloguePdfUrl ? "Download Brand PDF" : "View Master Brochure"}
            </Button>
          </div>

          {/* Relationship Manager Sourcing Desk */}
          <div className="rounded-xl bg-slate-900 text-white p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <div>
              <div className="text-[11px] font-bold text-orange-400 uppercase tracking-wider">
                Direct Sourcing Desk
              </div>
              <div className="text-sm font-bold text-white mt-0.5">
                {COMPANY_DETAILS.relationshipManager.name} ({COMPANY_DETAILS.relationshipManager.designation})
              </div>
              <div className="text-xs text-slate-300">
                Direct institutional quotes & scheduled logistics
              </div>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <a
                href={`https://wa.me/${COMPANY_DETAILS.relationshipManager.whatsappNumber}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white px-3.5 py-2 text-xs font-bold transition shadow-sm"
              >
                WhatsApp Desk
              </a>
              <a
                href={`tel:${COMPANY_DETAILS.relationshipManager.phone}`}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white px-3.5 py-2 text-xs font-bold transition border border-white/20"
              >
                <PhoneCall className="h-3.5 w-3.5 text-orange-400" />
                Call Desk
              </a>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              onClick={() => {
                onClose();
                onEnquire(brand.categoryId, brand.id);
              }}
              className="flex-1 bg-primary hover:bg-primary/90 text-white font-bold h-11 sm:h-12 rounded-xl shadow-lg shadow-primary/25 gap-2 text-xs sm:text-sm"
            >
              <MessageSquareQuote className="h-4 sm:h-5 w-4 sm:w-5" />
              Request Best Wholesale Quote
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={onClose}
              className="sm:w-28 h-11 sm:h-12 rounded-xl font-semibold border-slate-200 text-xs sm:text-sm"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
