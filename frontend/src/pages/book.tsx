import { useEffect } from "react";
import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/use-page-meta";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export default function Book() {
  usePageMeta({
    title: "Book Online | Limousine Hire Central Coast NSW | Prestige Limousines",
    description: "Book your luxury limousine online. Easy online reservations for wedding limos, airport transfers, corporate travel and more on the Central Coast NSW. Instant availability and confirmation.",
    keywords: "book limousine online central coast, limo reservation nsw, online booking limousine hire gosford, book wedding limo central coast, reserve airport transfer central coast",
    canonical: "https://prestigelimousines.com.au/book",
  });

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://book.mylimobiz.com/v4/widgets/widget-loader.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen pt-20">
      <section className="py-16" data-testid="section-booking">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp} className="text-center mb-12">
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Reservations</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4" data-testid="text-booking-title">
              Book <span className="gold-text">Online</span>
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Select your vehicle, choose your date and time, and complete your reservation in just a few steps.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-card rounded-md border border-border/50 p-6 sm:p-8 min-h-[500px]"
            data-testid="container-booking-widget"
          >
            <a
              href="https://book.mylimobiz.com/v4/dcetrans"
              data-ores-widget="website"
              data-ores-alias="dcetrans"
              data-testid="link-booking-widget"
            >
              Online Reservations
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
