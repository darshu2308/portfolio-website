'use client'

import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import Image from 'next/image'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)
  const heroTextRef = useRef(null)
  const heroImageRef = useRef(null)

  useEffect(() => {
    const stored = localStorage.getItem('theme')
    if (stored === 'dark') setDarkMode(true)
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', darkMode ? 'dark' : 'light')
  }, [darkMode])

  useEffect(() => {
    // Animate hero section
    gsap.from(heroTextRef.current, {
      x: -100,
      opacity: 0,
      duration: 1.4,
      ease: 'power3.out'
    })

    gsap.from(heroImageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1.4,
      ease: 'power3.out',
      delay: 0.3
    })
  }, [])

  return (
    <div className={`${darkMode ? 'dark bg-[#ffffff] text-[#1c1f26]' : 'bg-white text-[#1c1f26]'} transition duration-700 font-sans`}>

      {/* Navbar */}
      <header className='sticky top-0 z-50 bg-white/90 dark:bg-[#f9f9f9]/90 backdrop-blur shadow-sm border-b border-gray-200'>
        <div className='max-w-7xl mx-auto flex justify-between items-center px-6 py-4'>
          <h1 className='text-2xl font-bold tracking-tight text-black'>DARSHAN.DEV</h1>
          <nav className='hidden md:flex gap-6 font-medium text-sm'>
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map(id => (
              <a key={id} href={`#${id.toLowerCase()}`} className='hover:text-[#808000] transition'>
                {id}
              </a>
            ))}

          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-white py-24 px-4 md:px-16 flex flex-col md:flex-row items-center justify-between relative overflow-hidden">
        <div className="w-full md:w-1/2 space-y-6" ref={heroTextRef}>
          <p className="text-sm tracking-widest text-gray-500 uppercase">We Design & Build Brands</p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Hi, I am <span className="text-[#808000]">DARSHAN PATEL</span><br />
            I build <span className="text-[#111827]">responsive & modern websites.</span>
          </h1>
          <div className="flex gap-4 pt-4">
            <a href="#contact" className="bg-[#808000] text-white px-6 py-2 rounded-md shadow hover:opacity-90 transition">Hire me</a>
            <a href="/DARSHAN RESUME.pdf" download className="border border-gray-400 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-100 transition">Download CV</a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0" ref={heroImageRef}>
          <div className="w-72 h-72 rounded-full overflow-hidden shadow-lg border-4 border-gray-300">
            <Image
              src="/p1.png"
              alt="Ramesh Kannan"
              width={200}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-[#F5F5F5] text-[#1c1f26]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="space-y-4">
            <h3 className="text-sm uppercase text-[#808000] tracking-widest">My Introduction</h3>
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-md leading-relaxed">
              I am  , Darshan Patel, a frontend developer from Himmatnagr. I enjoy building responsive and user-friendly websites.
              Skilled in HTML, CSS, and JavaScript with hands-on project experience. Created e-commerce sites and personal portfolios.
              I am passionate about clean UI and mobile-first design. Looking to grow in a tech-driven team and learn more every day.
              <br /><br /><span className="italic text-[#6B7280]">“Design is intelligence made visible. Code brings it to life.”</span>
            </p>
            <ul className="text-sm space-y-1">
              <li><strong>Name:</strong> Darshan Patel</li>
              <li><strong>Date of Birth:</strong> August 23, 2007</li>
              <li><strong>Address:</strong> Himmatnagar, Gujarat, India</li>
              <li><strong>Zip Code:</strong> 383276</li>
              <li><strong>Email:</strong> darshupatel948@gmail.com</li>
              <li><strong>Phone:</strong> +91-6352674549</li>
            </ul>
            <div className="pt-4 flex flex-wrap gap-3">
              {["Music", "Travel", "Movie", "Sports"].map((tag, i) => (
                <span key={i} className="px-4 py-1 bg-gray-200 rounded-full text-sm font-medium text-gray-700">{tag}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Premium Icons */}
      <section id="skills" className="py-20 bg-[#F9FAFB] text-center px-6">
        <h2 className="text-4xl font-bold mb-12 text-[#1c1f26]">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {[
            { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
            { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
            { name: 'Tailwind CSS', icon: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' },
            { name: 'GSAP', icon: 'https://worldvectorlogo.com/logos/gsap-greensock.svg' },
            { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' }
          ].map((skill, i) => (
            <div key={i} className="bg-white hover:shadow-xl dark:bg-[#e5e7eb] p-6 rounded-2xl border border-gray-200 shadow transition-transform duration-300 hover:scale-105">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F3F4F6] flex items-center justify-center shadow-inner">
                <Image width={200}
                  height={200} src={skill.icon} alt={skill.name} className="h-10" />
              </div>
              <p className="font-semibold text-sm text-[#111827]">{skill.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-[#F9FAFB] text-[#1c1f26]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
          <div className="grid md:grid-cols-2 gap-10">

            {/* Project 1 */}
            <div className="group relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
              <Image
                src="/p2.png"
                width={200}
                height={200}
                alt="Trendy Threads"
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Trendy Threads</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Fashion website with virtual try-on, built using Next.js, Tailwind, GSAP.
                </p>
                <a href="https://github.com/darshu2308" target="_blank" rel="noopener noreferrer" className="text-[#808000] font-semibold underline">
                  View Code
                </a>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition">
              <Image
                src="/p3.png"
                alt="Tanmay Cetras"
                width={190}
                height={190}
                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">ImaginAi - AI IMAGE GENERATOR</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Online Image Generator Text Convert into Image Using API (Next.js + LocalStorage).
                </p>
                <a href="https://github.com/darshu2308" target="_blank" rel="noopener noreferrer" className="text-[#808000] font-semibold underline">
                  View Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-[#ffffff] text-[#1c1f26]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-10">

            {/* Internship */}
            <div className="relative pl-8 border-l-4 border-[#808000]">
              <div className="absolute -left-3 top-1.5 w-5 h-5 bg-[#808000] rounded-full animate-pulse"></div>
              <h3 className="text-xl font-bold">Frontend Developer Intern – Logic Cube EdHub</h3>
              <p className="text-sm text-gray-500 mb-2">Aug 2024 – Jan 2025 | Ahmedabad, India</p>
              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>Developed responsive frontend designs using Next.js and Tailwind CSS</li>
                <li>Implemented animations using GSAP for dynamic UI</li>
                <li>Collaborated with UI/UX team via Figma, GitHub & Agile workflows</li>
              </ul>
            </div>

          </div>
        </div>
      </section>


      {/* Contact Section - Premium & Animated */}
      <section id="contact" className="bg-white py-24 px-6 text-[#1c1f26] relative">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold tracking-tight mb-6">
            <span className="inline-block bg-gradient-to-r from-[#808000] to-[#6c6c00] text-transparent bg-clip-text">Connect With Me</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-12">Have a project in mind or just want to say hi? Fill out the form below and I'll get back to you as soon as possible.</p>

          <div className="bg-white border border-gray-200 shadow-xl rounded-xl p-8 md:p-10">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label className="text-sm font-medium text-gray-600">Your Name</label>
                  <input type="text" placeholder="Enter your name" className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#808000] outline-none transition" />
                </div>
                <div className="text-left">
                  <label className="text-sm font-medium text-gray-600">Your Email</label>
                  <input type="email" placeholder="Enter your email" className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#808000] outline-none transition" />
                </div>
              </div>

              <div className="text-left">
                <label className="text-sm font-medium text-gray-600">Your Message</label>
                <textarea rows="5" placeholder="Write your message here..." className="mt-1 w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-[#808000] outline-none transition"></textarea>
              </div>

              <div className="pt-4 text-center">
                <button type="submit" className="bg-[#808000] text-white font-semibold px-8 py-3 rounded-md shadow-md hover:shadow-lg hover:bg-[#6c6c00] transition duration-300">
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Premium Footer - Full Glassmorphic + Animated */}
      <footer className="relative bg-white overflow-hidden pt-20 text-[#1c1f26]">
        {/* Top Layered Accent Wave */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#808000] to-[#6c6c00] animate-pulse"></div>

        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-6 pb-16 grid grid-cols-1 md:grid-cols-3 gap-10 border-t border-gray-200">

          {/* Brand Info */}
          <div>
            <h3 className="text-2xl font-bold mb-2">Darshan.dev</h3>
            <p className="text-sm text-gray-600 mb-4">
              Creating elegant, interactive & high-performance websites.
            </p>
            <div className="flex gap-4 mt-4 text-lg">
              <a href="mailto:darshan@example.com" className="hover:text-[#808000] transition">📧</a>
              <a href="https://github.com/darshu2308" target="_blank" className="hover:text-[#808000] transition">💻</a>
              <a href="https://linkedin.com/in/darshan-patel" target="_blank" className="hover:text-[#808000] transition">🔗</a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="#home" className="hover:text-[#808000] transition">Home</a></li>
              <li><a href="#about" className="hover:text-[#808000] transition">About</a></li>
              <li><a href="#skills" className="hover:text-[#808000] transition">Skills</a></li>
              <li><a href="#projects" className="hover:text-[#808000] transition">Projects</a></li>
              <li><a href="#contact" className="hover:text-[#808000] transition">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3 text-lg">Get In Touch</h4>
            <p className="text-sm text-gray-600 mb-2">Email: darshupatel948@gmail.com</p>
            <p className="text-sm text-gray-600">Location: Himmatnagar, India</p>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="border-t border-gray-200 py-6 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Darshan Patel. Built with ❤️ using Next.js & Tailwind CSS.
        </div>
      </footer>

    </div>
  )
}
