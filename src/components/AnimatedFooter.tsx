
import React, { useEffect, useState } from 'react';

const AnimatedFooter = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const currentYear = new Date().getFullYear();
  const hour = currentTime.getHours();
  const isNight = hour >= 18 || hour <= 6;

  return (
    <footer className="relative overflow-hidden">
      {/* Animated Sky Background */}
      <div className={`absolute inset-0 transition-all duration-1000 ${
        isNight 
          ? 'bg-gradient-to-b from-indigo-900 via-purple-900 to-gray-900' 
          : 'bg-gradient-to-b from-blue-400 via-blue-300 to-blue-200'
      }`}>
        {/* Binary Rain Effect */}
        {isNight && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute text-green-400 text-xs font-mono opacity-20 animate-[matrix_8s_linear_infinite]"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 8}s`,
                }}
              >
                {Math.random() > 0.5 ? '1010110' : '0101001'}
              </div>
            ))}
          </div>
        )}

        {/* Floating Code Snippets */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute text-blue-300 text-xs font-mono opacity-30 animate-float"
              style={{
                top: `${20 + Math.random() * 40}%`,
                left: `${Math.random() * 90}%`,
                animationDelay: `${i * 2}s`,
                animationDuration: `${8 + Math.random() * 4}s`
              }}
            >
              {['const ai = true;', 'if(future) {...}', 'async function()', 'npm install', 'git commit -m', 'console.log()'][i]}
            </div>
          ))}
        </div>

        {/* Stars for night time */}
        {isNight && (
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
                style={{
                  top: `${Math.random() * 50}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        )}

        {/* Floating Tech Devices */}
        <div className="absolute inset-0">
          {/* Laptop */}
          <div className="absolute top-16 left-1/4 opacity-20 animate-float" style={{ animationDelay: '1s' }}>
            <svg width="40" height="30" viewBox="0 0 40 30" className="text-blue-300">
              <rect x="5" y="5" width="30" height="18" rx="2" fill="currentColor" />
              <rect x="7" y="7" width="26" height="14" fill="#1f2937" />
              <rect x="15" y="23" width="10" height="2" rx="1" fill="currentColor" />
              <rect x="9" y="9" width="4" height="1" fill="#10b981" />
              <rect x="9" y="11" width="6" height="1" fill="#10b981" />
              <rect x="9" y="13" width="8" height="1" fill="#10b981" />
            </svg>
          </div>

          {/* Mobile Device */}
          <div className="absolute top-24 right-1/3 opacity-25 animate-float" style={{ animationDelay: '3s' }}>
            <svg width="20" height="35" viewBox="0 0 20 35" className="text-purple-300">
              <rect x="2" y="2" width="16" height="31" rx="3" fill="currentColor" />
              <rect x="4" y="6" width="12" height="20" fill="#1f2937" />
              <circle cx="10" cy="29" r="2" fill="#1f2937" />
            </svg>
          </div>

          {/* Drone */}
          <div className="absolute top-12 right-1/4 opacity-30 animate-float" style={{ animationDelay: '5s' }}>
            <svg width="30" height="20" viewBox="0 0 30 20" className="text-yellow-300">
              <circle cx="5" cy="5" r="4" fill="currentColor" opacity="0.6" />
              <circle cx="25" cy="5" r="4" fill="currentColor" opacity="0.6" />
              <circle cx="5" cy="15" r="4" fill="currentColor" opacity="0.6" />
              <circle cx="25" cy="15" r="4" fill="currentColor" opacity="0.6" />
              <rect x="10" y="8" width="10" height="4" rx="2" fill="currentColor" />
            </svg>
          </div>
        </div>

        {/* Network Connection Lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10">
          <defs>
            <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0" />
              <stop offset="50%" stopColor="#3b82f6" stopOpacity="1" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path d="M100,60 Q300,40 500,80" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-pulse" />
          <path d="M200,80 Q400,60 600,100" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '1s' }} />
          <path d="M300,100 Q500,80 700,120" stroke="url(#connectionGradient)" strokeWidth="2" fill="none" className="animate-pulse" style={{ animationDelay: '2s' }} />
        </svg>

        {/* Sun/Moon */}
        <div className={`absolute w-16 h-16 rounded-full transition-all duration-1000 ${
          isNight ? 'bg-yellow-100 shadow-lg shadow-yellow-200/50' : 'bg-yellow-400 shadow-lg shadow-yellow-400/50'
        }`}
        style={{
          top: isNight ? '20%' : '10%',
          right: isNight ? '20%' : '15%',
          transform: `translateY(${isNight ? '0' : '-10px'})`,
        }}>
          {isNight && (
            <div className="absolute inset-2 bg-gray-300 rounded-full opacity-30"></div>
          )}
        </div>

        {/* Clouds */}
        {!isNight && (
          <>
            <div className="absolute top-8 left-1/4 w-20 h-12 bg-white/60 rounded-full animate-float" style={{ animationDelay: '0s' }}></div>
            <div className="absolute top-12 right-1/3 w-16 h-8 bg-white/40 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute top-6 left-1/2 w-24 h-10 bg-white/50 rounded-full animate-float" style={{ animationDelay: '4s' }}></div>
          </>
        )}
      </div>

      {/* City Skyline with Enhanced Tech Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32">
        <svg viewBox="0 0 1200 200" className="w-full h-full">
          {/* Buildings with Communication Towers */}
          <rect x="0" y="120" width="80" height="80" fill={isNight ? '#1f2937' : '#374151'} />
          <rect x="35" y="110" width="10" height="15" fill={isNight ? '#3b82f6' : '#6b7280'} />
          <circle cx="40" cy="110" r="3" fill={isNight ? '#fbbf24' : '#9ca3af'} className="animate-pulse" />
          
          <rect x="80" y="100" width="60" height="100" fill={isNight ? '#111827' : '#4b5563'} />
          <rect x="140" y="80" width="90" height="120" fill={isNight ? '#1f2937' : '#374151'} />
          
          {/* Satellite Dish */}
          <ellipse cx="185" cy="75" rx="15" ry="5" fill={isNight ? '#6b7280' : '#9ca3af'} />
          <rect x="183" y="75" width="4" height="8" fill={isNight ? '#6b7280' : '#9ca3af'} />
          
          <rect x="230" y="110" width="70" height="90" fill={isNight ? '#111827' : '#4b5563'} />
          <rect x="300" y="90" width="85" height="110" fill={isNight ? '#1f2937' : '#374151'} />
          <rect x="385" y="70" width="75" height="130" fill={isNight ? '#111827' : '#4b5563'} />
          
          {/* Radio Tower */}
          <polygon points="420,65 425,65 422.5,45" fill={isNight ? '#ef4444' : '#dc2626'} />
          <rect x="421" y="45" width="3" height="25" fill={isNight ? '#6b7280' : '#9ca3af'} />
          
          <rect x="460" y="95" width="80" height="105" fill={isNight ? '#1f2937' : '#374151'} />
          <rect x="540" y="85" width="70" height="115" fill={isNight ? '#111827' : '#4b5563'} />
          <rect x="610" y="75" width="90" height="125" fill={isNight ? '#1f2937' : '#374151'} />
          <rect x="700" y="100" width="65" height="100" fill={isNight ? '#111827' : '#4b5563'} />
          <rect x="765" y="90" width="80" height="110" fill={isNight ? '#1f2937' : '#374151'} />
          <rect x="845" y="110" width="70" height="90" fill={isNight ? '#111827' : '#4b5563'} />
          <rect x="915" y="80" width="85" height="120" fill={isNight ? '#1f2937' : '#374151'} />
          <rect x="1000" y="95" width="75" height="105" fill={isNight ? '#111827' : '#4b5563'} />
          <rect x="1075" y="105" width="80" height="95" fill={isNight ? '#1f2937' : '#374151'} />

          {/* Enhanced Building Windows showing coding activity */}
          {isNight && (
            <>
              {/* IDE Windows */}
              <rect x="10" y="130" width="12" height="8" fill="#1f2937" stroke="#10b981" strokeWidth="0.5" />
              <rect x="12" y="132" width="8" height="1" fill="#10b981" opacity="0.8" />
              <rect x="12" y="134" width="6" height="1" fill="#10b981" opacity="0.6" />
              
              <rect x="25" y="125" width="12" height="10" fill="#1f2937" stroke="#3b82f6" strokeWidth="0.5" />
              <rect x="27" y="127" width="8" height="1" fill="#3b82f6" opacity="0.8" />
              <rect x="27" y="129" width="6" height="1" fill="#3b82f6" opacity="0.6" />
              
              <rect x="40" y="140" width="10" height="6" fill="#1f2937" stroke="#fbbf24" strokeWidth="0.5" />
              <rect x="42" y="142" width="6" height="1" fill="#fbbf24" opacity="0.8" />
              
              {/* Terminal Windows */}
              <rect x="95" y="115" width="10" height="8" fill="#000" stroke="#10b981" strokeWidth="0.5" />
              <rect x="97" y="117" width="6" height="1" fill="#10b981" opacity="0.9" />
              <rect x="97" y="119" width="4" height="1" fill="#10b981" opacity="0.7" />
              
              <rect x="110" y="120" width="8" height="6" fill="#000" stroke="#10b981" strokeWidth="0.5" />
              <rect x="112" y="122" width="4" height="1" fill="#10b981" opacity="0.8" />
              
              {/* More coding windows */}
              <rect x="155" y="95" width="14" height="10" fill="#1f2937" stroke="#8b5cf6" strokeWidth="0.5" />
              <rect x="157" y="97" width="10" height="1" fill="#8b5cf6" opacity="0.8" />
              <rect x="157" y="99" width="8" height="1" fill="#8b5cf6" opacity="0.6" />
              <rect x="157" y="101" width="6" height="1" fill="#8b5cf6" opacity="0.4" />
              
              <rect x="175" y="100" width="12" height="8" fill="#1f2937" stroke="#ef4444" strokeWidth="0.5" />
              <rect x="177" y="102" width="8" height="1" fill="#ef4444" opacity="0.8" />
              <rect x="177" y="104" width="6" height="1" fill="#ef4444" opacity="0.6" />
              
              <rect x="195" y="105" width="10" height="6" fill="#000" stroke="#10b981" strokeWidth="0.5" />
              <rect x="197" y="107" width="6" height="1" fill="#10b981" opacity="0.9" />
            </>
          )}

          {/* Data Packets Moving Between Buildings */}
          <g className="animate-pulse">
            <circle cx="150" cy="90" r="2" fill="#3b82f6" opacity="0.8">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; 100,0; 200,0"
                dur="4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle cx="350" cy="85" r="2" fill="#fbbf24" opacity="0.8">
              <animateTransform
                attributeName="transform"
                type="translate"
                values="0,0; -150,0; -300,0"
                dur="6s"
                repeatCount="indefinite"
              />
            </circle>
          </g>
        </svg>
      </div>

      {/* Enhanced Moving Vehicles */}
      <div className="absolute bottom-8 w-full">
        {/* Tech Car */}
        <div className="animate-[movecar_20s_linear_infinite]">
          <svg width="60" height="30" viewBox="0 0 60 30" className="text-nexshrim-blue">
            <rect x="10" y="15" width="35" height="10" fill="currentColor" rx="2" />
            <rect x="15" y="10" width="25" height="8" fill="currentColor" rx="2" />
            <circle cx="18" cy="26" r="4" fill="#374151" />
            <circle cx="42" cy="26" r="4" fill="#374151" />
            <circle cx="18" cy="26" r="2" fill="#9ca3af" />
            <circle cx="42" cy="26" r="2" fill="#9ca3af" />
            {/* LED strip */}
            <rect x="10" y="13" width="35" height="1" fill="#3b82f6" opacity="0.8" className="animate-pulse" />
            {/* Windows showing screens */}
            <rect x="20" y="12" width="4" height="4" fill="#1f2937" />
            <rect x="21" y="13" width="2" height="1" fill="#10b981" opacity="0.8" />
            <rect x="28" y="12" width="4" height="4" fill="#1f2937" />
            <rect x="29" y="13" width="2" height="1" fill="#3b82f6" opacity="0.8" />
            <rect x="36" y="12" width="4" height="4" fill="#1f2937" />
            <rect x="37" y="13" width="2" height="1" fill="#fbbf24" opacity="0.8" />
          </svg>
        </div>

        {/* Delivery Drone */}
        <div className="animate-[movecar_25s_linear_infinite] absolute top-[-20px]" style={{ animationDelay: '10s' }}>
          <svg width="40" height="25" viewBox="0 0 40 25" className="text-purple-400">
            <circle cx="8" cy="8" r="6" fill="currentColor" opacity="0.4" />
            <circle cx="32" cy="8" r="6" fill="currentColor" opacity="0.4" />
            <circle cx="8" cy="17" r="6" fill="currentColor" opacity="0.4" />
            <circle cx="32" cy="17" r="6" fill="currentColor" opacity="0.4" />
            <rect x="15" y="10" width="10" height="5" rx="2" fill="currentColor" />
            <rect x="17" y="11" width="6" height="1" fill="#10b981" opacity="0.8" className="animate-pulse" />
            <rect x="17" y="13" width="4" height="1" fill="#3b82f6" opacity="0.6" className="animate-pulse" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 bg-gray-900/90 backdrop-blur-sm pt-24 pb-8">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img 
                  src="/lovable-uploads/346d1844-b19e-4714-9d8c-63f0c914a8d0.png" 
                  alt="Nexshrim Logo" 
                  className="h-10 w-10"
                />
                <div>
                  <span className="text-xl font-bold bg-gradient-to-r from-nexshrim-blue to-nexshrim-gold bg-clip-text text-transparent">
                    NEXSHRIM
                  </span>
                  <div className="text-xs text-gray-400 tracking-wide">TECHNOLOGIES</div>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
                Engineering the future through innovative AI, AR/VR, biometric payments, 
                gaming, and mobility solutions. Trusted by enterprises worldwide.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-nexshrim-blue/20 backdrop-blur-sm border border-nexshrim-blue/30 rounded-full flex items-center justify-center hover:bg-nexshrim-blue hover:border-nexshrim-blue transition-all duration-300 cursor-pointer group">
                  <span className="text-nexshrim-blue group-hover:text-white text-sm font-semibold">Li</span>
                </div>
                <div className="w-10 h-10 bg-nexshrim-blue/20 backdrop-blur-sm border border-nexshrim-blue/30 rounded-full flex items-center justify-center hover:bg-nexshrim-blue hover:border-nexshrim-blue transition-all duration-300 cursor-pointer group">
                  <span className="text-nexshrim-blue group-hover:text-white text-sm font-semibold">Tw</span>
                </div>
                <div className="w-10 h-10 bg-nexshrim-blue/20 backdrop-blur-sm border border-nexshrim-blue/30 rounded-full flex items-center justify-center hover:bg-nexshrim-blue hover:border-nexshrim-blue transition-all duration-300 cursor-pointer group">
                  <span className="text-nexshrim-blue group-hover:text-white text-sm font-semibold">In</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3 text-gray-300">
                {['Home', 'Technologies', 'Products', 'Services', 'Contact'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="hover:text-nexshrim-gold transition-colors duration-200 flex items-center group">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-nexshrim-gold mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Products */}
            <div>
              <h4 className="text-lg font-semibold mb-6 text-white">Our Products</h4>
              <ul className="space-y-3 text-gray-300">
                {['IrisPay', 'RideSense', 'DriveTitan', 'Rebel Head', '3D Bhomi', 'NexHR'].map((product) => (
                  <li key={product}>
                    <a href="#" className="hover:text-nexshrim-gold transition-colors duration-200 flex items-center group">
                      <span className="w-0 group-hover:w-2 h-0.5 bg-nexshrim-gold mr-0 group-hover:mr-2 transition-all duration-200"></span>
                      {product}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © {currentYear} Nexshrim Technologies Pvt. Ltd. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
                <a href="#" className="hover:text-nexshrim-gold transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-nexshrim-gold transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-nexshrim-gold transition-colors duration-200">Careers</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AnimatedFooter;
