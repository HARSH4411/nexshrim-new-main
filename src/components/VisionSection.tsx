import React, { useEffect, useState } from 'react';
const VisionSection = () => {
  const [scrollY, setScrollY] = useState(0);
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-nexshrim-dark-blue to-black">
      {/* Parallax Background */}
      <div className="absolute inset-0 opacity-30" style={{
      transform: `translateY(${scrollY * 0.3}px)`
    }}>
        <div className="absolute inset-0 bg-gradient-to-r from-nexshrim-blue/20 to-nexshrim-gold/20"></div>
        
        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => <div key={i} className="absolute border border-nexshrim-gold/30 rounded-full animate-float" style={{
        width: `${60 + i * 20}px`,
        height: `${60 + i * 20}px`,
        top: `${10 + i * 10}%`,
        left: `${5 + i * 12}%`,
        animationDelay: `${i * 0.5}s`,
        transform: `translateY(${scrollY * (0.1 + i * 0.05)}px)`
      }} />)}
      </div>

      {/* Content Container */}
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        <div className="holographic-text-container">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 holographic-text">
            <span className="block mb-4 text-white">Our Vision
Building Revolutions</span>
            
          </h2>
          
          <div className="holographic-reveal">
            <p className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto leading-relaxed mb-8">
              To revolutionize India's technology landscape through groundbreaking innovations in AI, 
              immersive experiences, and transformative digital solutions that redefine how businesses operate and people connect.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-nexshrim-gold">🚀</div>
                <h3 className="text-xl font-bold mb-3 text-white">Revolutionary Innovation</h3>
                <p className="text-gray-300">Pioneering breakthrough technologies that transform industries and create new possibilities</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-nexshrim-gold">🌟</div>
                <h3 className="text-xl font-bold mb-3 text-white">Future-Ready Solutions</h3>
                <p className="text-gray-300">Building tomorrow's technology today with cutting-edge AI, AR/VR, and intelligent systems</p>
              </div>
              
              <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4 text-nexshrim-gold">🇮🇳</div>
                <h3 className="text-xl font-bold mb-3 text-white">India's Tech Revolution</h3>
                <p className="text-gray-300">Leading India's digital transformation with world-class innovations from the heart of Bharat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated neon lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="neon-line neon-line-1"></div>
          <div className="neon-line neon-line-2"></div>
          <div className="neon-line neon-line-3"></div>
        </div>
      </div>

      {/* Particle Field */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => <div key={i} className="absolute w-1 h-1 bg-nexshrim-gold rounded-full animate-float opacity-60" style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${i * 0.3}s`,
        animationDuration: `${4 + Math.random() * 4}s`
      }} />)}
      </div>
    </section>;
};
export default VisionSection;