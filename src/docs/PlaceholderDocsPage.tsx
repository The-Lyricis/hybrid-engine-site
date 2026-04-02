import React from 'react';
import { motion } from 'motion/react';
import { Construction, ArrowLeft, Home } from 'lucide-react';
import DocsLayout from './DocsLayout';
import { siteConfig } from '../config/siteConfig';

interface PlaceholderPageProps {
  title: string;
  category: string;
  description: string;
  currentPath: string;
}

export default function PlaceholderDocsPage({
  title,
  category,
  description,
  currentPath,
}: PlaceholderPageProps) {
  return (
    <DocsLayout currentPath={currentPath}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <div className="mb-4 flex items-center gap-2 text-sm text-gray-500">
          <a href={siteConfig.docsRoot} className="hover:text-[#5B21B6]">
            Docs
          </a>
          <span>/</span>
          <span className="text-gray-700">{category}</span>
          <span>/</span>
          <span className="text-gray-900">{title}</span>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center justify-center py-20"
      >
        <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-yellow-100">
          <Construction className="h-10 w-10 text-yellow-600" />
        </div>

        <h1 className="mb-4 text-3xl font-bold text-gray-900">{title}</h1>
        <p className="mb-8 max-w-md text-center text-lg text-gray-600">{description}</p>

        <div className="mb-8 max-w-2xl rounded-xl border border-yellow-200 bg-yellow-50 p-6">
          <h3 className="mb-2 font-bold text-gray-900">Documentation In Progress</h3>
          <p className="text-sm leading-relaxed text-gray-700">
            This page is currently being written. Check back soon for detailed documentation,
            code examples, and implementation guides. In the meantime, you can explore the
            source code on GitHub or check out other completed documentation sections.
          </p>
        </div>

        <div className="flex gap-4">
          <a
            href={siteConfig.docsRoot}
            className="inline-flex items-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-medium text-white transition-colors hover:bg-[#7C3AED]"
          >
            <Home className="h-5 w-5" />
            <span>Back to Docs Home</span>
          </a>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 font-medium text-gray-700 transition-colors hover:bg-gray-50"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Project Overview</span>
          </a>
        </div>
      </motion.div>
    </DocsLayout>
  );
}
