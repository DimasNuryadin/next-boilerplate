"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  color: string;
  data: Array<Record<string, string | number>>;
}

export function StatCard({ title, value, change, isPositive, color, data }: StatCardProps) {
  return (
    <Card variant="premium-outer" className="h-full">
      <CardContent variant="premium-inner" className="p-6 relative z-10 flex flex-col justify-between h-full overflow-hidden">
        {/* Glow effect based on color */}
        <div 
          className="absolute -top-10 -right-10 w-40 h-40 opacity-10 dark:opacity-20 blur-3xl rounded-full pointer-events-none"
          style={{ backgroundColor: color }}
        />
        
        <div className="flex items-start justify-between mb-4">
          <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">{title}</p>
          <span className={`text-xs font-semibold px-2.5 py-1 rounded-full bg-black/5 dark:bg-white/10 border border-black/5 dark:border-white/10 ${isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
            {change}
          </span>
        </div>
        
        <div className="flex items-end justify-between">
          <h3 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">{value}</h3>
          
          <div className="h-12 w-28">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id={`gradient-${title.replace(/\s+/g, '-')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.4}/>
                    <stop offset="95%" stopColor={color} stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <Area 
                  type="monotone" 
                  dataKey="value" 
                  stroke={color} 
                  strokeWidth={2}
                  fillOpacity={1} 
                  fill={`url(#gradient-${title.replace(/\s+/g, '-')})`} 
                  isAnimationActive={true}
                  animationDuration={1500}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
