import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, ArrowRight } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <footer id="footer" className="bg-gray-800 text-white">
      <div className="pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="lg:w-1/4 md:w-1/3 sm:w-2/3 w-full px-4">
              <div className="mt-12">
                <a href="#" className="inline-block mb-8">
                  <img src="https://images.pexels.com/photos/1426044/pexels-photo-1426044.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Logo" className="h-10 w-auto" />
                </a>
                <ul className="space-y-4">
                  <li>
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-400">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div>
                        <p>+1880 123 456 789</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-400">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p>contact@yourmail.com</p>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center space-x-3">
                      <div className="text-blue-400">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div>
                        <p>1234 Avenue New York, US</p>
                      </div>
                    </div>
                  </li>
                </ul>
                <ul className="flex space-x-4 mt-5">
                  <li>
                    <a href="#" className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                      <Facebook className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="w-10 h-10 bg-blue-400 text-white rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Mail className="w-4 h-4" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="w-10 h-10 bg-pink-600 text-white rounded-full flex items-center justify-center hover:bg-pink-700 transition-colors">
                      <Instagram className="w-4 h-4" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4">
              <div className="mt-11">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">Essential Links</h4>
                </div>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Projects</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Support</a></li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-1/3 sm:w-1/2 w-full px-4">
              <div className="mt-11">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">Services</h4>
                </div>
                <ul className="mt-4 space-y-2">
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Product Design</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Research</a></li>
                  <li><a href="#" className="hover:text-blue-400 transition-colors">Office Management</a></li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/4 md:w-5/12 sm:w-2/3 w-full px-4">
              <div className="mt-11">
                <div className="mb-4">
                  <h4 className="text-xl font-semibold">Newsletter</h4>
                </div>
                <p className="mt-4 text-gray-300">Lorem ipsum dolor sit amet, consec tetur adipiscing elit.</p>
                <form onSubmit={handleNewsletterSubmit} className="mt-5">
                  <div className="flex">
                    <input 
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="info@contact.com"
                      required
                      className="flex-1 px-4 py-3 bg-gray-700 text-white border border-gray-600 rounded-l-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                    />
                    <button 
                      type="submit"
                      className="bg-blue-600 text-white px-4 py-3 rounded-r-lg hover:bg-blue-700 transition-colors"
                    >
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-gray-700 py-6">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-gray-400">
              Template Designed and Developed by <a href="https://uideck.com" rel="nofollow" className="text-blue-400 hover:text-blue-300 transition-colors">UIdeck</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;