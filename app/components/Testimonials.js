'use client'

import React, { useState} from 'react';

import styles from './Testimonials.module.css';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      name: 'Mwamba Phiri',
      event: 'Wedding Reception',
      rating: 5,
      text: 'Ali Bakes made our wedding day absolutely perfect! The traditional Zambian cuisine was authentic and delicious. Our guests are still talking about the amazing nshima and relish. The wedding cake was stunning and tasted even better than it looked!',
      date: 'October 2024',
      image: '👰'
    },
    {
      name: 'Chanda Mwale',
      event: 'Corporate Event',
      rating: 5,
      text: "We hired Ali Bakes for our company's annual conference in Lusaka. The professionalism and quality of food exceeded our expectations. Everything was delivered on time and the presentation was impeccable. Highly recommended for corporate events!",
      date: 'September 2024',
      image: '💼'
    },
    {
      name: 'Thandiwe Banda',
      event: 'Birthday Party',
      rating: 5,
      text: "My daughter's 5th birthday party was a huge success thanks to Ali Bakes! The custom cake with her favorite cartoon character was adorable, and the kids loved all the treats. Great service from Chilenje to our location in Garden compound!",
      date: 'August 2024',
      image: '🎉'
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-amber-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-center text-gray-600 mb-16 text-lg">
          Real reviews from real celebrations
        </p>
        
        <div className="flex items-center justify-center gap-4 mb-12">
          <button 
            onClick={prevTestimonial}
            className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            ‹
          </button>
          
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-3xl">
            <div className="flex justify-center mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <span key={i} className="text-3xl text-yellow-400">⭐</span>
              ))}
            </div>
            
            <div className="text-6xl text-center mb-6">{testimonials[currentIndex].image}</div>
            
            <p className="text-xl text-gray-700 italic text-center mb-8 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            
            <div className="text-center">
              <div className="font-bold text-amber-900 text-xl mb-1">{testimonials[currentIndex].name}</div>
              <div className="text-orange-600 font-medium mb-1">{testimonials[currentIndex].event}</div>
              <div className="text-gray-500 text-sm">{testimonials[currentIndex].date}</div>
            </div>
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="bg-orange-500 hover:bg-orange-600 text-white w-12 h-12 rounded-full text-2xl transition-all duration-300 transform hover:scale-110 shadow-lg"
          >
            ›
          </button>
        </div>

        <div className="flex justify-center gap-2 mb-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'w-8 bg-orange-500' : 'w-3 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <div className="text-center">
          <a 
            href="https://wa.me/260978876201" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>🎉</span>
            <span>Join Our Happy Clients</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;