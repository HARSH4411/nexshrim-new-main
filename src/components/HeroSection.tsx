import React from 'react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return <section id="home" className="relative min-h-screen flex items-center justify-start overflow-hidden">
      {/* Full Size Video Background */}
      <div className="absolute inset-0">
        <video className="absolute inset-0 w-full h-full object-cover" autoPlay muted loop playsInline preload="metadata" poster="/lovable-uploads/346d1844-b19e-4714-9d8c-63f0c914a8d0.png" style={{
        backgroundColor: '#000',
        backgroundImage: 'url(/lovable-uploads/346d1844-b19e-4714-9d8c-63f0c914a8d0.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
          <source src="/lovable-uploads/hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Animated Circuits SVG Overlay */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="circuit-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#f59e0b" />
              </linearGradient>
            </defs>
            <g className="animate-pulse">
              <path d="M100,100 L200,100 L200,200 L300,200" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" className="animate-[dash_4s_linear_infinite]" strokeDasharray="5,5" />
              <path d="M400,150 L500,150 L500,250 L600,250" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" className="animate-[dash_6s_linear_infinite]" strokeDasharray="5,5" />
              <path d="M700,100 L800,100 L800,300 L900,300" stroke="url(#circuit-gradient)" strokeWidth="2" fill="none" className="animate-[dash_8s_linear_infinite]" strokeDasharray="5,5" />
            </g>
            <circle cx="200" cy="200" r="4" fill="#f59e0b" className="animate-pulse" />
            <circle cx="500" cy="250" r="4" fill="#3b82f6" className="animate-pulse" />
            <circle cx="800" cy="300" r="4" fill="#f59e0b" className="animate-pulse" />
          </svg>
        </div>
      </div>
      
      {/* Content Overlay - Left Aligned */}
      <div className="relative z-10 text-white px-6 pl-12 md:pl-20 max-w-4xl">
        <div className="flex flex-col items-start justify-center space-y-8">
          {/* Main Heading - Left Aligned */}
          <div className="animate-[slideUpGlow_1.5s_ease-out] text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 leading-tight text-glow-blue">
              Building India's Next
              <span className="block text-nexshrim-gold">Tech Titans</span>
            </h1>
            
            <h2 className="text-xl md:text-3xl lg:text-4xl font-semibold mb-8 text-glow-gold">
              From AI to AR – We Innovate Everything
            </h2>
          </div>
          
          {/* Description */}
          <div className="animate-[fadeInUp_2s_ease-out_0.5s_both] text-left">
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-200 max-w-3xl leading-relaxed">
              We don't just build products. We build revolutions. From biometric payments to immersive realities – we engineer India's boldest tech.
            </p>
          </div>
          
          {/* Buttons - Left Aligned with Smooth Animation */}
          <div className="animate-[fadeInUp_2s_ease-out_1s_both] flex flex-col sm:flex-row gap-6">
            <Button size="lg" className="bg-nexshrim-gold hover:bg-yellow-500 text-black text-lg px-8 py-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_30px_rgba(245,158,11,0.6)] transform">
              Explore Our Ecosystem
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white text-lg px-8 py-4 relative overflow-hidden group transition-all duration-300 ease-in-out hover:scale-105 text-white hover:text-black">
              <span className="relative z-10 text-zinc-950">Let's Talk</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>;
};
export default HeroSection;