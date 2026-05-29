"use client";
import { Button } from "@/components/ui/button/button";
import { cn } from "@/lib/utils";
import { sidebarOpenAtom } from "@/store/atoms/ui";
import { useAtom } from "jotai";
import { FileText, LayoutDashboard, Settings, Users, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
      {isOpen && <div className="fixed inset-0 z-40 bg-black/50 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside className={cn("fixed top-20 left-0 z-40 h-[calc(100vh-5rem)] w-64 transition-transform duration-300", "glass border-r border-white/10", "md:translate-x-0", isOpen ? "translate-x-0" : "-translate-x-full")}>
        <div className="flex flex-col h-full p-4 space-y-2">
          {/* Close button mobile */}
          <div className="flex justify-end md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Nav items */}
          {sidebarItems.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn("flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all", isActive ? "glass-strong gradient-text font-medium" : "text-muted-foreground hover:text-foreground hover:glass")}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
