'use client';

import { motion } from 'motion/react';
import { Github, Mail, Facebook, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-6 max-w-5xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-semibold tracking-wider uppercase mb-6">
          Available for hire
        </span>
        <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]">
          Crafting digital <br />
          <span className="text-zinc-400 dark:text-zinc-600">experiences</span> with <br />
          minimalist precision.
        </h1>
        <p className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mb-10 leading-relaxed">
          I&apos;m a full-stack engineer and designer focused on building clean, 
          performant, and user-centric applications. Passionate about 
          typography, motion, and the subtle details that make a product feel &quot;crafted.&quot;
        </p>

        <div className="flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            href="#blog"
            className="px-8 py-4 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 rounded-full font-medium flex items-center gap-2"
          >
            View My Work <ArrowRight size={18} />
          </motion.a>
          
          <div className="flex items-center gap-2 ml-2">
            <SocialIcon href="https://github.com" icon={<Github size={20} />} label="GitHub" />
            <SocialIcon href="mailto:karlhenz04@gmail.com" icon={<Mail size={20} />} label="Email" />
            <SocialIcon href="https://facebook.com" icon={<Facebook size={20} />} label="Facebook" />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function SocialIcon({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
  return (
    <motion.a
      whileHover={{ y: -2 }}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 rounded-full border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:border-zinc-900 dark:hover:border-zinc-100 transition-all"
      aria-label={label}
    >
      {icon}
    </motion.a>
  );
}
