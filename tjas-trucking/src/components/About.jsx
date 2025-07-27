import React from 'react';
import { motion as Motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="bg-white py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <Motion.div
          className="text-center md:text-left mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-black mb-6">
            About T-Jas Trucking
          </h2>
          <p className="text-grayText font-body text-lg md:text-xl leading-relaxed mx-auto md:mx-0">
            T-Jas Trucking is built on a foundation of reliability, safety, and on-time delivery.
            With years of experience in long-haul and regional transportation, our dedicated team ensures your freight moves efficiently and securely across North America.
            We are committed to offering professional service and strong customer relationships every mile of the journey.
          </p>
        </Motion.div>

        {/* Enhanced Icon Grid / Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: 'Years of Experience', value: '10+' },
            { label: 'On-Time Delivery Rate', value: '99%' },
            { label: 'Customer Support', value: '24/7' },
          ].map((item, index) => (
            <Motion.div
              key={index}
              className="bg-neutral rounded-lg p-8 shadow hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-primary text-5xl font-extrabold mb-3">{item.value}</h3>
              <p className="text-grayText font-body text-lg">{item.label}</p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;