'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

export type Theme = 'default' | 'green' | 'blue' | 'magenta' | 'orange';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  accentColor: string;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'portfolio-theme';

// Map themes to their accent colors for JS access
const themeAccentColors: Record<Theme, string> = {
  default: '#F3EDF5',
  green: '#D4EC21',
  blue: '#6FA7E7',
  magenta: '#EC6CF1',
  orange: '#E3743D',
};

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<Theme>('default');
  const [mounted, setMounted] = useState(false);

  // Load theme from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY) as Theme | null;
    if (savedTheme && themeAccentColors[savedTheme]) {
      setThemeState(savedTheme);
    }
    setMounted(true);
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (mounted) {
      if (theme === 'default') {
        document.documentElement.removeAttribute('data-theme');
      } else {
        document.documentElement.setAttribute('data-theme', theme);
      }
    }
  }, [theme, mounted]);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem(THEME_STORAGE_KEY, newTheme);
  };

  const accentColor = themeAccentColors[theme];

  // Prevent flash of wrong theme
  if (!mounted) {
    return null;
  }

  return (
    <ThemeContext.Provider value={{ theme, setTheme, accentColor }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
