import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

function getInitialDark() {
  if (typeof window === 'undefined') return true;
  const saved = localStorage.getItem('campusflow-theme');
  if (saved) return saved === 'dark';
  // Fall back to OS preference
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    const saved = localStorage.getItem('campusflow-theme');
    if (saved === 'light') {
      document.documentElement.style.colorScheme = 'light';
      setIsDark(false);
    } else if (saved === 'dark') {
      document.documentElement.style.colorScheme = 'dark';
      setIsDark(true);
    } else {
      // Let OS decide
      document.documentElement.style.colorScheme = 'light dark';
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    document.documentElement.style.colorScheme = nextDark ? 'dark' : 'light';
    localStorage.setItem('campusflow-theme', nextDark ? 'dark' : 'light');
    setIsDark(nextDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-all border border-transparent"
      aria-label="Toggle theme"
    >
      {isDark
        ? <Sun className="w-4 h-4 text-amber-500" />
        : <Moon className="w-4 h-4 text-teal-500" />
      }
    </button>
  );
}
