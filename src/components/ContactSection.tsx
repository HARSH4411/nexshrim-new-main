
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-nexshrim-dark-blue to-nexshrim-blue relative overflow-hidden">
      {/* Cyberpunk Background Effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-nexshrim-gold to-transparent animate-pulse"
              style={{
                left: `${(i * 5)}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <div className="text-white animate-slide-in-left">
            <h2 className="text-4xl font-bold mb-6 text-glow-blue">
              Let's Build the Future Together
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Ready to transform your business with cutting-edge technology? 
              Get in touch with our innovation experts.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center group hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-nexshrim-gold to-yellow-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  📧
                </div>
                <div>
                  <p className="font-semibold">Email</p>
                  <p className="text-gray-200">director@nexshrimtechnology.com</p>
                </div>
              </div>
              
              <div className="flex items-center group hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-nexshrim-gold to-yellow-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  📞
                </div>
                <div>
                  <p className="font-semibold">Phone</p>
                  <p className="text-gray-200">+91 6232075690</p>
                </div>
              </div>
              
              <div className="flex items-center group hover:bg-white/10 p-3 rounded-lg transition-all duration-300">
                <div className="w-12 h-12 bg-gradient-to-r from-nexshrim-gold to-yellow-500 rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                  📍
                </div>
                <div>
                  <p className="font-semibold">Office</p>
                  <p className="text-gray-200">Hno 1001 Kripal Nagar Kokha Bhilai</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Cyberpunk Contact Form */}
          <div className="glass-card rounded-xl p-8 shadow-2xl animate-slide-in-right bg-black/30 backdrop-blur-md border border-nexshrim-gold/30">
            <h3 className="text-2xl font-bold text-white mb-6 text-glow-gold">Get Started Today</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="cyber-input-group">
                  <Label htmlFor="name" className="text-nexshrim-gold">Name</Label>
                  <Input 
                    id="name" 
                    placeholder="Your Name" 
                    className="mt-1 bg-black/50 border-nexshrim-blue/50 text-white cyber-input focus:border-nexshrim-gold focus:shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                  />
                </div>
                <div className="cyber-input-group">
                  <Label htmlFor="email" className="text-nexshrim-gold">Email</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="your@email.com" 
                    className="mt-1 bg-black/50 border-nexshrim-blue/50 text-white cyber-input focus:border-nexshrim-gold focus:shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                  />
                </div>
              </div>
              
              <div className="cyber-input-group">
                <Label htmlFor="company" className="text-nexshrim-gold">Company</Label>
                <Input 
                  id="company" 
                  placeholder="Your Company" 
                  className="mt-1 bg-black/50 border-nexshrim-blue/50 text-white cyber-input focus:border-nexshrim-gold focus:shadow-[0_0_10px_rgba(245,158,11,0.5)]" 
                />
              </div>
              
              <div className="cyber-input-group">
                <Label htmlFor="project" className="text-nexshrim-gold">Project Details</Label>
                <textarea 
                  id="project"
                  rows={4}
                  className="w-full p-3 bg-black/50 border border-nexshrim-blue/50 rounded-md text-white cyber-input focus:border-nexshrim-gold focus:shadow-[0_0_10px_rgba(245,158,11,0.5)] focus:outline-none transition-all duration-300"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>
              
              <Button className="w-full bg-gradient-to-r from-nexshrim-blue to-nexshrim-gold hover:from-nexshrim-gold hover:to-nexshrim-blue text-lg py-3 neon-button transition-all duration-300 hover:shadow-[0_0_20px_rgba(245,158,11,0.6)]">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
