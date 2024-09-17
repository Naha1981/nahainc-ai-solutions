import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative bg-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://ideogram.ai/api/images/direct/XBlDLQDnQsetZfOQYDvF9A.jpg')", opacity: 0.5}}></div>
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="text-5xl font-bold mb-4">Transforming Businesses with AI Solutions in South Africa</h1>
        <p className="text-2xl mb-4">Offering AI Automation, Web Applications, Employee Training, and More</p>
        <p className="text-xl mb-8">Save Time, Money, and Boost Productivity with AI Solutions</p>
        <Button 
          className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-3"
          onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
        >
          Get Started Today - Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Hero;
