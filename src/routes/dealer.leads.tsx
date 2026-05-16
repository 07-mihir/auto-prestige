import { createFileRoute } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Car,
  Users,
  BarChart3,
  MessageCircle,
  Calendar,
  Settings,
  Crown,
  Phone,
  Mail,
} from "lucide-react";
import { DashboardShell, StatCard } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dealer/leads")({
  head: () => ({ meta: [{ title: "Leads — DriveX Dealer" }] }),
  component: LeadsPage,
});

const items = [
  { to: "/dealer", label: "Overview", icon: LayoutDashboard },
  { to: "/dealer/inventory", label: "Inventory", icon: Car },
  { to: "/dealer/leads", label: "Leads", icon: Users },
  { to: "/dealer/analytics", label: "Analytics", icon: BarChart3 },
  { to: "/dealer/inbox", label: "Messages", icon: MessageCircle },
  { to: "/dealer/appointments", label: "Test drives", icon: Calendar },
  { to: "/dealer/subscription", label: "Subscription", icon: Crown },
  { to: "/dealer/settings", label: "Settings", icon: Settings },
];

const leads = [
  ["Aarav Sharma", "BMW 5 Series", "₹50L", "Hot", "aarav@mail.com"],
  ["Priya Nair", "Mercedes GLE", "₹70L", "Test drive", "priya@mail.com"],
  ["Rahul Mehta", "VW Polo", "₹10L", "Negotiating", "rahul@mail.com"],
  ["Sneha Kapoor", "LR Discovery", "₹75L", "Hot", "sneha@mail.com"],
  ["Vikas Iyer", "Hyundai Ioniq 5", "₹42L", "New", "vikas@mail.com"],
];

function LeadsPage() {
  return (
    <DashboardShell title="Royal Auto Mart" subtitle="Verified dealer" items={items}>
      <div className="grid sm:grid-cols-4 gap-4 mb-6">
        <StatCard label="New" value="42" icon={Users} accent="primary" />
        <StatCard label="Hot" value="18" icon={Users} accent="warning" />
        <StatCard label="Converted" value="12" icon={Users} accent="success" />
        <StatCard label="Lost" value="7" icon={Users} accent="accent" />
      </div>
      <div className="gradient-card glass rounded-2xl p-6">
        <h2 className="font-display text-lg font-semibold mb-4">All leads</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-wider text-muted-foreground">
              <tr className="border-b border-border">
                <th className="text-left py-3">Customer</th>
                <th className="text-left py-3">Interested in</th>
                <th className="text-left py-3">Budget</th>
                <th className="text-left py-3">Status</th>
                <th className="text-right py-3">Contact</th>
              </tr>
            </thead>
            <tbody>
              {leads.map(([name, car, budget, status, email], i) => (
                <tr key={i} className="border-b border-border/40">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">
                        {name[0]}
                      </div>
                      <div>
                        <p>{name}</p>
                        <p className="text-[11px] text-muted-foreground">{email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 text-muted-foreground">{car}</td>
                  <td className="py-3 font-medium">{budget}</td>
                  <td className="py-3">
                    <span className="px-2 py-0.5 rounded-md text-[11px] bg-primary/15 text-primary">
                      {status}
                    </span>
                  </td>
                  <td className="py-3 text-right">
                    <div className="inline-flex gap-1">
                      <Button size="sm" variant="outline" className="rounded-lg">
                        <Phone className="w-3.5 h-3.5" />
                      </Button>
                      <Button size="sm" variant="outline" className="rounded-lg">
                        <Mail className="w-3.5 h-3.5" />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
