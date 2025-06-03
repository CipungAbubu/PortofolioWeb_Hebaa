import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false); // close menu on mobile
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'Tentang Saya' },
    { id: 'education', label: 'Pendidikan' },
    { id: 'experience', label: 'Pengalaman' },
    { id: 'projects', label: 'Proyek' },
    { id: 'technologies', label: 'Teknologi' },
    { id: 'certificate', label: 'Sertifikat' },
    { id: 'contact', label: 'Kontak' },
  ];

  // Fungsi untuk mendeteksi section aktif berdasarkan scroll
  useEffect(() => {
    const handleScroll = () => {
      let current = 'home';
      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);
        if (section) {
          const offsetTop = section.offsetTop - 80; // sesuaikan dengan tinggi header
          if (window.scrollY >= offsetTop) {
            current = id;
          }
        }
      });
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (id) =>
    activeSection === id
      ? 'text-amber-800 font-semibold border-b-2 border-amber-500'
      : '';

  return (
    <header className="fixed top-0 left-0 w-full bg-[#faeece] text-gray-800 px-4 sm:px-6 py-4 flex justify-between items-center z-50 shadow-md">
  <div className="text-2xl font-bold text-amber-600">
    Hebaa<span className="text-gray-800">{'{}'}</span>
  </div>

  {/* Desktop Navigation */}
  <nav className="hidden md:flex space-x-4 lg:space-x-6 text-sm lg:text-base">
    {navItems.map(({ id, label }) => (
      <button
        key={id}
        onClick={() => scrollTo(id)}
        className={`hover:text-amber-600 transition pb-1 ${isActive(id)}`}
      >
        {label}
      </button>
    ))}
  </nav>

  {/* Mobile Button */}
  <div className="md:hidden z-[60]">
    <button onClick={toggleMenu} aria-label="Toggle Menu">
      {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
    </button>
  </div>

  {/* Mobile Menu */}
  {isOpen && (
    <div className="absolute top-[64px] left-0 w-full bg-[#fdf6e3] flex flex-col items-center space-y-4 py-6 md:hidden transition-all duration-300 shadow-md z-40">
      {navItems.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className={`hover:text-amber-600 pb-1 ${isActive(id)}`}
        >
          {label}
        </button>
      ))}
    </div>
  )}
</header>
  );
};

export default Header;
