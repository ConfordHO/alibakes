'use client'

import React from 'react';

const MenuPricing = () => {
  const menuCategories = [
    {
      category: 'Custom Cakes',
      icon: '🎂',
      items: [
        { name: 'Small Cake (Serves 10-15)', price: 'K300 - K500' },
        { name: 'Medium Cake (Serves 20-30)', price: 'K600 - K900' },
        { name: 'Large Cake (Serves 40-50)', price: 'K1,000 - K1,500' },
        { name: 'Wedding Cake (3-Tier)', price: 'K2,000 - K4,000+' },
      ]
    },
    {
      category: 'Traditional Baking',
      icon: '🍞',
      items: [
        { name: 'Scones (per dozen)', price: 'K80 - K120' },
        { name: 'Meat Pies (per dozen)', price: 'K150 - K200' },
        { name: 'Samosas (per dozen)', price: 'K100 - K150' },
        { name: 'Vetkoek (per dozen)', price: 'K80 - K120' },
      ]
    },
    {
      category: 'Catering Packages',
      icon: '🍽️',
      items: [
        { name: 'Kids Party (per child)', price: 'K50 - K80' },
        { name: 'Corporate Lunch (per person)', price: 'K100 - K150' },
        { name: 'Wedding Catering (per person)', price: 'K150 - K300' },
        { name: 'Full Buffet (per person)', price: 'K200 - K350' },
      ]
    },
    {
      category: 'Traditional Dishes',
      icon: '🥘',
      items: [
        { name: 'Nshima with Relish (serves 10)', price: 'K300 - K500' },
        { name: 'Grilled Chicken (whole)', price: 'K150 - K200' },
        { name: 'Traditional Salads (large bowl)', price: 'K100 - K150' },
        { name: 'Custom Menu (per person)', price: 'Contact for quote' },
      ]
    },
  ];

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-4">
          Menu & Pricing
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          All prices in Zambian Kwacha (ZMW). Final pricing depends on customization and portion sizes.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {menuCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:-translate-y-2">
              <div className="bg-gradient-to-r from-orange-500 to-amber-600 text-white p-6 text-center">
                <div className="text-5xl mb-2">{category.icon}</div>
                <h3 className="text-xl font-bold">{category.category}</h3>
              </div>
              <div className="p-6 space-y-4">
                {category.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-start gap-2 pb-3 border-b border-gray-100 last:border-0">
                    <span className="text-sm text-gray-700 flex-1">{item.name}</span>
                    <span className="text-orange-600 font-bold text-sm whitespace-nowrap">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-orange-500 to-amber-600 rounded-2xl p-8 text-white text-center shadow-xl">
          <div className="text-5xl mb-4">💡</div>
          <h3 className="text-2xl font-bold mb-4">Need a Custom Quote?</h3>
          <p className="mb-6 text-orange-100 max-w-2xl mx-auto">
            Prices may vary based on ingredients, design complexity, and delivery location. Contact us for a personalized quote tailored to your event!
          </p>
          <a 
            href="https://wa.me/260978876201" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-orange-600 hover:bg-orange-50 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105"
          >
            <span>📱</span>
            <span>Get Your Free Quote Now</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default MenuPricing;