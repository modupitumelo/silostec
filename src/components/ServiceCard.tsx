import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
  hoverColor: string;
};

export const ServiceCard = ({ icon, title, description, color, hoverColor }: ServiceCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 transition-all duration-300 border-b-4 ${color} hover:shadow-xl group`}>
      <div className={`rounded-full w-16 h-16 flex items-center justify-center mb-6 text-white ${color} group-hover:${hoverColor} transition-colors`}>
        {icon}
      </div>
      
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      
      <p className="text-slate-600 mb-4">{description}</p>
      
      <a href="#contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
        Learn more
        <ArrowRight className="ml-2 h-4 w-4" />
      </a>
    </div>
  );
};