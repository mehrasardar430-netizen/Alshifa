import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Contact: React.FC = () => {
  return (
    <div className="w-full">
      {/* Page Header */}
      <div className="bg-blue-900 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1520038410233-714144495b40?auto=format&fit=crop&q=80&w=2000" 
            alt="Modern office or call center background" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue-950/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            We are here to help you 24 hours a day, 7 days a week.
          </p>
        </div>
      </div>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8">Get In Touch</h2>
              <p className="text-slate-600 text-lg mb-12">
                Whether you need emergency ICU staffing or regular home nursing, our administrators are ready to assist you immediately.
              </p>

              <div className="space-y-8">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-xl text-blue-600 mr-6 text-2xl">📞</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Admin Support</h3>
                    <p className="text-slate-500 mb-2">{BUSINESS_INFO.admin} (Administrator)</p>
                    <a href={`tel:${BUSINESS_INFO.adminPhone}`} className="text-blue-600 text-xl font-bold hover:underline">
                      {BUSINESS_INFO.adminPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-xl text-blue-600 mr-6 text-2xl">👨‍⚕️</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Owner & Medical Director</h3>
                    <p className="text-slate-500 mb-2">{BUSINESS_INFO.owner}</p>
                    <a href={`tel:${BUSINESS_INFO.ownerPhone}`} className="text-blue-600 text-xl font-bold hover:underline">
                      {BUSINESS_INFO.ownerPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-xl text-blue-600 mr-6 text-2xl">📍</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">Office Address</h3>
                    <p className="text-slate-500 leading-relaxed">
                      {BUSINESS_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-4 rounded-xl text-blue-600 mr-6 text-2xl">💬</div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-lg mb-1">WhatsApp</h3>
                    <p className="text-slate-500 mb-2">For quick inquiries and document sharing.</p>
                    <a 
                      href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-green-600 text-xl font-bold hover:underline"
                    >
                      {BUSINESS_INFO.whatsapp}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Form (Static) */}
            <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Inquiry Form</h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Full Name</label>
                  <input type="text" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Name" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Phone Number</label>
                  <input type="tel" className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your Phone Number" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Required Service</label>
                  <select className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500">
                    <option>Select a service</option>
                    <option>ICU Nursing</option>
                    <option>Home Nursing</option>
                    <option>Doctor Home Visit</option>
                    <option>Care Givers</option>
                    <option>Elderly Care</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500" placeholder="How can we help you?"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-600 text-white font-bold py-4 rounded-lg hover:bg-blue-700 transition-all shadow-lg">
                  Submit Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* City View Placeholder */}
      <section className="h-[500px] relative overflow-hidden group">
        <img 
          src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2000" 
          alt="Lahore City View" 
          className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0"
        />
        <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center text-white backdrop-blur-[2px]">
          <div className="text-center bg-white/10 p-10 rounded-3xl border border-white/20 backdrop-blur-md">
            <span className="text-5xl block mb-4">📍</span>
            <h3 className="text-2xl font-bold mb-2">Find Us in Lahore</h3>
            <p className="text-blue-50">Iqbal Town, Moon Market Area</p>
            <p className="text-xs mt-4 opacity-70">Serving all of Lahore: DHA, Gulberg, Model Town & Bahria Town</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;