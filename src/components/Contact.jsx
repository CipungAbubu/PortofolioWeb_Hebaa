import React from 'react';
import Header from '../header/Header';
import { motion } from 'framer-motion';

const EmailIcon = () => (
  <svg
    className="w-8 h-8 text-amber-400 sm:w-10 sm:h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 12l-4-4-4 4m8 0l-4 4-4-4"
    ></path>
    <rect
      width="20"
      height="14"
      x="2"
      y="5"
      rx="2"
      ry="2"
      stroke="currentColor"
      strokeWidth="2"
      fill="none"
    ></rect>
  </svg>
);

const PhoneIcon = () => (
  <svg
    className="w-8 h-8 text-amber-400 sm:w-10 sm:h-10"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 7v4a2 2 0 002 2h3l3 3v-3h3a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2z"
    ></path>
  </svg>
);

const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', staggerChildren: 0.2 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Contact = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen flex flex-col bg-gradient-to-r from-white to-gray-300 text-black"
    >
      {/* Header fixed */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      {/* Konten utama */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 flex flex-col gap-8 sm:gap-10 flex-grow">
        {/* Judul */}
        <motion.div variants={itemVariants} className="flex items-center mb-6 sm:mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mr-3 sm:mr-4 whitespace-nowrap">
            Kontak
          </h1>
          <div className="flex-1 h-1 bg-amber-300 rounded"></div>
        </motion.div>

        {/* Pesan persuasif */}
        <motion.p
          variants={itemVariants}
          className="text-gray-700 text-base sm:text-lg md:text-xl leading-relaxed max-w-full sm:max-w-[90%]"
        >
          Saya sangat senang jika Anda ingin menghubungi saya untuk berdiskusi,
          berkolaborasi, atau sekadar bertanya lebih jauh mengenai keahlian dan
          proyek yang saya jalankan. Jangan ragu untuk mengirim pesan kapan saja!
          Saya akan berusaha merespon secepat mungkin dan memastikan komunikasi
          kita berjalan lancar dan menyenangkan.
        </motion.p>

        {/* Kontak info */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-8 sm:gap-12 mt-4 sm:mt-6"
        >
          {/* Email */}
          <div className="flex items-center gap-3 sm:gap-4">
            <EmailIcon />
            <div>
              <p className="font-semibold text-base sm:text-lg">Email</p>
              <a
                href="mailto:maryaheba08@gmail.com"
                className="text-amber-600 hover:underline break-all text-sm sm:text-base"
              >
                maryaheba08@gmail.com
              </a>
            </div>
          </div>

          {/* Telepon */}
          <div className="flex items-center gap-3 sm:gap-4">
            <PhoneIcon />
            <div>
              <p className="font-semibold text-base sm:text-lg">Telepon</p>
              <a
                href="https://wa.me/6288215176028"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-600 hover:underline text-sm sm:text-base"
              >
                +62 882-1517-6028
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Footer hak cipta di bawah */}
      <footer className="bg-white text-center text-gray-600 text-sm py-4 shadow-inner mt-auto">
        &copy; {new Date().getFullYear()} Maryaheba. All rights reserved.
      </footer>
    </motion.div>
  );
};

export default Contact;
