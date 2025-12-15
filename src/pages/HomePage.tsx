import React from 'react';
import { Hero } from '../components/Hero';
import { PageTransition } from '../components/PageTransition';
export function HomePage() {
  return <PageTransition>
      <Hero />
    </PageTransition>;
}