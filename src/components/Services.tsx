
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaUserTie, FaUsers, FaChartLine, FaShieldAlt, FaBrain, FaHandshake } from 'react-icons/fa';

type Service = {
  icon: React.FC<any>;
  title: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
};

const Services: React.FC = () => {
  const [expandedService, setExpandedService] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: FaUserTie,
      title: 'Talent Acquisition',
      shortDescription: 'Strategic recruitment solutions to find and attract top-tier talent.',
      fullDescription: 'Our comprehensive talent acquisition services combine cutting-edge technology with human expertise to identify, attract, and secure the best candidates for your organization. We understand that great hires are the foundation of successful businesses.',
      features: [
        'Executive Search & Leadership Recruitment',
        'Technical & Specialized Role Placement',
        'Bulk Hiring & Volume Recruitment',
        'Employer Branding & Candidate Experience',
        'Assessment & Interview Process Design'
      ],
      benefits: [
        'Reduced time-to-hire by 40%',
        'Higher quality candidate matches',
        'Improved retention rates',
        'Enhanced employer brand reputation'
      ]
    },
    {
      icon: FaChartLine,
      title: 'HR Strategy',
      shortDescription: 'Comprehensive human resource strategies that drive business growth.',
      fullDescription: 'We develop and implement strategic HR initiatives that align with your business objectives, creating sustainable competitive advantages through effective people management and organizational development.',
      features: [
        'HR Audit & Gap Analysis',
        'Organizational Design & Restructuring',
        'Performance Management Systems',
        'Compensation & Benefits Strategy',
        'Change Management & Transformation'
      ],
      benefits: [
        'Aligned HR strategy with business goals',
        'Improved organizational efficiency',
        'Enhanced employee engagement',
        'Better decision-making capabilities'
      ]
    },
    {
      icon: FaUsers,
      title: 'Training & Development',
      shortDescription: 'Customized learning programs that enhance skills and boost performance.',
      fullDescription: 'Our training and development programs are designed to unlock human potential, building capabilities that drive individual growth and organizational success in an ever-evolving business landscape.',
      features: [
        'Leadership Development Programs',
        'Skills Assessment & Gap Analysis',
        'Custom Training Curriculum Design',
        'Digital Learning Platforms',
        'Mentoring & Coaching Programs'
      ],
      benefits: [
        'Increased employee productivity',
        'Higher retention rates',
        'Improved leadership pipeline',
        'Enhanced organizational capabilities'
      ]
    },
    {
      icon: FaShieldAlt,
      title: 'Compliance & Systems',
      shortDescription: 'Robust compliance frameworks and HR systems implementation.',
      fullDescription: 'We ensure your organization stays compliant with evolving regulations while implementing efficient HR systems that streamline operations and reduce administrative burden.',
      features: [
        'Regulatory Compliance Management',
        'HRIS Implementation & Optimization',
        'Policy Development & Documentation',
        'Audit Preparation & Support',
        'Data Privacy & Security Compliance'
      ],
      benefits: [
        'Reduced compliance risks',
        'Streamlined HR processes',
        'Better data management',
        'Cost savings through automation'
      ]
    },
    {
      icon: FaBrain,
      title: 'Organizational Psychology',
      shortDescription: 'Behavioral insights and psychological assessments for better workplace dynamics.',
      fullDescription: 'Leverage the power of organizational psychology to create healthier, more productive work environments through evidence-based interventions and behavioral insights.',
      features: [
        'Workplace Culture Assessment',
        'Team Dynamics Analysis',
        'Psychological Safety Initiatives',
        'Conflict Resolution Strategies',
        'Employee Wellbeing Programs'
      ],
      benefits: [
        'Improved team collaboration',
        'Reduced workplace conflicts',
        'Enhanced employee wellbeing',
        'Higher job satisfaction scores'
      ]
    },
    {
      icon: FaHandshake,
      title: 'Partnership Solutions',
      shortDescription: 'Strategic partnerships and outsourcing solutions for HR functions.',
      fullDescription: 'Build strategic partnerships that extend your HR capabilities, from complete HR outsourcing to specialized consulting arrangements that scale with your business needs.',
      features: [
        'HR Outsourcing Services',
        'Strategic Partnership Development',
        'Vendor Management & Selection',
        'Service Level Agreement Design',
        'Performance Monitoring & Optimization'
      ],
      benefits: [
        'Reduced operational costs',
        'Access to specialized expertise',
        'Scalable HR solutions',
        'Focus on core business activities'
      ]
    }
  ];

  const toggleService = (index: number) => {
    setExpandedService(expandedService === index ? null : index);
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Comprehensive HR solutions tailored to your unique business needs, 
            helping you build stronger teams and achieve sustainable growth.
          </p>
        </motion.div>

        <div className="space-y-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedService === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-black to-gray-900 rounded-xl border border-gray-800 overflow-hidden"
              >
                <div className="flex items-center gap-6 p-8">
                  <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-3 rounded-lg">
                    <IconComponent className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-white mb-1">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-2">{service.shortDescription}</p>
                    <button
                      onClick={() => toggleService(index)}
                      className="text-xs text-gray-400 hover:text-white transition-colors underline"
                    >
                      {isExpanded ? 'Hide Details' : 'Show Details'}
                    </button>
                  </div>
                </div>
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-8 pb-8"
                    >
                      <p className="text-gray-300 leading-relaxed mb-4">
                        {service.fullDescription}
                      </p>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-white font-semibold mb-2 text-sm">Key Features</h4>
                          <ul className="space-y-1">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="text-gray-400 text-xs flex items-start">
                                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="text-white font-semibold mb-2 text-sm">Benefits</h4>
                          <ul className="space-y-1">
                            {service.benefits.map((benefit, benefitIndex) => (
                              <li key={benefitIndex} className="text-gray-400 text-xs flex items-start">
                                <span className="w-1.5 h-1.5 bg-white rounded-full mt-2 mr-2 flex-shrink-0"></span>
                                {benefit}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;