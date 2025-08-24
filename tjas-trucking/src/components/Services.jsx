import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Truck, Globe, Snowflake, Layers, Clock, Shield, Briefcase, Trash2, Archive, HardHat } from 'lucide-react';

// Grouped services
const serviceGroups = [
  {
    group: "Core Freight Services",
    items: [
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
        title: "Temperature-Controlled Shipping",
        description: "Specialized trucks to maintain sensitive goods at stable temps.",
        icon: <Snowflake size={36} className="text-primary" />,
      },
    ],
  },
  {
    group: "Specialized Hauling Services",
    items: [
      {
        title: "Company Services",
        description: "Specialized company-specific hauling and logistics services.",
        icon: <Briefcase size={36} className="text-primary" />,
      },
      {
        title: "Contaminated Soil",
        description: "Safe and compliant transportation of contaminated soil.",
        icon: <Trash2 size={36} className="text-primary" />,
      },
      {
        title: "End Dumps",
        description: "Efficient end dump hauling for bulk materials and debris.",
        icon: <Archive size={36} className="text-primary" />,
      },
      {
        title: "Haul Gravel",
        description: "Reliable gravel hauling for construction and landscaping.",
        icon: <Archive size={36} className="text-primary" />,
      },
      {
        title: "Heavy Trucks",
        description: "Heavy-duty trucks for oversized and demanding loads.",
        icon: <HardHat size={36} className="text-primary" />,
      },
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative bg-neutral py-20 px-4 sm:px-6 md:px-12 overflow-hidden"
      aria-label="Our Services"
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

        {serviceGroups.map((section, sectionIndex) => (
          <div
            key={sectionIndex}
            className={`mb-12 last:mb-0`}
            aria-label={section.group}
          >
            <h3 className="text-2xl font-bold text-primary mb-6">{section.group}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((service, index) => (
                <Motion.div
                  key={index}
                  className="group bg-white/90 p-6 rounded-xl border border-gray-200 shadow hover:shadow-lg transition flex flex-col"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  aria-label={service.title}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                  <p className="text-sm text-gray-600">{service.description}</p>
                </Motion.div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;