'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { List, X } from '@phosphor-icons/react';
import ThemeSwitcher from './ThemeSwitcher';

const navItems = [
  { href: '/', label: 'WORK' },
  { href: '/play', label: 'PLAY' },
  { href: '/about', label: 'ABOUT' },
];

const connectLinks = [
  { href: 'mailto:angelinawu05@gmail.com', label: 'EMAIL' },
  { href: 'https://linkedin.com/in/angelinawwu', label: 'LINKEDIN' },
  { href: 'https://x.com/angelinawuuu', label: 'TWITTER/X' },
  { href: 'https://github.com/angelinawwu', label: 'GITHUB' },
  { href: 'https://drive.google.com/file/d/1urDhFh8q3HmATT-XVZU7RXP-TAt2BeXs/view', label: 'RESUME' },
];

function LiveClock() {
  const [time, setTime] = useState('');
  
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
        timeZone: 'America/Los_Angeles'
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return <span>{time}</span>;
}

export default function Sidebar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  // Prevent scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const SidebarContent = () => (
    <>
      {/* Name & Bio */}
      <div className="mb-8">
        <Link href="/" className="sidebar-link block mb-4">
          <span className="geist-mono-font text-sm">✱</span>{' '}
          <span className="geist-mono-font text-sm tracking-wide">ANGELINA WU</span>
        </Link>
        <p className="text-sm leading-relaxed text-white-muted">
          Angelina Wu is a designer, builder, and doer who&apos;s passionate about creating channels for{' '}
          <span className="accent-text">delight</span> and{' '}
          <span className="accent-text">human connection</span>. She is currently studying Design & Data Science at UCLA and can be found building cute websites, reading speculative fiction, or finding a new favorite color.
        </p>
      </div>

      {/* Navigation */}
      <div className="mb-8">
        <h3 className="text-xs geist-mono-font text-white-muted mb-3 tracking-wider">NAVIGATION</h3>
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`sidebar-link geist-mono-font text-sm py-1 ${
                isActive(item.href) ? 'sidebar-link-active' : ''
              }`}
            >
              <span className="mr-2">✱</span>
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Connect */}
      <div className="mb-8">
        <h3 className="text-xs geist-mono-font text-white-muted mb-3 tracking-wider">CONNECT</h3>
        <nav className="flex flex-col gap-1">
          {connectLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="sidebar-link geist-mono-font text-sm py-1"
            >
              <span className="mr-2">✱</span>
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      {/* Spacer to push bottom content down */}
      <div className="flex-1" />

      {/* Theme Switcher */}
      <div className="mb-6">
        <ThemeSwitcher />
      </div>

      {/* Location & Time */}
      <div className="text-xs geist-mono-font text-white-muted mb-2">
        LOS ANGELES, CA. <LiveClock />
      </div>

      {/* Footer */}
      <div className="text-xs geist-mono-font text-white-muted">
        2026 ✱ DESIGNED & CODED W/ &lt;3
      </div>
    </>
  );

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-screen w-72 bg-black border-r border-faded-white flex-col p-6 z-40">
        <SidebarContent />
      </aside>

      {/* Mobile Header */}
      <header className="lg:hidden fixed top-0 left-0 right-0 h-14 bg-black border-b border-faded-white z-50 flex items-center px-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 text-white"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <List size={24} />}
        </button>
        <Link href="/" className="ml-2 geist-mono-font text-sm text-white">
          ✱ ANGELINA WU
        </Link>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="lg:hidden fixed inset-0 z-40 bg-black/90 mobile-menu-overlay"
          onClick={() => setIsMenuOpen(false)}
        >
          <div 
            className="absolute top-14 left-0 right-0 bottom-0 bg-black p-6 overflow-y-auto flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <SidebarContent />
          </div>
        </div>
      )}
    </>
  );
}
