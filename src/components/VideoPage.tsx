import React, { useEffect, useState } from 'react';
import { ArrowLeft, Play, ExternalLink } from 'lucide-react';

const VideoPage = () => {
  const [showFallback, setShowFallback] = useState(false);
  
  useEffect(() => {
    // Set page title
    document.title = 'QuoteStream AI Demo';
    
    // Try to detect if iframe fails to load after 3 seconds
    const timer = setTimeout(() => {
      setShowFallback(true);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  const handleBackToLanding = () => {
    // Navigate back to landing page
    window.location.href = '/';
  };

  const openVeedVideo = () => {
    window.open('https://www.veed.io/view/36d8288f-76f8-48b8-a634-d971c9313e27?panel=share&source=ai-studio', '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 text-white font-bold">Q</div>
              </div>
              <h1 className="text-2xl font-bold text-blue-900">QuoteStream AI Demo</h1>
            </div>
            
            <button 
              onClick={handleBackToLanding}
              className="flex items-center gap-2 text-gray-700 hover:text-blue-900 transition-colors font-medium"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Landing Page
            </button>
          </div>
        </div>
      </header>

      {/* Video Content */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-4xl w-full">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              See QuoteStream AI in Action
            </h2>
            <p className="text-xl text-blue-100">
              Watch how field service professionals generate quotes in minutes
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {!showFallback ? (
              <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe
                  src="https://www.veed.io/embed/36d8288f-76f8-48b8-a634-d971c9313e27?autoplay=1"
                  className="absolute top-0 left-0 w-full h-full"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  onError={() => setShowFallback(true)}
                  title="QuoteStream AI Demo Video"
                />
              </div>
            ) : (
              <div className="p-12 text-center">
                <div className="w-24 h-24 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Play className="w-12 h-12 text-orange-600" />
                </div>
                
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Ready to Watch the Demo?
                </h3>
                
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Our demo video shows exactly how QuoteStream AI transforms your quoting process. 
                  Click below to watch the full demonstration.
                </p>
                
                <button
                  onClick={openVeedVideo}
                  className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
                >
                  <Play className="w-6 h-6" />
                  Watch Demo Video
                  <ExternalLink className="w-5 h-5" />
                </button>
                
                <p className="text-sm text-gray-500 mt-4">
                  Opens in a new window
                </p>
              </div>
            )}
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <h4 className="text-lg font-semibold text-white mb-2">
                What You'll See in This Demo
              </h4>
              <div className="grid md:grid-cols-3 gap-4 text-blue-100">
                <div>• AI-powered quote generation</div>
                <div>• Professional PDF output</div>
                <div>• Real-time cost calculations</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;