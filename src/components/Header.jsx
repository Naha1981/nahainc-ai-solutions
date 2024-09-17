import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">NahaInc AI</div>
        <nav>
          <ul className="flex space-x-6">
            <li><button onClick={() => scrollToSection('services')} className="hover:text-teal-400">What we do</button></li>
            <li><button onClick={() => scrollToSection('about')} className="hover:text-teal-400">About us</button></li>
            <li><button onClick={() => scrollToSection('contact')} className="hover:text-teal-400">Contact</button></li>
          </ul>
        </nav>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white" onClick={() => scrollToSection('contact')}>
          LET'S TALK
        </Button>
      </div>
    </header>
  );
};

export default Header;
