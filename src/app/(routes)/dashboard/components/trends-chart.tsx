"use client";

import { Card, CardContent } from "@/components/ui/card";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface TrendsChartProps {
  data: Array<Record<string, string | number>>;
}

const CustomTooltip = ({ active, payload, label }: { active?: boolean; payload?: Array<{ color: string; name: string; value: number }>; label?: string }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white/90 dark:bg-[#0a0a0a]/90 px-4 py-3 rounded-xl border border-black/10 dark:border-white/10 shadow-xl backdrop-blur-xl">
        <p className="text-sm font-semibold mb-3 text-zinc-900 dark:text-zinc-100">{label}</p>
        <div className="space-y-2">
          {payload.map((entry: { color: string; name: string; value: number }, index: number) => (
            <div key={index} className="flex items-center gap-3 text-sm">
              <span 
                className="w-2.5 h-2.5 rounded-full" 
                style={{ backgroundColor: entry.color, boxShadow: `0 0 8px ${entry.color}80` }}
              />
              <span className="text-zinc-500 dark:text-zinc-400 min-w-[80px]">{entry.name}</span>
              <span className="font-bold text-zinc-900 dark:text-zinc-50">{entry.value.toLocaleString()}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return null;
};

export function TrendsChart({ data }: TrendsChartProps) {
  return (
    <Card variant="premium-outer" className="h-full group">
      <CardContent variant="premium-inner" className="p-6 relative z-10 flex flex-col h-full overflow-hidden">
        <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/5 via-transparent to-blue-500/5 rounded-2xl blur-3xl opacity-50 pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 z-10">
          <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-2 sm:mb-0">Sales & Engagement Trends</h3>
          <div className="flex items-center gap-4 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
              Sales
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
              Engagement
            </div>
          </div>
        </div>
        
        <div className="flex-1 relative z-10 w-full min-h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="currentColor" className="opacity-10 dark:opacity-10" />
              <XAxis 
                dataKey="day" 
                stroke="currentColor" 
                className="text-xs font-medium opacity-40 dark:opacity-30" 
                tickLine={false} 
                axisLine={false} 
                dy={10}
              />
              <YAxis 
                stroke="currentColor" 
                className="text-xs font-medium opacity-40 dark:opacity-30" 
                tickLine={false} 
                axisLine={false}
                tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'currentColor', strokeWidth: 1, strokeDasharray: '4 4', className: 'opacity-10' }} />
              
              {/* Sales Line */}
              <Line 
                type="monotone" 
                dataKey="sales" 
                name="Sales"
                stroke="#a855f7" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "#a855f7", stroke: "#fff", strokeWidth: 2 }}
                style={{ filter: "drop-shadow(0px 8px 16px rgba(168, 85, 247, 0.4))" }}
                animationDuration={2000}
              />
              
              {/* Engagement Line */}
              <Line 
                type="monotone" 
                dataKey="engagement" 
                name="Engagement"
                stroke="#3b82f6" 
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 6, fill: "#3b82f6", stroke: "#fff", strokeWidth: 2 }}
                style={{ filter: "drop-shadow(0px 8px 16px rgba(59, 130, 246, 0.4))" }}
                animationDuration={2000}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
