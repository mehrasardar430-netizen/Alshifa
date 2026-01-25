import React from 'react';
import { SERVICES, BUSINESS_INFO } from '../constants';

const Services: React.FC = () => {
  return (
    <div className="w-full bg-white">
      {/* Page Header */}
      <div className="bg-blue-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1532938911079-cd4f063ce02e?auto=format&fit=crop&q=80&w=2000" 
            alt="Healthcare professionals in a modern setting" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue-950/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Our Professional Services</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto font-medium">
            Al-Shifa provides premium medical and domestic staffing solutions across Lahore.
          </p>
        </div>
      </div>

      {/* Services List */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-32">
          {SERVICES.map((service, index) => (
            <div key={service.id} className={`flex flex-col lg:flex-row gap-16 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              {/* Image Section - Force visibility */}
              <div className="lg:w-1/2 w-full">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-blue-100 rounded-[2rem] blur-xl opacity-50 group-hover:opacity-100 transition duration-500"></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="relative rounded-[2rem] shadow-2xl w-full h-[450px] object-cover border-4 border-white"
                    loading="lazy"
                  />
                </div>
              </div>
              
              {/* Text Section */}
              <div className="lg:w-1/2 w-full">
                <div className="flex items-center space-x-2 mb-4">
                  <span className="w-10 h-1 bg-blue-600 rounded-full"></span>
                  <span className="text-blue-600 font-bold uppercase tracking-widest text-xs">Premium Service 0{index + 1}</span>
                </div>
                <h2 className="text-4xl font-extrabold text-slate-900 mb-6 leading-tight">
                  {service.title}
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed mb-10">
                  {service.description} Our {service.title.toLowerCase()} professionals are hand-picked for their clinical competence and reliable work ethic. We ensure strict verification of all staff members before they enter your home or facility.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mb-10">
                  <div className="flex items-center space-x-3 text-slate-700 font-semibold">
                    <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span>Verified Staff</span>
                  </div>
                  <div className="flex items-center space-x-3 text-slate-700 font-semibold">
                    <div className="bg-green-100 p-1.5 rounded-full text-green-600">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/></svg>
                    </div>
                    <span>24/7 Availability</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href={`tel:${BUSINESS_INFO.adminPhone}`}
                    className="bg-blue-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 flex items-center group"
                  >
                    Inquire Now
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </a>
                  <a 
                    href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                    className="border-2 border-green-500 text-green-600 px-8 py-4 rounded-2xl font-bold hover:bg-green-500 hover:text-white transition-all flex items-center"
                  >
                    WhatsApp Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1542810634-71277d95ae51?auto=format&fit=crop&q=80&w=2000" 
            alt="Medical inquiry and support" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-slate-950/70"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Need a Custom Medical Solution?</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Contact us today to discuss your specific requirements. We can tailor our medical and domestic staffing to fit your unique needs.
          </p>
          <a 
            href={`tel:${BUSINESS_INFO.ownerPhone}`}
            className="bg-blue-600 text-white px-12 py-5 rounded-2xl font-bold text-xl hover:bg-blue-700 transition-all shadow-2xl inline-block"
          >
            Speak with Dr. Khawar Chauhan
          </a>
        </div>
      </section>
    </div>
  );
};

export default Services;