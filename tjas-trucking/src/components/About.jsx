import React from 'react';
import { motion as Motion } from 'framer-motion';
import { Layers, Globe, Shield, Truck } from 'lucide-react';

const highlights = [
  {
    title: 'Smart Freight Coordination',
    description: 'Streamlined planning, clear routing, and proactive updates.',
    icon: Layers,
  },
  {
    title: 'International-Ready Logistics',
    description: 'Customs-aware operations for cross-border reliability.',
    icon: Globe,
  },
  {
    title: 'Compliance & Safety First',
    description: 'Strict adherence to transport regulations and protocols.',
    icon: Shield,
  },
  {
    title: 'Versatile Equipment',
    description: 'Modern fleet options for specialized hauling.',
    icon: Truck,
  },
];

const stats = [
  { label: 'Years of Experience', value: '10+' },
  { label: 'On-Time Delivery Rate', value: '99%' },
  { label: 'Customer Support', value: '24/7' },
];

const About = () => {
  return (
    <section id="about" className="bg-paper py-24 px-6 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <Motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-xs uppercase tracking-[0.4em] text-muted">
              About
            </p>
            <h2 className="section-title font-display text-4xl md:text-5xl text-ink">
              Logistics built for calm, consistent delivery.
            </h2>
            <p className="text-muted text-base md:text-lg leading-relaxed">
              T-Jas Trucking is built on reliability, safety, and on-time
              performance. We coordinate long-haul and regional freight with a
              disciplined team and a modern fleet, ensuring your cargo arrives
              with clarity at every handoff.
            </p>
            <div className="border-t border-line pt-6 text-sm uppercase tracking-[0.3em] text-muted">
              Serving North America with precision and care.
            </div>
          </Motion.div>

          <div className="grid gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Motion.div
                  key={item.title}
                  className="flex gap-4 border border-line bg-surface/90 p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="mt-1 rounded-full border border-line bg-paper p-2 text-accent">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="font-display text-xl text-ink">
                      {item.title}
                    </h4>
                    <p className="text-sm text-muted">{item.description}</p>
                  </div>
                </Motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-16 grid gap-6 border-t border-line pt-10 md:grid-cols-3">
          {stats.map((item, index) => (
            <Motion.div
              key={item.label}
              className="flex flex-col gap-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <p className="font-display text-4xl text-ink">{item.value}</p>
              <p className="text-xs uppercase tracking-[0.3em] text-muted">
                {item.label}
              </p>
            </Motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
