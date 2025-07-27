import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, Phone, Facebook, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <Motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-gradient-to-b from-black via-gray-900 to-black text-white py-16 px-6 border-t border-gray-800"
    >
      <div className="container mx-auto max-w-6xl space-y-12">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-20">
          <div className="space-y-3">
            <p className="font-heading text-3xl tracking-widest text-primary">
              T-Jas Trucking
            </p>
            <p className="text-sm font-body text-gray-400 max-w-sm">
              Reliable Freight Solutions. Proudly serving across North America with dedication, precision, and speed.
            </p>
            {/* <div className="flex space-x-4 pt-2 text-primary">
              <a href="#"><Facebook size={20} className="hover:scale-110 transition-transform" /></a>
              <a href="#"><Instagram size={20} className="hover:scale-110 transition-transform" /></a>
              <a href="#"><Linkedin size={20} className="hover:scale-110 transition-transform" /></a>
            </div> */}
          </div>

          <div className="flex flex-col space-y-3 text-sm font-body text-primary">
            <a href="mailto:tejas1722199@yahoo.com" className="hover:underline flex items-center gap-2">
              <Mail size={18} /> tejas1722199@yahoo.com
            </a>
            <a href="tel:+15878790500" className="hover:underline flex items-center gap-2">
              <Phone size={18} /> +1 (587) 879-0500
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-6 text-center text-xs text-gray-500 font-body">
          &copy; {new Date().getFullYear()} T-Jas Trucking. All rights reserved.
        </div>
      </div>
    </Motion.footer>
  );
};

export default Footer;