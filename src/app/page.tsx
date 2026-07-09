"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Code2, Layers, Palette, Star, Zap } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import Link from "next/link";

const features = [
  {
    icon: Zap,
    title: "Next.js 16 Foundation",
    description: "Built on the latest Next.js with App Router and Turbopack for blazing fast development cycles.",
    colSpan: "md:col-span-8",
    rowSpan: "md:row-span-2",
  },
  {
    icon: Layers,
    title: "Atomic State",
    description: "Jotai integrated natively for flexible state management.",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
  },
  {
    icon: Code2,
    title: "OpenAPI Ready",
    description: "Auto-generated typed API clients synced with your backend.",
    colSpan: "md:col-span-4",
    rowSpan: "md:row-span-1",
  },
  {
    icon: Palette,
    title: "Premium Aesthetics",
    description: "Engineered for high-end agency feel with physical depth and tight motion choreography.",
    colSpan: "md:col-span-12",
    rowSpan: "md:row-span-1",
  },
];

const techStack = ["Next.js 16", "React 19", "TypeScript", "Tailwind v4", "Jotai", "OpenAPI", "Shadcn"];

const testimonials = [
  { name: "Alice Johnson", role: "Frontend Dev", content: "This boilerplate saved me weeks of setup. The structure is flawless." },
  { name: "Mark Smith", role: "CTO @ Startup", content: "We shipped our MVP in 3 days using this. Next.js 16 and Tailwind make a perfect combo." },
  { name: "Sarah Lee", role: "Designer", content: "The pre-built gradient and Double-Bezel classes are a lifesaver for rapid prototyping." },
  { name: "David Kim", role: "Fullstack Eng", content: "Jotai integration out of the box is the cherry on top. Highly recommended." },
];

