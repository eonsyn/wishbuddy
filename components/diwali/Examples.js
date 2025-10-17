import React from 'react';
import { Heart, Star } from 'lucide-react';

function Examples() {
  const wishes = [
    {
      message: "Wishing you a *bright* and *joyful* Diwali filled with love and laughter!",
      from: "– Your Friend",
    },
    {
      message: "May this Diwali bring *happiness*, *success*, and *prosperity* to you and your family!",
      from: "– Team WishBuddy",
    },
    {
      message: "Light up your life like the Diya and let *positivity* shine through every corner of your home.",
      from: "– Your Secret Admirer",
    },
    {
      message: "Hope your Diwali is as *sparkling* and *fun* as the fireworks in the night sky!",
      from: "– WishBuddy AI",
    },
  ];

  return (
    <div className="py-16  ">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center text-orange-700 mb-12">
          Example Diwali Wishes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition flex flex-col justify-between"
            >
              <p className="text-gray-800 font-medium leading-relaxed mb-4">
                {wish.message.split(/(\*.*?\*)/g).map((part, i) =>
                  part.startsWith("*") && part.endsWith("*") ? (
                    <strong key={i} className="text-orange-600">
                      {part.slice(1, -1)}
                    </strong>
                  ) : (
                    <span key={i}>{part}</span>
                  )
                )}
              </p>
              <div className="flex items-center gap-2 mt-4">
                <Star size={18} className="text-yellow-400" />
                <span className="text-gray-600 italic text-sm">{wish.from}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Examples;
