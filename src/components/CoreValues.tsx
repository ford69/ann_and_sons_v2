import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Heart, Lightbulb, Users, Award, Zap } from 'lucide-react';

const CoreValues: React.FC = () => {
  const values = [
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We operate with unwavering honesty and transparency in all our interactions.',
      color: 'from-gray-800 to-gray-900',
    },
    {
      icon: Heart,
      title: 'Empathy',
      description: 'We understand and care deeply about the human experience in the workplace.',
      color: 'from-gray-700 to-gray-800',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously evolve our approaches to meet the changing needs of modern business.',
      color: 'from-gray-600 to-gray-700',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of partnership and collective achievement.',
      color: 'from-gray-700 to-gray-900',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do.',
      color: 'from-gray-800 to-gray-700',
    },
    {
      icon: Zap,
      title: 'Agility',
      description: 'We adapt quickly to change and embrace new opportunities.',
      color: 'from-gray-900 to-gray-800',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="values" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Core Values
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            The principles that guide our decisions, shape our culture, and define who we are as an organization.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.01 }}
                className="group relative bg-gradient-to-br from-black to-gray-900 p-8 rounded-xl border border-gray-800 hover:border-gray-600 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>

                <div className="relative z-10">
                  <div className={`bg-gradient-to-r ${value.color} w-14 h-14 rounded-lg flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}>
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                    {value.title}
                  </h3>

                  <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default CoreValues;