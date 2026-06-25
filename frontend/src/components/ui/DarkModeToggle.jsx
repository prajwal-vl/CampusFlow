import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

// Apply dark mode immediately before React hydration to prevent FOUC
// The HTML already has class="dark" as default
function getInitialDark() {
  if (typeof window === 'undefined') return true;
  const saved = localStorage.getItem('campusflow-theme');
  // Default to dark unless explicitly set to light
  return saved !== 'light';
}

export default function DarkModeToggle() {
  const [isDark, setIsDark] = useState(getInitialDark);

  useEffect(() => {
    // Sync the HTML class with stored preference on mount
    const saved = localStorage.getItem('campusflow-theme');
    if (saved === 'light') {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    } else {
      // Default to dark
      document.documentElement.classList.add('dark');
      if (!saved) localStorage.setItem('campusflow-theme', 'dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    if (nextDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('campusflow-theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('campusflow-theme', 'light');
    }
    setIsDark(nextDark);
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="p-2 rounded-lg text-slate-500 hover:text-slate-805 hover:bg-slate-100 dark:text-slate-400 dark:hover:text-slate-200 dark:hover:bg-slate-800 transition-all border border-transparent"
      aria-label="Toggle theme"
    >
      {isDark
        ? <Sun className="w-4 h-4 text-amber-500" />
        : <Moon className="w-4 h-4 text-indigo-500" />
      }
    </button>
  );
}
