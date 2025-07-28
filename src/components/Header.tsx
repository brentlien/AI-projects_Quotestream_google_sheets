import React, { useState } from 'react';
import { Menu, X, Wrench } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpenModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
              <Wrench className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-blue-900">QuoteStream AI</h1>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Features</a>
            <a href="#pricing" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Pricing</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">Reviews</a>
            <a href="#faq" className="text-gray-700 hover:text-blue-900 transition-colors font-medium">FAQ</a>
            <button 
              onClick={onOpenModal}
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors"
            >
              Start Free Trial
            </button>
          </nav>
          
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col gap-4">
              <a href="#features" className="text-gray-700 hover:text-blue-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-900 transition-colors">Pricing</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-900 transition-colors">Reviews</a>
              <a href="#faq" className="text-gray-700 hover:text-blue-900 transition-colors">FAQ</a>
              <button 
                onClick={onOpenModal}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-fit"
              >
                Start Free Trial
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;