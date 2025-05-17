document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    const options = {
        strings: ['Web Application security', 'Network Security', 'Cloud Security', 'Systems Security'],
        typeSpeed: 50,
        backSpeed: 30,
        backDelay: 1500,
        startDelay: 500,
        loop: true
    };
    
    const typed = new Typed('.typed-text', options);
    
    // Navigation functionality
    const navLinks = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the target section
            const targetId = this.getAttribute('href');
            
            // Hide all sections
            sections.forEach(section => section.classList.remove('active'));
            
            // Show target section
            document.querySelector(targetId).classList.add('active');
        });
    });
    
    // Contact form functionality removed as requested
    // Contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // In a real implementation, you would send the form data to a server
            // For now, we'll just show an alert
            alert('Thank you for your message! In a real implementation, this would be sent to a server.');
            contactForm.reset();
        });
    }
    
    // Parse and display resume data
    loadResumeData();
    
    // Load project data
    loadProjectData();
});

// Function to load resume data from JSON
function loadResumeData() {
    // This would typically fetch from a JSON file, but for simplicity, we'll define it inline
    const resumeData = {
        experience: [
            {
                title: "Security Software Engineer Intern",
                company: "Microsoft",
                date: "May 2025 - Aug 2025",
                description: "Incoming Intern in Azure Edge + Platfrom team."
            },
            {
                title: "Network Consulting Engineer",
                company: "Cisco Systems.",
                date: "Aug 2021 - Jul 2024",
                description: `• Successfully migrated 20+ critical sites and deployed 50+ new network devices, executing 30+ maintenance 
windows with 100% success rate and zero service interruptions, resulting in 45% improvement in network 
performance and reliability.
• Identified and resolved issues with routing protocols (OSPF, BGP, IS-IS, and MPLS-VPN) throughout migration process.
• Implemented a configuration conversion tool for multi-vendor router migration using Jinja and TTP template engines, 
streamlining the process with a 70% decrease in errors and 25% increase in project efficiency.
• Developed an application for efficient employee's skills data collection and visualization, achieving a 70% utilization 
rate among managers through effective engagement and training initiatives.
• Engineered network automation solution with Python and TextFSM, reducing service discovery time by 75% (from 15 
hours to 20 minutes) and improving operational visibility by 80%.
• Conducted comprehensive software risk analysis for ISP infrastructure, identifying 60+ potential vulnerabilities and 
recommending mitigation strategies to improve overall security posture.`
            },
            {
                title: "Network Engineering Intern",
                company: "Cisco Systems.",
                date: "Jan 2021 - Jul 2021",
                description: 'Collaborated on rigorous testing of internal automation tools with comprehensive documentation for a new migration project, while simultaneously implementing an MPLS-VPN simulation environment that successfully configured 5+ complex routing scenarios for potential client use cases.'
            }
        ],
        certifications: [
            "Practical Network Penetration Tester (PNPT) (ongoing)",
            "AWS Certified Solutions Architect",
            "Cisco Certified Network Associate (CCNA)",
            "Cisco Certified DevNet Associate"
        ]
    };
    
    // Populate experience timeline
    const timelineContainer = document.querySelector('.timeline');
    if (timelineContainer) {
        resumeData.experience.forEach(exp => {
            const timelineItem = document.createElement('div');
            timelineItem.className = 'timeline-item';
            timelineItem.innerHTML = `
                <div class="timeline-icon">
                    <i class="fas fa-briefcase"></i>
                </div>
                <div class="timeline-content">
                    <h4>${exp.title}</h4>
                    <h5>${exp.company}</h5>
                    <div class="timeline-date"><i class="far fa-calendar-alt"></i> ${exp.date}</div>
                    <p>${exp.description}</p>
                </div>
            `;
            timelineContainer.appendChild(timelineItem);
        });
    }
    
    // Populate certifications
    const certList = document.querySelector('.certifications ul');
    if (certList) {
        resumeData.certifications.forEach(cert => {
            const certItem = document.createElement('li');
            certItem.innerHTML = `<i class="fas fa-check-circle"></i> ${cert}`;
            certList.appendChild(certItem);
        });
    }
}

