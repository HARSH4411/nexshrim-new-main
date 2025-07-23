
import React, { useState, useEffect } from 'react';

const DestinySection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [wheelRotation, setWheelRotation] = useState(0);
  const [selectedZodiac, setSelectedZodiac] = useState<string | null>(null);
  const [showCompatibility, setShowCompatibility] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Rotate astrological wheel
  useEffect(() => {
    const timer = setInterval(() => {
      setWheelRotation(prev => prev + 0.5);
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const zodiacSigns = [
    { sign: "Aries", compatibility: 88 },
    { sign: "Taurus", compatibility: 92 },
    { sign: "Gemini", compatibility: 76 },
    { sign: "Cancer", compatibility: 94 },
    { sign: "Leo", compatibility: 82 },
    { sign: "Virgo", compatibility: 89 },
    { sign: "Libra", compatibility: 91 },
    { sign: "Scorpio", compatibility: 85 },
    { sign: "Sagittarius", compatibility: 79 },
    { sign: "Capricorn", compatibility: 93 },
    { sign: "Aquarius", compatibility: 87 },
    { sign: "Pisces", compatibility: 90 }
  ];

  const features = [
    {
      title: "Kundli-Based Matching",
      description: "Advanced Vedic compatibility scoring for meaningful connections"
    },
    {
      title: "Tarot Insights", 
      description: "Personalized guidance for your romantic journey"
    },
    {
      title: "Authentic Connections",
      description: "No superficial interactions - only genuine intent-driven matches"
    },
    {
      title: "Real-Time Compatibility",
      description: "Live compatibility updates based on celestial movements"
    }
  ];

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
        
        {/* Floating elements for ambiance */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-300 rounded-full opacity-30 animate-twinkle"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                transform: `translateY(${scrollY * 0.1 * (i % 3)}px)`
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-pink-300 to-purple-400 bg-clip-text text-transparent">
            DESTINY
          </h2>
          <h3 className="text-2xl md:text-3xl font-light mb-6 text-purple-200">
            When Love Meets the Stars
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            India's first astrology-powered dating app where cosmic compatibility meets modern technology
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light mb-8 text-purple-200">
              Beyond Random Matches
            </h3>
            <h4 className="text-4xl font-bold text-white mb-6">
              Cosmic Connections
            </h4>
            
            <p className="text-lg text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Destiny combines ancient Vedic wisdom with cutting-edge AI to create meaningful connections based on deep compatibility.
            </p>
          </div>

          {/* Feature Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-sm border border-purple-300/20 p-8 rounded-2xl hover:bg-white/10 transition-all duration-500 group cursor-pointer"
                style={{animationDelay: `${index * 0.2}s`}}
                onClick={() => setShowCompatibility(!showCompatibility)}
              >
                <h4 className="text-2xl font-semibold text-purple-200 group-hover:text-white transition-colors duration-300 mb-4">
                  {feature.title}
                </h4>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Compatibility Demo */}
          {showCompatibility && (
            <div className="bg-white/10 backdrop-blur-sm border border-purple-300/30 p-8 rounded-2xl mb-16 animate-fade-in">
              <h4 className="text-2xl font-semibold text-center mb-8 text-purple-200">Live Compatibility Demo</h4>
              <div className="flex justify-center items-center space-x-12">
                <div className="text-center">
                  <div className="text-2xl font-semibold mb-2 text-white">Aries</div>
                  <div className="text-purple-300">March 21 - April 19</div>
                </div>
                <div className="text-2xl text-purple-400 font-light">+</div>
                <div className="text-center">
                  <div className="text-2xl font-semibold mb-2 text-white">Cancer</div>
                  <div className="text-purple-300">June 21 - July 22</div>
                </div>
              </div>
              <div className="text-center mt-8">
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text animate-pulse">
                  88% Compatible
                </div>
                <div className="text-gray-300 mt-2">Based on Guna Milan & Planetary Alignment</div>
              </div>
            </div>
          )}

          {/* App Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <div className="text-center bg-white/5 backdrop-blur-sm border border-purple-300/20 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="text-lg font-semibold text-purple-200 mb-2">Guna Milan</div>
              <div className="text-sm text-gray-400">Vedic Compatibility</div>
            </div>
            
            <div className="text-center bg-white/5 backdrop-blur-sm border border-purple-300/20 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="text-lg font-semibold text-purple-200 mb-2">Tarot Guidance</div>
              <div className="text-sm text-gray-400">Mystical Insights</div>
            </div>
            
            <div className="text-center bg-white/5 backdrop-blur-sm border border-purple-300/20 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="text-lg font-semibold text-purple-200 mb-2">AI Matching</div>
              <div className="text-sm text-gray-400">Smart Algorithms</div>
            </div>
            
            <div className="text-center bg-white/5 backdrop-blur-sm border border-purple-300/20 p-6 rounded-xl hover:bg-white/10 transition-all duration-300">
              <div className="text-lg font-semibold text-purple-200 mb-2">Birth Charts</div>
              <div className="text-sm text-gray-400">Deep Analysis</div>
            </div>
          </div>

          {/* Taglines */}
          <div className="text-center mb-16">
            <div className="space-y-6 text-2xl md:text-3xl font-light">
              <div className="text-purple-200">
                "Your Zodiac. Your Algorithm. Your Person."
              </div>
              <div className="text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
                "Let the Universe Match You"
              </div>
            </div>
          </div>

          {/* Download Section */}
          <div className="text-center">
            <h3 className="text-3xl font-semibold mb-8 text-purple-200">Available Now</h3>
            <div className="flex justify-center space-x-6 mb-12">
              <a 
                href="#" 
                className="bg-white/10 backdrop-blur-sm border border-purple-300/30 px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 group flex items-center space-x-3"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
                  alt="Google Play Store" 
                  className="h-8 w-auto"
                />
                <span className="text-white font-medium">Google Play</span>
              </a>
              
              <a 
                href="#" 
                className="bg-white/10 backdrop-blur-sm border border-purple-300/30 px-8 py-4 rounded-xl hover:bg-white/20 transition-all duration-300 group flex items-center space-x-3"
              >
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" 
                  alt="App Store" 
                  className="h-8 w-auto"
                />
                <span className="text-white font-medium">App Store</span>
              </a>
            </div>

            {/* CTA Button */}
            <button 
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 rounded-full text-xl font-semibold hover:scale-105 transition-all duration-300 shadow-2xl"
              onClick={() => {
                // Simple animation effect
                const button = document.activeElement;
                if (button) {
                  button.classList.add('animate-pulse');
                  setTimeout(() => button.classList.remove('animate-pulse'), 1000);
                }
              }}
            >
              Start Your Cosmic Journey
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinySection;
