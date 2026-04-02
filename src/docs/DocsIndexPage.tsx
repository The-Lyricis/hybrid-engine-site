import React from 'react';
import { motion } from 'motion/react';
import {
  Home,
  Network,
  Layers,
  Code2,
  BookOpen,
  Zap,
  Terminal,
  FileText,
  ArrowRight,
} from 'lucide-react';
import DocsLayout from './DocsLayout';
import { siteConfig } from '../config/siteConfig';

const QUICK_LINKS = [
  {
    title: 'Getting Started',
    description: 'Learn how to build and run Hybrid Engine',
    icon: Home,
    color: '#5B21B6',
    href: `${siteConfig.docsRoot}/introduction`,
  },
  {
    title: 'System Architecture',
    description: 'Understand the core design and structure',
    icon: Network,
    color: '#0066CC',
    href: `${siteConfig.docsRoot}/architecture`,
  },
  {
    title: 'Feature Documentation',
    description: 'Explore detailed system implementations',
    icon: Layers,
    color: '#8B5CF6',
    href: `${siteConfig.docsRoot}/features/editor`,
  },
  {
    title: 'API Reference',
    description: 'Complete API documentation and examples',
    icon: Code2,
    color: '#06B6D4',
    href: `${siteConfig.docsRoot}/api/core`,
  },
];

const POPULAR_TOPICS = [
  { title: 'Building from Source', href: `${siteConfig.docsRoot}/building`, icon: Terminal },
  { title: 'ECS & Scene System', href: `${siteConfig.docsRoot}/architecture/ecs`, icon: Layers },
  { title: 'Rendering Pipeline', href: `${siteConfig.docsRoot}/architecture/rendering`, icon: Zap },
  { title: 'Editor System', href: `${siteConfig.docsRoot}/features/editor`, icon: FileText },
];

export default function DocsIndexPage() {
  return (
    <DocsLayout currentPath={siteConfig.docsRoot}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#5B21B6] to-[#7C3AED]">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900">Documentation</h1>
        </div>
        <p className="text-xl leading-relaxed text-gray-600">
          Complete technical documentation for Hybrid Engine. Learn about architecture,
          systems, APIs, and how to extend the engine for your needs.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Quick Access</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {QUICK_LINKS.map((link, index) => {
            const Icon = link.icon;

            return (
              <motion.a
                key={link.title}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                className="group rounded-xl border border-gray-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg"
                  style={{ backgroundColor: `${link.color}15` }}
                >
                  <Icon className="h-6 w-6" style={{ color: link.color }} />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900 transition-colors group-hover:text-[#5B21B6]">
                  {link.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{link.description}</p>
                <div className="flex items-center gap-2 text-sm font-medium text-[#5B21B6]">
                  <span>Read more</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </motion.a>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-16"
      >
        <h2 className="mb-6 text-2xl font-bold text-gray-900">Popular Topics</h2>
        <div className="divide-y divide-gray-200 rounded-xl border border-gray-200 bg-white">
          {POPULAR_TOPICS.map((topic) => {
            const Icon = topic.icon;

            return (
              <a
                key={topic.title}
                href={topic.href}
                className="group flex items-center gap-4 p-5 transition-colors hover:bg-gray-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 transition-colors group-hover:bg-[#5B21B6]/10">
                  <Icon className="h-5 w-5 text-gray-600 transition-colors group-hover:text-[#5B21B6]" />
                </div>
                <span className="flex-1 font-medium text-gray-900 transition-colors group-hover:text-[#5B21B6]">
                  {topic.title}
                </span>
                <ArrowRight className="h-5 w-5 text-gray-400 transition-all group-hover:translate-x-1 group-hover:text-[#5B21B6]" />
              </a>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="rounded-xl border border-blue-200 bg-blue-50 p-6"
      >
        <div className="flex gap-4">
          <div className="flex-shrink-0">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <BookOpen className="h-5 w-5 text-blue-600" />
            </div>
          </div>
          <div>
            <h3 className="mb-2 font-bold text-gray-900">Documentation Status</h3>
            <p className="text-sm leading-relaxed text-gray-700">
              This documentation is actively being developed. Some sections may be incomplete
              or under construction. Check back regularly for updates, or contribute to the
              documentation on GitHub.
            </p>
          </div>
        </div>
      </motion.div>
    </DocsLayout>
  );
}
