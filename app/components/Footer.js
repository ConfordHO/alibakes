'use client'

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-amber-950 to-orange-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-4xl">🍰</span>
              <span className="text-2xl font-bold">Ali Bakes</span>
            </div>
            <p className="text-orange-200">
              Bringing authentic Zambian flavors to your celebrations since day one.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-orange-200 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#menu" className="text-orange-200 hover:text-white transition-colors">Menu & Pricing</a></li>
              <li><a href="#services" className="text-orange-200 hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="text-orange-200 hover:text-white transition-colors">Gallery</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-orange-200">
              <li>📱 +260 978 876 201</li>
              <li>📧 alicechitumba259@gmail.com</li>
              <li>📍 Chilenje, Lusaka</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Follow Us</h4>
            <div className="flex gap-3">
              <a href="https://facebook.com/alibakes" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110">📘</a>
              <a href="https://instagram.com/alibakes" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-pink-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110">📷</a>
              <a href="https://wa.me/260978876201" target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-green-600 w-12 h-12 rounded-full flex items-center justify-center text-2xl transition-all duration-300 transform hover:scale-110">💬</a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-800 pt-8 text-center">
          <p className="text-orange-200">
            &copy; 2024 Ali Bakes. Bringing Zambian flavors to your celebrations.
          </p>
          <p className="text-orange-300 mt-2">
            Lusaka, Zambia | Serving all of Zambia with Love ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;