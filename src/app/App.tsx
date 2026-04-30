import profileImage from "@/assets/profile.png";
import velvetRiotImage from "@/assets/velvetriot.png";
import studentSystemImage from '@/assets/StudentSystem.png';
import sanPabloImage from '@/assets/SPSWebsite.png';
import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { 
  Facebook,
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight, 
  ExternalLink, 
  Menu, 
  X, 
  Moon, 
  Sun,
  Code2,
  Database,
  Wrench,
  Terminal,
  MonitorSmartphone,
  Server
} from 'lucide-react';

import { ImageWithFallback } from './components/figma/ImageWithFallback';

// --- UI COMPONENTS ---

const Button = ({ children, variant = 'primary', className = '', ...props }: any) => {
  const baseStyle = "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black dark:focus:ring-white focus:ring-offset-white dark:focus:ring-offset-black";
  
  const variants = {
    primary: "bg-black text-white hover:bg-black/80 hover:-translate-y-1 dark:bg-white dark:text-black dark:hover:bg-gray-200",
    secondary: "bg-transparent text-black border border-black hover:bg-black hover:text-white hover:-translate-y-1 dark:text-white dark:border-white dark:hover:bg-white dark:hover:text-black",
  };

  return (
    <button className={`${baseStyle} ${variants[variant as keyof typeof variants]} ${className}`} {...props}>
      {children}
    </button>
  );
};

const SectionHeading = ({ title, subtitle }: { title: string, subtitle?: string }) => (
  <div className="mb-12 md:mb-20">
    <motion.h2 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-3xl md:text-5xl font-bold tracking-tight mb-4"
    >
      {title}
    </motion.h2>
    {subtitle && (
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg"
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

// --- SECTIONS ---

const Navbar = ({ darkMode, setDarkMode }: { darkMode: boolean, setDarkMode: (v: boolean) => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800 py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 md:px-12 max-w-7xl flex items-center justify-between">
        <a href="#" className="text-xl font-bold tracking-tighter uppercase">
          BERNSTAIN<span className="text-gray-400">.</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-medium text-gray-600 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          <div className="w-px h-4 bg-gray-300 dark:bg-gray-700" />
          <button 
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Toggle Dark Mode"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <Button variant="primary" className="!py-2 !px-4 !text-xs" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Contact Me
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button onClick={() => setDarkMode(!darkMode)} className="p-2">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="p-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white dark:bg-[#050505] border-b border-gray-200 dark:border-gray-800 p-6 flex flex-col gap-4 md:hidden">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium py-2 border-b border-gray-100 dark:border-gray-900"
            >
              {link.name}
            </a>
          ))}
          <Button variant="primary" className="mt-4 w-full" onClick={() => { setMobileMenuOpen(false); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Contact Me
          </Button>
        </div>
      )}
    </header>
  );
};

const Hero = () => {
  return (
    <section className="pt-40 pb-20 md:pt-52 md:pb-32 min-h-screen flex items-center">
      <div className="w-full flex flex-col items-center justify-center text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 dark:border-gray-800 text-xs font-mono mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for work
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.1]">
            Bernstain <span className="text-gray-400 dark:text-gray-500">Fangon.</span>
          </h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-lg mt-8"
        >
          IT Student & Developer. I build accessible, responsive, and minimalist digital experiences. Focused on clean code and robust architecture.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <Button variant="primary" onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}>
            View Projects <ArrowRight size={18} />
          </Button>
          <Button variant="secondary" onClick={() => window.open('https://github.com', '_blank')}>
            <Github size={18} /> GitHub
          </Button>
        </motion.div>
      </div>
    </section>
  );
};


