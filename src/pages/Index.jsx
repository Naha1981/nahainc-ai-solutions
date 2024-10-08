import React from 'react';
import { Button } from "@/components/ui/button";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ClientLogos from '@/components/ClientLogos';
import UseCases from '@/components/UseCases';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <Hero />
      <div id="about" className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">About Us</h2>
          <p className="text-center mb-8 max-w-2xl mx-auto text-gray-300">
            NahaInc AI is a leading provider of AI solutions in South Africa. We are dedicated to transforming businesses through innovative AI technologies, helping them save time, money, and boost productivity.
          </p>
        </div>
      </div>
      <div id="services">
        <Services />
      </div>
      <ClientLogos />
      <UseCases />
      <div id="contact" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">Contact Us</h2>
          <p className="text-center mb-8 max-w-2xl mx-auto text-gray-300">Ready to transform your business with AI? Get in touch with us today!</p>
          <div className="flex justify-center">
            <Button 
              className="bg-teal-500 hover:bg-teal-600 text-white text-lg px-8 py-3"
              onClick={() => window.location.href = 'mailto:contact@nahainc.ai'}
            >
              Send us an email
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;
