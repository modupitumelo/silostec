import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter, MessageSquare, MonitorSmartphone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <MonitorSmartphone className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Silostec Systems</span>
            </div>
            <p className="mb-4">
              IT company based in Hlohlokwe, bringing technology solutions to our rural community.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              
              <li><a href="#services" className="hover:text-white transition-colors">POS Systems</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Invoicing & Billing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">IT Support</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Custom Software Development</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="hover:text-white transition-colors">Who We Are</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">What We Do</a></li>
              <li><a href="#case-studies" className="hover:text-white transition-colors">Our Journey</a></li>
              <li><a href="#why-choose-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Get In Touch</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Get In Touch</h3>
            <p className="mb-2">Hlohlokwe, Sekororo, Limpopo</p>
            <p className="mb-2">073 676 6985</p>
            <p className="mb-4">info@silostecsystems.co.za</p>
            <a 
              href="https://wa.me/27736766985" 
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              WhatsApp Us
            </a>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-center">
          <p>&copy; {currentYear} Silostec Systems. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};