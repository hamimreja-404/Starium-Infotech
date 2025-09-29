import React, { useState } from 'react';
import {Sun, Moon} from 'lucide-react'

import { ServiceCard } from './ServiceCard/ServiceCard';
import servicesData from './Data/ServicesData';

// --- Main App Component (Services Page) ---
export default function ServicePage() {
  const [theme, setTheme] = useState('dark'); // 'dark' or 'light'

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const backgroundClass = theme === 'dark' ? 'bg-[#032032]' : 'bg-slate-100';
  const mainTextColor = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subTextColor = theme === 'dark' ? 'text-[#8a979e]' : 'text-gray-600';
  const highlightColor = theme === 'dark' ? 'text-[#25bc7b]' : 'text-teal-600';

  return (
    <>
      <div className={`min-h-screen font-sans p-4 sm:p-6 md:p-8  transition-colors duration-300 ${backgroundClass} ${mainTextColor}`}>
        <div className="max-w-7xl mx-auto">
          
          <div className="absolute top-4 right-4 z-10">
            <button 
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-[#25bc7b] text-[#032032]' : 'bg-gray-200 text-gray-800'}`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
            </button>
          </div>

          <header className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-2 animate-fade-in-down">
              Our Core <span className={highlightColor}>Services</span>
            </h1>
            <p className={`text-lg max-w-3xl mx-auto animate-fade-in-up animation-delay-300 ${subTextColor}`}>
              We provide innovative, tech-driven solutions to help businesses thrive in the digital age. Explore our offerings below.
            </p>
          </header>

          <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard 
                key={index}
                theme={theme}
                {...service}
                animationDelay={index * 100}
              />
            ))}
          </main>
        </div>
      </div>
    </>
  );
}
