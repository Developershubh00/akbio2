import React from 'react';
import { TrendingDown, Wind, Leaf } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: TrendingDown,
      percentage: '80-90%',
      description: 'CO₂ emissions reduction compared to coal',
      color: 'text-blue-600'
    },
    {
      icon: Wind,
      percentage: '40-80%',
      description: 'Reduction in particulate matter and sulfur emissions',
      color: 'text-green-600'
    },
    {
      icon: Leaf,
      percentage: '100%',
      description: 'Renewable and carbon-neutral energy source',
      color: 'text-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-green-600 to-green-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Environmental Impact</h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Biomass delivers major air quality improvements while providing reliable energy
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                className="group text-center bg-white bg-opacity-10 backdrop-blur-sm p-8 rounded-xl hover:bg-opacity-20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2"
              >
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-opacity-30 group-hover:scale-110 transition-all duration-300">
                  <IconComponent className="w-8 h-8 text-white" />
                </div>
                <div className="text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.percentage}
                </div>
                <p className="text-green-100 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;