import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Truck, Globe, Snowflake, Layers, Clock, Shield } from 'lucide-react';

const services = [
  {
    title: "Long-Haul Trucking",
    description: "Reliable coast-to-coast freight transport across North America.",
    icon: <Truck size={36} className="text-primary" />,
  },
  {
    title: "Regional Delivery",
    description: "Efficient local and regional delivery with flexible scheduling.",
    icon: <Clock size={36} className="text-primary" />,
  },
  {
    title: "Freight Management",
    description: "Streamlined logistics planning and cargo coordination.",
    icon: <Layers size={36} className="text-primary" />,
  },
  {
    title: "Temperature-Controlled Shipping",
    description: "Specialized trucks to maintain sensitive goods at stable temps.",
    icon: <Snowflake size={36} className="text-primary" />,
  },
  {
    title: "Cross-Border Expertise",
    description: "Customs-ready operations for smooth international transport.",
    icon: <Globe size={36} className="text-primary" />,
  },
  {
    title: "Safety & Compliance",
    description: "Strict adherence to transport regulations and safety protocols.",
    icon: <Shield size={36} className="text-primary" />,
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-neutral py-20 px-6 md:px-12 overflow-hidden"
    >
      {/* Background effect */}
      <div
        className="pointer-events-none absolute inset-0 z-0"
        aria-hidden="true"
      >
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-to-tr from-primary/10 via-blue-300/20 to-cyan-200/10 rounded-full blur-3xl opacity-60"></div>
      </div>
      <div className="relative container mx-auto max-w-6xl z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-extrabold text-black mb-6 tracking-tight">
            Our Services
          </h2>
          <p className="text-grayText font-body text-lg md:text-xl max-w-2xl mx-auto">
            T-Jas Trucking offers dependable, flexible, and safe transport solutions designed to meet your business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <Motion.div
              key={index}
              className="group relative bg-white/90 p-8 rounded-xl border border-gray-200 shadow-md hover:shadow-xl hover:scale-[1.04] transition-all duration-300 cursor-pointer flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="mb-5 flex items-start justify-start">
                {service.icon}
              </div>
              <h3 className="text-2xl font-heading font-bold text-black mb-3 tracking-tight group-hover:text-primary transition">
                {service.title}
              </h3>
              <p className="text-grayText font-body text-base leading-relaxed">
                {service.description}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;