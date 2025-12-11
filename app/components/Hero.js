'use client';

import React, {useState, useEffect } from 'react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { title: "Authentic Zambian Baking", subtitle: "Bringing tradition to your celebrations", cta: "Order Your Cake Today" },
    { title: "Professional Catering Services", subtitle: "Making every event unforgettable", cta: "Plan Your Event" },
    { title: "From Our Kitchen to Your Table", subtitle: "Fresh, delicious, authentic", cta: "See Our Menu" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-700">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
        }}></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 text-6xl animate-bounce opacity-20">🎂</div>
      <div className="absolute bottom-20 right-10 text-6xl animate-bounce opacity-20" style={{animationDelay: '1s'}}>🍞</div>
      <div className="absolute top-40 right-20 text-5xl animate-bounce opacity-20" style={{animationDelay: '2s'}}>🥘</div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-8 animate-fade-in">
          <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border-2 border-white/30 mb-6">
            <span className="text-white font-medium">📍 Based in Lusaka | Serving All Zambia</span>
          </div>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
          {slides[currentSlide].title}
        </h1>
        
        <p className="text-xl md:text-2xl text-orange-100 mb-8 animate-slide-up" style={{animationDelay: '0.2s'}}>
          {slides[currentSlide].subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <a 
            href="https://wa.me/260978876201" 
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2"
          >
            <span>💬</span>
            <span>{slides[currentSlide].cta}</span>
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
          
          <a 
            href="#menu"
            className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 border-2 border-white/30 hover:border-white/60"
          >
            View Menu & Prices
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mt-12">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'w-8 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">500+</div>
            <div className="text-orange-200">Events Catered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">1000+</div>
            <div className="text-orange-200">Cakes Baked</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-white mb-2">100%</div>
            <div className="text-orange-200">Satisfaction</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="text-white text-sm mb-2">Scroll to explore</div>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full mx-auto flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;