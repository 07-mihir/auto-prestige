import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, Users, Building2, Car, Shield, BarChart3, IndianRupee, Settings, Megaphone, AlertTriangle } from "lucide-react";
import { DashboardShell, StatCard } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin — DriveX" }] }),
  component: AdminDashboard,
});

const items = [
  { to: "/admin", label: "Overview", icon: LayoutDashboard },
  { to: "/admin/users", label: "Users", icon: Users },
  { to: "/admin/dealers", label: "Dealers", icon: Building2 },
  { to: "/admin/listings", label: "Listings", icon: Car },
  { to: "/admin/fraud", label: "Fraud monitor", icon: Shield },
  { to: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/admin/revenue", label: "Revenue", icon: IndianRupee },
  { to: "/admin/ads", label: "Ads", icon: Megaphone },
  { to: "/admin/settings", label: "Settings", icon: Settings },
];

function AdminDashboard() {
  return (
    <DashboardShell title="Platform Admin" subtitle="Control center" items={items}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Total users" value="1.24M" hint="+8.2% this month" icon={Users} accent="primary" />
        <StatCard label="Verified dealers" value="12,480" hint="142 pending" icon={Building2} accent="accent" />
        <StatCard label="Active listings" value="58,210" hint="+1,200 today" icon={Car} accent="success" />
        <StatCard label="Revenue (MTD)" value="₹4.2 Cr" hint="+18% YoY" icon={IndianRupee} accent="warning" />
      </div>

      <div className="mt-6 grid lg:grid-cols-2 gap-4">
        <div className="gradient-card glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-semibold">Pending approvals</h2>
            <span className="text-xs px-2 py-1 rounded-md bg-warning/15 text-warning font-semibold">24 pending</span>
          </div>
          <ul className="space-y-3">
            {[
              ["Dealer verification", "Sundaram Motors · Coimbatore", "PAN, GST"],
              ["Listing review", "2024 Hyundai Creta · Chennai", "Photos low res"],
              ["Dispute report", "Buyer vs Seller · #DX23491", "High priority"],
              ["Fraud alert", "Multiple accounts · IP match", "Auto-flagged"],
            ].map(([title, sub, tag], i) => (
              <li key={i} className="flex items-center justify-between py-2 border-b border-border/40 last:border-0">
                <div>
                  <p className="text-sm font-semibold">{title}</p>
                  <p className="text-xs text-muted-foreground">{sub}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[11px] px-2 py-0.5 rounded-md bg-secondary">{tag}</span>
                  <Button size="sm" variant="outline" className="rounded-lg">Review</Button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="gradient-card glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-display text-lg font-semibold">Fraud signals</h2>
            <AlertTriangle className="w-5 h-5 text-warning" />
          </div>
          <div className="space-y-4">
            {[
              { l: "Suspicious listings detected", v: 12, p: 65 },
              { l: "Multi-account accounts", v: 4, p: 28 },
              { l: "Spam reports auto-resolved", v: 142, p: 88 },
              { l: "Image deepfake detection", v: 7, p: 45 },
            ].map((s) => (
              <div key={s.l}>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{s.l}</span>
                  <span className="font-semibold">{s.v}</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full gradient-primary rounded-full" style={{ width: `${s.p}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
