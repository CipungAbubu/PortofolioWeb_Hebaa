import React, { useState } from 'react';
import { motion } from 'framer-motion';

import heba2 from '../assets/heba2.jpg';
import heba3 from '../assets/heba3.jpg';
import heba4 from '../assets/heba4.jpg';
import heba5 from '../assets/heba5.jpg';

const photos = [heba2, heba3, heba4, heba5];

const About = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const fullText = (
    <>
      <p>
        Saya adalah mahasiswi Informatika yang memiliki ketertarikan kuat pada dunia teknologi, khususnya di bidang pengembangan web. Selama masa studi dan pelatihan, saya telah mendalami berbagai aspek pengembangan website, mulai dari frontend yang fokus pada tampilan dan pengalaman pengguna, hingga backend yang menangani logika dan pengelolaan data. Pelatihan fullstack web development yang saya ikuti memperkuat pemahaman saya tentang teknologi seperti React, Node.js, serta basis data, sehingga saya mampu mengembangkan aplikasi web yang efisien dan responsif.
      </p>
      <p className="mt-4">
        Dengan tujuan berkarier sebagai web developer profesional, saya berkomitmen untuk terus mengasah keterampilan teknis serta memperluas wawasan di bidang teknologi informasi. Selain kemampuan pemrograman, saya juga menekankan pentingnya komunikasi yang efektif dan kerja sama tim dalam menciptakan solusi digital yang inovatif dan berdampak. Semangat belajar yang tinggi menjadi modal utama saya untuk menghadapi tantangan di industri TI yang terus berkembang, serta berkontribusi secara maksimal dalam lingkungan kerja yang dinamis dan kolaboratif.
      </p>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="min-h-screen bg-gradient-to-r from-white to-gray-300 text-black flex flex-col relative"
    >
      <div className="sticky top-0 z-50 bg-white shadow"></div>

      <div className="flex flex-col md:flex-row max-w-6xl mx-auto px-4 sm:px-6 md:px-6 py-16 md:py-24 gap-10">
        {/* Kiri: Judul dan foto tumpuk */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
          className="md:w-1/2 flex flex-col items-center relative"
          style={{ perspective: 1000 }}
        >
          <div className="flex items-center mb-6 w-full px-2 sm:px-0">
            <h1 className="text-2xl sm:text-3xl font-bold text-left text-black mr-4 flex-shrink-0">
              Tentang Saya
            </h1>
            <div className="flex-1 h-1 bg-amber-300 rounded"></div>
          </div>

          {/* Tumpukan foto */}
          <div className="relative w-full max-w-[18rem] sm:max-w-[20rem] md:max-w-[18rem] h-[22rem] sm:h-[28rem] md:h-[24rem]">
            {photos.map((photo, index) => {
              const offset = index - selectedIndex;
              const isSelected = index === selectedIndex;

              const topBase = isSelected ? 40 : 50;
              const leftBase = 50;
              const topOffset = Math.abs(offset) * 10 * (offset < 0 ? 1 : -1);
              const leftOffset = offset * 15;

              const style = {
                position: 'absolute',
                cursor: 'pointer',
                top: topBase + topOffset,
                left: leftBase + leftOffset,
                width: isSelected ? '70%' : '45%',
                height: 'auto',
                maxHeight: isSelected ? '380px' : '220px',
                objectFit: 'cover',
                borderRadius: '15px',
                boxShadow: isSelected
                  ? '0 10px 30px rgba(0,0,0,0.3)'
                  : '0 4px 10px rgba(0,0,0,0.15)',
                border: isSelected ? '6px solid #f59e0b' : '4px solid transparent',
                zIndex: isSelected ? 100 : 50 - Math.abs(offset),
                transition: 'all 0.4s ease',
                transform: isSelected
                  ? 'rotate(0deg)'
                  : offset < 0
                  ? 'rotate(-8deg)'
                  : 'rotate(8deg)',
                maxWidth: '100%',
              };

              return (
                <motion.img
                  key={index}
                  src={photo}
                  alt={`Foto profil ${index + 1}`}
                  style={style}
                  onClick={() => setSelectedIndex(index)}
                  whileHover={{ scale: 1.05 }}
                  className="max-w-full max-h-full"
                />
              );
            })}
          </div>
        </motion.div>

        {/* Kanan: Nama dan deskripsi full text langsung */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
          className="md:w-1/2 flex flex-col justify-center mt-4 md:mt-12 px-2 sm:px-0 relative"
        >
          <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold text-black mb-6">
            Heba A'raaf Zukhruf Maryam
          </h1>

          <div className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            {fullText}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
