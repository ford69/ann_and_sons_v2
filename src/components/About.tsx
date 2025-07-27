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
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.pexels.com/photos/3184420/pexels-photo-3184420.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="A&S team collaboration"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
            </div>
            
            <motion.div
              animate={{ rotate: [0, 5, 0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-orange-500 p-6 rounded-xl shadow-lg text-white"
            >
              <div className="text-3xl font-bold">15+</div>
              <div className="text-sm">Years Experience</div>
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
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About A&S
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Founded with a vision to revolutionize human resources, A&S combines deep industry expertise 
                with innovative approaches to solve complex workforce challenges. We believe that great businesses 
                are built by great people, and our mission is to help organizations unlock their full potential.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of seasoned HR professionals brings decades of combined experience across diverse 
                industries, ensuring that we deliver solutions that are not just effective, but transformative.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-6">
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
                    <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <IconComponent className="w-8 h-8 text-orange-500" />
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                    <p className="text-sm text-gray-600">{value.description}</p>
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