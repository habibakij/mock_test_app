import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Linkedin, Youtube, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center mr-3">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-orange-400">Sunrise Software Ltd.</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Let us be your trusted learning companion every step of the way.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Explore</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Last year</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Exam</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Online course</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Free mock test</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">General Awareness</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Your practice</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Testimonials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Jobs</a></li>
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Useful Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Study Guide & Application</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Terms & Conditions</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Refund & Cancellation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">Rescheduling Policy</a></li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  3rd floor, Sharif Plaza, 39 Kemal Ataturk Avenue, Banani, Dhaka-1213.
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <p className="text-gray-400">09613-131415</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <p className="text-gray-400">ask@sunrisesoftware.com</p>
              </div>
              <div className="mt-4">
                <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors duration-300 underline">
                  View Map
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Authorization and Payment Methods */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Authorized by */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Authorized by</p>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 px-4 py-2 rounded">
                  <span className="text-blue-400 font-bold text-sm">IATA</span>
                </div>
              </div>
            </div>

            {/* Verified by */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Verified by</p>
              <div className="flex items-center space-x-4">
                <div className="bg-gray-800 px-4 py-2 rounded">
                  <span className="text-green-400 font-bold text-sm">BASIS</span>
                </div>
              </div>
            </div>

            {/* Payment Methods */}
            <div>
              <p className="text-gray-400 text-sm mb-3">Payment Method</p>
              <div className="flex flex-wrap gap-2">
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-red-600 font-bold text-xs">MasterCard</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-blue-600 font-bold text-xs">VISA</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-orange-600 font-bold text-xs">bKash</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-green-600 font-bold text-xs">Nagad</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-blue-800 font-bold text-xs">Rocket</span>
                </div>
                <div className="bg-white rounded px-2 py-1">
                  <span className="text-purple-600 font-bold text-xs">AMEX</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 <span className="text-orange-400">Sunrise Software Ltd.</span> All Rights Reserved
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                EMI Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 text-sm transition-colors duration-300">
                FAQ's
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;