
import React from 'react';
import { Button } from '@/components/ui/button';

const ProductsSection = () => {
  const products = [
    {
      name: "IrisPay",
      tagline: "World's First Aadhaar-Linked Biometric Wallet",
      description: "No phone, no card – just look & pay. UPI integration with MIS100V2 Scanner and merchant-first infrastructure.",
      features: ["Device-less payments", "Aadhaar integration", "UPI compatibility", "Secure biometrics"],
      color: "from-green-500 to-emerald-600",
      icon: "👁️",
      glowColor: "shadow-[0_0_30px_rgba(16,185,129,0.3)]",
      //link: "https://irispay.com"
    },
    {
      name: "RideSense",
      tagline: "Mobility Intelligence",
      description: "Smart navigation, real-time data analytics, and urban commute optimization for the future of transportation.",
      features: ["Smart navigation", "Real-time analytics", "Traffic optimization", "Urban mobility"],
      color: "from-blue-500 to-cyan-600",
      icon: "🚗",
      glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.3)]",
      //link: "https://ridesense.com"
    },
    {
      name: "DriveTitan",
      tagline: "Drive Safe, Drive Smart",
      description: "Advanced driving behavior analysis, comprehensive vehicle diagnostics, and intelligent fleet telematics.",
      features: ["Behavior analysis", "Vehicle diagnostics", "Fleet management", "Safety monitoring"],
      color: "from-purple-500 to-indigo-600",
      icon: "🛡️",
      glowColor: "shadow-[0_0_30px_rgba(147,51,234,0.3)]",
      //link: "https://drivetitan.com"
    },
    {
      name: "Rebel Head",
      tagline: "India's Rawest Gaming Brand",
      description: "Performance gaming accessories, battle-based game titles, and cutting-edge esports technology. Style meets performance.",
      features: ["Gaming accessories", "Game development", "Esports tech", "Performance gear"],
      color: "from-red-500 to-pink-600",
      icon: "🎮",
      glowColor: "shadow-[0_0_30px_rgba(239,68,68,0.3)]",
      //link: "https://rebelhead.com"
    },
    {
      name: "3D Bhomi",
      tagline: "Augmented Reality Meets Reality",
      description: "Immersive AR/VR models for real estate visualization, educational content, simulation, and professional training.",
      features: ["AR/VR solutions", "Real estate viz", "Education content", "Training sims"],
      color: "from-orange-500 to-yellow-600",
      icon: "🌐",
      glowColor: "shadow-[0_0_30px_rgba(249,115,22,0.3)]",
      link: "/3d-bhumi/index.html"
    },
    {
      name: "NexHR",
      tagline: "Next-Gen HR Management System",
      description: "Complete HRMS solution with payroll, attendance, onboarding, leave management, and employee self-service portal.",
      features: ["Payroll management", "Attendance tracking", "Employee portal", "Leave management"],
      color: "from-teal-500 to-blue-600",
      icon: "👥",
      glowColor: "shadow-[0_0_30px_rgba(20,184,166,0.3)]",
      //link: "https://nexhr.com"
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-nexshrim-blue rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-64 h-64 bg-nexshrim-gold rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Innovation Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cutting-edge products that are reshaping industries and creating new possibilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={product.name}
              className={`group relative glass-card rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-4 hover:${product.glowColor} hover-tilt cursor-pointer`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Top Border */}
              <div className={`h-2 bg-gradient-to-r ${product.color}`}></div>
              
              {/* Animated Background Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              <div className="p-8 relative z-10">
                <div className="flex items-center mb-4">
                  <span className="text-4xl mr-3 group-hover:animate-bounce">{product.icon}</span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 group-hover:text-nexshrim-blue transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-sm text-gray-500">{product.tagline}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-500 group-hover:text-gray-700 transition-colors">
                      <div className="w-2 h-2 bg-nexshrim-blue rounded-full mr-2 group-hover:animate-pulse"></div>
                      {feature}
                    </div>
                  ))}
                </div>
                
                {/* Learn More Button with Link */}
                {product.link ? (
                  <a href={product.link} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-gradient-to-r from-nexshrim-blue to-nexshrim-dark-blue hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                      <span className="relative z-10">Learn More</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </Button>
                  </a>
                ) : (
                  <Button className="w-full bg-gradient-to-r from-nexshrim-blue to-nexshrim-dark-blue hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                    <span className="relative z-10">Learn More</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Button>
                )}
              </div>
              
              {/* Floating Elements */}
              <div className="absolute top-4 right-4 w-8 h-8 border border-white/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-ping"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
