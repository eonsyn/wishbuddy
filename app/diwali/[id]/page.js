import React from "react";
import Link from "next/link";
import LightDeepak from "@/components/diwali/LightDeepak";

export const revalidate = 60; // ISR every 60s

// 🪔 Pre-generate all Diwali wish pages
export async function generateStaticParams() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/ai/diwali`, {
    next: { revalidate: 60 },
  });

  const data = await res.json();
  if (!data.success || !data.data) return [];

  return data.data.map((wish) => ({ id: wish._id }));
}

// 🪔 Dynamically generate page metadata
export async function generateMetadata({ params }) {
  const { id } = params;
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/ai/diwali?id=${id}`,
    { next: { revalidate: 60 } }
  );
  const data = await res.json();

  if (!data.success || !data.data) {
    return { title: "Diwali Wish Not Found" };
  }

  const wish = data.data;
  return {
    title: `Diwali wish to ${wish.name}`,
    description: `${wish.wisher} sends warm Diwali greetings to ${wish.name}.`,
  };
}

// 🪔 Page Component
export default async function Page({ params }) {
  const { id } = params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/ai/diwali?id=${id}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();

  if (!data.success || !data.data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-center p-6 bg-gradient-to-br from-orange-50 via-yellow-50 to-white">
        <div className="bg-white/80 shadow-lg rounded-2xl p-8 w-full md:max-w-sm">
          <h1 className="text-2xl font-bold text-red-600 mb-2">Wish not found 😢</h1>
          <p className="text-gray-600">
            {data.error || "The wish you’re looking for doesn’t exist."}
          </p>
          <Link
            href="/diwali"
            className="mt-4 inline-block px-5 py-2 rounded-lg bg-orange-500 text-white font-semibold hover:bg-orange-600 transition"
          >
            Create a new wish
          </Link>
        </div>
      </div>
    );
  }

  const wish = data.data;

  // Convert **bold** parts into React elements safely
  const formattedWishParts = wish.generatedWish.split(/(\*.*?\*)/g).map((part, index) => {
    if (part.startsWith("*") && part.endsWith("*")) {
      const text = part.slice(1, -1);
      return (
        <strong key={index} className="font-semibold text-orange-800">
          {text}
        </strong>
      );
    }
    return <span key={index}>{part}</span>;
  });

  return (
    <div className="min-h-screen flex flex-col items-center justify-center md:px-6 py-10 bg-gradient-to-br from-orange-100 via-yellow-50 to-white">
      {/* Floating Interactive Flame */}
      <LightDeepak />

      {/* Wish Card */}
      <div className="relative w-full md:max-w-[80%] md:bg-white/90   md:backdrop-blur-xl md:shadow-2xl rounded-3xl p-10 text-center md:border border-orange-200">
        {/* Title */}
        <h1 className="text-4xl capitalize font-extrabold text-orange-700 mb-6">
          {wish.name}’s Diwali Wish
        </h1> 
        {/* Wisher Info */}
        <div className='h-52 mb-3 rounded-2xl w-full overflow-hidden'>
<img className=" scale-105 " src={`/diwali/${wish.type}.png`}></img>
        </div>
        
        
        {/* Main Wish Message */}
        <div className="bg-orange-50 border border-orange-200 rounded-2xl p-6 text-gray-800 font-medium leading-relaxed text-left shadow-inner">
          {formattedWishParts}
        </div>
        <p className="text-gray-600 italic mb-6 text-lg text-end">By - {wish.wisher}</p>
      </div>

      {/* Create New Wish Button */}
      <div className="mt-10 flex justify-center">
        <Link
          href="/diwali"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-orange-500 to-yellow-400 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 animate-pulse"
        >
          🪔 Create a wish for your friend
        </Link>
      </div>
    </div>
  );
}
