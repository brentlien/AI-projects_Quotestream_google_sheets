import React from 'react';
import { User, FileText, Calculator, Download } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      icon: User,
      number: "01",
      title: "Enter Client Details",
      description: "Input pertinent client information including name, address, contact details, and property specifics to personalize your quote."
    },
    {
      icon: FileText,
      number: "02", 
      title: "Describe the Work",
      description: "Detail the scope of work including job specifications, service type, required materials, timeline, and any special considerations."
    },
    {
      icon: Calculator,
      number: "03",
      title: "AI Calculates Costs",
      description: "Our AI analyzes your input, estimates material quantities, calculates labor hours, and applies local pricing to generate accurate costs."
    },
    {
      icon: Download,
      number: "04",
      title: "Generate Professional Quote",
      description: "Receive a clear, concise professional quote in PDF format that can be printed on-site or emailed directly to your client."
    }
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From job details to professional quote in just four simple steps
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-center">
                <div className="relative mb-8">
                  <div className="w-20 h-20 bg-blue-900 rounded-full flex items-center justify-center mx-auto shadow-lg">
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.number}</span>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-blue-900 mb-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 -right-4 w-8 h-0.5 bg-orange-300"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;