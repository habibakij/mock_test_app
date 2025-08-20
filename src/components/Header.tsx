import React from 'react';
import { Shield } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
              <Shield className="w-6 h-6 text-white" />
            </div>
          </div>

          {/* Navigation Links */} <div className="hidden md:flex items-center space-x-8"> <a href="#" className="text-white hover:text-orange-400 transition-colors"> Last year </a> <a href="#" className="text-white hover:text-orange-400 transition-colors"> Exam </a> <a href="#" className="text-white hover:text-orange-400 transition-colors"> Online course </a> <a href="#" className="text-white hover:text-orange-400 transition-colors"> Free mock test </a> <a href="#" className="text-white hover:text-orange-400 transition-colors"> General Awareness </a> <a href="#" className="text-white hover:text-orange-400 transition-colors"> Your practice </a> <a href="#" className="text-white hover:text-orange-400 transition-colors"> Testimonials </a> <a href="#" className="text-white hover:text-orange-400 transition-colors"> Jobs </a> </div>
          
          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:text-orange-400 transition-colors">
              Sign Up
            </button>
            <button className="text-white hover:text-orange-400 transition-colors">
              Sign In
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;