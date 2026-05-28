"use client";
import { Skeleton } from "@/components/ui/skeleton";
import { usePosts, useUsers } from "@/hooks/useApi";
import { Activity, FileText, TrendingUp, Users } from "lucide-react";

export default function DashboardPage() {
  const { data: users, isLoading: usersLoading } = useUsers();
  const { data: posts, isLoading: postsLoading } = usePosts();

  const stats = [
    {
      label: "Total Users",
      value: users?.length ?? 0,
      icon: Users,
      loading: usersLoading,
    },
    {
      label: "Total Posts",
      value: posts?.length ?? 0,
      icon: FileText,
      loading: postsLoading,
    },
    {
      label: "Active Today",
      value: 24,
      icon: Activity,
      loading: false,
    },
    {
      label: "Growth",
      value: "12%",
      icon: TrendingUp,
      loading: false,
    },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Dashboard</h1>
        <p className="text-sm text-muted-foreground">Welcome back!</p>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.label} className="glass-card space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">{stat.label}</p>
                <div className="glass p-2 rounded-lg">
                  <Icon className="h-4 w-4" />
                </div>
              </div>
              {stat.loading ? <Skeleton className="h-8 w-16" /> : <p className="text-3xl font-bold gradient-text">{stat.value}</p>}
            </div>
          );
        })}
      </div>

      {/* Recent users */}
      <div className="glass-card space-y-4">
        <h2 className="font-semibold">Recent Users</h2>
        {usersLoading ? (
          <div className="space-y-3">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-12 w-full" />
            ))}
          </div>
        ) : (
          <div className="space-y-2">
            {users?.slice(0, 5).map((user) => (
              <div key={user.id} className="glass flex items-center justify-between px-4 py-3 rounded-xl">
                <div>
                  <p className="text-sm font-medium">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
                <p className="text-xs text-muted-foreground">{user.username}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
