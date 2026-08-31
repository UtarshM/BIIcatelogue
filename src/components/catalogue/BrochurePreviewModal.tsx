import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileDown, ChevronLeft, ChevronRight, Eye, MessageSquareQuote, CheckCircle2, PhoneCall } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/brochureData";

export function BrochurePreviewModal({
  isOpen,
  onClose,
  onEnquire,
}: {
  isOpen: boolean;
  onClose: () => void;
  onEnquire: () => void;
}) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const totalPages = 4;

  const pageTitles = [
    "Page 1: Brand & Platform Overview",
    "Page 2: Associated Brands (TMT, AAC, Cement, Waterproofing, Plumbing)",
    "Page 3: Associated Brands (Sanitaryware, Tiles, Sinks, Wellness, Paints)",
    "Page 4: Core Pillars & Relationship Management",
  ];

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-4xl p-0 overflow-hidden bg-slate-900 text-white rounded-2xl sm:rounded-3xl border border-slate-700 shadow-2xl">
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-slate-800 bg-slate-950/80 px-6 py-4">
          <div>
            <DialogTitle className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
              <Eye className="h-5 w-5 text-sky-400" />
              BuilditIndia Official Merged Brochure
            </DialogTitle>
            <p className="text-xs text-slate-400 mt-0.5">
              {pageTitles[currentPage - 1]}
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={COMPANY_DETAILS.brochurePdfUrl}
              download="BuilditIndia-Brochure.pdf"
              className="inline-flex items-center gap-1.5 rounded-lg bg-primary hover:bg-primary/90 text-white px-4 py-2 text-xs font-bold transition shadow-sm"
            >
              <FileDown className="h-4 w-4" />
              Download Merged PDF
            </a>
          </div>
        </div>

        {/* PDF Page Display */}
        <div className="relative bg-slate-950 flex items-center justify-center p-2 sm:p-4 min-h-[50vh] max-h-[70vh] overflow-auto">
          <img
            src={`/brochure_page_${currentPage}.png`}
            alt={`BuilditIndia Brochure Page ${currentPage}`}
            className="max-h-[65vh] w-auto object-contain rounded-lg shadow-2xl border border-slate-800"
          />

          {/* Previous Page Button */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => (p > 1 ? p - 1 : totalPages))}
            className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white p-2.5 shadow-lg backdrop-blur-xs transition"
            aria-label="Previous Page"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          {/* Next Page Button */}
          <button
            type="button"
            onClick={() => setCurrentPage((p) => (p < totalPages ? p + 1 : 1))}
            className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white p-2.5 shadow-lg backdrop-blur-xs transition"
            aria-label="Next Page"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>

        {/* Footer Navigation Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-slate-800 bg-slate-950 px-6 py-4">
          {/* Page Indicators */}
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((pageNum) => (
              <button
                key={pageNum}
                type="button"
                onClick={() => setCurrentPage(pageNum)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold transition-all ${
                  currentPage === pageNum
                    ? "bg-primary text-white scale-110 shadow-md shadow-primary/30"
                    : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
                }`}
              >
                {pageNum}
              </button>
            ))}
            <span className="text-xs text-slate-500 ml-2">
              Page {currentPage} of {totalPages}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => {
                onClose();
                onEnquire();
              }}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold text-xs gap-1.5 shadow-md shadow-orange-500/20"
            >
              <MessageSquareQuote className="h-4 w-4" />
              Request Wholesale Quote
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={onClose}
              className="border-slate-700 text-slate-300 hover:bg-slate-800 font-semibold text-xs"
            >
              Close
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
