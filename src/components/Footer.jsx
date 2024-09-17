import React from 'react';
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">NahaInc AI</h3>
            <p>Empowering Businesses Across All Industries with Advanced AI Technologies</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p>Phone: +27612980377</p>
            <p>Email: thabiso@nahainc.co.za</p>
            <p>Address: Vincent Thusi Street, Messipark</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/thabiso-naha-4985316b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="https://x.com/Naha_AI_Agency" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400">
                <Twitter className="w-6 h-6" />
              </a>
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
