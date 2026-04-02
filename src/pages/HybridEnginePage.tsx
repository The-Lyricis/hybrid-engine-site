import React, { useState, useEffect } from 'react';
import { HeroSection } from '../components/HeroSection';
import { ProjectIntro } from '../components/ProjectIntro';
import { FeaturesSection } from '../components/FeaturesSection';
import { ArchitectureSection } from '../components/ArchitectureSection';
import { TechStackSection } from '../components/TechStackSection';
import { RoadmapSection } from '../components/RoadmapSection';
import { Sidebar } from '../components/Sidebar';
import { CTASection } from '../components/CTASection';

export default function HybridEnginePage() {
  const [activeSection, setActiveSection] = useState('hero');

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'intro', 'features', 'architecture', 'techstack', 'roadmap'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F5F7FA]">
      {/* Sidebar Navigation */}
      <Sidebar activeSection={activeSection} />

      {/* Main Content */}
      <div className="lg:ml-64">
        <HeroSection />
        <ProjectIntro />
        <FeaturesSection />
        <ArchitectureSection />
        <TechStackSection />
        <RoadmapSection />
        <CTASection />
      </div>
    </div>
  );
}