const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <section id="about" className="py-20 md:py-32 border-t border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5">
          <SectionHeading title="About Me." />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-8 relative aspect-square max-w-sm rounded-2xl overflow-hidden bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 group"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => { setIsHovering(false); setMousePosition({ x: 0, y: 0 }); }}
            onMouseMove={handleMouseMove}
          >
            <motion.div
              animate={{ 
                x: isHovering ? mousePosition.x * -20 : 0, 
                y: isHovering ? mousePosition.y * -20 : 0,
                scale: isHovering ? 1.1 : 1
              }}
              transition={{ type: "spring", stiffness: 150, damping: 20 }}
              className="w-full h-full"
            >
              <ImageWithFallback 
                src={profileImage} 
                alt="Bernstain Fangon" 
                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
          </motion.div>
        </div>
        <div className="lg:col-span-7">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="prose dark:prose-invert max-w-none text-lg text-gray-600 dark:text-gray-400 space-y-6"
          >
            <p>
              Hello! I'm Bernstain Fangon, an IT student and aspiring software developer with a strong passion for building web applications that are both beautiful and functionally robust. I believe in the power of minimalism—cutting through the noise to deliver clear, accessible user experiences.
            </p>
            <p>
              Currently, my focus is on modern frontend frameworks like React and Next.js, alongside backend technologies such as Node.js and PostgreSQL. I enjoy bridging the gap between design and engineering, ensuring that every pixel serves a purpose.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 mt-8 border-t border-gray-200 dark:border-gray-800">
              <div>
                <h4 className="text-4xl font-bold text-black dark:text-white mb-2">2</h4>
                <p className="text-sm uppercase tracking-wider font-semibold">Years Coding</p>
              </div>
              <div>
                <h4 className="text-4xl font-bold text-black dark:text-white mb-2">11</h4>
                <p className="text-sm uppercase tracking-wider font-semibold">Projects</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group flex flex-col rounded-2xl border border-gray-200 dark:border-gray-800 overflow-hidden bg-white dark:bg-[#0a0a0a] hover:border-black dark:hover:border-white transition-colors duration-300"
    >
      <div 
        className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => { setIsHovering(false); setMousePosition({ x: 0, y: 0 }); }}
        onMouseMove={handleMouseMove}
      >
        <motion.div
          animate={{ 
            x: isHovering ? mousePosition.x * -20 : 0, 
            y: isHovering ? mousePosition.y * -20 : 0,
            scale: isHovering ? 1.1 : 1
          }}
          transition={{ type: "spring", stiffness: 150, damping: 20 }}
          className="w-full h-full"
        >
          <ImageWithFallback 
            src={project.image} 
            alt={project.title} 
            className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/10 dark:bg-black/40 group-hover:bg-transparent transition-colors duration-500 pointer-events-none" />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold mb-2 group-hover:underline decoration-2 underline-offset-4">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag: string) => (
            <span key={tag} className="text-xs font-mono px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.link && (
            <a href={project.link} className="inline-flex items-center gap-1 text-sm font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          <a href={project.github} className="inline-flex items-center gap-1 text-sm font-semibold hover:text-gray-600 dark:hover:text-gray-300 transition-colors">
            Code <Github size={14} />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Velvet Riot Pro",
      description: "A Web Based game that uses HTML5, CSS3, and JavaScript to create an immersive experience. Players navigate through a series of challenges, utilizing their problem-solving skills and quick reflexes to progress through the game. This also the entry project for the 2024 Game Jam organized by Github and Itch.io.",
      image: velvetRiotImage,
      tags: ["HTML5", "CS3", "JavaScript", "Phaser Framework"],
      github: "https://github.com/fangonbernstain566-collab/Velvet-Riot-Pro.git"
    },
    {
      title: "Polytechnic College of La Union Student Information System",
      description: "A comprehensive student information system for managing academic records, grades, and student details.",
      image: studentSystemImage,
      tags: ["PHP", "PostgreSQL", "CSS", "JavaScript"],
      github: "https://github.com/fangonbernstain566-collab/student-system-v2-SIS.git"
    },
    {
      title: "San Pablo Seminary Baguio City Website",
      description: "A modern, responsive website for San Pablo Seminary in Baguio City, showcasing their programs, events, and community initiatives. It is a comission work for the seminary to help them establish an online presence and provide information to prospective students and the community.",
      image: sanPabloImage,
      tags: ["HTML5", "CSS3", "JavaScript", "Vercel"],
      link: "https://san-pablo-seminary-website.vercel.app/",
      github: "https://github.com/fangonbernstain566-collab/San-Pablo-Seminary-Website.git"
    },
    
  ];

  return (
    <section id="projects" className="py-20 md:py-32 border-t border-gray-200 dark:border-gray-800">
      <SectionHeading 
        title="Selected Work." 
        subtitle="A collection of recent projects exploring clean design and scalable architecture." 
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

const Skills = () => {
  const categories = [
    {
      title: "Frontend",
      icon: <MonitorSmartphone className="mb-4" size={32} strokeWidth={1.5} />,
      skills: ["HTML5", "TailWind CSS", "JavaScript","TypeScript"]
    },
    {
      title: "Backend",
      icon: <Server className="mb-4" size={32} strokeWidth={1.5} />,
      skills: ["Node.js", "PHP", "PostgreSQL", "MySQL"]
    },
    {
      title: "Tools & Other",
      icon: <Wrench className="mb-4" size={32} strokeWidth={1.5} />,
      skills: ["Git & GitHub", "Docker", "Figma", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-20 md:py-32 border-t border-gray-200 dark:border-gray-800">
      <SectionHeading title="Technical Arsenal." />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="p-8 rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 hover:bg-white dark:hover:bg-[#0a0a0a] transition-colors"
          >
            {category.icon}
            <h3 className="text-xl font-bold mb-6">{category.title}</h3>
            <ul className="space-y-3">
              {category.skills.map(skill => (
                <li key={skill} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                  <span className="w-1.5 h-1.5 bg-black dark:bg-white rounded-full" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const Experience = () => {
  const experiences = [
    {
      role: "Junior Layout Artist and Tech Support",
      company: "ACDC Cuts and Prints",
      date: "Past",
      description: "Assisted with print layouts, prepared production files, and provided technical support for daily operations."
    },
    {
      role: "Part-Time Tech Support and Editor",
      company: "Pugad Adventure, Pugo, La Union",
      date: "Current",
      description: "Handled technical support tasks and edited photos and videos for promotional content and social media."
    },
    {
      role: "3rd Year BS in Information Technology",
      company: "Current Student",
      date: "Current",
      description: "Studying System Development, databases, networking, and modern web technologies."
    },
    
  ];

  return (
    <section id="experience" className="py-20 md:py-32 border-t border-gray-200 dark:border-gray-800">
      <SectionHeading title="Experience & Education." />
      
      <div className="max-w-3xl mx-auto">
        <div className="relative border-l border-gray-200 dark:border-gray-800 ml-4 md:ml-0 md:pl-8 space-y-12">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="relative pl-8 md:pl-0"
            >
              <div className="absolute w-3 h-3 bg-white dark:bg-black border-2 border-black dark:border-white rounded-full -left-[6.5px] md:-left-[38px] top-1.5" />
              <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-sm font-mono text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{exp.date}</span>
              </div>
              <h4 className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-4">{exp.company}</h4>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {exp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  useEffect(() => {
    emailjs.init('quY2gria2eJ02P36A'); // Replace with your EmailJS public key
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await emailjs.send('service_u7tzs57', 'template_t00hs4r', {
        to_email: 'fangobernstain566@gmail.com',
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      });
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(''), 3000);
    } catch (error) {
      setStatus('Failed to send message. Please try again.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 border-t border-gray-200 dark:border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <SectionHeading 
            title="Let's Connect." 
            subtitle="I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!" 
          />
          <div className="space-y-6">
            <a href="mailto:fangobernstain566@gmail.com" className="flex items-center gap-4 text-lg hover:underline underline-offset-4">
              <Mail className="text-gray-400" /> Gmail
            </a>
          
          <a href="https://github.com/fangonbernstain566-collab" className="flex items-center gap-4 text-lg hover:underline underline-offset-4">
              <Github className="text-gray-400" /> GitHub Profile
            </a>

            <a href="https://www.facebook.com/bernstain.fangon.2025" className="flex items-center gap-4 text-lg hover:underline underline-offset-4">
              <Facebook className="text-gray-400" /> Facebook Profile
            </a>
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gray-50 dark:bg-[#0a0a0a] border border-gray-200 dark:border-gray-800 rounded-2xl p-8"
        >
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="John Doe"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                placeholder="john@example.com"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
              <textarea 
                id="message" 
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-black dark:focus:border-white transition-colors resize-none"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>
            {status && (
              <p className={`text-sm font-medium ${status.includes('success') ? 'text-green-600' : 'text-red-600'}`}>
                {status}
              </p>
            )}
            <Button variant="primary" className="w-full" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

const LoadingScreen = ({ isVisible, isSuccessVisible }: { isVisible: boolean, isSuccessVisible: boolean }) => (
  <motion.div
    initial={{ opacity: 1 }}
    animate={{ opacity: isVisible || isSuccessVisible ? 1 : 0 }}
    transition={{ duration: 0.5 }}
    className={`fixed inset-0 bg-white dark:bg-[#020202] z-50 flex items-center justify-center ${!isVisible && !isSuccessVisible && 'pointer-events-none'}`}
  >
    <div className="flex flex-col items-center justify-center gap-6">
      {isVisible ? (
        <>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="w-12 h-12 border-2 border-gray-300 dark:border-gray-700 border-t-black dark:border-t-white rounded-full"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm font-mono text-gray-600 dark:text-gray-400"
          >
            Loading<motion.span animate={{ opacity: [0, 1, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>.</motion.span>
          </motion.p>
        </>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-center justify-center gap-6"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5 }}
            className="w-16 h-16 rounded-full bg-green-500 flex items-center justify-center"
          >
            <motion.svg
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.6 }}
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </motion.svg>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg font-semibold text-black dark:text-white"
          >
            Loading Successful
          </motion.p>
        </motion.div>
      )}
    </div>
  </motion.div>
);

const Footer = () => (
  <footer className="py-8 border-t border-gray-200 dark:border-gray-800">
    <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
      <div>
        <p className="text-sm text-gray-500 font-mono">
          © {new Date().getFullYear()} Bernstain Fangon. All rights reserved.
        </p>
        <p className="text-sm text-gray-500 font-mono">
          Powered by Vercel, built with React and Tailwind CSS.
        </p>
      </div>

      <div className="flex gap-4">
        <a href="https://github.com/fangonbernstain566-collab" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
          <Github size={20} />
        </a>
        <a href="https://www.facebook.com/bernstain.fangon" className="text-gray-500 hover:text-black dark:hover:text-white transition-colors">
          <Facebook size={20} />
        </a>
      </div>
    </div>
  </footer>
);

// --- MAIN APP ---

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccessVisible, setIsSuccessVisible] = useState(false);

  useEffect(() => {
    document.documentElement.classList.add('scroll-smooth');
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setIsLoading(false);
      setIsSuccessVisible(true);
    }, 2000);

    const successTimer = setTimeout(() => {
      setIsSuccessVisible(false);
    }, 3500);

    return () => {
      clearTimeout(loadingTimer);
      clearTimeout(successTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-[#020202] text-black dark:text-white transition-colors duration-300 font-sans selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black">
      <LoadingScreen isVisible={isLoading} isSuccessVisible={isSuccessVisible} />
      
      {/* Subtle Dotted Background Pattern */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-40 dark:opacity-20 transition-opacity duration-300"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          color: darkMode ? '#ffffff' : '#000000'
        }}
      />
      
      {/* Content wrapper */}
      <div className="relative z-10">
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <main className="container mx-auto px-6 md:px-12 max-w-7xl">
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
