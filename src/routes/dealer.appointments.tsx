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
  Clock,
  MapPin,
} from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dealer/appointments")({
  head: () => ({ meta: [{ title: "Test drives — DriveX Dealer" }] }),
  component: AppointmentsPage,
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

const appts = [
  {
    customer: "Aarav Sharma",
    car: "BMW 5 Series 530i",
    date: "Tue, May 12 · 11:00 AM",
    loc: "Showroom — Mumbai",
    status: "Confirmed",
  },
  {
    customer: "Priya Nair",
    car: "Mercedes GLE 300d",
    date: "Wed, May 13 · 4:00 PM",
    loc: "Home pickup — Bandra",
    status: "Pending",
  },
  {
    customer: "Vikas Iyer",
    car: "Hyundai Ioniq 5",
    date: "Fri, May 15 · 10:30 AM",
    loc: "Showroom — Mumbai",
    status: "Confirmed",
  },
];

function AppointmentsPage() {
  return (
    <DashboardShell title="Royal Auto Mart" subtitle="Verified dealer" items={items}>
      <h1 className="font-display text-2xl font-bold mb-5">Test drive appointments</h1>
      <div className="grid gap-4">
        {appts.map((a, i) => (
          <div
            key={i}
            className="gradient-card glass rounded-2xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
          >
            <div>
              <p className="font-display text-lg font-semibold">{a.customer}</p>
              <p className="text-sm text-primary mt-0.5">{a.car}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mt-1">
                <Clock className="w-3.5 h-3.5" />
                {a.date}
              </p>
              <p className="text-sm text-muted-foreground flex items-center gap-2 mt-0.5">
                <MapPin className="w-3.5 h-3.5" />
                {a.loc}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span
                className={`px-2.5 py-1 rounded-md text-xs font-semibold ${a.status === "Confirmed" ? "bg-success/15 text-success" : "bg-warning/15 text-warning"}`}
              >
                {a.status}
              </span>
              <Button variant="outline" size="sm" className="rounded-lg">
                Details
              </Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
