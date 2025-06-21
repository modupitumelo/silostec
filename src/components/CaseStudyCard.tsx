import React, { ReactNode } from 'react';

type CaseStudyCardProps = {
  client: string;
  title: string;
  description: ReactNode;
  image: string;
  color: string;
};

export const CaseStudyCard = ({ client, title, description, image, color }: CaseStudyCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden group hover:shadow-xl transition-shadow">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={client} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className={`absolute inset-0 opacity-60 ${color}`}></div>
        <div className="absolute inset-0 p-6 flex items-end">
          <h3 className="text-xl font-bold text-white">{client}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <h4 className="text-lg font-semibold text-slate-800 mb-2">{title}</h4>
        <div className="text-slate-600">
          {description}
        </div>
      </div>
    </div>
  );
};