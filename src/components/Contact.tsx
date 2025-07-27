import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Clock, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      value: 'hello@ashr.com',
      link: 'mailto:hello@ashr.com',
      description: 'Send us an email anytime'
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
      description: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'New York, NY',
      link: '#',
      description: 'Come say hello at our HQ'
    },
    {
      icon: Clock,
      title: 'Response Time',
      value: '< 24 hours',
      link: '#',
      description: 'We respond quickly'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Ready to transform your HR strategy? Let's discuss how we can help
            your organization thrive in today's competitive landscape.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let's Start a Conversation
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                Whether you're looking to enhance your recruitment process, develop your team, 
                or implement strategic HR solutions, we're here to help. Reach out to discuss 
                your specific needs and discover how we can drive your success.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <a
                      href={info.link}
                      className="flex items-start space-x-4 p-4 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300"
                    >
                      <div className="bg-white p-3 rounded-lg group-hover:bg-gray-100 transition-colors">
                        <IconComponent className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                        <div className="font-semibold text-white mb-1">{info.value}</div>
                        <div className="text-sm text-gray-400">{info.description}</div>
                      </div>
                    </a>
                  </motion.div>
                );
              })}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-6 h-6 text-white" />
                <h4 className="text-white font-semibold">Global Reach</h4>
              </div>
              <p className="text-gray-400 text-sm">
                We serve clients across North America, Europe, and Asia-Pacific, 
                with expertise in international HR practices and compliance.
              </p>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white placeholder-gray-400"
                      placeholder="Your company name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors text-white"
                  >
                    <option value="">Select a service</option>
                    <option value="talent-acquisition">Talent Acquisition</option>
                    <option value="hr-strategy">HR Strategy</option>
                    <option value="training">Training & Development</option>
                    <option value="compliance">Compliance & Systems</option>
                    <option value="psychology">Organizational Psychology</option>
                    <option value="partnerships">Partnership Solutions</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:border-white focus:outline-none transition-colors resize-none text-white placeholder-gray-400"
                    placeholder="Tell us about your HR needs and how we can help..."
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-white text-black px-8 py-4 rounded-lg font-semibold text-lg shadow-2xl hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;