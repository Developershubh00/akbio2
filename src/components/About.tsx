import React from 'react';
import { Flame, Leaf, DollarSign, TrendingUp } from 'lucide-react';

const About = () => {
  const benefits = [
    {
      icon: Flame,
      title: 'High Energy Efficiency',
      description: 'Reliable heat for industrial applications with consistent burning properties'
    },
    {
      icon: Leaf,
      title: 'Green & Eco-Friendly Fuel',
      description: 'A cleaner alternative to coal with significantly reduced carbon emissions'
    },
    {
      icon: DollarSign,
      title: 'Cost-Effective Energy',
      description: 'Consistent supply and stable pricing for better budget planning'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Biomass Pellets</h2>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Biomass pellets are a renewable, carbon-neutral energy source made from agricultural and woody residues. 
              They represent the future of sustainable industrial energy solutions.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group flex items-start space-x-4 p-4 rounded-lg hover:bg-green-50 transition-all duration-300 transform hover:translate-x-2"
                  >
                    <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                      <IconComponent className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-600 transition-colors duration-300">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <div className="relative overflow-hidden rounded-2xl shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Biomass pellets in hand"
                className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            
            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">80-90%</p>
                  <p className="text-sm text-gray-600">CO₂ Reduction</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;