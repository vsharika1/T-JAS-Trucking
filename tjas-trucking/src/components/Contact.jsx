import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Mail, MapPin, Clock, User, Phone } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="bg-surface py-24 px-6 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <Motion.div
          className="mb-14 flex flex-col gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-xs uppercase tracking-[0.4em] text-muted">Contact</p>
          <h2 className="section-title font-display text-4xl md:text-5xl text-ink">
            Let’s talk about your next shipment.
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl">
            Have a question or need a quote? Reach out and we’ll respond with a
            clear plan and timeline for your freight.
          </p>
        </Motion.div>

        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-stretch">
          <div className="flex flex-col gap-6 lg:h-full">
            <Motion.div
              className="border border-line bg-paper p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 text-accent">
                <Mail size={24} />
              </div>
              <h3 className="font-display text-2xl text-ink mb-4">
                Contact Information
              </h3>
              <div className="space-y-3 text-sm text-muted">
                <div className="flex items-center gap-2">
                  <User size={18} className="text-accent" />
                  <span>Harpuneet Singh Gill (Harp)</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={18} className="text-accent" />
                  <a
                    href="mailto:tejas1722199@yahoo.com"
                    className="text-ink hover:text-accent"
                  >
                    tejas1722199@yahoo.com
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={18} className="text-accent" />
                  <a
                    href="tel:+15878790500"
                    className="text-ink hover:text-accent"
                  >
                    +1 (587) 879-0500
                  </a>
                </div>
              </div>
            </Motion.div>

            <Motion.div
              className="border border-line bg-paper p-8 lg:flex-1 flex flex-col justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="mb-6 text-accent">
                <Clock size={24} />
              </div>
              <h3 className="font-display text-2xl text-ink mb-4">Working Hours</h3>
              <p className="text-sm text-muted">Open 24/7</p>
            </Motion.div>
          </div>

          <Motion.div
            className="border border-line bg-paper p-8 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 text-accent">
              <MapPin size={24} />
            </div>
            <h3 className="font-display text-2xl text-ink mb-4">Office Address</h3>
            <div className="space-y-4 text-sm text-muted flex flex-col flex-1">
              <p>
                2915 Ellwood Dr SW, Edmonton, AB, T6X 0A9, Canada
              </p>
              <iframe
                title="Google Maps Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24049.535363445547!2d-113.42170719999999!3d53.4258926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01b88a2836ee7%3A0x123456789abcdef0!2s2915%20Ellwood%20Dr%20SW%2C%20Edmonton%2C%20AB%20T6X%200A9%2C%20Canada!5e0!3m2!1sen!2sca!4v1724430000000"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="border border-line w-full flex-1 min-h-[300px]"
              />
            </div>
          </Motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
