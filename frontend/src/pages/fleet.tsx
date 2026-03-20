import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Users, Snowflake, Wifi, Music, Shield, Star } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import mercedesImg from "@assets/generated_images/mercedes-e250-fleet.png";
import bmwFleetImg from "@assets/generated_images/bmw-7series-fleet.png";
import luxurySedanNightImg from "@assets/generated_images/luxury-sedan-night.png";
import vwMultivanImg from "@assets/VW-multivan.jpg_1773074645048.webp";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const vehicles = [
  {
    name: "Mercedes-Benz E250",
    category: "Luxury Sedan",
    image: mercedesImg,
    capacity: "1–3 Passengers",
    description: "The ultimate in executive comfort. Our Mercedes-Benz E250 features a premium leather interior, dual-zone climate control, and a whisper-quiet ride — perfect for corporate transfers, airport runs, and special occasions.",
    features: ["Leather Interior", "Climate Control", "USB Charging", "Tinted Windows"],
    ideal: ["Corporate Travel", "Airport Transfers", "Date Night", "Special Events"],
  },
  {
    name: "BMW 7 Series",
    category: "Executive Saloon",
    image: bmwFleetImg,
    capacity: "1–3 Passengers",
    description: "Our flagship BMW 7 Series delivers an unrivalled blend of performance and luxury. With its commanding presence, massaging rear seats, and cutting-edge technology, every journey becomes a first-class experience.",
    features: ["Massage Rear Seats", "Ambient Lighting", "Panoramic Roof", "Premium Sound"],
    ideal: ["VIP Transfers", "Corporate Travel", "Airport Runs", "Special Occasions"],
  },
  {
    name: "Volkswagen Multivan",
    category: "Premium People Mover",
    image: vwMultivanImg,
    capacity: "Up to 7 Passengers",
    description: "Versatile luxury for group travel. Our Volkswagen Multivan offers spacious seating, a refined ride, and generous luggage room — ideal for airport transfers, corporate groups, or Hunter Valley wine tours.",
    features: ["Spacious Cabin", "Climate Control", "Generous Luggage Space", "Sliding Doors"],
    ideal: ["Airport Transfers", "Group Travel", "Hunter Valley Tours", "Cruise Transfers"],
  },
];

export default function Fleet() {
  usePageMeta({
    title: "Our Fleet | Luxury Chauffeur Vehicles Central Coast NSW",
    description: "Browse our premium chauffeur fleet on the Central Coast NSW. Mercedes-Benz E250, BMW 7 Series executive saloon, and VW Multivan people mover. Perfect for corporate travel, airport transfers, weddings and special events.",
    keywords: "luxury chauffeur car central coast, mercedes benz hire central coast, bmw 7 series chauffeur nsw, vw multivan hire gosford, private driver central coast, executive car hire terrigal, premium transport central coast nsw",
    canonical: "https://centralcoastprestigelimousines.com.au/fleet",
  });
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24" data-testid="section-fleet-hero">
        <div className="absolute inset-0">
          <img src={luxurySedanNightImg} alt="Luxury chauffeur vehicle at night" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-4">Our Fleet</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6" data-testid="text-fleet-page-title">
              A Vehicle for Every <span className="gold-text">Occasion</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
              Our premium fleet of luxury vehicles ensures every journey is delivered with the highest standard of comfort, style and professionalism.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-fleet-vehicles">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {vehicles.map((vehicle, i) => (
              <motion.div
                key={vehicle.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                variants={fadeUp}
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-sm overflow-hidden border border-white/[0.07]">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-[350px] object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-black/70 backdrop-blur-sm text-white border-white/10">
                          {vehicle.capacity}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <Badge variant="outline" className="mb-3 text-primary border-primary/30 text-xs tracking-[0.12em] uppercase">{vehicle.category}</Badge>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-4" data-testid={`text-vehicle-name-${i}`}>{vehicle.name}</h2>
                    <div className="gold-divider max-w-[80px] mb-6" />
                    <p className="text-muted-foreground leading-relaxed mb-6 text-sm">{vehicle.description}</p>

                    <div className="mb-6">
                      <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-[0.15em]">Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">{feature}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xs font-semibold text-foreground mb-3 uppercase tracking-[0.15em]">Ideal For</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.ideal.map((use) => (
                          <Badge key={use} variant="outline" className="text-xs text-primary border-primary/30">{use}</Badge>
                        ))}
                      </div>
                    </div>

                    <Link href="/book">
                      <Button
                        data-testid={`button-enquire-vehicle-${i}`}
                        className="bg-primary hover:bg-primary/90 text-black font-semibold tracking-[0.08em] uppercase text-xs"
                      >
                        Book This Vehicle
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-white/[0.06]" data-testid="section-fleet-standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-4">Our Standards</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Every Vehicle, Every Time</h2>
            <div className="gold-divider max-w-xs mx-auto mt-6" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-6 text-sm">All vehicles in our fleet are maintained to exacting standards.</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: Shield, title: "Fully Licensed & Insured", desc: "Every vehicle meets all regulatory requirements and carries comprehensive insurance coverage." },
              { icon: Star, title: "Immaculately Presented", desc: "Our vehicles are professionally detailed before every booking, inside and out." },
              { icon: Snowflake, title: "Climate Controlled", desc: "Dual-zone climate control ensures your perfect comfort regardless of the season." },
              { icon: Wifi, title: "Modern Amenities", desc: "USB charging, premium audio, and tinted windows for your comfort and privacy." },
              { icon: Music, title: "Premium Sound", desc: "Enjoy your favourite music through our high-quality audio systems on every journey." },
              { icon: Users, title: "Flexible Capacity", desc: "From intimate transfers to group bookings, we have the right vehicle for your needs." },
            ].map((standard, i) => (
              <motion.div
                key={standard.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                variants={fadeUp}
              >
                <Card className="p-6 text-center h-full border-white/[0.07] hover:border-primary/20 transition-colors duration-300" data-testid={`card-standard-${i}`}>
                  <div className="w-11 h-11 rounded-sm bg-primary/10 border border-primary/15 flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2 text-sm">{standard.title}</h3>
                  <p className="text-muted-foreground text-xs leading-relaxed">{standard.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 relative" data-testid="section-fleet-cta">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_85%_50%_/_0.06)_0%,_transparent_70%)]" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-4">Ready to Ride?</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Choose Your Vehicle</h2>
            <div className="gold-divider max-w-[100px] mx-auto mb-8" />
            <p className="text-muted-foreground max-w-xl mx-auto mb-10 text-sm leading-relaxed">
              Contact us to discuss your requirements and we'll help you select the perfect vehicle for your occasion.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/book">
                <Button
                  data-testid="button-fleet-contact"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold tracking-[0.08em] uppercase text-sm px-8 h-12"
                >
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:0417024271">
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 tracking-[0.08em] uppercase text-sm px-8 h-12"
                >
                  Call 0417 024 271
                </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
