// src/components/OverlayPortal.tsx
'use client';
import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';

export default function OverlayPortal({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;
  return createPortal(children, document.body);
}