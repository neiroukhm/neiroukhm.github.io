import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Terminal, Code, BookOpen, Moon, Sun, Download } from 'lucide-react';

const Portfolio = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-theme-600' : 'bg-white'}`}>
      {/* Hero Section */}
      <header className={`${darkMode ? 'bg-theme-500' : 'bg-theme-100'} shadow-sm`}>
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold mb-4 text-white">
            Your Name
          </h1>
          <p className="text-xl mb-6 text-white/90">
            Full Stack Engineer specializing in scalable web applications
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-white/80 hover:text-white">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/80 hover:text-white">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-white/80 hover:text-white">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12">
        {/* About Section */}
        <section className="mb-16">
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-theme-500'}`}>
            About Me
          </h2>
          <div className={`${darkMode ? 'bg-theme-500' : 'bg-white'} rounded-lg shadow-sm p-6 border border-theme-200/20`}>
            <p className={`mb-4 ${darkMode ? 'text-white/90' : 'text-theme-500'}`}>
              I'm a software engineer with expertise in building robust web applications. 
              I specialize in JavaScript/TypeScript ecosystems and have a strong foundation in 
              system design and cloud architecture.
            </p>
            <div className="flex flex-wrap gap-4 mt-6">
              <div className={`flex items-center gap-2 ${darkMode ? 'text-white/80' : 'text-theme-400'}`}>
                <Terminal className="w-5 h-5" />
                <span>Backend Development</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-white/80' : 'text-theme-400'}`}>
                <Code className="w-5 h-5" />
                <span>Frontend Engineering</span>
              </div>
              <div className={`flex items-center gap-2 ${darkMode ? 'text-white/80' : 'text-theme-400'}`}>
                <BookOpen className="w-5 h-5" />
                <span>Technical Writing</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16">
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-theme-500'}`}>
            Featured Projects
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[1,2,3].map((_, index) => (
              <div 
                key={index} 
                className={`${darkMode ? 'bg-theme-500' : 'bg-white'} rounded-lg shadow-sm p-6 border border-theme-200/20`}
              >
                <h3 className={`text-lg font-semibold mb-2 ${darkMode ? 'text-white' : 'text-theme-500'}`}>
                  Project Title
                </h3>
                <p className={`mb-4 ${darkMode ? 'text-white/80' : 'text-theme-400'}`}>
                  Project description goes here. Brief overview of what the project does and technologies used.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {['React', 'Node.js', 'TypeScript'].map((tag, tagIndex) => (
                    <span 
                      key={tagIndex} 
                      className={`px-3 py-1 rounded-full text-sm ${
                        darkMode ? 'bg-theme-400 text-white' : 'bg-theme-100/10 text-theme-500'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a 
                  href="#" 
                  className="flex items-center gap-2 text-theme-100 hover:text-theme-200"
                >
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : 'text-theme-500'}`}>
            Contact Me
          </h2>
          <div className={`${darkMode ? 'bg-theme-500' : 'bg-white'} rounded-lg shadow-sm p-6 border border-theme-200/20`}>
            <form className="space-y-4">
              <div>
                <label className={`block mb-2 ${darkMode ? 'text-white' : 'text-theme-500'}`}>Name</label>
                <input 
                  type="text" 
                  className={`w-full p-2 rounded border ${
                    darkMode ? 'bg-theme-400 border-theme-300 text-white' : 'bg-white border-theme-200'
                  }`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${darkMode ? 'text-white' : 'text-theme-500'}`}>Email</label>
                <input 
                  type="email" 
                  className={`w-full p-2 rounded border ${
                    darkMode ? 'bg-theme-400 border-theme-300 text-white' : 'bg-white border-theme-200'
                  }`}
                />
              </div>
              <div>
                <label className={`block mb-2 ${darkMode ? 'text-white' : 'text-theme-500'}`}>Message</label>
                <textarea 
                  className={`w-full p-2 rounded border ${
                    darkMode ? 'bg-theme-400 border-theme-300 text-white' : 'bg-white border-theme-200'
                  }`}
                  rows="4"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="bg-theme-100 text-white px-4 py-2 rounded hover:bg-theme-200 transition-colors duration-200"
              >
                Send Message
              </button>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Portfolio;