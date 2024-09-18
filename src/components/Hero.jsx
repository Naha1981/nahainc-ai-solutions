import React, { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';

const Hero = () => {
  const navigate = useNavigate();
  const controls = useAnimation();

  const handleContactUs = () => {
    navigate('/contact');
  };

  const sentence = "Do More for Less - From AI to ROI";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 20,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  useEffect(() => {
    const animateText = async () => {
      await controls.start("visible");
      await new Promise(resolve => setTimeout(resolve, 3000)); // Wait for 3 seconds
      await controls.start("hidden");
      await new Promise(resolve => setTimeout(resolve, 500)); // Short pause before restarting
      animateText(); // Restart the animation
    };

    animateText();
  }, [controls]);

  return (
    <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 text-white py-20">
      <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
        opacity: 0.2
      }}></div>
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          variants={container}
          initial="hidden"
          animate={controls}
        >
          {sentence.split("").map((char, index) => (
            <motion.span key={char + "-" + index} variants={child}>
              {char}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">We help businesses in South Africa implement AI to save costs, save time, and boost efficiency.</p>
        <div className="flex justify-center">
          <Button 
            className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-3"
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
