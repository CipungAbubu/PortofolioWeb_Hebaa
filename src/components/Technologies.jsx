import React, { useState } from 'react';
import Header from '../header/Header';
import { motion } from 'framer-motion';
import { FiLock } from 'react-icons/fi';  

const categories = {
  '🛠 Tools': [
    { name: 'VS Code', logo: 'https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg' },
    { name: 'Postman', logo: 'https://cdn.worldvectorlogo.com/logos/postman.svg' },
    { name: 'Swagger', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/ab/Swagger-logo.png' },
    { name: 'GitHub', logo: 'https://cdn.worldvectorlogo.com/logos/github-icon-1.svg' },
  ],
  '💻 Programming Languages': [
    { name: 'HTML', logo: 'https://cdn.worldvectorlogo.com/logos/html-1.svg' },
    { name: 'CSS', logo: 'https://cdn.worldvectorlogo.com/logos/css-3.svg' },
    { name: 'JavaScript', logo: 'https://cdn.worldvectorlogo.com/logos/javascript-1.svg' },
    { name: 'PHP', logo: 'https://www.vectorlogo.zone/logos/php/php-icon.svg' },
    { name: 'Node.js', logo: 'https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg' },
  ],
  '📦 Frameworks/Libraries': [
    { name: 'Tailwind CSS', logo: 'https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg' },
    { name: 'React.js', logo: 'https://cdn.worldvectorlogo.com/logos/react-2.svg' },
    { name: 'Express.js', logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg' },
  ],
  '🗃 Database': [
    { name: 'MongoDB', logo: 'https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg' },
    { name: 'Mongoose', logo: 'https://cdn.worldvectorlogo.com/logos/mongoose.svg' },
  ],
  '🚀 Deployment': [
    { name: 'Vercel', logo: 'https://www.vectorlogo.zone/logos/vercel/vercel-icon.svg' },
    { name: 'Netlify', logo: 'https://www.vectorlogo.zone/logos/netlify/netlify-icon.svg' },
  ],
  '🔒 Authentication': [
    { name: 'JWT', logo: 'https://cdn.worldvectorlogo.com/logos/jwt-3.svg' },
    { name: 'Bcrypt', logo: <FiLock size={64} /> },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, ease: 'easeOut', duration: 0.6 }
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const Technologies = () => {
  const [selectedCategory, setSelectedCategory] = useState('🛠 Tools');

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="min-h-screen bg-gradient-to-r from-white to-gray-300 text-black flex flex-col"
    >
      {/* Header */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Header />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20 flex flex-col">
        {/* Judul */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-start sm:items-center mb-6">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mr-0 sm:mr-4 mb-2 sm:mb-0 whitespace-nowrap">
            Teknologi
          </h1>
          <div className="flex-1 h-1 bg-amber-300 rounded self-center w-full sm:w-auto"></div>
        </motion.div>

        {/* Menu Kategori */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 justify-start sm:justify-start">
          {Object.keys(categories).map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                selectedCategory === category
                  ? 'bg-amber-400 text-white shadow-md'
                  : 'bg-white text-black border border-gray-300 hover:bg-amber-100'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Teknologi */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6 sm:gap-8"
        >
          {categories[selectedCategory].map(({ name, logo }) => (
            <motion.div
              key={name}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition-shadow"
              title={name}
            >
              {typeof logo === 'string' ? (
                <motion.img
                  src={logo}
                  alt={name}
                  className="w-12 h-12 sm:w-16 sm:h-16 object-contain mb-2"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: Math.random() * 2,
                  }}
                />
              ) : (
                <motion.div
                  className="mb-2"
                  animate={{
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeInOut',
                    delay: Math.random() * 2,
                  }}
                >
                  {logo}
                </motion.div>
              )}
              <p className="text-center text-xs sm:text-sm font-semibold">{name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Technologies;
