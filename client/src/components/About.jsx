// 1. Import your image here! 
// (Make sure the extension matches your actual file: .jpg, .png, etc.)
import profileImg from '../assets/profile.png';

function About() {
  const techStack = [
    "C++", "Java", "Data Structures", "Algorithms",
    "Node.js", "Express.js", "MongoDB", "MySQL",
    "React", "JavaScript", "Tailwind CSS", "Git"
  ];

  return (  
  <section id="about" className="px-6 py-5">

      <div className="mx-auto max-w-6xl w-full">
        <h2 className="mb-12 text-4xl font-bold md:text-5xl text-neutral-900 dark:text-white transition-colors duration-500">
          About <span className="text-cyan-500">Me</span>
        </h2>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* Photo Card - Fixed for Light/Dark Mode */}
          <div className="relative overflow-hidden rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 min-h-[300px] md:min-h-full group shadow-sm dark:shadow-none transition-colors duration-500">
            {/* The actual image */}
            <img 
              src={profileImg} 
              alt="Sameer Upadhyay" 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* A subtle gradient overlay adapting to themes */}
            <div className="absolute inset-0 bg-gradient-to-t from-transparent dark:from-neutral-950/80 via-transparent to-transparent transition-colors duration-500"></div>
          </div>

          {/* Bio Card - Fixed for Light/Dark Mode */}
          <div className="md:col-span-2 flex flex-col justify-between rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none duration-500">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-neutral-900 dark:text-white transition-colors duration-500">My Journey</h3>
              <div className="space-y-4 text-neutral-600 dark:text-neutral-400 leading-relaxed text-lg transition-colors duration-500">
                <p>
                  I'm a B.Tech Computer Science student at Madan Mohan Malaviya University of Technology. My core focus lies in engineering scalable backend systems, optimizing APIs, and building robust full-stack applications with the MERN stack.
                </p>
                <p>
                  I thrive on writing clean, efficient code and tackling complex logical challenges. Whether I'm designing database schemas in MySQL/MongoDB or debugging intricate system flows, I am always looking for ways to build more resilient software.
                </p>
              </div>
            </div>
            <a
              href="https://drive.google.com/file/d/1s3Ha-yN9rKkHG6bSyJpKbBow0gPvcS3k/view?usp=drive_link"
              target="_blank"
              rel="noreferrer"
              className="inline-flex mt-8 w-fit items-center justify-center rounded-full bg-cyan-500 px-8 py-3 text-sm font-bold text-white dark:text-neutral-950 hover:bg-cyan-600 dark:hover:bg-cyan-400 transition-all hover:scale-105 shadow-sm"
            >
              Download Resume
            </a>
          </div>

          {/* Education Card - Fixed for Light/Dark Mode */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-8 flex flex-col hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none duration-500">
            <div className="mb-6 text-cyan-600 dark:text-cyan-500 bg-cyan-500/10 w-fit p-3 rounded-2xl">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 transition-colors duration-500">Education</h3>
            <p className="font-medium text-cyan-600 dark:text-cyan-400 transition-colors">B.Tech (CSE)</p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6 transition-colors duration-500">Madan Mohan Malaviya University of Technology, Gorakhpur</p>
            <div className="mt-auto flex justify-between items-end border-t border-neutral-200 dark:border-neutral-800 pt-5 transition-colors duration-500">
              <span className="text-xs uppercase tracking-widest text-neutral-500">Current CGPA</span>
              <span className="text-2xl font-black text-neutral-900 dark:text-white transition-colors duration-500">8.95</span>
            </div>
          </div>

          {/* Problem Solving Card - Fixed for Light/Dark Mode */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex flex-col shadow-sm dark:shadow-none duration-500">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 transition-colors duration-500">Problem Solving</h3>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-6 leading-relaxed transition-colors duration-500">
              Active competitor on platforms like LeetCode, GeeksforGeeks, Codeforces & CodeChef, focusing heavily on algorithms and core data structures.
            </p>
            <div className="mt-auto flex items-baseline gap-2 border-t border-neutral-200 dark:border-neutral-800 pt-5 transition-colors duration-500">
              <span className="text-5xl font-black text-cyan-600 dark:text-cyan-500 transition-colors">600<span className="text-3xl">+</span></span>
              <span className="text-xs uppercase tracking-widest text-neutral-500">Solved</span>
            </div>
          </div>

          {/* Tech Stack Card - Fixed for Light/Dark Mode */}
          <div className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-8 hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors shadow-sm dark:shadow-none duration-500">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-6 transition-colors duration-500">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {techStack.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-950 text-xs font-medium text-neutral-700 dark:text-neutral-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400 dark:hover:border-cyan-500/50 transition-colors cursor-default shadow-sm dark:shadow-inner"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;