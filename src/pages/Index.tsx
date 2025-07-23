import React, { useEffect, useState, useCallback } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import InternityRegistrationSection from '@/components/InternityRegistrationSection';
import VisionSection from '@/components/VisionSection';
import TrustedSection from '@/components/TrustedSection';
import TechnologiesSection from '@/components/TechnologiesSection';
import ProductsSection from '@/components/ProductsSection';
import InteractiveTimeline from '@/components/InteractiveTimeline';
import RebelHeadUniverse from '@/components/RebelHeadUniverse';
import IrisPayDemo from '@/components/IrisPayDemo';
import NexHRDashboard from '@/components/NexHRDashboard';
import ThreeDImmersion from '@/components/ThreeDImmersion';
import INTICSection from '@/components/INTICSection';
import DestinySection from '@/components/DestinySection';
import InternitySection from '@/components/InternitySection';
import RDServicesSection from '@/components/RDServicesSection';
import ServicesSection from '@/components/ServicesSection';
import ContactSection from '@/components/ContactSection';
import AnimatedFooter from '@/components/AnimatedFooter';
import Chatbot from '@/components/Chatbot';

const Index = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

  // Optimized mouse tracking with better performance
  const handleMouseMove = useCallback((e: MouseEvent) => {
    requestAnimationFrame(() => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    });
  }, []);

  // Throttled scroll handler for better performance
  const handleScroll = useCallback(() => {
    requestAnimationFrame(() => {
      setScrollY(window.scrollY);
    });
  }, []);

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Smooth Cursor Following Circle */}
      <div 
        className="fixed w-4 h-4 pointer-events-none z-50 rounded-full transition-all duration-150 ease-out mix-blend-difference"
        style={{
          transform: `translate3d(${mousePosition.x - 8}px, ${mousePosition.y - 8}px, 0)`,
          background: 'radial-gradient(circle, rgba(245, 158, 11, 0.9) 0%, rgba(59, 130, 246, 0.7) 50%, transparent 70%)',
          boxShadow: '0 0 20px rgba(245, 158, 11, 0.8), 0 0 40px rgba(59, 130, 246, 0.6)',
          willChange: 'transform'
        }}
      />

      {/* Optimized Animated Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Dynamic Gradient Background */}
        <div 
          className="absolute inset-0 opacity-10 transition-all duration-1000"
          style={{
            background: `radial-gradient(400px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.1), transparent 40%)`,
            willChange: 'background'
          }}
        />
        
        {/* Reduced Floating Geometric Shapes for better performance */}
        <div className="absolute inset-0">
          {[...Array(window.innerWidth < 768 ? 6 : 12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-nexshrim-blue to-nexshrim-gold rounded-full opacity-30 animate-float"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: `${6 + Math.random() * 6}s`,
                transform: `translate3d(0, ${scrollY * 0.03 * (i % 3)}px, 0)`,
                willChange: 'transform'
              }}
            />
          ))}
        </div>

        {/* Optimized Parallax Circles */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 border border-nexshrim-blue/5 rounded-full"
            style={{
              top: '10%',
              left: '80%',
              transform: `translate3d(-50%, calc(-50% + ${scrollY * 0.08}px), 0) rotate(${scrollY * 0.03}deg)`,
              willChange: 'transform'
            }}
          />
          <div 
            className="absolute w-64 h-64 border border-nexshrim-gold/5 rounded-full"
            style={{
              top: '60%',
              left: '10%',
              transform: `translate3d(-50%, calc(-50% + ${scrollY * 0.12}px), 0) rotate(${-scrollY * 0.03}deg)`,
              willChange: 'transform'
            }}
          />
        </div>
      </div>

      {/* Content with proper z-index hierarchy */}
      <div className="relative z-10">
        <Navigation />
        
        {/* All Sections in Order */}
        <HeroSection />
        <InternityRegistrationSection />
        <VisionSection />
        <TrustedSection />
        <TechnologiesSection />
        <ProductsSection />
        <InteractiveTimeline />
        <RebelHeadUniverse />
        <IrisPayDemo />
        <NexHRDashboard />
        <ThreeDImmersion />
        <INTICSection />
        <DestinySection />
        <InternitySection />
        <RDServicesSection />
        <ServicesSection />
        <ContactSection />
        <AnimatedFooter />
      </div>

      {/* Floating Action Buttons */}
      <div className="fixed right-4 md:right-8 bottom-4 md:bottom-8 z-40 space-y-4">
        <div className="group">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-r from-nexshrim-gold to-yellow-600 rounded-full shadow-lg hover:shadow-2xl transform hover:scale-110 transition-all duration-300 flex items-center justify-center text-white"
          >
            <span className="text-lg md:text-xl">↑</span>
          </button>
          <div className="absolute right-14 md:right-16 top-1/2 transform -translate-y-1/2 bg-black/80 text-white px-3 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Back to top
          </div>
        </div>
      </div>

      {/* Chatbot Component */}
      <Chatbot />
    </div>
  );
};

export default Index;
