
import React, { useRef, useEffect, useState } from 'react';

const InteractiveTimeline = () => {
  const timelineRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0); // 0 to 1

  const milestones = [
    {
      year: "2024",
      title: "Foundation",
      description: "Nexshrim Technologies founded revolutionizing Indian tech landscape.\nBuilding foundation for next-generation digital solutions.",
      icon: "🚀"
    },
    {
      year: "2024",
      title: "DriveTitan / RideSense",
      description: "Advanced driving analytics mobility intelligence platform launched.\nEnsuring safer roads with cutting-edge vehicle monitoring technology.",
      icon: "🚗"
    },
    {
      year: "2024",
      title: "Rebel Head",
      description: "India's rawest gaming brand launched with cutting-edge accessories.\nRevolutionizing gaming experience with premium hardware solutions.",
      icon: "🎮"
    },
    {
      year: "2024",
      title: "3D Bhoomi",
      description: "Immersive AR/VR solutions transforming real estate education sectors.\nBringing virtual reality experiences to mainstream applications.",
      icon: "🌐"
    },
    {
      year: "2025",
      title: "Internity",
      description: "Revolutionary EdTech platform transforming how students learn grow.\nEmpowering next generation with innovative educational technology solutions.",
      icon: "🎓"
    },
    {
      year: "2025",
      title: "NexHR",
      description: "Next-generation HR management system deployed enterprises nationwide.\nStreamlining human resource operations with intelligent automation analytics.",
      icon: "👥"
    },
    {
      year: "2025",
      title: "Future Expansion - Destiny",
      description: "Launching comprehensive mobility logistics solutions modern businesses.\nIntegrating AI-powered systems optimize transportation delivery networks.",
      icon: "🌟"
    },
    {
      year: "2025",
      title: "Future Expansion",
      description: "Global expansion next-generation AI innovations across verticals.\nEstablishing international presence while pioneering breakthrough technologies.",
      icon: "🚀"
    }
  ];

  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const handleScroll = () => {
      const rect = timeline.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      // Calculate progress: 0 when timeline top is at bottom of viewport, 1 when timeline bottom is at top of viewport
      const totalHeight = rect.height;
      const visible = Math.min(windowHeight, rect.bottom) - Math.max(0, rect.top);
      let rawProgress = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        rawProgress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight + totalHeight)));
      }
      setProgress(rawProgress);
      // Card logic (keep as before)
      const newIndex = Math.floor(rawProgress * milestones.length * 1.1); // 1.1 to show last card a bit earlier
      setActiveIndex(Math.min(newIndex, milestones.length - 1));
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial
    return () => window.removeEventListener('scroll', handleScroll);
  }, [milestones.length]);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow-blue">Our Journey</h2>
          <p className="text-xl text-gray-300">Milestones in our technological revolution</p>
        </div>

        <div 
          ref={timelineRef}
          className="relative"
        >
          {/* Timeline Line (Background) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-nexshrim-blue via-nexshrim-gold to-nexshrim-blue opacity-30"></div>
          {/* Timeline Line (Animated Foreground) */}
          <div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-nexshrim-blue via-nexshrim-gold to-nexshrim-blue"
            style={{
              height: `${progress * 100}%`,
              transition: 'height 0.7s cubic-bezier(0.4,0,0.2,1)'
            }}
          ></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative transition-all duration-1000 ${
                  index <= activeIndex ? 'opacity-100 transform translate-y-0' : 'opacity-30 transform translate-y-8'
                }`}
              >
                {/* Milestone Marker */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4">
                  <div className={`w-8 h-8 rounded-full border-4 transition-all duration-500 ${
                    index <= activeIndex 
                      ? 'bg-nexshrim-gold border-nexshrim-gold shadow-[0_0_20px_rgba(245,158,11,0.6)]' 
                      : 'bg-gray-600 border-gray-600'
                  }`}>
                    {index <= activeIndex && (
                      <div className="absolute inset-0 rounded-full bg-nexshrim-gold animate-ping opacity-75"></div>
                    )}
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                    <div className={`glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 magnetic ${
                      index <= activeIndex ? 'hover:shadow-[0_0_30px_rgba(59,130,246,0.3)]' : ''
                    }`}>
                      <div className="flex items-center mb-4">
                        <span className="text-3xl mr-3 animate-bounce">{milestone.icon}</span>
                        <div>
                          <h3 className="text-2xl font-bold text-nexshrim-gold">{milestone.year}</h3>
                          <h4 className="text-lg font-semibold text-white">{milestone.title}</h4>
                        </div>
                      </div>
                      <div className="text-gray-300">
                        {milestone.description.split('\n').map((line, i) => (
                          <p key={i} className={i > 0 ? 'mt-2' : ''}>{line}</p>
                        ))}
                      </div>
                      {/* Ripple Effect */}
                      {index <= activeIndex && (
                        <div className="absolute inset-0 rounded-xl bg-nexshrim-blue/10 animate-[ripple_2s_ease-out_infinite]"></div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTimeline;
