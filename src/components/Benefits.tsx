import React from 'react';
import { Clock, TrendingUp, DollarSign, Award } from 'lucide-react';

const Benefits = () => {
  const benefits = [
    {
      icon: Clock,
      title: "More Time for What Matters",
      description: "Less time spent quoting frees up time to be doing the actual work that generates revenue."
    },
    {
      icon: TrendingUp,
      title: "Higher Conversion Rates",
      description: "Faster responses improve conversion rates as clients appreciate quick, professional service."
    },
    {
      icon: DollarSign,
      title: "Competitive & Profitable",
      description: "Pricing and costs based on local conditions ensures competitive bids while maintaining profitability."
    },
    {
      icon: Award,
      title: "Professional Brand Image",
      description: "Professional and consistent output enhances your brand and builds client trust."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Why Field Service Pros Choose QuoteStream AI
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transform your quoting process and grow your business with intelligent automation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                {benefit.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;