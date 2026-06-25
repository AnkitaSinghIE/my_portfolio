import React from 'react';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans p-8 md:p-20">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="text-4xl font-bold mb-2">Ankita Singh</h1>
          <p className="text-xl text-gray-600">Data Engineer & AI Enthusiast</p>
          <div className="flex gap-4 mt-4">
            <a href="https://www.linkedin.com/in/ankitasingh007/" className="hover:text-blue-600"><Linkedin /></a>
            <a href="https://github.com/AnkitaSinghIE" className="hover:text-gray-900"><Github /></a>
          </div>
        </header>

        {/* About */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-4">About</h2>
          <p className="text-gray-700 leading-relaxed">
            Data professional currently studying at VIT Bhopal. I specialize in building data pipelines, 
            analyzing complex datasets, and leveraging the Microsoft ecosystem (Power BI, SQL, Python) 
            to derive actionable insights. Passionate about AI integration and research.
          </p>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Selected Projects</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-lg">Autonomous Vehicle Safety Analysis</h3>
              <p className="text-gray-600 text-sm mt-1">Research project utilizing Random Forest Classifiers for liability determination and safety metrics.</p>
            </div>
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-lg">Data Engineering Pipeline</h3>
              <p className="text-gray-600 text-sm mt-1">End-to-end automation using SQL and Python to streamline data processing workflows.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Portfolio;
