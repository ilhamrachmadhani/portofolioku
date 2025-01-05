
import { Github } from 'lucide-react';
import FruitScan from './assets/aplikasi FruitScan.png';
import Portofolio from './assets/portofolio.png';

const Projects = () => {
  const projects = [
    {
      title: "First Portofolio",
      description: "This is my first web portfolio",
      image: Portofolio,
      github: "https://github.com",
    },
    {
      title: "Aplication NutriScan",
      description: "Fruit Scanning Application to find out how many calories are in the fruit",
      image: FruitScan,
      github: "https://github.com/Capstone-product/NutriScan",
    },
    {
      title: "Aplikasi Event",
      description: "Application to display upcoming events and past events",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
      github: "https://github.com/ilhamrachmadhani/Aplikasi-Dicoding-Event",
    }
  ];

  const customColor = {
    backgroundColor: '#021526'
  };

  return (
    <section id="projects" className="py-20" style={customColor}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md bg-white">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">{project.title}</h3>
                <p className="text-black mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a href={project.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center text-black hover:text-gray-950">
                    <Github size={20} className="mr-1" />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;