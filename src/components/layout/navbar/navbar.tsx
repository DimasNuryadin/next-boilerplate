"use client";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { authNavigation, mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-3">
      <div className="glass rounded-2xl max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="font-bold text-lg gradient-text">
          {siteConfig.name}
        </Link>

        {/* Main Navigation */}
        <div className="hidden md:flex items-center gap-6">
          {mainNavigation.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          {authNavigation.map((item) => (
            <Button key={item.href} variant={item.label === "Login" ? "ghost" : "default"} size="sm" asChild className={item.label !== "Login" ? "gradient-text" : ""}>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
