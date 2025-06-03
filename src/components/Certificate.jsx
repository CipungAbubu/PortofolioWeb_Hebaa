import React, { useState } from 'react';
import Header from '../header/Header';
import { motion, AnimatePresence } from 'framer-motion';

import sertifikat1 from '../assets/sertifikat1.jpg';
import sertifikat2 from '../assets/sertifikat2.jpg';
import sertifikat3 from '../assets/sertifikat3.jpg';
import sertifikat4 from '../assets/sertifikat4.jpg';
import sertifikat5 from '../assets/sertifikat5.jpg';
import sertifikat6 from '../assets/sertifikat6.jpg';
import sertifikat7 from '../assets/sertifikat7.jpg';
import sertifikat8 from '../assets/sertifikat8.jpg';
import sertifikat9 from '../assets/sertifikat9.jpg';
import sertifikat10 from '../assets/sertifikat10.png';

const certificateImages = [
  sertifikat1,
  sertifikat2,
  sertifikat3,
  sertifikat4,
  sertifikat5,
  sertifikat6,
  sertifikat7,
  sertifikat8,
  sertifikat9,
  sertifikat10,
];

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      transition={{ staggerChildren: 0.15, ease: 'easeOut', duration: 0.6 }}
      className="min-h-screen bg-gradient-to-r from-white to-gray-300 text-black flex flex-col"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 flex flex-col">
        {/* Judul Sertifikat */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center mb-10"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left text-black mr-4">
            Sertifikat
          </h1>
          <div className="flex-1 h-1 bg-amber-300 rounded"></div>
        </motion.div>

        {/* Semua gambar sertifikat */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 sm:gap-6"
        >
          {certificateImages.map((imgSrc, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow bg-white cursor-pointer"
              onClick={() => setSelectedImage(imgSrc)}
            >
              <img
                src={imgSrc}
                alt={`Sertifikat ${index + 1}`}
                className="w-full h-32 sm:h-36 md:h-40 lg:h-44 xl:h-48 object-cover"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modal gambar diperbesar */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className="relative max-w-full max-h-[90vh] w-full sm:w-4/5 md:w-3/5 lg:w-2/5 p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage}
                alt="Preview"
                className="w-full h-auto rounded-xl object-contain"
              />
              <button
                className="absolute top-3 right-3 bg-white text-black rounded-full p-1 px-3 text-lg shadow hover:bg-red-500 hover:text-white transition"
                onClick={() => setSelectedImage(null)}
              >
                ✖
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Certificate;
