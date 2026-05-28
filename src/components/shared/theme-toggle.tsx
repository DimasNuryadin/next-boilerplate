"use client";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";
import { Moon, Sun } from "lucide-react";
import { startTransition, useEffect, useState } from "react";

export function ThemeToggle() {
  const { toggleTheme, isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    startTransition(() => {
      setMounted(true);
    });
  }, []);

  if (!mounted)
    return (
      <Button variant="ghost" size="icon" className="glass rounded-full" disabled>
        <Sun className="h-4 w-4 opacity-0" />
      </Button>
    );

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme} className="glass rounded-full">
      {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
    </Button>
  );
}
