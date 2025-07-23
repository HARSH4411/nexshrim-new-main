import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { GraduationCap, Users, Award, Target, FileText, Monitor } from 'lucide-react';
const InternitySection = () => {
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null);
  const courses = [{
    id: 'data-science',
    name: 'Data Science & Analytics',
    icon: <Monitor className="w-8 h-8" />,
    color: 'from-blue-500 to-purple-600',
    image: '/placeholder.svg?height=200&width=300'
  }, {
    id: 'app-dev',
    name: 'App Development',
    icon: <Monitor className="w-8 h-8" />,
    color: 'from-green-500 to-teal-600',
    image: '/placeholder.svg?height=200&width=300'
  }, {
    id: 'web-dev',
    name: 'Web Development',
    icon: <Monitor className="w-8 h-8" />,
    color: 'from-orange-500 to-red-600',
    image: '/placeholder.svg?height=200&width=300'
  }, {
    id: 'business',
    name: 'Business + Entrepreneurship',
    icon: <Target className="w-8 h-8" />,
    color: 'from-yellow-500 to-orange-600',
    image: '/placeholder.svg?height=200&width=300'
  }, {
    id: 'ai-apps',
    name: 'Non-Tech AI Applications',
    icon: <Monitor className="w-8 h-8" />,
    color: 'from-purple-500 to-pink-600',
    image: '/placeholder.svg?height=200&width=300'
  }, {
    id: 'analytics',
    name: 'Business Analytics with AI',
    icon: <Monitor className="w-8 h-8" />,
    color: 'from-indigo-500 to-blue-600',
    image: '/placeholder.svg?height=200&width=300'
  }];
  const features = [{
    icon: <Monitor className="w-8 h-8" />,
    title: 'Live Project Assignments',
    description: 'Work on real industry projects'
  }, {
    icon: <Users className="w-8 h-8" />,
    title: 'Mentorship from Real Founders',
    description: 'Learn from successful entrepreneurs'
  }, {
    icon: <Award className="w-8 h-8" />,
    title: 'Capstone Reviews + Certification',
    description: 'Industry recognized certifications'
  }, {
    icon: <Target className="w-8 h-8" />,
    title: 'Internship & Placement Access',
    description: 'Direct pathway to career opportunities'
  }, {
    icon: <FileText className="w-8 h-8" />,
    title: 'AI-Powered Resume Help',
    description: 'Professional resume building assistance'
  }];
  const campuses = ['Indore', 'Delhi', 'Banaras', 'Bangalore', 'Raipur', 'Bhilai'];
  return <section className="min-h-screen bg-gradient-to-br from-nexshrim-dark-blue via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      {/* Hero Background with Stock Image */}
      <div className="absolute inset-0 opacity-20">
        <img src="/placeholder.svg?height=1200&width=1920" alt="Students learning" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-nexshrim-dark-blue/80 via-purple-900/80 to-indigo-900/80"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => <div key={i} className="absolute w-2 h-2 bg-nexshrim-gold rounded-full animate-pulse" style={{
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 3}s`
      }} />)}
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Header with Enhanced Design */}
        <div className="text-center mb-20 animate-fade-in">
          <a href="https://theinternity.com" target="_blank" rel="noopener noreferrer" className="inline-block hover:scale-105 transition-transform duration-300 group">
            <h1 className="text-6xl md:text-8xl font-bold mb-8 bg-gradient-to-r from-nexshrim-gold via-yellow-300 to-nexshrim-gold bg-clip-text text-transparent group-hover:from-yellow-300 group-hover:to-nexshrim-gold transition-all duration-500">
              INTERNITY
            </h1>
          </a>
          <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-blue-300">
            Igniting Talent from Campus to Career
          </h2>
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute inset-0 bg-white/5 backdrop-blur-sm rounded-2xl"></div>
            <p className="relative text-lg text-gray-200 px-8 py-6 leading-relaxed">
              The only 6-month transformation program delivering real-world tech & business skills across India's campuses.
            </p>
          </div>
        </div>

        {/* Enhanced Description with Visual Elements */}
        <div className="text-center mb-20 animate-slide-in-left">
          
        </div>

        {/* Enhanced Course Domains */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-16 text-nexshrim-gold flex items-center justify-center gap-3">
            <GraduationCap className="w-10 h-10" />
            Top Domains
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => <div key={course.id} className="group relative cursor-pointer transform transition-all duration-500 hover:scale-105" style={{
            animationDelay: `${index * 0.1}s`
          }} onMouseEnter={() => setHoveredCourse(course.id)} onMouseLeave={() => setHoveredCourse(null)}>
                <div className={`h-64 rounded-xl bg-gradient-to-br ${course.color} p-6 border border-white/20 hover:border-nexshrim-gold transition-all duration-300 relative overflow-hidden`}>
                  {/* Course Image */}
                  <div className="absolute inset-0 opacity-30">
                    <img src={course.image} alt={course.name} className="w-full h-full object-cover" />
                  </div>
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center text-center">
                    <div className="text-white mb-4 transform group-hover:scale-110 transition-transform duration-300 bg-white/20 rounded-full p-3">
                      {course.icon}
                    </div>
                    <h4 className="text-xl font-bold text-white">{course.name}</h4>
                  </div>
                  
                  {hoveredCourse === course.id && <div className="absolute inset-0 bg-nexshrim-gold/20 animate-pulse rounded-xl"></div>}
                </div>
              </div>)}
          </div>
        </div>

        {/* Enhanced Core Features */}
        <div className="mb-20">
          <h3 className="text-4xl font-bold text-center mb-16 text-nexshrim-gold">
            Core Features
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => <div key={feature.title} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:border-nexshrim-gold transition-all duration-300 transform hover:scale-105 animate-fade-in group" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="text-nexshrim-gold mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-semibold text-white mb-3">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>)}
          </div>
        </div>

        {/* Enhanced Operational Network */}
        <div className="mb-16">
          <h3 className="text-4xl font-bold text-center mb-12 text-nexshrim-gold">
            Operational Network Across India
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {campuses.map((campus, index) => <div key={campus} className="bg-gradient-to-r from-nexshrim-blue to-purple-600 px-8 py-4 rounded-full text-white font-semibold hover:scale-110 transition-all duration-300 animate-slide-in-right shadow-lg hover:shadow-xl" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                {campus}
              </div>)}
          </div>
        </div>

        {/* Enhanced Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in">
          <a href="https://theinternity.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-nexshrim-gold hover:bg-yellow-500 text-black font-bold px-10 py-5 text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Apply Now
            </Button>
          </a>
          <a href="https://theinternity.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-2 border-nexshrim-gold text-nexshrim-gold hover:bg-nexshrim-gold hover:text-black font-bold px-10 py-5 text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
              Partner Your College
            </Button>
          </a>
          <a href="https://theinternity.com" target="_blank" rel="noopener noreferrer">
            <Button size="lg" variant="outline" className="border-2 border-white hover:bg-white font-bold px-10 py-5 text-xl transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl text-zinc-950">
              Join the Team
            </Button>
          </a>
        </div>
      </div>
    </section>;
};
export default InternitySection;