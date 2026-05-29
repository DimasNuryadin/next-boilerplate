import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code2, Layers, Palette, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: Zap,
    title: "Next.js 16",
    description: "Built on the latest Next.js with App Router, Server Components, and Turbopack for blazing fast development.",
  },
  {
    icon: Layers,
    title: "State Management",
    description: "Jotai for atomic state management — lightweight, flexible, and perfectly integrated with React.",
  },
  {
    icon: Code2,
    title: "OpenAPI Ready",
    description: "Auto-generated API client from your OpenAPI spec. Type-safe, always in sync with your backend.",
  },
  {
    icon: Palette,
    title: "Liquid Glass UI",
    description: "Stunning glassmorphism design system with animated gradients, smooth transitions, and dark mode.",
  },
];

const techStack = ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS", "Jotai", "OpenAPI", "Shadcn/UI", "Lucide Icons"];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ========== HERO SECTION ========== */}
      <section className="relative flex flex-col items-center justify-center text-center px-4 sm:px-6 pt-16 pb-20 sm:pt-20 sm:pb-28">
        {/* Badge */}
        <div className="animate-fade-in-up">
          <Badge variant="glass" className="inline-flex items-center gap-2 text-xs font-medium mb-6">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            Production Ready Boilerplate
          </Badge>
        </div>

        {/* Heading */}
        <h1 className="animate-fade-in-up animate-delay-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl">
          Build <span className="gradient-text">Beautiful Apps</span>
          <br />
          at Lightning Speed
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up animate-delay-2 mt-6 text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A modern, production-ready Next.js boilerplate with glassmorphism design, atomic state management, and type-safe API integration — all preconfigured so you can focus on what matters.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up animate-delay-3 flex flex-col sm:flex-row items-center gap-3 mt-8">
          <Button variant="gradient" size="lg" asChild className="px-7 py-3 h-auto">
            <Link href="/dashboard">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button variant="glass" size="lg" asChild className="px-7 py-3 h-auto">
            <Link href="https://github.com/DimasNuryadin/next-boilerplate" target="_blank">
              <Code2 className="h-4 w-4" />
              View on GitHub
            </Link>
          </Button>
        </div>

        {/* Tech Stack Pills */}
        <div className="animate-fade-in-up animate-delay-4 flex flex-wrap items-center justify-center gap-2 mt-12 max-w-xl">
          {techStack.map((tech) => (
            <Badge key={tech} variant="glass" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Everything you need, <span className="gradient-text">out of the box</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">Stop wasting time on boilerplate setup. Start building your next great idea with a foundation that scales.</p>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} variant="glass" className={`gradient-border group cursor-default animate-fade-in-up animate-delay-${i + 1}`}>
                  <CardContent className="pt-2">
                    <div className="glass-pill !rounded-xl !p-2.5 w-fit mb-4 group-hover:scale-110 transition-transform">
                      <Icon className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="font-semibold text-base mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="px-4 sm:px-6 pb-20 sm:pb-28">
        <div className="max-w-3xl mx-auto">
          <Card variant="glass" className="text-center py-12 px-6 sm:px-10 animate-fade-in-up relative overflow-hidden">
            <CardContent>
              {/* Decorative shimmer */}
              <div className="absolute inset-0 shimmer opacity-30 pointer-events-none" />

              <h2 className="text-2xl sm:text-3xl font-bold mb-3 relative">
                Ready to <span className="gradient-text">get started</span>?
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground mb-6 max-w-md mx-auto relative">Clone the repo, install dependencies, and start building in under 2 minutes.</p>

              {/* Code snippet */}
              <div className="glass rounded-xl px-5 py-3 inline-flex items-center gap-3 text-sm font-mono text-muted-foreground relative">
                <span className="text-emerald-400 select-none">$</span>
                <code>npx create-next-app -e next-boilerplate</code>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
