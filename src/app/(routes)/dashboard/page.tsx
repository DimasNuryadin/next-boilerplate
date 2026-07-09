"use client";

import { ActivityFeed } from "./components/activity-feed";
import { mockData } from "./components/mock-data";
import { ProjectProgress } from "./components/project-progress";
import { StatCard } from "./components/stat-card";
import { TrendsChart } from "./components/trends-chart";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: [0.32, 0.72, 0, 1] as const,
    },
  }),
};

export default function DashboardPage() {
  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-10">
      {/* Header */}
      <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUpVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">Performance Overview</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Track your key metrics and project progress.</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="premium-outline" className="flex items-center gap-2 h-10 px-4 rounded-xl">
            Aug 1–31, 2024
            <ChevronDown className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
      </motion.div>

      {/* Stats Row */}
      <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUpVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {mockData.stats.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </motion.div>

      {/* Main Chart */}
      <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUpVariants} className="h-[400px]">
        <TrendsChart data={mockData.trends} />
      </motion.div>

      {/* Bottom Row */}
      <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUpVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProjectProgress projects={mockData.projects} />
        <ActivityFeed activities={mockData.activities} />
      </motion.div>
    </div>
  );
}
