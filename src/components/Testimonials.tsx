import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "I used to spend hours after work preparing quotes. Now, I can generate a professional estimate in minutes while I'm still on-site. It's like having an office manager in my pocket.",
      author: "James R.",
      title: "Master Electrician"
    },
    {
      quote: "Clients are blown away when I hand them a clean, accurate quote before I even leave the job site. It makes me look like a big firm, even though I'm a one-man shop.",
      author: "Carla M.",
      title: "General Contractor"
    },
    {
      quote: "Before, I'd put off quoting because it was tedious. Now I get quotes out instantly, and I've seen a 20% jump in accepted jobs because I respond faster than competitors.",
      author: "Tim B.",
      title: "Handyman Services"
    },
    {
      quote: "Manual quoting left too much room for mistakes and missed items. With this AI tool, everything is clear, consistent, and accurate. No more awkward callbacks to fix errors.",
      author: "Derek K.",
      title: "Plumbing Specialist"
    },
    {
      quote: "I no longer spend my evenings hunched over spreadsheets. Quotes are done on-site, and I get my nights back for family. It's a game changer for my quality of life.",
      author: "Luis H.",
      title: "Roofing Contractor"
    },
    {
      quote: "Homeowners love the instant quotes—no waiting, no back-and-forth. It's helped me close deals on the spot, which almost never happened before.",
      author: "Sam P.",
      title: "HVAC Technician"
    },
    {
      quote: "I used to think I didn't have time to adopt new tech, but this app paid for itself in the first week. Now, I'm winning more bids and running a smoother business.",
      author: "Angela W.",
      title: "Remodeling Contractor"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  return (
    <section className="py-20 px-4 bg-blue-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
            What Field Service Pros Are Saying
          </h2>
          <p className="text-xl text-gray-600">
            Real results from real contractors using QuoteStream AI
          </p>
        </div>
        
        <div className="relative">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white p-8 md:p-12 rounded-xl shadow-lg max-w-4xl mx-auto">
                    <div className="flex text-yellow-400 mb-6 justify-center">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-6 h-6 fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 text-center italic">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div className="text-center">
                      <div className="font-bold text-blue-900 text-lg">
                        — {testimonial.author}
                      </div>
                      <div className="text-orange-600 font-medium">
                        {testimonial.title}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronLeft className="w-6 h-6 text-blue-900" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors"
          >
            <ChevronRight className="w-6 h-6 text-blue-900" />
          </button>
          
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-orange-500' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;