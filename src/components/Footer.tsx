import React from 'react';
import { ArrowRight, Wrench, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenModal: () => void;
}

const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-blue-800">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Quoting Process?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join thousands of field service professionals who've already streamlined their business
          </p>
          <button 
            onClick={onOpenModal}
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
          >
            Let's get to work
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                <Wrench className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold">QuoteStream AI</h3>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Empowering field service professionals with AI-driven quoting solutions.
            </p>
            <div className="space-y-2 text-blue-100">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>support@quotestreamai.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>1-800-QUOTE-AI</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
          </div>
          
          {/* Product */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Mobile App</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Integrations</a></li>
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Getting Started</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Training</a></li>
            </ul>
          </div>
          
          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-blue-100">
              <li><a href="#" className="hover:text-orange-400 transition-colors">Private Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a></li>
              <li><a href="#" className="hover:text-orange-400 transition-colors">GDPR</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-100">
          <p>&copy; 2025 QuoteStream AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;