export default function Home() {
  const reduceMotion = useReducedMotion();

  const fadeUpVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        delay: reduceMotion ? 0 : i * 0.1,
        duration: 0.8,
        ease: [0.32, 0.72, 0, 1] as const,
      },
    }),
  };

  return (
    <div className="min-h-screen text-zinc-900 dark:text-white selection:bg-purple-500/30">
      {/* ========== HERO SECTION (Editorial Split) ========== */}
      <section className="relative flex flex-col items-center justify-center py-20 overflow-hidden min-h-dvh">
        {/* Animated Vibrant Background Mesh */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-grid-pattern opacity-50 dark:opacity-100">
          <div className="gradient-blob gradient-blob-1" />
          <div className="gradient-blob gradient-blob-2" />
          <div className="gradient-blob gradient-blob-3" />
        </div>

        <div className="container relative z-10 px-4 sm:px-6 mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[70vh]">
            {/* Left: Typography Block */}
            <div className="flex flex-col items-start text-left lg:col-span-7">
              <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUpVariants}>
                <Badge variant="premium" className="mb-8">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                  Next Boilerplate v2.0
                </Badge>
              </motion.div>

              <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUpVariants} className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tighter leading-[1.1] max-w-2xl text-zinc-900 dark:text-zinc-50">
                Build <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Premium Apps</span>
                <br />
                at Lightning Speed
              </motion.h1>

              <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUpVariants} className="mt-8 text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-xl leading-relaxed font-light">
                A modern, production-ready Next.js foundation engineered for agency-level aesthetics, atomic state management, and type-safe APIs.
              </motion.p>

              <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUpVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-10 w-full sm:w-auto">
                {/* Button-in-Button CTA */}
                <Button variant="premium" asChild className="group relative w-full sm:w-auto">
                  <Link href="/register" className="flex items-center gap-4">
                    Start Building Free
                    <span className="w-8 h-8 rounded-full bg-white/20 dark:bg-black/10 flex items-center justify-center transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:translate-x-1 group-hover:-translate-y-[1px] group-hover:scale-105">
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </Link>
                </Button>

                <Button variant="premium-outline" asChild className="w-full sm:w-auto">
                  <Link href="https://github.com/DimasNuryadin/next-boilerplate" target="_blank">
                    <Code2 className="h-4 w-4 mr-2" />
                    View on GitHub
                  </Link>
                </Button>
              </motion.div>

              {/* Tech Stack Pills */}
              <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUpVariants} className="flex flex-wrap items-center gap-2 mt-12">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="premium">
                    {tech}
                  </Badge>
                ))}
              </motion.div>
            </div>

            {/* Right: Abstract 3D/Visual Depth Representation */}
            <div className="lg:col-span-5 w-full mt-16 lg:mt-0 relative perspective-[1000px] h-[400px] sm:h-[500px]">
              <motion.div initial={{ opacity: 0, x: 40, rotateY: 15 }} animate={{ opacity: 1, x: 0, rotateY: 0 }} transition={{ duration: 1, delay: 0.2, ease: [0.32, 0.72, 0, 1] }} className="w-full h-full relative">
                {/* Double-Bezel Architecture Demo */}
                <Card variant="premium-outer" className="absolute inset-0 shadow-2xl transform-gpu transition-transform duration-1000 hover:rotate-y-[-5deg] hover:rotate-x-[5deg]">
                  <CardContent variant="premium-inner" className="overflow-hidden relative flex flex-col p-0">
                    {/* Mock Toolbar */}
                    <div className="h-12 border-b border-black/5 dark:border-white/10 bg-black/5 dark:bg-white/5 flex items-center px-4 gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                      <div className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                    </div>
                    {/* Mock Content */}
                    <div className="flex-1 p-6 flex flex-col gap-4">
                      <div className="h-8 w-1/3 rounded-md bg-black/10 dark:bg-white/10 animate-pulse" />
                      <div className="h-32 w-full rounded-xl bg-gradient-to-br from-purple-500/10 to-blue-500/10 dark:from-purple-500/20 dark:to-blue-500/20 border border-black/5 dark:border-white/5" />
                      <div className="flex gap-4 mt-auto">
                        <div className="h-10 w-10 rounded-full bg-black/5 dark:bg-white/10" />
                        <div className="h-10 w-full rounded-full bg-black/5 dark:bg-white/5" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION (Asymmetrical Bento) ========== */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section heading */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants} className="mb-12 md:mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              Engineered for <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">Scale</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl leading-relaxed">Stop wasting time on boilerplate setup. We have abstracted the complexity of modern web development into a robust, type-safe foundation.</p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} custom={i + 1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants} className={`${feature.colSpan} ${feature.rowSpan}`}>
                  <Card variant="premium-outer">
                    <CardContent variant="premium-inner">
                      <div className="p-3 w-fit rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 mb-8 transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-110 group-hover:bg-black/10 dark:group-hover:bg-white/10">
                        <Icon className="h-6 w-6 text-zinc-600 dark:text-zinc-300" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">{feature.title}</h3>
                      <p className="text-base text-zinc-600 dark:text-zinc-400 leading-relaxed mt-auto">{feature.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="py-16 sm:py-24 overflow-hidden relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants}>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              Loved by <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">developers</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">Don&apos;t just take our word for it. See what others are building with Next Boilerplate.</p>
          </motion.div>
        </div>

        {/* Marquee Container - No backdrop blur for performance */}
        <div className="relative flex overflow-hidden w-full py-4 mask-edges">
          <div className="animate-marquee flex gap-6 px-3">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <div key={i} className="w-[350px] sm:w-[400px] flex-shrink-0">
                <Card variant="premium-outer">
                  <CardContent variant="premium-inner">
                    <div className="flex items-center gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-8 flex-grow leading-relaxed">&quot;{testimonial.content}&quot;</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-zinc-200 to-zinc-100 dark:from-zinc-800 dark:to-zinc-700 border border-black/10 dark:border-white/10 flex items-center justify-center text-zinc-800 dark:text-white font-bold shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-base font-semibold text-zinc-900 dark:text-zinc-100">{testimonial.name}</p>
                        <p className="text-sm text-zinc-500">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING SECTION ========== */}
      <section className="px-4 sm:px-6 py-16 sm:py-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
              Simple, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">transparent pricing</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">Start for free, then scale with your users. No hidden fees.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {/* Hobby */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="h-full">
              <Card variant="premium-outer" className="opacity-80 hover:opacity-100">
                <CardContent variant="premium-inner" className="shadow-none border-0 bg-transparent">
                  <h3 className="text-xl font-medium text-zinc-600 dark:text-zinc-400 mb-2">Hobby</h3>
                  <div className="flex items-baseline gap-1 mb-10">
                    <span className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">$0</span>
                    <span className="text-zinc-500">/mo</span>
                  </div>
                  <ul className="space-y-5 mb-10 flex-grow">
                    {["Up to 1,000 users", "Community support", "Basic analytics", "1 project"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="h-5 w-5 text-zinc-400 dark:text-zinc-600 shrink-0" strokeWidth={1.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="premium-outline" className="w-full mt-auto">
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pro - Double-Bezel Highlighted */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="relative z-20 md:-my-6 h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[2.5rem] blur-xl opacity-50 pointer-events-none" />
              <Card variant="premium-highlighted">
                <div className="absolute -top-4 inset-x-0 flex justify-center z-10">
                  <span className="bg-zinc-900 text-zinc-50 dark:bg-zinc-100 dark:text-zinc-900 font-semibold px-4 py-1 text-xs uppercase tracking-widest rounded-full shadow-lg">Most Popular</span>
                </div>
                <CardContent variant="premium-inner-highlighted">
                  <h3 className="text-xl font-medium text-zinc-900 dark:text-zinc-50 mb-2">Pro</h3>
                  <div className="flex items-baseline gap-1 mb-10">
                    <span className="text-5xl font-bold text-zinc-900 dark:text-zinc-50">$29</span>
                    <span className="text-zinc-500 dark:text-zinc-400">/mo</span>
                  </div>
                  <ul className="space-y-5 mb-10 flex-grow">
                    {["Unlimited users", "Priority email support", "Advanced analytics", "Unlimited projects", "Custom domains"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="h-5 w-5 text-purple-500 dark:text-purple-400 shrink-0" strokeWidth={1.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="premium" className="w-full mt-auto">
                    Start Free Trial
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enterprise */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="h-full">
              <Card variant="premium-outer" className="opacity-80 hover:opacity-100">
                <CardContent variant="premium-inner" className="shadow-none border-0 bg-transparent">
                  <h3 className="text-xl font-medium text-zinc-600 dark:text-zinc-400 mb-2">Enterprise</h3>
                  <div className="flex items-baseline gap-1 mb-10">
                    <span className="text-5xl font-bold text-zinc-900 dark:text-zinc-100">Custom</span>
                  </div>
                  <ul className="space-y-5 mb-10 flex-grow">
                    {["Dedicated infrastructure", "24/7 phone support", "Custom SLA", "Single Sign-On (SSO)"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <CheckCircle2 className="h-5 w-5 text-zinc-400 dark:text-zinc-600 shrink-0" strokeWidth={1.5} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="premium-outline" className="w-full mt-auto">
                    Contact Sales
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="px-4 sm:px-6 pb-16 sm:pb-24 pt-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants}>
            <Card variant="premium-highlighted" className="text-center relative overflow-hidden bg-black/[0.02] dark:bg-white/[0.02] border-black/10 dark:border-white/10">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-blue-500/5 dark:from-purple-500/10 dark:to-blue-500/10 pointer-events-none" />
              <CardContent variant="premium-inner-highlighted" className="p-16 sm:p-24 relative z-10 flex flex-col items-center">
                <h2 className="text-4xl sm:text-5xl font-bold tracking-tighter text-zinc-900 dark:text-zinc-50 mb-6">
                  Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400">get started</span>?
                </h2>
                <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-xl mx-auto leading-relaxed">Clone the repo, install dependencies, and start building your next billion-dollar idea in under 2 minutes.</p>

                {/* Code snippet */}
                <div className="rounded-2xl px-8 py-5 inline-flex items-center gap-4 text-sm sm:text-base font-mono text-zinc-700 dark:text-zinc-300 shadow-inner bg-black/5 dark:bg-black border border-black/10 dark:border-white/10">
                  <span className="text-emerald-500 dark:text-emerald-400 select-none font-bold">$</span>
                  <code>npx create-next-app -e next-boilerplate</code>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
