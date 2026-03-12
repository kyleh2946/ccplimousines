import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import footerLogo from "@assets/footer-image1.png_1772902642051.webp";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="mb-6">
              <img src={footerLogo} alt="Prestige Limousines" className="h-20 w-auto" />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Over 20 years of luxury transport excellence on the Central Coast. Your journey, our passion.
            </p>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-foreground" data-testid="text-footer-links">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Services", href: "/services" },
                { label: "Our Fleet", href: "/fleet" },
                { label: "Contact Us", href: "/contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors" data-testid={`link-footer-${link.label.toLowerCase().replace(/\s/g, '-')}`}>
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-foreground">Services</h3>
            <ul className="space-y-3">
              {["Wedding Limousines", "Airport Transfers", "Corporate Travel", "Cruise Ship Transfers", "Special Events"].map((service) => (
                <li key={service}>
                  <Link href={`/services#${service.toLowerCase().replace(/\s+/g, "-")}`}>
                    <span className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {service}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold mb-6 text-foreground">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <div>
                  <a href="tel:0417024271" className="text-sm text-muted-foreground hover:text-primary transition-colors">0417 024 271</a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <a href="mailto:info@prestigelimos.com.au" className="text-sm text-muted-foreground hover:text-primary transition-colors">info@prestigelimos.com.au</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Central Coast, NSW, Australia</span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-muted-foreground">Available 24/7</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground" data-testid="text-copyright">
            &copy; {new Date().getFullYear()} Prestige Limousines. All Rights Reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Luxury Limousine Hire — Servicing Gosford, Terrigal, Wyong, Sydney, Hunter Valley, Newcastle &amp; the Central Coast NSW
          </p>
        </div>
      </div>
    </footer>
  );
}
