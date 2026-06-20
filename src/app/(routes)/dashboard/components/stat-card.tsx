"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  color: string;
  data: any[];
}

export function StatCard({ title, value, change, isPositive, color, data }: StatCardProps) {
  return (
    <Card variant="glass" className="relative overflow-hidden group">
      {/* Glow effect based on color */}
      <div 
        className="absolute -inset-0.5 opacity-20 group-hover:opacity-40 transition-opacity blur-xl rounded-2xl pointer-events-none"
        style={{ backgroundColor: color }}
      />
      
      <CardContent className="p-6 relative z-10 flex flex-col justify-between h-full">
        <div className="flex items-start justify-between mb-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <span className={`text-xs font-semibold px-2 py-1 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {change}
          </span>
        </div>
        
        <div className="flex items-end justify-between">
          <h3 className="text-3xl font-bold tracking-tight">{value}</h3>
          
          <div className="h-12 w-24">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id={`gradient-${title.replace(/\s+/g, '-')}`} x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={color} stopOpacity={0.5}/>
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
                  isAnimationActive={false}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
