"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useUsers } from "@/hooks/useApi";
import { MoreHorizontal, Search, UserPlus } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";

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

export default function UsersPage() {
  const { data: users, isLoading } = useUsers();
  const [search, setSearch] = useState("");

  const filtered = users?.filter((user) => user.name?.toLowerCase().includes(search.toLowerCase()) || user.email?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-10">
      {/* Header */}
      <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUpVariants} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">User Management</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">View, search and manage all users in your organization.</p>
        </div>

        <Button variant="premium" className="w-full sm:w-auto">
          <UserPlus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </motion.div>

      {/* Toolbar / Search */}
      <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUpVariants}>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
          <Input
            placeholder="Search by name or email..."
            className="pl-9 h-11 bg-white/50 dark:bg-black/50 border-black/10 dark:border-white/10 rounded-xl shadow-sm focus-visible:ring-black/20 dark:focus-visible:ring-white/20 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </motion.div>

      {/* Main Table Card */}
      <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUpVariants}>
        <Card variant="premium-outer">
          <CardContent variant="premium-inner" className="p-0 sm:p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow className="hover:bg-transparent border-0">
                    <TableHead className="w-[300px] h-12 font-medium text-zinc-600 dark:text-zinc-400 px-6">User</TableHead>
                    <TableHead className="h-12 font-medium text-zinc-600 dark:text-zinc-400">Username</TableHead>
                    <TableHead className="h-12 font-medium text-zinc-600 dark:text-zinc-400">Website</TableHead>
                    <TableHead className="h-12 font-medium text-zinc-600 dark:text-zinc-400">Status</TableHead>
                    <TableHead className="h-12 w-[80px]"></TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    Array.from({ length: 6 }).map((_, i) => (
                      <TableRow key={i} className="border-b border-black/5 dark:border-white/5">
                        <TableCell className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            <Skeleton className="h-10 w-10 rounded-full" />
                            <div className="space-y-2">
                              <Skeleton className="h-4 w-[150px]" />
                              <Skeleton className="h-3 w-[100px]" />
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[100px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-4 w-[120px]" />
                        </TableCell>
                        <TableCell>
                          <Skeleton className="h-6 w-[80px] rounded-full" />
                        </TableCell>
                        <TableCell></TableCell>
                      </TableRow>
                    ))
                  ) : filtered?.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="h-32 text-center text-zinc-500 dark:text-zinc-400 text-sm">
                        No users found matching &quot;{search}&quot;
                      </TableCell>
                    </TableRow>
                  ) : (
                    filtered?.map((user) => (
                      <TableRow key={user.id} className="group border-b border-black/5 dark:border-white/5 hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer">
                        <TableCell className="px-6 py-4">
                          <div className="flex items-center gap-3">
                            {/* Avatar Placeholder */}
                            <div className="h-10 w-10 shrink-0 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 dark:from-purple-500/30 dark:to-blue-500/30 flex items-center justify-center border border-black/5 dark:border-white/10">
                              <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">{user.name?.charAt(0) || "U"}</span>
                            </div>
                            <div className="flex flex-col">
                              <span className="text-sm font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">{user.name}</span>
                              <span className="text-xs text-zinc-500 dark:text-zinc-400">{user.email}</span>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-zinc-600 dark:text-zinc-300 bg-black/5 dark:bg-white/10 px-2 py-1 rounded-md font-mono">@{user.username}</span>
                        </TableCell>
                        <TableCell>
                          <span className="text-sm text-zinc-500 dark:text-zinc-400">{user.website}</span>
                        </TableCell>
                        <TableCell>
                          <Badge variant="premium" className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20">
                            Active
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-zinc-500 opacity-0 group-hover:opacity-100 transition-opacity">
                            <MoreHorizontal className="h-4 w-4" />
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
