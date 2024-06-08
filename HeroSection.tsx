import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="bg-blue-500 text-white text-center py-16">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">Your Catchy Headline Here</h1>
      <p className="text-lg sm:text-xl md:text-2xl mb-8">A brief description of your product or service.</p>
      <button className="bg-white text-blue-500 px-8 py-3 rounded-full hover:bg-blue-100 hover:text-blue-600">Get Started</button>
    </section>
  );
}

export default HeroSection;


