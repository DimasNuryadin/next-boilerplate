"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";

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
    <Card variant="glass" className="h-full">
      <CardHeader className="flex flex-row items-center justify-between pb-4">
        <CardTitle className="text-lg font-bold">Activity Feed</CardTitle>
        <button className="text-muted-foreground hover:text-foreground transition-colors">
          <MoreHorizontal className="h-5 w-5" />
        </button>
      </CardHeader>
      
      <CardContent>
        <div className="space-y-6">
          {activities.map((activity, index) => (
            <div key={activity.id} className="relative flex gap-4">
              {/* Connecting line */}
              {index !== activities.length - 1 && (
                <div className="absolute left-4 top-10 bottom-[-1.5rem] w-[1px] bg-black/10 dark:bg-white/10" />
              )}
              
              <div className="relative z-10">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src={activity.avatar} 
                  alt={activity.user}
                  className="w-8 h-8 rounded-full border border-black/10 dark:border-white/10 ring-2 ring-background"
                />
              </div>
              
              <div className="flex-1 pb-1">
                <p className="text-sm">
                  <span className="font-semibold">{activity.user}</span>{' '}
                  <span className="text-muted-foreground">{activity.action}</span>
                </p>
                <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
