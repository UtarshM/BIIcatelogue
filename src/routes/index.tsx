import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/catalogue/SiteHeader";
import { HeroSection } from "@/components/catalogue/HeroSection";
import { ValuePillars } from "@/components/catalogue/ValuePillars";
import { CatalogueExplorer } from "@/components/catalogue/CatalogueExplorer";
import { ContactManagerSection } from "@/components/catalogue/ContactManagerSection";
import { SiteFooter } from "@/components/catalogue/SiteFooter";
import { BrochurePreviewModal } from "@/components/catalogue/BrochurePreviewModal";
import { EnquiryModal } from "@/components/catalogue/EnquiryModal";
import { MessageSquareQuote, FileText, PhoneCall, MessageSquare } from "lucide-react";
import { COMPANY_DETAILS } from "@/data/brochureData";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [enquiryCategory, setEnquiryCategory] = useState<string | undefined>();
  const [enquiryBrand, setEnquiryBrand] = useState<string | undefined>();
  const [brochureModalOpen, setBrochureModalOpen] = useState(false);

  const handleEnquire = (categoryId?: string, brandId?: string) => {
    setEnquiryCategory(categoryId);
    setEnquiryBrand(brandId);
    setEnquiryModalOpen(true);
  };

  const handleViewBrochure = () => {
    setBrochureModalOpen(true);
  };

  const directWhatsappUrl = `https://wa.me/${COMPANY_DETAILS.relationshipManager.whatsappNumber}?text=${encodeURIComponent(
    "Hello BuilditIndia Team, I would like to inquire about building materials and wholesale pricing."
  )}`;

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans selection:bg-primary/20 selection:text-primary pb-16 sm:pb-0">
      {/* 1. Official Sticky Navigation Header */}
      <SiteHeader
        onEnquire={() => handleEnquire()}
        onViewBrochure={handleViewBrochure}
      />

      {/* 2. Hero Section with Live Search from Brochure Page 1 */}
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onEnquire={() => handleEnquire()}
        onViewBrochure={handleViewBrochure}
      />

      {/* 3. Three Core Pillars from Brochure Page 4 */}
      <ValuePillars
        onEnquire={() => handleEnquire()}
      />

      {/* 4. Complete 15 Categories & 48 Associate Brands Explorer from Brochure Pages 2 & 3 */}
      <CatalogueExplorer
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onEnquire={handleEnquire}
        onViewBrochure={handleViewBrochure}
      />

      {/* 5. Relationship Manager & Direct Desk Section from Brochure Page 4 */}
      <ContactManagerSection
        onEnquire={() => handleEnquire()}
        onViewBrochure={handleViewBrochure}
      />

      {/* 6. Footer */}
      <SiteFooter
        onEnquire={() => handleEnquire()}
        onViewBrochure={handleViewBrochure}
      />

      {/* 7. Interactive 4-Page Merged Brochure Viewer & Downloader */}
      <BrochurePreviewModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        onEnquire={() => handleEnquire()}
      />

      {/* 8. Quote Request & Enquiry Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => {
          setEnquiryModalOpen(false);
          setEnquiryCategory(undefined);
          setEnquiryBrand(undefined);
        }}
        initialCategoryId={enquiryCategory}
        initialBrandId={enquiryBrand}
      />

      {/* Mobile Floating Quick-Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-30 sm:hidden border-t border-slate-200 bg-white/95 backdrop-blur-md px-3 py-2 flex items-center gap-2 shadow-2xl">
        <a
          href={directWhatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-sm transition-all active:scale-95"
        >
          <MessageSquare className="h-4 w-4" />
          WhatsApp RM
        </a>

        <button
          type="button"
          onClick={() => handleEnquire()}
          className="flex-1 flex items-center justify-center gap-1.5 h-11 rounded-xl bg-primary hover:bg-primary/90 text-white font-bold text-xs shadow-md shadow-primary/20 transition-all active:scale-95"
        >
          <MessageSquareQuote className="h-4 w-4" />
          Get Quote
        </button>

        <button
          type="button"
          onClick={handleViewBrochure}
          className="flex items-center justify-center h-11 w-11 rounded-xl border border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100 transition-all active:scale-95"
          title="Brochure PDF"
        >
          <FileText className="h-4 w-4 text-primary" />
        </button>
      </div>
    </div>
  );
}
