import React from 'react';
import { Mail, Phone, User } from 'lucide-react';

export const TeamSection = () => {
  const teamMembers = [
    {
      name: "Masilo Sekgoka",
      role: "Founder & CEO",
      specialization: "IT Support and IT Systems Developer",
      email: "masilo@silostecsystems.co.za",
      phone: "+27 73 676 6985",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      name: "Tumelo Modupi",
      role: "Web Developer",
      specialization: "Frontend & Backend Development",
      email: "tumelo@silostecsystems.co.za",
      phone: "+27 76 736 2968",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    }
  ];

  return (
    <section id="team" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Team</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Meet the dedicated professionals behind Silostec Systems, committed to delivering 
            exceptional IT solutions for South African businesses.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow group"
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-blue-200">{member.role}</p>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-slate-600 mb-4 font-medium">{member.specialization}</p>
                
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                    <a 
                      href={`mailto:${member.email}`}
                      className="text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      {member.email}
                    </a>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-red-600 mr-3 flex-shrink-0" />
                    <a 
                      href={`tel:${member.phone}`}
                      className="text-slate-700 hover:text-blue-600 transition-colors"
                    >
                      {member.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};