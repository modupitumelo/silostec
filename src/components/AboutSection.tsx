import React from 'react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Who We Are</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Silostec Systems is an IT company serving businesses across South Africa. 
            We help organizations with simple, reliable technology that makes their work easier and more efficient.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-8 rounded-lg shadow-md transform transition-transform hover:scale-105">
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Vision</h3>
            <p className="text-slate-700 mb-6">
              To be a trusted IT company that helps South African businesses grow and succeed through 
              innovative technology solutions.
            </p>
            
            <h3 className="text-2xl font-bold text-blue-800 mb-4">Our Mission</h3>
            <ul className="list-disc pl-5 text-slate-700 space-y-2">
              <li>To provide reliable and affordable IT services for businesses across South Africa.</li>
              <li>To help organizations implement smart systems that enhance productivity and efficiency.</li>
              <li>To build strong and lasting relationships with our clients through excellent service delivery.</li>
            </ul>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl h-80 md:h-96">
            <img 
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="IT professional working on technology solutions" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/70 to-transparent flex items-end">
              <div className="p-6">
                <p className="text-white text-lg md:text-xl font-medium">
                  Serving South African businesses since 2022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};