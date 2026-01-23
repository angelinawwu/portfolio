'use client';

import { Heart } from '@phosphor-icons/react';

export default function Footer() {
  return (
    <footer className="pb-10 md:pb-20 bg-blue relative">
      <div className="max-w-7xl mx-auto px-6 text-left geist-mono-font relative z-20">
        <p className="text-white/70 text-xs">
          Last updated: 12.10.25
        </p>
        <p className="text-white/70 text-xs mt-2">
          Designed & coded with <Heart className="w-4 h-4 inline-block align-middle" /> by Angelina Wu (me!)
        </p>
      </div>
    </footer>
  );
}

