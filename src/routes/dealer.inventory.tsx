import { createFileRoute, Link } from "@tanstack/react-router";
import {
  LayoutDashboard,
  Car,
  Users,
  BarChart3,
  MessageCircle,
  Calendar,
  Settings,
  Crown,
  Plus,
  Edit,
  Eye,
  Trash2,
} from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";
import { cars, formatPrice } from "@/lib/cars-data";

export const Route = createFileRoute("/dealer/inventory")({
  head: () => ({ meta: [{ title: "Inventory — DriveX Dealer" }] }),
  component: InventoryPage,
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

function InventoryPage() {
  return (
    <DashboardShell title="Royal Auto Mart" subtitle="Verified dealer" items={items}>
      <div className="flex items-center justify-between mb-5">
        <h1 className="font-display text-2xl font-bold">Inventory ({cars.length})</h1>
        <Link to="/sell">
          <Button className="rounded-lg gradient-primary text-primary-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Add car
          </Button>
        </Link>
      </div>
      <div className="gradient-card glass rounded-2xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="text-xs uppercase tracking-wider text-muted-foreground bg-secondary/30">
            <tr>
              <th className="text-left p-4">Car</th>
              <th className="text-left p-4 hidden md:table-cell">Year/KM</th>
              <th className="text-left p-4">Price</th>
              <th className="text-left p-4 hidden lg:table-cell">Views</th>
              <th className="text-left p-4">Status</th>
              <th className="text-right p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cars.map((c) => (
              <tr key={c.id} className="border-t border-border/40">
                <td className="p-4">
                  <div className="flex items-center gap-3">
                    <img src={c.image} alt="" className="w-12 h-12 rounded-lg object-cover" />
                    <div>
                      <p className="font-semibold">
                        {c.brand} {c.model}
                      </p>
                      <p className="text-xs text-muted-foreground">{c.variant}</p>
                    </div>
                  </div>
                </td>
                <td className="p-4 hidden md:table-cell text-muted-foreground">
                  {c.year} · {c.km.toLocaleString()} km
                </td>
                <td className="p-4 font-bold text-primary">{formatPrice(c.price)}</td>
                <td className="p-4 hidden lg:table-cell">
                  <span className="flex items-center gap-1">
                    <Eye className="w-3.5 h-3.5" />
                    {Math.floor(Math.random() * 2000 + 200)}
                  </span>
                </td>
                <td className="p-4">
                  <span className="px-2 py-0.5 rounded-md text-[11px] bg-success/15 text-success font-semibold">
                    Live
                  </span>
                </td>
                <td className="p-4 text-right">
                  <div className="inline-flex gap-1">
                    <Button variant="outline" size="sm" className="rounded-lg">
                      <Edit className="w-3.5 h-3.5" />
                    </Button>
                    <Button variant="outline" size="sm" className="rounded-lg text-destructive">
                      <Trash2 className="w-3.5 h-3.5" />
                    </Button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </DashboardShell>
  );
}
