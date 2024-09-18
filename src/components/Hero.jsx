import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://ideogram.ai/api/images/direct/XBlDLQDnQsetZfOQYDvF9A.jpg')", opacity: 0.5}}></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">NahaInc AI: Empowering Businesses Across All Industries with Advanced AI Technologies</h1>
        <p className="text-xl md:text-2xl mb-4">Offering AI Automation, Web Applications, Employee Training, and More</p>
        <p className="text-lg md:text-xl mb-8 font-semibold text-teal-300 text-center">Save Time, Money, and Boost Productivity with AI Solutions</p>
        <Button 
          className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-6 py-3 md:px-8 md:py-3"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started Today - Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Hero;
