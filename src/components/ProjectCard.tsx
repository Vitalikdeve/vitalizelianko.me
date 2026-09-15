'use client';

import React, { useState } from 'react';
import { 
  Terminal, 
  Layers, 
  Code2, 
  ExternalLink, 
  Github, 
  FileText, 
  CheckCircle2, 
  Cpu, 
  Copy, 
  Check 
} from 'lucide-react';
import { Project } from '@/lib/db';

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'architecture' | 'code'>('overview');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (!project.code_snippet) return;
    navigator.clipboard.writeText(project.code_snippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-col justify-between rounded-3xl border border-white/[0.08] bg-[#090a0e] p-6 sm:p-8 transition-all duration-200 hover:border-white/[0.18] hover:bg-[#0e0f15]">
      <div>
        {/* Top Header */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-300">
              {project.category}
            </span>
            <span className="text-xs text-zinc-500">
              {project.role}
            </span>
          </div>

          {/* Apple Segmented Control */}
          <div className="inline-flex rounded-xl border border-white/10 bg-black/60 p-1 text-xs">
            <button
              onClick={() => setActiveTab('overview')}
              className={`rounded-lg px-3 py-1 font-medium transition-all ${
                activeTab === 'overview'
                  ? 'bg-white text-black font-semibold shadow-sm'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              Overview
            </button>
            {project.architecture_summary && (
              <button
                onClick={() => setActiveTab('architecture')}
                className={`rounded-lg px-3 py-1 font-medium transition-all ${
                  activeTab === 'architecture'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Architecture
              </button>
            )}
            {project.code_snippet && (
              <button
                onClick={() => setActiveTab('code')}
                className={`rounded-lg px-3 py-1 font-medium transition-all flex items-center gap-1 ${
                  activeTab === 'code'
                    ? 'bg-white text-black font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Code2 className="h-3 w-3" />
                <span>Code</span>
              </button>
            )}
          </div>
        </div>

        {/* Title and Tagline */}
        <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-white mt-1">
          {project.title}
        </h3>
        <p className="text-sm font-medium text-zinc-400 mt-1.5 leading-snug">
          {project.tagline}
        </p>

        {/* Tab Content */}
        <div className="mt-5 min-h-[120px]">
          {activeTab === 'overview' && (
            <div className="space-y-4">
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {project.description}
              </p>
              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tech_stack?.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-md border border-white/[0.06] bg-white/[0.02] px-2.5 py-1 text-xs text-zinc-400 font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'architecture' && project.architecture_summary && (
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4 space-y-2">
              <div className="flex items-center gap-2 text-xs text-zinc-300 font-medium uppercase tracking-wider">
                <Cpu className="h-3.5 w-3.5 text-zinc-400" />
                <span>System Architecture Blueprint</span>
              </div>
              <p className="text-sm text-zinc-300 leading-relaxed font-normal">
                {project.architecture_summary}
              </p>
            </div>
          )}

          {activeTab === 'code' && project.code_snippet && (
            <div className="relative rounded-2xl border border-white/10 bg-black p-4 font-mono text-xs overflow-x-auto">
              <button
                onClick={handleCopy}
                className="absolute top-3 right-3 flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[11px] text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                title="Copy code"
              >
                {copied ? (
                  <>
                    <Check className="h-3 w-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3 w-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
              <pre className="text-zinc-300 pr-16 leading-relaxed">
                <code>{project.code_snippet}</code>
              </pre>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="mt-8 flex flex-wrap items-center gap-3 pt-4 border-t border-white/[0.06]">
        {project.demo_url && (
          <a
            href={project.demo_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-black hover:bg-zinc-200 transition-colors shadow-sm"
          >
            <span>Live Platform</span>
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}

        {project.case_study_url && (
          <a
            href={project.case_study_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-4 py-2 text-xs font-medium text-zinc-200 hover:bg-white/[0.08] transition-colors"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>Architecture Whitepaper</span>
            <ExternalLink className="h-3.5 w-3.5 text-zinc-400" />
          </a>
        )}

        {project.github_url && (
          <a
            href={project.github_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-colors ml-auto"
          >
            <Github className="h-3.5 w-3.5" />
            <span>Repository</span>
          </a>
        )}
      </div>
    </div>
  );
}
