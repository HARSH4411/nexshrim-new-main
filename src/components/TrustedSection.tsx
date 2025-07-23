
import React from 'react';
import { Award, Shield, GraduationCap } from 'lucide-react';

const TrustedSection = () => {
  // Using actual uploaded logos with new names
  const trustedLogos = [
    { name: "Microsoft", url: "/lovable-uploads/logos/Microsoft-Logo.png" },
    { name: "Google", url: "/lovable-uploads/logos/Google-Logo.png" },
    { name: "NVIDIA", url: "/lovable-uploads/logos/nividia-logo.png" },
    { name: "Oracle", url: "/lovable-uploads/logos/oracle-vector-logo.png" },
    { name: "Tata", url: "/lovable-uploads/logos/tata-logo.svg" },
    { name: "Government of India", url: "/lovable-uploads/logos/Government_of_India_logo.svg.png" },
    { name: "NITI Aayog", url: "/lovable-uploads/logos/NITI_Aayog_logo.svg.png" },
    { name: "Ministry of Science and Technology", url: "/lovable-uploads/logos/Ministry_of_Science_and_Technology_India.svg" },
    { name: "Government of Chhattisgarh", url: "/lovable-uploads/logos/gov of Chhattisgarh.svg" },
    { name: "Ministry of Commerce", url: "/lovable-uploads/logos/Ministry_of_Commerce_and_Industry.svg.png" },
    { name: "Startup India", url: "/lovable-uploads/logos/Startup-India-Logo.webp" },
    { name: "MSME", url: "/lovable-uploads/logos/msme-logo.png" },
    { name: "STPI", url: "/lovable-uploads/logos/STPI_Preview.png" },
    { name: "AICTE", url: "/lovable-uploads/logos/aicte.png" },
    { name: "IIT Bhilai", url: "/lovable-uploads/logos/IIT_Bhilai_Logo.png" },
    { name: "IIT BHU", url: "/lovable-uploads/logos/IIT-BHU_Logo.svg.png" },
    { name: "CSVTU", url: "/lovable-uploads/logos/csvtu.png" },
    { name: "SSTC", url: "/lovable-uploads/logos/sstc.png" },
    { name: "GGV", url: "/lovable-uploads/logos/GGV-logo.png" },
    { name: "EECG", url: "/lovable-uploads/logos/eecg.jpg" }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted & Awarded Globally
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Recognized globally for reliability, innovation, and growth exceeding Google, Amazon, and ServiceNow. 
            From <span className="text-nexshrim-blue font-semibold">FinTech innovation</span> to 
            <span className="text-nexshrim-gold font-semibold"> EdTech excellence with Internity</span>, 
            we're building India's digital future.
          </p>
          <p className="text-lg text-gray-500 mt-4 font-medium">Building Revolutions</p>
          <div className="mt-4">
            <a 
              href="https://www.theinternity.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-nexshrim-blue hover:text-nexshrim-dark-blue transition-colors duration-300"
            >
              <GraduationCap className="mr-2" size={20} />
              Visit Internity - Our EdTech Platform
              <span className="ml-2">→</span>
            </a>
          </div>
        </div>
        
        {/* Awards & Recognition Banner */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-8 bg-white rounded-2xl shadow-lg px-8 py-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center">
                <Award className="text-white" size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Financial Times</p>
                <p className="text-sm text-gray-600">3-Year Champion</p>
              </div>
            </div>
            
            <div className="w-px h-12 bg-gray-200"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-red-700 rounded-full flex items-center justify-center">
                <Shield className="text-white" size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Newsweek</p>
                <p className="text-sm text-gray-600">Most Reliable</p>
              </div>
            </div>
            
            <div className="w-px h-12 bg-gray-200"></div>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-700 rounded-full flex items-center justify-center">
                <GraduationCap className="text-white" size={20} />
              </div>
              <div>
                <p className="font-bold text-gray-900">Inc. 5000</p>
                <p className="text-sm text-gray-600">Fastest Growing</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted By Logos Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-gray-900">Trusted By Industry Leaders</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {trustedLogos.map((logo, index) => (
              <div 
                key={logo.name} 
                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105 aspect-square flex items-center justify-center"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src={logo.url} 
                    alt={logo.name}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                    onError={(e) => {
                      console.log(`Failed to load: ${logo.url}`);
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications & Partnerships */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-nexshrim-blue to-nexshrim-dark-blue p-8 rounded-xl text-white hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Industry Recognition</h3>
              <p className="text-blue-100 text-sm">
                Featured in Financial Times, Newsweek, and Inc. 5000 for consistent growth and innovation excellence.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-nexshrim-gold to-yellow-600 p-8 rounded-xl text-white hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">Certifications</h3>
              <p className="text-yellow-100 text-sm">
                ISO 9001, ISO 27001, AWS & Microsoft partnerships ensuring world-class quality and security standards.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-xl text-white hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <GraduationCap className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3">EdTech Leadership</h3>
              <p className="text-purple-100 text-sm">
                Powering education through Internity - transforming how students learn and professionals grow.
              </p>
            </div>
          </div>
        </div>
        
        {/* Stats Row */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in">
            <div className="text-3xl md:text-4xl font-bold text-nexshrim-blue mb-2">500+</div>
            <p className="text-gray-600">Enterprise Clients</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl md:text-4xl font-bold text-nexshrim-gold mb-2">50M+</div>
            <p className="text-gray-600">Transactions Processed</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl md:text-4xl font-bold text-nexshrim-blue mb-2">99.9%</div>
            <p className="text-gray-600">Uptime Guarantee</p>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl md:text-4xl font-bold text-nexshrim-gold mb-2">24/7</div>
            <p className="text-gray-600">Global Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedSection;
