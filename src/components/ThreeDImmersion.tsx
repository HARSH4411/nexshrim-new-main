
import React, { useState } from 'react';

const ThreeDImmersion = () => {
  const [activeCategory, setActiveCategory] = useState('realestate');

  const categories = {
    realestate: {
      icon: "🏠",
      title: "Real Estate",
      description: "Immersive property visualization and virtual tours",
      models: ["Modern Villa", "Apartment Complex", "Commercial Space", "Interior Design"]
    },
    education: {
      icon: "🎓",
      title: "Education", 
      description: "Interactive learning environments and simulations",
      models: ["Virtual Classroom", "Lab Simulation", "Historical Sites", "3D Anatomy"]
    },
    simulation: {
      icon: "🔬",
      title: "Simulation",
      description: "Professional training and industrial simulations", 
      models: ["Flight Training", "Medical Surgery", "Factory Floor", "Safety Protocols"]
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-orange-900 via-red-900 to-purple-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow-gold">
            3D Bhomi: Where Real Meets Unreal
          </h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Immersive AR/VR solutions transforming visualization across industries.
          </p>
        </div>

        {/* Category Switcher */}
        <div className="flex justify-center mb-12">
          <div className="bg-black/40 rounded-2xl p-2 backdrop-blur-md border border-orange-500/30">
            {Object.entries(categories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 mx-1 ${
                  activeCategory === key
                    ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)]'
                    : 'text-gray-300 hover:text-white hover:bg-white/10'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Interactive 3D Model Container */}
          <div className="relative">
            <div className="bg-black/40 rounded-2xl p-8 backdrop-blur-md border border-orange-500/30">
              <h3 className="text-2xl font-bold mb-4 text-center text-orange-400">
                Interactive 3D Virtual Tour
              </h3>
              
              {/* Matterport Iframe */}
              <div className="relative w-full h-96 rounded-lg overflow-hidden border border-orange-500/50">
                <iframe
                  src="https://my.matterport.com/show/?m=uhzdkHdksei&play=1"
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                  title="3D Virtual Tour"
                />
              </div>
              
              <p className="text-center text-gray-300 mt-4 text-sm">
                Experience immersive 3D spaces with our advanced visualization technology
              </p>
            </div>
          </div>

          {/* Category Details */}
          <div className="space-y-6">
            <div className="animate-[fadeInUp_0.5s_ease-out]">
              <h3 className="text-3xl font-bold mb-4 flex items-center">
                <span className="text-4xl mr-3">{categories[activeCategory as keyof typeof categories].icon}</span>
                {categories[activeCategory as keyof typeof categories].title}
              </h3>
              <p className="text-xl text-gray-200 mb-8">
                {categories[activeCategory as keyof typeof categories].description}
              </p>
            </div>

            {/* Model Gallery */}
            <div className="grid grid-cols-2 gap-4">
              {categories[activeCategory as keyof typeof categories].models.map((model, index) => (
                <div
                  key={model}
                  className="group bg-gradient-to-br from-orange-500/20 to-red-500/20 p-4 rounded-xl border border-orange-500/30 hover:border-orange-500 transition-all duration-300 hover:scale-105 cursor-pointer"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-2 group-hover:animate-bounce">🔮</div>
                    <h4 className="font-semibold text-sm group-hover:text-orange-400 transition-colors">
                      {model}
                    </h4>
                  </div>
                  
                  {/* Hover Effect */}
                  <div className="mt-3 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
                </div>
              ))}
            </div>

            {/* AR/VR Toggle */}
            <div className="flex justify-center space-x-4 mt-8">
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
                onClick={() => window.open('/3d-bhumi/index.html', '_blank')}
              >
                VR Mode
              </button>
              <button
                className="bg-gradient-to-r from-green-500 to-teal-500 px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(16,185,129,0.4)]"
                onClick={() => window.open('/3d-bhumi/index.html', '_blank')}
              >
                AR Mode
              </button>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold mb-8 text-orange-400">Powered by Advanced Technology</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "⚡", title: "WebGL Rendering", desc: "High-performance 3D graphics" },
              { icon: "🤖", title: "AI-Powered", desc: "Intelligent scene optimization" },
              { icon: "☁️", title: "Cloud Integration", desc: "Scalable model storage" }
            ].map((tech, index) => (
              <div
                key={index}
                className="glass-card p-6 hover:scale-105 transition-transform duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-orange-400">{tech.title}</h4>
                <p className="text-gray-300 text-sm">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThreeDImmersion;
