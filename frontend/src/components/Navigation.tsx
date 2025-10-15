'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Github, Linkedin, Twitter, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ];

  const externalLinks = [
    { href: 'https://github.com/angelinawwu', label: 'GitHub', icon: Github },
    { href: 'https://linkedin.com/in/angelinawwu', label: 'LinkedIn', icon: Linkedin },
    { href: 'https://x.com/angelinawuuu', label: 'Twitter', icon: Twitter },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-xl font-medium rainbow-text hover:opacity-100 transition-opacity"
            >
              Angelina Wu
            </Link>

            <p className="text-white/70 text-sm hidden sm:block">Designing to delight</p>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rainbow-text font-medium transition-opacity hover:opacity-100 ${
                  pathname === item.href ? 'opacity-100' : 'opacity-100'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* External Links */}
            <div className="flex items-center space-x-3 pl-4 border-l border-white/20">
              {externalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white/70 hover:text-white transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden flex flex-col items-start pt-4 pb-2 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block rainbow-text font-medium transition-opacity hover:opacity-100 ${
                  pathname === item.href ? 'opacity-100' : 'opacity-70'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile External Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-white/20">
              {externalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white/70 hover:text-white transition-colors duration-200"
                    aria-label={link.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
