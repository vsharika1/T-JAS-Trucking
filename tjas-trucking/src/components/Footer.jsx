import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, Phone, User } from 'lucide-react';

const Footer = () => {
  return (
    <Motion.footer
      role="contentinfo"
      aria-label="Footer"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="bg-ink text-paper py-16 px-6"
    >
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.45em] text-paper/60">
              T-JAS Trucking
            </p>
            <p className="font-display text-3xl text-paper">
              Reliable freight with refined execution.
            </p>
            <p className="text-sm text-paper/60 max-w-sm">
              Serving North America with dedicated fleets, disciplined routes,
              and consistent communication.
            </p>
          </div>

          <div className="space-y-3 text-sm text-paper/70">
            <div className="flex items-center gap-2 text-paper">
              <User size={18} /> Harpuneet Singh Gill (Harp)
            </div>
            <a
              href="mailto:tejas1722199@yahoo.com"
              className="flex items-center gap-2 hover:text-accent"
            >
              <Mail size={18} /> tejas1722199@yahoo.com
            </a>
            <a
              href="tel:+15878790500"
              className="flex items-center gap-2 hover:text-accent"
            >
              <Phone size={18} /> +1 (587) 879-0500
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-paper/20 pt-6 text-xs uppercase tracking-[0.35em] text-paper/50">
          &copy; {new Date().getFullYear()} T-Jas Trucking. All rights reserved.
        </div>
      </div>
    </Motion.footer>
  );
};

export default Footer;
