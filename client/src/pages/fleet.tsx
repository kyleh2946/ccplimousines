import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import { ArrowRight, Users, Snowflake, Wifi, Music, Shield, Star } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";
import mercedesImg from "@assets/mercedes-benz-e250_1773074645042.jpg";
import stretchLimoImg from "@assets/stretch-limo-ba-falcon.jpg_1773074645046.webp";
import vwMultivanImg from "@assets/VW-multivan.jpg_1773074645048.webp";
import chryslerImg from "@assets/Chrysler-10-Seat_1773074645049.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const vehicles = [
  {
    name: "Mercedes-Benz E250",
    category: "Luxury Sedan",
    image: mercedesImg,
    capacity: "1-3 Passengers",
    description: "The ultimate in executive comfort. Our Mercedes-Benz E250 features a premium leather interior, climate control, and a whisper-quiet ride perfect for corporate transfers and airport runs.",
    features: ["Leather Interior", "Climate Control", "USB Charging", "Tinted Windows"],
    ideal: ["Corporate Travel", "Airport Transfers", "Date Night"],
  },
  {
    name: "BA Falcon Stretch Limousine",
    category: "Stretch Limousine",
    image: stretchLimoImg,
    capacity: "6-10 Passengers",
    description: "Make a grand entrance with our stunning white stretch limousine. Featuring a spacious interior with ambient lighting, premium sound system, and a bar area — perfect for turning every journey into an unforgettable event.",
    features: ["Bar Area", "Ambient Lighting", "Premium Sound", "Privacy Partition"],
    ideal: ["Weddings", "School Formals", "Parties", "Special Events"],
  },
  {
    name: "Chrysler 300C 10-Seat Stretch",
    category: "Stretch Limousine",
    image: chryslerImg,
    capacity: "Up to 10 Passengers",
    description: "Our showpiece Chrysler 300C stretch limousine combines bold styling with opulent comfort. With seating for up to 10 passengers, chrome detailing, and a fully appointed interior, this is the ultimate vehicle for making a statement.",
    features: ["Chrome Detailing", "Ambient Lighting", "Premium Sound", "Bar Area"],
    ideal: ["Weddings", "Formals", "Parties", "VIP Events"],
  },
  {
    name: "Volkswagen Multivan",
    category: "Premium People Mover",
    image: vwMultivanImg,
    capacity: "Up to 7 Passengers",
    description: "Versatile luxury for group travel. Our Volkswagen Multivan offers spacious seating, a refined ride, and generous luggage room — ideal for airport transfers, corporate groups, or wine tours through the Hunter Valley.",
    features: ["Spacious Cabin", "Climate Control", "Generous Luggage Space", "Sliding Doors"],
    ideal: ["Airport Transfers", "Group Travel", "Hunter Valley Tours", "Cruise Transfers"],
  },
];

export default function Fleet() {
  usePageMeta("Our Fleet | Prestige Limousines", "Browse our diverse fleet of luxury sedans, stretch limousines, and premium SUVs available for hire.");
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24" data-testid="section-fleet-hero">
        <div className="absolute inset-0">
          <img src={chryslerImg} alt="Luxury fleet" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Fleet</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6" data-testid="text-fleet-page-title">
              A Vehicle for Every <span className="gold-text">Occasion</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
              Our diverse fleet caters to any event, ensuring your transportation needs are always met with style and sophistication.
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
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative rounded-md overflow-hidden">
                      <img
                        src={vehicle.image}
                        alt={vehicle.name}
                        className="w-full h-[350px] object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm text-foreground">
                          {vehicle.capacity}
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <Badge variant="outline" className="mb-3 text-primary border-primary/30">{vehicle.category}</Badge>
                    <h2 className="font-serif text-3xl font-bold text-foreground mb-4" data-testid={`text-vehicle-name-${i}`}>{vehicle.name}</h2>
                    <p className="text-muted-foreground leading-relaxed mb-6">{vehicle.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Features</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.features.map((feature) => (
                          <Badge key={feature} variant="secondary" className="text-xs">{feature}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">Ideal For</h4>
                      <div className="flex flex-wrap gap-2">
                        {vehicle.ideal.map((use) => (
                          <Badge key={use} variant="outline" className="text-xs text-primary border-primary/30">{use}</Badge>
                        ))}
                      </div>
                    </div>

                    <Link href="/contact">
                      <Button data-testid={`button-enquire-vehicle-${i}`}>
                        Enquire About This Vehicle
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

      <section className="py-24 bg-card border-y border-border/30" data-testid="section-fleet-standards">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Standards</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">Every Vehicle, Every Time</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">All vehicles in our fleet are maintained to exacting standards.</p>
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
                <Card className="p-6 text-center h-full" data-testid={`card-standard-${i}`}>
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{standard.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{standard.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-fleet-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">Ready to Choose Your Ride?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Contact us to discuss your requirements and we'll help you select the perfect vehicle for your occasion.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/contact">
                <Button data-testid="button-fleet-contact">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:0417024271">
                <Button variant="outline">
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
