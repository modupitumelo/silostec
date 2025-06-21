import React from 'react';
import { DollarSign, ShoppingBag, FileText, HelpCircle, Code, Network, Printer, Lock, Cloud, Globe } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies to establish your online presence.",
      color: "border-red-600",
      hoverColor: "bg-red-700"
    },
    
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Point of Sale (POS) Systems",
      description: "User-friendly POS solutions with inventory tracking, sales analytics, and payment processing capabilities.",
      color: "border-red-600",
      hoverColor: "bg-red-700"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Invoicing & Billing Systems",
      description: "Automated billing solutions that simplify invoice creation, delivery, and payment tracking.",
      color: "border-blue-600",
      hoverColor: "bg-blue-700"
    },
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: "IT Support & Maintenance",
      description: "Reliable technical support and regular system maintenance to keep your business running smoothly.",
      color: "border-red-600",
      hoverColor: "bg-red-700"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs and challenges.",
      color: "border-blue-600",
      hoverColor: "bg-blue-700"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Networking & IT Infrastructure",
      description: "Setup and maintenance of efficient, secure networks and IT infrastructure for your business.",
      color: "border-red-600",
      hoverColor: "bg-red-700"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "IT Security",
      description: "Comprehensive security solutions to protect your business data and digital assets.",
      color: "border-blue-600",
      hoverColor: "bg-blue-700"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Remote & Cloud Computing",
      description: "Cloud-based solutions that provide flexibility and accessibility for your business needs.",
      color: "border-red-600",
      hoverColor: "bg-red-700"
    }
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">What We Do</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            We provide a comprehensive range of IT solutions to help South African businesses operate more efficiently.
          </p>
        </div>
        
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              color={service.color}
              hoverColor={service.hoverColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};