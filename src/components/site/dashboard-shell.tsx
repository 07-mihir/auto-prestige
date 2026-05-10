import { Link, useRouterState } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import { Bell, Search } from "lucide-react";

export type NavItem = { to: string; label: string; icon: LucideIcon };

export function DashboardShell({ title, subtitle, items, children }: {
  title: string; subtitle: string; items: NavItem[]; children: React.ReactNode;
}) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="container mx-auto px-4 py-6">
      <div className="grid lg:grid-cols-[260px_1fr] gap-6">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="gradient-card glass rounded-2xl p-4">
            <div>
              <p className="text-xs uppercase tracking-wider text-primary font-semibold">{subtitle}</p>
              <h2 className="font-display text-xl font-bold mt-1">{title}</h2>
            </div>
            <nav className="mt-5 space-y-1">
              {items.map((i) => {
                const active = path === i.to || (i.to !== "/" && path.startsWith(i.to));
                return (
                  <Link key={i.to} to={i.to} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition ${active ? "bg-primary/15 text-primary" : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground"}`}>
                    <i.icon className="w-4 h-4" /> {i.label}
                  </Link>
                );
              })}
            </nav>
          </div>
        </aside>

        <div>
          <div className="glass rounded-2xl p-4 mb-4 flex items-center gap-3">
            <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input className="bg-transparent outline-none text-sm w-full" placeholder="Search..." />
            </div>
            <button className="relative w-10 h-10 rounded-lg glass flex items-center justify-center hover:text-primary">
              <Bell className="w-4 h-4" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-primary" />
            </button>
            <div className="w-10 h-10 rounded-lg gradient-primary flex items-center justify-center text-sm font-bold text-primary-foreground">JD</div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}

export function StatCard({ label, value, hint, icon: Icon, accent }: { label: string; value: string; hint?: string; icon: LucideIcon; accent?: "primary" | "success" | "accent" | "warning" }) {
  const tones: Record<string, string> = {
    primary: "from-primary/30 to-primary/5",
    success: "from-success/30 to-success/5",
    accent: "from-accent/30 to-accent/5",
    warning: "from-warning/30 to-warning/5",
  };
  return (
    <div className="gradient-card glass rounded-2xl p-5 relative overflow-hidden hover-lift">
      <div className={`absolute -right-10 -top-10 w-32 h-32 rounded-full bg-gradient-to-br ${tones[accent || "primary"]} blur-2xl opacity-50`} />
      <div className="relative">
        <div className="flex items-start justify-between">
          <p className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">{label}</p>
          <Icon className="w-4 h-4 text-primary" />
        </div>
        <p className="font-display text-3xl font-bold mt-3">{value}</p>
        {hint && <p className="text-xs text-muted-foreground mt-1">{hint}</p>}
      </div>
    </div>
  );
}
