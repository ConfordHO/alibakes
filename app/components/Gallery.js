'use client'

import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  
  const galleryItems = [
    { image: '/images/1.jpg', title: 'Custom Celebration Cakes', desc: 'Beautifully crafted for your special moments' },
    { image: '/images/2.jpg', title: 'Traditional Zambian Bakes', desc: 'Authentic recipes passed down generations' },
    { image: '/images/3.jpg', title: 'Wedding & Event Catering', desc: 'Making your big day unforgettable' },
    { image: '/images/4.jpg', title: 'Fresh Daily Breads', desc: 'Baked fresh every morning' },
    { image: '/images/5.jpg', title: 'Corporate Catering', desc: 'Professional service for business events' },
    { image: '/images/6.jpg', title: 'Party Treats & Snacks', desc: 'Perfect for celebrations of all sizes' },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-4">
          Our Delicious Creations
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Every dish crafted with love, tradition, and the finest ingredients
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <div 
              key={index} 
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-2"
              onClick={() => setSelectedImage(item)}
            >
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-orange-200">{item.desc}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                View
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-4xl w-full">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full rounded-lg"
              />
              <div className="text-white text-center mt-4">
                <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-orange-200">{selectedImage.desc}</p>
              </div>
            </div>
          </div>
        )}

        <div className="text-center mt-12">
          <a 
            href="https://wa.me/260978876201" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>💬</span>
            <span>Order Your Custom Creation</span>
          </a>
        </div>
      </div>
    </section>
  );
};


export default Gallery;