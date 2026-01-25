
import React from 'react';
import { Link } from 'react-router-dom';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-6">
              <div className="bg-blue-600 text-white p-2 rounded-lg font-bold text-xl">AS</div>
              <span className="text-white font-bold text-xl">{BUSINESS_INFO.name}</span>
            </Link>
            <p className="leading-relaxed mb-8">
              Lahore's premier destination for certified clinical care and reliable domestic staffing. We prioritize safety, hygiene, and patient dignity.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all text-white">Fb</a>
              <a href="#" className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-blue-600 transition-all text-white">Ig</a>
              <a href={`https://wa.me/${BUSINESS_INFO.whatsapp.replace('+', '')}`} className="w-10 h-10 rounded-xl bg-slate-900 flex items-center justify-center hover:bg-emerald-600 transition-all text-white">Wa</a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Medical Care</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-blue-400">ICU Trained Nurses</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Home Nursing</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Doctor Visits</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Physiotherapy</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Elderly Care</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Domestic Staff</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services" className="hover:text-blue-400">Verified Cooks</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Professional Maids</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Baby Sitters / Nannies</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Patient Attendants</Link></li>
              <li><Link to="/services" className="hover:text-blue-400">Staff Verification</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-8 uppercase tracking-widest text-xs">Head Office</h4>
            <ul className="space-y-6 text-sm">
              <li className="flex items-start">
                <span className="text-blue-400 mr-3 mt-1">📍</span>
                <span>{BUSINESS_INFO.address}<br/>Lahore, Pakistan</span>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">📞</span>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Call Admin</div>
                  <a href={`tel:${BUSINESS_INFO.adminPhone}`} className="text-white hover:text-blue-400 font-bold">{BUSINESS_INFO.adminPhone}</a>
                </div>
              </li>
              <li className="flex items-center">
                <span className="text-blue-400 mr-3">👨‍⚕️</span>
                <div>
                  <div className="text-[10px] uppercase font-bold text-slate-500">Medical Director</div>
                  <a href={`tel:${BUSINESS_INFO.ownerPhone}`} className="text-white hover:text-blue-400 font-bold">{BUSINESS_INFO.ownerPhone}</a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-10 text-center flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
          <p>© {new Date().getFullYear()} {BUSINESS_INFO.name}. Licensed & Registered in Pakistan.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
