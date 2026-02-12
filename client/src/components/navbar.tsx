import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Fleet", href: "/fleet" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          <Link href="/" data-testid="link-home-logo">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-md gold-gradient flex items-center justify-center">
                <span className="text-background font-serif font-bold text-lg">P</span>
              </div>
              <div className="hidden sm:block">
                <p className="font-serif text-lg font-semibold tracking-wide text-foreground leading-tight">Prestige</p>
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary font-medium">Limousines</p>
              </div>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className={`px-4 py-2 text-sm font-medium tracking-wide uppercase transition-colors duration-200 ${
                    location === link.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:0417024271"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-primary"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span>0417 024 271</span>
            </a>
            <Link href="/contact">
              <Button data-testid="button-book-now" className="hidden sm:inline-flex">
                Book Now
              </Button>
            </Link>
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-t border-border/50 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                  <span
                    className={`block px-4 py-3 text-sm font-medium tracking-wide uppercase rounded-md transition-colors ${
                      location === link.href
                        ? "text-primary bg-primary/10"
                        : "text-muted-foreground"
                    }`}
                    data-testid={`link-mobile-${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
              <a
                href="tel:0417024271"
                className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-primary"
              >
                <Phone className="w-4 h-4" />
                0417 024 271
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
