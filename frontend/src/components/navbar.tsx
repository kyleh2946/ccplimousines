import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";
import headerLogo from "@assets/logo.png_1772902642052.webp";

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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = location === "/";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-black/95 backdrop-blur-md border-b border-white/[0.06]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-20">
          <Link href="/" data-testid="link-home-logo">
            <img src={headerLogo} alt="Prestige Limousines" className="h-14 w-auto" />
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} data-testid={`link-nav-${link.label.toLowerCase()}`}>
                <span
                  className={`px-4 py-2 text-sm font-medium tracking-[0.12em] uppercase transition-colors duration-200 ${
                    location === link.href
                      ? "text-primary"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="tel:0417024271"
              className="hidden md:flex items-center gap-2 text-sm font-medium text-white/70 hover:text-primary transition-colors"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span>0417 024 271</span>
            </a>
            <Link href="/book">
              <Button
                data-testid="button-book-now"
                className="hidden sm:inline-flex bg-primary hover:bg-primary/90 text-black font-semibold tracking-[0.08em] uppercase text-xs px-5"
              >
                Book Now
              </Button>
            </Link>
            <Button
              size="icon"
              variant="ghost"
              className="lg:hidden text-white hover:bg-white/10"
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
            className="lg:hidden bg-black border-t border-white/[0.06] overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setMobileOpen(false)}>
                  <span
                    className={`block px-4 py-3 text-sm font-medium tracking-[0.12em] uppercase rounded-md transition-colors ${
                      location === link.href
                        ? "text-primary"
                        : "text-white/60 hover:text-white"
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
              <div className="pt-2">
                <Link href="/book" onClick={() => setMobileOpen(false)}>
                  <Button className="w-full bg-primary text-black font-semibold tracking-[0.08em] uppercase text-xs">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
