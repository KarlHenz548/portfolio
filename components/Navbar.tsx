'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Github, Mail, Facebook } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md border-bottom border-zinc-200 dark:border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-display font-bold text-xl tracking-tight"
        >
          Karl Hen&apos;z &lt;/&gt;
        </motion.div>

        <div className="flex items-center gap-6">
          <div className="hidden sm:flex items-center gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#home" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Home</a>
            <a href="#projects" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Projects</a>
            <a href="#blog" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Blog</a>
            <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a>
          </div>

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </div>
    </nav>
  );
}
