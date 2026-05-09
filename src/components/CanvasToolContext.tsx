'use client';

import { createContext, useContext, useState, type ReactNode } from 'react';

export type CanvasTool = 'brush' | 'eraser';

interface CanvasToolContextType {
  tool: CanvasTool;
  setTool: (tool: CanvasTool) => void;
}

const CanvasToolContext = createContext<CanvasToolContextType | undefined>(undefined);

export function CanvasToolProvider({ children }: { children: ReactNode }) {
  const [tool, setTool] = useState<CanvasTool>('brush');
  return (
    <CanvasToolContext.Provider value={{ tool, setTool }}>
      {children}
    </CanvasToolContext.Provider>
  );
}

export function useCanvasTool() {
  const ctx = useContext(CanvasToolContext);
  if (ctx === undefined) {
    throw new Error('useCanvasTool must be used within a CanvasToolProvider');
  }
  return ctx;
}
