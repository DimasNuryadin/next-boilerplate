"use client";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import { usePosts } from "@/hooks/useApi";
import { FileText, Search } from "lucide-react";
import { useState } from "react";

export default function PostsPage() {
  const { data: posts, isLoading } = usePosts();
  const [search, setSearch] = useState("");

  const filtered = posts?.filter((post) => post.title?.toLowerCase().includes(search.toLowerCase()) || post.body?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold gradient-text">Posts</h1>
        <p className="text-sm text-muted-foreground">Browse and manage all posts</p>
      </div>

      {/* Search */}
      <div className="relative max-w-sm">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input placeholder="Search posts..." className="glass border-white/20 pl-9" value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>

      {/* Posts grid */}
      {isLoading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="glass-card space-y-3">
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-1/2" />
            </div>
          ))}
        </div>
      ) : filtered?.length === 0 ? (
        <div className="glass-card text-center py-12 text-muted-foreground text-sm">No posts found</div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered?.map((post) => (
            <div key={post.id} className="glass-card space-y-3 hover:glass-strong transition-all cursor-pointer">
              <div className="flex items-start justify-between gap-2">
                <div className="glass p-2 rounded-lg shrink-0">
                  <FileText className="h-4 w-4" />
                </div>
                <Badge variant="secondary" className="text-xs">
                  User #{post.userId}
                </Badge>
              </div>
              <h3 className="font-medium text-sm capitalize leading-snug line-clamp-2">{post.title}</h3>
              <p className="text-xs text-muted-foreground line-clamp-3 leading-relaxed">{post.body}</p>
              <p className="text-xs text-muted-foreground">Post #{post.id}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
