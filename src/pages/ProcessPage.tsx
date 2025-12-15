import React from 'react';
import { PageTransition } from '../components/PageTransition';
import { ProcessStep } from '../components/ProcessStep';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
export function ProcessPage() {
  const steps = [{
    title: 'Understand Business & Property',
    description: 'We dive deep into your goals, location, audience, and budget to build a solid foundation.'
  }, {
    title: 'Market & Audience Research',
    description: 'Detailed buyer and investor profiling to ensure we target exactly who matters.'
  }, {
    title: 'Content & Creative Planning',
    description: 'Designing high-converting ads, reels, and branding content that captures attention.'
  }, {
    title: 'Campaign Launch',
    description: 'Strategic platform-wise execution across Meta, Google, and other channels.'
  }, {
    title: 'Optimization & Scaling',
    description: 'Continuous monitoring to lower CPL and increase lead quality for maximum ROI.'
  }];
  const benefits = ['Real Estate Marketing Specialists', 'High-Quality Lead Focus', 'Strong Creative & Content Team', 'Transparent Reporting', 'Performance-Driven Strategy'];
  return <PageTransition>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: Process */}
          <div>
            <motion.h2 initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} className="text-4xl font-bold font-display mb-12">
              How We <span className="text-secondary">Work</span>
            </motion.h2>

            <div className="space-y-8">
              {steps.map((step, index) => <ProcessStep key={index} number={index + 1} title={step.title} description={step.description} isLast={index === steps.length - 1} />)}
            </div>
          </div>

          {/* Right Column: Why Choose Us */}
          <div className="lg:sticky lg:top-32">
            <motion.div initial={{
            opacity: 0,
            scale: 0.95
          }} animate={{
            opacity: 1,
            scale: 1
          }} transition={{
            delay: 0.3
          }} className="p-8 rounded-3xl bg-gradient-to-br from-surface to-background border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[80px]" />

              <h3 className="text-3xl font-bold font-display mb-8 relative z-10">
                Why Choose <span className="text-primary">Adspark?</span>
              </h3>

              <div className="space-y-6 relative z-10">
                {benefits.map((benefit, index) => <motion.div key={index} initial={{
                opacity: 0,
                x: 20
              }} animate={{
                opacity: 1,
                x: 0
              }} transition={{
                delay: 0.4 + index * 0.1
              }} className="flex items-center space-x-4">
                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-lg font-medium">{benefit}</span>
                  </motion.div>)}
              </div>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-text-muted text-sm italic">
                  "Our approach blends strategy, creativity, and data to deliver
                  consistent and scalable results."
                </p>
                <div className="mt-4 flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center font-bold text-white">
                    SP
                  </div>
                  <div>
                    <p className="font-bold text-white">Shivam Patel</p>
                    <p className="text-xs text-text-muted">Founder, Adspark</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>;
}