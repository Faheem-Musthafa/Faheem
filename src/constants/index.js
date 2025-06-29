import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a cybersecurity enthusiast and developer with a passion for building secure, high-performance, and user-centric applications. My expertise lies in Python scripting, web security, network analysis, and automation. I focus on creating tools that merge functionality with strong security principles—from encryption utilities to packet sniffers and portfolio websites. I’m driven by a mindset of continuous learning, ethical hacking, and creative problem-solving to craft impactful solutions that prioritize resilience and real-world utility.`;

export const ABOUT_TEXT = `I'm a driven and detail-oriented cybersecurity enthusiast and developer, constantly exploring the intersection of technology and security. My journey began with a fascination for how systems work—and how they break. Over time, I've honed my skills in Python scripting, encryption methods, network traffic analysis, and full-stack web development. 

Whether it's building custom tools, automating security workflows, or designing secure interfaces, I strive to ensure every project is both technically sound and user-friendly. I actively participate in CTFs, contribute to open-source initiatives, and stay updated with the latest in offensive and defensive security. Outside of coding, I love diving into cybersecurity research and reverse engineering challenges.`;

export const EXPERIENCES = [
  {
    year: "2024 – 2024",
    role: "Cybersecurity Intern",
    company: "Prodigy InfoTech",
    description: `Built an intuitive Python encryption tool based on Caesar Cipher. Focused on usability, accurate encoding/decoding, and simple GUI deployment. Tested extensively to ensure reliability and data integrity across inputs.`,
    technologies: ["Python", "Tkinter", "Cryptography"],
  },
  {
    year: "2023 – 2024",
    role: "Cybersecurity Developer",
    company: "Freelance & Self-Initiated Projects",
    description: `Developed cybersecurity tools targeting network sniffing, fuzzing, and password strength validation. Automated routine security tasks using custom Python and Bash scripts, and analyzed vulnerabilities in network traffic.`,
    technologies: ["Python", "Wireshark", "Scapy", "Bash"],
  },
  {
    year: "2023",
    role: "Web Developer",
    company: "Personal Branding Project",
    description: `Designed and deployed a responsive portfolio website to showcase cybersecurity projects and achievements. Focused on performance, accessibility, and modern design trends.`,
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
  },
  {
    year: "2022 – 2023",
    role: "Python Automation Developer",
    company: "University Projects",
    description: `Created automation scripts and utilities for security-related use cases such as password complexity scoring, image processing, and basic system monitoring. Emphasized clean code and efficient logic.`,
    technologies: ["Python", "Pillow", "Regex", "OS"],
  },
];



export const PROJECTS = [
  {
    title: "ShadowHound",
    image: project1,
    description:
      "A black-box web vulnerability scanner built in Python that automates reconnaissance, scanning, and fuzzing using custom wordlists and payloads.",
    technologies: ["Python", "Requests", "BeautifulSoup", "Threading"],
    codeLink: "https://github.com/Faheem-Musthafa/ShadowHound",
  },
  {
    title: "CodeX - WiFi Pentest Toolkit",
    image: project2,
    description:
      "A powerful toolkit for automated WiFi penetration testing, including handshake capture, PMKID attack, and Evil Twin access point deployment.",
    technologies: ["Bash", "Python", "Aircrack-ng", "hostapd"],
    codeLink: "https://github.com/Faheem-Musthafa/CodeX",
  },
  {
    title: "Cyberfolio",
    image: project3,
    description:
      "A futuristic and responsive portfolio site showcasing cybersecurity expertise, real-world projects, and certification progress.",
    technologies: ["Next.js", "Tailwind CSS", "Framer Motion", "Markdown"],
    codeLink: "https://github.com/Faheem-Musthafa/Faheem",
  },
  {
    title: "PassGuardian",
    image: project4,
    description:
      "A Flask-based tool that checks password strength, identifies reused or weak patterns, and offers real-time security recommendations.",
    technologies: ["Flask", "Regex", "Bootstrap", "Jinja2"],
    codeLink: "https://github.com/Faheem-Musthafa/PassGuardian",
  },
];



export const CONTACT = {
  address: "Malappuram , kerala , india ",
  phoneNo: "+91 97465 68080",
  email: "Faheemcp@proton.me",
};
