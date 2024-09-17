import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">NahaInc AI</div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link to="#services" className="hover:text-teal-400">What we do</Link></li>
            <li><Link to="#industries" className="hover:text-teal-400">Industries</Link></li>
            <li><Link to="#portfolio" className="hover:text-teal-400">Portfolio</Link></li>
            <li><Link to="#insights" className="hover:text-teal-400">Insights</Link></li>
            <li><Link to="#about" className="hover:text-teal-400">About us</Link></li>
            <li><Link to="#careers" className="hover:text-teal-400">Careers</Link></li>
          </ul>
        </nav>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
          LET'S TALK
        </Button>
      </div>
    </header>
  );
};

export default Header;
