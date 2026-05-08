import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col pt-32 pb-20 justify-center items-center px-6 bg-neutral-950 text-white text-center relative overflow-hidden"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-4xl"
      >
        <span className="text-cyan-500 font-medium tracking-[0.25em] uppercase text-xs mb-8 block">
          Gorakhpur, UP • Available for Work
        </span>

        {/* Name: Main Focal Point */}
        <h1 className="text-6xl md:text-7xl font-bold mb-10 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
            Sameer Upadhyay
          </span>
        </h1>

        <div className="space-y-6 text-neutral-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
          <p>
            Computer Science student focused on full-stack web development, scalable applications, and creating seamless digital experiences using the <span className="text-white font-bold">MERN stack</span>.
          </p>
          <p>
            Driven by strong problem-solving skills in <span className="text-white font-bold">data structures &  algorithms</span> and <span className="text-white font-bold">competitive programming</span>, I enjoy building efficient solutions that combine clean design with practical functionality.
          </p>
          <p className="text-neutral-400 italic text-base">
            "Bridging the gap between complex logic and seamless user experiences."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14">
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-10 py-4 bg-cyan-500 text-neutral-950 text-base font-bold rounded-2xl hover:bg-cyan-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Explore My Work
          </a>
          <a 
            href="https://github.com/sameer2028" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-10 py-4 border border-neutral-800 bg-neutral-900/40 text-white text-base font-bold rounded-2xl hover:border-neutral-700 transition-all hover:bg-neutral-900"
          >
            Check GitHub
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-700"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

export default Hero;