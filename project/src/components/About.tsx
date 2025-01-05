
const About = () => {

  const customColor = {
    backgroundColor: '#021526'
  };

  return (
    <section id="about" className="py-20" style={customColor}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">About Me</h2>
        <div className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed">
          <p className="mb-6 text-white">
          I am an active 6th semester student majoring in Information Systems with a deep understanding of information technology. My educational background includes programming, database, system analysis, and project management, which are the basis of my technical skills
          </p>
          <p className="text-white">
          My experience as a part-time Front-End Web Developer at Bakrie University and Study Independent Internship at Bangkit 2024 as Mobile Development
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;