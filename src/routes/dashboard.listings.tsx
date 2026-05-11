import { createFileRoute, Link } from "@tanstack/react-router";
import { LayoutDashboard, Heart, Car, MessageCircle, Calendar, Settings, Bell, Plus, Eye, Edit, Trash2 } from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";
import { cars, formatPrice } from "@/lib/cars-data";

export const Route = createFileRoute("/dashboard/listings")({
  head: () => ({ meta: [{ title: "My listings — DriveX" }] }),
  component: ListingsPage,
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

function ListingsPage() {
  const myCars = cars.slice(0, 2);
  return (
    <DashboardShell title="John Doe" subtitle="Buyer account" items={items}>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-display text-2xl font-bold">My listings</h1>
        <Link to="/sell"><Button className="rounded-lg gradient-primary text-primary-foreground"><Plus className="w-4 h-4 mr-2" />New listing</Button></Link>
      </div>
      <div className="grid gap-4">
        {myCars.map((c) => (
          <div key={c.id} className="gradient-card glass rounded-2xl p-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            <img src={c.image} alt={c.model} className="w-full sm:w-40 h-28 rounded-xl object-cover" />
            <div className="flex-1">
              <p className="font-display text-lg font-semibold">{c.brand} {c.model}</p>
              <p className="text-xs text-muted-foreground">{c.year} · {c.km.toLocaleString()} km · {c.city}</p>
              <p className="text-primary font-bold mt-1">{formatPrice(c.price)}</p>
            </div>
            <div className="flex items-center gap-4 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Eye className="w-3.5 h-3.5" /> 1.2k views</span>
              <span className="px-2 py-0.5 rounded-md bg-success/15 text-success font-semibold">Active</span>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" className="rounded-lg"><Edit className="w-3.5 h-3.5" /></Button>
              <Button variant="outline" size="sm" className="rounded-lg text-destructive"><Trash2 className="w-3.5 h-3.5" /></Button>
            </div>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}