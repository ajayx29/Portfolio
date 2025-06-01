import React, { useState, useEffect, useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Text, useGLTF, Environment, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Main App Component
const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-x-hidden">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <div className="container mx-auto px-4">
        <HeroSection setActiveSection={setActiveSection} />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
      <Footer />
    </div>
  );
};

// Navbar Component
const Navbar = ({ activeSection, setActiveSection }) => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];
  
  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-gray-900/90 backdrop-blur-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold" onClick={() => setActiveSection('home')}>
          <span className="text-blue-400">A.</span>Sankar
        </a>
        <div className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <a 
              key={item.id}
              href={`#${item.id}`}
              className={`transition-colors hover:text-blue-400 ${activeSection === item.id ? 'text-blue-400' : ''}`}
              onClick={() => setActiveSection(item.id)}
            >
              {item.label}
            </a>
          ))}
        </div>
        <a 
          href="#contact" 
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          onClick={() => setActiveSection('contact')}
        >
          Let's Talk
        </a>
      </div>
    </nav>
  );
};

// 3D Animated Cube Component
const AnimatedCube = () => {
  const mesh = useRef();
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });
  
  return (
    <mesh ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color="#3b82f6" wireframe={true} />
    </mesh>
  );
};

// 3D Text Effect
const FloatingText = ({ text, position, rotation, size = 1 }) => {
  return (
    <Float speed={2} rotationIntensity={0.2} floatIntensity={0.5}>
      <Text
        font="/Inter-Bold.woff"
        fontSize={size}
        position={position}
        rotation={rotation}
        color="#60a5fa"
      >
        {text}
      </Text>
    </Float>
  );
};

// 3D Scene Component
const Scene3D = () => {
  const skills = ['DevOps', 'Cloud', 'Kubernetes', 'React', 'Python', 'C++'];
  
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 15]} />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Suspense fallback={null}>
        <AnimatedCube />
        {skills.map((skill, i) => {
          const angle = (i / skills.length) * Math.PI * 2;
          const radius = 6;
          const x = Math.sin(angle) * radius;
          const z = Math.cos(angle) * radius;
          return (
            <FloatingText 
              key={skill} 
              text={skill} 
              position={[x, (i % 2 === 0 ? 1 : -1), z]} 
              rotation={[0, -angle, 0]}
              size={0.8}
            />
          );
        })}
        <Environment preset="city" />
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

// Hero Section with 3D Animation
const HeroSection = ({ setActiveSection }) => {
  return (
    <section id="home" className="min-h-screen flex flex-col md:flex-row items-center">
      <div className="md:w-1/2 pt-24 md:pt-0">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-blue-400">Ajay Sunandan</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
          Software Developer
        </h2>
        <p className="text-gray-400 mb-8 text-lg">
          Building robust cloud infrastructures and secure applications with expertise in GCP, AWS, and Kubernetes.
        </p>
        <div className="flex flex-wrap gap-4">
          <a 
            href="#projects" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition-colors"
            onClick={() => setActiveSection('projects')}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="border border-blue-600 text-blue-400 hover:bg-blue-900/30 px-6 py-3 rounded-md transition-colors"
            onClick={() => setActiveSection('contact')}
          >
            Contact Me
          </a>
        </div>
      </div>
      <div className="md:w-1/2 h-96 md:h-screen pt-12 md:pt-0">
        <Scene3D />
      </div>
    </section>
  );
};

