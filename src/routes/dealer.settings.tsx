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
} from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/dealer/settings")({
  head: () => ({ meta: [{ title: "Settings — DriveX Dealer" }] }),
  component: DealerSettings,
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

function DealerSettings() {
  return (
    <DashboardShell title="Royal Auto Mart" subtitle="Verified dealer" items={items}>
      <h1 className="font-display text-2xl font-bold mb-5">Dealership settings</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="gradient-card glass rounded-2xl p-6">
          <h2 className="font-display font-semibold mb-4">Business profile</h2>
          <div className="space-y-3">
            {[
              ["Business name", "Royal Auto Mart"],
              ["GSTIN", "27ABCDE1234F1Z5"],
              ["Email", "owner@royalauto.in"],
              ["Phone", "+91 22 4000 1234"],
              ["City", "Mumbai"],
            ].map(([l, v]) => (
              <div key={l}>
                <label className="text-xs text-muted-foreground">{l}</label>
                <input
                  defaultValue={v}
                  className="w-full mt-1 bg-secondary/50 border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary"
                />
              </div>
            ))}
            <Button className="rounded-lg gradient-primary text-primary-foreground">Save</Button>
          </div>
        </div>
        <div className="gradient-card glass rounded-2xl p-6">
          <h2 className="font-display font-semibold mb-4">Notifications</h2>
          <div className="space-y-4">
            {[
              ["New lead alerts (SMS)", true],
              ["Auto-reply to enquiries", true],
              ["Daily performance email", true],
              ["Auction outbid alerts", false],
            ].map(([l, v]) => (
              <div key={l as string} className="flex items-center justify-between">
                <span className="text-sm">{l}</span>
                <Switch defaultChecked={v as boolean} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
