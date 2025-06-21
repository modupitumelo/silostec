import React from 'react';
import { MapPin, Clock, BadgeDollarSign, Zap, GraduationCap, Shield } from 'lucide-react';

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Local Understanding",
      description: "We are based in the rural community ourselves, so we fully understand the challenges like poor connectivity, limited infrastructure, and access issues—and we design solutions that work in these conditions."
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "On-the-Ground Support",
      description: "Unlike others who offer only remote help, we provide on-site technical support and regular maintenance visits, ensuring your systems stay up and running."
    },
    {
      icon: <BadgeDollarSign className="h-6 w-6" />,
      title: "Affordable Solutions",
      description: "We know budgets can be tight in rural organisations, so we focus on cost-effective IT setups that are easy to maintain and long-lasting."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast Response Times",
      description: "Even in remote areas, we respond quickly to minimise downtime because we know your services are essential to the community."
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Building Local Skills",
      description: "We don't just fix things—we empower you by offering training and guidance so your team can manage basic IT tasks confidently."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Trusted & Secure",
      description: "We prioritise data security and confidentiality, which is especially important for schools, clinics, and centres handling sensitive information."
    }
  ];

  return (
    <section id="why-choose-us" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Why Choose Us</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            What makes Silostec Systems different from other IT companies? Our deep understanding of 
            rural communities and commitment to local empowerment.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all hover:bg-slate-100"
            >
              <div className="bg-blue-600 rounded-full w-12 h-12 flex items-center justify-center mb-4 text-white">
                {reason.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-800 mb-3">{reason.title}</h3>
              <p className="text-slate-600">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};