
import { Menu, X } from 'lucide-react';
import React from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const customColor = {
    backgroundColor: '#021526'
  };

  return (
    <header className="fixed w-full backdrop-blur-sm z-50  shadow-sm shadow-black" style={customColor}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-white">Portfolio</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-white hover:text-blue-600">About</a>
            <a href="#education" className="text-white hover:text-blue-600">Education</a>
            <a href="#skills" className="text-white hover:text-blue-600">Skills</a>
            <a href="#sertificate" className="text-white hover:text-blue-600">Sertificate</a>
            <a href="#projects" className="text-white hover:text-blue-600">Projects</a>
            <a href="#contact" className="text-white hover:text-blue-600">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white "
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              <a href="#about" className="text-white hover:text-blue-600">About</a>
              <a href="#education" className="text-white hhover:text-blue-600">Education</a>
              <a href="#skills" className="text-white hover:text-blue-600">Skills</a>
              <a href="#sertificate" className="text-white hover:text-blue-600">Sertificate</a>
              <a href="#projects" className="text-white hover:text-blue-600">Projects</a>
              <a href="#contact" className="text-white hover:text-blue-600">Contact</a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;