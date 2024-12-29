import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a passionate cybersecurity enthusiast and developer with a focus on building secure, efficient, and innovative solutions. With expertise in Python scripting, network packet analysis, encryption techniques, and web development, I aim to bridge the gap between robust security and seamless user experience. My projects span encryption tools, automated security scripts, and portfolio development, showcasing a commitment to both functionality and security. Driven by continuous learning and problem-solving, I strive to create impactful tools and applications that prioritize reliability and performance.`;

export const ABOUT_TEXT = `I am a dedicated and adaptable cybersecurity enthusiast and developer with a passion for creating secure and efficient solutions. With a strong foundation in Python scripting, encryption techniques, network analysis, and web development, I enjoy tackling complex challenges and bringing ideas to life. My journey into cybersecurity and development began with a deep curiosity about how systems work and a drive to make them better.I thrive in collaborative environments, where I can combine technical expertise with creative problem-solving to deliver impactful results. Beyond coding, I enjoy exploring the latest advancements in cybersecurity, participating in CTFs, and working on open-source projects to give back to the community.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Cybersecurity Intern",
    company: "Prodigy InfoTech",
    description: `Developed a Python-based encryption tool using Caesar Cipher to secure messages. Designed a user-friendly interface for encryption and decryption, ensuring an intuitive experience. Conducted testing to ensure the accuracy and reliability of the tool.`,
    technologies: ["Python", "Tkinter", "Cryptography"],
  },
  {
    year: "2023 - 2024",
    role: "Cybersecurity Enthusiast",
    company: "Freelance Projects",
    description: `Worked on various cybersecurity-focused projects, including network packet analysis tools, password complexity checkers, and automated scripts. Built and optimized tools to identify vulnerabilities and improve security measures.`,
    technologies: ["Python", "Wireshark", "Bash"],
  },
  {
    year: "2023",
    role: "Web Developer",
    company: "Personal Portfolio Project",
    description: `Designed and developed a responsive portfolio website to showcase skills and projects. Integrated interactive elements to enhance user engagement and highlight cybersecurity expertise.`,
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    year: "2022 - 2023",
    role: "Python Developer",
    company: "University Projects",
    description: `Created tools and scripts for various use cases, including pixel manipulation and password complexity analysis. Focused on automation and efficiency while adhering to best coding practices.`,
    technologies: ["Python", "Pillow", "Regex"],
  },
];


export const PROJECTS = [
  {
    title: "Encryption Tool",
    image: project1,
    description:
      "A Python-based encryption and decryption tool utilizing the Caesar Cipher. Designed with a user-friendly interface for secure message communication.",
    technologies: ["Python", "Tkinter", "Cryptography"],
  },
  {
    title: "Network Packet Analyzer",
    image: project2,
    description:
      "A tool for analyzing network traffic to detect vulnerabilities and potential security threats. Features packet filtering and protocol analysis.",
    technologies: ["Python", "Wireshark", "Scapy"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing cybersecurity projects, technical skills, and professional experience.",
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    title: "Password Complexity Checker",
    image: project4,
    description:
      "An automated tool to evaluate password strength and suggest improvements based on complexity standards.",
    technologies: ["Python", "Regex", "Flask"],
  },
];


export const CONTACT = {
  address: "Malappuram , kerala , india ",
  phoneNo: "+91 97465 68080",
  email: "Faheemcp@proton.me",
};
