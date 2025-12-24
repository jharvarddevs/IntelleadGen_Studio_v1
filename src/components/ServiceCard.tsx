import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="group p-6 md:p-8 bg-white rounded-xl border-2 border-primary-200 hover:border-black transition-all duration-300 hover-lift">
      <div className="w-14 h-14 bg-black rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        <Icon className="w-7 h-7 text-white group-hover:scale-110 transition-transform duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-black transition-colors duration-300 group-hover:text-primary-600">{title}</h3>
      <p className="text-primary-600 leading-relaxed">{description}</p>
    </div>
  );
};
