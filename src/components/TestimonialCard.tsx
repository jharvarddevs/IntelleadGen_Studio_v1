import React from 'react';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  company,
}) => {
  return (
    <div className="group bg-white p-6 md:p-8 rounded-xl border-2 border-primary-200 hover:border-black transition-all duration-300 hover-lift">
      <Quote className="w-10 h-10 text-black mb-4 opacity-20 group-hover:opacity-40 group-hover:scale-110 transition-all duration-300" />
      <p className="text-primary-700 mb-6 leading-relaxed">"{quote}"</p>
      <div className="border-t border-primary-200 pt-4">
        <p className="font-semibold text-black group-hover:text-primary-600 transition-colors duration-300">{author}</p>
        <p className="text-sm text-primary-600">
          {role} at {company}
        </p>
      </div>
    </div>
  );
};
