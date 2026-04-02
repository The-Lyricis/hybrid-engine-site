import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Github, BookOpen } from 'lucide-react';
import previewPrimary from '../assets/preview/hybrid-engine_preview_1.png';
import previewSecondary from '../assets/preview/hybrid-engine_preview_2.png';
import appIcon from '../assets/app_icon.png';
import { siteConfig } from '../config/siteConfig';

const ENGINE_SCREENSHOTS = [
  { id: 1, src: previewPrimary },
  { id: 2, src: previewSecondary },
];

export function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered || ENGINE_SCREENSHOTS.length < 2) {
      return;
    }

    const timer = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % ENGINE_SCREENSHOTS.length);
    }, 30000);

    return () => window.clearInterval(timer);
  }, [isHovered]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % ENGINE_SCREENSHOTS.length);
  };

  const nextIndex = (currentIndex + 1) % ENGINE_SCREENSHOTS.length;
  const currentScreenshot = ENGINE_SCREENSHOTS[currentIndex];
  const nextScreenshot = ENGINE_SCREENSHOTS[nextIndex];

  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-gradient-to-br from-[#0A192F] via-[#1E3A5F] to-[#0A192F] text-white"
    >
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6 inline-block rounded-full border border-[#5B21B6]/30 bg-[#5B21B6]/20 px-3 py-1 text-xs font-medium text-[#A78BFA]">
              C++ Game Engine Project
            </div>

            <div className="mb-6 flex items-center gap-4">
              <img
                src={appIcon}
                alt="Hybrid Engine Icon"
                className="h-16 w-16 rounded-xl border border-[#5B21B6]/30 shadow-lg shadow-[#5B21B6]/30 lg:h-20 lg:w-20"
              />
              <h1 className="text-5xl font-bold leading-tight lg:text-6xl">Hybrid Engine</h1>
            </div>

            <p className="mb-8 text-xl leading-relaxed text-gray-300 lg:text-2xl">
              A self-built C++ editor-driven 3D engine for learning modern engine architecture
            </p>

            <div className="mb-8 space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#64FFDA]" />
                <p className="text-gray-300">C++17 + OpenGL + ImGui + EnTT</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#64FFDA]" />
                <p className="text-gray-300">Built from scratch, not a course framework</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#64FFDA]" />
                <p className="text-gray-300">Designed for long-term open-source iteration</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={siteConfig.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#5B21B6] px-6 py-3 font-medium text-white shadow-lg shadow-[#5B21B6]/20 transition-colors hover:bg-[#6D28D9]"
              >
                <Github className="h-5 w-5" />
                View on GitHub
              </a>
              <a
                href={siteConfig.docsRoot}
                className="inline-flex items-center gap-2 rounded-lg border border-white/20 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-colors hover:bg-white/20"
              >
                <BookOpen className="h-5 w-5" />
                Read Documentation
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-video w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <motion.button
              type="button"
              aria-label="Show next preview"
              initial={{ opacity: 0, scale: 0.9, y: -28, x: 18 }}
              animate={{
                opacity: isHovered ? 1 : 0.62,
                scale: isHovered ? 0.98 : 0.9,
                y: -28,
                x: 18,
              }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 cursor-pointer text-left"
              onClick={goToNext}
            >
              <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-black shadow-xl">
                <img
                  src={nextScreenshot.src}
                  alt="Next engine preview"
                  className={`h-full w-full object-cover transition-all duration-300 ${
                    isHovered ? 'opacity-90 blur-0' : 'opacity-50'
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
                <div className="absolute bottom-5 left-5 rounded-full border border-white/15 bg-black/35 px-3 py-1 text-xs font-medium tracking-[0.2em] text-[#E6F1FF]/85 backdrop-blur-sm">
                  NEXT PREVIEW
                </div>
              </div>
            </motion.button>

            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreenshot.id}
                initial={{ opacity: 0, scale: 0.82, y: 20 }}
                animate={{
                  opacity: isHovered ? 0.18 : 1,
                  scale: 1,
                  y: 0,
                }}
                exit={{ opacity: 0, scale: 0.86, x: -110 }}
                transition={{ duration: 0.45 }}
                className={`absolute inset-0 ${isHovered ? 'pointer-events-none' : ''}`}
              >
                <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                  <img
                    src={currentScreenshot.src}
                    alt={`Hybrid Engine preview ${currentScreenshot.id}`}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#5B21B6]/35 via-transparent to-transparent" />
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="absolute -bottom-4 -right-4 z-10 rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-900 shadow-xl">
              <p className="text-xs font-medium text-gray-500">Current Status</p>
              <p className="text-sm font-bold text-[#5B21B6]">Active Development</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