// Function to load project data
function loadProjectData() {
    // This would typically fetch from a JSON file, but for simplicity, we'll define it inline
    const projectsData = [
        {
            title: "Capture The Flag (CTF) Challenges",
            description: `• Web Application Attacks: Advanced SQL Injections, XSS, CSRF, CORS & SOP, Authentication (MFA, OAuth, 
JWT), Server-side attacks, HTTP Request smuggling.
• Binary exploitation: Stack canary, ASLR, ret2libc, NOP sleds and ROP gadgets (buffer overflow).
• Cryptography: ECB, SHA-256 Hash Extension, Padding Oracle, and PGP.
• Reverse Engineering: Static analysis (IDA Pro, Ghidra), Dynamic debugging (GDB, WinDbg), Decompilation 
techniques, and Assembly language interpretation (x86-x64).
• Forensics: Autopsy, Volatility, disk image examination, memory dumps, file carving, timeline analysis, artifact recovery, 
malware detection, and incident reconstruction techniques`,
            icon: "fas fa-flag",
            tags: ["Web Security", "Binary Exploitation", "Cryptography", "Reverse Engineering", "Forensics"]
        },
        {
            title: "Network Protocol Attacks & Analysis",
            description: `• Implemented network attack simulations including ICMP flooding, Smurf attacks, and TCP SYN flooding using raw 
socket programming, developed a packet sniffer tool to analyze network packet behaviors and demonstrated mitigation 
techniques such as SYN cookies within an isolated emulation environment.`,
            icon: "fas fa-network-wired",
            tags: ["Network Security", "Raw Sockets", "Packet Analysis", "DDoS Mitigation"]
        },
        {
            title: "AWS Cloud Security and Monitoring Implementation",
            description: `• Designed and implemented a comprehensive AWS security infrastructure utilizing KMS, IAM policies, encryption, security 
groups, NACLs, and Network Firewall, while configuring CloudTrail, CloudWatch, and AWS Config for automated 
monitoring, and incident response, resulting in enhanced data protection, operational security, and cost efficiency`,
            icon: "fab fa-aws",
            tags: ["AWS", "Cloud Security", "IAM", "KMS", "CloudTrail", "Monitoring"]
        },
        {
            title: "BGP & HTTPS Hijacking Attack",
            description: `• Conducted BGP and HTTPS hijacking attacks to analyze routing vulnerabilities and employed RPKI-based security 
measures to test mitigations against network hijacking and HTTPS spoofing threats.`,
            icon: "fas fa-route",
            tags: ["BGP", "HTTPS", "Network Security", "RPKI", "FRRouting"]
        },
        {
            title: "Remote Method Invocation Library",
            description: `• Designed and implemented a robust RMI library enabling method calls across network boundaries with support for 
complex data structures, multithreading, and fault tolerance mechanisms to handle network failures, ensuring reliable 
communication between distributed applications.`,
            icon: "fas fa-exchange-alt",
            tags: ["Distributed Systems", "RMI", "Networking", "Multithreading", "Fault Tolerance"]
        },
        {
            title: "Heap Allocator",
            description: `• Developed a memory allocator, optimized throughput and achieved 74.4% utilization using techniques like segregated 
free lists, footer removal, decreasing minimum block size and tested correctness and efficiency through GDB and 
automated drivers.`,
            icon: "fas fa-memory",
            tags: ["C", "Memory Management", "Performance Optimization", "Systems Programming"]
        },
        {
            title: "Cache Simulator",
            description: `• Designed and implemented a cache simulator in C, including optimizing a matrix transpose function to minimize cache 
misses, reducing clock cycles to meet performance thresholds for both 32x32 and 1024x1024 matrix sizes.`,
            icon: "fas fa-microchip",
            tags: ["C", "Cache Optimization", "Performance Tuning", "Systems Programming"]
        },
        {
            title: "Shell Implementation",
            description: `• Developed a robust Linux-based shell (tsh) that supported job control, I/O redirection, and signal handling, achieving 
100% correctness across 32 trace cases while optimizing for race condition handling and adhering to async-signal-safe 
programming practices`,
            icon: "fas fa-terminal",
            tags: ["C", "Shell Programming", "Process Management", "Signal Handling", "Linux"]
        },
        
        {
            title: "Containerized Microservices Platform",
            description: "Architected and deployed a secure containerized microservices platform using Docker and Kubernetes with integrated security controls.",
            icon: "fas fa-cubes",
            tags: ["Docker", "Kubernetes", "Microservices", "Security"]
        },
        {
            title: "Infrastructure as Code Implementation",
            description: "Implemented Infrastructure as Code using Terraform and Ansible for a cloud-based environment, ensuring consistent and secure deployments.",
            icon: "fas fa-code",
            tags: ["Terraform", "Ansible", "IaC", "Cloud"]
        },
        {
            title: "Security Incident Response Platform",
            description: "Created an automated security incident response platform that detects, analyzes, and responds to security threats in real-time.",
            icon: "fas fa-exclamation-triangle",
            tags: ["Incident Response", "Automation", "Monitoring"]
        },
        
    ];
    
    // Populate projects grid
    const projectsGrid = document.querySelector('.projects-grid');
    if (projectsGrid) {
        projectsData.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            let tagsHTML = '';
            project.tags.forEach(tag => {
                tagsHTML += `<span>${tag}</span>`;
            });
            
            projectCard.innerHTML = `
                <div class="project-icon">
                    <i class="${project.icon}"></i>
                </div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${tagsHTML}
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
}