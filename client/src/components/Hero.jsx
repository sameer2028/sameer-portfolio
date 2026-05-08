import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function Hero() {
  return (
    <section 
      id="home" 
      // Main background ab light mode mein neutral-50 aur dark mode mein neutral-950 rahega
      className="min-h-screen flex flex-col pt-32 pb-20 justify-center items-center px-6 bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-white text-center relative overflow-hidden transition-colors duration-500"
    >
      {/* Subtle Background Glow - light mode mein thoda visible rahega */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyan-400/10 dark:bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none transition-colors duration-500" />

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 max-w-4xl"
      >
        <span className="text-cyan-600 dark:text-cyan-500 font-medium tracking-[0.25em] uppercase text-xs mb-8 block transition-colors duration-500">
          Gorakhpur, UP • Available for Work
        </span>

        {/* Name: Animated Typewriter Focal Point */}
        <h1 className="text-6xl md:text-7xl font-bold mb-10 tracking-tight min-h-[1.2em]">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 dark:from-cyan-400 dark:via-blue-500 dark:to-purple-600">
            <TypeAnimation
              sequence={[
                'Sameer Upadhyay',
                2000,
                'MERN Stack Developer',
                1000,
                'Problem Solver',
                1000,
                'Sameer Upadhyay',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={0}
              cursor={true}
            />
          </span>
        </h1>

        {/* Paragraph text updated for light mode (dark grey) aur dark mode (light grey) */}
        <div className="space-y-6 text-neutral-600 dark:text-neutral-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed transition-colors duration-500">
          <p>
            Computer Science student focused on full-stack web development, scalable applications, and creating seamless digital experiences using the <span className="text-neutral-900 dark:text-white font-bold transition-colors duration-500">MERN stack</span>.
          </p>
          <p>
            Driven by strong problem-solving skills in <span className="text-neutral-900 dark:text-white font-bold transition-colors duration-500">data structures & algorithms</span> and <span className="text-neutral-900 dark:text-white font-bold transition-colors duration-500">competitive programming</span>, I enjoy building efficient solutions that combine clean design with practical functionality.
          </p>
          <p className="text-neutral-500 dark:text-neutral-400 italic text-base transition-colors duration-500">
            "Bridging the gap between complex logic and seamless user experiences."
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14">
          <a 
            href="#portfolio" 
            className="w-full sm:w-auto px-10 py-4 bg-cyan-500 text-neutral-900 text-base font-bold rounded-2xl hover:bg-cyan-400 transition-all hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Explore My Work
          </a>
          {/* GitHub Button design light mode mein transparent white aur dark mein transparent black rahega */}
          <a 
            href="https://github.com/sameer2028" 
            target="_blank" 
            rel="noreferrer"
            className="w-full sm:w-auto px-10 py-4 border border-neutral-300 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/40 text-neutral-900 dark:text-white text-base font-bold rounded-2xl hover:border-neutral-400 dark:hover:border-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all"
          >
            Check GitHub
          </a>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-neutral-400 dark:text-neutral-700 transition-colors duration-500"
      >
        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}

export default Hero;