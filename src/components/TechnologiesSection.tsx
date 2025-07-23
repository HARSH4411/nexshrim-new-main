
import React from 'react';

const TechnologiesSection = () => {
  const technologies = [
    {
      icon: "🧠",
      title: "Artificial Intelligence",
      description: "Machine Learning, Deep Learning, NLP, Image Recognition, Robotics",
      isActive: true
    },
    {
      icon: "🔗",
      title: "Blockchain",
      description: "Decentralized applications, smart contracts, and secure transactions",
      isActive: true
    },
    {
      icon: "📊",
      title: "Big Data",
      description: "Data analytics, processing, and intelligent insights at scale",
      isActive: true
    },
    {
      icon: "👁️",
      title: "Computer Vision",
      description: "Advanced image processing, recognition, and visual intelligence",
      isActive: true
    },
    {
      icon: "🥽",
      title: "Mixed Reality",
      description: "AR/VR solutions, 3D modeling, and immersive experiences",
      isActive: true
    },
    {
      icon: "🌐",
      title: "Internet of Things",
      description: "Connected devices, smart sensors, and IoT ecosystems",
      isActive: true
    }
  ];

  return (
    <section id="technologies" className="py-20 bg-gradient-to-br from-nexshrim-dark-blue via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Glowing Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-nexshrim-blue/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-nexshrim-gold/20 rounded-full filter blur-3xl animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Technologies We Master
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            From AI-driven automation to immersive XR and secure biometric transactions, 
            our tech ecosystem powers the next generation of industries.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div 
              key={tech.title} 
              className="group relative overflow-hidden rounded-xl p-8 transition-all duration-500 hover:scale-105 cursor-pointer bg-gradient-to-br from-nexshrim-blue/20 to-nexshrim-dark-blue/20 text-white border border-nexshrim-blue/30 hover:border-nexshrim-gold backdrop-blur-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl mb-4 animate-float">
                {tech.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-white group-hover:text-nexshrim-gold transition-colors duration-300">
                {tech.title}
              </h3>
              
              <p className="text-sm leading-relaxed text-gray-200">
                {tech.description}
              </p>
              
              <div className="absolute bottom-4 left-8 right-8">
                <div className="w-full h-1 bg-nexshrim-gold/50 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
              
              <div className="absolute -bottom-2 -right-2 w-20 h-20 bg-nexshrim-gold/10 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
              
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-nexshrim-blue/10 to-nexshrim-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
