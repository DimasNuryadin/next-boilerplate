"use client";

import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { usePosts } from "@/hooks/useApi";
import { FileText, Search, Plus, MoreVertical, Clock } from "lucide-react";
import { useState } from "react";
import { motion } from "motion/react";

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.5,
      ease: [0.32, 0.72, 0, 1] as const,
    },
  }),
};

export default function PostsPage() {
  const { data: posts, isLoading } = usePosts();
  const [search, setSearch] = useState("");

  const filtered = posts?.filter(
    (post) =>
      post.title?.toLowerCase().includes(search.toLowerCase()) ||
      post.body?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-8 max-w-7xl mx-auto pb-10">
      {/* Header */}
      <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUpVariants} className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 mb-1">Posts Directory</h1>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">Browse, read, and manage content across your platform.</p>
        </div>
        
        <Button variant="premium" className="w-full sm:w-auto">
          <Plus className="mr-2 h-4 w-4" />
          Create Post
        </Button>
      </motion.div>

      {/* Toolbar / Search */}
      <motion.div custom={1} initial="hidden" animate="visible" variants={fadeUpVariants}>
        <div className="relative max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-400 dark:text-zinc-500" />
          <Input 
            placeholder="Search by title or content..." 
            className="pl-9 h-11 bg-white/50 dark:bg-black/50 border-black/10 dark:border-white/10 rounded-xl shadow-sm focus-visible:ring-black/20 dark:focus-visible:ring-white/20 transition-all" 
            value={search} 
            onChange={(e) => setSearch(e.target.value)} 
          />
        </div>
      </motion.div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {isLoading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <motion.div key={i} custom={i + 2} initial="hidden" animate="visible" variants={fadeUpVariants}>
              <Card variant="premium-outer" className="h-full">
                <CardContent variant="premium-inner" className="p-6 flex flex-col h-[280px]">
                  <div className="flex justify-between items-start mb-4">
                    <Skeleton className="h-10 w-10 rounded-xl" />
                    <Skeleton className="h-6 w-16 rounded-full" />
                  </div>
                  <Skeleton className="h-5 w-3/4 mb-3" />
                  <Skeleton className="h-5 w-1/2 mb-6" />
                  <div className="space-y-2 mt-auto">
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-full" />
                    <Skeleton className="h-3 w-2/3" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        ) : filtered?.length === 0 ? (
          <motion.div custom={2} initial="hidden" animate="visible" variants={fadeUpVariants} className="col-span-full">
            <Card variant="premium-outer">
              <CardContent variant="premium-inner" className="py-20 text-center">
                <div className="w-16 h-16 bg-black/5 dark:bg-white/5 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <FileText className="h-8 w-8 text-zinc-400" />
                </div>
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-1">No posts found</h3>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">We couldn&apos;t find any posts matching &quot;{search}&quot;</p>
              </CardContent>
            </Card>
          </motion.div>
        ) : (
          filtered?.map((post, i) => (
            <motion.div key={post.id} custom={i + 2} initial="hidden" animate="visible" variants={fadeUpVariants}>
              <Card variant="premium-outer" className="h-full group hover:-translate-y-1 transition-transform duration-300">
                <CardContent variant="premium-inner" className="p-6 flex flex-col h-[280px] relative overflow-hidden">
                  
                  {/* Subtle Background Glow on Hover */}
                  <div className="absolute -top-20 -right-20 w-40 h-40 bg-purple-500/0 group-hover:bg-purple-500/10 dark:group-hover:bg-purple-500/20 blur-3xl rounded-full transition-colors duration-500 pointer-events-none" />

                  <div className="flex justify-between items-start mb-5 relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 flex items-center justify-center border border-purple-500/20">
                      <FileText className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="premium" className="bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20 text-[10px] px-2 py-0.5">
                        Author #{post.userId}
                      </Badge>
                      <button className="text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors opacity-0 group-hover:opacity-100">
                        <MoreVertical className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                  
                  <h3 className="font-bold text-lg text-zinc-900 dark:text-zinc-50 capitalize leading-tight mb-3 line-clamp-2 relative z-10 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-sm text-zinc-500 dark:text-zinc-400 line-clamp-3 leading-relaxed relative z-10 mb-4 flex-1">
                    {post.body}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs font-medium text-zinc-400 dark:text-zinc-500 relative z-10 pt-4 border-t border-black/5 dark:border-white/5 mt-auto">
                    <span className="flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      Post #{post.id}
                    </span>
                    <span className="text-purple-600 dark:text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 cursor-pointer hover:underline">
                      Read more &rarr;
                    </span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))
        )}
      </div>
    </div>
  );
}
