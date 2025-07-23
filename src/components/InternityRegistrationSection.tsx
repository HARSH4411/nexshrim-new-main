import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Award, Target, Calendar, MapPin, Clock, CheckCircle } from 'lucide-react';
const InternityRegistrationSection = () => {
  const [selectedDomain, setSelectedDomain] = useState<string | null>(null);
  const highlights = [{
    icon: <Calendar className="w-6 h-6" />,
    title: "6-Month Program",
    description: "Comprehensive transformation journey"
  }, {
    icon: <Users className="w-6 h-6" />,
    title: "Real Founders as Mentors",
    description: "Learn from successful entrepreneurs"
  }, {
    icon: <Target className="w-6 h-6" />,
    title: "Live Projects",
    description: "Work on real industry assignments"
  }, {
    icon: <Award className="w-6 h-6" />,
    title: "Industry Certification",
    description: "Recognized credentials upon completion"
  }];
  const domains = ["Data Science & Analytics", "App Development", "Web Development", "Business + Entrepreneurship", "Non-Tech AI Applications", "Business Analytics with AI"];
  const campuses = ["Indore", "Delhi", "Banaras", "Bangalore", "Raipur", "Bhilai"];
  return <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(12)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-nexshrim-gold rounded-full animate-pulse" style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`
        }} />)}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-nexshrim-gold to-yellow-500 rounded-full mb-6 shadow-lg">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
          
          <h2 className="text-5xl font-bold text-gray-900 mb-4">
            Registration is Now 
            <span className="text-nexshrim-gold"> OPEN!</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-nexshrim-blue mb-6">
              TheInternity - Igniting Talent from Campus to Career
            </h3>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Join India's most comprehensive 6-month transformation program that bridges the gap between academic learning and industry demands. 
              We don't just teach - we transform students into industry-ready professionals through real-world projects, mentorship from successful founders, 
              and hands-on experience across cutting-edge domains.
            </p>
          </div>

          {/* Registration Status */}
          <div className="inline-flex items-center bg-green-100 text-green-800 px-6 py-3 rounded-full font-semibold mb-8">
            <CheckCircle className="w-5 h-5 mr-2" />
            <span>Now Accepting Applications for Batch 2024</span>
          </div>
        </div>

        {/* Program Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((highlight, index) => <div key={highlight.title} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="text-nexshrim-blue mb-4 flex justify-center">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2 text-center">
                {highlight.title}
              </h4>
              <p className="text-gray-600 text-sm text-center">
                {highlight.description}
              </p>
            </div>)}
        </div>

        {/* What Makes TheInternity Special */}
        

        {/* Available Domains */}
        

        {/* Campus Locations */}
        

        {/* Program Timeline */}
        

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Transform Your Career?
          </h3>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Don't miss this opportunity to be part of India's most innovative campus-to-career transformation program.
            Limited seats available!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="https://theinternity.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-nexshrim-gold hover:bg-yellow-500 text-black font-bold px-10 py-5 text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Apply Now - Registration Open!
              </Button>
            </a>
            
            <a href="https://theinternity.com" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="border-2 border-nexshrim-blue text-nexshrim-blue hover:bg-nexshrim-blue hover:text-white font-bold px-10 py-5 text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                Learn More
              </Button>
            </a>
          </div>
          
          <p className="text-sm text-gray-500 mt-6">
            🔥 Early bird discounts available for the first 100 registrations
          </p>
        </div>
      </div>
    </section>;
};
export default InternityRegistrationSection;