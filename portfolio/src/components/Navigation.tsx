'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ];

  const externalLinks = [
    { href: 'https://github.com/angelinawwu', label: 'GitHub' },
    { href: 'https://linkedin.com/in/angelinawwu', label: 'LinkedIn' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Brand */}
          <Link 
            href="/" 
            className="text-xl font-medium rainbow-text hover:opacity-80 transition-opacity"
          >
            Angelina Wu
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`rainbow-underline font-medium transition-opacity hover:opacity-80 ${
                  pathname === item.href ? 'opacity-100' : 'opacity-70'
                }`}
              >
                {item.label}
              </Link>
            ))}

            {/* External Links */}
            <div className="flex items-center space-x-4 pl-4 border-l border-white/20">
              {externalLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rainbow-underline text-sm font-medium opacity-70 hover:opacity-100 transition-opacity"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
