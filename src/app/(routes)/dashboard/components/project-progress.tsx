"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card variant="glass" className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-bold">Project Progress</CardTitle>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </CardHeader>
      
      <CardContent className="space-y-6">
        <div className="flex items-center justify-between text-xs font-medium text-muted-foreground uppercase tracking-wider pb-2 border-b border-black/5 dark:border-white/5">
          <span>Project</span>
          <span>Status</span>
        </div>
        
        <div className="space-y-5">
          {projects.map((project) => (
            <div key={project.name} className="flex items-center justify-between group">
              <div className="flex-1">
                <p className="text-sm font-medium mb-2">{project.name}</p>
                <div className="h-1.5 w-full bg-black/5 dark:bg-white/10 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${project.color} rounded-full relative`}
                    style={{ width: `${project.progress}%` }}
                  >
                    <div className="absolute inset-0 bg-white/20 animate-pulse" />
                  </div>
                </div>
              </div>
              <div className="w-28 text-right pl-4">
                <span className="text-sm text-muted-foreground">{project.status}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
