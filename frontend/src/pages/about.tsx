import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Clock, Award, Star, Heart, Users, ThumbsUp } from "lucide-react";
import { usePageMeta } from "@/hooks/use-page-meta";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const values = [
  { icon: Shield, title: "Safety & Reliability", desc: "All vehicles are licensed, insured and regularly serviced to the highest standards. Your safety is our absolute priority." },
  { icon: Clock, title: "Punctuality", desc: "We pride ourselves on always being on time. Our chauffeurs arrive early so you never have to worry about being late." },
  { icon: Heart, title: "Personal Service", desc: "Every booking is treated with care and attention. We tailor our service to your specific needs and preferences." },
  { icon: ThumbsUp, title: "Excellence", desc: "From the condition of our vehicles to the professionalism of our chauffeurs, we maintain the highest standards in everything we do." },
];

export default function About() {
  usePageMeta({
    title: "About Us | Prestige Limousines Central Coast NSW",
    description: "Over 20 years providing luxury limousine hire on the Central Coast NSW. Learn about our professional chauffeur team, our commitment to punctuality, safety and premium service across Gosford, Terrigal, Wyong and beyond.",
    keywords: "about prestige limousines, limousine company central coast, professional chauffeur central coast nsw, luxury car hire gosford, limo service history central coast",
    canonical: "https://prestigelimousines.com.au/about",
  });
  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24" data-testid="section-about-hero">
        <div className="absolute inset-0">
          <img src="/images/chauffeur.jpg" alt="Professional chauffeur" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">About Us</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6" data-testid="text-about-title">
              Two Decades of <span className="gold-text">Luxury</span> Transport
            </h1>
            <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
              Prestige Limousines have been on the Central Coast of NSW for over 20 years, providing premium limousine and hire car services.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-about-story">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Story</p>
              <h2 className="font-serif text-3xl font-bold text-foreground mb-6">Built on Trust, Driven by Excellence</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded over two decades ago on the beautiful Central Coast of New South Wales, Prestige Limousines began with a simple vision: to provide the highest quality chauffeur-driven transport at affordable prices.
                </p>
                <p>
                  What started as a small operation has grown into the region's most trusted luxury transport service, catering to both the corporate and public sectors. We service the entire Central Coast region, travelling to any destination of your choice.
                </p>
                <p>
                  Our fleet has expanded to accommodate every taste and occasion, from elegant sedans to luxurious stretch limousines. International and interstate visitors, as well as local residents of the Central Coast, Hunter Valley and Newcastle region, trust us for their most important journeys.
                </p>
                <p>
                  At Prestige Limousines, we don't just offer a ride &mdash; we deliver a bespoke travel experience. Tell us your preferences, and watch us tailor everything from the route to the in-car atmosphere.
                </p>
              </div>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
              <div className="relative">
                <img src="/images/fleet-sedan.jpg" alt="Premium sedan" className="rounded-md w-full h-[400px] object-cover" />
                <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-md border border-border/50">
                  <p className="font-serif text-3xl font-bold gold-text">5,000+</p>
                  <p className="text-muted-foreground text-sm">Satisfied Clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-card border-y border-border/30" data-testid="section-about-values">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Values</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground">What Sets Us Apart</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                variants={fadeUp}
              >
                <Card className="p-6 h-full" data-testid={`card-value-${i}`}>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-md gold-gradient flex items-center justify-center shrink-0">
                      <value.icon className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" data-testid="section-about-promise">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="text-center mb-16">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Our Promise</p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-foreground mb-6">Committed to Your Satisfaction</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Our professional chauffeurs are the backbone of our services. Experienced and courteous, they ensure your safety and comfort, making every journey as pleasant as it is memorable.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Award, value: "20+", label: "Years Experience" },
              { icon: Users, value: "5,000+", label: "Happy Clients" },
              { icon: Star, value: "4.9", label: "Average Rating" },
              { icon: Clock, value: "24/7", label: "Availability" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                variants={fadeUp}
                className="text-center"
              >
                <div className="w-14 h-14 rounded-md bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="font-serif text-2xl font-bold gold-text mb-1">{stat.value}</p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/book">
              <Button data-testid="button-about-cta">
                Book Now
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
