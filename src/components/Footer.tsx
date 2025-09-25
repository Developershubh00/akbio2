import React from 'react';
import { Leaf, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Leaf className="h-8 w-8 text-green-400" />
              <span className="text-2xl font-bold">AK Bio Energy</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              An initiative of Vikram Jaglan Group, dedicated to providing sustainable 
              biomass pellet solutions for a cleaner energy future.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Our Products</h3>
            <ul className="space-y-3 text-gray-300">
              <li>🌾 Mustard Husk Pellets</li>
              <li>🌰 Groundnut Husk Pellets</li>
              <li>🍬 Sugarcane Bagasse Pellets</li>
              <li>🥥 Coconut Husk Pellets</li>
              <li>🌲 Wood Pellets</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><button onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-green-400 transition-colors duration-200">Home</button></li>
              <li><button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-green-400 transition-colors duration-200">About</button></li>
              <li><button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-green-400 transition-colors duration-200">Products</button></li>
              <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-green-400 transition-colors duration-200">Contact</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2025 AK Bio Energy. All rights reserved. | An initiative of Vikram Jaglan Group
          </p>
          
          <button
            onClick={scrollToTop}
            className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors duration-200 group"
            aria-label="Back to top"
          >
            <ArrowUp className="h-5 w-5 group-hover:-translate-y-1 transition-transform duration-200" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;