"use client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { useUsers } from "@/hooks/useApi";
import { Search } from "lucide-react";
import { useState } from "react";

export default function UsersPage() {
  const { data: users, isLoading } = useUsers();
  const [search, setSearch] = useState("");

  const filtered = users?.filter((user) => user.name?.toLowerCase().includes(search.toLowerCase()) || user.email?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Users</h1>
        <p className="text-sm text-muted-foreground">Manage and view all users</p>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search users..." className="glass border-black/20 dark:border-white/20 pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* Table */}
      <div className="glass-card p-0 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-black/10 dark:border-white/10">
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Name</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Email</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Username</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Website</th>
                <th className="text-left px-6 py-4 text-sm font-medium text-muted-foreground">Status</th>
              </tr>
            </thead>
            <tbody>
              {isLoading ? (
                Array.from({ length: 5 }).map((_, i) => (
                  <tr key={i} className="border-b border-black/10 dark:border-white/10">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <td key={j} className="px-6 py-4">
                        <Skeleton className="h-4 w-full" />
                      </td>
                    ))}
                  </tr>
                ))
              ) : filtered?.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-muted-foreground text-sm">
                    No users found
                  </td>
                </tr>
              ) : (
                filtered?.map((user) => (
                  <tr key={user.id} className="border-b border-black/10 dark:border-white/10 hover:glass transition-all">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium">{user.name}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-muted-foreground">@{user.username}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-muted-foreground">{user.website}</p>
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="default">Active</Badge>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
