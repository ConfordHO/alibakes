'use client'

import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-16">
          Your Trusted Zambian Baking & Catering Partner
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4 mb-4">
                <span className="text-4xl">🎂</span>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Our Story</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Welcome to Ali Bakes, your premier destination for authentic Zambian baking and catering services. We specialize in bringing the rich, vibrant flavors of Zambian cuisine to your celebrations, whether it's a children's birthday party, a corporate event, or your dream wedding.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="flex items-start space-x-4 mb-4">
                <span className="text-4xl">❤️</span>
                <div>
                  <h3 className="text-2xl font-bold text-amber-900 mb-2">Our Promise</h3>
                  <p className="text-gray-700 leading-relaxed">
                    With passion and dedication, we craft every dish with traditional recipes and the finest ingredients, ensuring your guests experience the true taste of Zambia. From traditional baked goods to full catering services, we make your events unforgettable.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-500 to-amber-600 p-6 rounded-2xl text-white">
              <div className="flex items-center space-x-3 mb-2">
                <span className="text-3xl">📍</span>
                <h3 className="text-xl font-bold">Based in Chilenje, Lusaka</h3>
              </div>
              <p className="text-orange-100">Serving all of Zambia for your catering and baking needs</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img src="/images/1.jpg" alt="Ali Bakes creation" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            <img src="/images/2.jpg" alt="Ali Bakes creation" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300 mt-8" />
            <img src="/images/3.jpg" alt="Ali Bakes creation" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300" />
            <img src="/images/4.jpg" alt="Ali Bakes creation" className="rounded-2xl shadow-xl w-full h-64 object-cover hover:scale-105 transition-transform duration-300 mt-8" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;