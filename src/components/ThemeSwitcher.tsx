'use client';

import { useTheme, Theme } from './ThemeProvider';

const themes: { id: Theme; label: string; className: string }[] = [
  { id: 'default', label: 'Default', className: 'theme-button-default' },
  { id: 'green', label: 'Green', className: 'theme-button-green' },
  { id: 'blue', label: 'Blue', className: 'theme-button-blue' },
  { id: 'magenta', label: 'Magenta', className: 'theme-button-magenta' },
  { id: 'orange', label: 'Orange', className: 'theme-button-orange' },
];

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex items-center gap-2">
      {themes.map((t) => (
        <button
          key={t.id}
          onClick={() => setTheme(t.id)}
          className={`theme-button ${t.className} ${theme === t.id ? 'active' : ''}`}
          aria-label={`Switch to ${t.label} theme`}
          title={t.label}
        />
      ))}
    </div>
  );
}
