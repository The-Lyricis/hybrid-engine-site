import React from 'react';
import { motion } from 'motion/react';
import { Github, BookOpen } from 'lucide-react';
import hybridEngineImg from '../assets/hybrid-engine-cover.png';
import appIcon from '../assets/app_icon.png';
import { siteConfig } from '../config/siteConfig';

export function HeroSection() {
  return (
    <section id="hero" className="relative bg-gradient-to-br from-[#0A192F] via-[#1E3A5F] to-[#0A192F] text-white overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-3 py-1 bg-[#5B21B6]/20 border border-[#5B21B6]/30 rounded-full text-xs font-medium text-[#A78BFA] mb-6">
              C++ Game Engine Project
            </div>
            
            {/* Title with Icon */}
            <div className="flex items-center gap-4 mb-6">
              <img 
                src={appIcon} 
                alt="Hybrid Engine Icon" 
                className="w-16 h-16 lg:w-20 lg:h-20 rounded-xl shadow-lg shadow-[#5B21B6]/30 border border-[#5B21B6]/30"
              />
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hybrid Engine
              </h1>
            </div>
            
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
              A self-built C++ editor-driven 3D engine for learning modern engine architecture
            </p>

            {/* Key Points */}
            <div className="space-y-3 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#64FFDA] mt-2 flex-shrink-0" />
                <p className="text-gray-300">C++17 + OpenGL + ImGui + EnTT</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#64FFDA] mt-2 flex-shrink-0" />
                <p className="text-gray-300">Built from scratch, not a course framework</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#64FFDA] mt-2 flex-shrink-0" />
                <p className="text-gray-300">Designed for long-term open-source iteration</p>
              </div>
            </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#5B21B6] hover:bg-[#6D28D9] text-white rounded-lg font-medium transition-colors shadow-lg shadow-[#5B21B6]/20"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
              <a
                href={siteConfig.docsRoot}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 text-white rounded-lg font-medium transition-colors backdrop-blur-sm border border-white/20"
              >
                <BookOpen className="w-5 h-5" />
                Read Documentation
              </a>
            </div>
          </motion.div>

          {/* Right: Engine Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-xl overflow-hidden shadow-2xl border border-white/10">
              <img
                src={hybridEngineImg}
                alt="Hybrid Engine Editor"
                className="w-full h-auto"
              />
              
              {/* Overlay Glow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#5B21B6]/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-4 -right-4 bg-white text-gray-900 px-4 py-2 rounded-lg shadow-xl border border-gray-200">
              <p className="text-xs font-medium text-gray-500">Current Status</p>
              <p className="text-sm font-bold text-[#5B21B6]">Active Development</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
