import React, { useState } from 'react';
import { Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="pt-32 pb-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="lg:w-1/2 w-full">
            <div className="text-center pb-5">
              <h5 className="text-blue-600 text-lg font-medium mb-4">Contact us</h5>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">Get In touch</h2>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="lg:w-2/3 w-full">
            <div className="bg-white p-8 shadow-lg">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-wrap -mx-3">
                  <div className="md:w-1/2 w-full px-3">
                    <div className="mb-6">
                      <input 
                        type="text" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name" 
                        required
                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full px-3">
                    <div className="mb-6">
                      <input 
                        type="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Your Email" 
                        required
                        className="w-full px-4 py-3 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full px-3">
                    <div className="mb-6">
                      <input 
                        type="text" 
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject" 
                        required
                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="md:w-1/2 w-full px-3">
                    <div className="mb-6">
                      <input 
                        type="text" 
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone" 
                        required
                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                      />
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="mb-6">
                      <textarea 
                        placeholder="Your Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300  focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                      ></textarea>
                    </div>
                  </div>
                  <div className="w-full px-3">
                    <div className="text-center">
                      <button 
                        type="submit" 
                        className="bg-blue-600 text-white px-8 py-3  hover:bg-blue-700 transition-colors font-medium inline-flex items-center space-x-2"
                      >
                        <span>send message</span>
                        <Send className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;