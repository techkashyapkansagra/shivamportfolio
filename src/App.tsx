import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ServiceCard } from "./components/ServiceCard";
import { ProcessStep } from "./components/ProcessStep";
import { ResultsMetric } from "./components/ResultsMetric";
import { ContactSection } from "./components/ContactSection";
import {
  Building2,
  Megaphone,
  Video,
  Rocket,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
export function App() {
  const services = [
    {
      title: "Real Estate Marketing",
      icon: Building2,
      description: [
        "Property Lead Generation Campaigns",
        "Meta Ads for Residential & Commercial",
        "Location-Based & Investor Targeting",
        "Site Visit & Inquiry Campaigns",
        "Retargeting & Follow-Up Funnels",
      ],
    },
    {
      title: "Performance Advertising",
      icon: Megaphone,
      description: [
        "Meta Ads (Facebook & Instagram)",
        "Google Search & Display Ads",
        "Traffic, Conversion & Lead Campaigns",
        "Retargeting & Lookalike Audiences",
      ],
    },
    {
      title: "Content Creation",
      icon: Video,
      description: [
        "Social Media Post Design",
        "Reels & Short-Form Video Strategy",
        "Ad Creatives (Static, Carousel, Video)",
        "Brand Storytelling Content",
      ],
    },
    {
      title: "Digital Growth",
      icon: Rocket,
      description: [
        "Social Media Management",
        "SEO (Local & Organic)",
        "E-commerce Marketing",
        "Website & Landing Page Development",
      ],
    },
  ];
  const steps = [
    {
      title: "Understand Business & Property",
      description:
        "We dive deep into your goals, location, audience, and budget to build a solid foundation.",
    },
    {
      title: "Market & Audience Research",
      description:
        "Detailed buyer and investor profiling to ensure we target exactly who matters.",
    },
    {
      title: "Content & Creative Planning",
      description:
        "Designing high-converting ads, reels, and branding content that captures attention.",
    },
    {
      title: "Campaign Launch",
      description:
        "Strategic platform-wise execution across Meta, Google, and other channels.",
    },
    {
      title: "Optimization & Scaling",
      description:
        "Continuous monitoring to lower CPL and increase lead quality for maximum ROI.",
    },
  ];
  const benefits = [
    "Real Estate Marketing Specialists",
    "High-Quality Lead Focus",
    "Strong Creative & Content Team",
    "Transparent Reporting",
    "Performance-Driven Strategy",
  ];
  const industries = [
    "Real Estate Developers & Brokers 🏢",
    "Commercial Properties 🏬",
    "Local Businesses 🏪",
    "E-commerce Brands 🛒",
    "Service-Based Businesses 💼",
  ];
  return (
    <div className="min-h-screen bg-background text-text selection:bg-primary/30">
      <Navigation />

      {/* Hero Section */}
      <section id="home" className="min-h-screen">
        <Hero />
      </section>

      {/* About & Services Section */}
      <section id="whatwedo" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-20 text-center">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-4xl md:text-5xl font-bold font-display mb-6">
              About <span className="text-primary">Adspark</span>
            </motion.h2>
            <motion.p
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.1,
              }}
              className="max-w-3xl mx-auto text-lg text-text-muted leading-relaxed">
              Adspark Digital Marketing Agency is a growth-focused agency
              specializing in Real Estate Marketing, Performance Ads, and
              Content Creation. We help brands attract the right audience,
              generate qualified leads, and convert them into paying customers.
            </motion.p>
          </div>

          <div className="mb-12">
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              viewport={{
                once: true,
              }}
              className="flex items-center justify-center mb-12">
              <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-secondary">
                Our Core Services
              </span>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <ServiceCard
                  key={service.title}
                  {...service}
                  delay={index * 0.1}
                />
              ))}
            </div>
          </div>

          <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden relative mt-20">
            <img
              src="/Screenshot_2025-12-14_162521.png"
              alt="Adspark Services Showcase"
              className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="howwework" className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.h2
                initial={{
                  opacity: 0,
                  x: -20,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{
                  once: true,
                }}
                className="text-4xl font-bold font-display mb-12">
                How We <span className="text-secondary">Work</span>
              </motion.h2>

              <div className="space-y-8">
                {steps.map((step, index) => (
                  <ProcessStep
                    key={index}
                    number={index + 1}
                    title={step.title}
                    description={step.description}
                    isLast={index === steps.length - 1}
                  />
                ))}
              </div>
            </div>

            <div className="lg:sticky lg:top-32">
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: 0.3,
                }}
                className="p-8 rounded-3xl bg-gradient-to-br from-surface to-background border border-white/10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

                <h3 className="text-3xl font-bold font-display mb-8 relative z-10">
                  Why Choose <span className="text-primary">Adspark?</span>
                </h3>

                <div className="space-y-6 relative z-10">
                  {benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{
                        opacity: 0,
                        x: 20,
                      }}
                      whileInView={{
                        opacity: 1,
                        x: 0,
                      }}
                      viewport={{
                        once: true,
                      }}
                      transition={{
                        delay: 0.4 + index * 0.1,
                      }}
                      className="flex items-center space-x-4">
                      <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-lg font-medium">{benefit}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-10 pt-8 border-t border-white/10">
                  <p className="text-text-muted text-sm italic">
                    "Our approach blends strategy, creativity, and data to
                    deliver consistent and scalable results."
                  </p>
                  <div className="mt-4 flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-bold text-white">
                      SP
                    </div>
                    <div>
                      <p className="font-bold text-white">Shivam Patel</p>
                      <p className="text-xs text-text-muted">
                        Founder, Adspark
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section id="results" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-4xl md:text-5xl font-bold font-display mb-4">
              Results That <span className="text-accent">Matter</span>
            </motion.h2>
            <p className="text-text-muted max-w-2xl mx-auto">
              We don't just promise growth; we deliver measurable impact through
              data-backed strategies.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
            <ResultsMetric value={500} suffix="+" label="Leads Generated" />
            <ResultsMetric
              value={40}
              prefix="-"
              suffix="%"
              label="Cost Per Lead"
            />
            <ResultsMetric value={3} suffix="x" label="Inquiry to Visit" />
            <ResultsMetric value={100} suffix="%" label="Client Satisfaction" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              className="rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src="/WhatsApp_Image_2025-12-13_at_6.25.36_PM_(1).jpg"
                alt="Campaign Results"
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: 0.2,
              }}
              className="rounded-2xl overflow-hidden border border-white/10 group">
              <img
                src="/WhatsApp_Image_2025-12-13_at_6.25.36_PM.jpg"
                alt="Ad Manager Dashboard"
                className="w-full h-auto hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          </div>

          <div className="mb-20">
            <h3 className="text-2xl font-bold font-display text-center mb-8">
              Industries We Serve
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {industries.map((industry, index) => (
                <motion.span
                  key={index}
                  initial={{
                    opacity: 0,
                    y: 10,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: index * 0.1,
                  }}
                  className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm md:text-base hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-default">
                  {industry}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 bg-surface/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{
                opacity: 0,
                y: 20,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              className="text-4xl md:text-5xl font-bold font-display mb-4">
              Ready to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Ignite
              </span>{" "}
              Your Growth?
            </motion.h2>
            <p className="text-text-muted max-w-2xl mx-auto text-lg">
              Get in touch with us today for a free consultation and let's
              discuss how we can help your business thrive.
            </p>
          </div>

          <ContactSection />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-text-muted text-sm border-t border-white/5">
        <p>
          © {new Date().getFullYear()} Adspark Digital Marketing Agency. All
          rights reserved.
        </p>
        <p className="mt-2 text-xs">Real Estate • Ads • Content • Growth</p>
      </footer>
    </div>
  );
}
