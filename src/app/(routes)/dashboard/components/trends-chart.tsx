"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface TrendsChartProps {
  data: any[];
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="glass px-4 py-3 rounded-xl border-black/10 dark:border-white/10 shadow-xl backdrop-blur-xl">
        <p className="text-sm font-medium mb-2">{label}</p>
        {payload.map((entry: any, index: number) => (
          <div key={index} className="flex items-center gap-2 text-sm">
            <span 
              className="w-2 h-2 rounded-full" 
              style={{ backgroundColor: entry.color }}
            />
            <span className="text-muted-foreground">{entry.name}:</span>
            <span className="font-bold">{entry.value.toLocaleString()}</span>
          </div>
        ))}
      </div>
    );
  }
  return null;
};

export function TrendsChart({ data }: TrendsChartProps) {
  return (
    <Card variant="glass" className="h-full relative group">
      <div className="absolute -inset-1 bg-gradient-to-br from-purple-500/10 via-transparent to-blue-500/10 rounded-2xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity pointer-events-none" />
      
      <CardHeader className="relative z-10 flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-lg font-bold">Sales & Engagement Trends</CardTitle>
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7]" />
            Sales
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
            Engagement
          </div>
        </div>
      </CardHeader>
      
      <CardContent className="relative z-10 pt-4 pb-2 h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={true} stroke="currentColor" className="opacity-10 dark:opacity-20" />
            <XAxis 
              dataKey="day" 
              stroke="currentColor" 
              className="text-xs opacity-50" 
              tickLine={false} 
              axisLine={false} 
              dy={10}
            />
            <YAxis 
              stroke="currentColor" 
              className="text-xs opacity-50" 
              tickLine={false} 
              axisLine={false}
              tickFormatter={(value) => value >= 1000 ? `${(value / 1000).toFixed(0)}k` : value}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'currentColor', strokeWidth: 1, strokeDasharray: '3 3', className: 'opacity-20' }} />
            
            {/* Sales Line */}
            <Line 
              type="monotone" 
              dataKey="sales" 
              name="Sales"
              stroke="#a855f7" 
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6, fill: "#a855f7", stroke: "#fff", strokeWidth: 2 }}
              style={{ filter: "drop-shadow(0px 4px 8px rgba(168, 85, 247, 0.4))" }}
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
              style={{ filter: "drop-shadow(0px 4px 8px rgba(59, 130, 246, 0.4))" }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}
