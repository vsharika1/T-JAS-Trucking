import React from 'react';
import { motion as Motion } from 'framer-motion';
import {
  Truck,
  Snowflake,
  Layers,
  Clock,
  Briefcase,
  Trash2,
  Archive,
  HardHat,
} from 'lucide-react';

const serviceGroups = [
  {
    group: 'Core Freight Services',
    description: 'Flexible routes with dependable scheduling and visibility.',
    items: [
      {
        title: 'Long-Haul Trucking',
        description: 'Coast-to-coast transport with consistent delivery windows.',
        icon: Truck,
      },
      {
        title: 'Regional Delivery',
        description: 'Efficient regional coverage with rapid dispatch response.',
        icon: Clock,
      },
      {
        title: 'Temperature-Controlled Shipping',
        description: 'Specialized units to protect sensitive goods in transit.',
        icon: Snowflake,
      },
    ],
  },
  {
    group: 'Specialized Hauling Services',
    description: 'Dedicated equipment for complex, regulated, or heavy loads.',
    items: [
      {
        title: 'Company Services',
        description: 'Tailored hauling programs aligned to your operation.',
        icon: Briefcase,
      },
      {
        title: 'Contaminated Soil',
        description: 'Safe, compliant transportation for regulated materials.',
        icon: Trash2,
      },
      {
        title: 'End Dumps',
        description: 'Reliable end dump solutions for bulk materials.',
        icon: Archive,
      },
      {
        title: 'Haul Gravel',
        description: 'Dedicated hauling for construction and landscaping sites.',
        icon: Layers,
      },
      {
        title: 'Heavy Trucks',
        description: 'Heavy-duty equipment for oversized, demanding loads.',
        icon: HardHat,
      },
    ],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-surface py-24 px-6 border-t border-line"
      aria-label="Our Services"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 flex flex-col gap-4 text-left">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">
            Services
          </p>
          <h2 className="section-title font-display text-4xl md:text-5xl text-ink">
            Intuitive freight options built around your schedule.
          </h2>
          <p className="text-muted text-base md:text-lg max-w-2xl">
            T-Jas Trucking offers dependable, flexible, and safe transport
            solutions for industries that need clarity and control at every
            step.
          </p>
        </div>

        <div className="space-y-14">
          {serviceGroups.map((section, sectionIndex) => (
            <div key={section.group} aria-label={section.group}>
              <div className="flex flex-wrap items-end justify-between gap-6 border-b border-line pb-4">
                <div>
                  <h3 className="font-display text-2xl text-ink">
                    {section.group}
                  </h3>
                  <p className="text-sm text-muted">{section.description}</p>
                </div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  {String(sectionIndex + 1).padStart(2, '0')}
                </p>
              </div>

              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {section.items.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Motion.div
                      key={service.title}
                      className="group flex flex-col gap-4 border border-line bg-paper p-6 transition hover:border-ink"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      aria-label={service.title}
                    >
                      <div className="flex items-center gap-4">
                        <div className="rounded-full border border-line bg-surface p-2 text-accent">
                          <Icon size={20} />
                        </div>
                        <h4 className="font-display text-xl text-ink">
                          {service.title}
                        </h4>
                      </div>
                      <p className="text-sm text-muted">{service.description}</p>
                    </Motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
