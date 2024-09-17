import React from 'react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">NahaInc AI</h3>
            <p>Empowering South African Businesses through Advanced AI Technologies</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>Phone: [Your Phone Number]</p>
            <p>Email: [Your Email]</p>
            <p>Address: [Your Address in Johannesburg]</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/thabiso-naha-4985316b" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">LinkedIn</a>
              <a href="https://x.com/Naha_AI_Agency" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">Twitter</a>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2024 NahaInc AI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;