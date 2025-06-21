import React from 'react';
import { ArrowRight, MonitorSmartphone, Server, Shield, Users } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-slate-900/80"></div>
      </div>

      {/* Glowing orb effect */}
      <div className="absolute top-1/4 -right-24 w-96 h-96 bg-red-500 rounded-full filter blur-[128px] opacity-20"></div>
      <div className="absolute bottom-1/4 -left-24 w-96 h-96 bg-blue-500 rounded-full filter blur-[128px] opacity-20"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-blue-400">
                IT Solutions
              </span>
              <br />
              for South Africa
            </h1>

            <p className="text-lg text-white mb-8 leading-relaxed max-w-xl">
              Bridging the digital gap with reliable, affordable technology solutions 
              for businesses across South Africa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#services" 
                className="bg-red-600 hover:bg-red-700 transition-colors py-3 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl flex items-center justify-center group text-white"
              >
                Explore Services
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>

              <a 
                href="#contact" 
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm transition-colors py-3 px-6 rounded-lg font-medium flex items-center justify-center text-white"
              >
                Get in Touch
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Server className="h-6 w-6 text-red-400" />,
                  title: "IT Infrastructure",
                  desc: "Modern solutions for South African businesses"
                },
                {
                  icon: <Shield className="h-6 w-6 text-blue-400" />,
                  title: "Secure Systems",
                  desc: "Protected data & operations"
                },
                {
                  icon: <Users className="h-6 w-6 text-red-400" />,
                  title: "Local Support",
                  desc: "Nationwide technical assistance"
                },
                {
                  icon: <MonitorSmartphone className="h-6 w-6 text-blue-400" />,
                  title: "Smart Solutions",
                  desc: "Tailored for your needs"
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-colors group"
                >
                  <div className="bg-white/10 rounded-lg p-3 w-fit mb-4 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-2 text-white">{item.title}</h3>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-8 -right-8 w-64 h-64 bg-gradient-to-br from-red-500/20 to-blue-500/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-red-500/20 rounded-full filter blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};