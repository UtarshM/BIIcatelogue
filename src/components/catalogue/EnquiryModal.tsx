import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  MessageSquareQuote,
  PhoneCall,
  Send,
  Building2,
  MapPin,
  Package,
  User,
  Phone,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { CATEGORIES, BRANDS, COMPANY_DETAILS } from "@/data/brochureData";
import { toast } from "sonner";

export function EnquiryModal({
  isOpen,
  onClose,
  initialCategoryId,
  initialBrandId,
}: {
  isOpen: boolean;
  onClose: () => void;
  initialCategoryId?: string | undefined;
  initialBrandId?: string | undefined;
}) {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [projectName, setProjectName] = useState("");
  const [location, setLocation] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryId || "");
  const [selectedBrand, setSelectedBrand] = useState(initialBrandId || "");
  const [quantityRemarks, setQuantityRemarks] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialCategoryId) setSelectedCategory(initialCategoryId);
    if (initialBrandId) setSelectedBrand(initialBrandId);
  }, [initialCategoryId, initialBrandId, isOpen]);

  // Brands for selected category
  const availableBrands = selectedCategory
    ? BRANDS.filter((b) => b.categoryId === selectedCategory)
    : BRANDS;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim() || !mobile.trim()) {
      toast.error("Please enter your name and mobile number.");
      return;
    }

    setIsSubmitting(true);

    const catObj = CATEGORIES.find((c) => c.id === selectedCategory);
    const brandObj = BRANDS.find((b) => b.id === selectedBrand);

    // Format Structured WhatsApp Inquiry Message
    const textLines = [
      `*New Material Inquiry - BuilditIndia Hub*`,
      `━━━━━━━━━━━━━━━━━━━━`,
      `👤 *Client Name:* ${name.trim()}`,
      `📱 *Mobile:* ${mobile.trim()}`,
      projectName ? `🏢 *Project Name:* ${projectName.trim()}` : null,
      location ? `📍 *Location/City:* ${location.trim()}` : null,
      catObj ? `📦 *Category:* ${catObj.name}` : null,
      brandObj ? `🏷️ *Preferred Brand:* ${brandObj.name}` : null,
      quantityRemarks ? `📝 *Requirements/Qty:* ${quantityRemarks.trim()}` : null,
      `━━━━━━━━━━━━━━━━━━━━`,
      `_Sent via BuilditIndia Digital Brand Hub_`,
    ].filter(Boolean);

    const whatsappUrl = `https://wa.me/${COMPANY_DETAILS.relationshipManager.whatsappNumber}?text=${encodeURIComponent(
      textLines.join("\n")
    )}`;

    toast.success("Opening WhatsApp with Relationship Manager Ajjay D. Chouhan...", {
      description: "Your enquiry details have been prepared.",
    });

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
      setIsSubmitting(false);
      onClose();
    }, 400);
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-xl p-0 overflow-hidden bg-white rounded-2xl sm:rounded-3xl border border-slate-200 shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#07134b] via-primary to-blue-700 p-6 text-white">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-blue-100 text-xs font-bold uppercase tracking-wider mb-2 backdrop-blur-xs">
            <Sparkles className="h-3.5 w-3.5 text-orange-400" />
            Fast Track Quotation
          </div>
          <DialogTitle className="text-2xl font-extrabold text-white">
            Request Project Material Quote
          </DialogTitle>
          <DialogDescription className="text-xs sm:text-sm text-blue-100/90 mt-1">
            Connect directly with Relationship Manager <b>{COMPANY_DETAILS.relationshipManager.name}</b> for institutional wholesale pricing.
          </DialogDescription>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4 max-h-[75vh] overflow-y-auto">
          {/* Name & Phone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Your Full Name <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <User className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Rahul Sharma"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Mobile Number <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Phone className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="tel"
                  required
                  value={mobile}
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="e.g. 98765 43210"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          {/* Project & City */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Project / Firm Name
              </label>
              <div className="relative">
                <Building2 className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={projectName}
                  onChange={(e) => setProjectName(e.target.value)}
                  placeholder="e.g. Skyline Heights Tower"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Site Location / City
              </label>
              <div className="relative">
                <MapPin className="absolute left-3.5 top-3 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="e.g. Ahmedabad / Surat / Mumbai"
                  className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 pl-10 pr-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>
          </div>

          {/* Category & Brand Selection */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Select Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => {
                  setSelectedCategory(e.target.value);
                  setSelectedBrand("");
                }}
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium"
              >
                <option value="">-- All Categories --</option>
                {CATEGORIES.map((cat) => (
                  <option key={cat.id} value={cat.id}>
                    {cat.name} ({cat.brandCount} brands)
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Preferred Associate Brand
              </label>
              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="h-11 w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium"
              >
                <option value="">-- Any / Multiple Brands --</option>
                {availableBrands.map((brand) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name} ({brand.categoryName})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quantity / Specifications */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Material Requirements / BOQ / Quantity
            </label>
            <textarea
              rows={3}
              value={quantityRemarks}
              onChange={(e) => setQuantityRemarks(e.target.value)}
              placeholder="e.g. Need 40 Tons of 500D TMT bars delivered by next week, or 1000 bags of OPC cement."
              className="w-full rounded-xl border border-slate-200 bg-slate-50/50 p-3 text-sm text-slate-900 focus:border-primary focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary/20 font-medium"
            />
          </div>

          {/* Relationship Manager Contact Strip */}
          <div className="rounded-xl bg-slate-50 border border-slate-200 p-3.5 flex items-center justify-between gap-3 text-xs">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold">
                RM
              </div>
              <div>
                <div className="font-bold text-slate-900">
                  {COMPANY_DETAILS.relationshipManager.name}
                </div>
                <div className="text-slate-500">
                  Direct Desk: {COMPANY_DETAILS.relationshipManager.phoneInternational}
                </div>
              </div>
            </div>

            <a
              href={`tel:${COMPANY_DETAILS.relationshipManager.phone}`}
              className="inline-flex items-center gap-1 font-bold text-primary hover:underline"
            >
              <PhoneCall className="h-3.5 w-3.5" />
              Call Now
            </a>
          </div>

          {/* Submit Actions */}
          <div className="pt-2 flex items-center gap-3">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-lg shadow-emerald-600/25 gap-2 text-sm"
            >
              <Send className="h-4 w-4" />
              {isSubmitting ? "Generating..." : "Send Direct via WhatsApp"}
            </Button>

            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="h-12 px-5 rounded-xl border-slate-200 font-semibold text-slate-700"
            >
              Cancel
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
