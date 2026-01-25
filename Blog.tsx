import React from 'react';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../constants';

const Blog: React.FC = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-blue-900 py-24 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1554460787-872f2d4e68e0?auto=format&fit=crop&q=80&w=2000" 
            alt="Person reading health information" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-blue-950/60"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Health & Wellness Blog</h1>
          <p className="text-blue-100 text-lg max-w-2xl mx-auto">
            Insights, guides, and updates from the medical and domestic staffing experts at Al-Shifa.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {BLOG_POSTS.map((post) => (
              <article key={post.id} className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 group">
                <div className="h-64 overflow-hidden relative">
                  <Link to={`/blog/${post.id}`} className="block w-full h-full">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </Link>
                  <div className="absolute top-4 left-4 bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                    Latest News
                  </div>
                </div>
                <div className="p-8">
                  <div className="text-slate-400 text-xs font-semibold mb-3 uppercase tracking-wider">{post.date}</div>
                  <h2 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                  </h2>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link to={`/blog/${post.id}`} className="text-blue-600 font-bold text-sm flex items-center hover:translate-x-2 transition-transform">
                    Read Article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-blue-950 text-white overflow-hidden relative">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1549247775-6aa57c50a133?auto=format&fit=crop&q=80&w=2000" 
            alt="Laptop with news/email interface" 
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-blue-950/70"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl font-bold mb-6">Stay Informed</h2>
          <p className="text-blue-200 mb-10 text-lg">Subscribe to our monthly newsletter for the latest healthcare tips and domestic staffing advice.</p>
          <form className="flex flex-col sm:flex-row gap-4" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder:text-blue-300/50"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-10 py-4 rounded-2xl transition-all shadow-xl">
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
