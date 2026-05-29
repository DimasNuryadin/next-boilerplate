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
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/40 overlay-fade md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-[76px] left-4 z-40 h-[calc(100vh-6rem)] w-60 rounded-2xl",
          "glass-sidebar",
          "transition-all duration-300 cubic-bezier(0.4, 0, 0.2, 1)",
          "md:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-[calc(100%+2rem)]"
        )}
      >
        <div className="flex flex-col h-full p-4 space-y-1">
          {/* Close button mobile */}
          <div className="flex justify-end md:hidden mb-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="glass rounded-full h-8 w-8"
            >
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
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all duration-200",
                  isActive
                    ? "glass-strong gradient-text font-medium sidebar-active-indicator"
                    : "text-muted-foreground hover:text-foreground hover:bg-white/10"
                )}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {item.label}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
