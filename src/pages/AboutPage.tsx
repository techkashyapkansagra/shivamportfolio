import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { ServiceCard } from '../components/ServiceCard';
import { Building2, Megaphone, Video, Rocket } from 'lucide-react';
import { motion } from 'framer-motion';
export function AboutPage() {
  const services = [{
    title: 'Real Estate Marketing',
    icon: Building2,
    description: ['Property Lead Generation Campaigns', 'Meta Ads for Residential & Commercial', 'Location-Based & Investor Targeting', 'Site Visit & Inquiry Campaigns', 'Retargeting & Follow-Up Funnels']
  }, {
    title: 'Performance Advertising',
    icon: Megaphone,
    description: ['Meta Ads (Facebook & Instagram)', 'Google Search & Display Ads', 'Traffic, Conversion & Lead Campaigns', 'Retargeting & Lookalike Audiences']
  }, {
    title: 'Content Creation',
    icon: Video,
    description: ['Social Media Post Design', 'Reels & Short-Form Video Strategy', 'Ad Creatives (Static, Carousel, Video)', 'Brand Storytelling Content']
  }, {
    title: 'Digital Growth',
    icon: Rocket,
    description: ['Social Media Management', 'SEO (Local & Organic)', 'E-commerce Marketing', 'Website & Landing Page Development']
  }];
  return <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* About Section */}
        <div className="mb-20 text-center">
          <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} className="text-4xl md:text-5xl font-bold font-display mb-6">
            About <span className="text-primary">Adspark</span>
          </motion.h2>
          <motion.p initial={{
          opacity: 0,
          y: 20
        }} animate={{
          opacity: 1,
          y: 0
        }} transition={{
          delay: 0.1
        }} className="max-w-3xl mx-auto text-lg text-text-muted leading-relaxed">
            Adspark Digital Marketing Agency is a growth-focused agency
            specializing in Real Estate Marketing, Performance Ads, and Content
            Creation. We help brands attract the right audience, generate
            qualified leads, and convert them into paying customers. Our
            approach blends strategy, creativity, and data to deliver consistent
            and scalable results.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="mb-12">
          <motion.div initial={{
          opacity: 0
        }} animate={{
          opacity: 1
        }} className="flex items-center justify-center mb-12">
            <span className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-sm font-medium text-secondary">
              Our Core Services
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((service, index) => <ServiceCard key={service.title} {...service} delay={index * 0.1} />)}
          </div>
        </div>

        {/* Visual Element */}
        <div className="w-full h-64 md:h-96 rounded-3xl overflow-hidden relative mt-20">
          <img src="/Screenshot_2025-12-14_162521.png" alt="Adspark Services Showcase" className="w-full h-full object-cover opacity-60 hover:opacity-80 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
      </div>
    </PageTransition>;
}