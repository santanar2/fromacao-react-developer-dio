'use client';

import { useEffect, useState } from 'react';

const SunIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
    className="dark:opacity-50"
  >
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
    <path stroke="currentColor" strokeWidth="2" d="M12 1v6M12 17v6M23 12h-6M7 12H1M20.5 3.5L16.5 7.5M7.5 16.5L3.5 20.5M20.5 20.5L16.5 16.5M7.5 7.5L3.5 3.5" />
  </svg>
);

const MoonIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path stroke="currentColor" strokeWidth="2" d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79v0z" />
  </svg>
);

interface FooterProps {
  copyrightText?: string;
}

export default function Footer({ copyrightText = '© 2026 Meu Blog Pessoal' }: FooterProps) {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const darkMode = localStorage.getItem('theme') === 'dark';
    if (darkMode) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    }
  }, []);

  const toggleTheme = (dark: boolean) => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    }
  };

  return (
    <footer className="bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 mt-12">
      <div className="max-w-4xl mx-auto px-6 py-8 flex flex-col items-center gap-6">
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          {copyrightText}
        </p>

        <div className="flex bg-slate-100 dark:bg-slate-800 rounded-full p-1 gap-1">
          <button
            type="button"
            aria-label="Use Light Mode"
            onClick={() => toggleTheme(false)}
            className={`flex items-center justify-center px-4 py-2 rounded-full transition ${
              !isDark
                ? 'bg-white dark:bg-slate-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <SunIcon />
          </button>
          <button
            type="button"
            aria-label="Use Dark Mode"
            onClick={() => toggleTheme(true)}
            className={`flex items-center justify-center px-4 py-2 rounded-full transition ${
              isDark
                ? 'bg-slate-900 dark:bg-blue-600 text-white shadow-sm'
                : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            <MoonIcon />
          </button>
        </div>
      </div>
    </footer>
  );
}
