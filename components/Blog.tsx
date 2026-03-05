'use client';

import { motion } from 'motion/react';
import Image from 'next/image';

const POSTS = [
  {
    id: 1,
    title: "The Art of Minimalist UI Design",
    excerpt: "Why less is often more when it comes to user experience and interface design.",
    date: "Mar 12, 2024",
    image: "https://picsum.photos/seed/minimal/800/600",
    category: "Design"
  },
  {
    id: 2,
    title: "Optimizing Next.js for Performance",
    excerpt: "A deep dive into server components, streaming, and image optimization techniques.",
    date: "Feb 28, 2024",
    image: "https://picsum.photos/seed/code/800/600",
    category: "Development"
  },
  {
    id: 3,
    title: "The Future of Web Animation",
    excerpt: "How motion is becoming a core part of the user experience, not just decoration.",
    date: "Jan 15, 2024",
    image: "https://picsum.photos/seed/motion/800/600",
    category: "Motion"
  }
];

export default function Blog() {
  return (
    <section id="blog" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="flex items-end justify-between mb-12">
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Latest Blog Posts</h2>
          <p className="text-zinc-600 dark:text-zinc-400">Sharing my thoughts on design, code, and technology.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {POSTS.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-zinc-100 dark:bg-zinc-800">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-zinc-900/90 backdrop-blur-sm text-[10px] font-bold uppercase tracking-widest">
                  {post.category}
                </span>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-xs font-medium text-zinc-500">{post.date}</p>
              <h3 className="text-xl font-bold group-hover:text-zinc-600 dark:group-hover:text-zinc-400 transition-colors">
                {post.title}
              </h3>
              <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2 leading-relaxed">
                {post.excerpt}
              </p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
