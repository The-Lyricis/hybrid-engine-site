import React from 'react';
import { Home, FileText, Package, Network, Code, MapPin, BookOpen, Github } from 'lucide-react';
import appIcon from '../assets/app_icon.png';
import { siteConfig } from '../config/siteConfig';

interface SidebarProps {
  activeSection: string;
}

const NAV_ITEMS = [
  { id: 'hero', label: 'Overview', icon: Home },
  { id: 'intro', label: 'Introduction', icon: FileText },
  { id: 'features', label: 'Features', icon: Package },
  { id: 'architecture', label: 'Architecture', icon: Network },
  { id: 'techstack', label: 'Tech Stack', icon: Code },
  { id: 'roadmap', label: 'Roadmap', icon: MapPin },
];

export function Sidebar({ activeSection }: SidebarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({ top: elementPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="hidden lg:block fixed left-0 top-0 h-screen w-64 bg-white border-r border-gray-200 z-40">
      <div className="flex flex-col h-full">
        {/* Project Header with Icon */}
        <div className="px-6 py-8 border-b border-gray-200">
          <div className="flex items-center gap-3 mb-2">
            <img 
              src={appIcon} 
              alt="Hybrid Engine" 
              className="w-10 h-10 rounded-lg shadow-sm border border-gray-200"
            />
            <h2 className="text-xl font-bold text-gray-900">Hybrid Engine</h2>
          </div>
          <p className="mt-1 text-xs text-gray-500 ml-[52px]">Game Engine Project</p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all
                      ${isActive 
                        ? 'bg-[#5B21B6] text-white shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4 flex-shrink-0" />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Documentation Link */}
          <div className="mt-6 pt-6 border-t border-gray-200">
            <a
              href={siteConfig.docsRoot}
              className="flex w-full items-center gap-3 rounded-lg bg-[#5B21B6] px-4 py-3 text-sm font-medium text-white shadow-sm transition-all hover:bg-[#6D28D9]"
              style={{ color: '#FFFFFF' }}
            >
              <BookOpen className="h-4 w-4 flex-shrink-0 text-white" />
              <span className="text-white">Full Documentation</span>
            </a>
          </div>
        </nav>

        {/* Footer: Author + GitHub */}
        <div className="px-6 py-4 border-t border-gray-200">
          {/* GitHub Link */}
          <a
            href={siteConfig.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 transition-colors"
          >
            <Github className="w-4 h-4" />
            <span>View on GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}
