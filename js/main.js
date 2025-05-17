document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    const options = {
        strings: ['Cybersecurity', 'Systems Administration', 'Network Security', 'Infrastructure Design', 'Security Architecture'],
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
                title: "Senior Security Engineer",
                company: "Secure Systems Inc.",
                date: "Jan 2020 - Present",
                description: "Lead security assessments, implement security controls, and develop security architecture for enterprise clients."
            },
            {
                title: "Systems Administrator",
                company: "Tech Solutions Ltd.",
                date: "Mar 2017 - Dec 2019",
                description: "Managed and optimized Linux and Windows server infrastructure, implemented virtualization solutions, and automated system processes."
            },
            {
                title: "Network Security Specialist",
                company: "Cyber Defense Corp.",
                date: "Jun 2015 - Feb 2017",
                description: "Conducted network security assessments, implemented firewall rules, and monitored network traffic for security incidents."
            }
        ],
        certifications: [
            "Certified Information Systems Security Professional (CISSP)",
            "Certified Ethical Hacker (CEH)",
            "CompTIA Security+",
            "Red Hat Certified Engineer (RHCE)",
            "AWS Certified Solutions Architect",
            "Certified Kubernetes Administrator (CKA)"
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
            title: "Enterprise Security Architecture",
            description: "Designed and implemented a comprehensive security architecture for a large enterprise, including network segmentation, access controls, and monitoring systems.",
            icon: "fas fa-shield-alt",
            tags: ["Security Architecture", "Network Security", "Access Control"]
        },
        {
            title: "Automated Vulnerability Scanner",
            description: "Developed a custom vulnerability scanning tool using Python that automates the process of identifying and reporting security vulnerabilities in web applications.",
            icon: "fas fa-search",
            tags: ["Python", "Security Tools", "Automation"]
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
        {
            title: "Zero Trust Network Implementation",
            description: "Designed and implemented a Zero Trust network architecture for a financial services client, significantly improving their security posture.",
            icon: "fas fa-lock",
            tags: ["Zero Trust", "Network Security", "Authentication"]
        }
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
                <a href="#" class="btn-small"><i class="fas fa-info-circle"></i> More Details</a>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
}