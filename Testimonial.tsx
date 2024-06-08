import React from 'react';

interface TestimonialProps {
  image: string;
  name: string;
  comment: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ image, name, comment }) => {
  return (
    <div className="bg-white p-6 shadow-md rounded-lg mb-4">
      <img src={image} alt={name} className="w-12 h-12 rounded-full mx-auto mb-4" />
      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">{name}</h3>
      <p className="text-gray-600">{comment}</p>
    </div>
  );
}

export default Testimonial;
