import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, Send } from 'lucide-react';

const Footer: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { id: 'home', label: 'Home' },
    { id: 'mission', label: 'Mission & Vision' },
    { id: 'values', label: 'Core Values' },
    { id: 'services', label: 'Services' },
    { id: 'partners', label: 'Partners' },
    { id: 'team', label: 'Team' },
    { id: 'contact', label: 'Contact' },
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://linkedin.com/company/ashr', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/ashr', label: 'Twitter' },
    { icon: Facebook, href: 'https://facebook.com/ashr', label: 'Facebook' },
    { icon: Instagram, href: 'https://instagram.com/ashr', label: 'Instagram' },
  ];

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* About Us */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <div className="text-3xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-4">
                A&S
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering organizations and enabling talent through strategic HR solutions. 
                We transform businesses by connecting exceptional people with extraordinary opportunities.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">New York, NY</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-4 h-4" />
                <span className="text-sm">hello@ashr.com</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><span className="text-gray-400 text-sm">Talent Acquisition</span></li>
              <li><span className="text-gray-400 text-sm">HR Strategy</span></li>
              <li><span className="text-gray-400 text-sm">Training & Development</span></li>
              <li><span className="text-gray-400 text-sm">Compliance & Systems</span></li>
              <li><span className="text-gray-400 text-sm">Organizational Psychology</span></li>
              <li><span className="text-gray-400 text-sm">Partnership Solutions</span></li>
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="text-white font-semibold mb-6">Stay Connected</h3>
            
            {/* Newsletter */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-4">
                Subscribe to our newsletter for HR insights and industry updates.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400 text-sm"
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black px-4 py-3 rounded-lg font-semibold text-sm hover:bg-gray-100 transition-colors flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </motion.button>
              </form>
            </div>

            {/* Social Media */}
            <div>
              <p className="text-gray-400 text-sm mb-4">Follow us on social media</p>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors group"
                      aria-label={social.label}
                    >
                      <IconComponent className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © 2025 A&S HR Consulting. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;