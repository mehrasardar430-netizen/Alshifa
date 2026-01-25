import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO, SERVICES, TESTIMONIALS } from '../constants';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full bg-white">
      {/* Hero Section Banner */}
      <section className="relative h-[750px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1599045118108-bf9954418b76?auto=format&fit=crop&q=80&w=2000" 
            alt="Professional medical and domestic staff collage" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/70 to-transparent"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight tracking-tight">
              Al-Shifa Healthcare Services
            </h1>
            <p className="text-lg md:text-xl mb-12 text-blue-50/90 font-medium leading-relaxed max-w-2xl">
              Professional Medical & Domestic Staff at Your Doorstep.
            </p>
            <div className="flex flex-wrap gap-4">
              <a 
                href={`tel:${BUSINESS_INFO.adminPhone}`}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg hover:shadow-blue-500/40 flex items-center"
              >
                Call Now
              </a>
              <a 
                href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg flex items-center"
              >
                WhatsApp
              </a>
              <Link 
                to="/contact"
                className="bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-base transition-all shadow-lg flex items-center"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Intro Section - High Quality Images */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-20 items-center">
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-extrabold text-slate-900 mb-8 leading-tight">
                Trusted in <span className="text-blue-600">Lahore</span> <br/>Since 2014
              </h2>
              <p className="text-slate-600 text-lg mb-10 leading-relaxed">
                Al-Shifa Healthcare and Domestic Services provides a premium hybrid of critical medical staffing and verified domestic assistance. Whether you need a 24/7 ICU nurse in Gulberg or a reliable cook in DHA, we are your one-stop shop.
              </p>
              <div className="grid grid-cols-2 gap-10 mb-10">
                <div>
                  <div className="text-5xl font-black text-blue-600 mb-2">500+</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Active Staff Members</div>
                </div>
                <div>
                  <div className="text-5xl font-black text-blue-600 mb-2">2k+</div>
                  <div className="text-slate-500 text-xs font-bold uppercase tracking-widest">Successful Placements</div>
                </div>
              </div>
              <Link to="/about" className="inline-flex items-center text-blue-600 font-bold text-lg hover:underline group">
                Learn more about our legacy
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -inset-4 bg-blue-600/10 rounded-[3rem] blur-2xl"></div>
              <div className="grid grid-cols-2 gap-6 relative">
                <img src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-72 w-full object-cover shadow-2xl border-4 border-white" alt="Clinical Excellence" />
                <img src="https://images.unsplash.com/photo-1581578731548-c64695ce6958?auto=format&fit=crop&q=80&w=800" className="rounded-3xl h-72 w-full object-cover shadow-2xl mt-12 border-4 border-white" alt="Domestic Support" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Fixed Image Visibility */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-slate-900 mb-4">Our Core Expertise</h2>
            <div className="w-20 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
            <p className="mt-6 text-slate-600 max-w-2xl mx-auto">
              We provide hospital-standard medical care and verified domestic support professionals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {SERVICES.map((service) => (
              <div key={service.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col group hover:-translate-y-2 transition-all duration-300">
                {/* Explicitly Visible Image Container */}
                <div className="h-64 w-full overflow-hidden relative bg-slate-200">
                  <img 
                    src={service.image} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    alt={service.title} 
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                      Professional
                    </span>
                  </div>
                </div>
                
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-8 leading-relaxed line-clamp-3">
                    {service.description}
                  </p>
                  <div className="mt-auto">
                    <Link 
                      to="/services" 
                      className="inline-flex items-center text-blue-600 font-bold text-sm hover:translate-x-2 transition-transform"
                    >
                      View Details
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Feedback */}
      <section className="py-24 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -mr-48 -mt-48 opacity-30"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs">Customer Feedback</span>
            <h2 className="text-4xl font-bold text-slate-900 mt-3">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="bg-slate-50 p-8 rounded-3xl border border-slate-100 flex flex-col hover:shadow-2xl transition-all duration-300">
                <div className="flex items-center space-x-4 mb-6">
                  <img src={t.avatar} alt={t.name} className="w-16 h-16 rounded-2xl object-cover shadow-md ring-4 ring-white" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                    <p className="text-blue-600 text-[10px] font-bold uppercase">{t.location}</p>
                  </div>
                </div>
                <p className="text-slate-600 italic mb-6 flex-grow leading-relaxed text-sm">"{t.text}"</p>
                <div className="flex text-amber-400">
                   {[...Array(t.rating)].map((_, starIdx) => (
                    <svg key={starIdx} className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;