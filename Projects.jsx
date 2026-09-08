import React from "react";
import { useState } from "react";
import { ExternalLink, ArrowRight } from "lucide-react";
import { PROJECTS } from "../assets/assets";

// lucide-react dropped brand/logo icons (Github, Twitter, etc.) in newer
// versions, so the GitHub mark is a small inline SVG instead.

const GithubIcon = (props) => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.09 3.29 9.4 7.86 10.93.57.1.78-.25.78-.55 0-.27-.01-1.16-.02-2.11-3.2.7-3.87-1.36-3.87-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.19 1.78 1.19 1.03 1.77 2.71 1.26 3.37.96.1-.75.41-1.26.74-1.55-2.55-.29-5.24-1.28-5.24-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.83 1.18 3.09 0 4.42-2.69 5.39-5.25 5.68.42.36.79 1.07.79 2.16 0 1.56-.01 2.82-.01 3.2 0 .31.2.66.79.55A10.52 10.52 0 0 0 23.5 12c0-6.27-5.23-11.5-11.5-11.5Z" />
    </svg>
  );
}

// ---- data -----------------------------------------------------------------

const FILTERS = ["All", "MERN", "AI / ML", "GEN-AI", "Python"];

const BADGE_TONES = {
  sky: "bg-sky-500 text-white",
  emerald: "bg-emerald-500 text-white",
  violet: "bg-violet-600 text-white",
};

// ---- building blocks --------------------------------------------------------

function FilterPill({ label, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full border px-5 py-2 text-sm font-medium transition ${
        active
          ? "border-violet-500 bg-violet-600 text-white"
          : "border-slate-700 text-slate-300 hover:border-slate-500 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}

function ProjectCard({ project }) {
  const handleGithubClick = () => {
    if (project.repo) {
      window.open(project.repo, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/40">
      <div className="relative h-44 w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-full w-full object-cover"
        />

        <span
          className={`absolute right-3 top-3 rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide ${
            BADGE_TONES[project.badge.tone]
          }`}
        >
          {project.badge.label}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-lg font-semibold text-white">
          {project.title}
        </h3>

        <p className="mt-2 text-sm leading-relaxed text-slate-400">
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs font-medium text-slate-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-3 pt-1">
          <button
            type="button"
            aria-label={`View ${project.title} source on GitHub`}
            onClick={handleGithubClick}
            disabled={!project.repo}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-700 text-slate-300 transition hover:border-slate-500 hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            <GithubIcon
              className="h-4 w-4"
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

// ---- section ----------------------------------------------------------------

export default function ProjectsSection() {
  const [active, setActive] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredProjects =
    active === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === active);

  // Show only 6 projects initially
  const visibleProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 8);

  const handleFilterChange = (filter) => {
    setActive(filter);
    setShowAll(false);
  };

  return (
    <section className="w-full bg-[#05050a] px-6 py-20 lg:px-16"  id="projects">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="flex flex-col gap-6 border-t border-slate-800 pt-10 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[23px] font-semibold tracking-wide text-violet-500">
              FEATURED WORK
            </p>

            <h2 className="mt-2 text-3xl font-bold text-white sm:text-4xl">
              Selected Projects
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {FILTERS.map((f) => (
              <FilterPill
                key={f}
                label={f}
                active={active === f}
                onClick={() => handleFilterChange(f)}
              />
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </div>

        {/* View All / Show Less */}
        {filteredProjects.length > 8 && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-200 transition hover:border-slate-500 hover:text-white"
            >
              {showAll ? "Show Less" : "View All Projects"}

              <ArrowRight
                className={`h-4 w-4 transition-transform duration-300 ${
                  showAll ? "-rotate-90" : "rotate-0"
                }`}
              />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}