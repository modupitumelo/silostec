import React from 'react';
import { DollarSign, ShoppingBag, FileText, HelpCircle, Code, Network, Printer, Lock, Cloud, Globe } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection = () => {
  const services = [
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Web Development",
      description: "Custom websites and web applications built with modern technologies to establish your online presence.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <ShoppingBag className="h-8 w-8" />,
      title: "Point of Sale (POS) Systems",
      description: "User-friendly POS solutions with inventory tracking, sales analytics, and payment processing capabilities.",
      image: "https://images.pexels.com/photos/4968391/pexels-photo-4968391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Invoicing & Billing Systems",
      description: "Automated billing solutions that simplify invoice creation, delivery, and payment tracking.",
      image: "https://images.pexels.com/photos/6863183/pexels-photo-6863183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <HelpCircle className="h-8 w-8" />,
      title: "IT Support & Maintenance",
      description: "Reliable technical support and regular system maintenance to keep your business running smoothly.",
      image: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs and challenges.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Network className="h-8 w-8" />,
      title: "Networking & IT Infrastructure",
      description: "Setup and maintenance of efficient, secure networks and IT infrastructure for your business.",
      image: "https://images.pexels.com/photos/159304/network-cable-ethernet-computer-159304.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Lock className="h-8 w-8" />,
      title: "IT Security",
      description: "Comprehensive security solutions to protect your business data and digital assets.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Remote & Cloud Computing",
      description: "Cloud-based solutions that provide flexibility and accessibility for your business needs.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
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
              image={service.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
};