import React from 'react';
import { motion } from 'motion/react';
import { Target, Lightbulb, Rocket, Users } from 'lucide-react';

export function ProjectIntro() {
  return (
    <section id="intro" className="py-20 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What is Hybrid Engine?</h2>
          <div className="w-16 h-1 bg-[#5B21B6] rounded-full" />
        </motion.div>

        {/* Main Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="prose prose-lg max-w-none mb-16"
        >
          <p className="text-xl text-gray-700 leading-relaxed mb-6">
            Hybrid Engine is not a one-time course assignment—it's an ongoing open-source 3D engine project 
            emphasizing <strong>from-scratch construction</strong>, <strong>self-directed architecture</strong>, 
            <strong>editor-driven workflows</strong>, and <strong>long-term research value</strong>.
          </p>
          
          <p className="text-lg text-gray-600 leading-relaxed">
            Currently equipped with logging, event/input systems, window management, OpenGL rendering, 
            scene/entity handling, serialization, editor panels, asset workflows, picking, gizmo controls, 
            and early physics—forming a complete <strong>editor-driven workflow</strong> that goes beyond 
            scattered experiments.
          </p>
        </motion.div>

        {/* Four Core Questions */}
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              icon: Target,
              title: 'What is it?',
              description: 'A C++17-based 3D engine designed for learning modern engine architecture from the ground up',
              color: '#5B21B6'
            },
            {
              icon: Lightbulb,
              title: 'What can it do?',
              description: 'Complete editor workflow: scene management, asset pipeline, rendering, physics, and real-time editing',
              color: '#0066CC'
            },
            {
              icon: Rocket,
              title: 'How is it built?',
              description: 'Modular architecture integrating host application, runtime systems, editor services, and graphics backend',
              color: '#8B5CF6'
            },
            {
              icon: Users,
              title: 'Where is it going?',
              description: 'Continuous evolution towards advanced rendering, scripting, audio, and production-ready tooling',
              color: '#06B6D4'
            }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * (index + 2) }}
                className="bg-gray-50 border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all group"
              >
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <Icon className="w-6 h-6" style={{ color: item.color }} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Why Build It */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 bg-gradient-to-br from-[#5B21B6]/5 to-[#0066CC]/5 border border-[#5B21B6]/20 rounded-xl p-8"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Build from Scratch?</h3>
          <ul className="space-y-3">
            {[
              'Understand how modern engine subsystems integrate together',
              'Master the boundaries between runtime and editor architectures',
              'Create a sustainable, self-owned engineering foundation for future experiments',
              'Build a portfolio piece that demonstrates deep technical understanding'
            ].map((reason, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#5B21B6] mt-2 flex-shrink-0" />
                <p className="text-gray-700">{reason}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
