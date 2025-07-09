import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin } from 'lucide-react';
import SectionTitle from '../components/SectionTitle';

const ContactSection: React.FC = () => {
  return (
   <section id="contact" className="section-padding bg-gradient-to-b from-black via-gray-900           to-black text-white">
      <div className="container-custom">
        <SectionTitle 
          title="Get In Touch"
          subtitle="Have a question or want to work together? Drop me a message!"
          center={true}
        />
        
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Email</h4>
                  <a href="mailto: kanishkanagar02gmail.com" className="text-gray-600 hover:text-primary-600 transition-colors">
                    Kanishkanagar02@gmail.com
                  </a>
                </div>
              </div>
              
          
              
              <div className="flex items-start">
                <div className="bg-primary-100 p-3 rounded-full text-primary-600 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium">Location</h4>
                  <p className="text-gray-600">Jaipur, India</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;