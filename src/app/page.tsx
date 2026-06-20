"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code2, Layers, Palette, Zap, Star, CheckCircle2 } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

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

const testimonials = [
  { name: "Alice Johnson", role: "Frontend Dev", content: "This boilerplate saved me weeks of setup. The glass UI is simply gorgeous." },
  { name: "Mark Smith", role: "CTO @ Startup", content: "We shipped our MVP in 3 days using this. Next.js 15 and Tailwind make a perfect combo." },
  { name: "Sarah Lee", role: "Designer", content: "I usually struggle with CSS, but these pre-built gradient and glass classes are a lifesaver." },
  { name: "David Kim", role: "Fullstack Eng", content: "Jotai integration out of the box is the cherry on top. Highly recommended." },
  { name: "Emma Watson", role: "Product Manager", content: "The aesthetics of our internal tools improved tenfold. Thank you!" },
  { name: "Chris Evans", role: "Indie Hacker", content: "I've tried many boilerplates, but this one strikes the perfect balance of features and design." },
];

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  }),
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* ========== HERO SECTION ========== */}
      <section className="relative flex flex-col items-center justify-center pt-24 pb-20 sm:pt-32 sm:pb-28 overflow-hidden">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-grid-pattern z-0 opacity-50" />
        
        <div className="container relative z-10 px-4 sm:px-6 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
            
            {/* Text Content */}
            <div className="flex flex-col items-start text-left">
              <motion.div custom={0} initial="hidden" animate="visible" variants={fadeUpVariants}>
                <Badge variant="glass" className="inline-flex items-center gap-2 text-xs font-medium mb-6 backdrop-blur-xl">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  Next Boilerplate v2.0
                </Badge>
              </motion.div>

              <motion.h1 custom={1} initial="hidden" animate="visible" variants={fadeUpVariants} className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.1] max-w-2xl">
                Build <span className="gradient-text">Premium Apps</span>
                <br />
                at Lightning Speed
              </motion.h1>

              <motion.p custom={2} initial="hidden" animate="visible" variants={fadeUpVariants} className="mt-6 text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed">
                A modern, production-ready Next.js boilerplate with glassmorphism design, atomic state management, and type-safe API integration — all preconfigured so you can focus on what matters.
              </motion.p>

              <motion.div custom={3} initial="hidden" animate="visible" variants={fadeUpVariants} className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto">
                <Button variant="gradient" size="lg" asChild className="w-full sm:w-auto px-8 py-6 h-auto text-base rounded-xl shadow-lg shadow-purple-500/20">
                  <Link href="/register">
                    Start Building Free
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Link>
                </Button>
                <Button variant="glass" size="lg" asChild className="w-full sm:w-auto px-8 py-6 h-auto text-base rounded-xl bg-white/50 dark:bg-white/5 backdrop-blur-lg border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10">
                  <Link href="https://github.com/DimasNuryadin/next-boilerplate" target="_blank">
                    <Code2 className="h-4 w-4 mr-2" />
                    View on GitHub
                  </Link>
                </Button>
              </motion.div>
              
              {/* Tech Stack Pills */}
              <motion.div custom={4} initial="hidden" animate="visible" variants={fadeUpVariants} className="flex flex-wrap items-center gap-2 mt-10">
                {techStack.map((tech) => (
                  <Badge key={tech} variant="glass" className="text-xs bg-white/50 dark:bg-white/5 backdrop-blur-md border-black/10 dark:border-white/10">
                    {tech}
                  </Badge>
                ))}
              </motion.div>
            </div>

            {/* Visual/Mockup */}
            <motion.div 
              initial={{ opacity: 0, x: 50, rotateY: 10 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px] flex items-center justify-center perspective-[1000px] mt-10 lg:mt-0"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 via-transparent to-blue-500/20 rounded-full blur-[80px] pointer-events-none" />
              <motion.div 
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 w-full max-w-[600px] mx-auto transform-gpu preserve-3d"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* 3D Mockup Container */}
                <div className="relative rounded-2xl overflow-hidden glass border-black/20 dark:border-white/20 shadow-[0_0_50px_-12px_rgba(124,58,237,0.4)] dark:shadow-[0_0_50px_-12px_rgba(124,58,237,0.4)] transform-gpu transition-transform duration-700 ease-out hover:[transform:rotateY(0deg)_rotateX(0deg)] [transform:rotateY(-5deg)_rotateX(5deg)]">
                  <Image 
                    src="/hero-mockup.png" 
                    alt="Dashboard Mockup" 
                    width={800} 
                    height={600} 
                    className="w-full h-auto object-cover opacity-90"
                    priority
                  />
                  {/* Mockup Top Bar Overlay */}
                  <div className="absolute top-0 left-0 w-full h-6 bg-black/40 backdrop-blur-md flex items-center px-3 gap-1.5 border-b border-black/10 dark:border-white/10">
                    <div className="h-2 w-2 rounded-full bg-red-500/80" />
                    <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
                    <div className="h-2 w-2 rounded-full bg-green-500/80" />
                  </div>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ========== FEATURES SECTION ========== */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section heading */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Everything you need, <span className="gradient-text">out of the box</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">Stop wasting time on boilerplate setup. Start building your next great idea with a foundation that scales.</p>
          </motion.div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={feature.title} custom={i + 1} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }} variants={fadeUpVariants} className="h-full">
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="h-full"
                  >
                    <Card variant="glass" className="gradient-border group cursor-default h-full bg-white/50 dark:bg-white/5 dark:bg-black/20 backdrop-blur-xl">
                      <CardContent className="pt-6 px-6 pb-8 h-full flex flex-col">
                        <div className="glass-pill rounded-xl! p-3! w-fit mb-6 group-hover:scale-110 transition-transform bg-gradient-to-br from-black/10 dark:from-white/10 to-transparent">
                          <Icon className="h-6 w-6 text-foreground" />
                        </div>
                        <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mt-auto">{feature.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========== TESTIMONIALS SECTION ========== */}
      <section className="py-20 sm:py-28 overflow-hidden relative z-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-12 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants}>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Loved by <span className="gradient-text">developers</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">Don't just take our word for it. See what others are building with Next Boilerplate.</p>
          </motion.div>
        </div>

        {/* Marquee Container */}
        <div className="relative flex overflow-hidden w-full py-4 mask-edges">
          <div className="animate-marquee flex gap-6 px-3">
            {[...testimonials, ...testimonials].map((testimonial, i) => (
              <motion.div key={i} whileHover={{ scale: 1.02 }} transition={{ type: "spring", stiffness: 400, damping: 30 }}>
                <Card variant="glass" className="w-[350px] sm:w-[400px] flex-shrink-0 gradient-border bg-white/50 dark:bg-white/5 dark:bg-black/20 backdrop-blur-xl h-full">
                  <CardContent className="p-8 h-full flex flex-col">
                    <div className="flex items-center gap-1 mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-base italic text-foreground mb-8 flex-grow">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4 mt-auto">
                      <div className="h-12 w-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-base font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PRICING SECTION ========== */}
      <section className="px-4 sm:px-6 py-20 sm:py-28 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants} className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Simple, <span className="gradient-text">transparent pricing</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto">Start for free, then scale with your users. No hidden fees or surprises.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">
            {/* Hobby */}
            <motion.div custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="h-full">
              <Card variant="glass" className="h-full bg-white/50 dark:bg-white/5 dark:bg-black/20 backdrop-blur-xl flex flex-col">
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold mb-2">Hobby</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-bold">$0</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {["Up to 1,000 users", "Community support", "Basic analytics", "1 project"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="glass" className="w-full rounded-xl py-6 text-base mt-auto bg-white/50 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10">Get Started</Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Pro */}
            <motion.div custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="relative z-20 md:-my-4 h-full">
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 rounded-[20px] blur-xl opacity-50 pointer-events-none" />
              <Card variant="glass" className="h-full gradient-border border-0 shadow-[0_0_40px_-10px_rgba(124,58,237,0.3)] relative bg-white/60 dark:bg-white/10 dark:bg-black/40 backdrop-blur-2xl flex flex-col">
                <div className="absolute -top-4 inset-x-0 flex justify-center">
                  <Badge className="bg-gradient-to-r from-purple-500 to-blue-500 border-0 text-white font-semibold px-4 py-1 text-sm shadow-lg">Most Popular</Badge>
                </div>
                <CardContent className="p-8 flex flex-col h-full pt-10">
                  <h3 className="text-2xl font-semibold mb-2 text-foreground">Pro</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-bold text-foreground">$29</span>
                    <span className="text-muted-foreground">/mo</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {["Unlimited users", "Priority email support", "Advanced analytics", "Unlimited projects", "Custom domains"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm font-medium">
                        <CheckCircle2 className="h-5 w-5 text-blue-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="gradient" className="w-full rounded-xl py-6 text-base mt-auto shadow-lg hover:shadow-xl transition-shadow">Start Free Trial</Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Enterprise */}
            <motion.div custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariants} className="h-full">
              <Card variant="glass" className="h-full bg-white/50 dark:bg-white/5 dark:bg-black/20 backdrop-blur-xl flex flex-col">
                <CardContent className="p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-semibold mb-2">Enterprise</h3>
                  <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-5xl font-bold">Custom</span>
                  </div>
                  <ul className="space-y-4 mb-8 flex-grow">
                    {["Dedicated infrastructure", "24/7 phone support", "Custom SLA", "Single Sign-On (SSO)"].map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle2 className="h-5 w-5 text-purple-400 shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="glass" className="w-full rounded-xl py-6 text-base mt-auto bg-white/50 dark:bg-white/5 hover:bg-black/5 dark:hover:bg-white/10">Contact Sales</Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== CTA SECTION ========== */}
      <section className="px-4 sm:px-6 pb-20 sm:pb-32 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUpVariants}>
            <Card variant="glass" className="text-center py-16 px-6 sm:px-10 relative overflow-hidden bg-white/50 dark:bg-white/5 dark:bg-black/20 backdrop-blur-xl gradient-border">
              <CardContent className="p-0">
                {/* Decorative shimmer */}
                <div className="absolute inset-0 shimmer opacity-30 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 pointer-events-none" />

                <h2 className="text-3xl sm:text-4xl font-bold mb-4 relative z-10">
                  Ready to <span className="gradient-text">get started</span>?
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground mb-10 max-w-lg mx-auto relative z-10">Clone the repo, install dependencies, and start building your next billion-dollar idea in under 2 minutes.</p>

                {/* Code snippet */}
                <div className="rounded-xl px-6 py-4 inline-flex items-center gap-4 text-sm sm:text-base font-mono text-muted-foreground relative z-10 shadow-inner bg-black/80 dark:bg-black/40 border border-black/20 dark:border-white/10">
                  <span className="text-emerald-400 select-none font-bold">$</span>
                  <code className="text-gray-200">npx create-next-app -e next-boilerplate</code>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
