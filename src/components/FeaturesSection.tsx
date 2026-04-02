import React from 'react';
import { motion } from 'motion/react';
import {
  Terminal,
  Zap,
  Palette,
  Box,
  Layout,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

interface Feature {
  category: string;
  items: FeatureItem[];
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
  color: string;
}

interface FeatureItem {
  name: string;
  what: string;
  why: string;
  status: 'done' | 'progress' | 'planned';
  next?: string;
}

const FEATURES: Feature[] = [
  {
    category: 'Core Foundation',
    icon: Terminal,
    color: '#5B21B6',
    items: [
      {
        name: 'Logging',
        what: 'Dual-channel logging system with console and file output for unified debugging',
        why: 'Unified debugging foundation for startup, resource loading, rendering, and editor behavior',
        status: 'done',
        next: 'Async logger, tag filtering, ImGui console integration',
      },
      {
        name: 'Event/Input',
        what: 'Abstracted event and input handling system',
        why: 'Decoupled communication between engine systems',
        status: 'done',
      },
      {
        name: 'Window & Main Loop',
        what: 'GLFW windowing with fixed timestep game loop',
        why: 'Platform abstraction and deterministic update cycle',
        status: 'done',
      },
    ],
  },
  {
    category: 'Rendering',
    icon: Palette,
    color: '#0066CC',
    items: [
      {
        name: 'OpenGL Backend',
        what: 'Modern abstraction layer for graphics primitives',
        why: 'Clean API separating graphics code from engine logic',
        status: 'done',
      },
      {
        name: 'Render Pipeline',
        what: 'Multi-pass rendering with flexible camera routing',
        why: 'Flexible rendering architecture for editor and runtime',
        status: 'progress',
        next: 'Shadow mapping, post-processing effects',
      },
      {
        name: 'GPU Picking',
        what: 'ID buffer-based object selection system',
        why: 'Precise scene interaction in editor',
        status: 'done',
      },
      {
        name: 'Gizmo & Debug Draw',
        what: 'Transform manipulation and visual debugging',
        why: 'Essential editor manipulation and visualization',
        status: 'done',
      },
    ],
  },
  {
    category: 'Scene & Assets',
    icon: Box,
    color: '#8B5CF6',
    items: [
      {
        name: 'ECS Scene System',
        what: 'EnTT-powered entity-component architecture',
        why: 'Flexible and performant scene composition',
        status: 'done',
      },
      {
        name: 'Scene Hierarchy',
        what: 'Parent-child relationships with optimized updates',
        why: 'Intuitive scene organization and efficient updates',
        status: 'done',
      },
      {
        name: 'Serialization',
        what: 'JSON-based scene persistence',
        why: 'Persistent project data and version control',
        status: 'done',
      },
      {
        name: 'Asset Pipeline',
        what: 'Complete asset management with metadata and caching',
        why: 'Organized asset management for scalable projects',
        status: 'progress',
        next: 'Hot reload, asset browser enhancements',
      },
    ],
  },
  {
    category: 'Editor',
    icon: Layout,
    color: '#06B6D4',
    items: [
      {
        name: 'Docking UI',
        what: 'ImGui-based customizable workspace',
        why: 'Flexible workspace customization',
        status: 'done',
      },
      {
        name: 'Editor Panels',
        what: 'Complete panel suite (Hierarchy, Inspector, Project, Scene, Game)',
        why: 'Complete editor workflow matching modern engines',
        status: 'done',
      },
      {
        name: 'Scene Interaction',
        what: 'Drag-drop instantiation and gizmo manipulation',
        why: 'Intuitive asset-to-scene workflow',
        status: 'done',
      },
      {
        name: 'Play/Edit Mode',
        what: 'Safe runtime testing with scene state isolation',
        why: 'Safe testing without affecting authoring state',
        status: 'done',
      },
    ],
  },
  {
    category: 'Simulation',
    icon: Zap,
    color: '#F59E0B',
    items: [
      {
        name: 'Rigidbody',
        what: 'Basic physics simulation foundation',
        why: 'Foundation for dynamic object behavior',
        status: 'progress',
      },
      {
        name: 'Collision',
        what: 'AABB collision with debug visualization',
        why: 'Essential gameplay mechanics support',
        status: 'progress',
        next: 'Collision resolution, constraint solving',
      },
    ],
  },
];

function getStatusIcon(status: FeatureItem['status']) {
  switch (status) {
    case 'done':
      return <CheckCircle2 className="h-4 w-4 text-green-600" />;
    case 'progress':
      return <Clock className="h-4 w-4 text-blue-600" />;
    case 'planned':
      return <AlertCircle className="h-4 w-4 text-gray-400" />;
    default:
      return null;
  }
}

function getStatusLabel(status: FeatureItem['status']) {
  switch (status) {
    case 'done':
      return 'Complete';
    case 'progress':
      return 'In Progress';
    case 'planned':
      return 'Planned';
    default:
      return '';
  }
}

function getStatusColor(status: FeatureItem['status']) {
  switch (status) {
    case 'done':
      return 'border-green-200 bg-green-100 text-green-700';
    case 'progress':
      return 'border-blue-200 bg-blue-100 text-blue-700';
    case 'planned':
      return 'border-gray-200 bg-gray-100 text-gray-600';
    default:
      return '';
  }
}

export function FeaturesSection() {
  return (
    <section id="features" className="bg-[#F5F7FA] py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Feature Highlights</h2>
          <div className="mb-4 h-1 w-16 rounded-full bg-[#5B21B6]" />
          <p className="max-w-3xl text-lg text-gray-600">
            A comprehensive set of systems forming a complete game engine.
            Each feature is designed for extensibility and production use.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature, categoryIndex) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div
                  className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <Icon className="h-7 w-7" style={{ color: feature.color }} />
                </div>

                <h3 className="mb-4 text-xl font-bold text-gray-900">{feature.category}</h3>

                <ul className="mb-4 space-y-3">
                  {feature.items.map((item) => (
                    <li key={item.name} className="rounded-lg bg-gray-50 p-3">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                          {getStatusIcon(item.status)}
                          <span>{item.name}</span>
                        </div>
                        <span
                          className={`rounded-full border px-2 py-1 text-[11px] font-medium ${getStatusColor(item.status)}`}
                        >
                          {getStatusLabel(item.status)}
                        </span>
                      </div>
                      <p className="mb-1 text-sm text-gray-700">{item.what}</p>
                      <p className="text-xs text-gray-500">{item.why}</p>
                      {item.next ? (
                        <p className="mt-2 text-xs text-[#5B21B6]">Next: {item.next}</p>
                      ) : null}
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href={siteConfig.docsRoot}
            className="inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-[#5B21B6] to-[#7C3AED] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
          >
            <span>View Detailed Feature Documentation</span>
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Explore in-depth explanations, code examples, and architecture details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
