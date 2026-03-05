'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { ExternalLink, Github } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: "EcoSphere Dashboard",
    description: "A real-time environmental monitoring dashboard built with Next.js and D3.js.",
    tags: ["Next.js", "TypeScript", "D3.js", "Tailwind"],
    image: "https://picsum.photos/seed/project1/800/500",
    link: "#",
    github: "#"
  },
  {
    id: 2,
    title: "Lumina E-Commerce",
    description: "A minimalist luxury e-commerce platform with seamless transitions and Stripe integration.",
    tags: ["React", "Framer Motion", "Stripe", "Node.js"],
    image: "https://picsum.photos/seed/project2/800/500",
    link: "#",
    github: "#"
  },
  {
    id: 3,
    title: "Nexus Social App",
    description: "A privacy-focused social network with end-to-end encryption and decentralized storage.",
    tags: ["Web3", "React Native", "Firebase", "Solidity"],
    image: "https://picsum.photos/seed/project3/800/500",
    link: "#",
    github: "#"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-5xl mx-auto">
      <div className="mb-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
        <p className="text-zinc-600 dark:text-zinc-400">A selection of my recent work and personal experiments.</p>
      </div>

      <div className="grid grid-cols-1 gap-20">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center`}
          >
            <div className="w-full md:w-1/2 group relative overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-800 aspect-[16/10]">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                <a href={project.link} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                  <ExternalLink size={20} />
                </a>
                <a href={project.github} className="p-3 bg-white text-black rounded-full hover:scale-110 transition-transform">
                  <Github size={20} />
                </a>
              </div>
            </div>

            <div className="w-full md:w-1/2 space-y-6">
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 border border-zinc-200 dark:border-zinc-800 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-display text-3xl font-bold">{project.title}</h3>
              <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed text-lg">
                {project.description}
              </p>
              <div className="pt-4">
                <a href={project.link} className="inline-flex items-center gap-2 font-medium hover:gap-4 transition-all">
                  View Project Details <ExternalLink size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
