import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative w-full min-h-screen py-16 md:py-24">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/30 via-gray-900 to-gray-900 opacity-80 z-0"></div>
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-600 rounded-full filter blur-3xl opacity-10"></div>
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-600 rounded-full filter blur-3xl opacity-10"></div>
      </div>
      
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
            Contact <span className="text-green-500">Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-cyan-400 mt-4"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-lg h-full">
              <div className="space-y-8">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-900/30 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-green-400" viewBox="0 0 16 16">
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg text-green-400 font-medium">Email</h4>
                    <a 
                      href="mailto:asunanda@andrew.cmu.edu"
                      className="text-white hover:text-green-300 transition-colors"
                    >
                      asunanda@andrew.cmu.edu
                    </a>
                  </div>
                </div>
                
                {/* Phone */}
                {/* <div className="flex items-start gap-4">
                  <div className="bg-green-900/30 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-green-400" viewBox="0 0 16 16">
                      <path fillRule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg text-green-400 font-medium">Phone</h4>
                    <a 
                      href="tel:+14704529819"
                      className="text-white hover:text-green-300 transition-colors"
                    >
                      +1 (470) 452-9819
                    </a>
                  </div>
                </div> */}
                
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-900/30 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-green-400" viewBox="0 0 16 16">
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg text-green-400 font-medium">Location</h4>
                    <p className="text-white">Pittsburgh, PA, USA</p>
                  </div>
                </div>
                
                {/* LinkedIn */}
                <div className="flex items-start gap-4">
                  <div className="bg-green-900/30 p-3 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-green-400" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg text-green-400 font-medium">LinkedIn</h4>
                    <a 
                      href="https://www.linkedin.com/in/ajay-s-5242601b9/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-white hover:text-green-300 transition-colors"
                    >
                      ajay-s-5242601b9
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Looking for Opportunities */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-lg h-full">
              <h3 className="text-2xl font-bold text-green-400 mb-6">Looking for Opportunities</h3>
              
              <p className="text-white mb-6">I am currently seeking full time opportunities (2026) in:</p>
              
              <ul className="space-y-4">
                {/* Security Engineering */}
                <li className="flex items-center gap-3">
                  <span className="text-green-400 bg-green-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v3a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"/>
                    </svg>
                  </span>
                  <span className="text-white">Security Engineering</span>
                </li>
                
                {/* Product Security */}
                <li className="flex items-center gap-3">
                  <span className="text-green-400 bg-green-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM6 9.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
                  </span>
                  <span className="text-white">Product Security</span>
                </li>
                
                {/* Cloud Security/Engineering */}
                <li className="flex items-center gap-3">
                  <span className="text-green-400 bg-green-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"/>
                      <path d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z"/>
                    </svg>
                  </span>
                  <span className="text-white">Cloud Security/Engineering</span>
                </li>
                
                {/* Network Security */}
                <li className="flex items-center gap-3">
                  <span className="text-green-400 bg-green-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M6 3a.5.5 0 0 1 .5.5V5h3V3.5a.5.5 0 0 1 1 0V5h.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-.5.5H9v1.5a.5.5 0 0 1-1 0V11H5V9.5a.5.5 0 0 1 1 0V11h2V9.5a.5.5 0 0 1 1 0V11h.5a.5.5 0 0 1 .5.5v.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5v-.5a.5.5 0 0 1 .5-.5H2v-4H.5a.5.5 0 0 1-.5-.5v-5A.5.5 0 0 1 .5 3H6Z"/>
                    </svg>
                  </span>
                  <span className="text-white">Network Security</span>
                </li>
                
                {/* Offensive Security */}
                <li className="flex items-center gap-3">
                  <span className="text-green-400 bg-green-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0c-.69 0-1.843.265-2.928.56-1.11.3-2.229.655-2.887.87a1.54 1.54 0 0 0-1.044 1.262c-.596 4.477.787 7.795 2.465 9.99a11.777 11.777 0 0 0 2.517 2.453c.386.273.744.482 1.048.625.28.132.581.24.829.24s.548-.108.829-.24a7.159 7.159 0 0 0 1.048-.625 11.775 11.775 0 0 0 2.517-2.453c1.678-2.195 3.061-5.513 2.465-9.99a1.541 1.541 0 0 0-1.044-1.263 62.467 62.467 0 0 0-2.887-.87C9.843.266 8.69 0 8 0zm-.5 5a.5.5 0 0 1 1 0v1.5H10a.5.5 0 0 1 0 1H8.5V9a.5.5 0 0 1-1 0V7.5H6a.5.5 0 0 1 0-1h1.5V5z"/>
                    </svg>
                  </span>
                  <span className="text-white">Offensive Security</span>
                </li>
                
                {/* Systems Security */}
                <li className="flex items-center gap-3">
                  <span className="text-green-400 bg-green-900/30 p-2 rounded-full inline-flex items-center justify-center w-8 h-8">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M5 0a.5.5 0 0 1 .5.5V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2h1V.5a.5.5 0 0 1 1 0V2A2.5 2.5 0 0 1 14 4.5h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14v1h1.5a.5.5 0 0 1 0 1H14a2.5 2.5 0 0 1-2.5 2.5v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14h-1v1.5a.5.5 0 0 1-1 0V14A2.5 2.5 0 0 1 2 11.5H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2v-1H.5a.5.5 0 0 1 0-1H2A2.5 2.5 0 0 1 4.5 2V.5A.5.5 0 0 1 5 0zm-.5 3A1.5 1.5 0 0 0 3 4.5v7A1.5 1.5 0 0 0 4.5 13h7a1.5 1.5 0 0 0 1.5-1.5v-7A1.5 1.5 0 0 0 11.5 3h-7zM5 6.5A1.5 1.5 0 0 1 6.5 5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3z"/>
                    </svg>
                  </span>
                  <span className="text-white">Systems Security</span>
                </li>
              </ul>
              
              <div className="mt-8 text-white">
                <p>Feel free to reach out if you have any opportunities or would like to discuss potential collaborations!</p>
                
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="mailto:asunanda@andrew.cmu.edu" 
                  className="inline-block bg-gradient-to-r from-green-600 to-green-800 py-3 px-6 
                            rounded-full text-white font-medium shadow-lg mt-6"
                >
                  Get In Touch
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;