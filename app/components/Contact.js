'use client'

import React  from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-r from-amber-900 via-orange-800 to-amber-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")'
      }}></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">
          Let's Create Something Delicious
        </h2>
        <p className="text-center text-orange-200 mb-12 text-xl">
          Ready to order? We're here to make your event special!
        </p>
        
        <div className="text-center mb-12">
          <a 
            href="https://wa.me/260978876201" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-green-500 hover:bg-green-600 text-white px-10 py-5 rounded-full font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            <span className="text-3xl">💬</span>
            <span>Chat with Us on WhatsApp</span>
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-5xl mb-4">📱</div>
            <h3 className="text-2xl font-bold mb-3">WhatsApp / Call</h3>
            <a 
              href="https://wa.me/260978876201" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-orange-200 hover:text-white text-lg transition-colors"
            >
              +260 978 876 201
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-5xl mb-4">📧</div>
            <h3 className="text-2xl font-bold mb-3">Email Us</h3>
            <a 
              href="mailto:alicechitumba259@gmail.com"
              className="text-orange-200 hover:text-white text-lg transition-colors break-all"
            >
              alicechitumba259@gmail.com
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center hover:bg-white/20 transition-all duration-300">
            <div className="text-5xl mb-4">📍</div>
            <h3 className="text-2xl font-bold mb-3">Find Us</h3>
            <p className="text-orange-200 text-lg">
              Chilenje, Lusaka<br />
              <span className="text-sm">Serving all of Zambia</span>
            </p>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-6">Follow Us on Social Media</h3>
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="https://facebook.com/alibakes" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-300 transform hover:scale-110"
              title="Facebook"
            >
              📘
            </a>
            <a 
              href="https://instagram.com/alibakes" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-pink-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-300 transform hover:scale-110"
              title="Instagram"
            >
              📷
            </a>
            <a 
              href="https://wa.me/260978876201" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-green-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-300 transform hover:scale-110"
              title="WhatsApp"
            >
              💬
            </a>
            <a 
              href="https://twitter.com/alibakes" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 backdrop-blur-sm hover:bg-blue-400 w-16 h-16 rounded-full flex items-center justify-center text-3xl transition-all duration-300 transform hover:scale-110"
              title="Twitter"
            >
              🐦
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;