import React from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const handleContactUs = () => {
    navigate('/contact');
  };

  return (
    <div className="relative bg-gradient-to-br from-green-400 to-green-600 text-white py-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        opacity: 0.3
      }}></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">Do More for Less - From AI to ROI</h1>
        <p className="text-xl md:text-2xl mb-8">We help businesses in South Africa implement AI to save costs, save time, and boost efficiency.</p>
        <div className="flex justify-center">
          <Button 
            className="bg-white hover:bg-gray-100 text-black text-lg px-8 py-3"
            onClick={handleContactUs}
          >
            Contact Us
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
