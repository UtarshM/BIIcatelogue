import { FileText, PhoneCall, Building2, Globe, Heart, ShieldCheck, Mail, ArrowUp } from "lucide-react";
import { CATEGORIES, COMPANY_DETAILS } from "@/data/brochureData";
import { Button } from "@/components/ui/button";

export function SiteFooter({
  onEnquire,
  onViewBrochure,
}: {
  onEnquire: () => void;
  onViewBrochure: () => void;
}) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 text-xs">
      {/* Top Banner */}
      <div className="border-b border-slate-800 bg-slate-900/60 py-6 sm:py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <img
              src="/builditindia-logo-white.png"
              alt="BuilditIndia Logo"
              className="h-8 sm:h-9 w-auto object-contain"
            />
            <div className="border-t sm:border-t-0 sm:border-l border-slate-700 pt-2 sm:pt-0 sm:pl-3">
              <span className="text-slate-200 font-bold block">
                {COMPANY_DETAILS.subTagline}
              </span>
              <span className="text-slate-400 text-[11px]">
                {COMPANY_DETAILS.parentCompany}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-center">
            <Button
              variant="outline"
              size="sm"
              onClick={onViewBrochure}
              className="border-slate-700 text-slate-200 hover:bg-slate-800 font-bold text-xs"
            >
              <FileText className="h-3.5 w-3.5 mr-1.5 text-primary" />
              Brochure PDF
            </Button>
            <Button
              size="sm"
              onClick={onEnquire}
              className="bg-primary hover:bg-primary/90 text-white font-bold text-xs shadow-md shadow-primary/20"
            >
              Request Quote
            </Button>
          </div>
        </div>
      </div>

      {/* Main Categories & Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Categories Col 1 */}
          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Structural & Civil
            </h4>
            <ul className="space-y-2">
              <li><a href="#categories" className="hover:text-white transition">TMT Bars (8 Brands)</a></li>
              <li><a href="#categories" className="hover:text-white transition">AAC Blocks (4 Brands)</a></li>
              <li><a href="#categories" className="hover:text-white transition">Cement (4 Brands)</a></li>
              <li><a href="#categories" className="hover:text-white transition">AAC Wall Panel</a></li>
            </ul>
          </div>

          {/* Categories Col 2 */}
          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Waterproofing & Pipes
            </h4>
            <ul className="space-y-2">
              <li><a href="#categories" className="hover:text-white transition">Adhesives & Waterproofing</a></li>
              <li><a href="#categories" className="hover:text-white transition">Plumbing & Pipes</a></li>
              <li><a href="#categories" className="hover:text-white transition">Flush Tanks</a></li>
              <li><a href="#categories" className="hover:text-white transition">Drainage Solutions</a></li>
            </ul>
          </div>

          {/* Categories Col 3 */}
          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Finishes & Interiors
            </h4>
            <ul className="space-y-2">
              <li><a href="#categories" className="hover:text-white transition">Bath Fittings & Sanitaryware</a></li>
              <li><a href="#categories" className="hover:text-white transition">Tiles & Porcelain Slabs</a></li>
              <li><a href="#categories" className="hover:text-white transition">Kitchen Sinks</a></li>
              <li><a href="#categories" className="hover:text-white transition">Paints & Wall Putti</a></li>
            </ul>
          </div>

          {/* Categories Col 4 */}
          <div>
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              HVAC & Wellness
            </h4>
            <ul className="space-y-2">
              <li><a href="#categories" className="hover:text-white transition">Radiant Cooling (Giacomini)</a></li>
              <li><a href="#categories" className="hover:text-white transition">Wellness Spas (Acquaviva)</a></li>
              <li><a href="#brands" className="hover:text-white transition">Browse All 50 Brands</a></li>
              <li><a href="#contact" className="hover:text-white transition">Relationship Desk</a></li>
            </ul>
          </div>

          {/* Contact Col 5 */}
          <div className="col-span-2 sm:col-span-1">
            <h4 className="font-bold text-slate-200 uppercase tracking-wider text-[11px] mb-3">
              Relationship Desk
            </h4>
            <div className="space-y-2 text-slate-400">
              <div className="text-white font-bold">{COMPANY_DETAILS.relationshipManager.name}</div>
              <div>{COMPANY_DETAILS.relationshipManager.designation}</div>
              <div className="text-slate-500 pt-1">
                {COMPANY_DETAILS.parentCompany}
              </div>
              <button
                type="button"
                onClick={onEnquire}
                className="text-orange-400 font-bold hover:underline block pt-1"
              >
                Send Wholesale RFQ →
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Strip */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} BuilditIndia ({COMPANY_DETAILS.parentCompany}). All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a href="https://builditindia.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-300 transition">
              {COMPANY_DETAILS.website}
            </a>
            <span>•</span>
            <button type="button" onClick={scrollToTop} className="flex items-center gap-1 hover:text-white transition cursor-pointer">
              Back to Top <ArrowUp className="h-3 w-3" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
