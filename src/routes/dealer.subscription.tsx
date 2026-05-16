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
  Check,
} from "lucide-react";
import { DashboardShell } from "@/components/site/dashboard-shell";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dealer/subscription")({
  head: () => ({ meta: [{ title: "Subscription — DriveX Dealer" }] }),
  component: SubPage,
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

const plans = [
  {
    name: "Starter",
    price: "₹4,999",
    period: "/mo",
    features: ["Up to 25 listings", "Basic analytics", "Email support"],
    current: false,
  },
  {
    name: "Pro",
    price: "₹14,999",
    period: "/mo",
    features: ["Up to 100 listings", "Advanced analytics", "Priority leads", "Dedicated manager"],
    current: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    features: ["Unlimited listings", "API access", "White-label", "24/7 support"],
    current: false,
  },
];

function SubPage() {
  return (
    <DashboardShell title="Royal Auto Mart" subtitle="Verified dealer" items={items}>
      <div className="gradient-card glass-strong rounded-2xl p-6 mb-6 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase text-primary font-semibold">Current plan</p>
          <h2 className="font-display text-2xl font-bold mt-1">Pro · ₹14,999/mo</h2>
          <p className="text-sm text-muted-foreground mt-1">Renews on 15 June 2026</p>
        </div>
        <Crown className="w-12 h-12 text-primary" />
      </div>
      <div className="grid md:grid-cols-3 gap-4">
        {plans.map((p) => (
          <div
            key={p.name}
            className={`gradient-card glass rounded-2xl p-6 ${p.current ? "ring-2 ring-primary" : ""}`}
          >
            <h3 className="font-display text-xl font-bold">{p.name}</h3>
            <p className="mt-2">
              <span className="text-3xl font-bold">{p.price}</span>
              <span className="text-muted-foreground">{p.period}</span>
            </p>
            <ul className="mt-4 space-y-2">
              {p.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm">
                  <Check className="w-4 h-4 text-success mt-0.5 shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <Link to="/pricing">
              <Button
                className={`w-full mt-5 rounded-lg ${p.current ? "" : "gradient-primary text-primary-foreground"}`}
                variant={p.current ? "outline" : "default"}
              >
                {p.current ? "Current plan" : "Upgrade"}
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </DashboardShell>
  );
}
