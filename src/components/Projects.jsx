import React, { useState } from 'react';

import projek1 from '../assets/projek1.jpg';
import projek2 from '../assets/projek2.jpg';
import projek3 from '../assets/projek3.jpg';
import projek4 from '../assets/projek4.jpg';
import projek5 from '../assets/projek5.jpg';
import projek6 from '../assets/projek6.jpg';

import projek2_0 from '../assets/projek2_0.jpg';
import projek2_a from '../assets/projek2_a.jpg';
import projek2_b from '../assets/projek2_b.jpg';
import projek2_c from '../assets/projek2_c.jpg';
import projek2_d from '../assets/projek2_d.jpg';

import projek4_a from '../assets/projek4_a.jpg';
import projek4_b from '../assets/projek4_b.jpg';
import projek4_c from '../assets/projek4_c.jpg';

import projek5_a from '../assets/projek5_a.jpg';
import projek5_b from '../assets/projek5_b.jpg';
import projek5_c from '../assets/projek5_c.jpg';
import projek5_d from '../assets/projek5_d.jpg';
import projek5_e from '../assets/projek5_e.jpg';

import projek6_a from '../assets/projek6_a.jpg';
import projek6_b from '../assets/projek6_b.jpg';
import projek6_c from '../assets/projek6_c.jpg';
import projek6_d from '../assets/projek6_d.jpg';

import { MdLaptopMac } from 'react-icons/md';
import { FiSmartphone } from "react-icons/fi";
import { FaGithub, FaAndroid } from 'react-icons/fa'; // Import Android icon
import { SiNetlify } from 'react-icons/si'; // Import Netlify icon
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Titipin - Web Aplikasi Penyimpanan Barang Sementara',
    image: projek1,
    tools: 'Figma, HTML, CSS, JavaScript, Node.js, Express, MongoDB | November - Desember 2024',
    description: 'Aplikasi web yang memungkinkan pengguna menyimpan barang secara aman dan fleksibel dalam waktu sementara.',
    github: 'https://github.com/oktavianiandrianti26/Kelompok-1-Titipin.git',
    demo: 'https://drive.google.com/file/d/1fwFCy0gBz8ePFVYNGWF2iENmsWOywutW/view?usp=drivesdk',
    device: 'laptop',
  },
  {
    title: 'Vocatask - Task Management API',
    image: projek2,
    tools: 'Node.js, Express.js, MongoDB, JWT, Bcrypt, Swagger | September 2024',
    description: 'RESTful API untuk manajemen tugas dengan fitur CRUD lengkap dan autentikasi JWT.',
    github: 'https://github.com/CipungAbubu/TugasMinggu10_be-fe-vocatask.git',
    githubFE: 'https://github.com/CipungAbubu/Vocatask-frontend.git',
    device: 'laptop',
    gallery: [projek2_0, projek2_a, projek2_b, projek2_c, projek2_d],
  },
  {
    title: 'Markas Baca - Aplikasi Manajemen Peminjaman Buku',
    image: projek3,
    tools: 'Node.js, Express.js, MongoDB, Postman, MVC Pattern, CORS | September 2024',
    description: 'Backend aplikasi untuk mengelola peminjaman buku dan menghitung denda otomatis.',
    github: 'https://github.com/CipungAbubu/TugasMinggu8_Backend.git',
    demo: 'https://drive.google.com/file/d/1tTps56nHam99mEjOI-gvRj0NvnzhTBmz/view?usp=sharing', 
    device: 'laptop',
  },
  {
    title: 'BukuBooks - Aplikasi Toko Buku Mobile',
    image: projek4,
    tools: 'Flutter, Tailwind CSS | Mei 2025',
    description: 'Aplikasi mobile toko buku dengan halaman katalog, pencarian, dan detail buku.',
    github: 'https://github.com/CipungAbubu/Apk_BukuBooks.git',
    device: 'phone',
    gallery: [projek4_a, projek4_b, projek4_c],
    apk: 'https://drive.google.com/file/d/1XXN0t0MhVMc8b5QpbrvOlhufTDNDBB_2/view?usp=drivesdk', // Added APK download link
  },
  {
    title: 'BakeUri - Korean Cake Shop Website',
    image: projek5,
    tools: 'HTML,CSS',
    description: 'website toko kue spesialis Korean Cake yang menghadirkan berbagai kue tradisional Korea dan kreasi modern dengan cita rasa autentik.',
    github: 'https://github.com/CipungAbubu/BakeUri-KoreanCake.git',
    device: 'laptop',
    gallery: [projek5, projek5_a, projek5_b, projek5_c, projek5_d, projek5_e],
    live: 'https://bakeuri.netlify.app/', 
  },
  {
    title: 'FilmInAja - Website Daftar Film',
    image: projek6,
    tools: 'HTML, CSS, JavaScript',
    description: 'Website daftar film yang menampilkan berbagai film populer dan terbaru lengkap dengan informasi sinopsis, rating, dan trailer.',
    github: 'https://github.com/CipungAbubu/Film_In_Aja.git',
    device: 'laptop',
    gallery: [projek6, projek6_a, projek6_b, projek6_c, projek6_d],
    live: 'https://filminajaaa.netlify.app/', 
  }
];

