'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { Home, PlusCircle, Bell, LogOut, Menu } from 'lucide-react';

export default function Asidebar() {
  const router = useRouter();
  const [collapsed, setCollapsed] = useState(false);

  const asidemenu = [
    {
      title: 'Home',
      url: '/admin/dashboard',
      icon: <Home size={20} />,
    },
    {
      title: 'Add Article',
      url: '/admin/post',
      icon: <PlusCircle size={20} />,
    },
    {
      title: 'Notification',
      url: '/admin/notification',
      icon: <Bell size={20} />,
    },
  ];

  const handleLogout = () => {
    signOut({ callbackUrl: '/admin/login' });
  };

  return (
    <aside
      className={`h-[80vh] rounded-xl sticky top-5 bg-gray-900 text-white px-2 py-4 flex flex-col justify-between transition-all duration-300 ${
        collapsed ? 'w-20' : 'w-56'
      }`}
    >
      {/* Logo + Toggle */}
      <div className="flex items-center justify-between mb-6 px-2">
        <h1 className={`font-bold text-lg ${collapsed ? 'hidden' : 'block'}`}>Admin Panel</h1>
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1 hover:bg-gray-700 rounded-md"
        >
          <Menu size={20} />
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex flex-col gap-2">
        {asidemenu.map((item, index) => (
          <Link href={item.url} key={index}>
            <button
              className="flex items-center gap-3 w-full px-3 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              {item.icon}
              {!collapsed && <span className="font-medium">{item.title}</span>}
            </button>
          </Link>
        ))}

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 w-full px-3 py-2 rounded-lg bg-red-600 hover:bg-red-700 transition-colors mt-4"
        >
          <LogOut size={20} />
          {!collapsed && <span className="font-medium">Logout</span>}
        </button>
      </div>
    </aside>
  );
}
