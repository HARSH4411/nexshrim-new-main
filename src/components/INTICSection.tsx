import React, { useState, useEffect } from 'react';
const INTICSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const [fuelLevel, setFuelLevel] = useState(85);
  const [crashAlert, setCrashAlert] = useState(false);
  const [counters, setCounters] = useState({
    crashReduction: 0,
    fuelTheft: 0,
    twoWheelers: 0,
    trucks: 0
  });
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate counters on scroll
  useEffect(() => {
    const timer = setTimeout(() => {
      setCounters({
        crashReduction: 40,
        fuelTheft: 1800,
        twoWheelers: 250,
        trucks: 3.5
      });
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // Simulate real-time data
  useEffect(() => {
    const fuelTimer = setInterval(() => {
      setFuelLevel(prev => Math.max(20, prev - Math.random() * 2));
    }, 3000);
    const crashTimer = setInterval(() => {
      setCrashAlert(prev => !prev);
    }, 8000);
    return () => {
      clearInterval(fuelTimer);
      clearInterval(crashTimer);
    };
  }, []);
  const hardwareItems = [{
    name: "Cortex-A72 Edge Processing",
    icon: "🧠"
  }, {
    name: "Ultrasonic & IMU Sensors",
    icon: "📡"
  }, {
    name: "GPS + Compass + NFC/RFID",
    icon: "🛰️"
  }, {
    name: "Dual Dashcams with Night Vision",
    icon: "📹"
  }, {
    name: "CAN Bus & OBD-II Diagnostics",
    icon: "🔧"
  }, {
    name: "OTA Updates via Wi-Fi",
    icon: "📶"
  }];
  return <section className="relative min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-black text-white overflow-hidden">
      {/* Animated Smart City Skyline */}
      <div className="absolute inset-0 opacity-20">
        <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="xMidYMid slice">
          {/* City Buildings */}
          <rect x="0" y="400" width="100" height="200" fill="#1e40af" className="animate-pulse" />
          <rect x="120" y="350" width="80" height="250" fill="#2563eb" className="animate-pulse" style={{
          animationDelay: '0.5s'
        }} />
          <rect x="220" y="380" width="120" height="220" fill="#1e40af" className="animate-pulse" style={{
          animationDelay: '1s'
        }} />
          <rect x="360" y="320" width="90" height="280" fill="#2563eb" className="animate-pulse" style={{
          animationDelay: '1.5s'
        }} />
          <rect x="470" y="360" width="110" height="240" fill="#1e40af" className="animate-pulse" style={{
          animationDelay: '2s'
        }} />
          
          {/* Moving Vehicles */}
          <circle cx="50" cy="420" r="3" fill="#f59e0b" className="animate-[moveVehicle_8s_linear_infinite]" />
          <circle cx="150" cy="440" r="3" fill="#ef4444" className="animate-[moveVehicle_6s_linear_infinite]" style={{
          animationDelay: '2s'
        }} />
          <circle cx="250" cy="430" r="3" fill="#10b981" className="animate-[moveVehicle_10s_linear_infinite]" style={{
          animationDelay: '4s'
        }} />
          
          {/* Sensor Network Lines */}
          <path d="M100,450 Q300,350 500,450 T900,450" stroke="#3b82f6" strokeWidth="2" fill="none" className="animate-[dash_4s_linear_infinite]" strokeDasharray="10,5" />
          <path d="M200,480 Q400,380 600,480 T1000,480" stroke="#f59e0b" strokeWidth="2" fill="none" className="animate-[dash_6s_linear_infinite]" strokeDasharray="8,4" />
        </svg>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-glow-blue">
            INTIC
          </h2>
          <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-nexshrim-gold">
            Intelligent Transportation & Innovation Cluster
          </h3>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
            Where AI, IoT, and Analytics converge to redefine how India moves.
          </p>
        </div>

        {/* Floating Data Panels */}
        <div className="absolute top-20 right-10 space-y-4 z-20">
          <div className={`glass-card p-4 rounded-lg transition-all duration-500 ${fuelLevel < 30 ? 'border-red-500 animate-pulse' : 'border-blue-500'}`}>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">⛽</span>
              <div>
                <div className="text-sm text-gray-300">DriveTitan Fuel</div>
                <div className={`text-lg font-bold ${fuelLevel < 30 ? 'text-red-400' : 'text-green-400'}`}>
                  {fuelLevel.toFixed(1)}%
                </div>
              </div>
            </div>
          </div>

          <div className={`glass-card p-4 rounded-lg transition-all duration-500 ${crashAlert ? 'border-red-500 bg-red-500/20 animate-bounce' : 'border-green-500'}`}>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🚨</span>
              <div>
                <div className="text-sm text-gray-300">RideSense Alert</div>
                <div className={`text-lg font-bold ${crashAlert ? 'text-red-400' : 'text-green-400'}`}>
                  {crashAlert ? 'CRASH DETECTED' : 'ALL SAFE'}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto mb-16">
          <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-12">
            Backed by rigorous R&D and real-world problem-solving, INTIC is Nexshrim's mobility division 
            revolutionizing transportation with deep-tech solutions for riders, fleets, and logistics giants.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* RideSense Card */}
            <div className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4 group-hover:animate-bounce">
              </span>
                <div>
                  <h4 className="font-bold text-nexshrim-gold text-3xl">RideSense</h4>
                  <p className="text-lg text-gray-300">Smart Riding Redefined</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nexshrim-blue rounded-full mr-3"></span>
                  Motorcycle-mounted IoT cluster
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nexshrim-blue rounded-full mr-3"></span>
                  Real-time crash detection & anti-theft GPS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nexshrim-blue rounded-full mr-3"></span>
                  Emergency alert system for women's safety
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nexshrim-blue rounded-full mr-3"></span>
                  Integrated AI Ride Planner
                </li>
              </ul>

              {/* Bike Hologram Animation */}
              <div className="mt-6 p-4 bg-blue-500/10 rounded-lg">
                <div className="flex justify-between items-center text-sm">
                  <span>System Health</span>
                  <span className="text-green-400 animate-pulse">98%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                  <div className="bg-green-400 h-2 rounded-full w-[98%] animate-[fillBar_2s_ease-out]"></div>
                </div>
              </div>
            </div>

            {/* DriveTitan Card */}
            <div className="glass-card p-8 rounded-xl hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4 group-hover:animate-bounce">
              </span>
                <div>
                  <h4 className="font-bold text-nexshrim-gold text-3xl">DriveTitan</h4>
                  <p className="text-lg text-gray-300">Fleet Intelligence Engine</p>
                </div>
              </div>
              
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nexshrim-gold rounded-full mr-3"></span>
                  Built for logistics & rideshare operators
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nexshrim-gold rounded-full mr-3"></span>
                  AI-powered route optimization
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nexshrim-gold rounded-full mr-3"></span>
                  Fuel theft prevention with sensors
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-nexshrim-gold rounded-full mr-3"></span>
                  Driver behavior analytics
                </li>
              </ul>

              {/* Route Optimization Animation */}
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg">
                <div className="flex justify-between items-center text-sm mb-2">
                  <span>Route Status</span>
                  <span className="text-green-400">Optimized</span>
                </div>
                <svg className="w-full h-12" viewBox="0 0 200 40">
                  <path d="M10,20 Q50,10 100,20 T190,20" stroke="#ef4444" strokeWidth="3" fill="none" className="animate-[fadeOut_2s_ease-out]" />
                  <path d="M10,20 Q50,30 100,20 T190,20" stroke="#10b981" strokeWidth="3" fill="none" className="animate-[fadeIn_2s_ease-out_1s_both]" />
                </svg>
              </div>
            </div>
          </div>

          {/* Metrics Cards */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="text-center glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-nexshrim-blue mb-2 animate-[countUp_3s_ease-out]">
                {counters.crashReduction}%
              </div>
              <div className="text-sm text-gray-300">Reduction in Crash Fatalities</div>
            </div>
            
            <div className="text-center glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-nexshrim-gold mb-2 animate-[countUp_3s_ease-out]">
                ₹{counters.fuelTheft}Cr
              </div>
              <div className="text-sm text-gray-300">Fuel Theft Solved</div>
            </div>
            
            <div className="text-center glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-nexshrim-blue mb-2 animate-[countUp_3s_ease-out]">
                {counters.twoWheelers}M+
              </div>
              <div className="text-sm text-gray-300">Two-Wheelers Ready</div>
            </div>
            
            <div className="text-center glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300">
              <div className="text-3xl md:text-4xl font-bold text-nexshrim-gold mb-2 animate-[countUp_3s_ease-out]">
                {counters.trucks}M
              </div>
              <div className="text-sm text-gray-300">Trucks for Titan</div>
            </div>
          </div>

          {/* Hardware Suite */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-8 text-glow-blue">Under the Hood</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {hardwareItems.map((item, index) => <div key={index} className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 group cursor-pointer" style={{
              animationDelay: `${index * 0.2}s`
            }}>
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl group-hover:animate-pulse">{item.icon}</span>
                    <span className="text-lg font-semibold group-hover:text-nexshrim-gold transition-colors duration-300">
                      {item.name}
                    </span>
                  </div>
                </div>)}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-8 text-glow-gold">Get Involved</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <button className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:bg-nexshrim-blue/20 group">
                <div className="text-xl font-semibold group-hover:text-nexshrim-blue transition-colors duration-300">
                  Become a Pilot Fleet Partner
                </div>
              </button>
              
              <button className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:bg-nexshrim-gold/20 group">
                <div className="text-xl font-semibold group-hover:text-nexshrim-gold transition-colors duration-300">
                  View Live Dashboard Demo
                </div>
              </button>
              
              <button className="glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 hover:bg-nexshrim-blue/20 group">
                <div className="text-xl font-semibold group-hover:text-nexshrim-blue transition-colors duration-300">
                  Download RideSense App
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default INTICSection;