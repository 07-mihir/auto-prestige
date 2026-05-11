import { createFileRoute } from "@tanstack/react-router";
import { LayoutDashboard, Car, Users, BarChart3, MessageCircle, Calendar, Settings, Crown, TrendingUp, Eye, IndianRupee } from "lucide-react";
import { DashboardShell, StatCard } from "@/components/site/dashboard-shell";
import { cars, formatPrice } from "@/lib/cars-data";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dealer/")({
  head: () => ({ meta: [{ title: "Dealer dashboard — DriveX" }] }),
  component: DealerDashboard,
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

function DealerDashboard() {
  return (
    <DashboardShell title="Royal Auto Mart" subtitle="Verified dealer" items={items}>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard label="Active listings" value="48" hint="+5 this week" icon={Car} accent="primary" />
        <StatCard label="Leads (30d)" value="312" hint="+22%" icon={Users} accent="accent" />
        <StatCard label="Total views" value="14.2K" hint="+18% vs last month" icon={Eye} accent="success" />
        <StatCard label="Revenue (30d)" value="₹1.8 Cr" hint="12 cars sold" icon={IndianRupee} accent="warning" />
      </div>

      <div className="mt-6 grid lg:grid-cols-3 gap-4">
        <div className="lg:col-span-2 gradient-card glass rounded-2xl p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="font-display text-lg font-semibold">Inventory performance</h2>
            <select className="bg-secondary border border-border rounded-lg px-3 py-1.5 text-xs"><option>Last 30 days</option><option>Last 7 days</option></select>
          </div>
          {/* Mock chart */}
          <div className="h-48 flex items-end gap-2">
            {[40, 65, 50, 80, 70, 95, 75, 110, 90, 120, 100, 140].map((h, i) => (
              <div key={i} className="flex-1 rounded-t-md gradient-primary opacity-80 hover:opacity-100 transition" style={{ height: `${h}px` }} />
            ))}
          </div>
          <div className="flex justify-between text-[11px] text-muted-foreground mt-2">
            <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span><span>Dec</span>
          </div>
        </div>
        <div className="gradient-card glass rounded-2xl p-6">
          <h2 className="font-display text-lg font-semibold mb-4">Top performing</h2>
          <ul className="space-y-3">
            {cars.slice(0, 4).map((c) => (
              <li key={c.id} className="flex items-center gap-3">
                <img src={c.image} className="w-12 h-12 rounded-lg object-cover" alt="" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{c.model}</p>
                  <p className="text-[11px] text-muted-foreground">{formatPrice(c.price)}</p>
                </div>
                <div className="text-right">
                  <p className="text-xs font-bold text-success">+{Math.floor(Math.random() * 40 + 10)}%</p>
                  <p className="text-[10px] text-muted-foreground">views</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 gradient-card glass rounded-2xl p-6">
        <div className="flex items-center justify-between mb-5">
          <h2 className="font-display text-lg font-semibold">Recent leads</h2>
          <Button size="sm" className="rounded-lg gradient-primary text-primary-foreground">Add listing</Button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="text-xs uppercase tracking-wider text-muted-foreground">
              <tr className="border-b border-border">
                <th className="text-left py-3">Customer</th>
                <th className="text-left py-3">Interested in</th>
                <th className="text-left py-3">Budget</th>
                <th className="text-left py-3">Status</th>
                <th className="text-right py-3">Action</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["Aarav Sharma", "BMW 5 Series", "₹50L", "New"],
                ["Priya Nair", "Mercedes GLE", "₹70L", "Test drive"],
                ["Rahul Mehta", "VW Polo", "₹10L", "Negotiating"],
                ["Sneha Kapoor", "Land Rover Discovery", "₹75L", "Hot lead"],
              ].map(([name, car, budget, status], i) => (
                <tr key={i} className="border-b border-border/50">
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full gradient-primary flex items-center justify-center text-xs font-bold text-primary-foreground">{name[0]}</div>
                      <span>{name}</span>
                    </div>
                  </td>
                  <td className="py-3 text-muted-foreground">{car}</td>
                  <td className="py-3 font-medium">{budget}</td>
                  <td className="py-3"><span className="px-2 py-0.5 rounded-md text-[11px] bg-primary/15 text-primary">{status}</span></td>
                  <td className="py-3 text-right"><Button size="sm" variant="outline" className="rounded-lg">Reply</Button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardShell>
  );
}