// About Section Component
const AboutSection = () => {
  return (
    <section id="about" className="py-20">
      <div className="flex flex-col md:flex-row items-start gap-12">
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 mb-6"></div>
          <p className="text-gray-300 mb-4">
            I'm a Master's student in Computer Science at Georgia Institute of Technology, specializing in computing systems, machine learning and software development.
          </p>
          <p className="text-gray-300 mb-4">
            With over 2 years of professional experience as a DevOps Engineer, I've improved cloud resource security postures, implemented containerized infrastructure, and led deployment teams to deliver efficient solutions.
          </p>
          <p className="text-gray-300 mb-6">
            My background in Electronics and Communication Engineering complements my software engineering skills, allowing me to approach problems from both hardware and software perspectives.
          </p>
          <div className="flex flex-col md:flex-row gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Education</h3>
              <p className="text-gray-300 mb-1">MS in Computer Science</p>
              <p className="text-gray-400 mb-3">Georgia Institute of Technology (GPA: 4.0/4.0)</p>
              <p className="text-gray-300 mb-1">BTech in Electronics and Communication</p>
              <p className="text-gray-400">Amrita Vishwa Vidyapeetham (GPA: 9.29/10)</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Achievements</h3>
              <ul className="list-disc list-inside text-gray-300">
                <li className="mb-2">Gold Medallist - Undergraduate</li>
                <li className="mb-2">IvyHacks - 3rd Best Overall Hack</li>
                <li className="mb-2">Technica 2020 - Best Hack for Social Good</li>
                <li>Australia-India Innovation Bridge Re-hack Winner</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="md:w-1/2 bg-gray-800/50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold mb-4 text-blue-400">Key Expertise</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700/50 p-4 rounded-md">
              <h4 className="font-medium text-lg mb-2">Cloud Infrastructure</h4>
              <p className="text-gray-400">AWS, GCP, Azure with expertise in VM management, databases, networking, and containerization.</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-md">
              <h4 className="font-medium text-lg mb-2">DevOps & CI/CD</h4>
              <p className="text-gray-400">Jenkins, Docker, Kubernetes, Ansible, Terraform for automated deployment and infrastructure.</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-md">
              <h4 className="font-medium text-lg mb-2">Security Compliance</h4>
              <p className="text-gray-400">ISO 27001, SOC2 Type2, GDPR implementation and cloud security enhancements.</p>
            </div>
            <div className="bg-gray-700/50 p-4 rounded-md">
              <h4 className="font-medium text-lg mb-2">Software Development</h4>
              <p className="text-gray-400">Full-stack development using React, Node.js, and experience with C++, Python, Go.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Experience Section Component
const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20">
      <h2 className="text-3xl font-bold mb-2">Professional Experience</h2>
      <div className="w-20 h-1 bg-blue-500 mb-12"></div>
      
      <div className="space-y-12">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-blue-400">SDE-1 DevOps Engineer</h3>
            <p className="text-gray-400 mb-2">Increff (NextSCM Solutions)</p>
            <p className="text-gray-500">Jun 2022 – Jul 2024</p>
          </div>
          <div className="md:w-2/3">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Enhanced security posture of cloud resources in GCP by 50%, compliant with ISO and CIS standards.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Collaborated with stakeholders to achieve ISO 27001:2013, SOC2 Type2, and GDPR compliance certifications.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Reduced SSL certificate management overhead by 70% through secure private tunnels between VMs and MySQL.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Implemented inter-cloud tunnelling between AWS and GCP, boosting security score by 5%.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Migrated a legacy application to containerized infrastructure in GKE, reducing deployment time by 80%.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Led a team of deployment engineers, demonstrating strong leadership skills.
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">GCP</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">AWS</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">Kubernetes</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">Ansible</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">Terraform</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">ELK</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-blue-400">SDE-1 DevOps Intern</h3>
            <p className="text-gray-400 mb-2">Increff (NextSCM Solutions)</p>
            <p className="text-gray-500">Feb 2022 – May 2022</p>
          </div>
          <div className="md:w-2/3">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Implemented test deployment pipeline in Jenkins, reducing production deployment failures by 90%.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Handled critical production deployments and improved pipeline scripts to handle dependency failures.
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">Jenkins</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">Shell</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">Groovy</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">Ansible</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">Terraform</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-1/3">
            <h3 className="text-xl font-semibold text-blue-400">Software Engineer Intern</h3>
            <p className="text-gray-400 mb-2">Microsoft India (R&D)</p>
            <p className="text-gray-500">Jun 2021 - Aug 2021</p>
          </div>
          <div className="md:w-2/3">
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Developed a feature for OS patch management, reducing patch failures for Azure Virtual Machines.
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Ensured smooth deployment in production by adhering to SDLC practices.
              </li>
            </ul>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">REST APIs</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">C#</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">Azure VMs</span>
              <span className="bg-blue-900/40 text-blue-300 px-3 py-1 rounded-full text-sm">Microservices</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Projects Section Component
const ProjectsSection = () => {
  const projects = [
    {
      title: "Multi-Version Concurrency Control Implementation",
      description: "Implemented MVCC using Multi-Version Timestamp Ordering protocol with append-only version storage architecture. Designed version chains and timestamp-based transaction management to improve concurrency while maintaining consistency.",
      technologies: ["C++", "MVTO", "Database Systems"],
      image: "database.jpg"
    },
    {
      title: "Secure API Authentication System",
      description: "Developed a secure REST API authentication system using Node.js, Express, and PostgreSQL with JWT token-based authentication. Implemented user registration, login flows and role-based access control.",
      technologies: ["Node.js", "PostgreSQL", "Express", "JWT", "RBAC"],
      image: "secure-api.jpg"
    },
    {
      title: "Internet Simulation Implementation",
      description: "Implemented load balancing and traffic engineering in OSPF, BGP in a virtual network of interconnected ASes, designed to imitate real internet functionality. Deployed dedicated docker containers for each network component.",
      technologies: ["OSPF", "BGP", "Open vSwitch", "FRR", "Docker"],
      image: "network.jpg"
    },
    {
      title: "Farm Level Crop Yield Prediction",
      description: "Co-developed and trained a deep learning model to predict farm-wise crop yield using remotely sensed multitemporal multi-source satellite images, achieving 94.4% accuracy.",
      technologies: ["Python", "Deep Learning", "Regression", "Google Earth Engine"],
      image: "crop-yield.jpg"
    },
    {
      title: "Path Finder: Mars Rover Project",
      description: "Developed a dynamic browser-based web application using the React framework, employing multiple shortest path finding algorithms to find the shortest distance between two chosen points in a grid.",
      technologies: ["HTML", "CSS", "React", "JavaScript"],
      image: "mars-rover.jpg"
    }
  ];
  
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl font-bold mb-2">Projects</h2>
      <div className="w-20 h-1 bg-blue-500 mb-12"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800/50 rounded-lg overflow-hidden transition-all hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20">
            <div className="h-40 bg-gray-700 flex items-center justify-center">
              <span className="text-5xl text-blue-400 opacity-30">{project.title.charAt(0)}</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-400">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-900/40 text-blue-300 px-2 py-1 text-xs rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Skills Section Component
const SkillsSection = () => {
  const skillCategories = [
    {
      category: "Cloud & Infrastructure",
      skills: ["AWS (EC2, S3, DNS, Route53, DynamoDB)", "GCP (VM, SQL, Loadbalancer, IAM, GKE, VPC)", "Azure", "Kubernetes", "Docker"]
    },
    {
      category: "DevOps & Tools",
      skills: ["Jenkins (CI/CD)", "Ansible", "Terraform", "Git", "Bitbucket", "ElasticSearch ELK", "Kafka", "Graylog"]
    },
    {
      category: "Programming Languages",
      skills: ["C++", "Python", "Go/Golang", "C#", "JavaScript", "Shell Scripting", "SQL", "HTML/CSS"]
    },
    {
      category: "Frameworks & Technologies",
      skills: ["React", "Node.js", "Express", "RESTful APIs", "JWT", "RBAC", "Microservices"]
    }
  ];
  
  return (
    <section id="skills" className="py-20">
      <h2 className="text-3xl font-bold mb-2">Skills & Expertise</h2>
      <div className="w-20 h-1 bg-blue-500 mb-12"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, index) => (
          <div key={index} className="bg-gray-800/50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">{category.category}</h3>
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="bg-gray-700/70 px-4 py-2 rounded-md text-gray-300">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12">
        <h3 className="text-xl font-semibold mb-6 text-blue-400">Certifications</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-900/30">
            <h4 className="font-medium text-lg mb-2">Google Cloud Developer</h4>
            <p className="text-gray-400">GCP Professional Certification (Udemy)</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-900/30">
            <h4 className="font-medium text-lg mb-2">CKA</h4>
            <p className="text-gray-400">Certified Kubernetes Administrator (Udemy)</p>
          </div>
          <div className="bg-gray-800/50 p-4 rounded-lg border border-blue-900/30">
            <h4 className="font-medium text-lg mb-2">Operating Systems</h4>
            <p className="text-gray-400">Operating Systems Specialization (Coursera)</p>
          </div>
        </div>
      </div>
    </section>
  );
};

// Contact Section Component
const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
      <div className="w-20 h-1 bg-blue-500 mb-12"></div>
      
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/2">
          <p className="text-gray-300 mb-8 text-lg">
            I'm currently looking for new opportunities in software engineering and cloud infrastructure. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>
          
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-400">Email</h3>
                <p className="text-gray-300">asankar38@gatech.edu</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-400">Phone</h3>
                <p className="text-gray-300">(470)-452-9819</p>
              </div>
            </div>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-medium text-blue-400">Social Media</h3>
                <div className="flex space-x-4 mt-2">
                  <a href="https://linkedin.com/in/aruneswari-s-4048b81b1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/arunasankar01" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your email"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Subject"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full bg-gray-800 border border-gray-700 rounded-md py-3 px-4 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md transition-colors w-full md:w-auto">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-2xl font-bold">
              <span className="text-blue-400">A.</span>Sankar
            </p>
            <p className="text-gray-400 mt-2">Software Developer</p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#home" className="text-gray-400 hover:text-blue-400 transition-colors">Home</a>
            <a href="#about" className="text-gray-400 hover:text-blue-400 transition-colors">About</a>
            <a href="#experience" className="text-gray-400 hover:text-blue-400 transition-colors">Experience</a>
            <a href="#projects" className="text-gray-400 hover:text-blue-400 transition-colors">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-blue-400 transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Ajay Sunandan. All rights reserved.
          </p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="https://linkedin.com/in/aruneswari-s-4048b81b1" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
              <span className="sr-only">LinkedIn</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="https://github.com/arunasankar01" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400 transition-colors">
              <span className="sr-only">GitHub</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default App;