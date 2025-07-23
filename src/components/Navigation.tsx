import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-lg border-b border-gray-200' : 'bg-transparent backdrop-blur-md'}`}>
      <div className="container mx-auto px-6 w-full">
        <div className="flex items-center justify-between h-20 w-full">
          {/* Logo Section */}
          <div className="flex items-center group">
            <div className="relative">
              <img src="/lovable-uploads/de8b9fcf-cc14-4745-9b47-c3e181c55010.png" alt="Nexshrim Logo" className="h-56 w-auto transition-transform duration-300 group-hover:scale-105 drop-shadow-sm" />
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {[{
            name: 'Home',
            href: '#home'
          }, {
            name: 'Technologies',
            href: '#technologies'
          }, {
            name: 'Products',
            href: '#products'
          }, {
            name: 'Services',
            href: '#services'
          }, {
            name: 'About',
            href: '#about'
          }].map((item, index) => <a key={item.name} href={item.href} style={{
            animationDelay: `${index * 0.1}s`
          }} className={`relative transition-all duration-300 font-medium group py-2 ${isScrolled ? 'text-gray-700 hover:text-nexshrim-blue' : 'text-white hover:text-nexshrim-gold'}`}>
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-nexshrim-blue to-nexshrim-gold group-hover:w-full transition-all duration-300"></span>
              </a>)}
            
            <Button className="bg-gradient-to-r from-nexshrim-blue to-nexshrim-dark-blue hover:from-nexshrim-dark-blue hover:to-nexshrim-blue text-white px-6 py-2 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <span className={`block w-6 h-0.5 transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'} ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'} ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 mt-1.5 transition-all duration-300 ${isScrolled ? 'bg-gray-700' : 'bg-white'} ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="py-4 space-y-2 bg-white/95 backdrop-blur-xl rounded-lg border border-gray-200 mt-2 shadow-lg">
            {[{
            name: 'Home',
            href: '#home'
          }, {
            name: 'Technologies',
            href: '#technologies'
          }, {
            name: 'Products',
            href: '#products'
          }, {
            name: 'Services',
            href: '#services'
          }, {
            name: 'About',
            href: '#about'
          }].map(item => <a key={item.name} href={item.href} className="block px-4 py-3 text-gray-700 hover:text-nexshrim-blue hover:bg-gray-100 rounded-lg transition-all duration-200 font-medium" onClick={() => setIsMobileMenuOpen(false)}>
                {item.name}
              </a>)}
            <div className="px-4 pt-2">
              <Button className="w-full bg-gradient-to-r from-nexshrim-blue to-nexshrim-dark-blue text-white font-medium">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>;
};
export default Navigation;