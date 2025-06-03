import React from 'react';
import Header from '../header/Header';
import pendidikan1 from '../assets/pendidikan1.jpg';
import pendidikan2 from '../assets/pendidikan2.jpg';
import pendidikan3 from '../assets/pendidikan3.jpg';
import utdiLogo from '../assets/utdi.jpg';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-gradient-to-r from-white to-gray-200 text-black flex flex-col"
    >
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-24">
        {/* Judul Pendidikan */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center mb-8 md:mb-10"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-left text-black mr-3 sm:mr-4">
            Pendidikan
          </h1>
          <div className="flex-1 h-1 bg-amber-300 rounded" />
        </motion.div>

        {/* Gambar Pendidikan */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-10 md:mb-12"
        >
          {[pendidikan1, pendidikan2, pendidikan3].map((img, index) => (
            <motion.img
              key={index}
              src={img}
              alt={`pendidikan-${index + 1}`}
              className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 300 }}
            />
          ))}
        </motion.div>

        {/* Deskripsi Pendidikan */}
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 sm:p-8 md:p-12 flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-12"
        >
          {/* Logo kiri */}
          <div className="flex-shrink-0">
            <img
              src={utdiLogo}
              alt="Logo UTDI"
              className="h-16 w-16 sm:h-20 sm:w-20 object-contain"
            />
          </div>

          {/* Konten teks */}
          <div className="flex-1 text-center md:text-left">
            <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">
              UNIVERSITAS TEKNOLOGI DIGITAL INDONESIA
            </h2>
            <p className="text-gray-700 mb-1 font-semibold">2022 - Sekarang</p>
            <p className="text-gray-800 text-base sm:text-lg mb-3">S1 - Informatika</p>
            <p className="text-gray-600 text-sm sm:text-base">
              IPK: <span className="font-semibold text-amber-600">3.74 / 4.00</span>
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Education;
