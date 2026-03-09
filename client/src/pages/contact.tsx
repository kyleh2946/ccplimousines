import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactInquirySchema, type InsertContactInquiry } from "@shared/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { usePageMeta } from "@/hooks/use-page-meta";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    lines: ["0417 024 271", "4388 6065"],
    href: "tel:0417024271",
  },
  {
    icon: Mail,
    title: "Email",
    lines: ["info@prestigelimos.com.au"],
    href: "mailto:info@prestigelimos.com.au",
  },
  {
    icon: MapPin,
    title: "Service Area",
    lines: ["Central Coast, Sydney,", "Hunter Valley, Newcastle"],
  },
  {
    icon: Clock,
    title: "Hours",
    lines: ["Available 24 hours,", "7 days a week"],
  },
];

export default function Contact() {
  usePageMeta({
    title: "Contact Us | Prestige Limousines Central Coast NSW",
    description: "Contact Prestige Limousines for luxury limousine hire on the Central Coast NSW. Call 0417 024 271 for a free quote. Wedding limos, airport transfers, corporate travel. Servicing Gosford, Terrigal, Wyong, Newcastle & Sydney.",
    keywords: "contact prestige limousines, limo hire quote central coast, limousine booking central coast nsw, call limousine service gosford, luxury transport enquiry central coast",
    canonical: "https://prestigelimousines.com.au/contact",
  });
  const { toast } = useToast();
  const form = useForm<InsertContactInquiry>({
    resolver: zodResolver(insertContactInquirySchema),
    defaultValues: { fullName: "", email: "", phone: "", message: "" },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactInquiry) => {
      await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({ title: "Message Sent!", description: "Thank you for your enquiry. We'll be in touch shortly." });
      form.reset();
    },
    onError: () => {
      toast({ title: "Error", description: "Something went wrong. Please try again or call us directly.", variant: "destructive" });
    },
  });

  return (
    <div className="min-h-screen pt-20">
      <section className="relative py-24" data-testid="section-contact-hero">
        <div className="absolute inset-0">
          <img src="/images/chauffeur.jpg" alt="Contact us" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial="hidden" animate="visible" variants={fadeUp}>
            <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Contact Us</p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6" data-testid="text-contact-page-title">
              Let's Plan Your <span className="gold-text">Journey</span>
            </h1>
            <p className="text-white/70 max-w-2xl text-lg leading-relaxed">
              Ready to book your next luxury ride? Get in touch and we'll make your transport experience exceptional.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-24" data-testid="section-contact-form">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-6">
              <div>
                <p className="text-primary font-medium tracking-[0.2em] uppercase text-sm mb-3">Get In Touch</p>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-4">Contact Information</h2>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  For great chauffeur driven cars on demand, call Prestige Limousines. We accommodate from one person to group bookings.
                </p>
              </div>

              {contactInfo.map((info, i) => (
                <motion.div
                  key={info.title}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  variants={fadeUp}
                >
                  <Card className="p-4" data-testid={`card-contact-info-${i}`}>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-md gold-gradient flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-background" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground text-sm mb-1">{info.title}</h3>
                        {info.lines.map((line) => (
                          <p key={line} className="text-muted-foreground text-sm">
                            {info.href ? (
                              <a href={info.href} className="hover:text-primary transition-colors">{line}</a>
                            ) : line}
                          </p>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card className="p-8" data-testid="card-contact-form">
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">Send Us a Message</h2>
                <p className="text-muted-foreground text-sm mb-8">Fill out the form below and we'll get back to you as soon as possible.</p>

                <Form {...form}>
                  <form onSubmit={form.handleSubmit((data) => mutation.mutate(data))} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Your full name" {...field} data-testid="input-contact-fullname" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input placeholder="your@email.com" type="email" {...field} data-testid="input-contact-email" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Phone Number</FormLabel>
                          <FormControl>
                            <Input placeholder="Your phone number" type="tel" {...field} data-testid="input-contact-phone" />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Message</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Tell us about your event, preferred vehicle, date and any special requirements..."
                              rows={5}
                              {...field}
                              data-testid="input-contact-message"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={mutation.isPending} data-testid="button-contact-submit">
                      <Send className="w-4 h-4 mr-2" />
                      {mutation.isPending ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </Form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
