"use client";

import { usePathname } from "next/navigation";
import { Footer } from "./footer/footer";
import { Navbar } from "./navbar/navbar";

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname.startsWith("/dashboard");

  if (isDashboard) {
    return (
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">{children}</main>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 pt-6">{children}</main>
      <Footer />
    </div>
  );
}
