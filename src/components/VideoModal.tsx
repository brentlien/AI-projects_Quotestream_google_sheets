import React, { useEffect, useState } from 'react';
import { X, ExternalLink, Play } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  const [embedError, setEmbedError] = useState(true); // Start with error state since Veed.io blocks embeds
  const [videoEnded, setVideoEnded] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setEmbedError(true); // Veed.io blocks embeds
      setVideoEnded(false);
      setIsLoading(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const openInNewTab = async () => {
    setIsLoading(true);
    
    // Open the video in a new tab
    const newTab = window.open(videoUrl, '_blank');
    
    if (newTab) {
      // Simulate video watching time and auto-close modal
      setTimeout(() => {
        setVideoEnded(true);
        setTimeout(() => {
          onClose();
          setIsLoading(false);
        }, 2000);
      }, 3000); // Close modal after 3 seconds to simulate "watching"
    } else {
      setIsLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-4xl mx-auto">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors z-10"
        >
          <X className="w-8 h-8" />
        </button>

        {/* Video container */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-lg overflow-hidden shadow-2xl">
          {videoEnded ? (
            <div className="p-8 text-center text-white">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Video Completed!</h3>
              <p className="text-gray-300 mb-4">
                Thanks for watching the QuoteStream AI demo.
              </p>
              <p className="text-sm text-gray-400">Closing automatically...</p>
            </div>
          ) : (
            <div className="p-8 text-center text-white">
              <div className="mb-6">
                <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <Play className="w-10 h-10 text-white ml-1" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Watch QuoteStream AI Demo</h3>
                <p className="text-gray-300 mb-8 max-w-md mx-auto leading-relaxed">
                  See how field service professionals are generating professional quotes in minutes, not hours.
                </p>
              </div>
              
              <button
                onClick={openInNewTab}
                disabled={isLoading}
                className="bg-orange-500 hover:bg-orange-600 disabled:bg-orange-400 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center gap-3 mx-auto"
              >
                {isLoading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Opening Video...
                  </>
                ) : (
                  <>
                    <Play className="w-5 h-5" />
                    Watch Demo Now
                  </>
                )}
              </button>
              
              <p className="text-xs text-gray-400 mt-4">
                Video opens in a new tab • Auto-closes when complete
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;