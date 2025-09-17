import React from 'react';
import { Wheat, Nut, Leaf, TreePine, Flame } from 'lucide-react';

const Products = () => {
  const products = [
    {
      name: 'Mustard Husk Pellets',
      icon: Wheat,
      image: 'https://images.pexels.com/photos/4022092/pexels-photo-4022092.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'High-energy pellets from mustard agricultural waste'
    },
    {
      name: 'Groundnut Husk Pellets',
      icon: Nut,
      image: 'https://images.pexels.com/photos/4022093/pexels-photo-4022093.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Sustainable fuel from groundnut processing residue'
    },
    {
      name: 'Sugarcane Bagasse Pellets',
      icon: Leaf,
      image: 'https://images.pexels.com/photos/4022094/pexels-photo-4022094.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Renewable energy from sugarcane fiber waste'
    },
    {
      name: 'Coconut Husk Pellets',
      icon: TreePine,
      image: 'https://images.pexels.com/photos/4022095/pexels-photo-4022095.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Eco-friendly pellets from coconut processing waste'
    },
    {
      name: 'Wood Pellets',
      icon: TreePine,
      image: 'https://images.pexels.com/photos/4022096/pexels-photo-4022096.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Premium quality wood pellets for industrial use'
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At AK Bio Energy, we trade and supply high-quality biomass pellets from various agricultural and woody residues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product, index) => {
            const IconComponent = product.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4 bg-green-600 p-2 rounded-full transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
                    <IconComponent className="w-5 h-5 text-white" />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                  <div className="mt-4 flex items-center text-green-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <Flame className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">High Energy Efficiency</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Available Sizes</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {['6mm', '8mm', 'Custom Bulk Options'].map((size, index) => (
              <span
                key={index}
                className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-colors duration-200 cursor-default"
              >
                {size}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;