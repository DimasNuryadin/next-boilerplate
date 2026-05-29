import { siteConfig } from "@/config/site";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="px-6 py-8 mt-auto">
      <div className="glass rounded-2xl max-w-6xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {siteConfig.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-4">
          <Link href={siteConfig.github} target="_blank" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
