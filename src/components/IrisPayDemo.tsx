import React, { useState, useEffect } from 'react';
const IrisPayDemo = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const steps = [{
    title: "Aadhaar Input",
    icon: "🆔",
    description: "Customer provides Aadhaar number"
  }, {
    title: "Iris Scan",
    icon: "👁️",
    description: "Advanced biometric authentication"
  }, {
    title: "UPI Payment",
    icon: "💳",
    description: "Secure payment processing"
  }, {
    title: "Confirmation",
    icon: "✅",
    description: "Transaction completed successfully"
  }];
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('irispay-demo');
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / window.innerHeight));
      if (progress > 0.3 && !isAnimating) {
        setIsAnimating(true);
        let step = 0;
        const interval = setInterval(() => {
          setCurrentStep(step);
          step++;
          if (step >= steps.length) {
            clearInterval(interval);
            setTimeout(() => {
              setCurrentStep(0);
              setIsAnimating(false);
            }, 2000);
          }
        }, 1500);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isAnimating, steps.length]);
  return <section id="irispay-demo" className="py-20 bg-gradient-to-br from-green-900 via-teal-900 to-blue-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow-blue"> IrisPay: The Future of Payments</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            World's first Aadhaar-linked biometric wallet. No phone, no card – just look & pay.
          </p>
        </div>

        {/* Payment Flow Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Demo Animation */}
          <div className="relative">
            <div className="bg-black/40 rounded-2xl p-8 backdrop-blur-md border border-green-500/30">
              <h3 className="text-2xl font-bold mb-8 text-center text-green-400">Live Payment Demo</h3>
              
              {/* Payment Flow Steps */}
              <div className="space-y-6">
                {steps.map((step, index) => <div key={index} className={`flex items-center p-4 rounded-lg transition-all duration-1000 ${index <= currentStep ? 'bg-green-500/20 border-l-4 border-green-500 transform scale-105' : 'bg-gray-800/50 border-l-4 border-gray-600'}`}>
                    <div className={`text-3xl mr-4 transition-all duration-500 ${index === currentStep ? 'animate-bounce' : ''}`}>
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <p className="text-gray-300 text-sm">{step.description}</p>
                    </div>
                    {index <= currentStep && <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>}
                  </div>)}
              </div>

              {/* Iris Scanner Animation */}
              {currentStep === 1 && <div className="mt-8 flex justify-center">
                  <div className="relative">
                    <div className="w-32 h-32 border-4 border-green-500 rounded-full animate-pulse"></div>
                    <div className="absolute inset-4 border-2 border-green-400 rounded-full animate-spin"></div>
                    <div className="absolute inset-8 border border-green-300 rounded-full animate-ping"></div>
                    <div className="absolute inset-0 flex items-center justify-center text-4xl">👁️</div>
                  </div>
                </div>}
            </div>
          </div>

          {/* Payment Journey SVG */}
          <div className="relative">
            <svg className="w-full h-96" viewBox="0 0 400 300">
              {/* User */}
              <g className={`transition-all duration-1000 ${currentStep >= 0 ? 'opacity-100' : 'opacity-30'}`}>
                <circle cx="50" cy="150" r="20" fill="#10b981" />
                <text x="50" y="180" textAnchor="middle" fill="white" fontSize="12">User</text>
              </g>

              {/* Arrow 1: User to Scanner */}
              <path d="M 80 150 Q 150 120 220 150" stroke="#10b981" strokeWidth="3" fill="none" className={`transition-all duration-1000 ${currentStep >= 1 ? 'opacity-100' : 'opacity-30'}`} strokeDasharray="10,5" style={{
              animation: currentStep >= 1 ? 'dash 2s linear infinite' : 'none'
            }} />

              {/* Scanner */}
              <g className={`transition-all duration-1000 ${currentStep >= 1 ? 'opacity-100' : 'opacity-30'}`}>
                <rect x="210" y="130" width="40" height="40" fill="#3b82f6" rx="5" />
                <text x="230" y="185" textAnchor="middle" fill="white" fontSize="12">Scanner</text>
              </g>

              {/* Arrow 2: Scanner to Bank */}
              <path d="M 260 150 Q 300 100 340 150" stroke="#f59e0b" strokeWidth="3" fill="none" className={`transition-all duration-1000 ${currentStep >= 2 ? 'opacity-100' : 'opacity-30'}`} strokeDasharray="10,5" style={{
              animation: currentStep >= 2 ? 'dash 2s linear infinite' : 'none'
            }} />

              {/* Bank */}
              <g className={`transition-all duration-1000 ${currentStep >= 2 ? 'opacity-100' : 'opacity-30'}`}>
                <rect x="320" y="130" width="40" height="40" fill="#f59e0b" rx="5" />
                <text x="340" y="185" textAnchor="middle" fill="white" fontSize="12">Bank</text>
              </g>

              {/* Success Animation */}
              {currentStep >= 3 && <g className="animate-[fadeInUp_1s_ease-out]">
                  <circle cx="200" cy="250" r="30" fill="#10b981" opacity="0.8" />
                  <text x="200" y="258" textAnchor="middle" fill="white" fontSize="20">✓</text>
                  <text x="200" y="280" textAnchor="middle" fill="white" fontSize="12">Payment Success</text>
                </g>}
            </svg>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-6">
          {[{
          icon: "🔒",
          title: "Secure",
          desc: "Biometric authentication"
        }, {
          icon: "⚡",
          title: "Fast",
          desc: "2-second payments"
        }, {
          icon: "📱",
          title: "Device-less",
          desc: "No phone required"
        }, {
          icon: "🏦",
          title: "UPI Compatible",
          desc: "Works with all banks"
        }].map((feature, index) => <div key={index} className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="text-4xl mb-3">{feature.icon}</div>
              <h4 className="font-bold text-lg mb-2 text-green-400">{feature.title}</h4>
              <p className="text-gray-300 text-sm">{feature.desc}</p>
            </div>)}
        </div>
      </div>
    </section>;
};
export default IrisPayDemo;