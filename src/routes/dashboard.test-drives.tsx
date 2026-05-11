import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, Heart, Car, MessageCircle, Calendar, Settings, Bell, MapPin, Clock } from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/test-drives")({
  head: () => ({ meta: [{ title: "Test drives — DriveX" }] }),
  component: TestDrivesPage,
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

const drives = [
  { car: "BMW 5 Series 530i", date: "Tue, May 12 · 11:00 AM", loc: "Royal Auto Mart, Mumbai", status: "Confirmed" },
  { car: "Mercedes GLE 300d", date: "Thu, May 14 · 4:30 PM", loc: "Sundaram Motors, Delhi", status: "Pending" },
  { car: "Hyundai Ioniq 5", date: "Sat, May 9 · 10:00 AM", loc: "Premier Cars, Pune", status: "Completed" },
];

function TestDrivesPage() {
  return (
    <DashboardShell title="John Doe" subtitle="Buyer account" items={items}>
      <h1 className="font-display text-2xl font-bold mb-5">Test drives</h1>
      <div className="grid gap-4">
        {drives.map((d, i) => (
          <div key={i} className="gradient-card glass rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <p className="font-display text-lg font-semibold">{d.car}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1"><Clock className="w-3.5 h-3.5" />{d.date}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mt-0.5"><MapPin className="w-3.5 h-3.5" />{d.loc}</p>
            </div>
            <div className="flex items-center gap-3">
              <span className={`px-2.5 py-1 rounded-md text-xs font-semibold ${d.status === "Confirmed" ? "bg-success/15 text-success" : d.status === "Pending" ? "bg-warning/15 text-warning" : "bg-secondary text-muted-foreground"}`}>{d.status}</span>
              <Button variant="outline" size="sm" className="rounded-lg">Reschedule</Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}