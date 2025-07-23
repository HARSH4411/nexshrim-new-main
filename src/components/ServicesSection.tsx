import React from 'react';
const ServicesSection = () => {
  const services = ["Enterprise applications", "ERP", "Financial management", "Supply chain management", "Asset management", "Fleet management", "HR software", "eLearning software", "eCommerce", "Mobile apps", "Content management", "Document management", "CRM", "Marketing & advertising", "Web portals", "Data analytics"];
  const coreServices = [{
    title: "Custom Software Development",
    description: "Tailored solutions built to your exact specifications"
  }, {
    title: "AI/ML Model Integration",
    description: "Intelligent automation and predictive analytics"
  }, {
    title: "AR/VR Solutions",
    description: "Immersive experiences and 3D visualizations"
  }, {
    title: "Biometric Integration",
    description: "Secure authentication and identity verification"
  }, {
    title: "Cloud Backend & DevOps",
    description: "Scalable infrastructure and deployment automation"
  }, {
    title: "UPI & Financial Tech",
    description: "Payment gateways and financial integrations"
  }];
  return <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Services & Industries
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive technology solutions across diverse industry verticals.
          </p>
        </div>
        
        {/* Industries Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">Industries We Serve</h3>
          <div className="mb-8">
            
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => <div key={service} className="bg-gray-50 p-4 rounded-lg text-center hover:bg-nexshrim-blue hover:text-white transition-all duration-300 cursor-pointer group" style={{
            animationDelay: `${index * 0.05}s`
          }}>
                <span className="text-sm font-medium">{service}</span>
                <div className="w-6 h-6 mx-auto mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </div>
              </div>)}
          </div>
        </div>
        
        {/* Core Services */}
        <div>
          <h3 className="text-2xl font-bold text-center mb-12 text-gray-900">Core Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => <div key={service.title} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl hover:shadow-lg transition-all duration-300 group" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-nexshrim-blue transition-colors">
                  {service.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
                <div className="mt-4 w-8 h-1 bg-nexshrim-gold rounded-full group-hover:w-16 transition-all duration-300"></div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default ServicesSection;