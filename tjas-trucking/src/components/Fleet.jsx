import React, { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import Truck1 from '../assets/fleet/truck-1.png';
import Truck2 from '../assets/fleet/truck-2.jpeg';
import Truck3 from '../assets/fleet/truck-3.jpeg';
import Truck4 from '../assets/fleet/truck-4.jpeg';

const fleetImages = [Truck1, Truck2, Truck3, Truck4];

const Fleet = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section id="fleet" className="bg-paper py-24 px-6 border-t border-line">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4">
          <p className="text-xs uppercase tracking-[0.4em] text-muted">Fleet</p>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2 className="section-title font-display text-4xl md:text-5xl text-ink">
              A modern fleet engineered for confidence.
            </h2>
            <p className="text-sm text-muted max-w-md">
              Every truck is selected for performance, reliability, and comfort
              so your freight stays protected from pickup to delivery.
            </p>
          </div>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {fleetImages.map((src, index) => (
            <Motion.div
              key={index}
              className="group overflow-hidden border border-line bg-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={src}
                alt={`Fleet truck ${index + 1}`}
                onClick={() => setSelectedImage(src)}
                className="h-64 w-full object-cover transition duration-500 group-hover:scale-105 cursor-pointer"
              />
            </Motion.div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Full view"
              className="w-full h-auto border border-white/20"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-4 -right-4 h-10 w-10 rounded-full bg-white text-ink text-xl shadow-lg"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Fleet;
