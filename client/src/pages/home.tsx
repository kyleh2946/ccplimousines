import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { usePageMeta } from "@/hooks/use-page-meta";
import { motion } from "framer-motion";
import {
  CheckCircle,
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
} from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import chryslerImg from "@assets/Chrysler-10-Seat_1773074645049.jpg";
import mercedesImg from "@assets/mercedes-benz-e250_1773074645042.jpg";
import stretchLimoImg from "@assets/stretch-limo-ba-falcon.jpg_1773074645046.webp";
import vwMultivanImg from "@assets/VW-multivan.jpg_1773074645048.webp";

const features = [
  "Fast, prompt, efficient and always on time",
  "Vehicles for all occasions including stretch limousines",
  "Weddings, formals, events, airport shuttles, cruise terminals",
  "Servicing Sydney, Hunter Valley, Newcastle and the Central Coast",
  "Professional corporate and business services",
];

const services = [
  {
    icon: Car,
    title: "Wedding Limousines",
    description: "Make your special day unforgettable with our luxurious wedding fleet. Elegance and style from start to finish.",
    image: chryslerImg,
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    description: "Seamless airport shuttle services to Sydney Domestic and International terminals. Reliable and punctual.",
    image: mercedesImg,
  },
  {
    icon: Users,
    title: "Corporate Travel",
    description: "Impress clients and colleagues with our premium corporate transport. Professional chauffeurs at your service.",
    image: vwMultivanImg,
  },
  {
    icon: Ship,
    title: "Cruise Transfers",
    description: "Door-to-port luxury transport for all major cruise terminals. Start your voyage in comfort and style.",
    image: stretchLimoImg,
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
  usePageMeta("Prestige Limousines | Luxury Limo Hire Central Coast", "Central Coast's premier limousine and hire car service. Weddings, corporate transfers, airport shuttles and more.");

  return (
    <div className="min-h-screen">
      <section className="relative min-h-[90vh] flex items-center" data-testid="section-hero">
        <div className="absolute inset-0">
          <img
            src={chryslerImg}
            alt="Chrysler 300C Stretch Limousine"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
            className="max-w-2xl"
          >
            <motion.p variants={fadeUp} className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-4">
              Leaders in Personal Transport
            </motion.p>
            <motion.h1 variants={fadeUp} className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
              Luxury{" "}
              <span className="gold-text">Limousine</span>{" "}
              Hire
            </motion.h1>

            <motion.ul variants={fadeUp} className="space-y-3 mb-10">
              {features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-white/80 text-sm">{feature}</span>
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4">
              <Link href="/book">
                <Button size="lg" data-testid="button-hero-book">
                  Book Your Ride
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:0417024271">
                <Button size="lg" variant="outline" data-testid="button-hero-call" className="bg-white/5 backdrop-blur-sm border-white/20 text-white">
                  Call 0417 024 271
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-card border-y border-border/30" data-testid="section-stats">
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
                <p className="text-muted-foreground text-sm uppercase tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="text-center mb-16"
          >
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">What We Offer</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-services-title">Our Premium Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              From seamless airport transfers to luxurious wedding limousines, we cover all your transportation needs with a personal touch.
            </p>
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
                <Card className="overflow-visible group hover-elevate" data-testid={`card-service-${i}`}>
                  <div className="relative h-56 overflow-hidden rounded-t-md">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md gold-gradient flex items-center justify-center">
                        <service.icon className="w-5 h-5 text-background" />
                      </div>
                      <h3 className="font-serif text-xl font-semibold text-white">{service.title}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
                    <Link href="/services">
                      <span className="inline-flex items-center gap-1 text-primary text-sm font-medium mt-4 hover:gap-2 transition-all">
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

      <section className="relative py-24" data-testid="section-about-preview">
        <div className="absolute inset-0">
          <img src={stretchLimoImg} alt="BA Falcon Stretch Limousine" className="w-full h-full object-cover" />
          <div className="section-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Why Choose Us</p>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-6">The Prestige Difference</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                With over two decades of dedication to providing affordable limo hire on the Central Coast, we offer you an unmatched experience tailored to your needs. From plush weddings to executive corporate transfers, our services are designed to impress.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  { icon: Shield, title: "Safety First", desc: "Licensed, insured and accredited vehicles" },
                  { icon: Clock, title: "Always On Time", desc: "Punctual pickups, every single time" },
                  { icon: Award, title: "Premium Fleet", desc: "Immaculately maintained luxury vehicles" },
                  { icon: Star, title: "5-Star Service", desc: "Professional, courteous chauffeurs" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-sm mb-1">{item.title}</h4>
                      <p className="text-white/60 text-xs">{item.desc}</p>
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
                  className="rounded-md w-full h-[400px] object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-md border border-border/50">
                  <p className="font-serif text-3xl font-bold gold-text">20+</p>
                  <p className="text-muted-foreground text-sm">Years of Excellence</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-fleet-preview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Vehicles</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-4" data-testid="text-fleet-title">A Fleet for Every Occasion</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our diverse selection of premium vehicles, each immaculately maintained and equipped with modern amenities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Mercedes-Benz E250", desc: "Luxury Sedan", image: mercedesImg, capacity: "1-3 passengers" },
              { name: "Chrysler 300C Stretch", desc: "10-Seat Limousine", image: chryslerImg, capacity: "Up to 10 passengers" },
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
                <Card className="overflow-visible group hover-elevate" data-testid={`card-fleet-${i}`}>
                  <div className="relative h-52 overflow-hidden rounded-t-md">
                    <img
                      src={vehicle.image}
                      alt={vehicle.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold text-foreground mb-1">{vehicle.name}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{vehicle.desc}</p>
                    <p className="text-muted-foreground text-xs">{vehicle.capacity}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/fleet">
              <Button variant="outline" data-testid="button-view-fleet">
                View Full Fleet
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border/30" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Testimonials</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground" data-testid="text-testimonials-title">What Our Clients Say</h2>
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
                <Card className="p-6 h-full flex flex-col" data-testid={`card-testimonial-${i}`}>
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 mt-6 pt-4 border-t border-border/50">
                    <Avatar>
                      <AvatarFallback className="bg-primary/10 text-primary font-semibold text-sm">{t.initials}</AvatarFallback>
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

      <section className="py-24" data-testid="section-cta">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Ready to Ride in Style?</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">Book Your Luxury Experience Today</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-10">
              Step into the world of Prestige Limousines and experience transport like never before. We promise not just a service but a memorable part of your special occasions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/book">
                <Button size="lg" data-testid="button-cta-book">
                  Book Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <a href="tel:0417024271">
                <Button size="lg" variant="outline" data-testid="button-cta-call">
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
