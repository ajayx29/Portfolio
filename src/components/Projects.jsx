import React from 'react';
import { motion } from 'framer-motion';

// Project Card Component
const ProjectCard = ({ index, title, description, tags, image, link, github }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-gray-800 bg-opacity-60 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700 shadow-xl"
    >
      {/* Project Image */}
      <div className="relative h-48 md:h-56 w-full overflow-hidden">
        {/* Default gradient background if no image */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/60 to-cyan-600/60"></div>
        
        {/* Actual image - replace the conditional below with your actual image path */}
        {image && (
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-300"
          />
        )}
        
        {/* GitHub and Demo links */}
        {/* <div className="absolute bottom-0 right-0 p-4 flex gap-2">
          {github && (
            <a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 bg-opacity-80 p-2 rounded-full hover:bg-purple-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
              </svg>
            </a>
          )}
          
          {link && (
            <a 
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-900 bg-opacity-80 p-2 rounded-full hover:bg-cyan-900 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white">
                <path fillRule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fillRule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
              </svg>
            </a>
          )}
        </div> */}
      </div>
      
      {/* Project Content */}
      <div className="p-6">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h3>
        
        <div className="text-gray-300 text-sm mb-4 space-y-2">
          {typeof description === 'string' && description.includes('•') ? (
            description.split('\n\n\n').map((point, i) => (
              <p key={i}>{point}</p>
            ))
          ) : (
            <p>{description}</p>
          )}
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mt-4">
          {tags.map((tag, index) => (
            <span 
              key={`${tag}-${index}`}
              className="bg-purple-900/30 text-purple-200 px-3 py-1 text-xs rounded-full border border-purple-700/30"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Projects Component
const Projects = () => {
  // Example projects - replace with your actual projects
  const projects = [
    { 
      title: "Capture The Flag (CTF) Challenges", 
      description: [ 
        "Web Application Attacks: Advanced SQL Injections, XSS, CSRF, CORS & SOP, Authentication (MFA, OAuth, JWT), Server-side attacks, HTTP Request smuggling.", 
        "Binary exploitation: Stack canary, ASLR, ret2libc, NOP sleds and ROP gadgets (buffer overflow).", 
        "Cryptography: ECB, SHA-256 Hash Extension, Padding Oracle, and PGP.", 
        "Reverse Engineering: Static analysis (IDA Pro, Ghidra), Dynamic debugging (GDB, WinDbg), Decompilation techniques, and Assembly language interpretation (x86-x64).", 
        "Forensics: Autopsy, Volatility, disk image examination, memory dumps, file carving, timeline analysis, artifact recovery, malware detection, and incident reconstruction techniques" 
      ].map(point => `• ${point}`).join('\n\n\n'), 
      icon: "fas fa-flag", 
      tags: ["Web Security", "Binary Exploitation", "Cryptography", "Reverse Engineering", "Forensics"],
      image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
      link: null,
      github: null
    }, 
    { 
      title: "Network Protocol Attacks & Analysis", 
      description: `• Implemented network attack simulations including ICMP flooding, Smurf attacks, and TCP SYN flooding using raw 
socket programming, developed a packet sniffer tool to analyze network packet behaviors and demonstrated mitigation 
techniques such as SYN cookies within an isolated emulation environment.`, 
      icon: "fas fa-network-wired", 
      tags: ["Network Security", "Raw Sockets", "Packet Analysis", "DDoS Mitigation"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      link: null,
      github: null
    }, 
    { 
      title: "RAFT Consensus Algorithm",
      description: [
        "Implemented Raft consensus protocol for distributed replicated state machines, handling leader election, log replication and fault tolerance across network peers.",
        "Developed remote procedure call interfaces, utilized gob encoders for data serialization and handled node failure and network partition scenarios."
      ].map(point => `• ${point}`).join('\n\n\n'),
      icon: "fas fa-exchange-alt",
      tags: ["Distributed Systems", "RAFT", "Consensus Protocol", "Multithreading", "Fault Tolerance"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: null,
      github: null
    },
    {
      title: "Remote Method Invocation Library",
      description: `• Designed and implemented a robust RMI library enabling method calls across network boundaries with support for \ncomplex data structures, multithreading, and fault tolerance mechanisms to handle network failures, ensuring reliable \ncommunication between distributed applications.`,
      icon: "fas fa-exchange-alt",
      tags: ["Distributed Systems", "RMI", "Networking", "Multithreading", "Fault Tolerance"],
      image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: null,
      github: null
    }, 
    { 
      title: "Heap Allocator", 
      description: `• Developed a memory allocator, optimized throughput and achieved 74.4% utilization using techniques like segregated 
free lists, footer removal, decreasing minimum block size and tested correctness and efficiency through GDB and 
automated drivers.`, 
      icon: "fas fa-memory", 
      tags: ["C", "Memory Management", "Performance Optimization", "Systems Programming"],
      image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80",
      link: null,
      github: null
    }, 
    { 
      title: "Cache Simulator", 
      description: `• Designed and implemented a cache simulator in C, including optimizing a matrix transpose function to minimize cache 
misses, reducing clock cycles to meet performance thresholds for both 32x32 and 1024x1024 matrix sizes.`, 
      icon: "fas fa-microchip", 
      tags: ["C", "Cache Optimization", "Performance Tuning", "Systems Programming"],
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: null,
      github: null
    }, 
    { 
      title: "Shell Implementation", 
      description: `• Developed a robust Linux-based shell (tsh) that supported job control, I/O redirection, and signal handling, achieving 
100% correctness across 32 trace cases while optimizing for race condition handling and adhering to async-signal-safe 
programming practices`, 
      icon: "fas fa-terminal", 
      tags: ["C", "Shell Programming", "Process Management", "Signal Handling", "Linux"],
      image: "https://images.unsplash.com/photo-1629654297299-c8506221ca97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
      link: null,
      github: null
    }, 
    { 
      title: "Cloud-Native Sentiment Analysis with Microservices & Kafka", 
      description: `Developed a cloud-native sentiment analysis application using a microservice architecture (React frontend, Spring WebApp, and Python-based logic). Deployed the system on Google Kubernetes Engine (GKE) with Dockerized services and Kubernetes manifests. Integrated Apache Kafka as a message broker between services to enable asynchronous communication, improve reliability, and ensure scalability. Demonstrated seamless end-to-end execution of user-triggered sentiment analysis through a web interface.`, 
      icon: "fas fa-cloud", 
      tags: ["Microservices", "Kafka", "Kubernetes", "GKE", "Docker"],
      image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: null,
      github: null
    }, 
    { 
      title: "AWS Cloud Security and Monitoring Implementation", 
      description: `• Designed and implemented a comprehensive AWS security infrastructure utilizing KMS, IAM policies, encryption, security 
groups, NACLs, and Network Firewall, while configuring CloudTrail, CloudWatch, and AWS Config for automated 
monitoring, and incident response, resulting in enhanced data protection, operational security, and cost efficiency`, 
      icon: "fab fa-aws", 
      tags: ["AWS", "Cloud Security", "IAM", "KMS", "CloudTrail", "Monitoring"],
      image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      link: null,
      github: null
    }, 
    { 
      title: "BGP & HTTPS Hijacking Attack", 
      description: `• Conducted BGP and HTTPS hijacking attacks to analyze routing vulnerabilities and employed RPKI-based security 
measures to test mitigations against network hijacking and HTTPS spoofing threats.`, 
      icon: "fas fa-route", 
      tags: ["BGP", "HTTPS", "Network Security", "RPKI", "FRRouting"],
      image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1332&q=80",
      link: null,
      github: null
    }
  ];

  return (
    <section id="projects" className="relative w-full min-h-screen py-16 md:py-24">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/30 via-gray-900 to-gray-900 opacity-80 z-0"></div>
      
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
            My <span className="text-purple-500">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-cyan-400 mt-4"></div>
          <p className="mt-6 text-center text-gray-300 max-w-2xl">
            Here are some of my recent projects that showcase my skills and experience.
            Each project reflects my problem-solving approach and attention to detail.
          </p>
        </motion.div>
        
        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={`project-${index}`}
              index={index}
              {...project}
            />
          ))}
        </div>
        
        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            Want to see more of my work? Visit my GitHub repository for additional projects.
          </p>
          
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://github.com/ajayx29" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-800 py-3 px-6 
                      rounded-full text-white font-medium shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" className="text-white">
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg>
            View GitHub Profile
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;