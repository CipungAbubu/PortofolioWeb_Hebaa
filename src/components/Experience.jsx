import React, { useState, useEffect } from 'react';
import Header from '../header/Header';
import { motion } from 'framer-motion';

import vocasia1 from '../assets/vocasia1.jpg';
import vocasia2 from '../assets/vocasia2.jpg';
import vocasia3 from '../assets/vocasia3.jpg';
import vocasia4 from '../assets/vocasia4.jpg';
import vocasia5 from '../assets/vocasia5.jpg';
import vocasia6 from '../assets/vocasia6.jpg';

const photos = [
  vocasia1,
  vocasia2,
  vocasia3,
  vocasia4,
  vocasia5,
  vocasia6,
];

const Experience = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedPhoto, setSelectedPhoto] = useState(null); // state modal

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prev) => (prev >= photos.length - 3 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const visiblePhotos = photos.slice(startIndex, startIndex + 3);
  if (visiblePhotos.length < 3) {
    visiblePhotos.push(...photos.slice(0, 3 - visiblePhotos.length));
  }

  // Fungsi untuk tutup modal
  const closeModal = () => setSelectedPhoto(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-r from-white to-gray-200 text-black flex flex-col"
    >
      <Header />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="flex items-center mb-10"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mr-4 whitespace-nowrap">
            Pengalaman
          </h1>
          <div className="flex-1 h-1 bg-amber-300 rounded"></div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center justify-center mb-12"
        >
          <div className="flex gap-4 overflow-hidden w-full max-w-4xl justify-center">
            {visiblePhotos.map((photo, idx) => (
              <motion.img
                key={idx}
                src={photo}
                alt={`vocasia-slide-${startIndex + idx + 1}`}
                // Responsif: untuk layar kecil 100% width, sm 1/2, md 1/3
                className="w-full sm:w-1/2 md:w-1/3 h-40 sm:h-48 md:h-48 object-cover rounded-xl shadow-lg cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ type: 'spring', stiffness: 300 }}
                loading="lazy"
                onClick={() => setSelectedPhoto(photo)} // klik gambar buka modal
              />
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 sm:p-8 md:p-12"
        >
          <h2 className="text-xl sm:text-2xl font-extrabold text-gray-900 mb-2">
            Fullstack Web Development - Studi Independen
          </h2>
          <p className="text-gray-700 mb-1 font-semibold text-sm sm:text-base">
            Agustus - Desember 2024
          </p>
          <p className="text-gray-800 mb-3 font-medium text-sm sm:text-base">
            Vocasia x Kampus Merdeka Batch 7
          </p>
          <ul className="list-disc list-inside text-gray-800 space-y-2 text-sm sm:text-base">
            <li>
              Membangun aplikasi web sebagai proyek akhir dengan fitur autentikasi, manajemen data, dan tampilan interaktif menggunakan stack MERN (MongoDB, Express, React, Node.js).
            </li>
            <li>
              Mengerjakan berbagai proyek mandiri yang menunjukkan kemampuan dalam penerapan konsep OOP, JavaScript asynchronous, pengelolaan database MySQL dan MongoDB, serta penulisan kode yang rapi dan aman.
            </li>
            <li>
              Mendapatkan sertifikat penyelesaian dari Vocasia x Kampus Merdeka sebagai bukti kompetensi fullstack web development.
            </li>
          </ul>
        </motion.div>
      </div>

      {/* Modal perbesar gambar */}
      {selectedPhoto && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
        >
          <div className="relative max-w-4xl w-full mx-auto">
            <img
              src={selectedPhoto}
              alt="Perbesar"
              className="w-full max-h-[80vh] object-contain rounded-lg shadow-lg"
            />
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-white bg-red-600 rounded-full p-2 hover:bg-red-700 transition"
              aria-label="Close modal"
            >
              &#10005;
            </button>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Experience;
