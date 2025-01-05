
import { Github, Linkedin, Mail } from 'lucide-react';
import logo from './assets/ilham rachmadhani.png';

  const customColor = {
    backgroundColor: '#021526'
  };


const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16" style={customColor}>
      <div className="container mx-auto px-6 " >
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
              Hi, I'm <span className="text-blue-600">Ilham Rachmadhani</span>
            </h1>
            <p className="text-xl text-white mb-8">
              Front end Web | Android Developer
            </p>
            <div className="flex space-x-4">
              <a href="https://github.com/ilhamrachmadhani" target="_blank" rel="noopener noreferrer" 
                className="p-2 bg-gray-800 text-white rounded-full hover:bg-gray-700">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/ilham-rachmadhani/" target="_blank" rel="noopener noreferrer"
                className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-500">
                <Linkedin size={24} />
              </a>
              <a href="https://ilhamrachmadhani00@gmail.com"
                className="p-2 bg-red-600 text-white rounded-full hover:bg-red-500">
                <Mail size={24} />
              </a>
            </div>
          </div>
          <div className="md:w-1/2">
            <img 
              src={logo} 
              alt="Profile" 
              className="rounded-full w-64 h-64 md:w-96 md:h-96 object-cover shadow-md shadow-black"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;