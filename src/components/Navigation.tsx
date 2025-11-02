'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Envelope, GithubLogo,LinkedinLogo, XLogo, List, X } from "@phosphor-icons/react";
import ShinyText from '@/components/ShinyText';

export default function Navigation() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ];

  const externalLinks = [
    { href: 'mailto:angelinawu05@gmail.com', label: 'Email', icon: Envelope },
    { href: 'https://linkedin.com/in/angelinawwu', label: 'LinkedIn', icon: LinkedinLogo },
    { href: 'https://github.com/angelinawwu', label: 'GitHub', icon: GithubLogo },
    { href: 'https://x.com/angelinawuuu', label: 'Twitter', icon: XLogo },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f6fafd] text-[#0000ff] backdrop-blur-md border-b border-[#0000ff]/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <div className="flex items-center space-x-4">
            <Link 
              href="/" 
              className="text-xl blue-hover-magenta-text font-medium"
            >
              Angelina Wu
            </Link>

            <div className="h-9 border-l border-[#0000ff]/20 hidden sm:block" />

            <div className="hidden sm:block">
              <ShinyText text="Designing to delight" className="text-sm font-normal" />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium ease-in-out ${
                  pathname === item.href ? 'text-[#ff00ff]' : 'text-[#0000ff] blue-hover-magenta-text'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* External Links */}
            <div className="flex items-center space-x-3 pl-4 border-l border-[#0000ff]/20">
              {externalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#ff00ff] blue-hover-magenta-text transition-colors duration-200"
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
            className="md:hidden p-2 text-[#0000ff]/70 hover:text-[#0000ff] transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" />}
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
                className={`block text-[#0000ff] font-medium transition-opacity hover:opacity-100 ${
                  pathname === item.href ? 'opacity-100' : 'opacity-70'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* Mobile External Links */}
            <div className="flex items-center space-x-4 pt-4 border-t border-[#0000ff]/20">
              {externalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-[#0000ff]/70 hover:text-[#0000ff] transition-colors duration-200"
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
