'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sun, BookOpen } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname(); // Detect current path for active state

  const navItems = [
    { title: 'Home', url: '/', icon: <Home size={18} /> },
    { title: 'Diwali', url: '/diwali', icon: <Sun size={18} /> },
    { title: 'Blog', url: '/blog', icon: <BookOpen size={18} /> },
  ];

  return (
    <nav className="fixed top-2 left-1/2 transform -translate-x-1/2 w-1/2 sm:w-1/3 z-50 flex justify-around items-center rounded-xl 
      bg-white/20 backdrop-blur-md border border-white/30 text-black shadow-lg py-1.5 px-4">
      
      {navItems.map((item, index) => {
        const isActive = pathname === item.url;
        return (
          <Link key={index} href={item.url} className="relative group">
            <div
              className={`flex items-center gap-2 cursor-pointer font-medium transition-colors ${
                isActive ? 'text-orange-400' : 'hover:text-orange-300'
              }`}
            >
              {item.icon}
              {item.title}
            </div>
            {/* Underline animation */}
            <span
              className={`absolute left-0 -bottom-1 h-[2px] bg-orange-400 transition-all duration-300 ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </Link>
        );
      })}
    </nav>
  );
}
