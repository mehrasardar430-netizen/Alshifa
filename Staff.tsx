import React from 'react';
import { STAFF, BUSINESS_INFO } from '../constants';

const Staff: React.FC = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-blue-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
            alt="Professional medical team" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue-950/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Doctors & Staff</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Meet the professional team dedicated to your health and well-being.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Clinical Leadership</h2>
            <p className="text-slate-600">Qualified professionals with decades of combined experience.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {STAFF.map((member, idx) => (
              <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                <div className="h-80 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <div className="text-blue-600 font-bold text-sm uppercase mb-1">{member.role}</div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{member.name}</h3>
                  <div className="text-slate-500 font-medium text-sm mb-4">{member.specialization}</div>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Availability Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=2000" 
            alt="Abstract city map or network" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-white/70"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-blue-50 border-2 border-dashed border-blue-200 p-10 rounded-3xl text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Staff Availability</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Our trained staff is available for <strong>Home Visits</strong>, <strong>Hospital Duty</strong>, and <strong>24/7 Live-in Care</strong> across all areas of Lahore including Iqbal Town, Gulberg, Model Town, DHA, and Bahria Town.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-blue-600 font-bold text-lg">24/7</div>
                <div className="text-slate-500 text-xs uppercase">Care Services</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-blue-600 font-bold text-lg">Daily</div>
                <div className="text-slate-500 text-xs uppercase">Doctor Visits</div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow-sm">
                <div className="text-blue-600 font-bold text-lg">Lahore</div>
                <div className="text-slate-500 text-xs uppercase">Service Area</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Staff;