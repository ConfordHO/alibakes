'use client';

import React, { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-gradient-to-r from-amber-900 to-orange-700 shadow-lg' : 'bg-gradient-to-r from-amber-900/95 to-orange-700/95'}`}>
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <span className="text-4xl">🍰</span>
            <div>
              <div className="text-2xl font-bold text-white tracking-wide">Ali Bakes</div>
              <div className="text-xs text-orange-200">Authentic Zambian Flavors</div>
            </div>
          </div>
          
          <button 
            className="lg:hidden text-white text-3xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
          
          <ul className={`${isOpen ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row absolute lg:relative top-20 lg:top-0 left-0 right-0 bg-gradient-to-r from-amber-900 to-orange-700 lg:bg-transparent p-4 lg:p-0 space-y-2 lg:space-y-0 lg:space-x-6 shadow-lg lg:shadow-none`}>
            {['Home', 'About', 'Gallery', 'Menu', 'Services', 'Testimonials', 'Contact'].map(item => (
              <li key={item}>
                <a 
                  href={`#${item.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="block text-white hover:text-orange-300 transition-colors font-medium px-2 py-1"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;