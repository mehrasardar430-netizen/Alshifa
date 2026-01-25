import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface StaffMember {
  name: string;
  role: string;
  specialization: string;
  image: string;
  description: string;
}

export interface Testimonial {
  name: string;
  location: string;
  text: string;
  rating: number;
  service: string;
  avatar: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface BlogPostType {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  content: React.ReactNode;
}
