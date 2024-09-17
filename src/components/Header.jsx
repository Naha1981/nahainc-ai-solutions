import React from 'react';
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-2xl font-bold">NahaInc AI</div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-teal-400">What we do</a></li>
            <li><a href="#" className="hover:text-teal-400">Industries</a></li>
            <li><a href="#" className="hover:text-teal-400">Portfolio</a></li>
            <li><a href="#" className="hover:text-teal-400">Insights</a></li>
            <li><a href="#" className="hover:text-teal-400">About us</a></li>
            <li><a href="#" className="hover:text-teal-400">Careers</a></li>
          </ul>
        </nav>
        <Button className="bg-teal-500 hover:bg-teal-600 text-white">LET'S TALK</Button>
      </div>
    </header>
  );
};

export default Header;