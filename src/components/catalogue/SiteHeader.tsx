import { useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  FileText,
  PhoneCall,
  Menu,
  X,
  MessageSquareQuote,
  Sparkles,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader({
  onEnquire,
  onViewBrochure,
}: {
  onEnquire: (initialCategory?: string, initialBrand?: string) => void;
  onViewBrochure: () => void;
}) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-border/80 bg-white/95 backdrop-blur-md transition-all shadow-xs">
      <div className="mx-auto flex h-18 sm:h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Official Brand Logo - Transparent Background */}
        <Link to="/" className="flex items-center gap-3 group" aria-label="BuilditIndia Home">
          <img
            src="/builditindia-logo.png"
            alt="BuilditIndia - Everything Construction. One Platform."
            className="h-9 sm:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-103"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-600 lg:flex">
          <a
            href="#categories"
            className="transition-colors hover:text-primary relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
          >
            15 Categories
          </a>
          <a
            href="#brands"
            className="transition-colors hover:text-primary relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
          >
            48 Associate Brands
          </a>
          <a
            href="#contact"
            className="transition-colors hover:text-primary relative py-1 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-primary after:transition-all"
          >
            Relationship Desk
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Brochure View Modal CTA */}
          <Button
            variant="outline"
            size="sm"
            onClick={onViewBrochure}
            className="gap-1.5 font-bold border-primary/30 text-primary hover:bg-primary/5 transition-transform active:scale-95"
          >
            <FileText className="h-4 w-4" />
            Official Brochure PDF
          </Button>

          {/* Enquire CTA */}
          <Button
            size="sm"
            onClick={() => onEnquire()}
            className="bg-primary text-primary-foreground font-bold shadow-md shadow-primary/25 hover:bg-primary/90 gap-1.5 transition-all hover:scale-102 active:scale-95 animate-shimmer"
          >
            <MessageSquareQuote className="h-4 w-4" />
            Get Best Quote
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center gap-2 lg:hidden">
          <Button
            size="sm"
            onClick={() => onEnquire()}
            className="font-bold text-xs px-3 sm:hidden bg-primary text-primary-foreground shadow-sm"
          >
            Get Quote
          </Button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 hover:text-slate-900 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="border-b border-border bg-white px-4 pt-3 pb-6 sm:px-6 lg:hidden animate-in slide-in-from-top-4 duration-200 shadow-xl">
          <div className="flex flex-col gap-2.5 text-sm font-semibold">
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3.5 py-2.5 text-slate-800 hover:bg-slate-50 hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>15 Product Categories</span>
              <span className="text-xs bg-slate-100 px-2 py-0.5 rounded-md text-slate-600 font-bold">15</span>
            </a>
            <a
              href="#brands"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3.5 py-2.5 text-slate-800 hover:bg-slate-50 hover:text-primary transition-colors flex items-center justify-between"
            >
              <span>48 Associate Brands</span>
              <span className="text-xs bg-primary/10 px-2 py-0.5 rounded-md text-primary font-bold">48</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="rounded-xl px-3.5 py-2.5 text-slate-800 hover:bg-slate-50 hover:text-primary transition-colors"
            >
              Relationship Manager Desk
            </a>

            <div className="mt-3 pt-3 border-t border-border flex flex-col gap-2.5">
              <Button
                variant="outline"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onViewBrochure();
                }}
                className="w-full justify-center gap-2 font-bold text-primary border-primary/30 h-11"
              >
                <FileText className="h-4 w-4 text-primary" />
                View Official Brochure PDF
              </Button>

              <Button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onEnquire();
                }}
                className="w-full justify-center gap-2 bg-primary text-primary-foreground font-bold h-11 shadow-md shadow-primary/20"
              >
                <MessageSquareQuote className="h-4 w-4" />
                Request Project Quote / Inquiry
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
