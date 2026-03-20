import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/use-page-meta";
import { useLocalBusinessSchema } from "@/components/structured-data";
import { motion } from "framer-motion";
import {
  Car,
  Plane,
  Users,
  Ship,
  Star,
  ArrowRight,
  Shield,
  Clock,
  Award,
  Quote,
  ChevronDown,
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import bmwFleetImg from "@assets/generated_images/bmw-7series-fleet.png";
import mercedesImg from "@assets/mercedes-benz-e250_1773074645042.jpg";
import luxurySedanNightImg from "@assets/generated_images/luxury-sedan-night.png";
import vwMultivanImg from "@assets/VW-multivan.jpg_1773074645048.webp";
import heroBannerImg from "@assets/generated_images/hero-banner.png";
import serviceWeddingImg from "@assets/generated_images/service-wedding.png";
import serviceAirportImg from "@assets/generated_images/service-airport.png";
import serviceCorporateImg from "@assets/generated_images/service-corporate.png";
import serviceCruiseImg from "@assets/generated_images/service-cruise.png";

const services = [
  {
    icon: Car,
    title: "Wedding Limousines",
    description: "Make your special day unforgettable with our luxurious wedding fleet. Elegance and style from start to finish.",
    image: serviceWeddingImg,
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless airport shuttle services to Sydney Domestic and International terminals. Reliable and punctual.",
    image: serviceAirportImg,
  },
  {
    icon: Users,
    title: "Corporate Travel",
    description: "Impress clients and colleagues with our premium corporate transport. Professional chauffeurs at your service.",
    image: serviceCorporateImg,
  },
  {
    icon: Ship,
    title: "Cruise Transfers",
    description: "Door-to-port luxury transport for all major cruise terminals. Start your voyage in comfort and style.",
    image: serviceCruiseImg,
  },
];

const stats = [
  { value: "20+", label: "Years of Excellence" },
  { value: "5,000+", label: "Happy Clients" },
  { value: "24/7", label: "Availability" },
  { value: "100%", label: "Safety Record" },
];

const testimonials = [
  {
    name: "Amanda",
    location: "Hunter Valley",
    text: "Just like to thank you and your drivers. Your friendly approach and professionalism is highly regarded and I will be recommending your company to my friends and family.",
    initials: "AM",
  },
  {
    name: "Mel",
    location: "Central Coast",
    text: "Just wanted to thank you for the limo hire on the weekend. Made the girls day even better. Thank you!",
    initials: "ML",
  },
  {
    name: "David",
    location: "Sydney",
    text: "Outstanding service from booking to drop-off. The vehicle was immaculate and our chauffeur was incredibly professional. Will definitely use again.",
    initials: "DW",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  usePageMeta({
    title: "Prestige Limousines | Luxury Limo Hire Central Coast NSW",
    description: "Central Coast's premier limousine and hire car service. Wedding limos, airport transfers, corporate travel, cruise ship transfers. Servicing Gosford, Terrigal, Wyong, Newcastle & Sydney. Over 20 years of luxury transport excellence.",
    keywords: "chauffeur service central coast, luxury car hire central coast nsw, private driver central coast, wedding car hire gosford, airport transfer central coast, corporate car hire central coast, luxury transport terrigal wyong, prestige limousines central coast",
    canonical: "https://centralcoastprestigelimousines.com.au/",
  });
  useLocalBusinessSchema();

  return (
    <div className="min-h-screen">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center justify-center" data-testid="section-hero">
        <div className="absolute inset-0">
          <img
            src={heroBannerImg}
            alt="Luxury limousine Central Coast"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay-center absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.p
              variants={fadeUp}
              className="text-primary font-medium tracking-[0.25em] uppercase text-xs sm:text-sm mb-6"
            >
              Premium Chauffeur Service — Central Coast NSW
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold italic text-white leading-tight mb-8"
            >
              Experience the<br />
              <span className="gold-text">Art of Travel</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-white/75 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
            >
              Professional chauffeurs, luxury vehicles, and unmatched service on the Central Coast, NSW. Arrive in style, comfort, and elegance.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/book">
                <Button
                  size="lg"
                  data-testid="button-hero-book"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold tracking-[0.08em] uppercase text-sm px-8 h-12"
                >
                  Book a Ride
                </Button>
              </Link>
              <Link href="/fleet">
                <Button
                  size="lg"
                  variant="outline"
                  data-testid="button-hero-fleet"
                  className="border-white/40 text-white hover:bg-white/10 hover:border-white/60 tracking-[0.08em] uppercase text-sm px-8 h-12"
                >
                  View Fleet
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40"
        >
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </motion.div>
      </section>

      {/* ── STATS ── */}
      <section className="py-16 bg-card border-y border-white/[0.06]" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                variants={fadeUp}
                className="text-center"
              >
                <p className="font-serif text-3xl sm:text-4xl font-bold gold-text mb-2" data-testid={`text-stat-${i}`}>{stat.value}</p>
                <p className="text-muted-foreground text-xs uppercase tracking-[0.15em]">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-4">What We Offer</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">
              Luxury for Every Occasion
            </h2>
            <div className="gold-divider max-w-xs mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                variants={fadeUp}
              >
                <Card className="overflow-hidden group border-white/[0.07] hover:border-primary/30 transition-colors duration-300" data-testid={`card-service-${i}`}>
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-9 h-9 rounded-sm gold-gradient flex items-center justify-center shrink-0">
                        <service.icon className="w-4 h-4 text-black" />
                      </div>
                      <h3 className="font-serif text-lg font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    <Link href="/services">
                      <span className="inline-flex items-center gap-1.5 text-primary text-sm font-medium mt-4 hover:gap-2.5 transition-all duration-200 group/link">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="relative py-28" data-testid="section-about-preview">
        <div className="absolute inset-0">
          <img src={luxurySedanNightImg} alt="Luxury chauffeur sedan at night" className="w-full h-full object-cover" />
          <div className="section-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-4">Why Choose Us</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">
                Where Every Journey is Infused with Excellence
              </h2>
              <div className="gold-divider max-w-[120px] mb-8" />
              <p className="text-white/65 leading-relaxed mb-10 text-sm">
                With over two decades of dedication to luxury transport on the Central Coast, we offer an unmatched experience tailored to your needs. From plush weddings to executive corporate transfers, our services are designed to impress at every turn.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {[
                  { icon: Shield, title: "Licensed & Insured", desc: "Fully licensed, comprehensively insured and compliant" },
                  { icon: Clock, title: "Always Punctual", desc: "Real-time flight monitoring and on-time guaranteed" },
                  { icon: Award, title: "Premium Fleet", desc: "Meticulously maintained luxury vehicles" },
                  { icon: Star, title: "Professional Chauffeurs", desc: "Impeccably presented, highly trained drivers" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-sm bg-primary/15 border border-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-white/50 text-xs leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="hidden lg:block"
            >
              <div className="relative">
                <img
                  src={mercedesImg}
                  alt="Mercedes-Benz E250"
                  className="w-full h-[420px] object-cover rounded-sm border border-white/10"
                />
                <div className="absolute -bottom-5 -left-5 bg-black border border-white/[0.08] px-6 py-5 rounded-sm">
                  <p className="font-serif text-3xl font-bold gold-text">20+</p>
                  <p className="text-muted-foreground text-xs uppercase tracking-[0.12em] mt-1">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── FLEET PREVIEW ── */}
      <section className="py-24" data-testid="section-fleet-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-4">Our Vehicles</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-fleet-title">
              Uncompromising Luxury
            </h2>
            <div className="gold-divider max-w-xs mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Mercedes-Benz E250", desc: "Luxury Sedan", image: mercedesImg, capacity: "1–3 passengers" },
              { name: "BMW 7 Series", desc: "Executive Saloon", image: bmwFleetImg, capacity: "1–3 passengers" },
              { name: "VW Multivan", desc: "Premium People Mover", image: vwMultivanImg, capacity: "Up to 7 passengers" },
            ].map((vehicle, i) => (
              <motion.div
                key={vehicle.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                variants={fadeUp}
              >
                <Card className="overflow-hidden group border-white/[0.07] hover:border-primary/30 transition-colors duration-300" data-testid={`card-fleet-${i}`}>
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg font-semibold text-foreground mb-1">{vehicle.name}</h3>
                    <p className="text-primary text-xs font-medium uppercase tracking-[0.1em] mb-1">{vehicle.desc}</p>
                    <p className="text-muted-foreground text-xs">{vehicle.capacity}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/fleet">
              <Button
                variant="outline"
                data-testid="button-view-fleet"
                className="border-white/20 text-white hover:bg-white/5 hover:border-white/40 tracking-[0.08em] uppercase text-xs"
              >
                View Full Fleet
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-card border-y border-white/[0.06]" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-4">Testimonials</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-testimonials-title">
              What Our Clients Say
            </h2>
            <div className="gold-divider max-w-xs mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                variants={fadeUp}
              >
                <Card className="p-6 h-full flex flex-col border-white/[0.07] hover:border-primary/20 transition-colors duration-300" data-testid={`card-testimonial-${i}`}>
                  <Quote className="w-7 h-7 text-primary/40 mb-5" />
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-5 border-t border-white/[0.06]">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm border border-primary/20">{t.initials}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground text-sm">{t.name}</p>
                      <p className="text-muted-foreground text-xs">{t.location}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5">
                      {[...Array(5)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 text-primary fill-primary" />
                      ))}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-28 relative" data-testid="section-cta">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(43_85%_50%_/_0.06)_0%,_transparent_70%)]" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary font-medium tracking-[0.25em] uppercase text-xs mb-4">Begin Your Journey</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Ready to Arrive in Style?
            </h2>
            <div className="gold-divider max-w-[100px] mx-auto mb-8" />
            <p className="text-muted-foreground max-w-md mx-auto mb-10 text-sm leading-relaxed">
              Whether you need a quick transfer or a full-day hire, our team is ready to assist. Book online or call us for a personalised quote.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/book">
                <Button
                  size="lg"
                  data-testid="button-cta-book"
                  className="bg-primary hover:bg-primary/90 text-black font-semibold tracking-[0.08em] uppercase text-sm px-8 h-12"
                >
                  Book Now
                </Button>
              </Link>
              <a href="tel:0417024271">
                <Button
                  size="lg"
                  variant="outline"
                  data-testid="button-cta-call"
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
