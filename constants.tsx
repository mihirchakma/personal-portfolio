import type { Project, Skill, Education } from './types';
import {
  Code,
  Database,
  Cloud,
  GitBranch,
  Cpu,
  Linkedin,
  Github,
  Mail,
  Smartphone,
  Flame,
  Coffee,
  Server,
  Package,
  Atom,
  Rocket,
  ShipWheel,
  TerminalSquare,
} from 'lucide-react';

export const PERSONAL_INFO = {
  name: 'Mihir Chakma',
  title: 'Software Engineer (Back-End)',
  bio: 'Software Engineer (Back-End) passionate about building robust and efficient systems. I specialize in crafting high-performance solutions using Python, Rust, and Mojo.',
  about: "Hello! I'm Mihir, a Software Engineer (Back-End) specializing in creating powerful server-side logic for modern applications. My journey into tech began at the Sri Lanka Technology Campus, where I'm completing my Bachelor's in Information Technology. I am deeply enthusiastic about high-performance languages like Python, Rust, and the emerging Mojo, and I'm constantly exploring their potential to build scalable and efficient solutions. I thrive on applying my skills to solve real-world challenges and contribute to innovative backend projects.",
  email: 'mihirchakmaths@email.com',
  phone: '+1 (123) 456-7890',
  linkedin: 'https://linkedin.com/in/mihirchakma',
  github: 'https://github.com/mihirchakma',
  blog: 'https://medium.com/@mihirchakma',
};

export const SKILLS: Skill[] = [
  // FIX: Replaced non-existent 'Snake' icon with 'Code' icon as 'Snake' is not exported from 'lucide-react'.
  { name: 'Python', icon: Code },
  { name: 'Rust', icon: Cpu },
  { name: 'Mojo', icon: Flame },
  { name: 'Carbon', icon: Code },
  { name: 'Java', icon: Coffee },
  { name: 'TypeScript', icon: Code },
  { name: 'JavaScript', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'React', icon: Atom },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MySQL', icon: Database },
  { name: 'Docker', icon: Package },
  { name: 'Kubernetes', icon: ShipWheel },
  { name: 'GCP', icon: Cloud },
  { name: 'Git', icon: GitBranch },
  { name: 'Postman', icon: Rocket },
  { name: 'IntelliJ IDEA', icon: TerminalSquare },
  { name: 'PyCharm', icon: TerminalSquare },
  { name: 'VS Code', icon: TerminalSquare },
];

export const EDUCATION: Education[] = [
    {
        institution: 'Sri Lanka Technology Campus (SLTC)',
        degree: "Bachelor of Applied Information Technology",
        duration: '2023 - Present',
        location: 'Sri Lanka',
    },
    {
        institution: 'Esoft Metro Campus',
        degree: "Pearson BTEC HND in Computing (General)",
        duration: '2019 - 2021',
        location: 'Sri Lanka',
    },
];

export const PROJECTS: Project[] = [
  {
    title: 'Blog Platform REST API',
    description: 'Developed a secure and scalable RESTful API using Python with FastAPI, featuring JWT authentication, CRUD operations for posts, and a PostgreSQL database.',
    image: 'assets/blog-platform.svg',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Python', 'FastAPI', 'PostgreSQL', 'Docker'],
  },
  {
    title: 'High-Performance CLI Tool',
    description: 'Built a command-line interface (CLI) tool in Rust for efficiently parsing and processing large CSV datasets, leveraging Rust\'s performance and memory safety.',
    image: 'assets/real-time-analytics.svg',
    liveUrl: '#',
    repoUrl: '#',
    tags: ['Rust', 'CLI', 'Data Processing', 'Performance'],
  },
  {
    title: 'AI Inference Microservice',
    description: 'An experimental microservice exploring Mojo for high-speed AI model inference. This project investigates Mojo\'s potential to accelerate Python-based AI workflows.',
    image: 'assets/large-language-models.svg',
    repoUrl: '#',
    tags: ['Mojo', 'Python', 'AI', 'Microservice'],
  },
];

export const CONTACT_LINKS = [
    {
        name: 'Email',
        value: PERSONAL_INFO.email,
        href: `mailto:${PERSONAL_INFO.email}`,
        icon: Mail,
    },
    {
        name: 'LinkedIn',
        value: 'linkedin.com/in/mihirchakma',
        href: PERSONAL_INFO.linkedin,
        icon: Linkedin,
    },
    {
        name: 'GitHub',
        value: 'github.com/mihirchakma',
        href: PERSONAL_INFO.github,
        icon: Github,
    }
];