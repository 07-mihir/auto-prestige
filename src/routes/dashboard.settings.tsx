import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, Heart, Car, MessageCircle, Calendar, Settings, Bell } from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export const Route = createFileRoute("/dashboard/settings")({
  head: () => ({ meta: [{ title: "Settings — DriveX" }] }),
  component: SettingsPage,
});

const items = [
  { to: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/wishlist", label: "Wishlist", icon: Heart },
  { to: "/dashboard/listings", label: "My listings", icon: Car },
  { to: "/dashboard/inbox", label: "Messages", icon: MessageCircle },
  { to: "/dashboard/test-drives", label: "Test drives", icon: Calendar },
  { to: "/dashboard/notifications", label: "Notifications", icon: Bell },
  { to: "/dashboard/settings", label: "Settings", icon: Settings },
];

function SettingsPage() {
  return (
    <DashboardShell title="John Doe" subtitle="Buyer account" items={items}>
      <h1 className="font-display text-2xl font-bold mb-5">Account settings</h1>
      <div className="grid lg:grid-cols-2 gap-4">
        <div className="gradient-card glass rounded-2xl p-6">
          <h2 className="font-display font-semibold mb-4">Profile</h2>
          <div className="space-y-3">
            {[["Full name", "John Doe"], ["Email", "john@drivex.com"], ["Phone", "+91 98xxxxxx12"], ["City", "Mumbai"]].map(([l, v]) => (
              <div key={l}>
                <label className="text-xs text-muted-foreground">{l}</label>
                <input defaultValue={v} className="w-full mt-1 bg-secondary/50 border border-border rounded-lg px-3 py-2 text-sm outline-none focus:border-primary" />
              </div>
            ))}
            <Button className="rounded-lg gradient-primary text-primary-foreground">Save changes</Button>
          </div>
        </div>
        <div className="gradient-card glass rounded-2xl p-6">
          <h2 className="font-display font-semibold mb-4">Preferences</h2>
          <div className="space-y-4">
            {[
              ["Email notifications", true],
              ["SMS alerts for price drops", true],
              ["Marketing communications", false],
              ["Weekly digest", true],
            ].map(([l, v]) => (
              <div key={l as string} className="flex items-center justify-between">
                <span className="text-sm">{l}</span>
                <Switch defaultChecked={v as boolean} />
              </div>
            ))}
          </div>
          <div className="border-t border-border mt-6 pt-4">
            <Button variant="outline" className="rounded-lg text-destructive">Delete account</Button>
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}