import React from 'react';
import { ArrowRight, Star, Users, Play } from 'lucide-react';
import VideoModal from './VideoModal';

interface HeroProps {
  onOpenModal: () => void;
}

const Hero: React.FC<HeroProps> = ({ onOpenModal }) => {
  const videoUrl = 'https://www.veed.io/view/36d8288f-76f8-48b8-a634-d971c9313e27?panel=share&source=ai-studio';

  const openVideo = () => {
    // Open video directly in new tab
    window.open(videoUrl, '_blank');
  };

  return (
    <div>
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Quotes in Minutes,{' '}
              <span className="text-orange-400">Not Hours</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-blue-100 leading-relaxed">
              Ditch manually quoting work with AI so you can focus on the work, not paperwork
            </p>
            
            <button 
              onClick={onOpenModal}
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3"
            >
              Let's get to work
              <ArrowRight className="w-5 h-5" />
            </button>
            
            {/* Social Proof */}
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="flex items-center gap-4 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <span className="text-lg font-semibold">4.9/5</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <Users className="w-5 h-5" />
                <span>Trusted by 2,500+ field service professionals</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div 
              className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-2xl p-8 shadow-2xl cursor-pointer group hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              onClick={openVideo}
            >
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 rounded-2xl">
                <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
                  <Play className="w-8 h-8 text-blue-900 ml-1" />
                </div>
              </div>
              
              <div className="bg-white rounded-lg p-6 space-y-4">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                    <p className="text-sm text-gray-600">💬 "Kitchen electrical upgrade needed"</p>
                  </div>
                  
                  <div className="flex items-center justify-center py-4">
                    <div className="flex items-center gap-2 text-blue-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      <span className="ml-2 text-sm font-medium">AI Processing...</span>
                    </div>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded border-l-4 border-green-500">
                    <div className="text-sm space-y-2">
                      <div className="font-semibold text-gray-800">Professional Quote Generated</div>
                      <div className="text-gray-600">
                        <div>• Labor: $480</div>
                        <div>• Materials: $320</div>
                        <div>• Total: $800</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Click to watch indicator */}
            <div className="text-center mt-4">
              <p className="text-blue-100 text-sm flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Click to watch demo
              </p>
            </div>
          </div>
        </div>
      </div>
      </section>
    </div>
  );
};

export default Hero;