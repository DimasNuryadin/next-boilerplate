"use client";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { authNavigation, mainNavigation } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 py-3">
        <div className={cn("glass-navbar rounded-2xl max-w-6xl mx-auto flex items-center justify-between px-5 py-3 fixed w-full top-0 z-50 transition-all duration-500 backdrop-blur-xl", scrolled && "scrolled")}>
          {/* Logo */}
          <Link href="/" className="font-bold text-lg gradient-text tracking-tight hover:opacity-80 transition-opacity">
            {siteConfig.name}
          </Link>

          {/* Main Navigation — Desktop */}
          <div className="hidden md:flex items-center gap-1">
            {mainNavigation.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link text-sm text-muted-foreground hover:text-foreground px-3 py-2 rounded-xl transition-colors">
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right side — Desktop */}
          <div className="hidden md:flex items-center gap-2">
            {authNavigation.map((item) =>
              item.label === "Login" ? (
                <Button key={item.href} variant="ghost" size="sm" asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ) : (
                <Button key={item.href} variant="gradient" size="sm" asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              )
            )}
            <ThemeToggle />
          </div>

          {/* Mobile — Hamburger + Theme */}
          <div className="flex md:hidden items-center gap-2">
            <ThemeToggle />
            <Button variant="glass" size="icon" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu" className="rounded-full">
              {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <>
            {/* Overlay */}
            <div className="fixed inset-0 z-40 bg-black/30 overlay-fade md:hidden" onClick={() => setMobileOpen(false)} />

            {/* Menu Panel */}
            <div className="fixed top-[72px] left-4 right-4 z-50 glass-card animate-fade-in-up md:hidden">
              <div className="flex flex-col gap-1">
                {mainNavigation.map((item) => (
                  <Link key={item.href} href={item.href} className="text-sm text-muted-foreground hover:text-foreground px-4 py-3 rounded-xl hover:bg-white/10 transition-all" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </Link>
                ))}

                <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-2" />

                <div className="flex flex-col gap-2 px-4 pb-2">
                  {authNavigation.map((item) =>
                    item.label === "Login" ? (
                      <Button key={item.href} variant="ghost" size="sm" asChild className="w-full justify-center">
                        <Link href={item.href} onClick={() => setMobileOpen(false)}>
                          {item.label}
                        </Link>
                      </Button>
                    ) : (
                      <Button key={item.href} variant="gradient" size="sm" asChild className="w-full justify-center">
                        <Link href={item.href} onClick={() => setMobileOpen(false)}>
                          {item.label}
                        </Link>
                      </Button>
                    )
                  )}
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </>
  );
}
