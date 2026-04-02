import React from 'react';
import { motion } from 'motion/react';
import { Github, BookOpen, MessageSquare, Star, ExternalLink, User } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function CTASection() {
  return (
    <section className="bg-gradient-to-br from-[#5B21B6] to-[#7C3AED] py-20 text-white">
      <div className="mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold">Dive Deeper</h2>
          <p className="text-xl text-purple-100">
            Explore comprehensive documentation or contribute to the project.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <motion.a
            href={siteConfig.docsRoot}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="group relative overflow-hidden rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/15"
          >
            <div className="absolute right-4 top-4 rounded-full bg-[#64FFDA] px-3 py-1 text-xs font-bold text-[#0A0E27]">
              RECOMMENDED
            </div>

            <BookOpen className="mb-4 h-12 w-12 transition-transform group-hover:scale-110" />
            <h3 className="mb-2 text-2xl font-bold">Technical Documentation</h3>
            <p className="mb-4 text-purple-100">
              Detailed system architecture, API references, implementation guides, and code examples.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-[#64FFDA]">
              Browse Full Docs <ExternalLink className="h-4 w-4" />
            </div>
          </motion.a>

          <motion.a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="group rounded-xl border border-white/20 bg-white/10 p-8 backdrop-blur-sm transition-all hover:bg-white/15"
          >
            <Github className="mb-4 h-12 w-12 transition-transform group-hover:scale-110" />
            <h3 className="mb-2 text-2xl font-bold">Source Code</h3>
            <p className="mb-4 text-purple-100">
              Browse the codebase, fork the project, or submit pull requests.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-[#64FFDA]">
              Visit Repository <ExternalLink className="h-4 w-4" />
            </div>
          </motion.a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium transition-colors hover:bg-white/20"
          >
            <Star className="h-5 w-5" />
            Star on GitHub
          </a>
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium transition-colors hover:bg-white/20"
          >
            <MessageSquare className="h-5 w-5" />
            Discussions
          </a>
          <a
            href={siteConfig.profileUrl}
            className="group inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium transition-all hover:border-white hover:bg-white hover:text-[#5B21B6]"
          >
            <User className="h-5 w-5" />
            <span className="group-hover:hidden">Contact Author</span>
            <span className="hidden group-hover:inline">View Profile -&gt;</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 text-center text-sm text-purple-200"
        >
          <p>Built with C++17, OpenGL, ImGui, and EnTT - Licensed under MIT.</p>
        </motion.div>
      </div>
    </section>
  );
}
