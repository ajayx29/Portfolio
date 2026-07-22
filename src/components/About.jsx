import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900 to-green-900/30 opacity-80 z-0"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-16">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-green-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-cyan-400 mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Image/avatar section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-5 flex justify-center"
          >
            {/* Placeholder for profile image - replace with your actual image */}
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-green-600 to-cyan-400 rounded-xl opacity-50 blur-xl"></div>
              <div className="w-64 h-64 bg-gradient-to-br from-green-500/80 to-cyan-500/80 rounded-xl flex items-center justify-center relative overflow-hidden border-2 border-white/20">
                {/* Add your actual image with this line */}
                {/* <img src="/path-to-your-image.jpg" alt="Aruneswari Sankar" className="w-full h-full object-cover" /> */}
                
                {/* This is a placeholder - replace with your image */}
                <span className="text-6xl font-bold text-white">AS</span>
              </div>
            </div>
          </motion.div>
          
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="col-span-1 md:col-span-7"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
              Security Engineer
            </h3>
            
            {/* <p className="text-gray-300 mb-6">
              I am a dedicated software and DevOps engineer with experience in building robust cloud infrastructure
              and scalable applications. Currently pursuing my Master of Science in Computer Science at Georgia Institute
              of Technology with a perfect 4.0 GPA, I'm deepening my knowledge in Network Security, Advanced Database
              Systems Implementation, and Machine Learning.
            </p> */}
            
            {/* Education Section */}
            <div className="mb-6 bg-gray-800/40 p-4 rounded-lg border border-gray-700">
              <h4 className="text-xl font-semibold text-cyan-300 mb-2">Education</h4>
              
              <div className="mb-4">
                <div className="flex justify-between items-center">
                  <h5 className="text-white font-medium">Carnegie Mellon University</h5>
                  <span className="text-green-300 text-sm">2024 - 2025</span>
                </div>
                <p className="text-gray-400 text-sm">Master of Science in Information Security</p>
                <p className="text-gray-400 text-sm">GPA: 3.83.0/4.0</p>
                <p className="text-gray-300 text-sm mt-1">
                  <span className="text-green-300">Relevant Coursework:</span> Offensive Security, Secure Coding, Network Security, Cloud Security, Cloud Computing, Cyber Risk Modeling, Information Assurance, Computer Systems, Distributed Systems.
                </p>
              </div>
              
              <div>
                <div className="flex justify-between items-center">
                  <h5 className="text-white font-medium">Amrita Vishwa Vidyapeetham</h5>
                  <span className="text-green-300 text-sm">2017 - 2021</span>
                </div>
                <p className="text-gray-400 text-sm">Bachelor of Technology in Electronics and Communication Engineering</p>
                <p className="text-gray-400 text-sm">GPA: 9.05/10 (Graduated First Class with Distinction)</p>
                <p className="text-gray-300 text-sm mt-1">
                  <span className="text-green-300">Relevant Coursework:</span> Computer Networks, Computer Systems Architecture, Computer Programming, DSA, Machine Learning, Microprocessors.
                </p>
              </div>
            </div>
            
            {/* Key Skills */}
            {/* <h4 className="text-xl font-semibold text-white mb-3">Technical Skills</h4>
            <div className="flex flex-wrap gap-3 mb-8">
              {[
                "React", "Node.js", "Python", "C++", "Go/Golang", "Docker", "Kubernetes", 
                "Terraform", "GCP", "AWS", "Azure", "Jenkins"
              ].map((skill) => (
                <span 
                  key={skill}
                  className="bg-purple-900/50 text-purple-200 px-4 py-2 rounded-full text-sm border border-purple-700/50"
                >
                  {skill}
                </span>
              ))}
            </div> */}
            
            {/* Call to action */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact" 
              className="inline-block bg-gradient-to-r from-green-600 to-green-800 py-3 px-6 
                       rounded-full text-white font-medium shadow-lg"
            >
              Let's Connect
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;