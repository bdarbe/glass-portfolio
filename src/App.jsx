import React from 'react';
import { motion } from 'framer-motion';

// ==================================================================================
// 🎨 PERSONAL CONFIGURATION
// Customize your portfolio by editing the data below.
// ==================================================================================

const CONFIG = {
  // Profile Information
  name: "Ben",
  role: "Creative Developer & UI Enthusiast",
  about: "I specialize in building high-quality, modern web applications. My focus is on creating smooth, interactive experiences that leave a lasting impression. I love exploring new technologies like Three.js and Framer Motion.",
  
  // Tech Stack (Add or Remove skills)
  skills: ['React', 'TypeScript', 'Tailwind', 'Node.js', 'Git', 'Framer Motion'],

  // Featured Projects
  projects: [
    { 
      title: "Glass Portfolio", 
      desc: "A modern portfolio site with glassmorphism effects and animations.", 
      tag: "Design" 
    },
    { 
      title: "E-Commerce Dashboard", 
      desc: "Real-time analytics dashboard for online stores.", 
      tag: "Fullstack" 
    },
    { 
      title: "Task Master", 
      desc: "Collaborative task management app with live updates.", 
      tag: "Productivity" 
    }
  ],

  // Social Links
  socials: [
    { name: "GitHub", url: "#" },
    { name: "LinkedIn", url: "#" },
    { name: "Twitter", url: "#" }
  ],
  
  // Footer Year
  year: 2026
};

// ==================================================================================
// 🚀 MAIN COMPONENT
// You generally don't need to touch this unless you want to change the layout.
// ==================================================================================

const App = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative overflow-hidden bg-gray-900 selection:bg-pink-500 selection:text-white">
       {/* Background Blobs */}
       <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-yellow-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '2s' }}></div>
          <div className="absolute -bottom-32 left-1/3 w-96 h-96 bg-pink-600 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" style={{ animationDelay: '4s' }}></div>
       </div>

       {/* Glass Card */}
       <motion.div 
         initial={{ opacity: 0, y: 50 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 1, ease: "easeOut" }}
         className="relative z-10 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl rounded-3xl p-8 md:p-12 max-w-5xl w-full mx-4 text-white overflow-hidden"
       >
          {/* Decorative shine */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>

          <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
             <div>
               <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 drop-shadow-sm">
                 {CONFIG.name}
               </h1>
               <p className="mt-2 text-xl text-gray-300 font-light tracking-wide">
                 {CONFIG.role}
               </p>
             </div>
             <motion.button 
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 transition backdrop-blur-md text-sm font-medium"
               onClick={() => window.location.href = `mailto:contact@${CONFIG.name.toLowerCase()}.com`}
             >
               Contact Me
             </motion.button>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* About Section */}
            <section className="md:col-span-1 space-y-4">
              <h2 className="text-2xl font-semibold text-pink-200">About</h2>
              <p className="text-gray-300 leading-relaxed text-sm">
                {CONFIG.about}
              </p>
              
              <div className="pt-4">
                 <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Tech Stack</h3>
                 <div className="flex flex-wrap gap-2">
                    {CONFIG.skills.map(tech => (
                      <span key={tech} className="px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 border border-white/5">
                        {tech}
                      </span>
                    ))}
                 </div>
              </div>
            </section>

            {/* Projects Section */}
            <section className="md:col-span-2">
               <h2 className="text-2xl font-semibold text-purple-200 mb-6">Featured Projects</h2>
               <div className="grid gap-4">
                  {CONFIG.projects.map((project, i) => (
                    <motion.div 
                      key={i}
                      whileHover={{ x: 10, backgroundColor: 'rgba(255,255,255,0.08)' }}
                      className="group p-4 rounded-xl bg-white/5 border border-white/5 cursor-pointer transition-colors"
                    >
                       <div className="flex justify-between items-start">
                         <h3 className="font-bold text-lg group-hover:text-pink-300 transition-colors">{project.title}</h3>
                         <span className="text-xs px-2 py-1 rounded bg-white/10 text-gray-300">{project.tag}</span>
                       </div>
                       <p className="text-gray-400 text-sm mt-2">{project.desc}</p>
                    </motion.div>
                  ))}
               </div>
            </section>
          </div>
          
          <footer className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
             <p>© {CONFIG.year} {CONFIG.name}. All rights reserved.</p>
             <div className="flex gap-6 mt-4 md:mt-0">
                {CONFIG.socials.map((link) => (
                  <a key={link.name} href={link.url} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                ))}
             </div>
          </footer>
       </motion.div>
    </div>
  );
};

export default App;
