import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Award } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Strategic Focus',
      description: 'We align HR initiatives with business objectives for maximum impact.',
    },
    {
      icon: Heart,
      title: 'Human-Centered',
      description: 'People are at the heart of everything we do and every solution we create.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We deliver exceptional results through proven methodologies and expertise.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-xl">
              <img
                src="https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="A&S team collaboration"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-gradient-to-br from-gray-900 to-gray-700 p-5 rounded-lg text-white border border-gray-800 shadow-xl"
            >
              <div className="text-2xl font-bold">15+</div>
              <div className="text-xs">Years Experience</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
                About A&S
              </h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Founded with a vision to revolutionize human resources, A&S combines deep industry expertise 
                with innovative approaches to solve complex workforce challenges. We believe that great businesses 
                are built by great people, and our mission is to help organizations unlock their full potential.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                Our team of seasoned HR professionals brings decades of combined experience across diverse 
                industries, ensuring that we deliver solutions that are not just effective, but transformative.
              </p>
            </div>
            <div className="flex gap-6">
              {values.map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-gray-100 mb-1 text-sm">{value.title}</h3>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;