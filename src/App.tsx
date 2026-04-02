import React from "react";
import HybridEnginePage from "./pages/HybridEnginePage";
import DocsIndexPage from "./docs/DocsIndexPage";
import DocsLayout from "./docs/DocsLayout";
import ArchitectureDocsPage from "./docs/pages/ArchitectureDocsPage";
import PlaceholderDocsPage from "./docs/PlaceholderDocsPage";

type PlaceholderConfig = {
  title: string;
  category: string;
  description: string;
};

const PLACEHOLDER_DOCS: Record<string, PlaceholderConfig> = {
  "/docs/introduction": {
    title: "Introduction",
    category: "Getting Started",
    description:
      "This page will explain the project goals, architecture philosophy, and intended learning outcomes for Hybrid Engine.",
  },
  "/docs/quick-start": {
    title: "Quick Start Guide",
    category: "Getting Started",
    description:
      "This page will provide a practical quick-start flow for cloning, configuring, building, and running the engine.",
  },
  "/docs/building": {
    title: "Building from Source",
    category: "Getting Started",
    description:
      "This page will cover dependencies, CMake generation, platform notes, and common build issues.",
  },
  "/docs/architecture/rendering": {
    title: "Rendering Pipeline",
    category: "Architecture",
    description:
      "This page will document the rendering flow, scene/game view routing, framebuffers, and future rendering milestones.",
  },
  "/docs/architecture/ecs": {
    title: "ECS & Scene System",
    category: "Architecture",
    description:
      "This page will explain the scene model, EnTT integration, hierarchy relationships, and serialization boundaries.",
  },
  "/docs/architecture/assets": {
    title: "Asset Management",
    category: "Architecture",
    description:
      "This page will document the registry, metadata strategy, import flow, and long-term asset pipeline direction.",
  },
  "/docs/features/editor": {
    title: "Editor System",
    category: "Features & Systems",
    description:
      "This page will detail the editor panel model, scene interaction loop, docking layout, and gizmo integration.",
  },
  "/docs/features/physics": {
    title: "Physics System",
    category: "Features & Systems",
    description:
      "This page will describe the current rigidbody and collision implementation and outline future solver work.",
  },
  "/docs/features/input": {
    title: "Input & Events",
    category: "Features & Systems",
    description:
      "This page will explain the event dispatch model, input abstraction layer, and editor/runtime interaction flow.",
  },
  "/docs/features/serialization": {
    title: "Serialization",
    category: "Features & Systems",
    description:
      "This page will cover scene persistence, JSON layout, save/load lifecycle, and versioning considerations.",
  },
  "/docs/api/core": {
    title: "Core APIs",
    category: "API Reference",
    description:
      "This page will contain reference material for application lifecycle, logging, events, and foundational systems.",
  },
  "/docs/api/graphics": {
    title: "Graphics APIs",
    category: "API Reference",
    description:
      "This page will cover the rendering abstraction, GPU resource interfaces, and usage patterns.",
  },
  "/docs/api/scene": {
    title: "Scene APIs",
    category: "API Reference",
    description:
      "This page will document scene management, entities, components, and scene traversal helpers.",
  },
};

function NotFoundPage() {
  return (
    <DocsLayout currentPath="">
      <div className="py-24 text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Page Not Found</h1>
        <p className="text-lg text-gray-600">
          The requested page does not exist in this project site yet.
        </p>
        <a
          href="/"
          className="inline-flex items-center rounded-lg bg-[#5B21B6] px-5 py-3 font-medium text-white transition-colors hover:bg-[#6D28D9]"
        >
          Back to Overview
        </a>
      </div>
    </DocsLayout>
  );
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/+$/, "") || "/";

  if (pathname === "/") {
    return <HybridEnginePage />;
  }

  if (pathname === "/docs") {
    return <DocsIndexPage />;
  }

  if (pathname === "/docs/architecture") {
    return <ArchitectureDocsPage />;
  }

  const placeholder = PLACEHOLDER_DOCS[pathname];
  if (placeholder) {
    return (
      <PlaceholderDocsPage
        title={placeholder.title}
        category={placeholder.category}
        description={placeholder.description}
        currentPath={pathname}
      />
    );
  }

  return <NotFoundPage />;
}
