import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate are the AI-generated quotes?",
      answer: "Our AI uses local market data, material costs, and labor rates to provide highly accurate estimates. Most quotes are within 5-10% of final project costs, and you can always adjust pricing before sending to clients."
    },
    {
      question: "Can I customize the quote templates?",
      answer: "Yes! You can customize your quote templates with your company logo, colors, terms and conditions, and standard disclaimers. Create multiple templates for different service types."
    },
    {
      question: "What types of field services are supported?",
      answer: "QuoteStream AI supports electrical work, plumbing, HVAC, general contracting, handyman services, roofing, landscaping, and more. The AI adapts to your specific trade and local market conditions."
    },
    {
      question: "Do I need internet connection to use the app?",
      answer: "You need internet to generate quotes since the AI processing happens in the cloud. However, you can save draft quotes offline and sync them when you have connection."
    },
    {
      question: "How much does QuoteStream AI cost?",
      answer: "We offer flexible pricing starting at $29/month for solo contractors, with team plans available. All plans include unlimited quotes, customer support, and regular updates."
    },
    {
      question: "Is my client information secure?",
      answer: "Absolutely. We use bank-level encryption to protect all data. Your client information is never shared with third parties, and you maintain full control over your data."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600">
            Get answers to common questions about QuoteStream AI
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex justify-between items-center"
              >
                <h3 className="text-lg font-semibold text-blue-900">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-orange-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-orange-500" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 py-4 bg-white">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;