import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import DocsLayout from '../DocsLayout';
import { siteConfig } from '../../config/siteConfig';

export default function ArchitectureDocsPage() {
  return (
    <DocsLayout currentPath={`${siteConfig.docsRoot}/architecture`}>
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
          <span className="text-gray-900">Architecture</span>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-900">System Architecture</h1>
        <p className="text-lg leading-relaxed text-gray-600">
          Detailed overview of Hybrid Engine&apos;s modular architecture, system interactions,
          and data flow patterns.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="prose prose-lg max-w-none"
      >
        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Overview</h2>
          <p className="leading-relaxed text-gray-700">
            Hybrid Engine is built on a three-layer architecture that separates concerns
            between the editor application, runtime systems, and graphics backend. This
            design provides flexibility, maintainability, and clear boundaries between
            different engine subsystems.
          </p>
        </div>

        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Core Layers</h2>

          <div className="space-y-6">
            <div className="border-l-4 border-[#5B21B6] pl-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">1. Editor Application Layer</h3>
              <p className="mb-4 text-gray-700">
                The editor layer provides the user-facing interface and tools for content creation.
                Built on ImGui, it offers a flexible docking system and real-time scene interaction.
              </p>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="mb-2 text-sm font-semibold text-gray-700">Key Components:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- <strong>Panel System:</strong> Hierarchy, Inspector, Project Browser, Scene/Game Views</li>
                  <li>- <strong>Gizmo System:</strong> Transform manipulation with translate, rotate, scale modes</li>
                  <li>- <strong>Selection System:</strong> GPU-based object picking with visual feedback</li>
                  <li>- <strong>State Management:</strong> Play/Edit mode with scene state isolation</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-[#0066CC] pl-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">2. Runtime Systems Layer</h3>
              <p className="mb-4 text-gray-700">
                Core engine systems that handle scene management, gameplay logic, and simulation.
                Independent of the editor, these systems can run standalone in a built application.
              </p>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="mb-2 text-sm font-semibold text-gray-700">Key Components:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- <strong>Scene System:</strong> EnTT-based ECS with entity lifecycle management</li>
                  <li>- <strong>Physics:</strong> Rigidbody dynamics and collision detection (AABB)</li>
                  <li>- <strong>Main Loop:</strong> Fixed timestep update with variable rendering</li>
                  <li>- <strong>Event System:</strong> Decoupled messaging between systems</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-[#8B5CF6] pl-6">
              <h3 className="mb-3 text-xl font-bold text-gray-900">3. Graphics Backend Layer</h3>
              <p className="mb-4 text-gray-700">
                Low-level rendering abstraction that wraps OpenGL primitives. Provides a clean
                API for high-level rendering code without direct GL calls.
              </p>
              <div className="rounded-lg bg-gray-50 p-4">
                <p className="mb-2 text-sm font-semibold text-gray-700">Key Components:</p>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>- <strong>Render Pipeline:</strong> Multi-pass rendering with flexible camera routing</li>
                  <li>- <strong>Resource Management:</strong> Buffers, textures, shaders, framebuffers</li>
                  <li>- <strong>Abstraction Layer:</strong> Platform-independent rendering API</li>
                  <li>- <strong>Debug Tools:</strong> Wireframe, normals, bounding boxes visualization</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Data Flow & Communication</h2>

          <div className="space-y-4">
            <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#5B21B6] font-bold text-white">
                1
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">Input Capture</h4>
                <p className="text-sm text-gray-700">
                  GLFW captures raw input events -&gt; Input system converts to engine events -&gt;
                  Event bus distributes to subscribers (Editor panels, runtime systems).
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0066CC] font-bold text-white">
                2
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">Scene Updates</h4>
                <p className="text-sm text-gray-700">
                  Main loop ticks systems in order -&gt; Physics updates rigidbodies -&gt;
                  Transform hierarchy propagates dirty flags -&gt; Render system prepares draw calls.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-lg bg-gray-50 p-4">
              <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#8B5CF6] font-bold text-white">
                3
              </div>
              <div>
                <h4 className="mb-1 font-bold text-gray-900">Rendering</h4>
                <p className="text-sm text-gray-700">
                  Scene View renders to FBO -&gt; Game View renders to separate FBO -&gt;
                  Editor UI composites views -&gt; Final present to screen.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-gray-200 bg-white p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Module Dependencies</h2>
          <div className="rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 p-6">
            <pre className="text-sm leading-relaxed text-gray-800">
{`Core/
|- Application          (No dependencies)
|- Logging              (No dependencies)
|- Events               (No dependencies)
\\- Input                (Events)

Runtime/
|- Scene                (Core, EnTT)
|- Physics              (Scene)
|- AssetSystem          (Core)
\\- Serialization        (Scene)

Rendering/
|- OpenGL Abstractions  (Core)
|- RenderPipeline       (Scene, OpenGL)
\\- DebugRenderer        (RenderPipeline)

Editor/
|- EditorApplication    (Runtime, Rendering, ImGui)
|- Panels               (Scene, AssetSystem)
\\- Gizmos               (Rendering, Input)`}
            </pre>
          </div>
        </div>

        <div className="mb-8 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <div className="flex gap-4">
            <AlertCircle className="mt-1 h-6 w-6 flex-shrink-0 text-blue-600" />
            <div>
              <h3 className="mb-2 font-bold text-gray-900">Design Principles</h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>- <strong>Separation of Concerns:</strong> Clear boundaries between editor and runtime</li>
                <li>- <strong>Low Coupling:</strong> Systems communicate through events and interfaces</li>
                <li>- <strong>High Cohesion:</strong> Related functionality grouped into focused modules</li>
                <li>- <strong>Testability:</strong> Systems can be tested independently with mock dependencies</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="mb-4 text-lg font-bold text-gray-900">Related Documentation</h3>
          <div className="space-y-2">
            <a
              href={`${siteConfig.docsRoot}/architecture/rendering`}
              className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
            >
              <span className="text-gray-700 transition-colors group-hover:text-[#5B21B6]">
                Rendering Pipeline Details
              </span>
              <ArrowRight className="ml-auto h-4 w-4 text-gray-400 transition-colors group-hover:text-[#5B21B6]" />
            </a>
            <a
              href={`${siteConfig.docsRoot}/architecture/ecs`}
              className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
            >
              <span className="text-gray-700 transition-colors group-hover:text-[#5B21B6]">
                ECS & Scene System
              </span>
              <ArrowRight className="ml-auto h-4 w-4 text-gray-400 transition-colors group-hover:text-[#5B21B6]" />
            </a>
            <a
              href={`${siteConfig.docsRoot}/features/editor`}
              className="group flex items-center gap-3 rounded-lg p-3 transition-colors hover:bg-gray-50"
            >
              <span className="text-gray-700 transition-colors group-hover:text-[#5B21B6]">
                Editor System Implementation
              </span>
              <ArrowRight className="ml-auto h-4 w-4 text-gray-400 transition-colors group-hover:text-[#5B21B6]" />
            </a>
          </div>
        </div>
      </motion.div>
    </DocsLayout>
  );
}
