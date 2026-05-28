import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen pt-20">
      <Sidebar />
      <main className="flex-1 p-6 md:ml-64">{children}</main>
    </div>
  );
}
