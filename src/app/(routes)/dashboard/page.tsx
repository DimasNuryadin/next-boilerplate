"use client";

import { ActivityFeed } from "./components/activity-feed";
import { mockData } from "./components/mock-data";
import { ProjectProgress } from "./components/project-progress";
import { StatCard } from "./components/stat-card";
import { TrendsChart } from "./components/trends-chart";
import { Bell, ChevronDown } from "lucide-react";
import Image from "next/image";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl font-bold">Performance Overview</h1>
        
        <div className="flex items-center gap-4">
          <button className="glass flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10 transition-colors">
            Aug 1–31, 2024
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {mockData.stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      {/* Main Chart */}
      <div className="h-[380px]">
        <TrendsChart data={mockData.trends} />
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectProgress projects={mockData.projects} />
        <ActivityFeed activities={mockData.activities} />
      </div>
    </div>
  );
}
