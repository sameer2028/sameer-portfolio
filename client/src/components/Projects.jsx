import { motion } from 'framer-motion'

function Projects() {
  const projects = [
    {
      title: 'Rakshak AI Intelligence Grid',
      desc: 'An AI-powered digital public safety platform connecting citizens, law enforcement, banks, and telecom to proactively detect scams, unravel fraud rings using Graph ML, detect counterfeit currency via Computer Vision, and map crime hotspots.',
      tags: ['FastAPI', 'React', 'PyTorch', 'MongoDB', 'Graph ML', 'OpenCV'],
      emoji: '🛡️',
      github: 'https://github.com/sameer2028/rakshak-AI',
      live: 'https://rakshak-ai-peach.vercel.app/reviewer'
    },
    {
      title: 'Jan Samadhan',
      desc: 'An AI-powered public e-governance platform featuring FastAPI ML complaint routing, NLP sentiment & urgency detection, district heatmap analytics, and multi-agency RBAC dashboards.',
      tags: ['React', 'FastAPI', 'Node.js', 'MongoDB', 'Python', 'ML / NLP'],
      emoji: '🏛️',
      github: 'https://github.com/sameer2028/grievance-portal',
      live: 'https://jansamadhan-up.vercel.app/'
    },
    {
      title: 'QuickServe',
      desc: 'A full-stack restaurant pre-ordering and management ecosystem with real-time Socket.io order tracking, automated notification triggers, and interactive admin analytics.',
      tags: ['React 19', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS'],
      emoji: '🍔',
      github: 'https://github.com/sameer2028/quickserve',
      live: 'https://quickserve-ip3s.vercel.app/'
    },
    { 
      title: 'URL Shortening Service', 
      desc: 'A high-performance URL shortener built for system reliability. Features optimized database indexing and custom REST APIs for rapid, scalable data retrieval.', 
      tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose'], 
      emoji: '🔗', 
      github: 'https://github.com/sameer2028/url-shortner-mern',
      live: 'https://url-shortner-mern-zeta.vercel.app/' 
    },
   
    { 
      title: 'EMI Calculator', 
      desc: 'A dynamic financial utility tool that calculates Equated Monthly Installments for loans. Features real-time interest breakdowns and amortization schedules.', 
      tags: ['JavaScript', 'React', 'Tailwind CSS'], 
      emoji: '💳', 
      github: 'https://github.com/sameer2028/EMI-calculator',
      live: 'https://sameer2028.github.io/EMI-calculator/' 
    },
     { 
      title: 'Student Management System', 
      desc: 'A robust relational database application designed to securely manage, query, and update student academic records and institutional data.', 
      tags: ['Java', 'MySQL', 'JDBC'], 
      emoji: '🎓', 
      github: 'https://github.com/sameer2028/student-management-system/',
      live: 'https://github.com/sameer2028/student-management-system/' 
    },
    // { 
    //   title: 'Leetmetric', 
    //   desc: 'A tool to track and visualize LeetCode problem-solving statistics and progress over time.', 
    //   tags: ['JavaScript', 'API', 'Data Viz'], 
    //   emoji: '📊', 
    //   github: 'https://github.com/sameer2028/LeetMetric',
    //   live: 'https://sameer2028.github.io/LeetMetric/' 
    // },
    // { 
    //   title: 'Currency Converter', 
    //   desc: 'Real-time currency conversion app using live exchange rate APIs with a polished interface.', 
    //   tags: ['JavaScript', 'REST API', 'CSS'], 
    //   emoji: '💱', 
    //   github: 'https://github.com/sameer2028',
    //   live: '#' 
    // },
    // { 
    //   title: 'Calculator', 
    //   desc: 'A clean, functional calculator built with vanilla JavaScript featuring smooth UI interactions.', 
    //   tags: ['HTML', 'CSS', 'JS'], 
    //   emoji: '🧮', 
    //   github: 'https://github.com/sameer2028/Calculator',
    //   live: ' https://sameer2028.github.io/Calculator/' 
    // }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 } 
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
  }

  return (
    // Section ka tag App.jsx ke global styling par chalega, isliye koi color classes nahi hain
    <section id="portfolio" className="px-6 py-16">
      <div className="mx-auto max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4 border-b border-neutral-200 dark:border-neutral-800 pb-8 transition-colors duration-500">
          <div>
            <h2 className="text-4xl font-bold md:text-5xl mb-4 text-neutral-900 dark:text-white transition-colors duration-500">
              Selected <span className="text-cyan-500">Work</span>
            </h2>
            {/* Description Text Color Fixed */}
            <p className="text-neutral-600 dark:text-neutral-400 text-lg transition-colors duration-500">
              A collection of scalable backend systems and responsive web applications.
            </p>
          </div>
          <a 
            href="https://github.com/sameer2028" 
            target="_blank" 
            rel="noreferrer" 
            className="group flex items-center gap-2 text-sm font-semibold text-neutral-600 dark:text-neutral-400 hover:text-cyan-500 dark:hover:text-cyan-400 transition"
          >
            View GitHub Archive
            <span className="transform transition-transform group-hover:translate-x-1">→</span>
          </a>
        </div>

        {/* Projects Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((p, i) => (
            <motion.div
              variants={cardVariants}
              key={i}
              // CARD BACKGROUND & BORDER FIXED
              className="group flex flex-col justify-between rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-8 shadow-sm dark:shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/50 hover:shadow-md"
            >
              <div>
                {/* Emoji Box Fixed */}
                <div className="text-4xl mb-6 transform transition duration-300 group-hover:scale-110 group-hover:-rotate-6 w-fit bg-neutral-50 dark:bg-neutral-950 p-4 rounded-2xl border border-neutral-100 dark:border-neutral-800 shadow-inner">
                  {p.emoji}
                </div>
                {/* Card Title Fixed */}
                <h3 className="mb-3 text-2xl font-bold text-neutral-900 dark:text-neutral-100 transition-colors duration-500">
                  {p.title}
                </h3>
                {/* Card Description Text Fixed */}
                <p className="mb-8 text-neutral-600 dark:text-neutral-400 leading-relaxed text-sm transition-colors duration-500">
                  {p.desc}
                </p>
              </div>
              
              <div className="mt-auto">
                {/* Tech Stack Tags Fixed */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {p.tags.map(t => (
                    <span 
                      key={t} 
                      className="rounded-lg bg-neutral-50 dark:bg-neutral-950 border border-neutral-200 dark:border-neutral-800 px-3 py-1.5 text-xs font-semibold text-cyan-600 dark:text-cyan-500 shadow-sm transition-colors duration-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Buttons Fixed */}
                <div className="flex items-center gap-4 border-t border-neutral-100 dark:border-neutral-800/50 pt-6 transition-colors duration-500">
                  {/* Live Demo Button */}
                  <a 
                    href={p.live} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-3 text-sm font-bold text-white dark:text-neutral-950 hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-colors shadow-sm"
                  >
                    <span>Live Demo</span>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  
                  {/* GitHub Button Fixed */}
                  <a 
                    href={p.github} 
                    target="_blank" 
                    rel="noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-neutral-300 dark:border-neutral-700 bg-white dark:bg-neutral-900/50 px-4 py-3 text-sm font-bold text-neutral-700 dark:text-white hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors shadow-sm"
                  >
                    <span>GitHub</span>
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}

export default Projects