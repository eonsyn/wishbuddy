import React from 'react';
import { User, Edit3, Gift, Share2 } from 'lucide-react';

function HowItWork() {
  const steps = [
    {
      icon: <User size={32} className="text-orange-500" />,
      title: 'Enter Names',
      description:
        'Provide your name and the recipient’s name to personalize your Diwali wish.',
    },
    {
      icon: <Edit3 size={32} className="text-orange-500" />,
      title: 'Add Details',
      description:
        'Include relationship, fun facts, or a personal note to make the wish unique.',
    },
    {
      icon: <Gift size={32} className="text-orange-500" />,
      title: 'Generate Wish',
      description:
        'Our AI will craft a memorable Diwali message based on your inputs.',
    },
    {
      icon: <Share2 size={32} className="text-orange-500" />,
      title: 'Share & Celebrate',
      description:
        'Copy the link or share directly with friends and family to spread joy!',
    },
  ];

  return (
    <div className="py-16  ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-orange-700 mb-12">
          How WishBuddy Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-orange-600">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HowItWork;
