import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import ClientLogos from '@/components/ClientLogos';
import UseCases from '@/components/UseCases';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Hero />
      <ClientLogos />
      <Services />
      <UseCases />
      <Footer />
    </div>
  );
};

export default Index;
