import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, Users, Building2, Car, Shield, BarChart3, IndianRupee, Settings, Megaphone, Search, Ban } from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/admin/users")({
  head: () => ({ meta: [{ title: "Users — DriveX Admin" }] }),
  component: AdminUsers,
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

const users = [
  ["John Doe", "john@drivex.com", "Mumbai", "Buyer", "Active", "Mar 12, 2025"],
  ["Aarav Sharma", "aarav@mail.com", "Delhi", "Buyer", "Active", "Apr 02, 2025"],
  ["Royal Auto Mart", "owner@royalauto.in", "Mumbai", "Dealer", "Verified", "Jan 18, 2024"],
  ["Priya Nair", "priya@mail.com", "Bengaluru", "Buyer", "Suspended", "Feb 22, 2025"],
  ["Sundaram Motors", "ops@sundaram.in", "Chennai", "Dealer", "Pending", "May 02, 2026"],
];

function AdminUsers() {
  return (
    <DashboardShell title="Platform Admin" subtitle="Control center" items={items}>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-display text-2xl font-bold">Users</h1>
        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/50 w-72">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input className="bg-transparent outline-none text-sm w-full" placeholder="Search users..." />
        </div>
      </div>
      <div className="gradient-card glass rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase tracking-wider text-muted-foreground bg-secondary/30">
            <tr>
              <th className="text-left p-4">Name</th>
              <th className="text-left p-4 hidden md:table-cell">Email</th>
              <th className="text-left p-4 hidden lg:table-cell">City</th>
              <th className="text-left p-4">Role</th>
              <th className="text-left p-4">Status</th>
              <th className="text-left p-4 hidden lg:table-cell">Joined</th>
              <th className="text-right p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, i) => (
              <tr key={i} className="border-t border-border/40">
                <td className="p-4 font-semibold">{u[0]}</td>
                <td className="p-4 hidden md:table-cell text-muted-foreground">{u[1]}</td>
                <td className="p-4 hidden lg:table-cell">{u[2]}</td>
                <td className="p-4"><span className="px-2 py-0.5 rounded-md text-[11px] bg-secondary">{u[3]}</span></td>
                <td className="p-4"><span className={`px-2 py-0.5 rounded-md text-[11px] font-semibold ${u[4] === "Active" || u[4] === "Verified" ? "bg-success/15 text-success" : u[4] === "Pending" ? "bg-warning/15 text-warning" : "bg-destructive/15 text-destructive"}`}>{u[4]}</span></td>
                <td className="p-4 hidden lg:table-cell text-muted-foreground">{u[5]}</td>
                <td className="p-4 text-right"><Button size="sm" variant="outline" className="rounded-lg"><Ban className="w-3.5 h-3.5" /></Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}