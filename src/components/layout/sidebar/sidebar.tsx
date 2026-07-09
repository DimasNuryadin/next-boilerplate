"use client";
import { Button } from "@/components/ui/button/button";
import { cn } from "@/lib/utils";
import { sidebarOpenAtom } from "@/store/atoms/ui";
import { useAtom } from "jotai";
import { FileText, LayoutDashboard, Settings, Users, X, Hexagon, ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";

const sidebarItems = [
  { label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { label: "Users", href: "/dashboard/users", icon: Users },
  { label: "Posts", href: "/dashboard/posts", icon: FileText },
  { label: "Settings", href: "/dashboard/settings", icon: Settings },
];

export function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useAtom(sidebarOpenAtom);

  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 dark:bg-black/60 backdrop-blur-sm md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar Container */}
      <aside
        className={cn(
          "fixed top-4 left-4 z-40 h-[calc(100vh-2rem)] w-64",
          "transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1)",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-[calc(100%+2rem)]"
        )}
      >
        {/* Premium Outer Shell */}
        <div className="h-full rounded-2xl p-1.5 bg-gradient-to-b from-black/5 to-black/10 dark:from-white/10 dark:to-white/5 border border-black/10 dark:border-white/10 shadow-2xl backdrop-blur-xl">
          
          {/* Premium Inner Shell (True Glassmorphism) */}
          <div className="h-full rounded-[calc(1rem-0.375rem)] bg-white/70 dark:bg-[#0A0A0A]/60 backdrop-blur-2xl border border-black/5 dark:border-white/5 shadow-[inset_0_1px_1px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] flex flex-col relative overflow-hidden">
            
            {/* Subtle Glow Background inside Sidebar */}
            <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent pointer-events-none" />

            <div className="flex flex-col h-full p-4 relative z-10">
              
              {/* Header / Logo Area */}
              <div className="flex items-center justify-between mb-8 px-2">
                <Link href="/dashboard" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white shadow-lg shadow-purple-500/20 group-hover:shadow-purple-500/40 transition-shadow">
                    <Hexagon className="h-4 w-4 fill-white/20" />
                  </div>
                  <span className="font-bold text-lg tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 to-zinc-600 dark:from-white dark:to-zinc-400">
                    Nexus UI
                  </span>
                </Link>
                
                {/* Close button mobile */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="md:hidden rounded-full h-8 w-8 text-zinc-500"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>

              {/* Nav items */}
              <div className="space-y-1.5 flex-1">
                {sidebarItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 relative overflow-hidden",
                        isActive
                          ? "text-purple-700 dark:text-purple-300 shadow-sm"
                          : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 hover:bg-black/5 dark:hover:bg-white/5"
                      )}
                    >
                      {/* Active Background Glow */}
                      {isActive && (
                        <motion.div 
                          layoutId="active-nav-bg"
                          className="absolute inset-0 bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 rounded-xl"
                          initial={false}
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                      
                      <div className="flex items-center gap-3 relative z-10">
                        <Icon className={cn(
                          "h-4 w-4 shrink-0 transition-colors duration-300",
                          isActive ? "text-purple-600 dark:text-purple-400" : "text-zinc-400 group-hover:text-zinc-600 dark:group-hover:text-zinc-300"
                        )} />
                        {item.label}
                      </div>

                      {isActive && (
                        <ChevronRight className="h-4 w-4 text-purple-600/50 dark:text-purple-400/50 relative z-10" />
                      )}
                    </Link>
                  );
                })}
              </div>
              
              {/* Footer Area (e.g. Help / Pro Upgrade) */}
              <div className="mt-auto pt-4 border-t border-black/5 dark:border-white/5">
                <div className="p-4 rounded-xl bg-gradient-to-br from-purple-500/5 to-blue-500/5 border border-purple-500/10 dark:border-white/5">
                  <h4 className="text-xs font-semibold text-zinc-900 dark:text-zinc-100 mb-1">Nexus Pro</h4>
                  <p className="text-[10px] text-zinc-500 dark:text-zinc-400 mb-3 leading-tight">Unlock premium features and analytics.</p>
                  <Button className="w-full h-7 text-xs bg-zinc-900 hover:bg-zinc-800 dark:bg-white dark:hover:bg-zinc-200 dark:text-black transition-colors rounded-lg">
                    Upgrade
                  </Button>
                </div>
              </div>

            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
