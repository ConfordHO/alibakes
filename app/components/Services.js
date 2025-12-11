'use client'

import React, { useState, useEffect } from 'react';

const Services = () => {
  const services = [
    { icon: '🎂', title: 'Custom Baking', desc: 'Birthday cakes, wedding cakes, and special occasion bakes tailored to your preferences', color: 'from-pink-400 to-pink-600' },
    { icon: '🍽️', title: 'Full Catering', desc: 'Complete catering services for events of all sizes across Zambia', color: 'from-orange-400 to-orange-600' },
    { icon: '🎉', title: 'Kids Events', desc: "Fun and delicious treats for children's parties and celebrations", color: 'from-yellow-400 to-yellow-600' },
    { icon: '💼', title: 'Corporate Events', desc: 'Professional catering for business meetings, conferences, and company events', color: 'from-blue-400 to-blue-600' },
    { icon: '💒', title: 'Weddings', desc: 'Make your special day unforgettable with our wedding catering and cakes', color: 'from-purple-400 to-purple-600' },
    { icon: '🥘', title: 'Traditional Cuisine', desc: 'Authentic Zambian dishes prepared with love and traditional methods', color: 'from-red-400 to-red-600' },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-4">
          Our Services
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Comprehensive catering and baking solutions for every occasion
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2"
            >
              <div className={`bg-gradient-to-r ${service.color} p-6 text-center`}>
                <div className="text-6xl mb-2">{service.icon}</div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3 text-center">{service.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;