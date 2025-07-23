import React, { useState } from 'react';
const NexHRDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const employees = [{
    id: 1,
    name: "Raj Kumar",
    role: "Developer",
    status: "Present",
    time: "09:15 AM",
    avatar: "👨‍💻"
  }, {
    id: 2,
    name: "Priya Singh",
    role: "Designer",
    status: "Present",
    time: "09:30 AM",
    avatar: "👩‍🎨"
  }, {
    id: 3,
    name: "Amit Sharma",
    role: "Manager",
    status: "Late",
    time: "10:15 AM",
    avatar: "👨‍💼"
  }, {
    id: 4,
    name: "Sneha Patel",
    role: "HR",
    status: "Present",
    time: "09:00 AM",
    avatar: "👩‍💼"
  }];
  return <section className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-glow-blue"> NexHR: Smart HR for Smart Teams</h2>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Complete HRMS solution with payroll, attendance, and employee management.
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/40 rounded-2xl backdrop-blur-md border border-purple-500/30 overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold">NexHR Dashboard</h3>
                <div className="flex space-x-4">
                  <button onClick={() => setActiveTab('overview')} className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === 'overview' ? 'bg-white/20 border-2 border-white' : 'bg-white/10 border border-white/30 hover:bg-white/15'}`}>
                    Overview
                  </button>
                  <button onClick={() => setActiveTab('attendance')} className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === 'attendance' ? 'bg-white/20 border-2 border-white' : 'bg-white/10 border border-white/30 hover:bg-white/15'}`}>
                    Attendance
                  </button>
                  <button onClick={() => setActiveTab('employees')} className={`px-4 py-2 rounded-lg transition-all duration-300 ${activeTab === 'employees' ? 'bg-white/20 border-2 border-white' : 'bg-white/10 border border-white/30 hover:bg-white/15'}`}>
                    Employees
                  </button>
                </div>
              </div>
            </div>

            {/* Dashboard Content */}
            <div className="p-6">
              {activeTab === 'overview' && <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-[fadeInUp_0.5s_ease-out]">
                  <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 p-6 rounded-xl border border-green-500/30">
                    <h4 className="text-lg font-semibold mb-2">Total Employees</h4>
                    <div className="text-3xl font-bold text-green-400">156</div>
                    <div className="text-sm text-gray-300 mt-2">+12 this month</div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/20 to-cyan-500/20 p-6 rounded-xl border border-blue-500/30">
                    <h4 className="text-lg font-semibold mb-2">Present Today</h4>
                    <div className="text-3xl font-bold text-blue-400">142</div>
                    <div className="text-sm text-gray-300 mt-2">91% attendance</div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 p-6 rounded-xl border border-purple-500/30">
                    <h4 className="text-lg font-semibold mb-2">Pending Leaves</h4>
                    <div className="text-3xl font-bold text-purple-400">8</div>
                    <div className="text-sm text-gray-300 mt-2">Requires approval</div>
                  </div>
                </div>}

              {activeTab === 'attendance' && <div className="animate-[fadeInUp_0.5s_ease-out]">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Check-in Animation */}
                    <div className="bg-gray-800/50 p-6 rounded-xl">
                      <h4 className="text-xl font-bold mb-4 text-center">Employee Check-in</h4>
                      <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 relative">
                          <div className="w-full h-full border-4 border-blue-500 rounded-full animate-pulse"></div>
                          <div className="absolute inset-4 border-2 border-blue-400 rounded-full animate-spin"></div>
                          <div className="absolute inset-0 flex items-center justify-center text-4xl">📸</div>
                        </div>
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition-transform">
                          Mark Attendance
                        </button>
                      </div>
                    </div>

                    {/* Today's Attendance */}
                    <div className="bg-gray-800/50 p-6 rounded-xl">
                      <h4 className="text-xl font-bold mb-4">Today's Attendance</h4>
                      <div className="space-y-3">
                        {employees.slice(0, 3).map(emp => <div key={emp.id} className="flex items-center justify-between p-3 bg-gray-700/50 rounded-lg hover:bg-gray-700 transition-colors">
                            <div className="flex items-center">
                              <span className="text-2xl mr-3">{emp.avatar}</span>
                              <div>
                                <div className="font-semibold">{emp.name}</div>
                                <div className="text-sm text-gray-400">{emp.role}</div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className={`px-2 py-1 rounded text-xs font-semibold ${emp.status === 'Present' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                                {emp.status}
                              </div>
                              <div className="text-sm text-gray-400">{emp.time}</div>
                            </div>
                          </div>)}
                      </div>
                    </div>
                  </div>
                </div>}

              {activeTab === 'employees' && <div className="animate-[fadeInUp_0.5s_ease-out]">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-xl font-bold">Employee Management</h4>
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-2 rounded-lg font-semibold hover:scale-105 transition-transform hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]">
                      + Add Employee
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {employees.map((emp, index) => <div key={emp.id} className="group bg-gray-800/50 p-4 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(168,85,247,0.2)]" style={{
                  animationDelay: `${index * 0.1}s`
                }}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center">
                            <div className="text-3xl mr-3 group-hover:animate-bounce">{emp.avatar}</div>
                            <div>
                              <h5 className="font-semibold group-hover:text-purple-400 transition-colors">{emp.name}</h5>
                              <p className="text-sm text-gray-400">{emp.role}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <div className={`px-2 py-1 rounded text-xs font-semibold ${emp.status === 'Present' ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                              {emp.status}
                            </div>
                            <div className="text-xs text-gray-500 mt-1">{emp.time}</div>
                          </div>
                        </div>
                      </div>)}
                  </div>
                </div>}
            </div>
          </div>

          {/* Features List */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[{
            icon: "💰",
            title: "Payroll",
            desc: "Automated salary processing"
          }, {
            icon: "📊",
            title: "Analytics",
            desc: "Performance insights"
          }, {
            icon: "🏖️",
            title: "Leave Management",
            desc: "Request and approval system"
          }, {
            icon: "🎯",
            title: "Goal Tracking",
            desc: "Employee objectives"
          }].map((feature, index) => <div key={index} className="text-center p-6 glass-card hover:scale-105 transition-transform duration-300" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h4 className="font-bold text-lg mb-2 text-purple-400">{feature.title}</h4>
                <p className="text-gray-300 text-sm">{feature.desc}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};
export default NexHRDashboard;