// import React from 'react';
// import { Wheat, Nut, Leaf, TreePine, Flame } from 'lucide-react';

// const Products = () => {
//   const products = [
//     {
//       name: 'Mustard Husk Pellets',
//       icon: Wheat,
//       image: 'https://cdn.dribbble.com/userupload/45069483/file/c9f6073d39551ead396b36056528219a.jpg?auto=compress&cs=tinysrgb&w=400',
//       description: 'High-energy pellets from mustard agricultural waste'
//     },
//     {
//       name: 'Groundnut Husk Pellets',
//       icon: Nut,
//       image: 'https://cdn.dribbble.com/userupload/45069480/file/c11ddb42bc5e129721a9709744e68de4.webp?auto=compress&cs=tinysrgb&w=400',
//       description: 'Sustainable fuel from groundnut processing residue'
//     },
//     {
//       name: 'Sugarcane Bagasse Pellets',
//       icon: Leaf,
//       image: 'https://cdn.dribbble.com/userupload/45069482/file/938b460bc8cd65d6ee19c64f9fdefe17.webp?auto=compress&cs=tinysrgb&w=400',
//       description: 'Renewable energy from sugarcane fiber waste'
//     },
//     {
//       name: 'Coconut Husk Pellets',
//       icon: TreePine,
//       image: 'https://cdn.dribbble.com/userupload/45069481/file/5a78f4338391b60226b3ee2ff700245a.jpg?auto=compress&cs=tinysrgb&w=400',
//       description: 'Eco-friendly pellets from coconut processing waste'
//     },
//     {
//       name: 'Wood Pellets',
//       icon: TreePine,
//       image: 'https://cdn.dribbble.com/userupload/45069484/file/1e845acf4ca45d3586621e3bfd5882d7.jpg?auto=compress&cs=tinysrgb&w=400',
//       description: 'Premium quality wood pellets for industrial use'
//     }
//   ];

//   return (
//     <section id="products" className="py-20 bg-gray-50">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Product Range</h2>
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto">
//             At AK Bio Energy, we trade and supply high-quality biomass pellets from various agricultural and woody residues
//           </p>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
//           {products.map((product, index) => {
//             const IconComponent = product.icon;
//             return (
//               <div
//                 key={index}
//                 className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
//               >
//                 <div className="relative overflow-hidden">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                   <div className="absolute top-4 right-4 bg-green-600 p-2 rounded-full transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
//                     <IconComponent className="w-5 h-5 text-white" />
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
//                     {product.name}
//                   </h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     {product.description}
//                   </p>
//                   <div className="mt-4 flex items-center text-green-600 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
//                     <Flame className="w-4 h-4 mr-2" />
//                     <span className="text-sm font-medium">High Energy Efficiency</span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>

//         <div className="text-center bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
//           <h3 className="text-2xl font-semibold text-gray-900 mb-4">Available Sizes</h3>
//           <div className="flex flex-wrap justify-center gap-4">
//             {['6mm', '8mm', 'Custom Bulk Options'].map((size, index) => (
//               <span
//                 key={index}
//                 className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-medium hover:bg-green-200 transition-colors duration-200 cursor-default"
//               >
//                 {size}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Products;


