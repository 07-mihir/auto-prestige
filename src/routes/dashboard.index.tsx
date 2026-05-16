import { createFileRoute, Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Heart,
  Car,
  MessageCircle,
  Calendar,
  Settings,
  Bell,
  Eye,
  TrendingUp,
} from "lucide-react";
import { DashboardShell, StatCard } from "@/components/site/dashboard-shell";
import { cars, formatPrice } from "@/lib/cars-data";
import { CarCard } from "@/components/site/car-card";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard/")({
  head: () => ({ meta: [{ title: "My dashboard — DriveX" }] }),
  component: UserDashboard,
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

function UserDashboard() {
  return (
    <DashboardShell title="John Doe" subtitle="Buyer account" items={items}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Wishlist" value="12" hint="+3 this week" icon={Heart} accent="primary" />
        <StatCard label="Listings" value="2" hint="1 active" icon={Car} accent="success" />
        <StatCard
          label="Inquiries"
          value="8"
          hint="2 unread"
          icon={MessageCircle}
          accent="accent"
        />
        <StatCard
          label="Test drives"
          value="3"
          hint="1 upcoming"
          icon={Calendar}
          accent="warning"
        />
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 gradient-card glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-lg font-semibold">Recently viewed</h2>
            <Link to="/buy" className="text-xs text-primary hover:underline">
              View all
            </Link>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {cars.slice(0, 2).map((c) => (
              <CarCard key={c.id} car={c} />
            ))}
          </div>
        </div>
        <div className="gradient-card glass rounded-2xl p-6">
          <h2 className="font-display text-lg font-semibold mb-4">Activity</h2>
          <ul className="space-y-4">
            {[
              { icon: Eye, text: "Viewed BMW 5 Series", time: "2h ago" },
              { icon: Heart, text: "Saved Mercedes GLE", time: "5h ago" },
              { icon: Calendar, text: "Booked test drive", time: "Yesterday" },
              { icon: TrendingUp, text: "Price dropped on saved car", time: "2d ago" },
            ].map((a, i) => (
              <li key={i} className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                  <a.icon className="w-4 h-4" />
                </div>
                <div className="flex-1">
                  <p className="text-sm">{a.text}</p>
                  <p className="text-[11px] text-muted-foreground">{a.time}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 gradient-card glass-strong rounded-2xl p-6 sm:p-8 relative overflow-hidden">
        <div
          className="absolute -right-20 -top-20 w-72 h-72 rounded-full"
          style={{ background: "var(--gradient-glow)" }}
        />
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4 justify-between">
          <div>
            <h3 className="font-display text-xl font-bold">List your car for free</h3>
            <p className="text-sm text-muted-foreground mt-1">
              Get an AI valuation and up to 8 dealer offers in 24 hours.
            </p>
          </div>
          <Link to="/sell">
            <Button className="rounded-lg gradient-primary text-primary-foreground shadow-glow">
              Sell my car
            </Button>
          </Link>
        </div>
      </div>
    </DashboardShell>
  );
}
