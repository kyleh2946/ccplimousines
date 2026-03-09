import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Car, Plane, Users, Ship, PartyPopper, GraduationCap, Sparkles } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const services = [
  {
    icon: Car,
    title: "Wedding Limousines",
    description: "Your wedding day deserves nothing but the best. Our wedding limousine service ensures you arrive in style, turning heads and creating unforgettable memories. Choose from our elegant fleet of white and black luxury vehicles, each adorned to complement your special day.",
    features: ["Complimentary champagne", "Red carpet service", "Bridal party transport", "Flexible hire periods"],
    image: "/images/service-wedding.jpg",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Skip the stress of airport parking and navigating traffic. Our reliable airport transfer service ensures you get to Sydney Domestic or International Airport comfortably and on time. We monitor flight arrivals for pick-ups.",
    features: ["Flight monitoring", "Meet and greet option", "Luggage assistance", "Door-to-door service"],
    image: "/images/service-airport.jpg",
  },
  {
    icon: Users,
    title: "Corporate Travel",
    description: "Make a lasting impression with our corporate transport solutions. Whether hosting clients, attending conferences, or managing executive travel, our professional chauffeurs provide discreet, punctual service.",
    features: ["Account billing available", "Wi-Fi equipped vehicles", "Confidential travel", "Executive sedan fleet"],
    image: "/images/service-corporate.jpg",
  },
  {
    icon: Ship,
    title: "Cruise Ship Transfers",
    description: "Begin your voyage the right way with our cruise terminal transfer service. We cover all major terminals, ensuring your journey from door to port is as smooth and luxurious as the cruise itself.",
    features: ["Major terminal coverage", "Early morning pickups", "Group bookings welcome", "Luggage handling"],
    image: "/images/service-cruise.jpg",
  },
  {
    icon: PartyPopper,
    title: "Special Events",
    description: "From concert nights to milestone birthdays, our special event transport adds an extra layer of luxury to your celebration. Arrive in a stunning limousine and make every event a grand occasion.",
    features: ["Stretch limo available", "Custom routes", "Multi-stop trips", "Late night service"],
    image: "/images/fleet-stretch.jpg",
  },
  {
    icon: GraduationCap,
    title: "School Formals",
    description: "Give your teenager the school formal experience they'll never forget. Our formal packages include stylish stretch limousines that accommodate groups of friends for an exciting and safe night.",
    features: ["Group packages", "Photo opportunity stops", "Parent peace of mind", "Safe, licensed vehicles"],
    image: "/images/fleet-suv.jpg",
  },
];

export default function Services() {
  usePageMeta("Our Services | Prestige Limousines", "Wedding limos, airport transfers, corporate travel, cruise transfers and more on the Central Coast.");
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24" data-testid="section-services-hero">
        <div className="absolute inset-0">
          <img src="/images/service-corporate.jpg" alt="Corporate service" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Services</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6" data-testid="text-services-page-title">
              Premium Transport <span className="gold-text">Solutions</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
              From seamless airport transfers to luxurious wedding limousines, we cover all your transportation needs with expertise and a personal touch.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-services-list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                variants={fadeUp}
              >
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${i % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                  <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                    <div className="relative h-72 lg:h-80 rounded-md overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                    </div>
                  </div>
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-md gold-gradient flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-background" />
                      </div>
                      <h2 className="font-serif text-2xl font-bold text-foreground" data-testid={`text-service-title-${i}`}>{service.title}</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed mb-6">{service.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4 text-primary shrink-0" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Link href="/book">
                      <Button variant="outline" data-testid={`button-service-enquire-${i}`}>
                        Book Now
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

      <section className="py-24 bg-card border-y border-border/30" data-testid="section-services-pricing">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Transparent Pricing</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">Clear, Competitive Pricing</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              You can trust our straightforward pricing policy. With no hidden charges, our prices reflect our commitment to providing value without compromising on quality. Contact us for a personalised quote.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/book">
                <Button data-testid="button-services-quote">
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
