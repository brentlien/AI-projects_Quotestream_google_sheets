import React, { useEffect, useState } from 'react';
import { X, ExternalLink } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoUrl: string;
}

const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose, videoUrl }) => {
  const [embedError, setEmbedError] = useState(false);
  const [videoEnded, setVideoEnded] = useState(false);

  // Extract video ID from the Veed.io URL
  const getVideoId = (url: string) => {
    const match = url.match(/\/view\/([a-f0-9-]+)/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.veed.io/embed/${videoId}?autoplay=1&controls=1` : null;

  useEffect(() => {
    if (isOpen) {
      setEmbedError(false);
      setVideoEnded(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Auto-close when video ends (simulate with timeout for demo)
  useEffect(() => {
    if (isOpen && !embedError) {
      // Simulate video duration - you can adjust this based on your actual video length
      const timer = setTimeout(() => {
        setVideoEnded(true);
        setTimeout(() => {
          onClose();
        }, 1000); // Give a moment before closing
      }, 60000); // Assuming 1 minute video - adjust as needed

      return () => clearTimeout(timer);
    }
  }, [isOpen, embedError, onClose]);

  const handleIframeError = () => {
    setEmbedError(true);
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const openInNewTab = () => {
    window.open(videoUrl, '_blank');
    onClose();
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
        <div className="bg-black rounded-lg overflow-hidden shadow-2xl">
          {!embedError && embedUrl ? (
            <div className="relative" style={{ paddingBottom: '56.25%', height: 0 }}>
              <iframe
                src={embedUrl}
                className="absolute top-0 left-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                onError={handleIframeError}
                onLoad={(e) => {
                  // Check if iframe loaded successfully
                  const iframe = e.target as HTMLIFrameElement;
                  try {
                    // This will throw an error if the iframe is blocked
                    iframe.contentWindow?.location.href;
                  } catch (error) {
                    handleIframeError();
                  }
                }}
              />
              
              {videoEnded && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                  <div className="text-white text-center">
                    <p className="text-lg mb-2">Video completed!</p>
                    <p className="text-sm opacity-75">Closing automatically...</p>
                  </div>
                </div>
              )}
            </div>
          ) : (
            // Fallback when embedding fails
            <div className="p-8 text-center text-white">
              <div className="mb-6">
                <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ExternalLink className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Video Embed Blocked</h3>
                <p className="text-gray-300 mb-6">
                  The video platform doesn't allow embedding. Click below to watch the video in a new tab.
                </p>
              </div>
              
              <button
                onClick={openInNewTab}
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2 mx-auto"
              >
                <ExternalLink className="w-5 h-5" />
                Watch Video
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoModal;