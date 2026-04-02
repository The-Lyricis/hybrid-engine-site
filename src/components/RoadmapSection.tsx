import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Clock, Circle, AlertTriangle } from 'lucide-react';

interface RoadmapItem {
  phase: string;
  status: 'done' | 'progress' | 'planned';
  items: string[];
  color: string;
}

const ROADMAP: RoadmapItem[] = [
  {
    phase: 'Foundation Complete',
    status: 'done',
    color: '#10B981',
    items: [
      'Logging system',
      'Event and input handling',
      'Window management and main loop',
      'OpenGL rendering baseline',
      'ECS scene structure',
      'Scene serialization',
      'Editor panel framework',
      'GPU picking and selection',
      'Early physics integration'
    ]
  },
  {
    phase: 'Active Development',
    status: 'progress',
    color: '#0066CC',
    items: [
      'Render pass refinement',
      'Material and texture workflow improvements',
      'Editor polish and UX enhancements',
      'Physics stability and collision resolution',
      'Asset browser enhancements',
      'Performance profiling tools'
    ]
  },
  {
    phase: 'Near-term Goals',
    status: 'planned',
    color: '#8B5CF6',
    items: [
      'Shadow mapping and lighting',
      'Post-processing pipeline',
      'Audio system integration',
      'Scripting layer (Lua/C# consideration)',
      'Hot reload for assets and code',
      'Built-in profiler and debugging tools',
      'Improved serialization format'
    ]
  },
  {
    phase: 'Long-term Vision',
    status: 'planned',
    color: '#6B7280',
    items: [
      'Advanced rendering (PBR, IBL, global illumination)',
      'Animation system',
      'Particle system',
      'Networking foundation',
      'Plugin architecture',
      'Production-ready export pipeline',
      'Comprehensive documentation and tutorials'
    ]
  }
];

export function RoadmapSection() {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'done':
        return <CheckCircle2 className="w-6 h-6" />;
      case 'progress':
        return <Clock className="w-6 h-6" />;
      case 'planned':
        return <Circle className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'done':
        return 'Completed';
      case 'progress':
        return 'In Progress';
      case 'planned':
        return 'Planned';
      default:
        return '';
    }
  };

  return (
    <section id="roadmap" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Development Roadmap</h2>
          <div className="w-16 h-1 bg-[#5B21B6] rounded-full mb-4" />
          <p className="text-lg text-gray-600 max-w-3xl">
            Hybrid Engine is actively evolving. Here's where we've been, where we are, 
            and where we're headed next.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-green-500 via-blue-500 to-gray-300" />

          {/* Roadmap Phases */}
          <div className="space-y-12">
            {ROADMAP.map((phase, phaseIndex) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: phaseIndex * 0.1 }}
                className="relative"
              >
                {/* Status Icon */}
                <div className="hidden md:flex absolute left-0 w-16 h-16 rounded-full items-center justify-center bg-white border-4 z-10"
                  style={{ borderColor: phase.color }}
                >
                  <div style={{ color: phase.color }}>
                    {getStatusIcon(phase.status)}
                  </div>
                </div>

                {/* Content Card */}
                <div className="md:ml-24">
                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="md:hidden" style={{ color: phase.color }}>
                        {getStatusIcon(phase.status)}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                        <p className="text-sm font-medium" style={{ color: phase.color }}>
                          {getStatusLabel(phase.status)}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2">
                      {phase.items.map((item, itemIndex) => (
                        <div
                          key={itemIndex}
                          className="flex items-start gap-2 text-gray-700 py-1"
                        >
                          <div 
                            className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                            style={{ backgroundColor: phase.color }}
                          />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Limitations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 bg-amber-50 border border-amber-200 rounded-xl p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0">
              <AlertTriangle className="w-6 h-6 text-amber-600" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Current Limitations</h3>
              <div className="grid md:grid-cols-2 gap-3 text-gray-700">
                <div className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Shadow mapping and post-processing incomplete</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Physics still in early-stage development</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Editor UX needs refinement</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Audio system not yet integrated</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Scripting layer to be determined</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-amber-600">•</span>
                  <span>Performance profiling tools needed</span>
                </div>
              </div>
              <p className="mt-4 text-sm text-gray-600">
                These limitations are openly documented to maintain realistic expectations and guide future development priorities.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
