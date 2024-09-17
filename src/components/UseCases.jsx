import React from 'react';
import { Card } from "@/components/ui/card";

const useCases = [
  {
    title: 'Marketing & Sales Optimization',
    description: 'Prioritize leads and optimize resources for higher growth using our AI-powered lead scoring model.',
  },
  {
    title: 'Reduced Customer Churn',
    description: 'Identify at-risk customers and take proactive steps to retain them, resulting in a 20% reduction in churn.',
  },
  {
    title: 'Inventory Management',
    description: 'Achieve 72% more accurate predictions for inventory needs using our demand forecasting model.',
  },
  {
    title: 'Personalized Recommendations',
    description: 'Implement AI-driven personalized recommendations, leading to a 20% increase in revenue.',
  },
  {
    title: 'Automated Call Categorization',
    description: 'Automate call transcript categorization with 99% accuracy using our named entity recognition technology.',
  },
  {
    title: 'Streamlined Claims Processing',
    description: 'Reduce claim processing time by 90% with our chat LLM for answering customer policy questions.',
  },
];

const UseCases = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">Use Cases</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300 bg-gray-800 text-white">
              <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
              <p>{useCase.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UseCases;
