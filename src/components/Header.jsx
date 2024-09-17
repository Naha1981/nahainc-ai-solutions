import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold">NahaInc AI</div>
          <div className="md:hidden">
            <Button variant="ghost" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <Menu />
            </Button>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-teal-400">What we do</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-teal-400">About us</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-teal-400">Contact</button></li>
            </ul>
          </nav>
          <Button className="hidden md:block bg-teal-500 hover:bg-teal-600 text-white" onClick={() => scrollToSection('contact')}>
            LET'S TALK
          </Button>
        </div>
        {isMenuOpen && (
          <nav className="mt-4 md:hidden">
            <ul className="flex flex-col space-y-2">
              <li><button onClick={() => scrollToSection('services')} className="hover:text-teal-400">What we do</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-teal-400">About us</button></li>
              <li><button onClick={() => scrollToSection('contact')} className="hover:text-teal-400">Contact</button></li>
              <li>
                <Button className="w-full bg-teal-500 hover:bg-teal-600 text-white" onClick={() => scrollToSection('contact')}>
                  LET'S TALK
                </Button>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
