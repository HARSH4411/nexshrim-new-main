
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const RDServicesSection = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);

  const services = [
    'Embedded Systems Prototyping',
    'AI + ML Research & POC Development', 
    'AR/VR Application Simulation',
    'Web + App MVPs',
    'Sensor + Module Testing + Integration',
    'Data-Powered Market Research',
    'Lab-to-Launch Consulting'
  ];

  const processSteps = [
    { step: 1, title: 'Submit Idea', description: 'via QR or contact', icon: '💡' },
    { step: 2, title: 'Feasibility Call', description: '24-48 hrs', icon: '📞' },
    { step: 3, title: 'Prototype in 30 Days', description: 'Demo ready', icon: '🔧' },
    { step: 4, title: 'Launch or License', description: 'Scale with us', icon: '🚀' }
  ];

  const techStack = [
    'Jetson', 'ESP32', 'TensorFlow', 'React', 'Supabase', 
    'Unity', 'OpenCV', 'Python', 'Firebase', 'WebXR'
  ];

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Blueprint Background */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1000 1000" preserveAspectRatio="xMidYMid slice">
          <defs>
            <pattern id="blueprint-grid" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#3b82f6" strokeWidth="1" opacity="0.3"/>
            </pattern>
            <linearGradient id="circuit-glow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="50%" stopColor="#f59e0b" />
              <stop offset="100%" stopColor="#3b82f6" />
            </linearGradient>
          </defs>
          
          <rect width="100%" height="100%" fill="url(#blueprint-grid)" />
          
          {/* Moving Circuit Lines */}
          <g className="animate-pulse">
            <path d="M100,200 Q300,100 500,200 T900,200" stroke="url(#circuit-glow)" strokeWidth="2" fill="none" className="animate-[dash_6s_linear_infinite]" strokeDasharray="10,5" />
            <path d="M100,400 Q300,300 500,400 T900,400" stroke="url(#circuit-glow)" strokeWidth="2" fill="none" className="animate-[dash_8s_linear_infinite]" strokeDasharray="15,10" />
            <path d="M100,600 Q300,500 500,600 T900,600" stroke="url(#circuit-glow)" strokeWidth="2" fill="none" className="animate-[dash_10s_linear_infinite]" strokeDasharray="20,15" />
          </g>
          
          {/* Circuit Nodes */}
          <circle cx="200" cy="200" r="6" fill="#f59e0b" className="animate-pulse" />
          <circle cx="500" cy="400" r="6" fill="#3b82f6" className="animate-pulse" />
          <circle cx="800" cy="600" r="6" fill="#f59e0b" className="animate-pulse" />
        </svg>
      </div>

      {/* Central Hub Pulse */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-30">
        <div className="w-32 h-32 border-2 border-nexshrim-gold rounded-full animate-ping"></div>
        <div className="absolute inset-0 flex items-center justify-center text-nexshrim-gold font-bold text-lg">
          NEXSHRIM R&D LAB
        </div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-nexshrim-blue to-nexshrim-gold bg-clip-text text-transparent">
            R&D as a Service
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-blue-300">
            Bring Us Your Problem, We'll Prototype the Future
          </h2>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Whether it's a mobility device, a payment engine, a sensor-integrated IoT product, or a web platform,
            we turn whiteboard ideas into working systems.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-nexshrim-gold">
            We Offer
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={service}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-nexshrim-gold transition-all duration-300 transform hover:scale-105 animate-slide-in-left cursor-pointer"
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredService(service)}
                onMouseLeave={() => setHoveredService(null)}
              >
                <div className="flex items-center space-x-3">
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    hoveredService === service ? 'bg-nexshrim-gold animate-pulse' : 'bg-nexshrim-blue'
                  }`}></div>
                  <span className="text-white font-medium">{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Animation */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12 text-nexshrim-gold">
            Our Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className="text-center group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gradient-to-br from-nexshrim-blue to-nexshrim-gold rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-nexshrim-gold rounded-full flex items-center justify-center text-black font-bold text-sm">
                    {step.step}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-white mb-2">{step.title}</h4>
                <p className="text-gray-300">{step.description}</p>
                
                {/* Connection Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-nexshrim-blue to-transparent transform translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-center mb-8 text-nexshrim-gold">
            Tech Stack We Love
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <div
                key={tech}
                className="bg-gradient-to-r from-gray-800 to-gray-700 px-4 py-2 rounded-full text-white font-medium border border-nexshrim-blue/30 hover:border-nexshrim-gold hover:scale-110 transition-all duration-300 animate-slide-in-right"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {tech}
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
          <Button size="lg" className="bg-nexshrim-gold hover:bg-yellow-500 text-black font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
            Start R&D Project
          </Button>
          <Button size="lg" variant="outline" className="border-2 border-nexshrim-blue text-nexshrim-blue hover:bg-nexshrim-blue hover:text-white font-bold px-8 py-4 text-lg transform hover:scale-105 transition-all duration-300">
            See Our Lab Work
          </Button>
        </div>
      </div>
    </section>
  );
};

export default RDServicesSection;
