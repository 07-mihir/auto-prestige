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
  TrendingUp,
  Eye,
  IndianRupee,
} from "lucide-react";
import { DashboardShell, StatCard } from "@/components/site/dashboard-shell";

export const Route = createFileRoute("/dealer/analytics")({
  head: () => ({ meta: [{ title: "Analytics — DriveX Dealer" }] }),
  component: AnalyticsPage,
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

function AnalyticsPage() {
  return (
    <DashboardShell title="Royal Auto Mart" subtitle="Verified dealer" items={items}>
      <h1 className="font-display text-2xl font-bold mb-5">Analytics</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <StatCard
          label="Conversion rate"
          value="6.8%"
          hint="+1.2%"
          icon={TrendingUp}
          accent="success"
        />
        <StatCard
          label="Avg. time to sell"
          value="14d"
          hint="-3 days"
          icon={Calendar}
          accent="primary"
        />
        <StatCard label="Profile views" value="42.1K" hint="+22%" icon={Eye} accent="accent" />
        <StatCard
          label="Avg. ticket size"
          value="₹38L"
          hint="+₹4L"
          icon={IndianRupee}
          accent="warning"
        />
      </div>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="gradient-card glass rounded-2xl p-6">
          <h2 className="font-display font-semibold mb-4">Revenue (last 12 months)</h2>
          <div className="h-56 flex items-end gap-2">
            {[40, 65, 50, 80, 70, 95, 75, 110, 90, 120, 100, 140].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md gradient-primary opacity-80"
                style={{ height: `${h}px` }}
              />
            ))}
          </div>
        </div>
        <div className="gradient-card glass rounded-2xl p-6">
          <h2 className="font-display font-semibold mb-4">Lead sources</h2>
          <div className="space-y-4">
            {[
              ["Organic search", 42],
              ["Direct", 28],
              ["Referrals", 18],
              ["Social", 12],
            ].map(([l, p]) => (
              <div key={l as string}>
                <div className="flex justify-between text-sm">
                  <span>{l}</span>
                  <span className="font-semibold">{p}%</span>
                </div>
                <div className="mt-1.5 h-2 rounded-full bg-secondary overflow-hidden">
                  <div
                    className="h-full gradient-primary rounded-full"
                    style={{ width: `${p}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
