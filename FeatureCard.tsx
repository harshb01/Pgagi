import React from 'react';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-4">
      <img src={icon} alt={title} className="w-16 h-16 mx-auto mb-4" />
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default FeatureCard;

