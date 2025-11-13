import React, { useState, useEffect } from 'react';
import { Mail, Zap, Compass, Shield, Rocket, ArrowRight } from 'lucide-react';

// Custom Colors (Tailwind needs config for these, but defining them here for clarity)
// Charcoal: #1A1A1A (Using neutral-900/950)
// Orange: #ff7b00 (Using a custom class)

const App = () => {
  // Simple state for the contact form
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Handle form input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission (Mocked as no backend is required for this assessment)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    setIsSubmitted(true);
    // In a real application, you would send this data to a server here.

    // Reset form state after a delay for visual feedback
    setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setIsSubmitted(false);
    }, 3000);
  };

  // --- Data for the Sections ---

  const capabilities = [
    { 
      icon: <Rocket className="w-8 h-8 text-[#ff7b00]" />, 
      title: "Precision Engineering", 
      description: "Harnessing aerospace-grade materials for zero-tolerance performance in extreme environments." 
    },
    { 
      icon: <Shield className="w-8 h-8 text-[#ff7b00]" />, 
      title: "Military-Grade Reliability", 
      description: "Redundant systems and hardened components ensure mission success under all operational stress." 
    },
    { 
      icon: <Compass className="w-8 h-8 text-[#ff7b00]" />, 
      title: "Advanced Autonomy", 
      description: "AI-driven flight control enables real-time decision-making and swarm capabilities without human intervention." 
    },
  ];

  const highlights = [
    "99.99% Operational Uptime in hostile airspace.",
    "Proprietary encrypted data link for ultimate security.",
    "Vertical Take-Off and Landing (VTOL) capability in under 15 seconds.",
  ];

  // --- Component Structure ---

  // Utility component for the main section container
  const Section = ({ id, children , className=""}) => (
    <section id={id} 
    className={`py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-800 ${className}`}
  >
      {children}
    </section>
  );

  return (
    // Set up the dark, modern, military/futuristic aesthetic
    <div className="min-h-screen bg-neutral-950 text-white font-['Inter',sans-serif]">
      {/* Header/Navigation - Fixed Top Bar */}
      <header className=" m-0 p-0 sticky top-0 z-50 bg-neutral-950/90 backdrop-blur-sm border-b border-neutral-800">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
          <div className="text-2xl font-extrabold tracking-widest text-white">
            VYOM<span className="text-[#ff7b00]">GARUD</span>
          </div>
          <a 
            href="#contact" 
            className="px-4 py-2 text-sm font-semibold rounded-lg bg-[#ff7b00] hover:bg-opacity-80 transition duration-300 shadow-lg"
          >
            Get in Touch
          </a>
        </nav>
      </header>

      {/* 1. Hero Section */}
      <Section id="hero"  className="m-0 p-0">
        <div className="flex flex-col md:flex-row items-center justify-between min-h-[70vh] gap-12">
          {/* Left: Text Content */}
          <div className="md:w-1/2">
            <p className="mt-0 text-[#ff7b00] uppercase font-semibold text-sm tracking-widest mb-3">
              Advanced Autonomy. Tactical Superiority.
            </p>
            <h1 className="mt-0 text-5xl sm:text-7xl font-extrabold leading-tight mb-6">
              The Future of <span className="text-[#ff7b00]">Unmanned</span> Systems.
            </h1>
            <p className="text-neutral-400 text-xl mb-10 max-w-lg">
              VyomGarud delivers next-generation UAV technology engineered for critical defense and surveillance missions.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#capabilities" 
                className="px-8 py-3 text-lg font-bold rounded-xl bg-[#ff7b00] hover:bg-opacity-80 transition duration-300 shadow-xl shadow-[#ff7b00]/30 flex items-center"
              >
                Explore Systems <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a 
                href="#contact" 
                className="px-8 py-3 text-lg font-semibold rounded-xl border border-neutral-600 text-neutral-300 hover:border-[#ff7b00] hover:text-[#ff7b00] transition duration-300"
              >
                Contact Sales
              </a>
            </div>
          </div>
          
          {/* Right: Bold Visual (Mock Drone Silhouette) */}
          <div className="md:w-1/2 flex justify-center items-center">
            {/* Using SVG for a clean, futuristic, dark visual */}
            <svg 
              className="w-full max-w-md md:max-w-lg lg:max-w-xl opacity-80" 
              viewBox="0 0 400 300" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient id="droneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: "rgba(255, 123, 0, 0.5)", stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: "rgba(26, 26, 26, 0.8)", stopOpacity: 1}} />
                </linearGradient>
              </defs>
              {/* Main body (simple geometric shape) */}
              <path d="M50 150 L350 150 L300 100 L100 100 Z" fill="url(#droneGradient)" stroke="#ff7b00" strokeWidth="2" />
              {/* Wings/Rotors - Left */}
              <rect x="0" y="140" width="80" height="20" rx="5" fill="rgba(255, 123, 0, 0.3)" />
              {/* Wings/Rotors - Right */}
              <rect x="320" y="140" width="80" height="20" rx="5" fill="rgba(255, 123, 0, 0.3)" />
              {/* Cockpit/Sensor area - glowing orange dot */}
              <circle cx="200" cy="125" r="5" fill="#ff7b00" className="animate-pulse" />
            </svg>
          </div>
        </div>
      </Section>

      {/* 2. About Section */}
      <Section id="about">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-4">
            Our Mission
          </h2>
          <div className="h-1 w-20 bg-[#ff7b00] mx-auto mb-8 rounded-full"></div>
          <p className="text-neutral-300 text-xl leading-relaxed">
            VyomGarud exists to provide unparalleled aerial intelligence and strike capability. We bridge the gap between human decision-making and machine precision, ensuring our clients maintain tactical superiority in complex, rapidly evolving security landscapes. Our commitment is to the highest standards of performance, security, and ethical deployment of autonomous technology.
          </p>
        </div>
      </Section>

      {/* 3. Capabilities / Products Section */}
      <Section id="capabilities">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
          Core Capabilities
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {capabilities.map((item, index) => (
            <div 
              key={index} 
              className="p-8 bg-neutral-900 border border-neutral-800 rounded-xl shadow-2xl hover:border-[#ff7b00] transition duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
              <p className="text-neutral-400">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Highlights Section (Feature Bullets) */}
      <Section id="highlights">
        <div className="bg-neutral-900 p-10 rounded-xl border border-neutral-800">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-10">
            Key System Advantages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start p-4 bg-neutral-800/50 rounded-lg">
                <Zap className="w-5 h-5 text-[#ff7b00] shrink-0 mt-1 mr-3 animate-pulse" />
                <p className="text-lg font-medium text-neutral-200">{highlight}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 5. Contact / Footer Section */}
      <Section id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Contact Form */}
          <div className="bg-neutral-900 p-8 md:p-12 rounded-xl shadow-2xl border border-neutral-800">
            <h2 className="text-3xl font-bold mb-6">Inquire About Systems</h2>
            {isSubmitted ? (
              <div className="text-center p-10 bg-green-900/50 text-green-300 rounded-lg">
                <Zap className="w-8 h-8 mx-auto mb-4" />
                <p className="text-xl font-semibold">Message Sent!</p>
                <p>We will be in touch shortly to discuss your mission requirements.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-[#ff7b00] outline-none text-white"
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email Address"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-[#ff7b00] outline-none text-white"
                />
                <textarea
                  name="message"
                  placeholder="Your Mission/Query"
                  rows="4"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-neutral-800 border border-neutral-700 focus:border-[#ff7b00] outline-none text-white resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full px-4 py-3 text-lg font-bold rounded-xl bg-[#ff7b00] hover:bg-opacity-80 transition duration-300 shadow-md shadow-[#ff7b00]/40"
                >
                  Send Tactical Inquiry
                </button>
              </form>
            )}
          </div>

          {/* Right: Footer Links and Info */}
          <div className="pt-8 lg:pt-0">
            <h3 className="text-2xl font-bold mb-4">VyomGarud Global</h3>
            <p className="text-neutral-400 mb-8">
              Headquartered in the Autonomous Systems Zone. Engineering excellence, deployed globally.
            </p>

            <div className="space-y-4">
              <p className="text-lg font-semibold text-white">Contact Direct</p>
              <div className="flex items-center space-x-3 text-neutral-300">
                <Mail className="w-5 h-5 text-[#ff7b00]" />
                <a href="mailto:info@vyomgarud.com" className="hover:text-[#ff7b00] transition duration-200">
                  info@vyomgarud.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-neutral-300">

                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ff7b00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.08 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                <p>+91 8881444693 (Guidance)</p>
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-neutral-800">
              <p className="text-neutral-500 text-sm">&copy; 2025 VyomGarud. All Rights Reserved. Precision First.</p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default App;