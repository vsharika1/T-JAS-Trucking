import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, MapPin, Clock, User, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gradient-to-b from-[#f9fbfc] to-[#edf1f5] py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl text-center">
        <Motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black mb-4">
            Get in Touch
          </h2>
          <p className="text-grayText font-body text-lg md:text-xl max-w-2xl mx-auto">
            Have a question or need a quote? Reach out — we’re here to help with anything you need.
          </p>
        </Motion.div>

        <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8">
          <div className="flex flex-col gap-8">
            {/* Card 1: Contact Information (with Name) */}
            <Motion.div
              className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 text-left flex flex-col justify-between space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-start justify-start">
                <Mail size={26} />
              </div>
              <h3 className="font-heading text-xl text-black font-bold mb-4">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-grayText font-body">
                  <User size={20} className="text-primary" />
                  <span>Harpuneet Singh Gill (Harp)</span>
                </div>
                <div className="flex items-center gap-2 text-grayText font-body">
                  <Mail size={20} className="text-primary" />
                  <a href="mailto:tejas1722199@yahoo.com" className="text-primary hover:underline">tejas1722199@yahoo.com</a>
                </div>
                <div className="flex items-center gap-2 text-grayText font-body">
                  <Phone size={20} className="text-primary" />
                  <a href="tel:+15878790500" className="text-primary hover:underline">+1 (587) 879-0500</a>
                </div>
              </div>
            </Motion.div>
            {/* Card 3: Working Hours */}
            <Motion.div
              className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 text-left flex flex-col justify-between space-y-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-start justify-start">
                <Clock size={26} />
              </div>
              <h3 className="font-heading text-xl text-black font-bold mb-4">Working Hours</h3>
              <div className="space-y-2">
                <p className="text-grayText font-body">Open 24/7</p>
              </div>
            </Motion.div>
          </div>
          {/* Card 2: Office Address */}
          <Motion.div
            className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 text-left flex flex-col justify-between space-y-4 flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-start justify-start">
              <MapPin size={26} />
            </div>
            <h3 className="font-heading text-xl text-black font-bold mb-4">Office Address</h3>
            <div className="space-y-2">
              <p className="text-grayText font-body">
                2915 Ellwood Dr SW, Edmonton, AB, T6X 0A9, Canada
              </p>
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24049.535363445547!2d-113.42170719999999!3d53.4258926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01b88a2836ee7%3A0x123456789abcdef0!2s2915%20Ellwood%20Dr%20SW%2C%20Edmonton%2C%20AB%20T6X%200A9%2C%20Canada!5e0!3m2!1sen!2sca!4v1724430000000"
                width="100%"
                height="280"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg border border-gray-200 mt-auto"
              />
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;