"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

interface Project {
  name: string;
  status: string;
  progress: number;
  color: string;
}

interface ProjectProgressProps {
  projects: Project[];
}

export function ProjectProgress({ projects }: ProjectProgressProps) {
  return (
    <Card variant="premium-outer" className="h-full">
      <CardContent variant="premium-inner" className="p-6">
        <div className="flex flex-row items-center justify-between pb-6">
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Project Progress</h3>
          <button className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 p-1.5 rounded-lg">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider pb-3 border-b border-black/5 dark:border-white/5">
            <span>Project</span>
            <span>Status</span>
          </div>
          
          <div className="space-y-6">
            {projects.map((project) => (
              <div key={project.name} className="flex items-center justify-between group">
                <div className="flex-1 pr-6">
                  <div className="flex items-center justify-between mb-2.5">
                    <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{project.name}</p>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{project.progress}%</span>
                  </div>
                  <div className="h-2 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden shadow-[inset_0_1px_2px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_1px_2px_rgba(0,0,0,0.3)]">
                    <div 
                      className={`h-full bg-gradient-to-r ${project.color} rounded-full relative transition-all duration-1000 ease-out`}
                      style={{ width: `${project.progress}%` }}
                    >
                      <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]" />
                    </div>
                  </div>
                </div>
                <div className="w-24 text-right">
                  <span className="inline-block text-xs font-medium text-zinc-600 dark:text-zinc-300 bg-black/5 dark:bg-white/10 px-2 py-1 rounded-md">
                    {project.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
