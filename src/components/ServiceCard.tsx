import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  image: string;
};

export const ServiceCard = ({ icon, title, description, image }: ServiceCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl group">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="bg-white/20 backdrop-blur-sm rounded-full w-12 h-12 flex items-center justify-center text-white">
            {icon}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        
        <a href="#contact" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors">
          Learn more
          <ArrowRight className="ml-2 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};