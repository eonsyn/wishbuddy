import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';

function Footer() {
  return (
    <footer className="bg-orange-50  text-gray-700 border-t border-orange-200   ">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold text-orange-600 mb-4">WishBuddy</h3>
          <p className="text-gray-600">
            WishBuddy helps you create personalized Diwali wishes for your friends and family, 
            spreading joy and festive spirit in a few clicks.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/diwali" className="hover:text-orange-500 transition">Create Wish For Diwali</Link>
            </li>
            <li>
              <Link href="#faq" className="hover:text-orange-500 transition">FAQ</Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-orange-500 transition">Blog</Link>
            </li>
             
             
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Contact</h4>
          <p>Email: <a href="mailto:support@wishbuddy.com" className="text-orange-500 underline">degital.builder@gmail.com</a></p>
           
          <p className="mt-2 text-gray-500 text-sm">We typically respond within 24 hours.</p>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h4>
          <div className="flex items-center gap-4">
            <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
              <Instagram className="w-6 h-6 text-orange-500 hover:text-orange-600 transition" />
            </Link>
            <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
              <Facebook className="w-6 h-6 text-orange-500 hover:text-orange-600 transition" />
            </Link>
            <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
              <Twitter className="w-6 h-6 text-orange-500 hover:text-orange-600 transition" />
            </Link>
            <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
              <Linkedin className="w-6 h-6 text-orange-500 hover:text-orange-600 transition" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-orange-200 text-center py-4 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} WishBuddy. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
