import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Home,
  Network,
  Layers,
  Code2,
  ChevronDown,
  Github,
  ArrowLeft,
  Search,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface DocSection {
  id: string;
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  pages: {
    id: string;
    title: string;
    path: string;
  }[];
}

const DOC_SECTIONS: DocSection[] = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    icon: Home,
    pages: [
      { id: 'introduction', title: 'Introduction', path: `${siteConfig.docsRoot}/introduction` },
      { id: 'quick-start', title: 'Quick Start Guide', path: `${siteConfig.docsRoot}/quick-start` },
      { id: 'building', title: 'Building from Source', path: `${siteConfig.docsRoot}/building` },
    ],
  },
  {
    id: 'architecture',
    title: 'Architecture',
    icon: Network,
    pages: [
      { id: 'overview', title: 'System Overview', path: `${siteConfig.docsRoot}/architecture` },
      { id: 'rendering', title: 'Rendering Pipeline', path: `${siteConfig.docsRoot}/architecture/rendering` },
      { id: 'ecs', title: 'ECS & Scene System', path: `${siteConfig.docsRoot}/architecture/ecs` },
      { id: 'assets', title: 'Asset Management', path: `${siteConfig.docsRoot}/architecture/assets` },
    ],
  },
  {
    id: 'features',
    title: 'Features & Systems',
    icon: Layers,
    pages: [
      { id: 'editor', title: 'Editor System', path: `${siteConfig.docsRoot}/features/editor` },
      { id: 'physics', title: 'Physics System', path: `${siteConfig.docsRoot}/features/physics` },
      { id: 'input', title: 'Input & Events', path: `${siteConfig.docsRoot}/features/input` },
      { id: 'serialization', title: 'Serialization', path: `${siteConfig.docsRoot}/features/serialization` },
    ],
  },
  {
    id: 'api',
    title: 'API Reference',
    icon: Code2,
    pages: [
      { id: 'core', title: 'Core APIs', path: `${siteConfig.docsRoot}/api/core` },
      { id: 'graphics', title: 'Graphics APIs', path: `${siteConfig.docsRoot}/api/graphics` },
      { id: 'scene', title: 'Scene APIs', path: `${siteConfig.docsRoot}/api/scene` },
    ],
  },
];

interface DocsLayoutProps {
  children: React.ReactNode;
  currentPath?: string;
}

export default function DocsLayout({ children, currentPath = '' }: DocsLayoutProps) {
  const [expandedSections, setExpandedSections] = useState<string[]>(['getting-started']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId) ? prev.filter((id) => id !== sectionId) : [...prev, sectionId],
    );
  };

  return (
    <div className="min-h-screen bg-[#F5F7FA]">
      <header className="fixed left-0 right-0 top-0 z-50 h-16 border-b border-gray-200 bg-white">
        <div className="flex h-full items-center justify-between px-6">
          <div className="flex items-center gap-6">
            <a
              href="/"
              className="flex items-center gap-2 text-gray-700 transition-colors hover:text-[#5B21B6]"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="font-medium">Back to Overview</span>
            </a>
            <div className="h-6 w-px bg-gray-300" />
            <h1 className="text-lg font-bold text-gray-900">Hybrid Engine Docs</h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search docs..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-64 rounded-lg border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#5B21B6]"
              />
            </div>

            <a
              href={siteConfig.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-gray-600 transition-colors hover:text-gray-900"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        <aside className="fixed bottom-0 left-0 top-16 w-72 overflow-y-auto border-r border-gray-200 bg-white">
          <nav className="p-6">
            <div className="space-y-6">
              {DOC_SECTIONS.map((section) => {
                const Icon = section.icon;
                const isExpanded = expandedSections.includes(section.id);

                const pages = section.pages.filter((page) => {
                  if (!searchQuery.trim()) {
                    return true;
                  }

                  return page.title.toLowerCase().includes(searchQuery.toLowerCase());
                });

                return (
                  <div key={section.id}>
                    <button
                      onClick={() => toggleSection(section.id)}
                      className="mb-2 flex w-full items-center justify-between text-sm font-semibold text-gray-900 transition-colors hover:text-[#5B21B6]"
                    >
                      <div className="flex items-center gap-2">
                        <Icon className="h-4 w-4" />
                        <span>{section.title}</span>
                      </div>
                      <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown className="h-4 w-4 text-gray-400" />
                      </motion.div>
                    </button>

                    {isExpanded ? (
                      <ul className="ml-2 space-y-1 border-l border-gray-200 pl-4">
                        {pages.map((page) => {
                          const isActive = currentPath === page.path;

                          return (
                            <li key={page.id}>
                              <a
                                href={page.path}
                                className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                                  isActive
                                    ? 'bg-[#5B21B6]/10 font-medium text-[#5B21B6]'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                }`}
                              >
                                {page.title}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </nav>
        </aside>

        <main className="ml-72 flex-1 p-12">
          <div className="mx-auto max-w-4xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
