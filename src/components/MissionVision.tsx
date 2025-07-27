import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Quote } from 'lucide-react';

const MissionVision: React.FC = () => {
  return (
    <section id="mission" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Our Purpose
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Driven by a clear mission and guided by an inspiring vision for the future of work.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <Target className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Mission</h3>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-600" />
                <p className="text-gray-300 text-lg leading-relaxed pl-6">
                  To empower organizations by connecting them with exceptional talent while 
                  enabling individuals to reach their full potential. We believe that the 
                  right people in the right roles create extraordinary outcomes.
                </p>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-700">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-white">500+</div>
                    <div className="text-sm text-gray-400">Placements</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">98%</div>
                    <div className="text-sm text-gray-400">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 shadow-2xl">
              <div className="flex items-center mb-6">
                <div className="bg-white p-3 rounded-lg mr-4">
                  <Eye className="w-8 h-8 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Our Vision</h3>
              </div>
              
              <div className="relative">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-gray-600" />
                <p className="text-gray-300 text-lg leading-relaxed pl-6">
                  To be the global leader in human capital solutions, creating a world where 
                  every organization thrives through strategic talent management and every 
                  professional finds meaningful, fulfilling work.
                </p>
              </div>
              
              <div className="mt-8">
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Vision of future workplace collaboration and innovation"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-sm font-medium">Future of Work</div>
                    <div className="text-xs text-gray-300">Innovation • Collaboration • Growth</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;