import React, { useState } from 'react';
import { Wheat, Nut, Leaf, TreePine, Flame, X } from 'lucide-react';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      name: 'Mustard Husk Pellets',
      icon: Wheat,
      image: 'https://cdn.dribbble.com/userupload/45069483/file/c9f6073d39551ead396b36056528219a.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'High-energy pellets from mustard agricultural waste',
      details: {
        origin: 'Mustard is one of India\'s largest winter crops, primarily cultivated for edible oil. After oil extraction, the leftover husk is densified into pellets.',
        whyIndia: 'India is the world\'s 3rd largest mustard producer, with states like Rajasthan, Haryana, UP, and MP leading cultivation. This generates massive husk availability.',
        texture: 'Mustard husk pellets are light brown to greyish, moderately hard, with a uniform cylindrical form. They have a coarse texture due to fibrous composition.',
        seasonality: 'Mustard is harvested mainly in February–March, so husk supply peaks post-harvest, with stockpiling ensuring year-round availability.',
        relevance: [
          'Cost-effective alternative to coal and wood pellets',
          'Slightly higher ash content but manageable in medium-to-large boilers',
          'Preferred where cost savings outweigh absolute efficiency'
        ]
      }
    },
    {
      name: 'Groundnut Husk Pellets',
      icon: Nut,
      image: 'https://cdn.dribbble.com/userupload/45069480/file/c11ddb42bc5e129721a9709744e68de4.webp?auto=compress&cs=tinysrgb&w=400',
      description: 'Sustainable fuel from groundnut processing residue',
      details: {
        origin: 'Derived from shells and husks of groundnuts after the nut is processed. Pellets are made by grinding, drying, and compressing husks into dense fuel.',
        whyIndia: 'India is the world\'s 2nd largest groundnut producer, with Gujarat, Andhra Pradesh, Tamil Nadu, and Karnataka accounting for ~70% of output.',
        texture: 'These pellets are dark beige to brown, relatively lightweight but dense enough for efficient combustion. Slightly softer compared to wood pellets.',
        seasonality: 'Groundnut has two key seasons — Kharif (harvested Sept–Oct) and Rabi (harvested Mar–Apr) — ensuring husk is available twice yearly.',
        relevance: [
          'High calorific value among agri-residue pellets',
          'Moderate ash content, manageable with standard boilers',
          'Useful for industries needing balance between cost and efficiency'
        ]
      }
    },
    {
      name: 'Sugarcane Bagasse Pellets',
      icon: Leaf,
      image: 'https://cdn.dribbble.com/userupload/45069482/file/938b460bc8cd65d6ee19c64f9fdefe17.webp?auto=compress&cs=tinysrgb&w=400',
      description: 'Renewable energy from sugarcane fiber waste',
      details: {
        origin: 'Bagasse is the fibrous residue left after sugarcane juice extraction. When pelletized, it becomes a compact renewable fuel.',
        whyIndia: 'India is the 2nd largest sugarcane producer globally, with major belts in UP, Maharashtra, and Karnataka. Bagasse is abundant near sugar mills.',
        texture: 'Bagasse pellets are light brown to off-white, fibrous in texture, lighter than other pellets, and burn with a bright flame.',
        seasonality: 'Sugarcane is harvested from October to March, so bagasse is plentiful during this season, with many mills storing material for pellet production.',
        relevance: [
          'Readily available in bulk from sugar belts',
          'Quick ignition, bright flame, but faster burnout compared to wood',
          'Suited for industries with access to sugar mill belts'
        ]
      }
    },
    {
      name: 'Coconut Husk Pellets',
      icon: TreePine,
      image: 'https://cdn.dribbble.com/userupload/45069481/file/5a78f4338391b60226b3ee2ff700245a.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'Eco-friendly pellets from coconut processing waste',
      details: {
        origin: 'Coconut husks, a byproduct of coconut de-husking, are shredded, dried, and densified into durable pellets.',
        whyIndia: 'India ranks among the top three coconut producers globally, with Kerala, Tamil Nadu, Karnataka, and Andhra Pradesh accounting for most production.',
        texture: 'Coconut husk pellets are dark brown to reddish-brown, harder in texture than crop husk pellets, giving them higher durability.',
        seasonality: 'Coconut is cultivated year-round, ensuring a continuous and reliable supply of husks.',
        relevance: [
          'Longer combustion cycles than many agri pellets',
          'Slightly premium pricing due to harder, denser structure',
          'Popular for applications needing stable, long-duration energy release'
        ]
      }
    },
    {
      name: 'Wood Pellets',
      icon: TreePine,
      image: 'https://cdn.dribbble.com/userupload/45069484/file/1e845acf4ca45d3586621e3bfd5882d7.jpg?auto=compress&cs=tinysrgb&w=400',
      description: 'Premium quality wood pellets for industrial use',
      details: {
        origin: 'Made from sawdust and wood shavings collected from sawmills, furniture factories, and carpentry units. The waste is dried, ground, and compressed into pellets.',
        whyIndia: 'India\'s growing construction, furniture, and timber industries in Punjab, Haryana, Uttarakhand, and the southern states ensure abundant raw wood waste.',
        texture: 'Wood pellets are uniformly cylindrical, smooth, and typically light brown to dark brown. They are the hardest and most compact of all pellet types.',
        seasonality: 'Available year-round as sawmill and carpentry operations are continuous.',
        relevance: [
          'Premium pellet with highest calorific value',
          'Lowest ash content, cleaner combustion',
          'Best suited for industries with strict efficiency and emission requirements'
        ]
      }
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
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 cursor-pointer"
                onClick={() => setSelectedProduct(product)}
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

        {/* Modal */}
        {selectedProduct && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedProduct(null)}>
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.name}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-white rounded-full p-2 hover:bg-gray-100 transition-colors duration-200"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
                <div className="absolute bottom-4 left-4 bg-green-600 p-3 rounded-full">
                  {React.createElement(selectedProduct.icon, { className: "w-6 h-6 text-white" })}
                </div>
              </div>

              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{selectedProduct.name}</h2>
                <p className="text-lg text-gray-600 mb-8">{selectedProduct.description}</p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2 flex items-center">
                      <Flame className="w-5 h-5 mr-2" />
                      Origin & Raw Material
                    </h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProduct.details.origin}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Why India?</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProduct.details.whyIndia}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Texture & Color</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProduct.details.texture}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-2">Seasonality</h3>
                    <p className="text-gray-700 leading-relaxed">{selectedProduct.details.seasonality}</p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-green-700 mb-3">Industrial Relevance</h3>
                    <ul className="space-y-2">
                      {selectedProduct.details.relevance.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-600 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => setSelectedProduct(null)}
                  className="mt-8 w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition-colors duration-200 font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

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