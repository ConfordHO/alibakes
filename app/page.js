'use client'

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Gallery from './components/Gallery';
import MenuPricing from './components/MenuPricing';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function AliBakesWebsite() {
  return (
    <div className="font-serif">
      <Header />
      <main>
        <Hero />
        <About />
        <Gallery />
        <MenuPricing />
        <Services />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}