"use client";
import React from "react";
import Link from "next/link";
import { Sparkles, PartyPopper, Flame } from "lucide-react";

function AllCategories() {
  const categories = [
    {
      slug: "diwali",
      title: "Diwali",
      desc: "Warm, glowing, slightly sarcastic",
      link: "/diwali",
      color:"bg-pink-300/80",
      icon: <Flame className="w-6 h-6 text-yellow-500" />,
      gradient: "from-amber-400 to-yellow-600",
    },
    {
      slug: "birthday",
      title: "Birthday",
      desc: "Wish Your Friend With Cripsy Line",
      link: "/birthday",
 color:"bg-blue-300/80",
      icon: <PartyPopper className="w-6 h-6 text-pink-500" />,
      gradient: "from-pink-400 to-purple-600",
    },
    {
      slug: "roast",
      title: "Roast",
      desc: "Full-on savage mode",
      link: "/roast",
       color:"bg-pink-300/80",
      icon: <Sparkles className="w-6 h-6 text-red-500" />,
      gradient: "from-red-400 to-orange-600",
    },
    {
      slug: "roast",
      title: "Roast",
      desc: "Full-on savage mode",
      link: "/roast",
       color:"bg-blue-300/80",
      icon: <Sparkles className="w-6 h-6 text-red-500" />,
      gradient: "from-red-400 to-orange-600",
    },
  ];

  return (
    <section className="min-h-screen w-full  flex flex-col items-center justify-center py-16 px-6">
      {/* Title */}
      <h1 className="text-5xl font-extrabold text-black mb-4 tracking-wide text-center">
        Explore Wishes  
      </h1>
      <p className="text-slate-800 text-lg text-center max-w-2xl mb-12">
        Choose your vibe — whether you want to spread joy, sarcasm, or total chaos.  
        WishBuddy’s got you covered!
      </p>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {categories.map((cat) => (
          <Link
            key={cat.slug}
            href={cat.link}
            className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br p-[2px] hover:scale-105 transition-transform duration-300`}
          >
            <div className={` ${cat.color} drop-shadow-2xl   backdrop-blur-sm rounded-2xl p-6 h-full flex flex-col items-center justify-center text-center space-y-3 transition-colors group-hover:bg-slate-800`}>
              <div className="p-3 rounded-full bg-white/30 backdrop-blur-sm">
                {cat.icon}
              </div>
              <h2 className="text-2xl font-bold text-white">{cat.title}</h2>
              <p className="text-slate-800 text-sm max-w-xs">{cat.desc}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* Subtle Glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.05)_0%,transparent_70%)]"></div>
    </section>
  );
}

export default AllCategories;
