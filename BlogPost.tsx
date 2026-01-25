import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BLOG_POSTS, BUSINESS_INFO } from '../constants';

const BlogPost: React.FC = () => {
  const { postId } = useParams();
  const post = BLOG_POSTS.find(p => p.id === Number(postId));

  if (!post) {
    return (
      <div className="py-24 text-center">
        <h1 className="text-4xl font-bold">Post not found</h1>
        <Link to="/blog" className="text-blue-600 hover:underline mt-4 inline-block">Back to Blog</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Post Header */}
      <section className="relative h-[500px] flex items-end text-white">
        <div className="absolute inset-0">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 z-10">
          <div className="text-blue-300 font-bold text-sm uppercase tracking-widest mb-2">{post.date}</div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            {post.title}
          </h1>
        </div>
      </section>

      {/* Post Content */}
      <article className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-slate-700 text-lg leading-relaxed space-y-6">
            {post.content}
          </div>

          <div className="mt-20 border-t border-slate-200 pt-12">
            <Link to="/blog" className="inline-flex items-center text-blue-600 font-bold hover:underline group">
              <svg className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              Back to All Articles
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Need Professional Care or Staffing?</h2>
          <p className="text-slate-600 mb-10 max-w-2xl mx-auto">
            Contact Al-Shifa today for reliable medical and domestic services in Lahore. Our team is available 24/7 to assist you.
          </p>
          <a 
            href={`tel:${BUSINESS_INFO.adminPhone}`}
            className="bg-blue-600 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-blue-700 transition-all shadow-lg"
          >
            Call Now: {BUSINESS_INFO.adminPhone}
          </a>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
