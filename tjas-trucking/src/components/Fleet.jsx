import React, { useState } from 'react';
import { MotionConfig, motion as Motion } from 'framer-motion';
import Truck1 from '../assets/fleet/truck-1.png'
import Truck2 from '../assets/fleet/truck-2.jpeg'
import Truck3 from '../assets/fleet/truck-3.jpeg'
import Truck4 from '../assets/fleet/truck-4.jpeg'

const fleetImages = [Truck1, Truck2, Truck3, Truck4];

const Fleet = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="bg-white py-20 px-6" id="fleet">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-heading font-bold text-primary mb-4">Our Fleet</h2>
        <p className="text-grayText mb-10 max-w-2xl mx-auto">
          A look at our powerful and versatile fleet — built to deliver across every terrain and need.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6">
          {fleetImages.map((src, index) => (
            <Motion.div
              key={index}
              className="overflow-hidden rounded-xl shadow-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <img
                src={src}
                alt={`Fleet truck ${index + 1}`}
                onClick={() => setSelectedImage(src)}
                className="w-full h-100 object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
              />
            </Motion.div>
          ))}
        </div>
        {selectedImage && (
          <div
            className="fixed inset-0 bg-white bg-opacity-10 flex items-center justify-center z-50"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full px-4">
              <img
                src={selectedImage}
                alt="Full view"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
            <button
              onClick={() => setSelectedImage(null)}
              className="fixed top-6 right-6 text-black text-3xl font-bold bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-200 z-50"
              aria-label="Close modal"
            >
              &times;
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Fleet;