import React from 'react'

function Profiles() {
  const codingProfiles = [
    { 
      name: 'GitHub', 
      username: 'sameer2028',
      desc: 'Open source projects & portfolio code',
      url: 'https://github.com/sameer2028', 
      hoverColor: 'group-hover:border-neutral-900 dark:group-hover:border-white group-hover:shadow-[0_0_15px_rgba(0,0,0,0.1)] dark:group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 mb-6 text-neutral-400 dark:text-neutral-500 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      )
    },
    { 
      name: 'LeetCode', 
      username: 'sameer_2028',
      desc: '250+ Data Structures & Algorithms solved',
      url: 'https://leetcode.com/sameer_2028', 
      hoverColor: 'group-hover:border-yellow-500 group-hover:shadow-[0_0_15px_rgba(234,179,8,0.1)]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 mb-6 text-neutral-400 dark:text-neutral-500 group-hover:text-yellow-500 transition-colors duration-300">
          <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s1.357.195 1.823.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.415-1.267V3.808c0-.753-.563-1.34-1.339-1.34-.736 0-1.339.587-1.339 1.34v2.905a5.055 5.055 0 0 0-2.415 1.267l-4.319 4.38c-.97.97-1.46 2.256-1.46 3.543s.49 2.573 1.46 3.543l4.332 4.363c.97.97 2.256 1.455 3.543 1.455s2.573-.485 3.543-1.455l2.697-2.607c.514-.514.496-1.365-.039-1.9-.535-.535-1.386-.553-1.9-.039zM20.811 13.01H10.666c-.702 0-1.27.604-1.27 1.34s.568 1.34 1.27 1.34h10.145c.701 0 1.27-.604 1.27-1.34s-.569-1.34-1.27-1.34z"/>
        </svg>
      )
    },
    { 
      name: 'Codeforces', 
      username: 'sameer2028',
      desc: 'Competitive programming & contest ratings',
      url: 'https://codeforces.com/profile/sameer2028', 
      hoverColor: 'group-hover:border-blue-500 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.1)]',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-9 h-9 mb-6 text-neutral-400 dark:text-neutral-500 group-hover:text-blue-500 transition-colors duration-300">
          <path d="M4.5 7.5C5.328 7.5 6 8.172 6 9v10.5c0 .828-.672 1.5-1.5 1.5h-3C.672 21 0 20.328 0 19.5V9c0-.828.672-1.5 1.5-1.5h3zm9-4.5c.828 0 1.5.672 1.5 1.5v15c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5v-15c0-.828.672-1.5 1.5-1.5h3zm9 7.5c.828 0 1.5.672 1.5 1.5v7.5c0 .828-.672 1.5-1.5 1.5h-3c-.828 0-1.5-.672-1.5-1.5V12c0-.828.672-1.5 1.5-1.5h3z"/>
        </svg>
      )
    },
    { 
      name: 'CodeChef', 
      username: 'sameer_2028',
      desc: 'Advanced problem solving & logic building',
      url: 'https://www.codechef.com/users/sameer_2028', 
      hoverColor: 'group-hover:border-amber-600 group-hover:shadow-[0_0_15px_rgba(217,119,6,0.1)]',
      icon: (
        <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 mb-6 text-neutral-400 dark:text-neutral-500 group-hover:text-amber-600 transition-colors duration-300">
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
        </svg>
      )
    }
  ];

  return (
    // Section inherited App.jsx colors, no classes needed here
    <section id="profiles" className="px-6 py-24 flex items-center min-h-[80vh]">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* Header Title & Description updated for Light/Dark mode */}
        <div className="mb-12">
          <h2 className="mb-4 text-4xl font-bold md:text-5xl text-neutral-900 dark:text-white transition-colors duration-500">
            My <span className="text-cyan-500">Profiles</span>
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 text-lg transition-colors duration-500">Where I code, compete, and connect.</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {codingProfiles.map((profile, index) => (
            <a 
              key={index}
              href={profile.url}
              target="_blank"
              rel="noreferrer"
              // Profile Card Box updated for Light/Dark mode
              className={`group flex flex-col justify-between rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/40 p-8 transition-all duration-300 hover:-translate-y-2 shadow-sm dark:shadow-none ${profile.hoverColor}`}
            >
              <div>
                {profile.icon}
                {/* Profile Name Text Fixed */}
                <h4 className="text-2xl font-bold text-neutral-900 dark:text-neutral-200 mb-1 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors duration-300">
                  {profile.name}
                </h4>
                <p className="text-sm font-medium text-cyan-600 dark:text-cyan-500 mb-4 transition-colors">@{profile.username}</p>
                {/* Profile Description Text Fixed */}
                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed transition-colors duration-500">
                  {profile.desc}
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                {/* Arrow Icon Fixed */}
                <span className="text-neutral-400 dark:text-neutral-600 transition-colors duration-300 group-hover:text-cyan-500 dark:group-hover:text-cyan-400">↗</span>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Profiles