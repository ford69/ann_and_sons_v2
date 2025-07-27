import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Linkedin, Mail, Phone } from 'lucide-react';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
  bio: string;
  expertise: string[];
  experience: string;
  education: string;
  linkedin?: string;
  email?: string;
  phone?: string;
}

const Team: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Sarah brings over 15 years of experience in strategic HR leadership, having worked with Fortune 500 companies to transform their human capital strategies. She founded A&S with a vision to revolutionize how organizations approach talent management.',
      expertise: ['Strategic HR Planning', 'Executive Leadership', 'Organizational Development', 'Change Management'],
      experience: '15+ years in HR Leadership',
      education: 'MBA in Human Resources, Harvard Business School',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      email: 'sarah@ashr.com',
      phone: '+1 (555) 123-4567'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Head of Talent Acquisition',
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Michael specializes in executive search and technical recruitment, with a proven track record of placing top-tier talent in challenging roles. His innovative approach to candidate sourcing has revolutionized our recruitment processes.',
      expertise: ['Executive Search', 'Technical Recruitment', 'Candidate Assessment', 'Market Intelligence'],
      experience: '12+ years in Talent Acquisition',
      education: 'MS in Industrial Psychology, Stanford University',
      linkedin: 'https://linkedin.com/in/michaelchen',
      email: 'michael@ashr.com'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Director of Learning & Development',
      image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Emily designs and implements comprehensive learning strategies that drive organizational growth. Her expertise in adult learning principles and digital training platforms has helped hundreds of professionals advance their careers.',
      expertise: ['Learning Strategy', 'Leadership Development', 'Digital Training', 'Performance Coaching'],
      experience: '10+ years in L&D',
      education: 'PhD in Educational Psychology, Columbia University',
      linkedin: 'https://linkedin.com/in/emilyrodriguez',
      email: 'emily@ashr.com'
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Senior HR Consultant',
      image: 'https://images.pexels.com/photos/3184317/pexels-photo-3184317.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'David brings deep expertise in HR compliance and systems implementation. His meticulous attention to detail and comprehensive understanding of employment law ensures our clients stay compliant while optimizing their HR operations.',
      expertise: ['HR Compliance', 'HRIS Implementation', 'Employment Law', 'Process Optimization'],
      experience: '14+ years in HR Consulting',
      education: 'JD in Employment Law, Yale Law School',
      linkedin: 'https://linkedin.com/in/davidthompson',
      email: 'david@ashr.com'
    },
    {
      id: 5,
      name: 'Lisa Park',
      role: 'Organizational Psychologist',
      image: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Lisa applies psychological principles to improve workplace dynamics and employee wellbeing. Her research-based approach to organizational behavior has helped numerous companies create healthier, more productive work environments.',
      expertise: ['Organizational Psychology', 'Team Dynamics', 'Employee Wellbeing', 'Culture Assessment'],
      experience: '8+ years in Organizational Psychology',
      education: 'PhD in Organizational Psychology, UC Berkeley',
      linkedin: 'https://linkedin.com/in/lisapark',
      email: 'lisa@ashr.com'
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Strategic Partnerships Manager',
      image: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'James develops and manages strategic partnerships that extend our service capabilities. His business development expertise and relationship-building skills have been instrumental in expanding our network of trusted partners.',
      expertise: ['Partnership Development', 'Business Strategy', 'Relationship Management', 'Market Expansion'],
      experience: '11+ years in Business Development',
      education: 'MBA in Strategy, Wharton School',
      linkedin: 'https://linkedin.com/in/jameswilson',
      email: 'james@ashr.com'
    }
  ];

  const openModal = (member: TeamMember) => {
    setSelectedMember(member);
  };

  const closeModal = () => {
    setSelectedMember(null);
  };

  return (
    <section id="team" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our diverse team of HR professionals brings decades of combined experience 
            and a passion for transforming organizations through strategic talent management.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              onClick={() => openModal(member)}
              className="group bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 overflow-hidden cursor-pointer hover:border-gray-600 transition-all duration-300 shadow-2xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role} at A&S HR Consulting`}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                  {member.name}
                </h3>
                <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                  {member.role}
                </p>
                <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors">
                  Click to view full profile
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl border border-gray-700 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              >
                <div className="relative">
                  <img
                    src={selectedMember.image}
                    alt={`${selectedMember.name} - ${selectedMember.role}`}
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={closeModal}
                    className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>
                
                <div className="p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {selectedMember.name}
                    </h3>
                    <p className="text-gray-400 text-lg">
                      {selectedMember.role}
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-white font-semibold mb-2">About</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.expertise.map((skill, index) => (
                          <span
                            key={index}
                            className="bg-gray-700 text-gray-300 px-3 py-1 rounded-full text-sm"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-white font-semibold mb-2">Experience</h4>
                        <p className="text-gray-300">{selectedMember.experience}</p>
                      </div>
                      <div>
                        <h4 className="text-white font-semibold mb-2">Education</h4>
                        <p className="text-gray-300">{selectedMember.education}</p>
                      </div>
                    </div>
                    
                    <div className="flex space-x-4 pt-4 border-t border-gray-700">
                      {selectedMember.linkedin && (
                        <a
                          href={selectedMember.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <Linkedin size={20} />
                          <span>LinkedIn</span>
                        </a>
                      )}
                      {selectedMember.email && (
                        <a
                          href={`mailto:${selectedMember.email}`}
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <Mail size={20} />
                          <span>Email</span>
                        </a>
                      )}
                      {selectedMember.phone && (
                        <a
                          href={`tel:${selectedMember.phone}`}
                          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                        >
                          <Phone size={20} />
                          <span>Call</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Team;