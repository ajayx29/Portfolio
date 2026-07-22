import React from 'react';
import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import AnimatedBackground from '../components/AnimatedBackground';

const Hero = () => {
  // Scroll to section function
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }}>
          <AnimatedBackground />
        </Canvas>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center px-6 sm:px-16 z-10">
        <div className="relative w-full max-w-2xl mx-auto">
          {/* Glowing circle behind avatar */}
          <div className="absolute left-1/2 top-0 w-56 h-56 -translate-x-1/2 -translate-y-1/4 
                          rounded-full bg-gradient-to-br from-green-600 to-cyan-400 opacity-30 
                          blur-2xl" />
              
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="backdrop-blur-sm bg-gray-900 bg-opacity-60 p-8 rounded-xl 
                       border border-gray-800 border-opacity-70 shadow-xl"
          >
            <div className="flex flex-col items-center md:flex-row md:items-start gap-8">
              {/* Avatar placeholder - can be replaced with an actual image */}
              <div className="relative">
                <div className="w-36 h-36 rounded-full bg-gradient-to-br from-green-500 to-cyan-400 
                                flex items-center justify-center shadow-lg">
                  <span className="text-4xl font-bold text-white">AS</span>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-4xl sm:text-5xl font-bold text-white">
                  Ajay Sunandan
                </h1>
                
                <div className="h-1 w-16 bg-gradient-to-r from-green-500 to-cyan-400 my-4 mx-auto md:mx-0" />
                
                <h2 className="text-xl sm:text-2xl font-medium text-cyan-300 mb-4">
                  Security Engineer
                </h2>
                
                <p className="text-gray-300 text-base sm:text-lg mb-6">
                Always Curious.
                </p>
                
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('projects')}
                    className="bg-gradient-to-r from-green-600 to-green-800 py-3 px-6 
                               rounded-full text-white font-medium shadow-lg cursor-pointer"
                  >
                    View Projects
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => scrollToSection('contact')}
                    className="bg-transparent border border-cyan-400 py-3 px-6 
                               rounded-full text-cyan-300 font-medium shadow-lg cursor-pointer"
                  >
                    Contact Me
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-10 w-full flex justify-center items-center">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center 
                        items-start p-2">
          <motion.div
            animate={{ y: [0, 24, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: 'loop',
            }}
            className="w-3 h-3 rounded-full bg-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;