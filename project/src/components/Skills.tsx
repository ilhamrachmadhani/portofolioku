

const Skills = () => {
  const skills = {
    frontend: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS", "Kotlin"],
    backend: ["Node.js", "Python"],
    tools: ["Git", "GitHub", "Android Studio", "Visual Studio", "Firebase"]
  };

  const customColor = {
    backgroundColor: '#021526' 
  };

  return (
    <section id="skills" className="py-20" style={customColor}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Skills</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="p-6 rounded-lg shadow-md shadow-black" style={customColor}>
            <h3 className="text-xl font-semibold mb-4 text-white">Frontend</h3>
            <ul className="space-y-2">
              {skills.frontend.map((skill, index) => (
                <li key={index} className="flex items-center text-white">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-lg shadow-md shadow-black" style={customColor}>
            <h3 className="text-xl font-semibold mb-4 text-white">Tools</h3>
            <ul className="space-y-2">
              {skills.tools.map((skill, index) => (
                <li key={index} className="flex items-center text-white">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-6 rounded-lg shadow-md shadow-black" style={customColor}>
            <h3 className="text-xl font-semibold mb-4 text-white">Backend</h3>
            <ul className="space-y-2">
              {skills.backend.map((skill, index) => (
                <li key={index} className="flex items-center text-white">
                  <span className="w-2 h-2 bg-white rounded-full mr-2"></span>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;