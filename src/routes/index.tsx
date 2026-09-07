import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/components/catalogue/HeroSection";
import { BrochurePreviewModal } from "@/components/catalogue/BrochurePreviewModal";
import { EnquiryModal } from "@/components/catalogue/EnquiryModal";

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

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-primary/20 selection:text-primary flex flex-col">
      {/* Responsive Digital Brand Catalogue (Mobile-First + Desktop Optimized) */}
      <HeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
        onEnquire={handleEnquire}
        onViewBrochure={handleViewBrochure}
      />

      {/* Interactive 4-Page Merged Brochure Viewer & Downloader */}
      <BrochurePreviewModal
        isOpen={brochureModalOpen}
        onClose={() => setBrochureModalOpen(false)}
        onEnquire={() => handleEnquire()}
      />

      {/* Quote Request & Enquiry Modal */}
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
    </div>
  );
}
