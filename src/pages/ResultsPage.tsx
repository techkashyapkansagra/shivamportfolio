import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { ResultsMetric } from '../components/ResultsMetric';
import { ContactSection } from '../components/ContactSection';
import { motion } from 'framer-motion';
export function ResultsPage() {
  const industries = ['Real Estate Developers & Brokers 🏢', 'Commercial Properties 🏬', 'Local Businesses 🏪', 'E-commerce Brands 🛒', 'Service-Based Businesses 💼'];
  return <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-4xl md:text-5xl font-bold font-display mb-4">
            Results That <span className="text-accent">Matter</span>
          </motion.h2>
          <p className="text-text-muted max-w-2xl mx-auto">
            We don't just promise growth; we deliver measurable impact through
            data-backed strategies.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-20">
          <ResultsMetric value={500} suffix="+" label="Leads Generated" />
          <ResultsMetric value={40} prefix="-" suffix="%" label="Cost Per Lead" />
          <ResultsMetric value={3} suffix="x" label="Inquiry to Visit" />
          <ResultsMetric value={100} suffix="%" label="Client Satisfaction" />
        </div>

        {/* Screenshots Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} className="rounded-2xl overflow-hidden border border-white/10 group">
            <img src="/WhatsApp_Image_2025-12-13_at_6.25.36_PM_(1).jpg" alt="Campaign Results" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
          </motion.div>
          <motion.div initial={{
          opacity: 0,
          scale: 0.9
        }} whileInView={{
          opacity: 1,
          scale: 1
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }} className="rounded-2xl overflow-hidden border border-white/10 group">
            <img src="/WhatsApp_Image_2025-12-13_at_6.25.36_PM.jpg" alt="Ad Manager Dashboard" className="w-full h-auto hover:scale-105 transition-transform duration-500" />
          </motion.div>
        </div>

        {/* Industries */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold font-display text-center mb-8">
            Industries We Serve
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {industries.map((industry, index) => <motion.span key={index} initial={{
            opacity: 0,
            y: 10
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }} className="px-6 py-3 rounded-full bg-white/5 border border-white/10 text-sm md:text-base hover:bg-white/10 hover:border-primary/30 transition-all duration-300 cursor-default">
                {industry}
              </motion.span>)}
          </div>
        </div>

        {/* Contact Section */}
        <div className="relative rounded-3xl bg-gradient-to-b from-surface to-background border border-white/10 p-8 md:p-12 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4">
              Ready to Ignite Your Growth?
            </h2>
            <p className="text-text-muted">
              Get in touch with us today for a free consultation.
            </p>
          </div>

          <ContactSection />
        </div>
      </div>
    </PageTransition>;
}