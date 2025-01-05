
const Education = () => {
  const education = [
    {
      degree: "Sistem Informasi",
      school: "Bakrie University",
      year: "2022 - Present",
      description: "Focus on Software Engineering and Web Development"
    },
    {
      degree: "Studi Independen Bangkit 2024",
      school: "Mobile Development",
      year: "2024",
      description: "Mobile Development Bangkit 2024 focuses on developing modern Android applications using Kotlin, Jetpack Compose, Firebase, MVVM architecture, AI integration, and strengthening soft skills for industry readiness."
    }
  ];

  const customColor = {
    backgroundColor: '#021526'
  };

  return (
    <section id="education" className="py-20 shadow-sm shadow-black" style={customColor}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Education</h2>
        <div className="max-w-3xl mx-auto">
          {education.map((edu, index) => (
            <div key={index} className="mb-8 p-6 rounded-lg shadow-md shadow-black" style={customColor}>
              <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
              <p className="text-blue-600 mb-2">{edu.school}</p>
              <p className="text-white text-sm mb-2">{edu.year}</p>
              <p className="text-white">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;