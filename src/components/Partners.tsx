import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Globe, Award } from 'lucide-react';

const Partners: React.FC = () => {
  const partnerLogos = [
    { name: 'TechCorp', logo: 'TC' },
    { name: 'InnovateLab', logo: 'IL' },
    { name: 'GlobalSoft', logo: 'GS' },
    { name: 'DataFlow', logo: 'DF' },
    { name: 'CloudTech', logo: 'CT' },
    { name: 'NextGen', logo: 'NG' },
    { name: 'SmartSys', logo: 'SS' },
    { name: 'FutureTech', logo: 'FT' },
  ];

  const industries = [
    { icon: Building2, name: 'Technology', count: '150+' },
    { icon: Users, name: 'Healthcare', count: '80+' },
    { icon: Globe, name: 'Finance', count: '120+' },
    { icon: Award, name: 'Manufacturing', count: '90+' },
  ];

  return (
    <section id="partners" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Trusted Partners
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We're proud to work with industry leaders across various sectors, 
            helping them build exceptional teams and achieve their goals.
          </p>
        </motion.div>

        {/* Partner Logos Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <div className="relative w-full overflow-x-auto">
            <div className="flex gap-8 py-4 min-w-[600px] animate-scroll-x">
              {partnerLogos.map((partner, index) => (
                <div
                  key={index}
                  className="group flex-shrink-0 w-40"
                >
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-xl p-6 flex items-center justify-center h-20 hover:border-gray-600 transition-all duration-300">
                    <div className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">
                      {partner.logo}
                    </div>
                  </div>
                  <div className="text-center mt-2">
                    <span className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                      {partner.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Carousel animation style */}
          <style>{`
            @keyframes scroll-x {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll-x {
              animation: scroll-x 30s linear infinite;
            }
          `}</style>
        </motion.div>

        {/* Industries */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-12">
            Industries We Serve
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => {
              const IconComponent = industry.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-xl border border-gray-700 text-center hover:border-gray-600 transition-all duration-300"
                >
                  <div className="bg-white p-3 rounded-lg w-fit mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-black" />
                  </div>
                  <h4 className="text-lg font-semibold text-white mb-2">
                    {industry.name}
                  </h4>
                  <div className="text-2xl font-bold text-gray-300 mb-1">
                    {industry.count}
                  </div>
                  <div className="text-sm text-gray-500">
                    Companies Served
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Join Our Network?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Partner with us to access top talent and innovative HR solutions 
              that will drive your business forward.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Become a Partner
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Partners;