const DeviceFrame = ({ device, children }) => {
  return device === 'phone' ? (
    <div className="relative p-4 border-4 border-gray-400 rounded-3xl shadow-lg max-w-xs mx-auto bg-white">
      <FiSmartphone className="absolute top-2 left-2 text-gray-500 text-2xl" />
      <div className="rounded-xl overflow-hidden">{children}</div>
    </div>
  ) : (
    <div className="relative p-4 border-4 border-gray-400 rounded-xl shadow-lg max-w-md mx-auto bg-white">
      <MdLaptopMac className="absolute top-2 left-2 text-gray-500 text-2xl" />
      <div className="rounded-md overflow-hidden">{children}</div>
    </div>
  );
};

const Projects = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const visibleCards = 3;

  const prevSlide = () => {
    setStartIndex((prev) => (prev === 0 ? projects.length - visibleCards : prev - 3));
  };

  const nextSlide = () => {
    setStartIndex((prev) => (prev >= projects.length - visibleCards ? 0 : prev + 3));
  };

  const openImageModal = (projectIdx, imgIdx = 0) => {
    setSelectedProjectIndex(projectIdx);
    setSelectedImageIndex(imgIdx);
  };

  const closeModal = () => {
    setSelectedProjectIndex(null);
    setSelectedImageIndex(0);
  };

  const nextImage = () => {
    const gallery = projects[selectedProjectIndex]?.gallery;
    if (gallery) {
      setSelectedImageIndex((prev) => (prev + 1) % gallery.length);
    }
  };

  const prevImage = () => {
    const gallery = projects[selectedProjectIndex]?.gallery;
    if (gallery) {
      setSelectedImageIndex((prev) => (prev - 1 + gallery.length) % gallery.length);
    }
  };

  const visibleProjects = projects.slice(startIndex, startIndex + visibleCards);

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-gray-200 text-black flex flex-col animate-fadeIn">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="flex items-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-left text-black mr-4">
            Proyek
          </h1>
          <div className="flex-1 h-1 bg-amber-300 rounded"></div>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex items-center"
        >
          <button
            onClick={prevSlide}
            aria-label="Slide Left"
            className="bg-amber-300 hover:bg-amber-400 text-white rounded-full p-3 shadow-lg transition absolute left-2 top-1/2 transform -translate-y-1/2 z-20"
          >
            &#8592;
          </button>

          <div className="w-full px-4 sm:px-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10">
              {visibleProjects.map((project, idx) => {
                const globalIdx = startIndex + idx;
                return (
                  <div
                    key={globalIdx}
                    className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col hover:shadow-2xl transition-shadow duration-300"
                  >
                    <DeviceFrame device={project.device}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-48 sm:h-56 md:h-60 w-full object-cover cursor-pointer"
                        onClick={() => openImageModal(globalIdx, 0)}
                      />
                    </DeviceFrame>

                    <div className="p-6 flex flex-col flex-1">
                      <h2 className="text-xl font-extrabold text-gray-900 mb-2">
                        {project.title}
                      </h2>
                      <p className="text-sm text-amber-600 font-semibold mb-2">
                        {project.tools}
                      </p>
                      <p className="text-gray-700 flex-1 mb-4">{project.description}</p>

                      {globalIdx === 1 ? (
                        <>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center self-start text-amber-600 font-semibold hover:underline gap-2 mb-2"
                          >
                            <FaGithub /> GitHub Backend
                          </a>
                          <a
                            href={project.githubFE}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center self-start text-amber-600 font-semibold hover:underline gap-2"
                          >
                            <FaGithub /> GitHub Frontend
                          </a>
                        </>
                      ) : (
                        <>
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center self-start text-amber-600 font-semibold hover:underline gap-2 mb-2"
                          >
                            <FaGithub /> GitHub Repository
                          </a>

                          {globalIdx === 0 && project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-2 text-blue-600 hover:bg-amber-600 font-semibold py-2 px-4 rounded transition"
                            >
                              🎥 Lihat Video Demo
                            </a>
                          )}

                          {globalIdx === 2 && project.demo && (
                            <a
                              href={project.demo}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-block mt-2 text-blue-600 hover:bg-amber-600 font-semibold py-2 px-4 rounded transition"
                            >
                              🎥 Lihat Video Demo
                            </a>
                          )}

                          {globalIdx === 3 && project.apk && (
                            <a
                              href={project.apk}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center self-start text-amber-600 font-semibold hover:underline gap-2 mt-2"
                            >
                              <FaAndroid /> Download APK
                            </a>
                          )}

                          {globalIdx === 4 && project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center self-start text-amber-600 font-semibold hover:underline gap-2 mt-2"
                            >
                              <SiNetlify /> Lihat Website
                            </a>
                          )}

                          {globalIdx === 5 && project.live && (
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center self-start text-amber-600 font-semibold hover:underline gap-2 mt-2"
                            >
                              <SiNetlify /> Lihat Website
                            </a>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <button
            onClick={nextSlide}
            aria-label="Slide Right"
            className="bg-amber-300 hover:bg-amber-400 text-white rounded-full p-3 shadow-lg transition absolute right-2 top-1/2 transform -translate-y-1/2 z-20"
          >
            &#8594;
          </button>
        </motion.div>
      </div>

      {/* Modal Gambar */}
      {selectedProjectIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50 p-4 sm:p-8 overflow-auto">
          <div className="relative max-w-4xl w-full max-h-full flex flex-col items-center">
            <button
              className="absolute top-3 right-3 bg-white text-black rounded-full p-1 px-3 text-lg shadow hover:bg-red-500 hover:text-white transition z-30"
              onClick={closeModal}
              aria-label="Close Image"
            >
              ✖
            </button>

            {projects[selectedProjectIndex].gallery ? (
              <div className="flex flex-col items-center w-full">
                <img
                  src={projects[selectedProjectIndex].gallery[selectedImageIndex]}
                  alt="Gallery"
                  className="w-full max-h-[80vh] sm:max-h-[90vh] object-contain rounded-lg"
                />
                <div className="flex justify-between w-full mt-4 px-12 sm:px-0 relative">
                  <button
                    onClick={prevImage}
                    aria-label="Slide Left"
                    className="bg-amber-300 hover:bg-amber-400 text-white rounded-full p-3 shadow-lg transition"
                  >
                    &#8592;
                  </button>

                  <button
                    onClick={nextImage}
                    aria-label="Slide Right"
                    className="bg-amber-300 hover:bg-amber-400 text-white rounded-full p-3 shadow-lg transition"
                  >
                    &#8594;
                  </button>
                </div>
              </div>
            ) : (
              <img
                src={projects[selectedProjectIndex].image}
                alt="Preview"
                className="w-full max-h-[80vh] sm:max-h-[90vh] object-contain rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
