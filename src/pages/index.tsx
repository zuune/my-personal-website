import { useState } from 'react';
import { Geist, Geist_Mono } from 'next/font/google';
import GooeyNav from '@/components/GooeyNav/GooeyNav';
import SplitText from '@/components/SplitText/SplitText';
import Waves from '@/components/Waves/Waves';
import SplashCursor from '@/components/SplashCursor/SplashCursor';
import AboutSection from '@/components/About';

// Inisialisasi font Geist
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// Komponen untuk tombol CTA
function CTAButtons() {
  return (
    <div className="flex justify-center space-x-6 mt-8">
      <a
        href="#projects"
        className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
      >
        View My Work
      </a>
      <a
        href="#contact"
        className="px-8 py-3 border-2 border-blue-600 text-white rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
      >
        Contact Me
      </a>
    </div>
  );
}

// Komponen untuk ikon media sosial
function SocialLinks() {
  return (
    <div className="mt-6 flex justify-center space-x-6">
      <a href="https://github.com/yosuahercules" target="_blank" rel="noopener noreferrer">
        <svg className="w-6 h-6 text-white hover:text-blue-400 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.49.5.09.68-.22.68-.48v-1.69c-2.78.6-3.36-1.34-3.36-1.34-.46-1.16-1.12-1.47-1.12-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.56 9.56 0 0112 6.8c.85.004 1.71.11 2.52.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
        </svg>
      </a>
      <a href="https://linkedin.com/in/yosuahercules" target="_blank" rel="noopener noreferrer">
        <svg className="w-6 h-6 text-white hover:text-blue-400 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-1 2H6v14h12V5zm-9.5 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM7 14h2v4H7v-4zm4-1.5c0-.83.67-1.5 1.5-1.5.44 0 .85.19 1.13.5.28.31.47.71.56 1.15.09.44.06.89-.03 1.35H11v-4zm3.5 1.5h2v4h-2v-4z" />
        </svg>
      </a>
    </div>
  );
}

// Projects Section
function ProjectsSection() {
  // Sample project data
  const projects = [
    {
      title: "Personal Portfolio",
      description: "A responsive portfolio website built with Next.js and Tailwind CSS featuring interactive animations and a clean, modern design.",
      technologies: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured online store with product catalog, shopping cart, user authentication, and payment processing.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, task assignment, and progress tracking.",
      technologies: ["Next.js", "Firebase", "Tailwind CSS", "React DnD"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SplitText
            text="My Projects"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            delay={20}
            animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
            animationTo={{ opacity: 1, transform: 'translateY(0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and solution.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

// Project Card Component
function ProjectCard({ title, description, technologies, image, link }) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 border border-gray-700 shadow-lg">
      <div className="h-48 bg-gray-700 relative overflow-hidden">
        {/* Project image or placeholder */}
        <div className="absolute inset-0 flex items-center justify-center text-gray-500 text-lg">
          {image || title}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 h-24 overflow-hidden">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span key={tech} className="px-2 py-1 bg-blue-600 bg-opacity-20 text-blue-300 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

// Contact Section
function ContactSection() {
  return (
    <section id="contact" className="min-h-screen py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <SplitText
            text="Get In Touch"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
            delay={20}
            animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
            animationTo={{ opacity: 1, transform: 'translateY(0)' }}
            easing="easeOutCubic"
            threshold={0.2}
            rootMargin="-50px"
          />
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>
        
        <div className="bg-gray-800 bg-opacity-70 rounded-2xl p-6 md:p-8 backdrop-filter backdrop-blur-sm border border-gray-700 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">Subject</label>
              <input
                type="text"
                id="subject"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="What is this regarding?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                rows="5"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg py-3 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                className="px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
          
          <div className="mt-12 pt-8 border-t border-gray-700">
            <h3 className="text-xl font-semibold text-white text-center mb-6">Or reach me via:</h3>
            
            <div className="flex justify-center space-x-8">
              <a href="mailto:contact@yosuahercules.com" className="flex items-center text-gray-300 hover:text-blue-400 transition duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span>contact@yosuahercules.com</span>
              </a>
              
              <a href="https://linkedin.com/in/yosuahercules" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition duration-300">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zm-1 2H6v14h12V5zm-9.5 3.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3zM7 14h2v4H7v-4zm4-1.5c0-.83.67-1.5 1.5-1.5.44 0 .85.19 1.13.5.28.31.47.71.56 1.15.09.44.06.89-.03 1.35H11v-4zm3.5 1.5h2v4h-2v-4z" />
                </svg>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  // Data untuk navigasi
  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  // State untuk mengontrol animasi teks kedua
  const [showSecondLine, setShowSecondLine] = useState(false);

  // Handler untuk menampilkan teks kedua setelah animasi pertama selesai
  const handleAnimationComplete = () => {
    setShowSecondLine(true);
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} bg-gray-900 min-h-screen relative overflow-x-hidden`}
    >
      {/* Latar belakang animasi gelombang dengan intensitas rendah - applying to whole page */}
      <Waves
        lineColor="#d1d5db"
        backgroundColor="rgba(0, 0, 0, 0.1)"
        waveSpeedX={0.005}
        waveSpeedY={0.002}
        waveAmpX={10}
        waveAmpY={5}
        friction={0.98}
        tension={0.03}
        maxCursorMove={50}
        xGap={20}
        yGap={40}
      />

      {/* Efek kursor minimalis - applying to whole page */}
      <SplashCursor intensity={0.3} size={15} />

      {/* Navigasi header yang dipusatkan */}
      {/* <header className="fixed top-0 left-0 w-full z-20 flex justify-center py-4">
        <GooeyNav
          items={navItems}
          particleCount={6}
          particleDistances={[60, 6]}
          particleR={60}
          initialActiveIndex={0}
          animationTime={300}
          timeVariance={100}
          colors={[1, 2, 3]}
        />
      </header> */}

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center p-4 sm:p-6 relative">
        <div className="text-center z-10 max-w-4xl mx-auto">
          <div>
            <SplitText
              text="Hello, I am Yosua Hercules"
              className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6"
              delay={20}
              animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
              animationTo={{ opacity: 1, transform: 'translateY(0)' }}
              easing="easeOutCubic"
              threshold={0.2}
              rootMargin="-50px"
              onLetterAnimationComplete={handleAnimationComplete}
            />
          </div>
          <div className="mt-8">
            {showSecondLine && (
              <SplitText
                text="A Fullstack Web Developer!"
                className="text-lg sm:text-xl md:text-2xl font-semibold text-blue-400"
                delay={25}
                animationFrom={{ opacity: 0, transform: 'translateY(20px)' }}
                animationTo={{ opacity: 1, transform: 'translateY(0)' }}
                easing="easeOutCubic"
                threshold={0.2}
                rootMargin="-50px"
              />
            )}
          </div>

          {/* Tombol CTA */}
          <CTAButtons />

          {/* Ikon media sosial */}
          <SocialLinks />
        </div>
      </section>

      {/* About Section - separate section with its own height */}
      <section id="about" className="min-h-screen relative">
        <AboutSection />
      </section>

      {/* Projects Section */}
      <ProjectsSection />
      
      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 py-8 border-t border-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Yosua Hercules. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with Next.js & Tailwind CSS</p>
        </div>
      </footer>
    </div>
  );
}