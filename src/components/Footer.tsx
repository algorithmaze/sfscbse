import React from 'react';
import { Link } from 'react-router-dom';
import { 
  GraduationCap, 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube 
} from 'lucide-react';

export function Footer() {
  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/academics', label: 'Academics' },
    { path: '/admissions', label: 'Admissions' },
    { path: '/activities', label: 'Activities' },
    { path: '/contact', label: 'Contact Us' },
  ];

  return (
    <footer className="relative z-10 bg-blue-950/90 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* School Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">SFS CBSE School</h3>
                <p className="text-blue-200 text-sm">Excellence in Education</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Committed to providing world-class education and nurturing future leaders 
              through innovative teaching methods and comprehensive development programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Instagram className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="p-2 bg-blue-700 rounded-lg hover:bg-blue-600 transition-colors duration-300">
                <Youtube className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-blue-200 transition-colors duration-300 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    123 Education Street,<br />
                    Academic City, State - 123456
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-300" />
                <p className="text-gray-300 text-sm">+91 98765 43210</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-300" />
                <p className="text-gray-300 text-sm">sfscbsetry@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 SFS CBSE School. All rights reserved. | Designed with excellence in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}