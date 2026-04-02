import React from 'react';
import { motion } from 'motion/react';
import { Code2, Wrench, Package, Layers } from 'lucide-react';

const TECH_CATEGORIES = [
  {
    category: 'Core Language',
    icon: Code2,
    color: '#5B21B6',
    items: [
      { name: 'C++17', description: 'Modern C++ with standard library features' },
      { name: 'CMake 3.20+', description: 'Cross-platform build configuration' }
    ]
  },
  {
    category: 'Graphics',
    icon: Layers,
    color: '#0066CC',
    items: [
      { name: 'OpenGL 4.5', description: 'Core profile graphics API' },
      { name: 'GLFW', description: 'Window and input management' },
      { name: 'GLAD', description: 'OpenGL function loader' },
      { name: 'GLM', description: 'Mathematics library for graphics' },
      { name: 'stb_image', description: 'Image loading utility' }
    ]
  },
  {
    category: 'Editor & UI',
    icon: Wrench,
    color: '#8B5CF6',
    items: [
      { name: 'ImGui', description: 'Immediate mode GUI framework' },
      { name: 'ImGuizmo', description: '3D gizmo manipulation widget' }
    ]
  },
  {
    category: 'Engine Libraries',
    icon: Package,
    color: '#06B6D4',
    items: [
      { name: 'EnTT', description: 'Fast and reliable entity-component system' },
      { name: 'spdlog', description: 'Fast C++ logging library' },
      { name: 'nlohmann/json', description: 'Modern JSON for C++' }
    ]
  }
];

export function TechStackSection() {
  return (
    <section id="techstack" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <div className="w-16 h-1 bg-[#5B21B6] rounded-full mb-4" />
          <p className="text-lg text-gray-600 max-w-3xl">
            Built with modern C++ and industry-standard libraries, carefully selected for 
            performance, flexibility, and learning value.
          </p>
        </motion.div>

        {/* Tech Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {TECH_CATEGORIES.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={item.name} className="flex items-start gap-3 group">
                      <div 
                        className="w-2 h-2 rounded-full mt-2 flex-shrink-0 group-hover:scale-150 transition-transform"
                        style={{ backgroundColor: category.color }}
                      />
                      <div>
                        <p className="font-semibold text-gray-900">{item.name}</p>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Quick Start Guide */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-gradient-to-br from-[#1E3A5F] to-[#0A192F] rounded-xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6">Quick Start</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Clone', command: 'git clone <repo>' },
              { step: '2', title: 'Generate', command: 'cmake -B build' },
              { step: '3', title: 'Build', command: 'cmake --build build' },
              { step: '4', title: 'Run', command: './build/Editor' }
            ].map((item, index) => (
              <div key={item.step} className="relative pt-4 pl-4">
                <div className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-[#64FFDA] text-sm font-bold text-[#0A192F] shadow-lg shadow-[#64FFDA]/20">
                  {item.step}
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20 hover:bg-white/15 transition-colors">
                  <p className="font-semibold mb-2 text-[#64FFDA]">{item.title}</p>
                  <code className="text-xs text-gray-300 font-mono break-all">{item.command}</code>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
            <p className="text-sm text-yellow-200">
              <strong>Note:</strong> Requires C++17 compiler, CMake 3.20+, and OpenGL 4.5 support.
              Tested on Windows (MSVC), macOS (Clang), and Linux (GCC).
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
