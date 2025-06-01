// import React, { Suspense } from 'react';
// import { BrowserRouter } from 'react-router-dom';
// import Hero from './components/Hero';

// // Navbar component
// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 w-full px-6 sm:px-16 py-5 z-20 bg-gray-900 bg-opacity-70 backdrop-blur-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-2xl font-bold text-white">
//           <span className="text-purple-500">A</span>runeswari
//         </div>
        
//         {/* Navigation links */}
//         <ul className="hidden md:flex list-none gap-10">
//           {['Home', 'About', 'Projects', 'Skills', 'Contact'].map((item) => (
//             <li
//               key={item}
//               className="text-gray-300 hover:text-white text-lg font-medium cursor-pointer"
//             >
//               {item}
//             </li>
//           ))}
//         </ul>
        
//         {/* Mobile menu button */}
//         <div className="md:hidden text-white cursor-pointer">
//           <div className="w-6 h-0.5 bg-white mb-1.5"></div>
//           <div className="w-6 h-0.5 bg-white mb-1.5"></div>
//           <div className="w-6 h-0.5 bg-white"></div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Loading component
// const Loading = () => {
//   return (
//     <div className="h-screen w-full flex justify-center items-center bg-gray-900">
//       <div className="w-16 h-16 border-4 border-dashed rounded-full border-purple-500 animate-spin"></div>
//     </div>
//   );
// };

// // Main App component
// const App = () => {
//   return (
//     <BrowserRouter>
//       <div className="relative z-0 bg-gray-900">
//         <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
//           <Navbar />
//           <Suspense fallback={<Loading />}>
//             <Hero />
//             {/* Other sections would go here */}
//             {/* <About /> */}
//             {/* <Projects /> */}
//             {/* <Skills /> */}
//             {/* <Contact /> */}
//           </Suspense>
//         </div>
        
//         {/* Footer */}
//         <div className="relative z-0">
//           <footer className="bg-gray-900 py-8 text-center text-white">
//             <p>© {new Date().getFullYear()} Aruneswari Sankar. All rights reserved.</p>
//           </footer>
//         </div>
//       </div>
//     </BrowserRouter>
//   );
// };

// export default App;





import React, { Suspense, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

// Navbar component with smooth scrolling
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact'];
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId.toLowerCase());
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };
  
  return (
    <nav className="fixed top-0 w-full px-6 sm:px-16 py-5 z-20 bg-gray-900 bg-opacity-70 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <div 
          className="text-2xl font-bold text-white cursor-pointer"
          onClick={() => scrollToSection('home')}
        >
          <span className="text-green-500">Ajay</span>
        </div>
        
        {/* Desktop Navigation links */}
        <ul className="hidden md:flex list-none gap-10">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="text-gray-300 hover:text-white text-lg font-medium cursor-pointer transition-colors"
            >
              {item}
            </li>
          ))}
        </ul>
        
        {/* Mobile menu button */}
        <div 
          className="md:hidden text-white cursor-pointer"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white mb-1.5"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-gray-900 bg-opacity-95 backdrop-blur-md py-4 px-6 border-t border-gray-800">
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li
                key={`mobile-${item}`}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white text-lg font-medium cursor-pointer py-2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

// Loading component
const Loading = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center bg-gray-900">
      <div className="w-16 h-16 border-4 border-dashed rounded-full border-purple-500 animate-spin"></div>
    </div>
  );
};

// Main App component - Simple version without router
const App = () => {
  return (
    <div className="relative z-0 bg-gray-900">
      <div className="bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Suspense fallback={<Loading />}>
          <div id="home">
            <Hero />
          </div>
          <About />
          <Projects />
          <Skills />
          {/* <Skills /> */}
          <Contact />
        </Suspense>
      </div>
      
      {/* Footer */}
      <div className="relative z-0">
        <footer className="bg-gray-900 py-8 text-center text-white">
          <p>© {new Date().getFullYear()} Ajay Sunandan. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default App;