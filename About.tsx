import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-blue-900 py-32 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1559839734-2b71f1e3c770?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical Team Collaboration" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue-950/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Our Medical Institution</h1>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto font-medium">
            Dedicated to clinical excellence and compassionate staff services for over 10 years in the heart of Lahore.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-100 rounded-full blur-3xl opacity-50"></div>
              <img 
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1200" 
                alt="Doctors in Professional Discussion" 
                className="rounded-3xl shadow-2xl relative z-10 w-full h-[550px] object-cover border-8 border-white"
              />
            </div>
            <div>
              <span className="text-blue-600 font-bold uppercase tracking-widest text-sm block mb-4">Our Professional Legacy</span>
              <h2 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">Setting Standards in Healthcare Staffing</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Al-Shifa Healthcare Services emerged from a recognized need for reliable, professional-grade clinical support outside traditional hospital environments. We specialize in sourcing and deploying top-tier medical talent to ensure seamless continuity of care.
              </p>
              <div className="space-y-6">
                {[
                  { title: "Vetted Staffing", desc: "Our professionals undergo rigorous background checks and clinical evaluations." },
                  { title: "Continuous Monitoring", desc: "Our clinical leadership oversees patient progress for complex home-care cases." },
                  { title: "Emergency Response", desc: "Rapid deployment system for hospitals and private critical care needs." }
                ].map((item, i) => (
                  <div key={i} className="flex items-start bg-slate-50 p-6 rounded-2xl hover:bg-blue-50 transition-all border border-slate-100 shadow-sm">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-lg flex items-center justify-center font-bold mr-6 flex-shrink-0">
                      0{i+1}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-lg mb-1">{item.title}</h4>
                      <p className="text-slate-500 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1587854692152-cbe660fc09a7?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical abstract background" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-blue-900/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold mb-5">Our Clinical Core Values</h2>
            <p className="text-blue-200 text-lg">The foundation of every interaction at Al-Shifa Healthcare.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { icon: "👨‍⚕️", title: "Professional Ethics", text: "Upholding the highest standards of medical integrity and patient confidentiality." },
              { icon: "🏥", title: "Clinical Rigor", text: "Applying evidence-based nursing and medical protocols in every home care scenario." },
              { icon: "💙", title: "Patient First", text: "Our primary objective is the recovery and comfort of the individuals in our care." }
            ].map((val, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-md border border-white/10 p-10 rounded-3xl text-center hover:bg-white/10 transition-colors">
                <div className="text-5xl mb-6">{val.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{val.title}</h3>
                <p className="text-blue-100/70 leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;