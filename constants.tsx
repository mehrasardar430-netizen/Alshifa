import React from 'react';
import { Service, StaffMember, Testimonial, BlogPostType } from './types';

export const BUSINESS_INFO = {
  name: "Al-Shifa Medical & Domestic Services",
  tagline: "Expert Healthcare & Professional Home Staffing",
  admin: "Mehraj Munir",
  adminPhone: "0343-4682060",
  owner: "Dr. Khawar Chauhan",
  ownerPhone: "0333-4356780",
  address: "Iqbal Town, Moon Market, Lahore, Pakistan",
  whatsapp: "+923334356780"
};

export const SERVICES: Service[] = [
  {
    id: "icu-nursing",
    title: "ICU Trained Nursing Staff",
    description: "Specialized critical care nurses for patients requiring ventilators, cardiac monitoring, and high-dependency care at home.",
    image: "https://images.unsplash.com/photo-1581056771107-24a757245719?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "professional-nursing",
    title: "Professional Nursing Care",
    description: "Certified registered nurses providing clinical care, injections, wound management, and post-surgery recovery with hospital-grade hygiene standards.",
    image: "https://images.unsplash.com/photo-1612740693523-2ff355602497?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "domestic-services",
    title: "Domestic Services",
    description: "Verified and reliable household staff including professional cooks, housemaids, cleaners, and experienced baby sitters for your home.",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "doctor-visit",
    title: "Doctor Home Visit",
    description: "MBBS doctors available for prompt home consultations, checkups, and diagnostic tests across all areas of Lahore.",
    image: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "elderly-care",
    title: "Elderly Care & Attendants",
    description: "Compassionate caregivers for senior citizens, helping with mobility, medicine timing, and daily personal care.",
    image: "https://images.unsplash.com/photo-1610817368071-ab512392e623?auto=format&fit=crop&q=80&w=1200"
  },
  {
    id: "hospital-staff",
    title: "Emergency & Clinical Staffing",
    description: "Rapid deployment of paramedics, ward boys, and clinical staff for private hospitals and emergency situations.",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=1200"
  }
];

export const BLOG_POSTS: BlogPostType[] = [
  {
    id: 1,
    title: "ICU Trained Nursing Staff",
    excerpt: "Our ICU trained nurses provide expert critical care at home or hospital.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba9996a?auto=format&fit=crop&q=80&w=800",
    date: "July 22, 2024",
    content: <p>Our ICU trained nurses provide expert critical care at home or hospital.</p>
  },
  {
    id: 2,
    title: "Home Nursing Services",
    excerpt: "Professional home nursing care tailored to patient needs.",
    image: "https://images.unsplash.com/photo-1586773860418-d3b97976c661?auto=format&fit=crop&q=80&w=800",
    date: "July 21, 2024",
    content: <p>Professional home nursing care tailored to patient needs.</p>
  },
  {
    id: 3,
    title: "Doctor Home Visit",
    excerpt: "Experienced doctors available for home consultations.",
    image: "https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?auto=format&fit=crop&q=80&w=800",
    date: "July 20, 2024",
    content: <p>Experienced doctors available for home consultations.</p>
  },
  {
    id: 4,
    title: "Domestic & Home Staffing",
    excerpt: "Reliable domestic staff services for home, office, or hotel.",
    image: "https://images.unsplash.com/photo-1603793623918-512b8d5a26a6?auto=format&fit=crop&q=80&w=800",
    date: "July 19, 2024",
    content: <p>Reliable domestic staff services for home, office, or hotel.</p>
  }
];


export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Sheikh Haroon",
    location: "DHA Phase 5, Lahore",
    text: "The ICU nurse for my father was exceptionally professional. They managed the ventilator and vitals perfectly. Highly recommended.",
    rating: 5,
    service: "ICU Nursing",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Mrs. Fatima",
    location: "Gulberg III, Lahore",
    text: "We hired a cook and a maid through Al-Shifa. Both are punctual and trustworthy. It's hard to find such verified staff in Pakistan.",
    rating: 5,
    service: "Domestic Services",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Dr. Salman Qureshi",
    location: "Model Town, Lahore",
    text: "As a doctor myself, I am impressed by the quality of paramedics they provide. Their home visit doctors are also very competent.",
    rating: 5,
    service: "Doctor Home Visit",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Ayesha Siddiqua",
    location: "Johar Town, Lahore",
    text: "Excellent elderly care for my grandmother. The attendant is like family now. Very respectful and well-trained staff.",
    rating: 5,
    service: "Elderly Care",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Kamran Malik",
    location: "Bahria Town, Lahore",
    text: "We had a medical emergency and Al-Shifa's team responded immediately. The paramedic was skilled and reassuring. A lifesaver.",
    rating: 5,
    service: "Emergency Staffing",
    avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&q=80&w=200"
  },
  {
    name: "Sobia Ahmed",
    location: "Cantt, Lahore",
    text: "The babysitter we hired is wonderful with our children. She's not just a sitter but a mentor. Al-Shifa's verification gave us peace of mind.",
    rating: 5,
    service: "Babysitting Services",
    avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?auto=format&fit=crop&q=80&w=200"
  }
];

export const STAFF: StaffMember[] = [
  {
    name: "Dr. Khawar Chauhan",
    role: "Medical Director & Owner",
    specialization: "Internal Medicine Expert",
    image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800",
    description: "Ensuring every patient receives hospital-standard care at their own home."
  },
  {
    name: "Mehraj Munir",
    role: "Administrator",
    specialization: "Staffing & Verification",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    description: "Handling all recruitment and background checks for our medical and domestic personnel."
  },
  {
    name: "Sr. Nurse Fatima",
    role: "Head of Nursing",
    specialization: "ICU & CCU Specialist",
    image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=80&w=800",
    description: "Training our home nurses to deal with complex emergency situations efficiently."
  }
];