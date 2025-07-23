
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/de8b9fcf-cc14-4745-9b47-c3e181c55010.png" 
                alt="Nexshrim Logo" 
                className="h-16 w-auto"
              />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Engineering the future through innovative AI, AR/VR, biometric payments, 
              gaming, and mobility solutions. Trusted by enterprises worldwide.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-nexshrim-blue rounded-full flex items-center justify-center hover:bg-nexshrim-gold transition-colors cursor-pointer">
                <span className="text-sm">Li</span>
              </div>
              <div className="w-10 h-10 bg-nexshrim-blue rounded-full flex items-center justify-center hover:bg-nexshrim-gold transition-colors cursor-pointer">
                <span className="text-sm">Tw</span>
              </div>
              <div className="w-10 h-10 bg-nexshrim-blue rounded-full flex items-center justify-center hover:bg-nexshrim-gold transition-colors cursor-pointer">
                <span className="text-sm">In</span>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#home" className="hover:text-nexshrim-gold transition-colors">Home</a></li>
              <li><a href="#technologies" className="hover:text-nexshrim-gold transition-colors">Technologies</a></li>
              <li><a href="#products" className="hover:text-nexshrim-gold transition-colors">Products</a></li>
              <li><a href="#services" className="hover:text-nexshrim-gold transition-colors">Services</a></li>
              <li><a href="#contact" className="hover:text-nexshrim-gold transition-colors">Contact</a></li>
            </ul>
          </div>
          
          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-nexshrim-gold transition-colors">IrisPay</a></li>
              <li><a href="#" className="hover:text-nexshrim-gold transition-colors">RideSense</a></li>
              <li><a href="#" className="hover:text-nexshrim-gold transition-colors">DriveTitan</a></li>
              <li><a href="#" className="hover:text-nexshrim-gold transition-colors">Rebel Head</a></li>
              <li><a href="#" className="hover:text-nexshrim-gold transition-colors">3D Bhomi</a></li>
              <li><a href="#" className="hover:text-nexshrim-gold transition-colors">NexHR</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} Nexshrim Technologies Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-nexshrim-gold transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-nexshrim-gold transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-nexshrim-gold transition-colors">Careers</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
