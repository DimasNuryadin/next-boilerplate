export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="glass-card max-w-md w-full text-center space-y-4">
        <h1 className="text-4xl font-bold gradient-text">Next Boilerplate</h1>
        <p className="text-sm text-muted-foreground">A modern, production-ready Next.js boilerplate</p>
        <div className="flex gap-2 justify-center">
          <span className="glass px-3 py-1 rounded-full text-xs">Next.js 16</span>
          <span className="glass px-3 py-1 rounded-full text-xs">Jotai</span>
          <span className="glass px-3 py-1 rounded-full text-xs">OpenAPI</span>
        </div>
      </div>
    </main>
  );
}
