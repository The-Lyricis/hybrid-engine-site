import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Box } from 'lucide-react';
import { siteConfig } from '../config/siteConfig';

export function ArchitectureSection() {
  return (
    <section id="architecture" className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="mb-4 text-4xl font-bold text-gray-900">Architecture Overview</h2>
          <div className="mb-4 h-1 w-16 rounded-full bg-[#5B21B6]" />
          <p className="max-w-3xl text-lg text-gray-600">
            Hybrid Engine follows a modular, layered architecture that cleanly separates
            runtime systems, editor services, and graphics backends.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-12"
        >
          <div className="rounded-xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-8">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg border-2 border-[#5B21B6] bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#5B21B6]/10">
                  <Box className="h-5 w-5 text-[#5B21B6]" />
                </div>
                <h4 className="mb-2 font-bold text-gray-900">Editor Application</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- ImGui Interface</li>
                  <li>- Panel Management</li>
                  <li>- Scene Interaction</li>
                  <li>- Asset Browser</li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-[#0066CC] bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#0066CC]/10">
                  <Box className="h-5 w-5 text-[#0066CC]" />
                </div>
                <h4 className="mb-2 font-bold text-gray-900">Runtime Systems</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- Scene Management</li>
                  <li>- ECS Framework</li>
                  <li>- Physics Simulation</li>
                  <li>- Main Loop</li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-[#8B5CF6] bg-white p-6 shadow-sm">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#8B5CF6]/10">
                  <Box className="h-5 w-5 text-[#8B5CF6]" />
                </div>
                <h4 className="mb-2 font-bold text-gray-900">Graphics Backend</h4>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- OpenGL 4.5</li>
                  <li>- Render Pipeline</li>
                  <li>- Resource Management</li>
                  <li>- Shader System</li>
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-lg border border-[#06B6D4]/30 bg-gradient-to-r from-[#06B6D4]/10 to-[#06B6D4]/5 p-6">
              <h4 className="mb-3 font-bold text-gray-900">Shared Infrastructure</h4>
              <div className="grid grid-cols-2 gap-3 text-sm text-gray-700 md:grid-cols-4">
                <div>- Asset Registry</div>
                <div>- Event System</div>
                <div>- Logging</div>
                <div>- Serialization</div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="mb-6 text-2xl font-bold text-gray-900">Design Principles</h3>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h4 className="mb-2 font-bold text-gray-900">Modularity</h4>
              <p className="text-sm text-gray-600">
                Clear separation of concerns with independent subsystems that communicate through
                well-defined interfaces.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h4 className="mb-2 font-bold text-gray-900">Extensibility</h4>
              <p className="text-sm text-gray-600">
                Plugin-based architecture allowing custom systems, components, and editor tools.
              </p>
            </div>
            <div className="rounded-lg border border-gray-200 bg-gray-50 p-6">
              <h4 className="mb-2 font-bold text-gray-900">Performance</h4>
              <p className="text-sm text-gray-600">
                Data-oriented ECS design with efficient memory access patterns and minimal overhead.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <a
            href={`${siteConfig.docsRoot}/architecture`}
            className="inline-flex items-center gap-3 rounded-xl border-2 border-[#5B21B6] bg-white px-8 py-4 text-lg font-semibold text-[#5B21B6] transition-all hover:bg-[#5B21B6] hover:text-white"
          >
            <span>Explore Detailed Architecture</span>
            <ArrowRight className="h-5 w-5" />
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Deep dive into system diagrams, data flow, and implementation details.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
