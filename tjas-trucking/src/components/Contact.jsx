import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <Motion.div
            className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 text-left flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-start justify-start">
              <Mail size={26} />
            </div>
            <h3 className="font-heading text-xl text-black font-bold mb-3">Contact Information</h3>
            <p className="text-grayText font-body mb-1">
              Email: <a href="mailto:tejas1722199@yahoo.com" className="text-primary hover:underline">tejas1722199@yahoo.com</a>
            </p>
            <p className="text-grayText font-body">
              Phone: <a href="tel:+15878790500" className="text-primary hover:underline">+1 (587) 879-0500</a>
            </p>
          </Motion.div>

          {/* Card 2 */}
          <Motion.div
            className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 text-left flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-start justify-start">
              <MapPin size={26} />
            </div>
            <h3 className="font-heading text-xl text-black font-bold mb-3">Office Address</h3>
            <p className="text-grayText font-body">5404 7 Ave SW, Edmonton, AB, T6X 2K4<br />Canada</p>
          </Motion.div>

          {/* Card 3 */}
          <Motion.div
            className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-gray-100 hover:shadow-2xl transition-shadow duration-300 text-left flex flex-col items-start"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-5 flex items-start justify-start">
              <Clock size={26} />
            </div>
            <h3 className="font-heading text-xl text-black font-bold mb-3">Working Hours</h3>
            <p className="text-grayText font-body">Mon – Fri: 8am – 6pm<br />Sat: 9am – 2pm</p>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;