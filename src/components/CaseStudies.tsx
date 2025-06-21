import React from 'react';
import { CaseStudyCard } from './CaseStudyCard';

export const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Journey</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            We've helped various organizations improve their operations with our technology solutions.
            Here are some of our success stories.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <CaseStudyCard
            client="Christian Fire Church"
            title="Financial Management Systems"
            description={
              <p>
                We designed a robust system to streamline the church's financial records, reporting, 
                and budget management, enhancing transparency and accountability.
              </p>
            }
            image="https://images.pexels.com/photos/2451616/pexels-photo-2451616.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            color="bg-blue-700"
          />
          
          <CaseStudyCard
            client="Branels Furniture"
            title="Point of Sale Systems"
            description={
              <div>
                <p className="mb-2">
                  We provided custom POS systems designed specifically for furniture stores.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Barcode scanning & receipt printing</li>
                  <li>Real-time stock tracking</li>
                  <li>Lay-by payment options</li>
                  <li>Sales reporting & analytics</li>
                </ul>
              </div>
            }
            image="https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            color="bg-teal-700"
          />
          
          <CaseStudyCard
            client="MMJ Group"
            title="Invoicing Systems"
            description={
              <div>
                <p className="mb-2">
                  We provided easy-to-use invoicing systems to help manage and send invoices quickly.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Customizable invoices</li>
                  <li>Automated billing</li>
                  <li>Real-time tracking</li>
                  <li>Tax calculations</li>
                  <li>Payment integration</li>
                </ul>
              </div>
            }
            image="https://images.pexels.com/photos/210990/pexels-photo-210990.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            color="bg-indigo-700"
          />
          
          <CaseStudyCard
            client="Maruleng Gender-Based Violence"
            title="IT Support"
            description={
              <div>
                <p className="mb-2">
                  We provide IT support to help the center run smoothly and support their important work.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Quick technical support</li>
                  <li>Secure network management</li>
                  <li>Data protection</li>
                  <li>Regular system maintenance</li>
                  <li>Staff technology training</li>
                </ul>
              </div>
            }
            image="https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            color="bg-purple-700"
          />
        </div>
      </div>
    </section>
  );
};