"use client";

import { Card, CardContent } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

interface Activity {
  id: number;
  user: string;
  avatar: string;
  action: string;
  time: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <Card variant="premium-outer" className="h-full">
      <CardContent variant="premium-inner" className="p-6">
        <div className="flex flex-row items-center justify-between pb-6 border-b border-black/5 dark:border-white/5 mb-6">
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">Activity Feed</h3>
          <button className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 p-1.5 rounded-lg">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>
        
        <div className="space-y-6 relative">
          <div className="absolute left-[1.125rem] top-2 bottom-2 w-px bg-black/10 dark:bg-white/10" />
          
          {activities.map((activity) => (
            <div key={activity.id} className="relative flex gap-5 group">
              <div className="relative z-10">
                <div className="w-9 h-9 rounded-full p-0.5 bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 group-hover:border-purple-500/50 transition-colors shadow-sm">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img 
                    src={activity.avatar} 
                    alt={activity.user}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              </div>
              
              <div className="flex-1 pb-1 pt-1.5">
                <p className="text-sm text-zinc-600 dark:text-zinc-300">
                  <span className="font-bold text-zinc-900 dark:text-zinc-100">{activity.user}</span>{' '}
                  {activity.action}
                </p>
                <p className="text-xs font-medium text-zinc-400 dark:text-zinc-500 mt-1.5">
                  {activity.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
