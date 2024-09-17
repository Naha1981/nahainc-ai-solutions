import React from 'react';
import { Card } from "@/components/ui/card";

const services = [
  {
    title: 'AI Automation',
    description: 'Streamline processes for businesses with cutting-edge AI automation solutions.',
  },
  {
    title: 'AI Web Applications',
    description: 'Develop AI-driven web applications that solve specific business problems.',
  },
  {
    title: 'AI Employee Training',
    description: 'Equip your team with essential AI knowledge through our comprehensive training programs.',
  },
  {
    title: 'AI Strategy & Implementation',
    description: 'Provide strategic consulting and implementation services for AI integration.',
  },
  {
    title: 'AI Autonomous Agents',
    description: 'Leverage autonomous agents to assist and enhance various business operations.',
  },
];

const Services = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-gray-800 text-white">
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p>{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
