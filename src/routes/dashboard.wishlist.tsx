import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, Heart, Car, MessageCircle, Calendar, Settings, Bell } from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { CarCard } from "@/components/site/car-card";
import { cars } from "@/lib/cars-data";

export const Route = createFileRoute("/dashboard/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — DriveX" }] }),
  component: WishlistPage,
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

function WishlistPage() {
  return (
    <DashboardShell title="John Doe" subtitle="Buyer account" items={items}>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-display text-2xl font-bold">Your wishlist</h1>
        <p className="text-sm text-muted-foreground">{cars.length} saved cars</p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {cars.map((c) => <CarCard key={c.id} car={c} />)}
      </div>
    </DashboardShell>
  );
}