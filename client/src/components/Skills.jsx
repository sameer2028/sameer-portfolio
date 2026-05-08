function Skills() {
  const skillCategories = [
    {
      title: "Backend & Database",
      skills: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs", "JDBC"]
    },
    {
      title: "Frontend",
      skills: ["React", "JavaScript (ES6+)", "Tailwind CSS", "HTML5", "CSS3"]
    },
    {
      title: "Languages & Core",
      skills: ["Java", "C++", "Data Structures", "Algorithms", "Object-Oriented Programming"]
    },
    {
      title: "Tools & Platforms",
      skills: ["Git", "GitHub", "Postman", "Vite", "CesiumJS"]
    }
  ];

  return (
    <section className="px-6 py-24 bg-neutral-950" id="skills">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="mb-12 text-3xl font-bold text-white md:text-5xl">
          Technical <span className="text-cyan-500">Arsenal</span>
        </h2>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 text-left">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="rounded-2xl border border-neutral-800 bg-neutral-900 p-6 hover:border-cyan-500/30 transition-colors"
            >
              <h3 className="mb-6 text-xl font-semibold text-white">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="rounded-full bg-neutral-800/80 border border-neutral-700 px-4 py-2 text-sm text-neutral-300 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills