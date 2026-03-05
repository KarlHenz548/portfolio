'use client';

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Blog from '@/components/Blog';
import Footer from '@/components/Footer';
import { motion, useScroll, useSpring } from 'motion/react';

export default function Page() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <main className="relative min-h-screen">
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-zinc-900 dark:bg-zinc-100 origin-left z-[60]"
        style={{ scaleX }}
      />

      <Navbar />
      
      <div className="space-y-20">
        <Hero />
        <Projects />
        <Blog />
        <Footer />
      </div>

      {/* Subtle Background Elements */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] rounded-full bg-zinc-100 dark:bg-zinc-900/50 blur-[120px] opacity-50" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] rounded-full bg-zinc-100 dark:bg-zinc-900/50 blur-[120px] opacity-50" />
      </div>
    </main>
  );
}
