'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/properties', label: 'Properties' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-amber-700 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">D</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent">
              DAMAC360
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-amber-600 ${
                  isActive(item.href)
                    ? 'text-amber-600 border-b-2 border-amber-600 pb-1'
                    : 'text-gray-700'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-6 py-2 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg"
            >
              Book a Tour
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-amber-600 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 text-sm font-medium transition-colors hover:text-amber-600 ${
                  isActive(item.href) ? 'text-amber-600' : 'text-gray-700'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block w-full bg-gradient-to-r from-amber-500 to-amber-600 text-white text-center px-6 py-2 rounded-full hover:from-amber-600 hover:to-amber-700 transition-all"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Tour
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
