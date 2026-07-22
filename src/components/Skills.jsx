
import React from 'react';
import { motion } from 'framer-motion';

// Skill Category component
const SkillCategory = ({ title, skills }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="bg-gray-800/40 backdrop-blur-sm rounded-xl p-6 border border-gray-700 shadow-lg h-full"
    >
      <h3 className="text-xl font-bold text-white mb-4 pb-2 border-b border-green-500/30">{title}</h3>
      
      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-green-900/30 text-green-200 px-4 py-2 rounded-full text-sm border border-green-700/30"
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

// Skills component
const Skills = () => {
  // Skills categories based on your resume
  const skillCategories = [
    {
      title: "Security",
      skills: ["Penetration Testing", "Vulnerability Assessment", "Reverse Engineering", "Threat Modelling", "Threat Detection", "Forensics"]
    },
    {
      title: "Programming/Scripting Languages",
      skills: ["C++", "Python", "C", "Go/Golang", "Shell", "Assembly language", "Powershell", "Rust", "Embedded C (arduino)"]
    },
    {
      title: "Frameworks & Tools",
      skills: ["Nmap", "Metasploit", "Wireshark", "Burp Suite", "Hashcat", "Ghidra", "WinDBG", "ElasticSearch ELK", "Docker", "Kubernetes", "Ansible", "Terraform IaC", "Kafka", "Jenkins(CI/CD)", "Git", "Django", "Flask"]
    },
    {
      title: "Systems & Cloud Computing",
      skills: [ "Linux & Windows administration", "Distributed Systems", "Low-level systems", "AWS (EC2, S3, DNS, Route53, DynamoDB)", "Azure", "GCP (VM, SQL, Loadbalancer, IAM, GKE, VPC)"]
    }
  ];

  return (
    <section id="skills" className="relative w-full min-h-screen py-16 md:py-24">
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
            My <span className="text-green-500">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-cyan-400 mt-4"></div>
          <p className="mt-6 text-center text-gray-300 max-w-2xl">
            I've developed a diverse skill set throughout my education and professional experience. 
            Here's an overview of my technical expertise.
          </p>
        </motion.div>
        
        {/* Skill Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillCategory 
              key={index}
              title={category.title}
              skills={category.skills}
            />
          ))}
        </div>
        
        {/* Professional Experience Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Professional Experience</h3>
          
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-green-500">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>
              <h4 className="text-xl font-semibold text-white">Software Engineer</h4>
              <p className="text-cyan-300">Microsoft | Feb 2026 – Present</p>
              <p className="text-gray-300 mt-2">
                Working on AI scenarios under OneDrive–SharePoint.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-green-500">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>
              <h4 className="text-xl font-semibold text-white">Software Engineer Intern</h4>
              <p className="text-cyan-300">Microsoft | May 2025 – Aug 2025</p>
              <p className="text-gray-300 mt-2">
                Enabled WiFi feature for WinRE to detect and connect to known WiFi networks, allowing users to recover their devices without needing a wired connection.
              </p>
            </div>

            <div className="relative pl-6 border-l-2 border-green-500">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>
              <h4 className="text-xl font-semibold text-white">Network Consulting Engineer - II</h4>
              <p className="text-cyan-300"> Cisco | Aug 2021 – Jul 2024</p>
              <div className="text-gray-300 mt-2 space-y-2">
                <p>- Led a network infrastructure transformation, migrating 20+ critical sites and deploying 50+ devices across 30+ maintenance windows with zero service interruptions.</p>
                <p>- Resolved complex routing protocol issues (OSPF, BGP, IS-IS, MPLS-VPN) and built Python/TextFSM automation that cut service discovery time by 75%.</p>
              </div>
            </div>
            
            <div className="relative pl-6 border-l-2 border-green-500">
              <div className="absolute w-4 h-4 bg-green-500 rounded-full -left-[9px] top-1"></div>
              <h4 className="text-xl font-semibold text-white">Network Engineering Intern</h4>
              <p className="text-cyan-300"> Cisco | Jan 2021 – Jul 2021</p>
              <p className="text-gray-300 mt-2">
              Collaborated on rigorous testing of internal automation tools with comprehensive documentation for a new migration project (TDM2IP transition), 
              while simultaneously implementing an automated MPLS-VPN configurations for potential client use cases.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Awards Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12 bg-gray-800/40 backdrop-blur-sm rounded-xl p-8 border border-gray-700 shadow-lg"
        >
          <h3 className="text-2xl font-bold text-white mb-6">Certifications</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-4 bg-green-900/20 rounded-lg border border-green-700/30">
              <h4 className="text-white font-semibold">Practical Network Penetration Tester (PNPT)</h4>
              <p className="text-green-300 text-sm">Ongoing</p>
            
            </div>

            <div className="p-4 bg-green-900/20 rounded-lg border border-green-700/30">
              <h4 className="text-white font-semibold">AWS Certified Solutions Architect</h4>
              <p className="text-green-300 text-sm">Oct 2023</p>

            </div>
            
            <div className="p-4 bg-green-900/20 rounded-lg border border-green-700/30">
              <h4 className="text-white font-semibold">Cisco Certified Network Associate (CCNA)</h4>
              <p className="text-green-300 text-sm">June 2020</p>
              
            </div>
            
            <div className="p-4 bg-green-900/20 rounded-lg border border-green-700/30">
              <h4 className="text-white font-semibold">Cisco Certified DevNet Associate</h4>
              <p className="text-green-300 text-sm">March 2020</p>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;