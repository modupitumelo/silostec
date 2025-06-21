import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare } from 'lucide-react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('https://formspree.io/f/xldbaepb', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        alert('Thank you for your message! We will get back to you soon.');
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        alert(result?.errors?.[0]?.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('Failed to send message. Please check your connection and try again.');
      console.error('Form submission error:', error);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-red-600 mx-auto mb-6"></div>
          <p className="text-lg text-slate-600">
            Have questions or need our services? Reach out to us and we'll be happy to help.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="text-red-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-800 mb-1">Head Office:</p>
                  <p className="text-slate-600">
                    Opposite Garage<br />
                    Hlohlokwe<br />
                    Sekororo<br />
                    Trichardtsdal<br />
                    Limpopo, South Africa<br />
                    0890
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="text-red-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-800 mb-1">Phone:</p>
                  <p className="text-slate-600">073 676 6985</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-red-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-800 mb-1">Email:</p>
                  <p className="text-slate-600">info@silostecsystems.co.za</p>
                </div>
              </div>

              <div className="flex items-start">
                <MessageSquare className="text-red-600 h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <p className="font-medium text-slate-800 mb-1">WhatsApp:</p>
                  <p className="text-slate-600">073 676 6985</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-xl font-bold text-slate-800 mb-4">Work Schedule</h4>
              <div className="space-y-2">
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">Monday - Friday</span>
                  <span className="font-medium text-slate-800">08:00 – 18:00</span>
                </div>
                <div className="flex justify-between border-b border-slate-200 pb-2">
                  <span className="text-slate-600">Saturday - Sunday</span>
                  <span className="font-medium text-slate-800">08:00 – 15:00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-3 bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-slate-800 mb-6">Send Us a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
