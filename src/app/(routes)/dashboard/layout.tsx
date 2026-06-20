import { Sidebar } from "@/components/layout";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Bell, LogOut, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col md:ml-64 p-4 sm:p-6">
        
        {/* Dashboard Header */}
        <header className="flex justify-end items-center mb-6 gap-4">
          <ThemeToggle />
          <button className="relative p-2 text-muted-foreground hover:text-foreground transition-colors glass-pill rounded-full">
            <Bell className="h-5 w-5" />
            <span className="absolute top-1.5 right-1.5 h-2 w-2 bg-blue-500 rounded-full animate-pulse" />
          </button>
          
          <div className="glass-pill flex items-center gap-3 px-3 py-1.5 rounded-full group cursor-pointer">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://i.pravatar.cc/150?u=alex" 
              alt="Alex Carter"
              className="h-8 w-8 rounded-full border border-black/10 dark:border-white/10"
            />
            <span className="text-sm font-medium hidden sm:block">Alex Carter</span>
            
            {/* Simple logout button acting as dropdown icon */}
            <Link href="/login" className="p-1 ml-1 text-muted-foreground hover:text-rose-500 transition-colors">
              <LogOut className="h-4 w-4" />
            </Link>
          </div>
        </header>

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
