import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Home } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Background blobs for the 404 page */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-500/30 dark:bg-purple-600/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-blue-500/20 dark:bg-blue-600/20 blur-[100px] rounded-full pointer-events-none animate-pulse-glow" />

      <Card variant="glass" className="w-full max-w-2xl text-center py-20 px-8 relative z-10 border-white/40 dark:border-black/10 dark:border-white/10 shadow-2xl">
        <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tighter mb-4 gradient-text">
          404
        </h1>
        <div className="glass-pill mx-auto mb-6 bg-white/50 dark:bg-white/5 border-black/10 dark:border-black/10 dark:border-white/10 text-foreground">
          Page Not Found
        </div>
        <p className="text-muted-foreground text-lg sm:text-xl mb-10 max-w-md mx-auto">
          Oops! The page you are looking for has vanished into the digital void.
        </p>
        <Button variant="gradient" size="lg" asChild className="rounded-xl px-8 h-12">
          <Link href="/">
            <Home className="mr-2 h-5 w-5" />
            Return Home
          </Link>
        </Button>
      </Card>
    </div>
  );
}
