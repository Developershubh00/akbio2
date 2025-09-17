import React from 'react';
import { CheckCircle, Users, Award, Truck, Shield } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Users,
      title: 'Reliable Trading Partner',
      description: 'Strong sourcing network with established supplier relationships'
    },
    {
      icon: Award,
      title: 'Consistent Quality',
      description: 'Moisture-controlled, dense pellets that meet industry standards'
    },
    {
      icon: Truck,
      title: 'Flexible Supply',
      description: 'From small consignments to bulk orders, we adapt to your needs'
    },
    {
      icon: Shield,
      title: 'Sustainability Commitment',
      description: 'Long-term partnerships focused on environmental responsibility'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 to-green-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose AK Bio Energy?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're more than just a supplier – we're your partner in sustainable energy solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => {
            const IconComponent = reason.icon;
            return (
              <div
                key={index}
                className="group bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:rotate-1"
              >
                <div className="text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-green-200 group-hover:scale-110 transition-all duration-300">
                    <IconComponent className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors duration-300">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {reason.description}
                  </p>
                  <div className="mt-4 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-shadow duration-300 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Promise</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              At AK Bio Energy, we see every client as a partner in building a cleaner energy future. 
              We value trust, transparency, and collaboration in everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;