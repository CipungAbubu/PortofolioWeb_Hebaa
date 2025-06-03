import React from 'react';
import { FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import hebaBackground from '../assets/hebaa.jpg';
import hebaProfile from '../assets/heba1.jpg';
import { motion } from 'framer-motion';

const HomePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="relative min-h-screen bg-[#ffffff] text-gray-800 overflow-hidden"
    >
      {/* Background Samar */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center opacity-20 z-0"
        style={{ backgroundImage: `url(${hebaBackground})` }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2 }}
      />

      <div className="relative z-10">
        {/* Konten Utama */}
        <div className="flex items-center justify-center min-h-[calc(100vh-4rem)] px-4 sm:px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 max-w-6xl w-full text-center md:text-left">
            {/* Animasi Teks */}
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              <h1 className="text-2xl md:text-3xl font-semibold text-amber-800 mb-2">
                Hallo semuanya, Saya
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Heba A'raaf Zukhruf Maryam
              </h2>

              <TypeAnimation
                sequence={['Web Developer', 1500, 'Mahasiswi Informatika', 1500]}
                wrapper="div"
                cursor={true}
                repeat={Infinity}
                className="text-base sm:text-lg md:text-2xl text-gray-700 font-medium"
              />

              <p className="mt-4 text-gray-700 text-sm sm:text-base md:text-lg">
                Selamat datang di website pribadi hebaa ✨
              </p>

              {/* Button Download CV */}
              <div className="mt-5">
                <a
                  href="/assets/CV_Heba.pdf" // Ganti dengan path asli file CV-mu
                  download
                  className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-lg shadow-md transition duration-300"
                >
                  Download CV
                </a>
              </div>

              {/* Sosial Media */}
              <motion.div
                className="mt-6 flex justify-center md:justify-start space-x-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <a
                  href="https://www.instagram.com/maryaheba_/?igsh=MTJvZ2NrdmZ6cGF1Mw%3D%3D#"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram className="text-2xl text-amber-700 hover:text-pink-500 transition duration-300" />
                </a>
                <a
                  href="https://github.com/CipungAbubu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-2xl text-amber-700 hover:text-black transition duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/heba-a-raaf/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-2xl text-amber-700 hover:text-blue-600 transition duration-300" />
                </a>
              </motion.div>
            </motion.div>

            {/* Gambar Profil dengan animasi gerak otomatis */}
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -10, 0, 10, 0], // animasi naik turun smooth
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'easeInOut',
              }}
            >
              <img
                src={hebaProfile}
                alt="Heba"
                className="w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-amber-600 shadow-lg"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default HomePage;
