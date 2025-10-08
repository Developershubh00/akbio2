import React from 'react';
import { Building2, Users, Target, Award } from 'lucide-react';
import { Logo } from './Logo';

const AboutCompany = () => {
  return (
    <section id="about-company" className="py-20 bg-gradient-to-br from-green-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
              <Logo className="w-8 h-8 text-green-600" />
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              🌱 About AK Bio Energy
            </h2>
            <div className="w-24 h-1 bg-green-500 mx-auto mb-6"></div>
          </div>

          {/* Main Content */}
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 transform hover:scale-105 transition-all duration-300">
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              <strong className="text-green-600">AK Bio Energy</strong> is an initiative of <strong className="text-gray-900">Vikram Jaglan Group</strong>, created with a vision for a cleaner and better future.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              As part of a diversified group with deep roots in manufacturing and trade, AK Bio Energy represents our commitment to sustainability and responsibility. This initiative was born out of a drive to reduce dependency on coal and fossil fuels, and to create renewable energy solutions that make industrial operations greener and more cost-efficient.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Through AK Bio Energy, the Group is channeling its expertise and network into building a supply chain of reliable, high-quality biomass pellets — an energy source that not only powers industries but also protects the planet.
            </p>
            
            <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg">
              <p className="text-lg font-semibold text-green-800">
                👉 This is more than business — it's our contribution to a sustainable tomorrow.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Users className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Partnership</h3>
              <p className="text-gray-600">Building long-term relationships with clients and suppliers</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-gray-600">Committed to environmental responsibility and clean energy</p>
            </div>
            
            <div className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4 group-hover:bg-green-200 transition-colors duration-300">
                <Award className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
              <p className="text-gray-600">Delivering premium biomass pellets with consistent standards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCompany;