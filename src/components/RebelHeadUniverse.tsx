
import React, { useState, useEffect } from 'react';

const RebelHeadUniverse = () => {
  const [currentText, setCurrentText] = useState("WAR");
  const [isHovered, setIsHovered] = useState(false);
  const [audioEnabled, setAudioEnabled] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  const textSequence = ["WAR", "WIN", "NEXT BATTLE"];

  useEffect(() => {
    // Create audio element with sample audio
    const audioElement = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvGYfBDuM0+/acSsGLYTO8tiJNwgZaLvt555NEAxOpuPwtmMcBjiP1vLNeSsFJHfH8N2QQAoUXrTp66hVFApGnt/yvGYfBDuM0u/acSsGLITO8tiKOAcZaLvt555NEAxOpuPwtmMcBjiP1vLNeSsFJHfH8N2QQAoUXrTp66hVFApGnt/yvGYfBDuM0u/acSsGL');
    setAudio(audioElement);
    return () => {
      if (audioElement) {
        audioElement.pause();
        audioElement.src = '';
      }
    };
  }, []);

  useEffect(() => {
    if (isHovered) {
      let index = 0;
      const interval = setInterval(() => {
        index = (index + 1) % textSequence.length;
        setCurrentText(textSequence[index]);
      }, 800);

      // Trigger audio if enabled
      if (audioEnabled && audio) {
        audio.currentTime = 0;
        audio.play().catch(console.log);
      }
      return () => clearInterval(interval);
    } else {
      setCurrentText("WAR");
    }
  }, [isHovered, audioEnabled, audio]);

  const gamingPeripherals = [
    {
      name: "Rebel Headset X1 Pro",
      model: "🎧",
      color: "from-red-500 to-pink-600",
      specs: "7.1 Surround • 50mm Drivers • RGB",
      madeInIndia: true
    },
    {
      name: "Battle Mouse Elite",
      model: "🖱️",
      color: "from-purple-500 to-indigo-600",
      specs: "16000 DPI • Optical • Ergonomic",
      madeInIndia: true
    },
    {
      name: "Warrior Keyboard Mech",
      model: "⌨️",
      color: "from-orange-500 to-red-600",
      specs: "Mechanical • RGB Backlit • Anti-Ghost",
      madeInIndia: true
    },
    {
      name: "Arena Controller Pro",
      model: "🎮",
      color: "from-blue-500 to-purple-600",
      specs: "Wireless • Haptic • 40hr Battery",
      madeInIndia: true
    }
  ];

  return (
    <section className="min-h-screen bg-black text-white relative overflow-hidden z-10">
      {/* Audio Toggle - Top Right Corner */}
      <div className="absolute top-8 right-8 z-30">
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={audioEnabled}
            onChange={(e) => setAudioEnabled(e.target.checked)}
            className="sr-only"
          />
          <div className={`relative w-14 h-8 rounded-full transition-colors duration-300 ${
            audioEnabled ? 'bg-red-500' : 'bg-gray-600'
          }`}>
            <div className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-transform duration-300 ${
              audioEnabled ? 'translate-x-6' : 'translate-x-0'
            }`}>
              <span className="absolute inset-0 flex items-center justify-center text-xs">
                {audioEnabled ? '🔊' : '🔇'}
              </span>
            </div>
          </div>
          <span className="ml-3 text-white font-medium">Audio</span>
        </label>
      </div>

      {/* Indian Tricolor Accent Elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-white to-green-500 opacity-60"></div>
      
      {/* Dark Matrix Background */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="matrix-bg"></div>
        {[...Array(30)].map((_, i) => (
          <div 
            key={i} 
            className="absolute text-green-500 text-xs animate-[matrix_10s_linear_infinite] opacity-30 pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              fontSize: `${8 + Math.random() * 8}px`
            }}
          >
            {Math.random().toString(36).substring(7)}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-20 py-[50px]">
        {/* Rebel Head Logo & Title */}
        <div className="text-center mb-16 relative z-30">
          <div 
            className="glitch-container cursor-pointer relative" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
          >
            <h1 className="text-6xl md:text-8xl font-bold mb-4 glitch-text relative z-10">
              REBEL HEAD
            </h1>
            <div className="text-4xl md:text-6xl font-bold text-red-500 glitch-text relative z-10">
              {currentText}
            </div>
          </div>
          
          {/* Made in India Badge */}
          <div className="inline-flex items-center mt-6 px-6 py-3 bg-gradient-to-r from-orange-500 via-white to-green-500 rounded-full text-black font-bold text-lg animate-pulse">
            <span className="mr-2">🇮🇳</span>
            PROUDLY MADE IN INDIA
          </div>
          
          <p className="text-xl text-gray-300 mt-8 max-w-2xl mx-auto relative z-10">
            India's first immersive gaming peripheral brand. Premium computer peripherals 
            engineered with cutting-edge technology and Indian innovation.
          </p>

          <p className="text-lg text-orange-400 mt-4 max-w-2xl mx-auto relative z-10 font-semibold">
            Designed in India • Manufactured in India • Built for Indian Gamers
          </p>
        </div>

        {/* Immersive Peripheral Arsenal */}
        <div className="mb-20 relative z-20">
          <h3 className="text-3xl font-bold text-center mb-4 text-red-400">
            Immersive Peripheral Arsenal
          </h3>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Professional gaming peripherals with advanced immersive technology, 
            haptic feedback, and RGB ecosystems - all proudly manufactured in India.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {gamingPeripherals.map((peripheral, index) => (
              <div 
                key={peripheral.name} 
                className="group relative cursor-pointer z-10 h-64"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* 3D Card Container with Enhanced Flip Animation */}
                <div className="relative w-full h-full [perspective:1000px]">
                  <div className="relative w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] transition-transform duration-700 ease-in-out">
                    {/* Front Face */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
                      <div className={`h-full rounded-xl bg-gradient-to-br ${peripheral.color} p-6 flex flex-col items-center justify-center border border-red-500/30 hover:border-red-500 transition-all duration-300 relative overflow-hidden shadow-lg hover:shadow-2xl`}>
                        {/* Made in India Badge */}
                        {peripheral.madeInIndia && (
                          <div className="absolute top-2 right-2 bg-gradient-to-r from-orange-500 to-green-500 text-white text-xs px-2 py-1 rounded-full font-bold">
                            🇮🇳 INDIA
                          </div>
                        )}
                        
                        <div className="text-6xl mb-4 animate-pulse">{peripheral.model}</div>
                        <h4 className="text-lg font-bold text-white text-center">{peripheral.name}</h4>
                        <p className="text-sm text-white/80 text-center mt-2">{peripheral.specs}</p>
                        
                        {/* Tech Loading Bar */}
                        <div className="mt-4 w-full h-1 bg-white/30 rounded-full overflow-hidden">
                          <div className="h-full bg-red-500 rounded-full animate-[loading_2s_ease-in-out_infinite]"></div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Back Face */}
                    <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
                      <div className="h-full rounded-xl bg-black border border-red-500 p-6 flex flex-col items-center justify-center shadow-lg">
                        <div className="text-4xl mb-4 text-red-500">⚔️</div>
                        <h4 className="text-lg font-bold text-red-400 mb-2">{peripheral.name}</h4>
                        <p className="text-sm text-gray-300 text-center mb-2">
                          Professional immersive gaming peripheral with advanced Indian engineering
                        </p>
                        <div className="text-xs text-orange-400 mb-3 font-semibold">
                          🇮🇳 MADE IN INDIA
                        </div>
                        <button className="mt-2 px-4 py-2 bg-red-500 hover:bg-red-600 rounded-lg text-white font-semibold transition-colors">
                          Equip Now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Excellence Section */}
        <div className="mb-20 relative z-20 my-[64px] py-[100px]">
          <h3 className="text-3xl font-bold text-center mb-8 text-orange-400">
            🇮🇳 Indian Engineering Excellence
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🔬</div>
              <h4 className="text-xl font-bold text-center mb-3 text-orange-400">Indigenous R&D</h4>
              <p className="text-gray-300 text-center">
                Advanced research facilities in Bangalore and Hyderabad developing next-gen gaming technology
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🏭</div>
              <h4 className="text-xl font-bold text-center mb-3 text-green-400">Local Manufacturing</h4>
              <p className="text-gray-300 text-center">
                State-of-the-art manufacturing units ensuring premium quality and supporting local economy
              </p>
            </div>
            <div className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-4xl mb-4 text-center">🎯</div>
              <h4 className="text-xl font-bold text-center mb-3 text-red-400">Gaming Optimized</h4>
              <p className="text-gray-300 text-center">
                Designed specifically for Indian gaming preferences and optimized for Indian network conditions
              </p>
            </div>
          </div>
        </div>

        {/* Made in India Battle Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center relative z-20 mb-16">
          <div className="cyber-stat-card">
            <div className="text-4xl font-bold text-orange-500 mb-2">100%</div>
            <div className="text-gray-300">Made in India</div>
          </div>
          <div className="cyber-stat-card">
            <div className="text-4xl font-bold text-green-500 mb-2">50K+</div>
            <div className="text-gray-300">Indian Gamers Equipped</div>
          </div>
          <div className="cyber-stat-card">
            <div className="text-4xl font-bold text-red-500 mb-2">₹299</div>
            <div className="text-gray-300">Starting Price Point</div>
          </div>
          <div className="cyber-stat-card">
            <div className="text-4xl font-bold text-blue-500 mb-2">15</div>
            <div className="text-gray-300">Manufacturing Cities</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center relative z-20">
          <h3 className="text-3xl font-bold mb-8 text-gradient-india">
            Join the Indian Gaming Revolution
          </h3>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-green-500 text-white font-bold rounded-lg hover:scale-105 transition-all duration-300">
              Shop Made in India Peripherals
            </button>
            <button className="px-8 py-4 border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-bold rounded-lg transition-all duration-300">
              Experience Immersive Demo
            </button>
          </div>
        </div>
      </div>

      {/* Indian Themed Glow Effects */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-orange-500/20 rounded-full filter blur-3xl animate-pulse pointer-events-none"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-green-500/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000 pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-red-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000 pointer-events-none"></div>
    </section>
  );
};

export default RebelHeadUniverse;
